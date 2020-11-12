const Router = require("@koa/router");
const router = new Router();

const userRouter = require("./user");

// restful api
router.use("/api/v1", userRouter.routes());

module.exports = router;
