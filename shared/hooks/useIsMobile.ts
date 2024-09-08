import { memo, useEffect, useState } from "react";

const useIsMobile = () => {
  // Default mobile size
  const breakPoint = 768;
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakPoint);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakPoint);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);
  return isMobile;
};
export default useIsMobile;
