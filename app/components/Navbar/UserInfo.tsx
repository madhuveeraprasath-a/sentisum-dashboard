import { UserInfoInterface } from "@/app/constants/Interface";
import Avatar from "./Avatar";
import HoverDropdown from "./HoverDropdown";

const UserInfo = ({ userData }: UserInfoInterface) => {
  return (
    <HoverDropdown
      triggerComponent={<Avatar userData={userData} />}
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
