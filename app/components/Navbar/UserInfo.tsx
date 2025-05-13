import {
  HeaderMenu,
  USER_INFO_DROPDOWN,
} from "@/app/constants/HeaderConstants";
import { UserInfoInterface } from "@/app/constants/Interface";
import { getIcon } from "@/app/utills/getIcon";
import { useMenuClickHandler } from "@/app/utills/useMenuClickHandler";
import Avatar from "./Avatar";
import HoverDropdown from "./HoverDropdown";

const UserInfo = ({ userData }: UserInfoInterface) => {
  const { name, email } = userData;
  
  const { onMenuClickHandler } = useMenuClickHandler();

  return (
    <HoverDropdown
      triggerComponent={<Avatar userData={userData} />}
      dropdownComponent={(close) => (
        <div className="w-[300px]">
          <div>
            <div className="flex items-center gap-2 border-b border-neutral-400 p-4">
              <Avatar userData={userData} />
              <div>
                <h4 className="text-sm font-semibold text-black">{name}</h4>
                <p className="text-xs text-neutral-500">{email}</p>
              </div>
            </div>

            {USER_INFO_DROPDOWN.map((item: HeaderMenu) => (
              <div
                key={item?.id}
                onClick={() => {
                  close();
                  onMenuClickHandler(item);
                }}
                className="flex items-center rounded-lg gap-1 px-4 py-2  cursor-pointer hover:bg-neutral-200"
              >
                <div>{getIcon(item?.id)}</div>
                <p className="text-sm text-black font-medium">{item?.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      offsetTop={4}
      offsetLeft={-260}
    />
  );
};

export default UserInfo;
