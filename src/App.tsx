import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Logo } from './components/ui/logo'
import { Loading } from './components/ui/loading'
import { ThemeToggle } from './components/ui/theme-toggle'
import { 
  Code, 
  Download, 
  Palette, 
  Zap, 
  Type, 
  Layers, 
  Moon, 
  Github,
  ExternalLink,
  CheckCircle,
  Sparkles
} from 'lucide-react'
import './index.css'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [isLoading, setIsLoading] = useState(false)

  const handleTemplateDownload = () => {
    setIsLoading(true)
    // 模拟下载过程
    setTimeout(() => {
      setIsLoading(false)
      window.open('https://github.com/Kakenboku/U9GO', '_blank')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Logo size="md" />
            <div>
              <h1 className="text-xl font-bold">U9GO UIKit</h1>
              <p className="text-sm text-muted-foreground">Cursor 模板项目</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle theme={theme} onThemeChange={setTheme} />
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('https://github.com/Kakenboku/U9GO', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Logo size="lg" />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              U9GO UIKit 模板
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              专为 Cursor 用户设计的 UIKit 风格组件库模板，基于 React + TypeScript + TailwindCSS + shadcn/ui 构建
            </p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Button size="lg" onClick={handleTemplateDownload} disabled={isLoading}>
                {isLoading ? (
                  <Loading size="sm" text="准备中..." />
                ) : (
                  <>
                    <Download className="w-5 h-5 mr-2" />
                    获取模板
                  </>
                )}
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.open('/example', '_blank')}>
                <ExternalLink className="w-5 h-5 mr-2" />
                查看示例
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-success" />
                完整的组件库
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-success" />
                Dark Mode 支持
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-success" />
                TypeScript 类型安全
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Cursor 模板特性</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              这是一个完整的 Cursor 模板项目，用户可以直接克隆使用，按照预设配置进行开发
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>完整的 .cursorrc 配置</CardTitle>
                <CardDescription>
                  包含项目结构说明、UI 配置预设、开发指南和自定义说明
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-success" />
                    项目结构说明
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-success" />
                    UI 配置预设
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-success" />
                    开发工作流程
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>UIKit 设计系统</CardTitle>
                <CardDescription>
                  基于 iOS UIKit 设计规范，包含完整的颜色、间距、圆角规范
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-success" />
                    设计 Token 管理
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-success" />
                    组件样式规范
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-success" />
                    品牌元素预设
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>现代化技术栈</CardTitle>
                <CardDescription>
                  基于最新的前端技术，提供优秀的开发体验
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-success" />
                    React 18 + TypeScript
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-success" />
                    TailwindCSS + shadcn/ui
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-success" />
                    Vite 构建工具
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>丰富的组件库</CardTitle>
                <CardDescription>
                  预设常用 UI 组件，支持多种变体和尺寸
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-success" />
                    Button、Input、Card
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-success" />
                    Logo、Loading 组件
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-success" />
                    ThemeToggle 主题切换
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Moon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Dark Mode 支持</CardTitle>
                <CardDescription>
                  完整的暗色主题支持，使用 tailwind-variants 管理样式
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-success" />
                    一键主题切换
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-success" />
                    样式变体管理
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-success" />
                    响应式设计
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Type className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>TypeScript 类型安全</CardTitle>
                <CardDescription>
                  完整的类型定义，提供优秀的开发体验
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-success" />
                    组件 Props 类型
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-success" />
                    设计 Token 类型
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-success" />
                    工具函数类型
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">快速开始</h2>
              <p className="text-muted-foreground">
                只需几个步骤，即可开始使用 U9GO UIKit 模板
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-primary" />
                    作为模板使用
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">1. 克隆项目</h4>
                    <code className="text-sm bg-muted p-2 rounded block">
                      git clone https://github.com/Kakenboku/U9GO.git
                    </code>
                  </div>
                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">2. 切换到模板分支</h4>
                    <code className="text-sm bg-muted p-2 rounded block">
                      git checkout cursor-template
                    </code>
                  </div>
                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">3. 安装依赖</h4>
                    <code className="text-sm bg-muted p-2 rounded block">
                      npm install --legacy-peer-deps
                    </code>
                  </div>
                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">4. 开始开发</h4>
                    <code className="text-sm bg-muted p-2 rounded block">
                      npm run dev
                    </code>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="w-5 h-5 mr-2 text-primary" />
                    组件使用示例
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">导入组件</h4>
                      <code className="text-sm bg-muted p-2 rounded block">
                        {"import { Button, Logo, Loading } from '@/components/ui'"}
                      </code>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">基础使用</h4>
                      <code className="text-sm bg-muted p-2 rounded block">
                        {"<Button variant='primary'><Logo size='sm' /> 点击我</Button>"}
                      </code>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">主题切换</h4>
                      <code className="text-sm bg-muted p-2 rounded block">
                        {"<ThemeToggle theme={theme} onThemeChange={setTheme} />"}
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Logo size="sm" />
              <div>
                <p className="font-semibold">U9GO UIKit</p>
                <p className="text-sm text-muted-foreground">Cursor 模板项目</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={() => window.open('https://github.com/Kakenboku/U9GO', '_blank')}>
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="sm" onClick={() => window.open('/example', '_blank')}>
                <ExternalLink className="w-4 h-4 mr-2" />
                示例页面
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>MIT License • 专为 Cursor 用户设计的 UIKit 组件库模板</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App 