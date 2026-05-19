//

import {describe, expect, test} from "vitest";
import {getRealization} from "../source";


describe("inflection", () => {
  test("substantive, G-type", () => {
    const radicals = ["ц", "н", "т"] as const;
    const pattern = {sort: "substantive", type: "ground"} as const;
    const theme = "и";
    const patternAffixes = {prefixal: [], infixal: [], suffixal: [], terminal: []};
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("ци̂нат");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "accusative", definiteness: "indefinite"})).toBe("ци̂нта");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "dative", definiteness: "indefinite"})).toBe("ци̂нтос");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "ablative", definiteness: "indefinite"})).toBe("ци̂нтезам");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "instrumental", definiteness: "indefinite"})).toBe("ци̂нтут");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "locative", definiteness: "indefinite"})).toBe("ци̂нти");
  });
  test("random", () => {
    expect(getRealization(
      ["ў", "з", "ц"], {sort: "substantive", type: "ground"}, "у",
      {prefixal: [], infixal: ["ед"], suffixal: [], terminal: []},
      {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "accusative", definiteness: "indefinite"}
    )).toBe("оду̂цца");
    expect(getRealization(
      ["ў", "з", "ц"], {sort: "substantive", type: "ground"}, "у",
      {prefixal: [], infixal: ["ед"], suffixal: [], terminal: []},
      {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "dative", definiteness: "definite"}
    )).toBe("лоду̂ццевас");
  });
});