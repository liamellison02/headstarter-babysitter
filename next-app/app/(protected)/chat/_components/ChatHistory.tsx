"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HTMLProps, SVGProps } from "react";
import LinesEllipsis from "react-lines-ellipsis";

const dummyChats = [
  {
    id: Math.floor(Math.random() * 100).toString(),
    title: `Chat ${Math.floor(Math.random() * 10)}`,
    message: loremIpsum(Math.floor(Math.random() * 50) + 20),
  },
  {
    id: Math.floor(Math.random() * 100).toString(),
    title: `Chat ${Math.floor(Math.random() * 10)}`,
    message: loremIpsum(Math.floor(Math.random() * 50) + 20),
  },
  {
    id: Math.floor(Math.random() * 100).toString(),
    title: `Chat ${Math.floor(Math.random() * 10)}`,
    message: loremIpsum(Math.floor(Math.random() * 50) + 20),
  },
  {
    id: Math.floor(Math.random() * 100).toString(),
    title: `Chat ${Math.floor(Math.random() * 10)}`,
    message: loremIpsum(Math.floor(Math.random() * 50) + 20),
  },
  {
    id: Math.floor(Math.random() * 100).toString(),
    title: `Chat ${Math.floor(Math.random() * 10)}`,
    message: loremIpsum(Math.floor(Math.random() * 50) + 20),
  },
];

function loremIpsum(length: number) {
  const words = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipisicing",
    "elit",
    "Obcaecati",
    "dolorum",
    "temporibus",
    "laboriosam",
    "ipsum",
    "et",
    "earum",
    "nesciunt",
    "quia",
    "Perferendis",
    "quidem",
    "corporis",
    "aperiam",
    "assumenda",
    "cum",
    "quo",
    "omnis",
    "aut",
    "ab",
    "vel",
    "commodi",
    "impedit",
  ];
  let text = "";
  for (let i = 0; i < length; i++) {
    text += `${words[Math.floor(Math.random() * words.length)]} `;
  }
  return text.trim();
}

export default function ChatHistory() {
  return (
    <div className="hidden w-96 h-full max-h-[calc(100vh-11rem)] fixed border overflow-y-auto lg:flex flex-col gap-4 pt-4 rounded-2xl bg-[#151313] shadow-lg shadow-white scrollbar-thin scrollbar-track-transparent scrollbar-thumb-tingPurple">
      {dummyChats.map((chat) => (
        <ChatLinkItem
          key={chat.id}
          chatId={chat.id}
          chatTitle={chat.title}
          chatMessage={chat.message}
        />
      ))}
      {/*  */}
      <div className="mt-auto w-full sticky bottom-0 font-bold p-4 bg-gradient-to-b from-transparent via-davy to-davy">
        <Button className="w-full">Load More</Button>
      </div>
    </div>
  );
}

type ChatLinkProps = HTMLProps<HTMLDivElement> & {
  chatId: string;
  chatTitle: string;
  chatMessage: string;
};

export function ChatLinkItem({
  chatId,
  chatTitle,
  chatMessage,
}: ChatLinkProps) {
  return (
    <div className="px-4">
      <Link
        href={"/chat" + "?id=" + chatId}
        className="border border-white rounded-xl p-4 bg-davy flex gap-3 items-center"
      >
        <div>
          <h3>{chatTitle}</h3>
          <p>
            <LinesEllipsis
              text={chatMessage}
              maxLine="3"
              ellipsis="..."
              trimRight
              className="text-sm"
            />
          </p>
        </div>

        <MaterialSymbolsKeyboardDoubleArrowRightRounded className="w-36 h-36" />
      </Link>
    </div>
  );
}

export function MaterialSymbolsKeyboardDoubleArrowRightRounded(
  props: SVGProps<SVGSVGElement>
) {
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
        d="M9.575 12L5.7 8.1q-.275-.275-.288-.687T5.7 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.687.288T5.7 17.3q-.275-.275-.275-.7t.275-.7zm6.6 0L12.3 8.1q-.275-.275-.288-.687T12.3 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.687.288T12.3 17.3q-.275-.275-.275-.7t.275-.7z"
      ></path>
    </svg>
  );
}
