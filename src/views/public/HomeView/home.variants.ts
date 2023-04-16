import { Variants } from "framer-motion";

export const BannerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  show: {
    opacity: 1,
    background: "linear-gradient(180deg,#1b1b1b 0%,#f97d9826 80%)",
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    background: "linear-gradient(180deg,#1b1b1b 100%,#f97d9826 0)",
    transition: {
      duration: 0.75,
      ease: "easeOut",
      when: "afterChildren",
    },
  },
};
export const BannerInfoVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.25,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

export const BannerLineVariants: Variants = {
  hidden: {
    width: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  show: {
    width: "120px",
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  exit: {
    width: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const VerticalVariants: Variants = {
  hidden: (y) => ({
    y: y,
    opacity: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  }),
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  exit: (y) => ({
    y: y,
    opacity: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  }),
};
