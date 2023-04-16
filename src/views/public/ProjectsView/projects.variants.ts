import { Variants } from "framer-motion";

export const ProjectContainerVariants: Variants = {
  hidden: {
    // opacity: 0,
    x: "100%",
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  show: {
    // opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  exit: {
    // opacity: 0,
    x: "100%",
    transition: {
      duration: 0.75,
      ease: "easeOut",
      //   when: "afterchildren",
    },
  },
};

export const ProjectTitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};
