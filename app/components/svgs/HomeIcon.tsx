interface HomeIconProps {
  iconColor?: string;
}

const HomeIcon = (props: HomeIconProps) => {
  const { iconColor } = props;
  return (
    <svg
      stroke={iconColor || "#000"}
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={18}
      width={18}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  );
};

export default HomeIcon;
