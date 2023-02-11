import { rest } from "msw";
import { it } from "vitest";
import { server } from "./server";
import fetch from "node-fetch";

it("works", async () => {
  server.use(
    rest.get("http://localhost:3000/test", (req, res, ctx) => {
      return res(ctx.json({ ok: true }));
    })
  );

  server.printHandlers();

  await fetch("http://localhost:3000/test", { method: "get" })
    .then((res) => res.json())
    .then((res) => console.log(res));
});
