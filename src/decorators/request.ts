import "reflect-metadata";
import { Method } from "../types";

function getDecoratorFn(method: Method) {
  return function get(url: string) {
    return function(target: any, name: string, descriptor: PropertyDescriptor) {
      Reflect.defineMetadata("url", url, target, name);
      Reflect.defineMetadata("method", method, target, name);
    };
  };
}

export const get = getDecoratorFn("get");
export const post = getDecoratorFn("post");
export const put = getDecoratorFn("put");
export const head = getDecoratorFn("head");
export const del = getDecoratorFn("delete");
