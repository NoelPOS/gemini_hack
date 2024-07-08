import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type Message = {
  text: string;
  fromSelf: boolean;
  sender: string;
};

type ConversationProps = {
  messages: Message[];
  currentSpeakingMessage: string;
};

const Conversation = ({
  messages,
  currentSpeakingMessage,
}: ConversationProps) => {
  return (
    <main className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex items-end ${
            message.fromSelf ? "justify-end" : ""
          } space-x-2`}
        >
          {!message.fromSelf && (
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>{message.sender}</AvatarFallback>
            </Avatar>
          )}
          <div
            className={`p-2 rounded-bl-xl rounded-tr-xl border-2 border-teal-900 bg-gray-100`}
          >
            <p
              className="text-lg text-purple-700 font-bold"
              style={{
                color:
                  message.text === currentSpeakingMessage ? "red" : "black",
              }}
            >
              {message.text}
            </p>
          </div>
          {message.fromSelf && (
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>{message.sender}</AvatarFallback>
            </Avatar>
          )}
        </div>
      ))}
    </main>
  );
};

export default Conversation;
