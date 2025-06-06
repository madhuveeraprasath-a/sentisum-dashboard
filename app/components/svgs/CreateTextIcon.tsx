import { IconProps } from "@/app/constants/Interface";

const CreateTextIcon = (props: IconProps) => {
  const { iconColor } = props;

  return (
    <svg
      stroke={iconColor || "#000"}
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M32 415.5l120-320 120 320m-42-112H74m252-64c12.19-28.69 41-48 74-48h0c46 0 80 32 80 80v144"
      ></path>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M320 358.5c0 36 26.86 58 60 58 54 0 100-27 100-106v-15c-20 0-58 1-92 5-32.77 3.86-68 19-68 58z"
      ></path>
    </svg>
  );
};

export default CreateTextIcon;
