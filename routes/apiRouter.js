const gamesRouter = require("./games");

const apiRouter = require("express").Router();
// Импорты и инициализация главного роута
apiRouter.use("/api", gamesRouter);
apiRouter.use("/api", usersRouter);
apiRouter.use("/api", categoriesRouter);
apiRouter.use("/api", authRouter);
// Код роута
module.exports = apiRouter;