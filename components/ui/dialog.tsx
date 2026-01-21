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
      <div className="fixed inset-0 bg-[color:var(--surface-strong)] opacity-70 backdrop-blur-sm" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-card-strong)]">
          <Dialog.Title className="text-lg font-semibold text-[color:var(--text-primary)]">
            {title}
          </Dialog.Title>
          {description ? (
            <Dialog.Description className="mt-2 text-sm text-[color:var(--text-soft)]">
              {description}
            </Dialog.Description>
          ) : null}
          <div className="mt-4">{children}</div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
