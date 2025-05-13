"use client";
import { useEffect, useState } from "react";
import ChatView from "../components/Conversation/ChatView";
import ConversationFilter from "../components/Conversation/ConversationFilter";
import EmptyConversation from "../components/Conversation/EmptyConversation";
import MessageCard from "../components/Conversation/MessageCard";
import MessageInfoCard from "../components/Conversation/MessageInfoCard";
import ConversationLoading from "../components/Loaders/ConversationLoading";
import { Ticket } from "../constants/Interface";
import conversationData from "../JSON/conversationData.json";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleTicketClick = (ticket: Ticket) => {
    setLoading(true);
    setSelectedTicket(ticket);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const closeModal = () => {
    setSelectedTicket(null);
    setLoading(false);
  };

  const filterHandler = (filter: Sentiment) => {
    setActiveFilter(filter);
    if (filter === "all") {
      setConversations(conversationData);
    } else {
      const filtered = conversationData.filter((c) =>
        c.sentiment.includes(filter)
      );
      setConversations(filtered);
    }
    setSelectedTicket(null);
    setLoading(false);
  };

  return (
    <div className="flex flex-col lg:flex-row md:h-[calc(100vh-160px)] md:mx-4 lg:mx-10 md:my-6 md:border border-neutral-300 md:rounded-lg md:shadow-md overflow-hidden">
      <div className="w-full lg:w-1/4 md:border-b lg:border-b-0 lg:border-r border-neutral-300">
        <ConversationFilter
          sentiments={sentiments}
          activeFilter={activeFilter}
          setActiveFilter={(filter) => filterHandler(filter)}
        />
        <div className="md:overflow-y-auto md:h-[300px] sm:h-[400px] lg:h-[calc(100vh-235px)]">
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

      {!isMobile && (
        <div className="flex-1 flex flex-col h-full">
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
                    <ChatView message={msg} key={msg.id} />
                  ))}
                </div>
              )
            ) : (
              <EmptyConversation />
            )}
          </div>
        </div>
      )}

      {isMobile && selectedTicket && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="p-4 border-b border-neutral-300 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Conversation</h2>
            <button
              className="text-sm text-red-500 border border-red-500 px-3 py-1 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
          <MessageInfoCard conversation={selectedTicket} />
          <div className="flex-1 overflow-y-auto px-4 py-3">
            {loading ? (
              <ConversationLoading />
            ) : (
              <div className="w-full">
                {selectedTicket.conversations.map((msg) => (
                  <ChatView message={msg} key={msg.id} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tickets;
