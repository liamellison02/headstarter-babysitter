"use client";

import { useContext } from "react";
import { MessagesContext } from "./ChatForm";
import Message from "./Message";

export default function ChatMessages() {
  const messages = useContext(MessagesContext);

  return (
    <div className="space-y-4 pb-40">
      {messages.map((message) => (
        <Message
          key={message.id}
          role={message.role}
          message={message.content}
        />
      ))}
    </div>
  );
}
