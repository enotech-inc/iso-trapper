import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = "tsx", title = "Example" }: CodeBlockProps) {
  // Tracks ephemeral copy feedback for the inline action button.
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    // Clipboard API is optional in some browsers and SSR contexts.
    if (typeof navigator === "undefined" || !navigator.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl shadow-slate-900/20">
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
          {title} · {language}
        </p>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-md border border-slate-700 px-2.5 py-1 text-xs font-medium text-slate-300 transition hover:border-slate-500 hover:text-white"
          aria-label="Copy code to clipboard"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-6 text-slate-100">
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  );
}
