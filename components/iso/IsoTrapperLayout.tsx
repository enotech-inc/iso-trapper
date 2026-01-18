import type { ReactNode } from "react";

interface IsoTrapperLayoutProps {
  navigation: ReactNode;
  action: ReactNode;
  content: ReactNode;
  feedback: ReactNode;
}

export function IsoTrapperLayout({
  navigation,
  action,
  content,
  feedback,
}: IsoTrapperLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <div className="lg:row-span-2">{navigation}</div>
          <div>{action}</div>
          <div>{content}</div>
        </div>
        <div>{feedback}</div>
      </div>
    </div>
  );
}
