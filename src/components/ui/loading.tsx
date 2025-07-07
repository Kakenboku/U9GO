import React from 'react'
import { cn } from '@/lib/utils'
import { Logo } from './logo'

interface LoadingProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  text?: string
}

export const Loading: React.FC<LoadingProps> = ({ 
  className, 
  size = 'md', 
  text = "加载中..." 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  return (
    <div className={cn('flex flex-col items-center justify-center space-y-4', className)}>
      <div className="relative">
        <div className={cn(
          'animate-spin rounded-full border-2 border-gray-200 border-t-[#007AFF] dark:border-gray-700 dark:border-t-[#0A84FF]',
          sizeClasses[size]
        )} />
        <div className="absolute inset-0 flex items-center justify-center">
          <Logo size="sm" variant="primary" />
        </div>
      </div>
      {text && (
        <p className="text-sm text-gray-500 dark:text-gray-400 animate-pulse">
          {text}
        </p>
      )}
    </div>
  )
}

// 简单的 Spinner 组件
export const Spinner: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn(
    'animate-spin rounded-full border-2 border-gray-200 border-t-[#007AFF] dark:border-gray-700 dark:border-t-[#0A84FF] w-4 h-4',
    className
  )} />
) 