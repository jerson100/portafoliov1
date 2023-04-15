import { useEffect, useState } from "react";
import { breakpoints } from "../configs/breakpoint";
import { BreakPoint } from "../types";

const useMediaQuery = (query: BreakPoint): boolean => {
  const [active, setactive] = useState(false);
  useEffect(() => {
    const mediaQueryList: MediaQueryList = window.matchMedia(
      breakpoints[query].media
    );
    const handle = () => {
      if (mediaQueryList.matches) {
        setactive(true);
      } else {
        setactive(false);
      }
    };
    handle();
    mediaQueryList.addEventListener("change", handle);
    return () => {
      mediaQueryList.removeEventListener("change", handle);
    };
  }, [query]);

  return active;
};

export { useMediaQuery };
