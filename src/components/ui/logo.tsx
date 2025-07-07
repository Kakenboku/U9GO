import React from 'react'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'white' | 'primary'
  useImage?: boolean
}

export const Logo: React.FC<LogoProps> = ({ 
  className, 
  size = 'md', 
  variant = 'default',
  useImage = true
}) => {
  const sizeClasses = {
    sm: 'h-6 w-auto',
    md: 'h-8 w-auto',
    lg: 'h-12 w-auto'
  }

  const variantClasses = {
    default: 'filter dark:invert',
    white: 'brightness-0 invert',
    primary: ''
  }

  // 如果使用图片 logo
  if (useImage) {
    return (
      <img 
        src="/logo.png" 
        alt="U9GO Logo"
        className={cn(
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
      />
    )
  }

  // 备选文字 logo
  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  }

  const textVariantClasses = {
    default: 'text-gray-900 dark:text-white',
    white: 'text-white',
    primary: 'text-[#007AFF] dark:text-[#0A84FF]'
  }

  return (
    <div className={cn(
      'font-bold tracking-tight',
      textSizeClasses[size],
      textVariantClasses[variant],
      className
    )}>
      <span className="text-[#007AFF] dark:text-[#0A84FF]">U</span>
      <span className="text-gray-900 dark:text-white">9</span>
      <span className="text-[#007AFF] dark:text-[#0A84FF]">GO</span>
    </div>
  )
} 