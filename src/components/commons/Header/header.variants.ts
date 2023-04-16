import { Variants } from "framer-motion";

export const HeaderContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      //   staggerChildren: 0.25,
    },
  },
};
export const HeaderItemScaleVariants: Variants = {
  hidden: (i) => ({
    // scale: i,
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  }),
  show: {
    // scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};
export const HeaderItemVariants: Variants = {
  hidden: (i) => ({
    y: i,
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
};
