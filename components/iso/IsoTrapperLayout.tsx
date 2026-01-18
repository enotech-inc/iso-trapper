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
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-8">
        <div>{navigation}</div>
        <div className="flex flex-col gap-10">
          <div>{action}</div>
          <div>{content}</div>
          <div>{feedback}</div>
        </div>
      </div>
    </div>
  );
}
