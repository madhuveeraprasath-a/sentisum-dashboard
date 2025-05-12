export interface HeaderMenu {
  id: string;
  name: string;
  redirectionLink: string;
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
