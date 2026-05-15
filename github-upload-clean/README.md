# Roxy163 个人 AI 产品作品集

本项目是一个静态部署友好的 Vite + React + TypeScript 个人作品集网站。

## 常用命令

```bash
npm.cmd install
npm.cmd run build
npm.cmd run serve
```

本地预览地址默认是：

```text
http://127.0.0.1:4173/
```

注意：`127.0.0.1` 只代表你自己的电脑，别人打不开。要发给招聘方或朋友，请先部署到公网。具体步骤见 `DEPLOY.md`。

如果只是同一个 Wi-Fi 下临时预览，可以使用：

```bash
npm.cmd run dev:lan
```

## 以后主要改哪里

- 改姓名、定位、邮箱、微信、项目文案、Demo/GitHub 链接：`src/data/portfolio.ts`
- 替换项目图片：`public/images/`
- 替换简历 PDF：`public/resume.pdf`
- 改页面结构：`src/App.tsx`
- 改视觉样式：`src/styles.css`

## 预留图片路径

项目里已经引用这些路径。你后续把同名图片放进去即可：

```text
public/images/tarot-app-placeholder.png
public/images/ai-products-report-placeholder.png
public/images/coze-agent-placeholder.png
public/images/ai-report-cover.png
public/images/ai-report-method.png
public/images/ai-report-comparison.png
public/images/ai-report-workflow.png
```

如果图片不存在，页面会显示“图片待补充”的占位区，不会报错。
