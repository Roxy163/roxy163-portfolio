# Roxy163 个人 AI 产品作品集

本项目是一个静态部署友好的个人作品集网站，用来集中展示 AI 应用实践、测评记录和作品过程。页面和代码由 AI 辅助迭代，内容口径以真实作品和真实过程为准。

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

注意：`127.0.0.1` 只代表你自己的电脑，别人打不开。如果想分享给别人，请先部署到公网。具体步骤见 `DEPLOY.md`。

如果只是同一个 Wi-Fi 下临时预览，可以使用：

```bash
npm.cmd run dev:lan
```

## 以后主要改哪里

- 改姓名、定位、邮箱、微信、项目文案、Demo/GitHub 链接：`src/data/portfolio.ts`
- 替换项目图片：`public/images/`
- 替换简历文件：`public/Roxy_AI产品助理.docx`
- 改页面结构：`src/App.tsx`
- 改视觉样式：`src/styles.css`

## 当前图片目录

项目封面图放在：

```text
public/images/covers/
```

塔罗 App 页面截图放在：

```text
public/images/tarot-app/
```

如果图片加载失败，页面会显示对应项目的文字占位区，不会报错。
