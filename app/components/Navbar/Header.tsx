"use client";
import Image from "next/image";
import { HEADER_MENUS, HeaderMenu } from "../../constants/HeaderConstants";
import { getIcon } from "../../utills/getIcon";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const onMenuClickHandler = (menu: HeaderMenu) => {
    if (pathname == menu.redirectionLink) return;
    router.push(menu.redirectionLink);
  };

  return (
    <div className="h-[80px] text-white flex items-center justify-between shadow-lg px-10">
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
            } flex items-center justify-center gap-1 hover:bg-neutral-300 p-2 rounded-lg transition-all duration-300`}
            key={menu.name}
          >
            <div>{getIcon(menu.id)}</div>
            <div className="text-center text-black font-semibold cursor-pointer">
              {menu.name.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Header;
