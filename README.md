# U9GO UIKit - Cursor 模板项目

一个专为 Cursor 用户设计的 UIKit 风格组件库模板，基于 React + TypeScript + TailwindCSS + shadcn/ui 构建。

## 🎯 **Cursor 模板特性**

这是一个完整的 Cursor 模板项目，用户可以直接：

1. **克隆项目**作为基础模板
2. **引用 .cursorrc 配置**了解项目结构
3. **按照预设 UI 配置**进行开发
4. **使用完整的组件库**和设计系统

## 🚀 技术栈

- **Vite** - 快速的前端构建工具
- **React 18** - 用户界面库
- **TypeScript** - 类型安全的 JavaScript
- **TailwindCSS** - 实用优先的 CSS 框架
- **shadcn/ui** - 高质量组件库
- **Lucide React** - 精美图标库
- **tailwind-variants** - 样式变体管理

## 📦 快速开始

```bash
# 克隆项目
git clone https://github.com/Kakenboku/U9GO.git
cd U9GO

# 安装依赖
npm install --legacy-peer-deps

# 启动开发服务器
npm run dev
```

## 🎨 UI 配置预设

项目包含完整的 UI 配置预设：

### 设计 Token
```typescript
// 颜色规范
primary: '#007AFF'
background: '#F2F2F7'
danger: '#FF3B30'
success: '#34C759'
muted: '#E5E5EA'

// 间距规范
xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px

// 圆角规范
sm: 4px, md: 8px, lg: 12px, xl: 16px
```

### 组件预设
- **Button**: default/outline/danger 变体，sm/md/lg 尺寸
- **Input**: default/error 状态，带图标支持
- **Card**: 完整的卡片组件，包含 Header/Content/Footer
- **Logo**: 品牌 Logo，支持多种尺寸和变体
- **Loading**: 加载状态组件，包含完整和简单版本
- **ThemeToggle**: 主题切换组件，支持 Dark Mode

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

## 🎨 品牌元素

### Logo 组件

```tsx
import { Logo } from "@/components/ui/logo"

// 基础用法
<Logo />

// 不同尺寸
<Logo size="sm" />
<Logo size="md" />
<Logo size="lg" />

// 不同变体
<Logo variant="default" />
<Logo variant="white" />
<Logo variant="primary" />
```

### Loading 组件

```tsx
import { Loading, Spinner } from "@/components/ui/loading"

// 完整加载状态
<Loading size="md" text="加载中..." />

// 简单旋转器
<Spinner />
```

## 🧩 组件使用

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

## 📁 项目结构

```
src/
├── components/
│   └── ui/           # UI 组件目录 - 基于 shadcn/ui 风格
│       ├── button.tsx
│       ├── input.tsx
│       ├── card.tsx
│       ├── logo.tsx      # 品牌 Logo
│       ├── loading.tsx   # 加载状态
│       └── theme-toggle.tsx
├── uikit/            # 设计系统目录 - 颜色、间距、主题配置
│   ├── colors.ts     # 颜色规范
│   ├── tokens.ts     # 设计 token
│   ├── theme.ts      # 主题配置
│   └── typography.tsx # 排版组件
├── pages/            # 页面目录 - 示例和文档页面
│   └── Example.tsx   # 完整示例页面
└── lib/              # 工具函数 - cn 工具函数等
    └── utils.ts
public/
└── favicon.ico       # 网站图标
```

## 🛠️ 开发指南

### 开发流程
1. 克隆此项目作为基础模板
2. 根据 `.cursorrc` 配置了解项目结构
3. 使用预设的 UI 组件和设计系统
4. 按照设计规范扩展新组件
5. 自定义品牌元素和主题

### 开发提示
- 遵循 UIKit 设计规范，保持组件一致性
- 使用 `tailwind-variants` 管理复杂的样式变体
- 组件应该支持 Dark Mode
- 保持 TypeScript 类型安全
- 参考 `src/pages/Example.tsx` 了解组件使用方式

## 🎯 Cursor 模板使用

### 作为模板项目
```bash
# 克隆项目
git clone https://github.com/Kakenboku/U9GO.git

# 切换到模板分支
git checkout cursor-template

# 开始开发
npm install --legacy-peer-deps
npm run dev
```

### .cursorrc 配置特性
- **完整的项目结构说明**：每个目录的功能和用途
- **UI 配置预设**：设计 token、组件规范、样式管理
- **开发指南**：工作流程和最佳实践
- **自定义说明**：如何修改品牌元素和设计系统
- **使用示例**：组件导入和使用方式

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
