import React from 'react'
import { cn } from '@/lib/utils'

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export const H1: React.FC<TypographyProps> = ({ children, className }) => (
  <h1 className={cn('text-3xl font-bold text-gray-900', className)}>
    {children}
  </h1>
)

export const H2: React.FC<TypographyProps> = ({ children, className }) => (
  <h2 className={cn('text-2xl font-semibold text-gray-900', className)}>
    {children}
  </h2>
)

export const H3: React.FC<TypographyProps> = ({ children, className }) => (
  <h3 className={cn('text-xl font-medium text-gray-900', className)}>
    {children}
  </h3>
)

export const Body: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn('text-base text-gray-700', className)}>
    {children}
  </p>
)

export const Caption: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn('text-sm text-gray-500', className)}>
    {children}
  </p>
) 