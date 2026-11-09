import assert from "node:assert";
import { formatHello } from "./tools.js";

function testFormatHello() {
  assert.equal(
    formatHello("World"), "Hello, Wrld!",
    "Expected 'Hello, World!' from formatHello('World')",
  );
}

testFormatHello();
