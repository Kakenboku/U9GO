import * as React from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"
import { Sun, Moon } from "lucide-react"

const themeToggleVariants = tv({
  base: "inline-flex items-center justify-center rounded-lg border border-[#E5E5EA] bg-white px-3 py-2 text-sm font-medium transition-colors hover:bg-[#F2F2F7] dark:border-[#38383A] dark:bg-[#1C1C1E] dark:hover:bg-[#2C2C2E]",
})

export interface ThemeToggleProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof themeToggleVariants> {
  theme?: "light" | "dark"
  onThemeChange?: (theme: "light" | "dark") => void
}

export const ThemeToggle = React.forwardRef<HTMLButtonElement, ThemeToggleProps>(
  ({ className, theme = "light", onThemeChange, ...props }, ref) => {
    const handleToggle = () => {
      const newTheme = theme === "light" ? "dark" : "light"
      onThemeChange?.(newTheme)
    }

    return (
      <button
        ref={ref}
        className={cn(themeToggleVariants({ className }))}
        onClick={handleToggle}
        {...props}
      >
        {theme === "light" ? (
          <Moon className="w-4 h-4" />
        ) : (
          <Sun className="w-4 h-4" />
        )}
        <span className="sr-only">切换主题</span>
      </button>
    )
  }
)

ThemeToggle.displayName = "ThemeToggle" 