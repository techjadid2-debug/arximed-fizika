import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import { cn } from "@/lib/utils";

interface MathContentProps {
  content: string;
  className?: string;
}

export function MathContent({ content, className }: MathContentProps) {
  return (
    <div
      className={cn(
        "text-sm leading-7 text-zinc-300 [&_.katex]:text-zinc-100 [&_.katex-display]:my-3 [&_.katex-display]:overflow-x-auto [&_p]:my-0",
        className,
      )}
    >
      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
