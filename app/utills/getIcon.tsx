import HomeIcon from "../components/svgs/HomeIcon";
import TicketIcon from "../components/svgs/TicketIcon";
import YourDashboardIcon from "../components/svgs/ManageDashboardIcon";

export const getIcon = (icon: string) => {
  switch (icon) {
    case "home":
      return <HomeIcon />;
    case "tickets":
      return <TicketIcon />;
    case "manage-dashboard":
      return <YourDashboardIcon />;
    default:
      return null;
  }
};
