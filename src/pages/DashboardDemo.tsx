import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Logo } from '@/components/ui/logo'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  BarChart2,
  Settings,
  Bell,
  TrendingUp,
  TrendingDown,
  Package,
  DollarSign,
  Activity,
  ArrowUpRight,
} from 'lucide-react'
import { motionVariants } from '@/lib/motion'

const stats = [
  { label: 'Total Revenue', value: '$48,295', change: '+12.5%', up: true, icon: DollarSign, color: 'text-blue-500' },
  { label: 'Active Users', value: '2,841', change: '+8.2%', up: true, icon: Users, color: 'text-green-500' },
  { label: 'Orders', value: '1,429', change: '-3.1%', up: false, icon: ShoppingCart, color: 'text-purple-500' },
  { label: 'Conversion', value: '3.6%', change: '+0.4%', up: true, icon: Activity, color: 'text-orange-500' },
]

const recentOrders = [
  { id: '#3210', customer: 'Sofia Davis', product: 'Pro Plan', amount: '$99', status: 'Paid' },
  { id: '#3209', customer: 'Jackson Lee', product: 'Starter Pack', amount: '$29', status: 'Paid' },
  { id: '#3208', customer: 'Isabella Nguyen', product: 'Enterprise', amount: '$299', status: 'Pending' },
  { id: '#3207', customer: 'William Kim', product: 'Pro Plan', amount: '$99', status: 'Paid' },
  { id: '#3206', customer: 'Emma Wilson', product: 'Starter Pack', amount: '$29', status: 'Failed' },
]

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Users', icon: Users, active: false },
  { label: 'Orders', icon: ShoppingCart, active: false },
  { label: 'Analytics', icon: BarChart2, active: false },
  { label: 'Products', icon: Package, active: false },
  { label: 'Settings', icon: Settings, active: false },
]

const statusColor: Record<string, string> = {
  Paid: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  Failed: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
}

export default function DashboardDemo() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-950 flex ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <div>
              <p className="font-bold text-gray-900 dark:text-white text-sm">U9GO Admin</p>
              <p className="text-xs text-gray-500">Dashboard</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                item.active
                  ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Admin User</p>
              <p className="text-xs text-gray-500 truncate">admin@u9go.dev</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome back, Admin</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            <ThemeToggle theme={theme} onThemeChange={setTheme} />
            <a href="/" className="text-sm text-blue-500 hover:text-blue-600">← Back</a>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-8 space-y-8 overflow-auto">
          {/* Stats */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={motionVariants.fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: i * 0.05 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</span>
                      <div className={`p-2 rounded-lg bg-gray-50 dark:bg-gray-800 ${stat.color}`}>
                        <stat.icon className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {stat.up
                        ? <TrendingUp className="w-3 h-3 text-green-500" />
                        : <TrendingDown className="w-3 h-3 text-red-500" />}
                      <span className={`text-xs font-medium ${stat.up ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change}
                      </span>
                      <span className="text-xs text-gray-400">vs last month</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Latest 5 transactions</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  View all <ArrowUpRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    {['Order', 'Customer', 'Product', 'Amount', 'Status'].map((h) => (
                      <th key={h} className="text-left text-xs font-medium text-gray-500 uppercase tracking-wide pb-3 pr-4">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                      <td className="py-3 pr-4 font-mono text-gray-600 dark:text-gray-400">{order.id}</td>
                      <td className="py-3 pr-4 font-medium text-gray-900 dark:text-white">{order.customer}</td>
                      <td className="py-3 pr-4 text-gray-600 dark:text-gray-400">{order.product}</td>
                      <td className="py-3 pr-4 font-medium text-gray-900 dark:text-white">{order.amount}</td>
                      <td className="py-3">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColor[order.status]}`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
