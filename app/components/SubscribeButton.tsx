import { MailOutlined } from "@ant-design/icons";

const SubscribeButton = () => {
  const onSubscribeHandler = () => {};

  return (
    <div>
      <button
        onClick={onSubscribeHandler}
        className="bg-primary-500 text-white px-4 py-2 flex gap-1 rounded items-center font-semibold hover:bg-primary-600 transition-all duration-300"
      >
        <MailOutlined />
        SUBSCRIBE
      </button>
    </div>
  );
};

export default SubscribeButton;
