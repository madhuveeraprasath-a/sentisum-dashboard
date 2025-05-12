"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  HEADER_MENUS,
  HEADER_MORE_MENUS,
  HeaderMenu,
} from "../../constants/HeaderConstants";
import { getIcon } from "../../utills/getIcon";
import SubscribeButton from "../SubscribeButton";
import UserInfo from "./UserInfo";
import userData from "../../JSON/userInfo.json";
import { CaretDownOutlined } from "@ant-design/icons";
import HoverDropdown from "./HoverDropdown";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const onMenuClickHandler = (menu: HeaderMenu) => {
    if (pathname == menu.redirectionLink) return;
    if (menu?.redirectionLink) {
      router.push(menu?.redirectionLink);
    }
  };

  return (
    <div>
      <div className="h-[80px] text-white flex items-center justify-between shadow-lg px-10 fixed left-0 right-0 z-10 bg-neutral-100">
        <div className="cursor-pointer">
          <Image
            src="/images/sentisumLogo.webp"
            alt="Logo"
            height={60}
            width={60}
          />
        </div>
        <div className="flex items-center justify-center gap-4">
          {HEADER_MENUS?.map((menu: HeaderMenu) => (
            <div
              onClick={() => onMenuClickHandler(menu)}
              className={`${
                pathname == menu.redirectionLink && "bg-neutral-300"
              } flex cursor-pointer items-center justify-center gap-1 hover:bg-neutral-300 p-2 rounded-lg transition-all duration-300`}
              key={menu.name}
            >
              <div>{getIcon(menu.id)}</div>
              <div className="text-center text-black font-semibold ">
                {menu.name.toUpperCase()}
              </div>
            </div>
          ))}
          <HoverDropdown
            triggerComponent={
              <div className="flex cursor-pointer items-center justify-center gap-1">
                <div className="text-center text-black font-semibold ">
                  More
                </div>
                <CaretDownOutlined style={{ color: "#000" }} />
              </div>
            }
            dropdownComponent={(close) => (
              <div className="w-[250px]">
                {HEADER_MORE_MENUS?.map((menu: HeaderMenu) => (
                  <div
                    onClick={() => {
                      close();
                      onMenuClickHandler(menu);
                    }}
                    className={`flex cursor-pointer items-center rounded-lg gap-1 hover:bg-neutral-300 p-4 transition-all duration-300`}
                    key={menu.name}
                  >
                    <div>{getIcon(menu.id)}</div>
                    <div className="text-center text-black font-semibold ">
                      {menu.name.toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>
            )}
            offsetTop={28}
            offsetLeft={0}
          />
        </div>
        <div className="flex items-center justify-center gap-4">
          <UserInfo userData={userData} />
          <SubscribeButton />
        </div>
      </div>
      <div className="h-[80px]"></div>
    </div>
  );
};

export default Header;
