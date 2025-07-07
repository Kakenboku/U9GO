# U9GO UIKit

一个现代化的 UIKit 风格组件库，基于 React + TypeScript + TailwindCSS 构建。

## 🚀 技术栈

- **Vite** - 快速的前端构建工具
- **React 18** - 用户界面库
- **TypeScript** - 类型安全的 JavaScript
- **TailwindCSS** - 实用优先的 CSS 框架
- **shadcn/ui** - 高质量组件库
- **Lucide React** - 精美图标库
- **tailwind-variants** - 样式变体管理

## 📦 安装

```bash
# 克隆项目
git clone https://github.com/Kakenboku/U9GO.git
cd U9GO

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 🌙 Dark Mode 支持

项目已预置 Dark Mode 支持，使用 `tailwind-variants` 管理样式状态：

```tsx
import { ThemeToggle } from "@/components/ui/theme-toggle"

// 在组件中使用
<ThemeToggle 
  theme={currentTheme} 
  onThemeChange={setTheme} 
/>
```

## 🎨 设计系统

### 颜色规范

```typescript
export const UIKitColors = {
  primary: '#007AFF',    // 主色调
  background: '#F2F2F7', // 背景色
  danger: '#FF3B30',     // 危险色
  success: '#34C759',    // 成功色
  muted: '#E5E5EA',      // 静音色
  gray: {
    100: '#F2F2F7',
    200: '#E5E5EA',
    400: '#8E8E93',
  },
}
```

### 间距规范

```typescript
export const UIKitTokens = {
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
}
```

## 🧩 组件

### Button 按钮

```tsx
import { Button } from "@/components/ui/button"

// 基础用法
<Button>默认按钮</Button>

// 变体
<Button variant="outline">轮廓按钮</Button>
<Button variant="danger">危险按钮</Button>

// 尺寸
<Button size="sm">小按钮</Button>
<Button size="md">中按钮</Button>
<Button size="lg">大按钮</Button>
```

### Input 输入框

```tsx
import { Input } from "@/components/ui/input"

// 基础用法
<Input placeholder="请输入内容" />

// 变体
<Input variant="error" placeholder="错误状态" />
```

### Card 卡片

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>卡片标题</CardTitle>
  </CardHeader>
  <CardContent>
    卡片内容
  </CardContent>
</Card>
```

### ThemeToggle 主题切换

```tsx
import { ThemeToggle } from "@/components/ui/theme-toggle"

<ThemeToggle 
  theme="light" 
  onThemeChange={(theme) => console.log(theme)} 
/>
```

## 📁 项目结构

```
src/
├── components/
│   └── ui/           # UI 组件
│       ├── button.tsx
│       ├── input.tsx
│       ├── card.tsx
│       └── theme-toggle.tsx
├── uikit/            # 设计系统
│   ├── colors.ts     # 颜色规范
│   ├── tokens.ts     # 设计 token
│   ├── theme.ts      # 主题配置
│   └── typography.tsx # 排版组件
├── pages/            # 页面
│   └── Example.tsx   # 示例页面
└── lib/              # 工具函数
    └── utils.ts
```

## 🛠️ 开发

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview

# 类型检查
npm run type-check
```

## 🎯 Cursor 模板

项目包含 `.cursorrc` 配置文件，支持 Cursor 一键识别模板结构：

- 使用 `cursor-template` 分支获取完整模板
- 包含项目结构说明和快速开始指南
- 支持 Cursor 智能代码补全和项目理解

```bash
# 切换到模板分支
git checkout cursor-template
```

## 📝 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 🔗 相关链接

- [项目地址](https://github.com/Kakenboku/U9GO)
- [TailwindCSS 文档](https://tailwindcss.com/)
- [shadcn/ui 文档](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [tailwind-variants](https://www.tailwind-variants.com/)
