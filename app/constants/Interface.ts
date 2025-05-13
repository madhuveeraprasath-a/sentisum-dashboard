export interface IconProps {
  iconColor?: string;
}

export interface User {
  name: string;
  id: number;
  email?: string;
  imageUrl?: string;
}

export interface UserInfoInterface {
  userData: User;
}

export interface DashboardData {
  title: string;
  description: string;
  data: DashboardItem[];
}
export interface DashboardItem {
  type: string;
  title: string;
  description: string;
  stats?: Stats;
  category?: string;
  metrics?: Card[];
  text?: string | TrustedHTML | undefined;
}
export interface Card {
  title: string;
  volume: string;
  category: string;
  increased: boolean;
  percentChange: number;
}
interface Stats {
  title?: string;
  description?: string;
  tableHeaders?: TableHeader[];
  tags?: Tag[];
}
export interface TableHeader {
  label: string;
  value: string;
}
interface Tag {
  label: string;
  volume: number;
  percentChange: number;
  increased: boolean;
}

export interface Conversation {
  id: number;
  senderName: string;
  sentTime: string; // Example: "08/10/2023 07:31 PM"
  isSender: boolean;
  message: string;
}

export interface Ticket {
  ticketId: number;
  tags: string[];
  sentiment: string;
  channel: string;
  SatisfactionRating: string;
  startedDate: string; // Example: "08/10/2023 07:30 PM"
  conversations: Conversation[];
}
