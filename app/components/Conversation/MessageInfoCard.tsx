import { Ticket } from "@/app/constants/Interface";

interface MessageInfoCardProps {
  conversation: Ticket | null;
}

const MessageInfoCard = (props: MessageInfoCardProps) => {
  const { conversation } = props;
  return (
    <div className="border-b  border-neutral-400 pb-4">
      <div className="bg-primary-200 shadow-md rounded-lg p-4 m-4">
        <p className="font-semibold">Ticket #{conversation?.ticketId}</p>
        <p className="font-semibold">Started at: {conversation?.startedDate}</p>
        <p className="font-semibold">Channel: api</p>
        <p className="font-semibold">Satisfaction Rating: unoffered</p>
        {conversation?.tags.map((tag) => (
          <span
            key={tag}
            className="mt-2 inline-block bg-neutral-300 text-neutral-800 text-xs font-semibold mr-2 px-2.5 py-1 rounded-full border border-neutral-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MessageInfoCard;
