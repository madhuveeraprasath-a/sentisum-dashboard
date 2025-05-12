import { useRef, useState, ReactNode } from "react";

interface HoverDropdownProps {
  triggerComponent: ReactNode;
  dropdownComponent: ReactNode;
  offsetTop?: number;
  offsetLeft?: number;
  delay?: number;
}

const HoverDropdown = ({
  triggerComponent,
  dropdownComponent,
  offsetTop = 48,
  offsetLeft = 0,
  delay = 200,
}: HoverDropdownProps) => {

  const [show, setShow] = useState(false);
  const showTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    showTimeoutRef.current = setTimeout(() => setShow(true), delay);
  };

  const handleMouseLeave = () => {
    if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => setShow(false), delay);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block"
    >
      {triggerComponent}

      {show && (
        <div
          className="absolute z-10 bg-white shadow rounded-lg border border-neutral-300"
          style={{ top: offsetTop, left: offsetLeft }}
        >
          {dropdownComponent}
        </div>
      )}
    </div>
  );
};

export default HoverDropdown;
