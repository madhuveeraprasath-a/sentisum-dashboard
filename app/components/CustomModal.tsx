import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface CustomModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
  modalClass?: any;
}
const CustomModal = (props: CustomModalProps) => {
  const { isOpen, children, className, modalClass } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable background scroll
    } else {
      document.body.style.overflow = ""; // Enable background scroll
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleModalContentClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent click event from bubbling up
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-[100000] flex items-center justify-center bg-neutral-800 bg-opacity-75 ${className}`}
    >
      <div
        className={`shadow-lg relative  ${modalClass}  bg-white`}
        onClick={handleModalContentClick}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default CustomModal;
