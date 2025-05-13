import { useRef, useState, useEffect, ReactNode } from "react";
import ReactDOM from "react-dom";

interface HoverDropdownProps {
  triggerComponent: ReactNode;
  dropdownComponent: (closeDropdown: () => void) => ReactNode;
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
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (show && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + offsetTop,
        left: rect.left + window.scrollX + offsetLeft,
      });
    }
  }, [show, offsetTop, offsetLeft]);

  return (
    <div
      ref={triggerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <div className="cursor-pointer">{triggerComponent}</div>
      {show &&
        ReactDOM.createPortal(
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute z-[9999] bg-white shadow-lg rounded-lg border border-neutral-300"
            style={{
              position: "absolute",
              top: position.top,
              left: position.left,
            }}
          >
            {dropdownComponent(() => setShow(false))}
          </div>,
          document.body
        )}
    </div>
  );
};

export default HoverDropdown;
