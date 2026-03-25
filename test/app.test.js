const test = require("node:test");
const assert = require("node:assert/strict");
const { getMessage } = require("../src/app");

test("returns the production message", () => {
  assert.equal(getMessage(), "Hello from production");
});
