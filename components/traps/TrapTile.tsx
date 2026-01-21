import type { ReactNode } from "react";
import { Card } from "../ui/card";

interface TrapTileProps {
  title: string;
  description: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function TrapTile({ title, description, children, footer }: TrapTileProps) {
  return (
    <Card className="space-y-6 p-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-[color:var(--text-primary)]">{title}</h3>
        <p className="text-sm text-[color:var(--text-muted)]">{description}</p>
      </div>
      <div>{children}</div>
      {footer ? <div className="pt-2">{footer}</div> : null}
    </Card>
  );
}
