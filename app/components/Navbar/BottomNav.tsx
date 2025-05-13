"use client";
import { HEADER_MENUS } from "@/app/constants/HeaderConstants";
import { getIcon } from "@/app/utills/getIcon";
import { useMenuClickHandler } from "@/app/utills/useMenuClickHandler";
import { usePathname } from "next/navigation";

const BottomNav = () => {
  const pathname = usePathname();

  const { onMenuClickHandler } = useMenuClickHandler();

  if (pathname === "/") {
    return null;
  }

  return (
    <div>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-400 shadow sm:hidden">
        <div className="flex justify-between items-center p-2">
          {HEADER_MENUS.map((item) => (
            <div
              onClick={() => onMenuClickHandler(item)}
              key={item.id}
              className={` ${
                pathname == item.redirectionLink && "bg-neutral-300 rounded"
              } flex flex-col items-center justify-center p-2 `}
            >
              {getIcon(item.id)}
              <p className="font-medium text-sm text-neutral-800">
                {item.name}
              </p>
            </div>
          ))}
          <div
            onClick={() =>
              onMenuClickHandler({
                id: "logout",
                name: "Logout",
              })
            }
            className={` flex flex-col items-center justify-center p-2 `}
          >
            {getIcon("logout")}
            <p className="font-medium text-sm text-neutral-800">LOGOUT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
