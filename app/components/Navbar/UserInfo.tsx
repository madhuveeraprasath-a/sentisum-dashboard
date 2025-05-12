import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import HoverDropdown from "./HoverDropdown";

const UserInfo = () => {
  return (
    <HoverDropdown
      triggerComponent={
        <Avatar
          size={44}
          icon={<UserOutlined />}
          style={{ cursor: "pointer" }}
        />
      }
      dropdownComponent={
        <div className="w-[400px]">
          <div className="p-2 hover:bg-gray-100 cursor-pointer">Option 1</div>
          <div className="p-2 hover:bg-gray-100 cursor-pointer">Option 2</div>
          <div className="p-2 hover:bg-gray-100 cursor-pointer">Option 3</div>
        </div>
      }
      offsetTop={48}
      offsetLeft={-350}
    />
  );
};

export default UserInfo;
