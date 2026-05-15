# 公开访问部署说明

`http://127.0.0.1:4173/` 只能在你自己的电脑上打开。要发给招聘方或朋友访问，需要把网站部署到公网，拿到类似 `https://xxx.vercel.app` 或 `https://xxx.netlify.app` 的公开链接。

## 推荐方式 1：Vercel / Netlify 连接 GitHub

适合后续持续更新作品集。

1. 把 `D:\Roxy163\gerenwangzhan` 上传到一个 GitHub 仓库。
2. 在 Vercel 或 Netlify 新建项目，选择这个仓库。
3. 构建命令填写：`npm run build`
4. 输出目录填写：`dist`
5. 部署完成后，把平台生成的公开网址发给别人。

项目里已经加好：

- `vercel.json`
- `netlify.toml`
- `public/_redirects`

这些文件用于告诉部署平台如何构建和访问这个静态网站。

## 推荐方式 2：Netlify 手动上传 dist

适合快速生成一个临时公开链接。

1. 在本地运行：`npm.cmd run build`
2. 上传 `D:\Roxy163\gerenwangzhan\dist` 文件夹，或上传 `D:\Roxy163\gerenwangzhan\roxy163-portfolio-dist.zip`
3. 部署后使用 Netlify 生成的公开网址。

## 不建议直接发本地地址

不要把这些地址发给别人当正式链接：

- `http://127.0.0.1:4173/`
- `http://localhost:4173/`

它们只代表访问者自己的电脑，不是你的电脑。

如果只是同一个 Wi-Fi 下临时预览，可以运行 `npm.cmd run dev:lan`，再用你电脑的局域网 IP 访问。但这只适合短时间内网测试，不适合求职投递。
