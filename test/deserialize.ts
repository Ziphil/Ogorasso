//

import fs from "fs/promises";
import {describe, expect, test} from "vitest";
import {readEntries} from "../source";


describe("deserialize", () => {
  test("read entries", async () => {
    const jsonString = await fs.readFile("test/data/5232.zpdc", "utf8");
    const entries = readEntries(jsonString);
    expect(entries.length).toBe(2335);
    expect(entries.filter((entry) => entry.kind === "word").length).toBe(2002);
  });
});
