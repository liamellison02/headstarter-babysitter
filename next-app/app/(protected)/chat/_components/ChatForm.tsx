"use client";

import { Button } from "@/components/ui/button";
import { createContext, SVGProps } from "react";

export const MessagesContext = createContext<
  {
    id: string;
    content: string;
    role: "user" | "assistant";
    createdAt: string;
  }[]
>([]);

const data: {
  id: string;
  content: string;
  role: "user" | "assistant";
  createdAt: string;
}[] = [
  {
    content: "Hello LLama",
    role: "user",
    createdAt: "2024-01-22T13:30:45.642Z",
    id: "UfFk2ok",
  },
  {
    content: "Is anyone there?",
    role: "user",
    createdAt: "2024-01-22T13:31:31.778Z",
    id: "aRSlUQw",
  },
  {
    id: "0BWlhWt",
    createdAt: "2024-01-22T13:31:50.428Z",
    content:
      " Hello! I'm here to assist you. My name is LLaMA, and I'm a large language model trained by a team of researcher at Meta AI. My primary function is to understand and respond to human input in a helpful and informative way. I can answer questions, provide information, and even engage in conversation. Is there anything specific you would like to know or discuss?",
    role: "assistant",
  },
  {
    content:
      "I'd like to know the keypoints of a web application with the best user experience",
    role: "user",
    createdAt: "2024-01-22T13:32:57.162Z",
    id: "mVm57ws",
  },
  {
    id: "Hp1ohUZ",
    createdAt: "2024-01-22T13:32:58.259Z",
    content:
      " Sure, I can help you with that! Here are some key points to consider when designing a web application with a focus on user experience:\n\n1. Clear Navigation: The navigation menu should be easy to use and understand, with clear labels and intuitive grouping of pages. It's also important to provide a search bar for users who prefer to find what they need quickly.\n2. Responsive Design: The application should be responsive, meaning it adapts well to different screen sizes and devices (laptops, tablets, smartphones). This ensures that users have a good experience regardless of how they choose to access the application.\n3. Intuitive Interface: The interface should be clean, simple, and consistent throughout the application. Use clear and recognizable icons, and make sure form fields are easy to fill out and submit.\n4. Helpful Feedback: Provide immediate feedback to users as they interact with the application. For example, display a message or animation when a form is submitted successfully, or provide real-time updates as data is loaded or saved.\n5. Load Time: Ensure that the application loads quickly and efficiently. Users are more likely to abandon an application if it takes too long to load. Optimize images, minify code, and use caching techniques to improve performance.\n6. Accessibility: Make sure the application is accessible to users with disabilities by following Web Content Accessibility Guidelines (WCAG 2.1). This includes providing alternative text for images, closed captions for audio content, and keyboard-navigable menus.\n7. Secure Connection: Use HTTPS to establish a secure connection between the user's browser and your application. This protects sensitive information from being intercepted during transmission.\n8. User Onboarding: Design an intuitive onboarding process that introduces users to the application's features and functionality. This can include interactive tutorials, video demos, or step-by-step guides.\n9. User Profile Management: Allow users to create profiles and manage their personal information, preferences, and settings. This can include options to change passwords, update email addresses, and manage notification settings.\n10. Analytics Integration: Use analytics tools like Google Analytics to track user behavior and identify areas of improvement in the application. This helps you understand how users eng",
    role: "assistant",
  },
  {
    id: "pEYHnJF",
    createdAt: "2024-01-22T13:32:59.357Z",
    role: "assistant",
    content: "```js\nprint('Hello World!')\n```",
  },
];

export default function ChatForm({ children }: { children?: React.ReactNode }) {
  return (
    <MessagesContext.Provider value={data}>
      {children}
      <div className="w-full max-w-xl mx-auto">
        <form className="fixed max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:bottom-0 bottom-12 w-full max-w-xl bg-davy shadow-2xl shadow-davy p-4 rounded-xl">
          <p className="w-full text-center text-sm text-muted">
            You&apos;re in public mode. Other silly goose will see your antics .
          </p>
          <div className="relative flex flex-row gap-1 items-end p-4 border border-muted rounded-xl">
            <textarea
              name="input"
              rows={2}
              className="w-full resize-y min-h-12 max-h-40 focus-visible:outline-none scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white"
            ></textarea>

            <Button
              className="p-2 h-fit w-fit bg-[#3E3A53]"
              variant={"ghost"}
              size={"icon"}
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
