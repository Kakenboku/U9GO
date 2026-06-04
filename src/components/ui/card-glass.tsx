import React from 'react';
import { cn } from '../../lib/utils';
import { blurLevels } from '../../uikit/tokens';

export interface CardGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'gradient' | 'transparent';
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  backgroundType?: 'image' | 'gradient';
  backgroundImage?: string;
  gradientColors?: string[];
}

export const CardGlass = React.forwardRef<HTMLDivElement, CardGlassProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      interactive = false,
      backgroundType = 'gradient',
      backgroundImage,
      gradientColors = [
        'from-blue-400/60',
        'via-purple-300/40',
        'to-pink-200/40',
      ],
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          // 更大圆角、更强模糊、发光描边
          'relative overflow-hidden rounded-[32px] transition-all duration-300 ease-out',
          'backdrop-blur-2xl bg-white/30 ring-1 ring-white/40 border border-white/20 dark:bg-black/30 dark:border-white/10 shadow-glass p-6',
          variant === 'elevated' && 'shadow-2xl border-white/30',
          variant === 'gradient' && 'border-0',
          variant === 'transparent' && 'bg-white/10 border-0',
          size === 'sm' && 'p-3',
          size === 'lg' && 'p-10',
          interactive && 'hover:scale-[1.02] active:scale-95 cursor-pointer',
          className
        )}
        {...props}
      >
        {/* 背景层 */}
        {backgroundType === 'image' && backgroundImage && (
          <img
            src={backgroundImage}
            alt="card-bg"
            className="absolute inset-0 w-full h-full object-cover object-center z-0 select-none pointer-events-none"
            draggable={false}
          />
        )}
        {backgroundType === 'gradient' && (
          <div
            className={cn(
              'absolute inset-0 z-0 animate-glass-gradient',
              `bg-gradient-to-br ${gradientColors.join(' ')}`
            )}
            aria-hidden="true"
          />
        )}
        {/* 玻璃态遮罩层 */}
        <div className="absolute inset-0 z-10 bg-white/40 dark:bg-black/30 backdrop-blur-2xl pointer-events-none" />
        {/* 内容层 */}
        <div className="relative z-20">
          {props.children}
        </div>
      </div>
    );
  }
);
CardGlass.displayName = 'CardGlass';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  blur?: 'soft' | 'medium' | 'heavy';
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, blur = 'medium', style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'relative p-6 rounded-[24px] border border-[rgba(255,255,255,0.2)]',
        'bg-[linear-gradient(135deg,rgba(255,255,255,0.3),rgba(255,255,255,0.05))]',
        'shadow-[inset_0_0_20px_rgba(255,255,255,0.25)]',
        'shadow-[0_4px_24px_rgba(0,0,0,0.1)]',
        className
      )}
      style={{ ...(style || {}), backdropFilter: blurLevels[blur] }}
      {...props}
    />
  )
);
GlassCard.displayName = 'GlassCard';

export const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mb-4', className)} {...props} />
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn('text-xl font-semibold mb-1', className)} {...props} />
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn('text-gray-600 dark:text-gray-400 text-sm mb-2', className)} {...props} />
);
CardDescription.displayName = 'CardDescription';

export const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mb-4', className)} {...props} />
);
CardContent.displayName = 'CardContent';

export const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('pt-2 flex justify-end', className)} {...props} />
);
CardFooter.displayName = 'CardFooter'; 