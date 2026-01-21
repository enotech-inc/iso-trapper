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
    <Card className="space-y-6 border-slate-800 bg-slate-900/70 p-6 text-slate-200">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-slate-300">{description}</p>
      </div>
      <div>{children}</div>
      {footer ? <div className="pt-2">{footer}</div> : null}
    </Card>
  );
}
