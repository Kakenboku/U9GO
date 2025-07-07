import React from 'react'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'white' | 'primary'
}

export const Logo: React.FC<LogoProps> = ({ 
  className, 
  size = 'md', 
  variant = 'default' 
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  }

  const variantClasses = {
    default: 'text-gray-900 dark:text-white',
    white: 'text-white',
    primary: 'text-[#007AFF] dark:text-[#0A84FF]'
  }

  return (
    <div className={cn(
      'font-bold tracking-tight',
      sizeClasses[size],
      variantClasses[variant],
      className
    )}>
      <span className="text-[#007AFF] dark:text-[#0A84FF]">U</span>
      <span className="text-gray-900 dark:text-white">9</span>
      <span className="text-[#007AFF] dark:text-[#0A84FF]">GO</span>
    </div>
  )
} 