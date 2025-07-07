/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        uikit: {
          primary: '#007AFF',
          background: '#F2F2F7',
          danger: '#FF3B30',
          success: '#34C759',
          muted: '#E5E5EA',
          gray: {
            100: '#F2F2F7',
            200: '#E5E5EA',
            400: '#8E8E93',
          },
          dark: {
            primary: '#0A84FF',
            background: '#000000',
            surface: '#1C1C1E',
            text: '#FFFFFF',
            textSecondary: '#8E8E93',
            border: '#38383A',
          }
        }
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '48px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      }
    },
  },
  plugins: [],
} 