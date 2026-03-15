import { Section } from "../layout/Section";
import { CodeBlock } from "../ui/code-block";

const integrationCode = `import { TrapDock, TrapFocusPath } from "isotrapper";

export function WorkspaceShell() {
  return (
    <TrapDock side="right" width={360}>
      <TrapFocusPath loop>
        <InspectorPanel />
      </TrapFocusPath>
    </TrapDock>
  );
}`;

export function CodeExampleSection() {
  return (
    <Section
      id="code"
      eyebrow="Code Examples"
      title="Implementation patterns developers can trust"
      description="Readable snippets, stable APIs, and practical defaults for production workflows."
    >
      <CodeBlock code={integrationCode} title="Composed traps" language="tsx" />
    </Section>
  );
}
