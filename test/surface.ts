/* eslint-disable @typescript-eslint/naming-convention */

import {describe, expect, test} from "vitest";
import {transformEuphony, transformLightSyllables, transformWeakConsonants} from "../source";


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

describe("transform according to consonant euphony", () => {
  test("basic", () => {
    expect(transformEuphony("кх")).toBe("хх");
    expect(transformEuphony("гҕ")).toBe("ҕҕ");
    expect(transformEuphony("тд")).toBe("дд");
    expect(transformEuphony("тс")).toBe("сс");
    expect(transformEuphony("тҫ")).toBe("цц");
    expect(transformEuphony("тз")).toBe("зз");
    expect(transformEuphony("ст")).toBe("тт");
    expect(transformEuphony("ҫт")).toBe("ҫт");
    expect(transformEuphony("сҫ")).toBe("цц");
    expect(transformEuphony("пв")).toBe("вв");
    expect(transformEuphony("фп")).toBe("пп");
    expect(transformEuphony("шҫ")).toBe("ҫҫ");
    expect(transformEuphony("цс")).toBe("цс");
    expect(transformEuphony("цҫ")).toBe("цц");
    expect(transformEuphony("чҙ")).toBe("ӟӟ");
    expect(transformEuphony("ӈз")).toBe("нз");
    expect(transformEuphony("нх")).toBe("ӈх");
    expect(transformEuphony("мҙ")).toBe("нҙ");
    expect(transformEuphony("лд")).toBe("дд");
    expect(transformEuphony("рд")).toBe("рд");
    expect(transformEuphony("лн")).toBe("нн");
    expect(transformEuphony("лр")).toBe("рр");
  });
  test("practical", () => {
    expect(transformEuphony("ўеду̂зца")).toBe("ўеду̂цца");
    expect(transformEuphony("тевфамми̂с")).toBe("теффамми̂с");
    expect(transformEuphony("саъи̂мла")).toBe("саъи̂нла");
  });
});

describe("transform weak consonants", () => {
  test("basic, CV", () => {
    expect(transformWeakConsonants("йа")).toBe("е");
  });
  test("basic, VC", () => {
    expect(transformWeakConsonants("аъ")).toBe("а");
  });
  test("basic, VCV", () => {
    expect(transformWeakConsonants("аъа")).toBe("а");
    expect(transformWeakConsonants("ейо")).toBe("и");
    expect(transformWeakConsonants("ойи̂")).toBe("и̂");
    expect(transformWeakConsonants("и̂ўа")).toBe("е̂");
    expect(transformWeakConsonants("оўи̂")).toBe("е̂");
    expect(transformWeakConsonants("еъо̀")).toBe("о̀");
    expect(transformWeakConsonants("ѐъо")).toBe("ѐ");
    expect(transformWeakConsonants("еъо")).toBe("о");
  });
  test("basic, VCVC", () => {
    expect(transformWeakConsonants("ойо̂й")).toBe("и̂");
    expect(transformWeakConsonants("уйей")).toBe("и");
    expect(transformWeakConsonants("у̂йеў")).toBe("у̂");
    expect(transformWeakConsonants("иўеў")).toBe("о");
    expect(transformWeakConsonants("ейо̂ў")).toBe("о̂");
    expect(transformWeakConsonants("е̂йоў")).toBe("е̂");
    expect(transformWeakConsonants("ейоў")).toBe("о");
  });
});