# U9GO UIKit 组件库 WIKI

## 项目简介
U9GO UIKit 是一套专为 Cursor 用户设计的现代化 React + TailwindCSS 组件库模板，支持品牌定制、Dark Mode、完整文档和最佳实践，适合团队和个人二次开发。

---

## 版本历史

### v1.1（2024-06）
- 新增 iOS 26 UIKit 风格设计体系：
  - tokens 拆分为 colors、tokens、typography，统一管理色彩、圆角、间距、字体等。
  - Button/Card 组件全面适配新版 tokens。
  - 体验更现代的 UI 规范。

### v1.0
- 首次发布，支持基础组件、品牌 Logo、文档首页、Dark Mode。

---

## 设计体系（Design Tokens）

- **src/uikit/colors.ts**
  - 统一色彩规范（主色、语义色、灰阶等）
- **src/uikit/tokens.ts**
  - 间距、圆角、图标尺寸、字体粗细等
- **src/uikit/typography.tsx**
  - 字体规范、TextStyle 组件

---

## 主要组件
- Button 按钮（支持多变体/尺寸，已适配 iOS 26 风格）
- Card 卡片（统一圆角/背景色）
- Input 输入框
- Logo 品牌标识
- Loading 加载状态
- ThemeToggle 主题切换

---

## 升级指引
- v1.1 起，所有组件建议直接使用 tokens 变量，便于品牌化和统一维护。
- 组件样式如需自定义，优先修改 src/uikit/ 下的 tokens 文件。
- 参考 Example 页面体验新版风格。

---

## 常见问题 FAQ

**Q: 如何切换主题/暗色模式？**
A: 使用 ThemeToggle 组件，tailwind.config.js 已启用 darkMode: 'class'。

**Q: 如何自定义品牌色？**
A: 修改 src/uikit/colors.ts 中的 primary 字段即可。

**Q: 如何扩展组件？**
A: 按照 src/components/ui/ 目录结构新增组件，并复用 tokens 变量。

---

如需更详细的开发/定制说明，请查阅 README.md 或 Example 页面。 