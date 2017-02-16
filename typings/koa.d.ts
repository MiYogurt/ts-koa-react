import * as Koa from "koa";

declare module "koa" {
    interface Context {
        render(filename: string, ...args: any[]) : any;
    }
}

