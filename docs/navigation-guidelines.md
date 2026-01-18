# Navigation system recommendations

## Goals
- Make the primary sections (Explore, Collections, Screens, Resources) immediately discoverable.
- Keep the structure shallow so users can scan and switch sections quickly.
- Provide consistent visual and interaction patterns across all sections.

## Proposed layout
### Global header (primary navigation)
- **Placement:** Top of every page, left-aligned logo + right-aligned primary nav items.
- **Items:** Explore, Collections, Screens, Resources.
- **Behavior:** Sticky on scroll for faster section switching.
- **Visual treatment:**
  - Use clear text labels (no icons-only) with adequate spacing.
  - Highlight the active section with a strong indicator (underline or pill).
  - Keep the nav height consistent to reduce layout shift.

### Secondary navigation (contextual)
- **Placement:** Below the primary nav within each section.
- **Content:** Section-specific filters or subcategories (e.g., Explore → Trending, New, Curated; Collections → by theme, industry; Screens → by platform, device; Resources → tutorials, guidelines, assets).
- **Behavior:** Scrollable tabs if needed, but limit to 6–8 items to avoid clutter.

### Mobile layout
- **Pattern:** Collapsible menu (hamburger) with all four primary sections at top level.
- **Behavior:**
  - Menu items are large enough for touch (44px height).
  - The active section is visually distinct.
  - Secondary nav appears after selecting a section to reduce overload.

## Labeling and hierarchy
- **Primary labels:** Keep exact section names: **Explore**, **Collections**, **Screens**, **Resources**.
- **Hierarchy:**
  - Level 1: Primary sections (global).
  - Level 2: Section-specific categories (contextual).
  - Level 3: Filters/sorting (e.g., “Most popular”, “Newest”).
- **Consistency:** Use title case for labels, keep to 1–2 words whenever possible.

## Interaction design
- **Active state:**
  - Persistent highlight for the current section.
  - Use color + typography weight for clarity (not color alone).
- **Hover and focus:**
  - Hover: subtle background/underline change.
  - Focus: visible outline for keyboard accessibility.
- **Transition behavior:**
  - Instant feedback on click.
  - Smooth route transitions (100–200ms) without animation overload.

## Usability best practices
- **Predictable placement:** Keep navigation in the same location across all pages.
- **Reduce choice overload:** Use fewer, clearer labels; avoid nested mega menus unless content demands it.
- **Progressive disclosure:** Show filters and secondary items only when relevant.
- **Search integration:** If a global search exists, place it in the header with a clear input label.
- **Accessibility:**
  - Ensure 4.5:1 text contrast.
  - Provide ARIA labels for nav containers and expandable controls.
  - Maintain keyboard navigation order (logo → primary nav → secondary nav → content).

## Example structure
- **Header**
  - Logo
  - Explore
  - Collections
  - Screens
  - Resources
  - Search
- **Explore (secondary)**
  - Trending
  - New
  - Curated
- **Collections (secondary)**
  - Themes
  - Industries
  - Teams
- **Screens (secondary)**
  - Web
  - iOS
  - Android
  - Desktop
- **Resources (secondary)**
  - Tutorials
  - Guidelines
  - Assets

## Implementation checklist
- [ ] Global header with sticky behavior and active state
- [ ] Consistent typography and spacing for nav items
- [ ] Mobile drawer with clear section grouping
- [ ] Section-specific secondary nav with 6–8 items max
- [ ] Full keyboard and screen-reader support
- [ ] Visual tests for active/hover/focus states
