import { motion } from 'framer-motion';

// iOS26 风格动画变体
export const motionVariants = {
  // 淡入上升
  fadeInUp: {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      }
    }
  },

  // 淡入下降
  fadeInDown: {
    hidden: { 
      opacity: 0, 
      y: -20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      }
    }
  },

  // 淡入缩放
  fadeInScale: {
    hidden: { 
      opacity: 0, 
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      }
    }
  },

  // 滑入左侧
  slideInLeft: {
    hidden: { 
      opacity: 0, 
      x: -30
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      }
    }
  },

  // 滑入右侧
  slideInRight: {
    hidden: { 
      opacity: 0, 
      x: 30
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      }
    }
  },

  // 玻璃态悬停效果
  glassHover: {
    initial: { 
      scale: 1,
    },
    hover: { 
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      }
    },
    tap: { 
      scale: 0.98,
      transition: {
        duration: 0.1,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      }
    }
  },

  // 按钮点击效果
  buttonTap: {
    initial: { scale: 1 },
    tap: { 
      scale: 0.95,
      transition: {
        duration: 0.1,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      }
    }
  },

  // 模态框动画
  modal: {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      y: 20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      }
    }
  },

  // 列表项动画
  listItem: {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      }
    })
  },

  // 加载动画
  loading: {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: [0, 0, 1, 1] as [number, number, number, number]
      }
    }
  },

  // 脉冲动画
  pulse: {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1] as [number, number, number, number],
      }
    }
  },

  // 呼吸动画
  breathe: {
    animate: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1] as [number, number, number, number],
      }
    }
  }
};

// 通用过渡配置
export const transitions = {
  fast: {
    duration: 0.15,
    ease: "easeOut",
  },
  normal: {
    duration: 0.3,
    ease: "easeOut",
  },
  slow: {
    duration: 0.5,
    ease: "easeOut",
  },
  slower: {
    duration: 0.7,
    ease: "easeOut",
  },
};

// 动画组件封装
export const MotionDiv = motion.div;
export const MotionButton = motion.button;
export const MotionSpan = motion.span;
export const MotionImg = motion.img; 