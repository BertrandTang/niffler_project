// @deno-types="npm:@types/express@4.17.15"
import express from "npm:express@4.18.2";

export const createServer = (port: number) => {


  const app = express();

  app.get("/", (req, res) => {
    res.send("Welcome to the Dinosaur API!");
  });


  app.listen(port, () => {
    console.log(`API demarrée sur http://localhost:${port}`);
  });
}