import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, resolve } from "node:path";

const port = Number.parseInt(process.env.PORT ?? "4173", 10);
const host = process.env.HOST ?? "127.0.0.1";
const distRoot = resolve("dist");

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".ico", "image/x-icon"],
]);

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? "/", `http://${host}:${port}`);
    const routePath = decodeURIComponent(url.pathname);
    const filePath = routePath === "/" ? "/index.html" : routePath;
    const target = resolve(distRoot, `.${filePath}`);

    if (!target.startsWith(distRoot)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    const content = await readFile(target);
    response.writeHead(200, {
      "Content-Type": mimeTypes.get(extname(target)) ?? "application/octet-stream",
    });
    response.end(content);
  } catch {
    const fallback = await readFile(join(distRoot, "index.html"));
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(fallback);
  }
});

server.listen(port, host, () => {
  console.log(`Portfolio preview: http://${host}:${port}/`);
});
