import app from "./app";
import { Server } from "https";
import config from "./app/config";

async function main() {
  let server: Server = app.listen(config.port, () => {
    console.log(`server running on ${config.port}`);
  });
}
main();
