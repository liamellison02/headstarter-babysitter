"use client";

import { Button } from "@/components/ui/button";
import { Message, useChat } from "ai/react";
import { createContext, SVGProps } from "react";

export const MessagesContext = createContext<Message[]>([]);

export default function ChatForm({ children }: { children?: React.ReactNode }) {
  const { isLoading, setInput, input, handleSubmit, messages } = useChat({
    api: "https://rag-api-ogv3.onrender.com/chat/",
  });

  return (
    <MessagesContext.Provider value={messages}>
      {children}
      <div className="w-full max-w-xl mx-auto">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="fixed max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:bottom-0 bottom-12 w-full max-w-xl bg-davy shadow-2xl shadow-davy p-4 rounded-xl"
        >
          <p className="w-full text-center text-sm text-muted">
            You&apos;re in public mode. Other silly goose will see your antics .
          </p>
          <div className="relative flex flex-row gap-1 items-end p-4 border border-muted rounded-xl">
            <textarea
              name="input"
              rows={2}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full resize-y min-h-12 max-h-40 focus-visible:outline-none scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white"
            ></textarea>

            <Button
              className="p-2 h-fit w-fit bg-[#3E3A53]"
              variant={"ghost"}
              size={"icon"}
              type="submit"
              disabled={isLoading}
            >
              <MaterialSymbolsSendOutline className="w-5 h-5" />
            </Button>
          </div>
        </form>
      </div>
    </MessagesContext.Provider>
  );
}

export function MaterialSymbolsSendOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M3 20V4l19 8zm2-3l11.85-5L5 7v3.5l6 1.5l-6 1.5zm0 0V7z"
      ></path>
    </svg>
  );
}
