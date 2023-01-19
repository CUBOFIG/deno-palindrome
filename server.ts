import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { PalindromeMiddleware, DocsMiddleware } from "./middleware.ts";

const app = new Application();
const router = new Router();

router.get("/",DocsMiddleware)
router.get("/:word", PalindromeMiddleware)

app.use(router.routes());
app.use(router.allowedMethods());

const port = 3000;
app.listen({ port });

console.log("The API is running :D");
