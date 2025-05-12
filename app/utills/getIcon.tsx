import { JSX } from "react";
import ActionTrackingIcon from "../components/svgs/ActionTrackingIcon";
import ChangeLogIcon from "../components/svgs/ChangeLogIcon";
import CreateCardIcon from "../components/svgs/CreateCardIcon";
import CreateReportIcon from "../components/svgs/CreateReport";
import CreateTextIcon from "../components/svgs/CreateTextIcon";
import HelpGuidIcon from "../components/svgs/HelpGuid";
import HomeIcon from "../components/svgs/HomeIcon";
import IntegrationIcon from "../components/svgs/IntegrationIcon";
import LogoutIcon from "../components/svgs/LogoutIcon";
import YourDashboardIcon from "../components/svgs/ManageDashboardIcon";
import SettingsIcon from "../components/svgs/SettingsIcon";
import ThemeIcon from "../components/svgs/ThemeIcon";
import TicketIcon from "../components/svgs/TicketIcon";

const iconMap: Record<string, JSX.Element> = {
  home: <HomeIcon />,
  tickets: <TicketIcon />,
  "manage-dashboard": <YourDashboardIcon />,
  "change-log": <ChangeLogIcon />,
  "help-guide": <HelpGuidIcon />,
  settings: <SettingsIcon />,
  logout: <LogoutIcon />,
  integration: <IntegrationIcon />,
  "theme-management": <ThemeIcon />,
  "action-tracking": <ActionTrackingIcon />,
  report: <CreateReportIcon />,
  metric: <CreateCardIcon />,
  text: <CreateTextIcon />,
};

export const getIcon = (icon: string) => iconMap[icon] || null;
