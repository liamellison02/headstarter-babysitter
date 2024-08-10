import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { createElement, HTMLProps } from "react";
import Markdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeReact from "rehype-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type MessageProps = HTMLProps<HTMLDivElement> & {
  role: "user" | "assistant";
  message: string;
};

export default function Message({
  role,
  message,
  className,
  ...props
}: MessageProps) {
  return (
    <div
      {...props}
      className={cn(
        "w-full max-w-xl flex flex-row gap-4 bg-purple rounded-bl-xl rounded-tr-xl p-4",
        role == "user" &&
          "ml-auto rounded-br-xl rounded-tl-xl rounded-bl-none rounded-tr-none bg-lightPurple",
        className
      )}
    >
      <Avatar>
        <AvatarImage></AvatarImage>
        <AvatarFallback>{role === "user" ? "U" : "AI"}</AvatarFallback>
      </Avatar>
      {/*  */}
      <Markdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[
          rehypeKatex,
          rehypeRaw,
          [rehypeReact, { createElement: createElement }],
        ]}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <div className="flex flex-col bg-davy rounded-xl">
                <div className="text-sm text-davy px-4 py-2 bg-lightPurple rounded-t-md">
                  {match[1]}
                </div>
                {/* @ts-ignore */}
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  // eslint-disable-next-line react/no-children-prop
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  style={atomDark}
                  codeTagProps={{ className: "text-sm" }}
                />
              </div>
            ) : (
              <pre className="p-2 px-4 bg-davy w-full rounded-lg">
                <code {...rest} className={cn("text-sm", className)}>
                  {children}
                </code>
              </pre>
            );
          },
          ul(props) {
            return (
              <ul
                className="list-outside list-disc py-2 md:ml-3 space-y-2"
                {...props}
              />
            );
          },
          ol(props) {
            return (
              <ol
                className="list-outside list-decimal py-2 md:ml-3 space-y-2"
                {...props}
              />
            );
          },
          li(props) {
            return <li className="pl-2 md:border-l-2 border-davy" {...props} />;
          },
        }}
        className={cn("text-lg flex-1", role == "user" && "text-black")}
      >
        {message}
      </Markdown>
    </div>
  );
}
