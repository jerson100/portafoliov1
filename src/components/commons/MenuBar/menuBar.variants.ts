import { Variants } from "framer-motion";

export const SidebarVariants = {
  open: (height = 1000) => ({
    background: "#CD2368",
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    background: "#CD2368",
    clipPath: "circle(20px at calc(100% - 35px) 28px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MenuListVariants: Variants = {
  open: {
    visibility: "visible",
    pointerEvents: "auto",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.07,
    },
  },
  closed: {
    visibility: "visible",
    pointerEvents: "none",
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  initial: {
    visibility: "hidden",
    pointerEvents: "none",
  },
};

export const MenuItemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    visibility: "visible",
    pointerEvents: "auto",
  },
  closed: {
    opacity: 0,
    y: 40,
    pointerEvents: "none",
  },
  initial: {
    opacity: 0,
    y: 40,
    pointerEvents: "none",
  },
};

export const MenuBarContainerVariants: Variants = {
  open: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.07,
    },
  },
  closed: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
