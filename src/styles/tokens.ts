// iOS26 设计 Token 体系
export const tokens = {
  colors: {
    // 主色调 - iOS26 蓝色系
    primary: {
      50: '#E3F2FD',
      100: '#BBDEFB',
      200: '#90CAF9',
      300: '#64B5F6',
      400: '#42A5F5',
      500: '#007AFF', // iOS 主蓝
      600: '#1976D2',
      700: '#1565C0',
      800: '#0D47A1',
      900: '#0A3D91',
    },
    // 语义色
    success: {
      50: '#E8F5E8',
      100: '#C8E6C9',
      200: '#A5D6A7',
      300: '#81C784',
      400: '#66BB6A',
      500: '#34C759', // iOS 成功绿
      600: '#43A047',
      700: '#388E3C',
      800: '#2E7D32',
      900: '#1B5E20',
    },
    danger: {
      50: '#FFEBEE',
      100: '#FFCDD2',
      200: '#EF9A9A',
      300: '#E57373',
      400: '#EF5350',
      500: '#FF3B30', // iOS 危险红
      600: '#E53935',
      700: '#D32F2F',
      800: '#C62828',
      900: '#B71C1C',
    },
    warning: {
      50: '#FFF8E1',
      100: '#FFECB3',
      200: '#FFE082',
      300: '#FFD54F',
      400: '#FFCA28',
      500: '#FF9500', // iOS 警告橙
      600: '#FFB300',
      700: '#FFA000',
      800: '#FF8F00',
      900: '#FF6F00',
    },
    // 中性色
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    // 背景色
    background: {
      primary: '#F2F2F7', // iOS 主背景
      secondary: '#FFFFFF',
      tertiary: '#F8F9FA',
      glass: 'rgba(255, 255, 255, 0.8)',
      glassDark: 'rgba(0, 0, 0, 0.8)',
    },
    // 文本色
    text: {
      primary: '#000000',
      secondary: '#6C6C70',
      tertiary: '#8E8E93',
      inverse: '#FFFFFF',
      disabled: '#C7C7CC',
    },
    // 玻璃态渐变
    glassGradient: {
      light: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 100%)',
      dark: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 100%)',
      blue: 'linear-gradient(135deg, rgba(0, 122, 255, 0.1) 0%, rgba(255, 255, 255, 0.8) 100%)',
    },
  },
  
  // 圆角系统
  borderRadius: {
    none: '0px',
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '20px',
    '3xl': '24px',
    full: '9999px',
  },
  
  // 间距系统
  spacing: {
    0: '0px',
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '32px',
    '4xl': '40px',
    '5xl': '48px',
    '6xl': '64px',
  },
  
  // 字体系统
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
  },
  
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  
  // 行高
  lineHeight: {
    tight: '1.2',
    normal: '1.4',
    relaxed: '1.6',
    loose: '1.8',
  },
  
  // 阴影系统
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    // 玻璃态阴影
    glass: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    glassHover: '0 12px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
  },
  
  // 模糊效果
  backdrop: {
    blur: {
      sm: 'blur(4px)',
      md: 'blur(8px)',
      lg: 'blur(12px)',
      xl: 'blur(16px)',
      '2xl': 'blur(24px)',
    },
    opacity: {
      light: '0.8',
      medium: '0.6',
      heavy: '0.4',
    },
  },
  
  // 动画时长
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '700ms',
  },
  
  // 缓动函数
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // iOS 风格缓动
    ios: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  
  // Z-index 层级
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
} as const;

// 导出类型
export type Tokens = typeof tokens;
export type ColorToken = keyof typeof tokens.colors;
export type BorderRadiusToken = keyof typeof tokens.borderRadius;
export type SpacingToken = keyof typeof tokens.spacing;
export type FontSizeToken = keyof typeof tokens.fontSize;
export type FontWeightToken = keyof typeof tokens.fontWeight; 