import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import landing_page from "./services/landing_page";
import { Logger } from "./util/logger";
import { htmlWrapper } from "./util/htmlWrapper";

const app = new Elysia()
    .use(staticPlugin())
    .decorate("logger", Logger)
    .decorate("baseHtml", htmlWrapper)
    .onRequest((req) => {
        const endpoint = `${req.request.method} ${req.request.url}`;
        req.logger(endpoint);
    })
    .use(html())
    .get("/", ({ baseHtml }) => baseHtml(landing_page()))
    .listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
