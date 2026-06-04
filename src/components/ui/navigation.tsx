
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '主页', icon: '🏠' },
    { path: '/example', label: '示例', icon: '📝' },
    { path: '/ios26', label: 'iOS26 演示', icon: '🎨' },
  ];

  return (
    <nav className={cn('glass-effect rounded-2xl p-2', className)}>
      <div className="flex items-center space-x-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-white/20 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/10'
              )}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-blue-500/10 rounded-xl pointer-events-none"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export { Navigation }; 