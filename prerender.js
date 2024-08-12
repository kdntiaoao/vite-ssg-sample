import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

// Cached production assets
const templateHtml = fs.readFileSync("./dist/static/index.html", "utf-8");

const ssrManifest = fs.readFileSync(
  "./dist/static/.vite/ssr-manifest.json",
  "utf-8"
);

// determine routes to pre-render from src/pages
const routesToPrerender = fs
  .readdirSync(toAbsolute("src/pages"))
  .map((file) => {
    const name = file.replace(/\.tsx$/, "").toLowerCase();
    return name === "home" ? `/` : `/${name}`;
  });
// const routesToPrerender = ["/"];

// pre-render each route...
for (const url of routesToPrerender) {
  const render = (await import("./dist/server/entry-server.js")).render;

  // const rendered = await render(url, ssrManifest);
  const rendered = await render(url, undefined);

  const html = templateHtml
    .replace(`<!--app-head-->`, rendered.head ?? "")
    .replace(`<!--app-html-->`, rendered.html ?? "");

  const filePath = `dist/static${url === "/" ? "/index" : url}.html`;
  fs.writeFileSync(toAbsolute(filePath), html);
  console.log("pre-rendered:", filePath);
}
