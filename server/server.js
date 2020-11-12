const Koa = require("koa");
const next = require("next");
const bodyParser = require("koa-bodyparser");

const router = require("./api");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();

  server.proxy = true;

  server.use(
    bodyParser({
      entableTypes: ["json", "form", "text"]
    })
  );

  server.use(router.routes()).use(router.allowedMethods());

  // next.js page router
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
