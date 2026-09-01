"use client";

import katex from "katex";
import { useMemo } from "react";

import { cn } from "@/lib/utils";

interface InlineMathProps {
  latex: string;
  display?: boolean;
  className?: string;
}

export function InlineMath({ latex, display = false, className }: InlineMathProps) {
  const html = useMemo(
    () =>
      katex.renderToString(latex, {
        displayMode: display,
        throwOnError: false,
        output: "html",
      }),
    [latex, display],
  );

  return (
    <span
      className={cn(
        display
          ? "block overflow-x-auto py-1 text-center [&_.katex-display]:my-0"
          : "inline-block align-baseline",
        className,
      )}
      // katex.renderToString sanitises its own output; input is authored content.
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
