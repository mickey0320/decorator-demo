import "reflect-metadata";
import { Context } from "koa";
import { controller, get, middleware } from "../decorators";
import log from "../middlewares/log";
import log2 from "../middlewares/log2";

@controller
class HomeController {
  @get("/")
  @middleware(log)
  @middleware(log2)
  index(ctx: Context) {
    ctx.body = {
      data: []
    };
  }
}

export default new HomeController();
