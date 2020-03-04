import { Context, Next } from "koa";

export default function log(ctx: Context, next: Next) {
  console.log("log2");
  next();
}
