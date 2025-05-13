import { MailOutlined } from "@ant-design/icons";
import useNotification from "antd/es/notification/useNotification";

const SubscribeButton = () => {
  const [api, contextHolder] = useNotification();
  const onSubscribeHandler = () => {
    api.success({
      message: "Subscribed",
      description: "You have successfully subscribed to our newsletter.",
      placement: "topRight",
      duration: 2,
    });
  };

  return (
    <div>
      {contextHolder}
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
