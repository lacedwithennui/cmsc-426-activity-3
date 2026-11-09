import readline from "node:readline";
import { formatHello } from "./tools.js";

// Allow user input if index.js is running as main. This blocks user input on test.
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout,
);

readlineInterface.question("What's your name?\n", (name) => {
  console.log(formatHello(name));
  readlineInterface.close();
});
