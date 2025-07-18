// Animation utilities
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

export const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
};

export const slideDown = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: -50, opacity: 0 }
};

export const slideLeft = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
};

export const slideRight = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: -50, opacity: 0 }
};

export const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const transition = {
  type: "spring",
  damping: 20,
  stiffness: 100
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

export const hoverEffect = {
  scale: 1.05,
  transition: { duration: 0.3 }
};

export const tapEffect = {
  scale: 0.95,
  transition: { duration: 0.1 }
};