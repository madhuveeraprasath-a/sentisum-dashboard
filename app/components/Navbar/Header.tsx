"use client";
import { useMenuClickHandler } from "@/app/utills/useMenuClickHandler";
import { CaretDownOutlined } from "@ant-design/icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  HEADER_MENUS,
  HEADER_MORE_MENUS,
  HeaderMenu,
} from "../../constants/HeaderConstants";
import userData from "../../JSON/userInfo.json";
import { getIcon } from "../../utills/getIcon";
import SubscribeButton from "../SubscribeButton";
import HoverDropdown from "./HoverDropdown";
import UserInfo from "./UserInfo";

const Header = () => {
  const pathname = usePathname();

  const { onMenuClickHandler } = useMenuClickHandler();

  if (pathname == "/") {
    return null;
  }

  const onLogoClickHandler = () => {
    window.open("https://www.sentisum.com", "_blank");
  };

  return (
    <div className="hidden md:block">
      <div className="h-[80px] border-b border-neutral-400 text-white flex items-center justify-between shadow-lg px-10 fixed left-0 right-0 z-10 bg-neutral-100">
        <div className="cursor-pointer" onClick={onLogoClickHandler}>
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
                    className={`flex cursor-pointer items-center rounded-lg gap-1 hover:bg-neutral-200 p-4 transition-all duration-300`}
                    key={menu.name}
                  >
                    <div>{getIcon(menu.id)}</div>
                    <div className="text-center text-black font-semibold text-xs">
                      {menu.name.toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>
            )}
            offsetTop={2}
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
