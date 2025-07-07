import * as React from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"

const buttonVariants = tv({
  base: "inline-flex items-center justify-center font-medium transition-all rounded-lg",
  variants: {
    variant: {
      default: "bg-[#007AFF] text-white hover:bg-blue-600 active:bg-blue-700 dark:bg-[#0A84FF] dark:hover:bg-blue-500",
      outline: "border border-[#E5E5EA] text-gray-700 hover:bg-[#F2F2F7] active:bg-gray-200 dark:border-[#38383A] dark:text-white dark:hover:bg-[#1C1C1E]",
      danger: "bg-[#FF3B30] text-white hover:bg-red-600 active:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600",
    },
    size: {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
})

export interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button 
        className={cn(buttonVariants({ variant, size, className }))} 
        ref={ref} 
        {...props} 
      />
    )
  }
)

Button.displayName = "Button" 