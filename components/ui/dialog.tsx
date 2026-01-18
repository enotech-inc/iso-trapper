import { Dialog } from "@headlessui/react";
import type { ReactNode } from "react";

interface BaseDialogProps {
  open: boolean;
  onClose: (value: boolean) => void;
  title: string;
  description?: string;
  children: ReactNode;
}

export function BaseDialog({
  open,
  onClose,
  title,
  description,
  children,
}: BaseDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_30px_60px_rgba(15,23,42,0.2)]">
          <Dialog.Title className="text-lg font-semibold text-slate-900">
            {title}
          </Dialog.Title>
          {description ? (
            <Dialog.Description className="mt-2 text-sm text-slate-500">
              {description}
            </Dialog.Description>
          ) : null}
          <div className="mt-4">{children}</div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
