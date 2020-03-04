import { Middleware } from "koa";
import "reflect-metadata";

export default function middleware(midFn: Middleware) {
  return function(target: any, name: string, descriptor: PropertyDescriptor) {
    const middlewares: Middleware[] =
      Reflect.getMetadata("middleware", target, name) || [];
    middlewares.push(midFn);
    Reflect.defineMetadata("middleware", middlewares, target, name);
  };
}
