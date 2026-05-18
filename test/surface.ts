/* eslint-disable @typescript-eslint/naming-convention */

import {describe, expect, test} from "vitest";
import {transformLightSyllables} from "../source";


describe("transform consecutive light syllables", () => {
  test("substaintives, suffix declensions", () => {
    expect(transformLightSyllables("шеши̂налеҫ")).toBe("шеши̂нлеҫ");
    expect(transformLightSyllables("ӈи̂латтоӟам")).toBe("ӈи̂латтоӟам");
    expect(transformLightSyllables("ди̂ссакеваўат")).toBe("ди̂ссакевўат");
    expect(transformLightSyllables("асси̂маревах")).toBe("асси̂мревах");
  });
  test("substaintives, adjectival forms", () => {
    expect(transformLightSyllables("шеши̂налареҫ")).toBe("шеши̂нлареҫ");
    expect(transformLightSyllables("ӈи̂латтароӟам")).toBe("ӈи̂латтароӟам");
    expect(transformLightSyllables("ди̂ссакареваўат")).toBe("ди̂ссакревўат");
    expect(transformLightSyllables("асси̂мараревах")).toBe("асси̂мраревах");
  });
});
