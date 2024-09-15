import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import landing_page from "./services/landing_page";

const app = new Elysia()
    .use(html({ autoDetect: true }))
    .get("/", landing_page)
    .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
