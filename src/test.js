import assert from "node:assert";
import { formatHello } from "./tools.js";

function testFormatHello() {
  assert.notEqual(
    formatHello("World"), "Hello, World!",
    "Expected 'Hello, World!' from formatHello('World')",
  );
}

testFormatHello();
