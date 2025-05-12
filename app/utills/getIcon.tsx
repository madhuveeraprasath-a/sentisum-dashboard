import ActionTrackingIcon from "../components/svgs/ActionTrackingIcon";
import ChangeLogIcon from "../components/svgs/ChangeLogIcon";
import HelpGuidIcon from "../components/svgs/HelpGuid";
import HomeIcon from "../components/svgs/HomeIcon";
import IntegrationIcon from "../components/svgs/IntegrationIcon";
import LogoutIcon from "../components/svgs/LogoutIcon";
import YourDashboardIcon from "../components/svgs/ManageDashboardIcon";
import SettingsIcon from "../components/svgs/SettingsIcon";
import ThemeIcon from "../components/svgs/ThemeIcon";
import TicketIcon from "../components/svgs/TicketIcon";

export const getIcon = (icon: string) => {
  switch (icon) {
    case "home":
      return <HomeIcon />;
    case "tickets":
      return <TicketIcon />;
    case "manage-dashboard":
      return <YourDashboardIcon />;
    case "change-log":
      return <ChangeLogIcon />;
    case "help-guide":
      return <HelpGuidIcon />;
    case "settings":
      return <SettingsIcon />;
    case "logout":
      return <LogoutIcon />;
    case "integration":
      return <IntegrationIcon />;
    case "theme-management":
      return <ThemeIcon />;
    case "action-tracking":
      return <ActionTrackingIcon />;
    default:
      return null;
  }
};
