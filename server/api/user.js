const Router = require("@koa/router");
const router = new Router();

/**
 * @route GET /api/v1/user
 * @desc 首页
 * @access 接口是公开到
 */
router.get("/user", ctx => {
  ctx.body = { code: 200, msg: "success", data: { key: "user" } };
});

/**
 *
 * @return POST /api/v1/register
 * @desc 注册接口
 */
router.post("/register", ctx => {
  ctx.body = { code: 200, msg: "success", data: { key: "register" } };
});

/**
 *
 * @route POST /api/v1/login
 * @desc 登陆接口
 */
router.get("/login", async ctx => {
  ctx.body = { code: 200, msg: "success", data: {} };
});

module.exports = router;
