import { Button } from "@/components/ui/button"
import { UIKitTokens } from "@/uikit/tokens"
import { UIKitColors } from "@/uikit/colors"

// 动态渐变动画样式（可放入全局 CSS，但这里用 style 标签内联演示）
const GradientAnimationStyle = () => (
  <style>{`
    @keyframes gradient-x {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 8s ease-in-out infinite;
    }
  `}</style>
)

function GlassCardDemo({ shape = "circle", gradient = "from-pink-200 via-blue-200 to-purple-200" }: { shape?: "circle" | "rounded" | "ellipse", gradient?: string }) {
  let shapeClass = "rounded-full w-64 h-64";
  if (shape === "rounded") shapeClass = "rounded-[48px] w-80 h-56";
  if (shape === "ellipse") shapeClass = "rounded-full w-80 h-48";
  return (
    <div className={`flex items-center justify-center min-h-[320px] animate-gradient-x bg-gradient-to-br ${gradient} mb-8`}>
      <div
        className={`relative flex items-center justify-center bg-white/20 backdrop-blur-2xl border border-white/30 shadow-2xl ${shapeClass}`}
        style={{
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 1.5px 8px 0 rgba(255,255,255,0.25) inset"
        }}
      >
        {/* 可放内容 */}
      </div>
    </div>
  );
}

export default function Example() {
  return (
    <div className="min-h-screen bg-[#F2F2F7] py-12 px-4">
      {/* UIKit 设计规范区块 */}
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl font-extrabold mb-6">UIKit 设计规范</h1>
        {/* 色板 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">颜色 Color</h2>
          <div className="flex gap-6">
            {Object.entries(UIKitColors).map(([key, val]) => (
              typeof val === 'string' ? (
                <div key={key} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full mb-1" style={{ background: val }} />
                  <span className="text-xs text-gray-600">{key}</span>
                  <span className="text-xs text-gray-400">{val}</span>
                </div>
              ) : null
            ))}
          </div>
        </div>
        {/* 圆角 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">圆角 BorderRadius</h2>
          <div className="flex gap-6">
            {Object.entries(UIKitTokens.borderRadius).map(([key, val]) => (
              <div key={key} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#007AFF] mb-1" style={{ borderRadius: val }} />
                <span className="text-xs text-gray-600">{key}</span>
                <span className="text-xs text-gray-400">{val}</span>
              </div>
            ))}
          </div>
        </div>
        {/* 间距 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">间距 Spacing</h2>
          <div className="flex gap-6 items-end">
            {Object.entries(UIKitTokens.spacing).map(([key, val]) => (
              <div key={key} className="flex flex-col items-center">
                <div className="w-8" style={{ height: val, background: '#E5E5EA', borderRadius: 4 }} />
                <span className="text-xs text-gray-600 mt-1">{key}</span>
                <span className="text-xs text-gray-400">{val}</span>
              </div>
            ))}
          </div>
        </div>
        {/* 字体 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">字体 Typography</h2>
          <div className="flex flex-col gap-2">
            {Object.entries(UIKitTokens.fontSize).map(([key, size]) => (
              <span key={key} style={{ fontSize: size, fontWeight: UIKitTokens.fontWeight.bold }}>
                {key}: 字体示例（{size}, {UIKitTokens.fontWeight.bold}）
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* 组件演示区块 */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-6">UIKit 组件演示</h1>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Button 组件（tokens 驱动）</h2>
          <div className="mb-8 flex gap-4">
            <Button variant="primary">新版主按钮</Button>
            <Button variant="outline">新版描边按钮</Button>
            <Button variant="danger">新版危险按钮</Button>
            <Button variant="primary" disabled>禁用按钮</Button>
          </div>
          <pre className="bg-gray-100 rounded p-4 mt-4 text-xs overflow-x-auto">
{`<Button
  style={{
    padding: '${UIKitTokens.spacing.sm} ${UIKitTokens.spacing.lg}',
    borderRadius: '${UIKitTokens.borderRadius.lg}',
    background: '${UIKitColors.primary}',
    color: '#fff',
    fontSize: '${UIKitTokens.fontSize.xl}',
    fontWeight: ${UIKitTokens.fontWeight.bold},
  }}
>
  主按钮（Primary）
</Button>`}
          </pre>
        </div>
        {/* 可继续添加 Card、Input 等组件演示 */}
      </div>
      {/* 多形态玻璃风格卡片演示区块 */}
      <GradientAnimationStyle />
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl font-extrabold mb-6">多形态+动态渐变玻璃卡片</h1>
        <GlassCardDemo shape="circle" gradient="from-pink-200 via-blue-200 to-purple-200" />
        <GlassCardDemo shape="rounded" gradient="from-green-200 via-cyan-200 to-blue-200" />
        <GlassCardDemo shape="ellipse" gradient="from-yellow-200 via-pink-200 to-red-200" />
        <div className="text-center text-gray-500 text-sm">iOS 26 UIKit 多形态拟物玻璃质感（Glassmorphism）视觉演示</div>
      </div>
    </div>
  )
} 