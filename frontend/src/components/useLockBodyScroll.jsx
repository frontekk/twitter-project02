import { useEffect } from "react";

const useLockBodyScroll = (lock) => {
  useEffect(() => {
    const originalOverflowStyle = window.getComputedStyle(
      document.body
    ).overflow;
    if (lock) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflowStyle;
    };
  }, [lock]);
};

export default useLockBodyScroll;
