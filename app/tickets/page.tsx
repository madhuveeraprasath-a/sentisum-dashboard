"use client";
import { useState } from "react";
import { Ticket } from "../constants/Interface";
import conversationData from "../JSON/conversationData.json";
import MessageCard from "../components/Conversation/MessageCard";
import MessageInfoCard from "../components/Conversation/MessageInfoCard";
import EmptyConversation from "../components/Conversation/EmptyConversation";
import ConversationLoading from "../components/Conversation/ConversationLoading";

const Tickets = () => {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTicketClick = (ticket: Ticket) => {
    setLoading(true);
    setSelectedTicket(ticket);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex h-[calc(100vh-80px)]">
      <div className="w-1/4 border-r border-neutral-300 overflow-y-auto">
        {conversationData.map((conversation, index) => (
          <MessageCard
            key={`${conversation.ticketId}-${index}`}
            conversation={conversation}
            selectedTicket={selectedTicket}
            setSelectedTicket={handleTicketClick}
          />
        ))}
      </div>

      <div className="flex-1 flex flex-col h-[calc(100vh-80px)]">
        <MessageInfoCard conversation={selectedTicket} />

        <div className="flex-1 overflow-y-auto p-5">
          {selectedTicket ? (
            loading ? (
              <ConversationLoading />
            ) : (
              <div>
                {selectedTicket.conversations.map((msg) => (
                  <div
                    className={`mb-2 ${
                      msg?.isSender ? "text-right" : "text-left"
                    }`}
                    key={msg.id}
                  >
                    <div
                      className={`inline-block max-w-[70%] rounded-xl p-3 ${
                        msg.isSender ? "bg-warning-300" : "bg-success-200"
                      }`}
                    >
                      <p className="text-sm">{msg.message}</p>
                      <p className="text-xs text-right pt-1 text-neutral-800">
                        {msg.sentTime}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <EmptyConversation />
          )}
        </div>
      </div>
    </div>
  );
};

export default Tickets;
