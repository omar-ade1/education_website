export const animationLogin = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      durtaion: 1,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const animationSideBar = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      durtaion: 1,
    },
  },
  exit: {
    opacity: 0,
    x: -100,
  },
};

export const animationParentOfCourseBox = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      durtaion: 1,
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const animationCourseBox = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      durtaion: 1,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const animationPagesLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      durtaion: 3,
    },
  },
  exit: {
    opacity: 0,
    x:-50
  },
};

export const animationPagesRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      durtaion: 3,
    },
  },
  exit: {
    opacity: 0,
    x: 50
  },
};


export const animationTitleText = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      durtaion: 3,
    },
  },
  exit: {
    opacity: 0,
    y: -30
  },
};

