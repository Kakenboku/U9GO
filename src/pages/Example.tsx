import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { H1, H2, H3, Body, Caption } from "@/uikit/typography"
import { Phone, Lock, User, Download, Code, Palette, Copy, Check } from "lucide-react"
import { useState } from "react"

const themeColors = [
  { name: "Primary", color: "#007AFF", description: "主色调，用于按钮、链接等" },
  { name: "Background", color: "#F2F2F7", description: "页面背景色" },
  { name: "Danger", color: "#FF3B30", description: "危险操作，删除按钮等" },
  { name: "Success", color: "#34C759", description: "成功状态，确认操作等" },
  { name: "Muted", color: "#E5E5EA", description: "静音色，边框、分割线等" },
  { name: "Gray 400", color: "#8E8E93", description: "辅助文字颜色" },
]

const team = [
  { name: "Sofia Davis", email: "m@example.com", role: "Owner" },
  { name: "Jackson Lee", email: "p@example.com", role: "Developer" },
  { name: "Isabella Nguyen", email: "b@example.com", role: "Billing" },
]

const CodeBlock = ({ children, language = "bash" }: { children: string; language?: string }) => {
  const [copied, setCopied] = useState(false)
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative bg-gray-900 rounded-lg p-4 my-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-400 text-sm">{language}</span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 text-gray-400 hover:text-white text-sm"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? "已复制" : "复制"}
        </button>
      </div>
      <pre className="text-gray-100 text-sm overflow-x-auto">
        <code>{children}</code>
      </pre>
    </div>
  )
}

