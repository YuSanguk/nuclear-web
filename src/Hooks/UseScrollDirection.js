import { useState, useEffect, useRef } from "react";

const useScrollDirection = () => {
  const threshold = 0;
  const [scrollDir, setScrollDir] = useState("up");

  const blocking = useRef(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    prevScrollY.current = window.pageYOffset || window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset || window.scrollY;

      if (Math.abs(scrollY - prevScrollY.current) >= threshold) {
        const newScrollDirection =
          scrollY > prevScrollY.current ? "down" : "up";
        setScrollDir(newScrollDirection);
        prevScrollY.current = scrollY > 0 ? scrollY : 0;
      }
      blocking.current = false;
    };
    const onScroll = () => {
      if (!blocking.current) {
        blocking.current = true;
        window.requestAnimationFrame(updateScrollDirection);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);
  return scrollDir;
};

export { useScrollDirection };
