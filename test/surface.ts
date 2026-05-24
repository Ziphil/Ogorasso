//

import {describe, expect, test} from "vitest";
import {surfaceEuphony, surfaceLightSyllables, surfaceMerger, surfaceWeakConsonants} from "../source";


describe("surface consecutive light syllables", () => {
  test("substaintives, suffix declensions", () => {
    expect(surfaceLightSyllables("шеши̂налеҫ")).toBe("шеши̂нлеҫ");
    expect(surfaceLightSyllables("ӈи̂латтоӟам")).toBe("ӈи̂латтоӟам");
    expect(surfaceLightSyllables("ди̂ссакеваўат")).toBe("ди̂ссакевўат");
    expect(surfaceLightSyllables("асси̂маревах")).toBe("асси̂мревах");
  });
  test("substaintives, adjectival forms", () => {
    expect(surfaceLightSyllables("шеши̂налареҫ")).toBe("шеши̂нлареҫ");
    expect(surfaceLightSyllables("ӈи̂латтароӟам")).toBe("ӈи̂латтароӟам");
    expect(surfaceLightSyllables("ди̂ссакареваўат")).toBe("ди̂ссакревўат");
    expect(surfaceLightSyllables("асси̂мараревах")).toBe("асси̂мраревах");
  });
});

describe("surface according to consonant euphony", () => {
  test("basic", () => {
    expect(surfaceEuphony("кх")).toBe("хх");
    expect(surfaceEuphony("гҕ")).toBe("ҕҕ");
    expect(surfaceEuphony("тд")).toBe("дд");
    expect(surfaceEuphony("тс")).toBe("сс");
    expect(surfaceEuphony("тҫ")).toBe("цц");
    expect(surfaceEuphony("тз")).toBe("зз");
    expect(surfaceEuphony("ст")).toBe("тт");
    expect(surfaceEuphony("ҫт")).toBe("ҫт");
    expect(surfaceEuphony("сҫ")).toBe("цц");
    expect(surfaceEuphony("пв")).toBe("вв");
    expect(surfaceEuphony("фп")).toBe("пп");
    expect(surfaceEuphony("шҫ")).toBe("ҫҫ");
    expect(surfaceEuphony("цс")).toBe("цс");
    expect(surfaceEuphony("цҫ")).toBe("цц");
    expect(surfaceEuphony("чҙ")).toBe("ӟӟ");
    expect(surfaceEuphony("ӈз")).toBe("нз");
    expect(surfaceEuphony("нх")).toBe("ӈх");
    expect(surfaceEuphony("мҙ")).toBe("нҙ");
    expect(surfaceEuphony("лд")).toBe("дд");
    expect(surfaceEuphony("рд")).toBe("рд");
    expect(surfaceEuphony("лн")).toBe("нн");
    expect(surfaceEuphony("лр")).toBe("рр");
  });
  test("practical", () => {
    expect(surfaceEuphony("ўеду̂зца")).toBe("ўеду̂цца");
    expect(surfaceEuphony("тевфамми̂с")).toBe("теффамми̂с");
    expect(surfaceEuphony("саъи̂мла")).toBe("саъи̂нла");
  });
});

describe("surface weak consonants", () => {
  test("basic, CV", () => {
    expect(surfaceWeakConsonants("йа")).toBe("е");
  });
  test("basic, VC", () => {
    expect(surfaceWeakConsonants("аъ")).toBe("а");
  });
  test("basic, VCV", () => {
    expect(surfaceWeakConsonants("аъа")).toBe("а");
    expect(surfaceWeakConsonants("ейо")).toBe("и");
    expect(surfaceWeakConsonants("ойи̂")).toBe("и̂");
    expect(surfaceWeakConsonants("и̂ўа")).toBe("е̂");
    expect(surfaceWeakConsonants("оўи̂")).toBe("е̂");
    expect(surfaceWeakConsonants("еъо̀")).toBe("о̀");
    expect(surfaceWeakConsonants("ѐъо")).toBe("ѐ");
    expect(surfaceWeakConsonants("еъо")).toBe("о");
  });
  test("basic, VCVC", () => {
    expect(surfaceWeakConsonants("ойо̂й")).toBe("и̂");
    expect(surfaceWeakConsonants("уйей")).toBe("и");
    expect(surfaceWeakConsonants("у̂йеў")).toBe("у̂");
    expect(surfaceWeakConsonants("иўеў")).toBe("о");
    expect(surfaceWeakConsonants("ейо̂ў")).toBe("о̂");
    expect(surfaceWeakConsonants("е̂йоў")).toBe("е̂");
    expect(surfaceWeakConsonants("ейоў")).toBe("о");
  });
  test("geminated weak consonants", () => {
    expect(surfaceWeakConsonants("у̂ййо")).toBe("о̂о");
    expect(surfaceWeakConsonants("аўўи̂")).toBe("ае̂");
    expect(surfaceWeakConsonants("у̂йўо")).toBe("о̂у");
    expect(surfaceWeakConsonants("аўъи̂")).toBe("ои̂");
  });
});

describe("surface consonantal mergers", () => {
  test("basic", () => {
    expect(surfaceMerger("ҫ")).toBe("с");
    expect(surfaceMerger("ҙ")).toBe("з");
    expect(surfaceMerger("ӟ")).toBe("з");
    expect(surfaceMerger("ӝ")).toBe("ж");
  });
});