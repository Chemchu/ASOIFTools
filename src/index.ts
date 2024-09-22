import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import dicePage from "./services/dicePage";
import { Logger } from "./util/logger";
import { baseHtml } from "./util/baseHtml";

const app = new Elysia()
    .use(staticPlugin())
    .decorate("logger", Logger)
    .decorate("baseHtml", baseHtml)
    .onRequest((req) => {
        req.logger(req.request.method, req.request.url);
    })
    .use(html())
    .get("/", ({ baseHtml }) => baseHtml(dicePage()))
    .listen(3000);

console.log(
    `🦊 \x1b[32mElysia is running at ${app.server?.hostname}:${app.server?.port}\x1b[0m`,
);
