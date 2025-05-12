import HomeIcon from "../components/svgs/HomeIcon";
import TicketIcon from "../components/svgs/TicketIcon";

export const getIcon = (icon: string) => {
  switch (icon) {
    case "home":
      return <HomeIcon />;
    case "tickets":
      return <TicketIcon />;
    default:
      return null;
  }
};
