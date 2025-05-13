import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Handler for media query change
    const handler = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add listener
    mediaQuery.addEventListener("change", handler);

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isMobile;
};

export default useIsMobile;
