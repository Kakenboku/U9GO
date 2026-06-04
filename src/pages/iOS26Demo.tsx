import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import {
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
  GlassCard
} from '../components/ui/card-glass';
import { motionVariants } from '../lib/motion';
import { blurLevels } from '../uikit/tokens';
import '../App.css';
import { GlassCircleButton } from '../components/ui/glass-circle-button';

const IOS26Demo = () => {
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [dialogBlur] = useState<'soft' | 'medium' | 'heavy'>('medium');

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* 全屏清晰背景图片 */}
      <div className="fixed inset-0 -z-10 w-full h-full">
        <img
          src="/shimoda-01.jpg"
          alt="背景"
          className="w-full h-full object-cover object-center select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {/* 头部 */}
      <motion.header 
        className="glass-effect sticky top-0 z-50 border-b border-white/20"
        variants={motionVariants.fadeInDown}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              U9GO iOS26 组件库
            </motion.h1>
            <Button
              variant="secondary"
              onClick={toggleTheme}
              leftIcon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d={theme === 'light' 
                      ? "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      : "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    } 
                  />
                </svg>
              }
            >
              {theme === 'light' ? '深色模式' : '浅色模式'}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* 卡片背景切换按钮 */}
      <main className="container mx-auto px-6 py-8 space-y-12">
        {/* 顶部：iOS26 玻璃态液态玻璃球体纯视觉 DEMO */}
        <div className="relative flex justify-center items-center min-h-[400px] mt-4 mb-12">
          {/* 背景图层，宽高为卡片的1.8倍，居中 */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0" style={{ width: '612px', height: '324px' }}>
            <img
              src="/shimoda-01.jpg"
              alt="background"
              className="w-full h-full object-cover rounded-[36px] shadow-xl"
              draggable={false}
            />
          </div>
          {/* 纯视觉液态玻璃球体，无内容 */}
          <div style={{ width: 260, height: 260, margin: '0 auto' }}>
            <div
              className="liquid-glass-ball w-full h-full"
              style={{ backdropFilter: blurLevels[dialogBlur], WebkitBackdropFilter: blurLevels[dialogBlur] }}
            ></div>
          </div>
        </div>
        {/* iOS 风格 3D GlassCircleButton 播放器示例（带背景图） */}
        <div className="relative flex justify-center items-center mb-12" style={{ minHeight: 260 }}>
          {/* 背景图片层，居中、圆角、阴影 */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0" style={{ width: 420, height: 220 }}>
            <img
              src="/shimoda-01.jpg"
              alt="background"
              className="w-full h-full object-cover rounded-[36px] shadow-xl"
              draggable={false}
            />
          </div>
          {/* 播放器按钮浮在图片中央 */}
          <div className="relative z-10 flex gap-8 justify-center items-center w-full" style={{ minHeight: 180 }}>
            <GlassCircleButton depth="3D" blur={dialogBlur} size={64}>
              {/* 上一首 */}
              <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="18,8 10,14 18,20" />
                <rect x="8" y="8" width="2" height="12" rx="1" fill="white" />
              </svg>
            </GlassCircleButton>
            <GlassCircleButton depth="3D" blur={dialogBlur} size={88}>
              {/* 暂停 */}
              <svg width="32" height="32" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
                <rect x="8" y="8" width="5" height="16" rx="2.5" fill="white" />
                <rect x="19" y="8" width="5" height="16" rx="2.5" fill="white" />
              </svg>
            </GlassCircleButton>
            <GlassCircleButton depth="3D" blur={dialogBlur} size={64}>
              {/* 下一首 */}
              <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="10,8 18,14 10,20" />
                <rect x="18" y="8" width="2" height="12" rx="1" fill="white" />
              </svg>
            </GlassCircleButton>
          </div>
        </div>




        {/* 按钮组件区（白色卡片） */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <CardHeader>
            <CardTitle>按钮组件</CardTitle>
            <CardDescription>
              支持多种变体和状态的 iOS26 风格按钮
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <Button variant="primary">主按钮</Button>
              <Button variant="secondary">次要按钮</Button>
              <Button variant="outline">描边按钮</Button>
              <Button variant="ghost">幽灵按钮</Button>
              <Button variant="danger">危险按钮</Button>
              <Button variant="success">成功按钮</Button>
              <Button variant="warning">警告按钮</Button>
              <Button loading={loading} onClick={handleLoadingClick} variant="primary">加载按钮</Button>
            </div>
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3">不同尺寸</h4>
              <div className="flex items-center gap-4">
                <Button size="sm">小按钮</Button>
                <Button size="md">中按钮</Button>
                <Button size="lg">大按钮</Button>
                <Button size="xl">超大按钮</Button>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-3">带图标按钮</h4>
              <div className="flex items-center gap-4">
                <Button leftIcon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>}>添加项目</Button>
                <Button variant="outline" rightIcon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>}>下一步</Button>
              </div>
            </div>
          </CardContent>
        </div>

        {/* 玻璃态卡片区（白色卡片，内部网格展示多种玻璃态子卡片） */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <CardHeader>
            <CardTitle>玻璃态卡片</CardTitle>
            <CardDescription>
              具有玻璃态高级效果和动画的卡片组件
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <GlassCard blur={dialogBlur} className="mb-0">
                <CardHeader>
                  <CardTitle>默认卡片</CardTitle>
                  <CardDescription>可交互的默认玻璃态卡片</CardDescription>
                </CardHeader>
                <CardContent>
                  这是一个可交互玻璃态效果的卡片，支持悬停动画和点击交互。
                </CardContent>
                <CardFooter>
                  <Button size="sm">了解更多</Button>
                </CardFooter>
              </GlassCard>
              <GlassCard blur={dialogBlur} className="mb-0">
                <CardHeader>
                  <CardTitle>高亮卡片</CardTitle>
                  <CardDescription>具有更强玻璃态效果的卡片</CardDescription>
                </CardHeader>
                <CardContent>
                  这个卡片具有更强的玻璃态效果和更明显的阴影。
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" size="sm">操作</Button>
                </CardFooter>
              </GlassCard>
              <GlassCard blur={dialogBlur} className="mb-0">
                <CardHeader>
                  <CardTitle>渐变卡片</CardTitle>
                  <CardDescription>具有渐变背景的玻璃态卡片</CardDescription>
                </CardHeader>
                <CardContent>
                  这个卡片使用了渐变背景，创造出更丰富的视觉效果。
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">查看详情</Button>
                </CardFooter>
              </GlassCard>
              <GlassCard blur={dialogBlur} className="mb-0">
                <CardHeader>
                  <CardTitle>透明卡片</CardTitle>
                  <CardDescription>完全透明的玻璃态卡片</CardDescription>
                </CardHeader>
                <CardContent>
                  这个卡片具有完全透明的背景，只保留边框和阴影效果。
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm">取消</Button>
                </CardFooter>
              </GlassCard>
              <GlassCard blur={dialogBlur} className="mb-0">
                <CardHeader>
                  <CardTitle>大尺寸卡片</CardTitle>
                  <CardDescription>使用大尺寸的玻璃态卡片</CardDescription>
                </CardHeader>
                <CardContent>
                  这个卡片使用了更大的内边距，适合展示更多内容。
                </CardContent>
                <CardFooter>
                  <Button variant="primary" size="sm">开始使用</Button>
                </CardFooter>
              </GlassCard>
              <GlassCard blur={dialogBlur} className="mb-0">
                <CardHeader>
                  <CardTitle>小尺寸卡片</CardTitle>
                  <CardDescription>紧凑的玻璃态卡片</CardDescription>
                </CardHeader>
                <CardContent>
                  适合在有限空间内展示简洁信息。
                </CardContent>
                <CardFooter>
                  <Button variant="danger" size="sm">删除</Button>
                </CardFooter>
              </GlassCard>
            </div>
          </CardContent>
        </div>

        {/* 欢迎使用区（白色卡片，特性介绍） */}
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">欢迎使用 U9GO iOS26 组件库</h2>
          <p className="text-gray-600 mb-4">基于 iOS26 设计规范，现代化 Web 玻璃态 UI 组件系统</p>
          <div className="flex flex-wrap justify-center gap-6 text-left text-gray-500 text-sm mx-auto max-w-3xl">
            <ul className="space-y-1 min-w-[180px]">
              <li>• 玻璃态视觉效果</li>
              <li>• iOS26 色彩系统</li>
              <li>• 圆润的层次感</li>
              <li>• 流畅的动画反馈</li>
              <li>• 深色模式支持</li>
            </ul>
            <ul className="space-y-1 min-w-[180px]">
              <li>• TypeScript 支持</li>
              <li>• Framer Motion 动画</li>
              <li>• Tailwind CSS 样式</li>
              <li>• 响应式设计</li>
              <li>• 无障碍访问</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IOS26Demo; 