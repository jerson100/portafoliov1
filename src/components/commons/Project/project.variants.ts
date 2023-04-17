import { Variants } from "framer-motion";

export const ProjectContainerVariants: Variants = {
  hidden: (direction) => ({
    opacity: 0,
    x: 100 * direction,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  }),
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  exit: (direction) => ({
    opacity: 0,
    x: 100 * direction,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  }),
};
