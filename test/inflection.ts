//

import {describe, expect, test} from "vitest";
import {getRealization} from "../source";


describe("inflection", () => {
  test("substantive, G pattern", () => {
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
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("ци̂нтев");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "accusative", definiteness: "indefinite"})).toBe("ци̂нтовах");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("ци̂нтовзам");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "instrumental", definiteness: "indefinite"})).toBe("ци̂нтевот");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "definite"})).toBe("леци̂нат");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "instrumental", definiteness: "definite"})).toBe("лоци̂нтовот");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("ци̂нтар");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("ци̂нтарозам");
  });
  test("substantive, Dm pattern", () => {
    const radicals = ["г", "б", "ш"] as const;
    const pattern = {sort: "substantive", type: "doubleMedial"} as const;
    const theme = "у";
    const patternAffixes = {prefixal: [], infixal: [], suffixal: [], terminal: []};
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("гу̂ббаш");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "accusative", definiteness: "indefinite"})).toBe("гу̂ббаша");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "dative", definiteness: "indefinite"})).toBe("гу̂ббашос");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "ablative", definiteness: "indefinite"})).toBe("гу̂ббашезам");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "instrumental", definiteness: "indefinite"})).toBe("гу̂ббашут");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "locative", definiteness: "indefinite"})).toBe("гу̂ббаши");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("гу̂ббашев");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "accusative", definiteness: "indefinite"})).toBe("гу̂ббашовах");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("гу̂ббашовзам");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "instrumental", definiteness: "indefinite"})).toBe("гу̂ббашевот");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "definite"})).toBe("легу̂ббаш");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "instrumental", definiteness: "definite"})).toBe("логу̂ббашовот");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("гу̂ббашар");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("гу̂ббашрозам");
  });
  test("substantive, Df pattern", () => {
    const radicals = ["х", "л", "ф"] as const;
    const pattern = {sort: "substantive", type: "doubleFinal"} as const;
    const theme = "и";
    const patternAffixes = {prefixal: [], infixal: [], suffixal: [], terminal: []};
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("хи̂лаффе");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "accusative", definiteness: "indefinite"})).toBe("хи̂лаффа");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "dative", definiteness: "indefinite"})).toBe("хи̂лаффос");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "ablative", definiteness: "indefinite"})).toBe("хи̂лаффезам");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "instrumental", definiteness: "indefinite"})).toBe("хи̂лаффут");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "locative", definiteness: "indefinite"})).toBe("хи̂лаффи");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("хи̂лаффев");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "accusative", definiteness: "indefinite"})).toBe("хи̂лаффовах");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("хи̂лаффовзам");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "instrumental", definiteness: "indefinite"})).toBe("хи̂лаффевот");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "definite"})).toBe("лехи̂лаффе");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "instrumental", definiteness: "definite"})).toBe("лохи̂лаффовот");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("хи̂лаффар");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("хи̂лаффарозам");
  });
  test("substantive, Di pattern", () => {
    const radicals = ["ӝ", "б", "ӈ"] as const;
    const pattern = {sort: "substantive", type: "doubleInitial"} as const;
    const theme = "и";
    const patternAffixes = {prefixal: [], infixal: [], suffixal: [], terminal: []};
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("ажжи̂баӈ");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "accusative", definiteness: "indefinite"})).toBe("ажжи̂бӈа");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "dative", definiteness: "indefinite"})).toBe("ажжи̂бӈос");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "ablative", definiteness: "indefinite"})).toBe("ажжи̂бӈезам");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "instrumental", definiteness: "indefinite"})).toBe("ажжи̂бӈут");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "locative", definiteness: "indefinite"})).toBe("ажжи̂бӈи");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("ажжи̂бӈев");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "accusative", definiteness: "indefinite"})).toBe("ажжи̂бӈовах");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("ажжи̂бӈовзам");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "instrumental", definiteness: "indefinite"})).toBe("ажжи̂бӈевот");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "definite"})).toBe("лежжи̂баӈ");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "instrumental", definiteness: "definite"})).toBe("ложжи̂бӈовот");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("ажжи̂бӈар");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("ажжи̂бӈарозам");
  });
  test("verbal, G pattern", () => {
    const radicals = ["ҙ", "м", "к"] as const;
    const pattern = {sort: "verbal", type: "ground"} as const;
    const theme = "у";
    const patternAffixes = {prefixal: [], infixal: [], suffixal: [], terminal: []};
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("заму̂к");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdIndefinite", gender: "fire"})).toBe("азму̂ко");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "second", gender: "fire"})).toBe("тозму̂ко");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstPlural", gender: "water"})).toBe("бамезму̂к");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstSingular", gender: "fire"})).toBe("езму̂ко");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdDefinite", gender: "fire"})).toBe("заму̂кно");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdIndefinite", gender: "water"})).toBe("азму̂кан");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "second", gender: "water"})).toBe("тезму̂кан");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstPlural", gender: "fire"})).toBe("бамозму̂кно");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstSingular", gender: "water"})).toBe("изму̂кан");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("до̀зму̂к");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "thirdIndefinite", gender: "fire"})).toBe("адо̀зму̂кно");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "second", gender: "fire"})).toBe("тодо̀зму̂ко");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstPlural", gender: "water"})).toBe("бамедо̀зму̂кан");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstSingular", gender: "fire"})).toBe("едо̀зму̂кно");
  });
  test("verbal, G pattern, reflexive", () => {
    const radicals = ["в", "л", "к"] as const;
    const pattern = {sort: "verbal", type: "ground"} as const;
    const theme = "и";
    const patternAffixes = {prefixal: [], infixal: [], suffixal: [], terminal: ["-ҙ"]};
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("вали̂кез");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdIndefinite", gender: "fire"})).toBe("авли̂коз");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "second", gender: "fire"})).toBe("товли̂коз");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstPlural", gender: "water"})).toBe("бамевли̂кез");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstSingular", gender: "fire"})).toBe("евли̂коз");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdDefinite", gender: "fire"})).toBe("вали̂кноз");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdIndefinite", gender: "water"})).toBe("авли̂кнез");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "second", gender: "water"})).toBe("тевли̂кнез");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstPlural", gender: "fire"})).toBe("бамовли̂кноз");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstSingular", gender: "water"})).toBe("ивли̂кнез");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("до̀вли̂кез");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "thirdIndefinite", gender: "fire"})).toBe("адо̀вли̂кноз");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "second", gender: "fire"})).toBe("тодо̀вли̂коз");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstPlural", gender: "water"})).toBe("бамедо̀вли̂кнез");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstSingular", gender: "fire"})).toBe("едо̀вли̂кноз");
  });
  test("verbal, Dm pattern", () => {
    const radicals = ["т", "л", "г"] as const;
    const pattern = {sort: "verbal", type: "doubleMedial"} as const;
    const theme = "у";
    const patternAffixes = {prefixal: [], infixal: [], suffixal: [], terminal: []};
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("таллу̂г");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdIndefinite", gender: "fire"})).toBe("аталлу̂го");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "second", gender: "fire"})).toBe("тоталлу̂го");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstPlural", gender: "water"})).toBe("баметаллу̂г");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstSingular", gender: "fire"})).toBe("еталлу̂го");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdDefinite", gender: "fire"})).toBe("таллу̂гно");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdIndefinite", gender: "water"})).toBe("аталлу̂ган");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "second", gender: "water"})).toBe("теталлу̂ган");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstPlural", gender: "fire"})).toBe("бамоталлу̂гно");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstSingular", gender: "water"})).toBe("италлу̂ган");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("до̀таллу̂г");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "thirdIndefinite", gender: "fire"})).toBe("адо̀таллу̂гно");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "second", gender: "fire"})).toBe("тодо̀таллу̂го");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstPlural", gender: "water"})).toBe("бамедо̀таллу̂ган");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstSingular", gender: "fire"})).toBe("едо̀таллу̂гно");
  });
  test("verbal, Df pattern", () => {
    const radicals = ["ӟ", "с", "б"] as const;
    const pattern = {sort: "verbal", type: "doubleFinal"} as const;
    const theme = "и";
    const patternAffixes = {prefixal: [], infixal: [], suffixal: [], terminal: []};
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("заси̂ббе");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdIndefinite", gender: "fire"})).toBe("азси̂ббо");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "second", gender: "fire"})).toBe("тозси̂ббо");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstPlural", gender: "water"})).toBe("бамезси̂ббе");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstSingular", gender: "fire"})).toBe("езси̂ббо");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdDefinite", gender: "fire"})).toBe("заси̂ббано");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdIndefinite", gender: "water"})).toBe("азси̂ббан");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "second", gender: "water"})).toBe("тезси̂ббан");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstPlural", gender: "fire"})).toBe("бамозси̂ббано");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstSingular", gender: "water"})).toBe("изси̂ббан");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("до̀зси̂ббе");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "thirdIndefinite", gender: "fire"})).toBe("адо̀зси̂ббано");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "second", gender: "fire"})).toBe("тодо̀зси̂ббо");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstPlural", gender: "water"})).toBe("бамедо̀зси̂ббан");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstSingular", gender: "fire"})).toBe("едо̀зси̂ббано");
  });
  test("verbal, Di pattern", () => {
    const radicals = ["ҕ", "в", "ц"] as const;
    const pattern = {sort: "verbal", type: "doubleInitial"} as const;
    const theme = "у";
    const patternAffixes = {prefixal: [], infixal: [], suffixal: [], terminal: []};
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("аҕҕаву̂ц");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdIndefinite", gender: "fire"})).toBe("аҕҕаву̂цо");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "second", gender: "fire"})).toBe("тоҕҕаву̂цо");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstPlural", gender: "water"})).toBe("бамеҕҕаву̂ц");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstSingular", gender: "fire"})).toBe("еҕҕаву̂цо");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdDefinite", gender: "fire"})).toBe("аҕҕаву̂цно");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdIndefinite", gender: "water"})).toBe("аҕҕаву̂цан");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "second", gender: "water"})).toBe("теҕҕаву̂цан");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstPlural", gender: "fire"})).toBe("бамоҕҕаву̂цно");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstSingular", gender: "water"})).toBe("иҕҕаву̂цан");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("до̀ҕҕаву̂ц");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "thirdIndefinite", gender: "fire"})).toBe("адо̀ҕҕаву̂цно");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "second", gender: "fire"})).toBe("тодо̀ҕҕаву̂цо");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstPlural", gender: "water"})).toBe("бамедо̀ҕҕаву̂цан");
    expect(getRealization(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstSingular", gender: "fire"})).toBe("едо̀ҕҕаву̂цно");
  });
  test("random", () => {
    expect(getRealization(
      ["ў", "з", "ц"], {sort: "substantive", type: "ground"}, "у",
      {prefixal: [], infixal: ["-ед-"], suffixal: [], terminal: []},
      {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "accusative", definiteness: "indefinite"}
    )).toBe("оду̂цца");
    expect(getRealization(
      ["ў", "з", "ц"], {sort: "substantive", type: "ground"}, "у",
      {prefixal: [], infixal: ["-ед-"], suffixal: [], terminal: []},
      {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "dative", definiteness: "definite"}
    )).toBe("лоду̂ццевас");
    expect(getRealization(
      ["т", "б", "ҙ"], {sort: "verbal", type: "doubleFinal"}, "у",
      {prefixal: [], infixal: [], suffixal: ["-ал-"], terminal: ["-ҙ"]},
      {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "ablative", definiteness: "definite"}
    )).toBe("лотбу̂ззалозмаз");
  });
});