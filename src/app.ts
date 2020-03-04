// function testable(target: any) {
//   target.isTest = true;
// }

// function readonly(target: any, name: string) {
// }

// class Person {
//   @readonly
//   name: string = "mickey";
// }

// function catchError(msg: string) {
//   return function(target: any, name: string, descriptor: PropertyDescriptor) {
//     const originFn = descriptor.value;
//     descriptor.value = function() {
//       try {
//         originFn();
//       } catch (e) {
//         console.log(msg);
//       }
//     };
//   };
// }

// class Person {
//   @catchError("foo方法没定义")
//   foo() {
//     const obj: any = {};
//     obj.foo();
//   }
//   @catchError("bar方法没定义")
//   bar() {
//     const obj: any = {};
//     obj.bar();
//   }
// }
// const p = new Person();
// p.foo();
// p.bar();

import Koa from "koa";
import koaBody from "koa-body";
import "./controllers";
import router from "./routes";

const app = new Koa();
app.use(koaBody());
app.use(router.routes());
app.listen(9090);
