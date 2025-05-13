import { Ticket } from "@/app/constants/Interface";

interface MessageCardProps {
  conversation: Ticket;
  selectedTicket: Ticket | null;
  setSelectedTicket: (ticket: Ticket) => void;
}
const MessageCard = (props: MessageCardProps) => {
  const { conversation, setSelectedTicket, selectedTicket } = props;

  return (
    <div
      className={`p-4 border-b border-neutral-300 cursor-pointer hover:bg-neutral-200 ${
        selectedTicket?.ticketId === conversation.ticketId && "bg-neutral-300"
      }`}
      key={conversation.ticketId}
      onClick={() => setSelectedTicket(conversation)}
    >
      <p className="font-semibold text-base">
        {conversation.conversations[0]?.senderName}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-xs text-neutral-600 w-1/3 line-clamp-1">
          {conversation.conversations[0]?.message}
        </p>
        <p className="text-xs text-neutral-600">{conversation.startedDate}</p>
      </div>
    </div>
  );
};

export default MessageCard;
