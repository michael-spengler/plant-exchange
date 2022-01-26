import { opine } from "https://deno.land/x/opine@2.1.1/mod.ts";

const app = opine();

app.get("/", function (req, res) {
    res.sendFile("client-with-svelte\src\components\Home.svelte");
});

app.listen(
    3000,
    () => console.log("server has started on http://localhost:3000 🚀"),
);