import { formatHello } from "./tools.js";

function testFormatHello() {
  console.assert(
    formatHello("World") === "Hello, World!",
    "Expected 'Hello, World!' from formatHello('World')",
  );
}

testFormatHello();
