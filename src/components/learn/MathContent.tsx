import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import { cn } from "@/lib/utils";

interface MathContentProps {
  content: string;
  className?: string;
  inline?: boolean;
}

export function MathContent({ content, className, inline = false }: MathContentProps) {
  return (
    <div
      className={cn(
        "text-sm leading-6 text-foreground/90 [&_.katex]:text-foreground [&_.katex-display]:my-2.5 [&_.katex-display]:overflow-x-auto [&_p]:my-0",
        inline && "inline-block align-baseline [&_p]:inline",
        className,
      )}
    >
      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
