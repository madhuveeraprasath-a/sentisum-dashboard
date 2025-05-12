
export interface HeaderMenu {
  id: string;
  name: string;
  redirectionLink?: string;
}

export const HEADER_MENUS = [
  {
    id: "home",
    name: "Home",
    redirectionLink: "/dashboard",
  },
  {
    id: "tickets",
    name: "Tickets",
    redirectionLink: "/tickets",
  },
  {
    id: "manage-dashboard",
    name: "Manage Dashboards",
    redirectionLink: "/manage-dashboards",
  },
];

export const HEADER_MORE_MENUS = [
  {
    id: "action-tracking",
    name: "Action tracking",
  },
  {
    id: "integration",
    name: "Integrations",
  },
  {
    id: "theme-management",
    name: "Theme Managements",
  },
];

export const USER_INFO_DROPDOWN = [
  {
    id: "change-log",
    name: "Changelog",
  },
  {
    id: "help-guide",
    name: "Help Guide",
  },
  {
    id: "settings",
    name: "Settings",
  },
  {
    id: "logout",
    name: "Logout",
  },
];