export default function Example() {
  return (
    <div className="min-h-screen bg-[#F2F2F7]">
      {/* 导航栏 */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <H1 className="text-[#007AFF] text-xl">U9GO UIKit</H1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                下载
              </Button>
              <Button size="sm">
                <Code className="w-4 h-4 mr-2" />
                文档
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 侧边栏 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <H3 className="mb-4">目录</H3>
              <nav className="space-y-2">
                <a href="#installation" className="block text-gray-600 hover:text-[#007AFF]">安装指南</a>
                <a href="#usage" className="block text-gray-600 hover:text-[#007AFF]">使用方法</a>
                <a href="#components" className="block text-gray-600 hover:text-[#007AFF]">组件展示</a>
                <a href="#design-tokens" className="block text-gray-600 hover:text-[#007AFF]">设计规范</a>
                <a href="#examples" className="block text-gray-600 hover:text-[#007AFF]">示例页面</a>
              </nav>
            </div>
          </div>

          {/* 主内容区 */}
          <div className="lg:col-span-2 space-y-12">
            {/* 介绍 */}
            <section>
              <H1 className="mb-4">U9GO UIKit 组件库</H1>
              <Body className="text-lg mb-6">
                一个现代化的 React 组件库，基于 TypeScript + TailwindCSS 构建，
                提供高质量、可定制的 UI 组件，帮助开发者快速构建美观的用户界面。
              </Body>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Code className="w-5 h-5 mr-2" />
                      TypeScript
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Body>完整的类型支持，开发体验更佳</Body>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Palette className="w-5 h-5 mr-2" />
                      可定制
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Body>基于设计 token，轻松定制主题</Body>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Download className="w-5 h-5 mr-2" />
                      轻量级
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Body>按需引入，不影响打包体积</Body>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* 安装指南 */}
            <section id="installation">
              <H2 className="mb-6">安装指南</H2>
              
              <H3 className="mb-4">1. 克隆项目</H3>
              <CodeBlock>
{`git clone https://github.com/Kakenboku/U9GO.git
cd U9GO`}
              </CodeBlock>

              <H3 className="mb-4">2. 安装依赖</H3>
              <CodeBlock>
{`npm install`}
              </CodeBlock>

              <H3 className="mb-4">3. 启动开发服务器</H3>
              <CodeBlock>
{`npm run dev`}
              </CodeBlock>

              <Body className="mt-4">
                访问 <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:5173</code> 查看效果
              </Body>
            </section>

            {/* 使用方法 */}
            <section id="usage">
              <H2 className="mb-6">使用方法</H2>
              
              <H3 className="mb-4">引入组件</H3>
              <CodeBlock language="tsx">
{`import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"`}
              </CodeBlock>

              <H3 className="mb-4">使用组件</H3>
              <CodeBlock language="tsx">
{`// 按钮组件
<Button>默认按钮</Button>
<Button variant="outline">轮廓按钮</Button>
<Button variant="danger">危险按钮</Button>

// 输入框组件
<Input placeholder="请输入内容" />
<Input variant="error" placeholder="错误状态" />

// 卡片组件
<Card>
  <CardHeader>
    <CardTitle>卡片标题</CardTitle>
  </CardHeader>
  <CardContent>
    卡片内容
  </CardContent>
</Card>`}
              </CodeBlock>
            </section>

            {/* 组件展示 */}
            <section id="components">
              <H2 className="mb-6">组件展示</H2>
              
              <H3 className="mb-4">按钮 Button</H3>
              <div className="bg-white rounded-lg p-6 mb-6">
                <div className="flex gap-2 mb-4">
                  <Button>默认</Button>
                  <Button variant="outline">轮廓</Button>
                  <Button variant="danger">危险</Button>
                </div>
                <Caption>支持 default / outline / danger 三种变体</Caption>
              </div>

              <H3 className="mb-4">输入框 Input</H3>
              <div className="bg-white rounded-lg p-6 mb-6">
                <div className="flex flex-col gap-2 mb-4">
                  <Input placeholder="默认输入框" />
                  <Input placeholder="错误状态" variant="error" />
                </div>
                <Caption>支持 default / error 两种状态</Caption>
              </div>

              <H3 className="mb-4">卡片 Card</H3>
              <div className="bg-white rounded-lg p-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle>卡片标题</CardTitle>
                    <CardDescription>卡片描述信息</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Body>这是一个卡片组件的示例，包含标题、描述和内容区域。</Body>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* 设计规范 */}
            <section id="design-tokens">
              <H2 className="mb-6">设计规范</H2>
              
              <H3 className="mb-4">颜色规范</H3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {themeColors.map((color) => (
                  <div key={color.name} className="bg-white rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div 
                        className="w-8 h-8 rounded border" 
                        style={{ background: color.color }}
                      />
                      <div>
                        <div className="font-medium">{color.name}</div>
                        <div className="text-sm text-gray-500">{color.color}</div>
                      </div>
                    </div>
                    <Caption>{color.description}</Caption>
                  </div>
                ))}
              </div>

              <H3 className="mb-4">间距规范</H3>
              <div className="bg-white rounded-lg p-6 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-sm font-medium mb-2">xs: 4px</div>
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">sm: 8px</div>
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">md: 16px</div>
                    <div className="w-16 h-16 bg-gray-200 rounded"></div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">lg: 24px</div>
                    <div className="w-24 h-24 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>

              <H3 className="mb-4">圆角规范</H3>
              <div className="bg-white rounded-lg p-6 mb-6">
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-sm font-medium mb-2">sm: 4px</div>
                    <div className="w-16 h-16 bg-[#007AFF] rounded-sm"></div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">md: 8px</div>
                    <div className="w-16 h-16 bg-[#007AFF] rounded-md"></div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">lg: 12px</div>
                    <div className="w-16 h-16 bg-[#007AFF] rounded-lg"></div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">full: 9999px</div>
                    <div className="w-16 h-16 bg-[#007AFF] rounded-full"></div>
                  </div>
                </div>
              </div>
            </section>

            {/* 示例页面 */}
            <section id="examples">
              <H2 className="mb-6">示例页面</H2>
              
              <H3 className="mb-4">登录表单</H3>
              <div className="bg-white rounded-lg p-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle>登录</CardTitle>
                    <CardDescription>请输入手机号和验证码</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input placeholder="手机号" className="pl-10" />
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input placeholder="验证码" className="pl-10" />
                    </div>
                    <Button className="w-full">登录</Button>
                  </CardContent>
                </Card>
              </div>

              <H3 className="mb-4">团队成员列表</H3>
              <div className="bg-white rounded-lg p-6 mb-6">
                <div className="space-y-2">
                  {team.map((member) => (
                    <div key={member.email} className="flex items-center gap-3 py-2 border-b last:border-b-0">
                      <User className="w-6 h-6 text-gray-400" />
                      <div className="flex-1">
                        <div className="font-medium">{member.name}</div>
                        <div className="text-xs text-gray-500">{member.email}</div>
                      </div>
                      <span className="text-xs text-gray-400">{member.role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <H3 className="mb-4">仪表盘卡片</H3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>总收入</CardTitle>
                    <CardDescription>¥15,231.89</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-green-600">+20.1% 本月</span>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>订阅数</CardTitle>
                    <CardDescription>+2,350</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-blue-600">+180.1% 本月</span>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>团队成员</CardTitle>
                    <CardDescription>3 人</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-gray-600">欢迎加入！</span>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 