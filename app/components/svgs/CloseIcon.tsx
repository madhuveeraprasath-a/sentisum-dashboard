import { IconProps } from "@/app/constants/Interface";

export const CloseIcon = (props: IconProps) => {
  return (
    <svg
      height={24}
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={"currentColor"}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};
