import { Context } from "koa";
import { controller, post } from "../decorators";

@controller
class LoginController {
  @post("/login")
  login(ctx: Context) {
    const body = ctx.request.body;
    ctx.body = {
      code: 0,
      data: {
        ...body
      },
      msg: "success"
    };
  }
}

export default new LoginController();
