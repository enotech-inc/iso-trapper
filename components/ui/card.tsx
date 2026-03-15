import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 ${className}`}
      {...props}
    />
  );
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ className = "", ...props }: CardHeaderProps) {
  return <div className={`space-y-2 ${className}`} {...props} />;
}

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export function CardTitle({ className = "", ...props }: CardTitleProps) {
  return (
    <h3
      className={`text-lg font-semibold tracking-tight text-slate-900 dark:text-white ${className}`}
      {...props}
    />
  );
}

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

export function CardDescription({ className = "", ...props }: CardDescriptionProps) {
  return (
    <p className={`text-sm leading-6 text-slate-600 dark:text-slate-300 ${className}`} {...props} />
  );
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

export function CardContent({ className = "", ...props }: CardContentProps) {
  return <div className={`text-sm text-slate-700 dark:text-slate-200 ${className}`} {...props} />;
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

export function CardFooter({ className = "", ...props }: CardFooterProps) {
  return <div className={`mt-4 flex items-center gap-2 ${className}`} {...props} />;
}
