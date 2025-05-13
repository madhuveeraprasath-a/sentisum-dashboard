"use client";
import { useState } from "react";
import { Ticket } from "../constants/Interface";
import conversationData from "../JSON/conversationData.json";
import MessageCard from "../components/Conversation/MessageCard";
import MessageInfoCard from "../components/Conversation/MessageInfoCard";
import EmptyConversation from "../components/Conversation/EmptyConversation";
import ConversationLoading from "../components/Loaders/ConversationLoading";
import Avatar from "../components/Navbar/Avatar";
import ConversationFilter from "../components/Conversation/ConversationFilter";
import { useAuthRedirect } from "../utills/useAuthRedirect";

const sentiments = ["all", "positive", "negative", "neutral"];
type Sentiment = (typeof sentiments)[number];

const Tickets = () => {
  useAuthRedirect();
  const [conversations, setConversations] =
    useState<Ticket[]>(conversationData);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState<Sentiment>("all");

  const handleTicketClick = (ticket: Ticket) => {
    setLoading(true);
    setSelectedTicket(ticket);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const filterHandler = (filter: Sentiment) => {
    setActiveFilter(filter);
    if (filter === "all") {
      setConversations(conversationData);
    } else {
      const filteredConversations = conversationData.filter((conversation) =>
        conversation.sentiment.includes(filter)
      );
      setConversations(filteredConversations);
    }
    setSelectedTicket(null);
    setLoading(false);
  };

  return (
    <div className="flex h-[calc(100vh-160px)] mx-10 my-10 border border-neutral-300 rounded-lg shadow-md">
      <div className="w-1/4 border-r border-neutral-300">
        <ConversationFilter
          sentiments={sentiments}
          activeFilter={activeFilter}
          setActiveFilter={(filter) => filterHandler(filter)}
        />
        <div className=" overflow-y-auto h-[calc(100vh-235px)]">
          {conversations.map((conversation, index) => (
            <MessageCard
              key={`${conversation.ticketId}-${index}`}
              conversation={conversation}
              selectedTicket={selectedTicket}
              setSelectedTicket={handleTicketClick}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col h-[calc(100vh-160px)]">
        {selectedTicket?.ticketId && (
          <MessageInfoCard conversation={selectedTicket} />
        )}
        <div className="flex-1 overflow-y-auto p-5">
          {selectedTicket ? (
            loading ? (
              <ConversationLoading />
            ) : (
              <div className="w-full">
                {selectedTicket.conversations.map((msg) => (
                  <div className="flex gap-2 w-full" key={msg.id}>
                    {!msg.isSender && (
                      <Avatar
                        userData={{
                          name: msg.senderName,
                          id: msg.id,
                        }}
                      />
                    )}

                    <div
                      className={`mb-2 w-full ${
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

                    {msg.isSender && (
                      <Avatar
                        userData={{
                          name: msg.senderName,
                          id: msg.id,
                        }}
                      />
                    )}
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
