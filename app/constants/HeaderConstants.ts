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
    redirectionLink: "/common-page",
  },
  {
    id: "integration",
    name: "Integrations",
    redirectionLink: "/common-page",
  },
  {
    id: "theme-management",
    name: "Theme Managements",
    redirectionLink: "/common-page",
  },
];

export const USER_INFO_DROPDOWN = [
  {
    id: "change-log",
    name: "Changelog",
    redirectionLink: "/common-page",
  },
  {
    id: "help-guide",
    name: "Help Guide",
    redirectionLink: "/common-page",
  },
  {
    id: "settings",
    name: "Settings",
    redirectionLink: "/common-page",
  },
  {
    id: "logout",
    name: "Logout",
    redirectionLink: "/common-page",
  },
];
