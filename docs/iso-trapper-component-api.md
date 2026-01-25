# Iso Trapper Component API Design

This document defines a component-level API blueprint for the Iso Trapper-inspired UI system. It is optimized for a modern image‑centric product (gallery/asset manager) and provides structured specifications that are implementation-ready.

## Contents
- [Design principles](#design-principles)
- [Shared conventions](#shared-conventions)
- [Component specs](#component-specs)
  - [Button](#button)
  - [Surface](#surface)
  - [GalleryGrid](#gallerygrid)
  - [GalleryCard](#gallerycard)
  - [AssetDetailPanel](#assetdetailpanel)
  - [SearchFilterBar](#searchfilterbar)
  - [BulkActionToolbar](#bulkactiontoolbar)
- [Design token → Tailwind mapping](#design-token--tailwind-mapping)

---

## Design principles
1. **Image-first clarity**: imagery is the primary content; UI chrome is minimal yet discoverable.
2. **Predictable interaction**: consistent states, focus behavior, and keyboard patterns.
3. **Token-driven consistency**: spacing, type, color, and elevation are authored in tokens and consumed via Tailwind utility classes.

---

## Shared conventions
### Props conventions
- `className?: string` for utility overrides.
- `asChild?: boolean` for polymorphic components that can render as a different element.
- `size?: 'xs' | 'sm' | 'md' | 'lg'` for consistent sizing options.
- `tone?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger'` for semantic color usage.
- `disabled?: boolean` for all interactive components.
- `id?: string` for accessibility and test targeting.

### State machine conventions
- Each component documents **states**, **events**, and **transitions**.
- Events are standardized: `FOCUS`, `BLUR`, `HOVER_IN`, `HOVER_OUT`, `PRESS`, `RELEASE`, `SELECT`, `DESELECT`, `LOAD`, `ERROR`, `RETRY`.

---

## Component specs

### Button
**Purpose**: Primary and secondary actions. Supports icon-only, destructive, and loading states.

**Props**
- `variant?: 'solid' | 'outline' | 'ghost'` — visual treatment.
- `tone?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger'` — semantic color mapping.
- `size?: 'xs' | 'sm' | 'md' | 'lg'` — padding and typography scale.
- `loading?: boolean` — shows spinner and disables interaction.
- `icon?: ReactNode` — optional leading icon.
- `iconOnly?: boolean` — square button, hides text from visual layout (but keeps accessible label).
- `disabled?: boolean` — disables interaction.
- `onClick?: () => void` — action handler.

**State machine**
- **States**: `idle`, `hover`, `focus`, `pressed`, `loading`, `disabled`.
- **Events**: `HOVER_IN`, `HOVER_OUT`, `FOCUS`, `BLUR`, `PRESS`, `RELEASE`, `LOAD`, `DISABLE`, `ENABLE`.
- **Transitions**:
  - `idle` → `hover` on `HOVER_IN`.
  - `hover` → `idle` on `HOVER_OUT`.
  - `idle|hover` → `focus` on `FOCUS`.
  - `focus` → `idle` on `BLUR`.
  - `focus|hover|idle` → `pressed` on `PRESS`.
  - `pressed` → `idle` on `RELEASE`.
  - `*` → `loading` on `LOAD`.
  - `loading` → `idle` on `RELEASE`.
  - `*` → `disabled` on `DISABLE`.
  - `disabled` → `idle` on `ENABLE`.

**Token → Tailwind**
- Background: `bg-surface-primary` (solid) / `bg-transparent` (ghost)
- Border: `border border-border-subtle` (outline)
- Radius: `rounded-md`
- Typography: `text-sm font-medium`
- Spacing: `px-3 py-2` (md)
- States: `hover:bg-surface-primary-hover`, `focus-visible:ring-2 focus-visible:ring-accent`

---

### Surface
**Purpose**: Generic container with consistent elevation and padding.

**Props**
- `elevation?: 'flat' | 'raised' | 'overlay'` — visual depth.
- `padding?: 'none' | 'sm' | 'md' | 'lg'` — internal spacing.
- `tone?: 'neutral' | 'glass'` — background style.

**State machine**
- **States**: `default`, `interactive-hover`, `interactive-focus`.
- **Events**: `HOVER_IN`, `HOVER_OUT`, `FOCUS`, `BLUR`.
- **Transitions**: `default` ↔ `interactive-hover`; `default` ↔ `interactive-focus`.

**Token → Tailwind**
- Base: `bg-surface-neutral text-foreground`
- Glass: `bg-surface-glass/60 backdrop-blur-md`
- Elevation: `shadow-sm` (raised), `shadow-lg` (overlay)
- Padding: `p-0`, `p-3`, `p-5`, `p-8`

---

### GalleryGrid
**Purpose**: Responsive image grid with density modes and virtualization support.

**Props**
- `items: Array<GalleryItem>` — data source (id, src, title, metadata).
- `density?: 'comfortable' | 'dense'` — grid spacing and card size.
- `columns?: number` — override responsive column count.
- `virtualized?: boolean` — enables windowed rendering.
- `onSelect?: (id: string) => void` — selection handler.
- `selectedIds?: string[]` — controlled selection.

**State machine**
- **States**: `idle`, `selecting`, `loading`, `empty`.
- **Events**: `LOAD`, `SELECT`, `DESELECT`, `ERROR`.
- **Transitions**:
  - `idle` → `loading` on `LOAD`.
  - `loading` → `idle` on success; → `empty` on no data; → `idle` on error.
  - `idle` ↔ `selecting` on `SELECT`/`DESELECT`.

**Token → Tailwind**
- Layout: `grid auto-rows-max`
- Gap: `gap-4` (comfortable) / `gap-2` (dense)
- Columns: `grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6`

---

### GalleryCard
**Purpose**: Primary unit for displaying an image with quick actions and metadata.

**Props**
- `item: GalleryItem` — image source and metadata.
- `selected?: boolean` — selection state.
- `density?: 'comfortable' | 'dense'` — layout variant.
- `onSelect?: (id: string) => void` — selection toggle.
- `onOpen?: (id: string) => void` — open detail view.
- `actions?: ReactNode` — custom action buttons.

**State machine**
- **States**: `idle`, `hover`, `focus`, `selected`, `loading`.
- **Events**: `HOVER_IN`, `HOVER_OUT`, `FOCUS`, `BLUR`, `SELECT`, `DESELECT`, `LOAD`.
- **Transitions**:
  - `idle` → `hover` on `HOVER_IN`.
  - `hover` → `idle` on `HOVER_OUT`.
  - `idle|hover` → `focus` on `FOCUS`.
  - `focus` → `idle` on `BLUR`.
  - `idle|hover|focus` → `selected` on `SELECT`.
  - `selected` → `idle` on `DESELECT`.
  - `*` → `loading` on `LOAD`.

**Token → Tailwind**
- Container: `relative rounded-lg bg-surface-neutral shadow-sm`
- Hover: `hover:shadow-md hover:-translate-y-0.5 transition`
- Selected: `ring-2 ring-accent`
- Metadata overlay: `bg-surface-glass/70 backdrop-blur-sm`

---

### AssetDetailPanel
**Purpose**: Detailed view for a selected asset with metadata editing.

**Props**
- `assetId: string` — target asset.
- `open: boolean` — controlled visibility.
- `onClose: () => void` — close handler.
- `sections?: Array<'preview' | 'metadata' | 'tags' | 'transformations' | 'activity'>` — visible sections.

**State machine**
- **States**: `closed`, `opening`, `open`, `saving`, `error`.
- **Events**: `OPEN`, `CLOSE`, `SAVE`, `SUCCESS`, `ERROR`.
- **Transitions**:
  - `closed` → `opening` on `OPEN`.
  - `opening` → `open` on `SUCCESS`.
  - `open` → `saving` on `SAVE`.
  - `saving` → `open` on `SUCCESS`.
  - `saving` → `error` on `ERROR`.
  - `open|error` → `closed` on `CLOSE`.

**Token → Tailwind**
- Panel: `bg-surface-neutral shadow-lg rounded-xl`
- Sections: `divide-y divide-border-subtle`
- Header: `sticky top-0 bg-surface-neutral/90 backdrop-blur-md`

---

### SearchFilterBar
**Purpose**: Search input with filter controls and active filter chips.

**Props**
- `value: string` — controlled search value.
- `onChange: (value: string) => void` — input handler.
- `filters?: FilterConfig[]` — filter definitions.
- `activeFilters?: FilterValue[]` — currently applied filters.
- `onFilterChange?: (filters: FilterValue[]) => void` — filter handler.

**State machine**
- **States**: `idle`, `typing`, `filtering`.
- **Events**: `INPUT`, `FILTER_APPLY`, `FILTER_CLEAR`.
- **Transitions**:
  - `idle` → `typing` on `INPUT`.
  - `typing` → `filtering` on `FILTER_APPLY`.
  - `filtering` → `idle` on `FILTER_CLEAR`.

**Token → Tailwind**
- Container: `flex items-center gap-3`
- Input: `bg-surface-neutral border border-border-subtle rounded-md px-3 py-2`
- Chips: `rounded-full bg-surface-primary/10 text-sm px-2 py-1`

---

### BulkActionToolbar
**Purpose**: Bulk selection actions with confirmations.

**Props**
- `count: number` — number of selected items.
- `actions: Array<{ label: string; onClick: () => void; tone?: Tone }>` — action list.
- `onClear: () => void` — clears selection.

**State machine**
- **States**: `hidden`, `visible`, `confirming`.
- **Events**: `SELECT`, `CLEAR`, `CONFIRM`, `CANCEL`.
- **Transitions**:
  - `hidden` → `visible` on `SELECT`.
  - `visible` → `hidden` on `CLEAR`.
  - `visible` → `confirming` on `CONFIRM`.
  - `confirming` → `visible` on `CANCEL`.

**Token → Tailwind**
- Bar: `fixed bottom-4 inset-x-4 bg-surface-neutral shadow-lg rounded-xl`
- Count badge: `bg-surface-primary/10 text-sm px-2 py-1 rounded-full`
- Actions: `gap-2`

---

## Design token → Tailwind mapping
### Color tokens
| Token | Tailwind class | Usage |
| --- | --- | --- |
| `surface.neutral` | `bg-surface-neutral` | Main surfaces |
| `surface.primary` | `bg-surface-primary` | Primary actions |
| `surface.glass` | `bg-surface-glass/60` | Overlays |
| `border.subtle` | `border-border-subtle` | Card boundaries |
| `text.foreground` | `text-foreground` | Main text |
| `accent.primary` | `ring-accent` | Focus/selection |

### Spacing tokens
| Token | Tailwind class | Usage |
| --- | --- | --- |
| `space.2` | `p-2` | Tight padding |
| `space.3` | `p-3` | Default padding |
| `space.5` | `p-5` | Comfortable padding |
| `space.8` | `p-8` | Spacious sections |

### Typography tokens
| Token | Tailwind class | Usage |
| --- | --- | --- |
| `type.body` | `text-sm leading-5` | Body text |
| `type.heading` | `text-lg font-semibold` | Section headers |
| `type.meta` | `text-xs text-muted` | Secondary metadata |

### Elevation tokens
| Token | Tailwind class | Usage |
| --- | --- | --- |
| `elevation.flat` | `shadow-none` | Flat surfaces |
| `elevation.raised` | `shadow-sm` | Cards and panels |
| `elevation.overlay` | `shadow-lg` | Floating overlays |

---

## Data types (reference)
```ts
export type Tone = 'neutral' | 'primary' | 'success' | 'warning' | 'danger'

export type GalleryItem = {
  id: string
  src: string
  title: string
  alt?: string
  metadata?: Record<string, string>
}

export type FilterConfig = {
  id: string
  label: string
  type: 'select' | 'multi-select' | 'date' | 'range'
  options?: Array<{ label: string; value: string }>
}

export type FilterValue = {
  id: string
  value: string | string[] | { from?: string; to?: string }
}
```
