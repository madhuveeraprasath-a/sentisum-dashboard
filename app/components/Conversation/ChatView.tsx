import { Conversation } from "@/app/constants/Interface";
import Avatar from "../Navbar/Avatar";

interface ChatViewinterface {
  message: Conversation;
}
const ChatView = (props: ChatViewinterface) => {
  const { message } = props;
  return (
    <div className="flex gap-2 w-full">
      {!message.isSender && (
        <Avatar userData={{ name: message.senderName, id: message.id }} />
      )}
      <div
        className={`mb-2 w-full ${
          message.isSender ? "text-right" : "text-left"
        }`}
      >
        <div
          className={`inline-block max-w-[85%] sm:max-w-[70%] rounded-xl p-3 ${
            message.isSender ? "bg-warning-300" : "bg-success-200"
          }`}
        >
          <p className="text-sm">{message.message}</p>
          <p className="text-xs text-right pt-1 text-neutral-800">
            {message.sentTime}
          </p>
        </div>
      </div>
      {message.isSender && (
        <Avatar userData={{ name: message.senderName, id: message.id }} />
      )}
    </div>
  );
};

export default ChatView;
