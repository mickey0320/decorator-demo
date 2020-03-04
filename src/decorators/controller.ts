import { Middleware } from "koa";

import router from "../routes";
import { Method } from "../types";

export function controller(target: any) {
  for (let name in target.prototype) {
    const url = Reflect.getMetadata("url", target.prototype, name);
    const method: Method = Reflect.getMetadata(
      "method",
      target.prototype,
      name
    );
    const middlewares: Middleware[] =
      Reflect.getMetadata("middleware", target.prototype, name) || [];
    const handle = target.prototype[name];
    const handles = [handle];
    if (!url) return;
    if (middlewares.length) {
      handles.unshift(...middlewares);
    }
    router[method](url, ...handles);
  }
}
