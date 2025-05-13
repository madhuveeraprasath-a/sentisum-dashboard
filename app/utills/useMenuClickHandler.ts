import { useRouter, usePathname } from "next/navigation";
import { HeaderMenu } from "../constants/HeaderConstants";

export const useMenuClickHandler = () => {
  const router = useRouter();
  const pathname = usePathname();

  const onMenuClickHandler = (menu: HeaderMenu) => {
    if (menu.id === "logout") {
      localStorage.removeItem("isLoggedIn");
      router.push("/");
      return;
    }
    if (pathname === menu.redirectionLink) return;
    if (menu?.redirectionLink) {
      router.push(menu?.redirectionLink);
    }
  };

  return { onMenuClickHandler };
};
