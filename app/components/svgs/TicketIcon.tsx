interface HomeIconProps {
  iconColor?: string;
}

const TicketIcon = (props: HomeIconProps) => {
  const { iconColor } = props;
  return (
    <svg
      stroke={iconColor || "#000"}
      fill="none"
      className="mt-1"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={18}
      width={18}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
  );
};

export default TicketIcon;
