export interface IconProps {
  iconColor?: string;
}

export interface User {
  name: string;
  email: string;
  id: number;
  imageUrl?: string;
}

export interface UserInfoInterface {
  userData: User;
}
