# 汪双维 — 个人品牌官网 V2.0

> 连锁门店增长顾问 · Growth Consultant
> 增长，不靠运气。

---

## 项目结构

```
wang-brand-v2/
├── index.html          # 主页面（完整10屏+）
├── style.css           # 样式表（Apple HIG 设计系统）
├── main.js             # 交互与动画
├── assets/             # 静态资源目录
│   ├── images/         # 图片（人物照、品牌Logo、二维码）
│   ├── og-image.jpg    # OG 分享图
│   └── favicon.ico     # 网站图标
└── README.md           # 本文件
```

---

## 设计规范

### 配色
- 背景：`#FAF8F5`（暖米白）
- 深色背景：`#1A1410`（暖黑）
- 强调色：`#C4783A`（琥珀棕）
- 文字：`#1A1410` / `#6B5E54` / `#9E9185`

### 字体
- 中文：Noto Sans SC（Google Fonts）
- 英文/数字：SF Pro Display（系统字体回退）
- 等宽：SF Mono

### 间距系统
- 基于 8px 网格
- 大区隔：`128px` / `160px`
- 小区隔：`16px` / `24px`

---

## 页面结构（共10屏+）

| # | 板块 | 说明 |
|---|------|------|
| 1 | Hero | 价值主张第一屏，人物照片 + 三按钮 |
| 2 | Logo Wall | 合作品牌墙（Apple风格） |
| 3 | Impact | 核心数据（暗色大数字） |
| 4 | About / Timeline | 职业历程时间轴 |
| 5 | Capabilities | 六大增长能力卡片 |
| 6 | Growth OS | 增长操作系统流程图 |
| 7 | Projects | 代表案例（Apple Card） |
| 8 | Key Results | 标志成果数据 |
| 9 | Insights | 洞察文章（SEO） |
| 10 | Contact | 联系我（CTA） |

---

## 动画清单

- [x] Scroll Reveal（滚动渐显）
- [x] 数字计数器动画（IntersectionObserver）
- [x] Timeline 逐项出现
- [x] Growth OS 步骤逐项出现
- [x] Logo Hover 变色
- [x] 卡片 Hover 3D 倾斜
- [x] 导航栏毛玻璃（滚动时）
- [x] 锚点平滑滚动
- [x] Parallax（Hero 视觉区）

---

## 待替换资源

### 必须替换
1. **人物照片**：`index.html` 第 192 行附近
   - 尺寸：1200×1500px
   - 风格：商务照、暖色、极简背景
   - 替换 `.hero-photo-placeholder`

2. **品牌 Logo**：`index.html` 第 210 行附近
   - 将文字替换为实际品牌 Logo 图片
   - 建议格式：SVG 或 PNG（透明底）

3. **微信二维码**：`index.html` 第 500 行附近
   - 替换 `.contact-qr` 内的占位符

4. **OG 分享图**：`assets/og-image.jpg`
   - 尺寸：1200×630px
   - 用于社交分享预览

### 可选增强
- [ ] 添加 favicon 实际图片
- [ ] 替换 Insight 卡片缩略图
- [ ] 添加 Schema.org 更多结构化数据
- [ ] 集成 Formspree / EmailJS（联系表单）

---

## 部署

### GitHub Pages
```bash
# 在仓库根目录
git init
git add .
git commit -m "Initial commit: 汪双维个人品牌官网 V2.0"
git branch -M main
git remote add origin https://github.com/yourusername/wang-brand.git
git push -u origin main
# 在 GitHub 仓库设置中启用 GitHub Pages
```

### Vercel
```bash
npm i -g vercel
cd wang-brand-v2
vercel --prod
```

### 任意静态托管
直接将 `wang-brand-v2/` 目录上传至任意支持静态文件的服务器。

---

## SEO 已配置

- [x] Title（60字符内）
- [x] Description（160字符内）
- [x] Open Graph（og:title, og:description, og:image）
- [x] Twitter Card
- [x] Schema.org Person 结构化数据
- [x] Canonical URL
- [x] 语义化 HTML（header, nav, section, article, footer）
- [x] aria-label 无障碍属性

---

## 浏览器支持

- Chrome/Edge 90+
- Safari 14+
- Firefox 88+
- 移动端 Safari（iOS 14+）
- 移动端 Chrome（Android 10+）

---

## 代码统计

| 文件 | 行数 |
|------|------|
| index.html | ~650 行 |
| style.css | ~900 行 |
| main.js | ~350 行 |
| **合计** | **~1900 行** |

---

## 设计参考

- Apple Human Interface Guidelines
- Stripe 官网设计系统
- McKinsey & Company 品牌页
- Linear 官网
- Vercel 官网

---

## 联系方式

- 电话：189 6448 0773
- 邮箱：womeng2018@gmail.com
- 地点：中国 · 上海

---

*最后更新：2025年6月*
