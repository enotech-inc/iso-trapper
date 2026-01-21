export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const tiltHover = {
  initial: { rotateX: 0, rotateY: 0 },
  hover: { rotateX: 8, rotateY: -8 },
  transition: { duration: 0.25, ease: "easeOut" },
};

export const dockSlide = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 24 },
  transition: { duration: 0.3, ease: "easeOut" },
};
