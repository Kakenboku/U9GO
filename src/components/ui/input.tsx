import * as React from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"

const inputVariants = tv({
  base: "flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-[#1C1C1E] dark:text-white dark:placeholder:text-gray-400 dark:ring-offset-black dark:focus-visible:ring-[#0A84FF]",
  variants: {
    variant: {
      default: "border-[#E5E5EA] focus-visible:border-[#007AFF] dark:border-[#38383A] dark:focus-visible:border-[#0A84FF]",
      error: "border-[#FF3B30] focus-visible:border-[#FF3B30] focus-visible:ring-[#FF3B30] dark:border-red-500 dark:focus-visible:border-red-500 dark:focus-visible:ring-red-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface InputProps 
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <input 
        className={cn(inputVariants({ variant, className }))} 
        ref={ref} 
        {...props} 
      />
    )
  }
)

Input.displayName = "Input" 