import { Variants } from "framer-motion";

export const ProjectContainerVariants: Variants = {
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
