import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import dicePage from "./pages/dicePage";
import { Logger } from "./util/logger";
import { baseHtml } from "./util/baseHtml";
import converterPage from "./pages/converterPage";
import notFound from "./pages/notFoundPage";
import landingPage from "./pages/landingPage";

const app = new Elysia()
    .use(staticPlugin())
    .decorate("logger", Logger)
    .decorate("baseHtml", baseHtml)
    .onRequest((req) => {
        req.logger(req.request.method, req.request.url);
    })
    .use(html())
    .get("/", ({ baseHtml }) => baseHtml(landingPage()))
    .get("/dados", ({ baseHtml }) => baseHtml(dicePage()))
    .get("/conversor", ({ baseHtml }) => baseHtml(converterPage()))
    .onError(({ code }) => {
        if (code === "NOT_FOUND") {
            return baseHtml(notFound());
        }
    })
    .listen(3000);

console.log(
    `🦊 \x1b[32mElysia is running at ${app.server?.hostname}:${app.server?.port}\x1b[0m`,
);
