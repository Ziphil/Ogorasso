//

import {describe, expect, test} from "vitest";
import {getForm} from "../source";


describe("inflection", () => {
  test("substantive, G pattern", () => {
    const radicals = ["ц", "н", "т"] as const;
    const pattern = {sort: "substantive", type: "ground"} as const;
    const theme = "и";
    const patternAffixes = {prefixal: [], infixal: [], suffixal: [], terminal: []};
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("ци̂нат");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "accusative", definiteness: "indefinite"})).toBe("ци̂нта");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "dative", definiteness: "indefinite"})).toBe("ци̂нтос");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "ablative", definiteness: "indefinite"})).toBe("ци̂нтезам");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "instrumental", definiteness: "indefinite"})).toBe("ци̂нтут");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "locative", definiteness: "indefinite"})).toBe("ци̂нти");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("ци̂нтев");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "accusative", definiteness: "indefinite"})).toBe("ци̂нтовах");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("ци̂нтовзам");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "instrumental", definiteness: "indefinite"})).toBe("ци̂нтевот");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "definite"})).toBe("леци̂нат");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "instrumental", definiteness: "definite"})).toBe("лоци̂нтовот");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("ци̂нтар");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("ци̂нтарозам");
  });
  test("substantive, Dm pattern", () => {
    const radicals = ["г", "б", "ш"] as const;
    const pattern = {sort: "substantive", type: "doubleMedial"} as const;
    const theme = "у";
    const patternAffixes = {prefixal: [], infixal: [], suffixal: [], terminal: []};
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("гу̂ббаш");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "accusative", definiteness: "indefinite"})).toBe("гу̂ббаша");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "dative", definiteness: "indefinite"})).toBe("гу̂ббашос");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "ablative", definiteness: "indefinite"})).toBe("гу̂ббашезам");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "instrumental", definiteness: "indefinite"})).toBe("гу̂ббашут");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "locative", definiteness: "indefinite"})).toBe("гу̂ббаши");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("гу̂ббашев");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "accusative", definiteness: "indefinite"})).toBe("гу̂ббашовах");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("гу̂ббашовзам");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "instrumental", definiteness: "indefinite"})).toBe("гу̂ббашевот");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "definite"})).toBe("легу̂ббаш");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "instrumental", definiteness: "definite"})).toBe("логу̂ббашовот");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("гу̂ббашар");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("гу̂ббашрозам");
  });
  test("substantive, Df pattern", () => {
    const radicals = ["х", "л", "ф"] as const;
    const pattern = {sort: "substantive", type: "doubleFinal"} as const;
    const theme = "и";
    const patternAffixes = {prefixal: [], infixal: [], suffixal: [], terminal: []};
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("хи̂лаффе");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "accusative", definiteness: "indefinite"})).toBe("хи̂лаффа");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "dative", definiteness: "indefinite"})).toBe("хи̂лаффос");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "ablative", definiteness: "indefinite"})).toBe("хи̂лаффезам");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "instrumental", definiteness: "indefinite"})).toBe("хи̂лаффут");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "locative", definiteness: "indefinite"})).toBe("хи̂лаффи");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("хи̂лаффев");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "accusative", definiteness: "indefinite"})).toBe("хи̂лаффовах");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("хи̂лаффовзам");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "instrumental", definiteness: "indefinite"})).toBe("хи̂лаффевот");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "definite"})).toBe("лехи̂лаффе");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "instrumental", definiteness: "definite"})).toBe("лохи̂лаффовот");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("хи̂лаффар");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("хи̂лаффарозам");
  });
  test("substantive, Di pattern", () => {
    const radicals = ["ӝ", "б", "ӈ"] as const;
    const pattern = {sort: "substantive", type: "doubleInitial"} as const;
    const theme = "и";
    const patternAffixes = {prefixal: [], infixal: [], suffixal: [], terminal: []};
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("ажжи̂баӈ");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "accusative", definiteness: "indefinite"})).toBe("ажжи̂бӈа");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "dative", definiteness: "indefinite"})).toBe("ажжи̂бӈос");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "ablative", definiteness: "indefinite"})).toBe("ажжи̂бӈезам");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "instrumental", definiteness: "indefinite"})).toBe("ажжи̂бӈут");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "locative", definiteness: "indefinite"})).toBe("ажжи̂бӈи");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("ажжи̂бӈев");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "accusative", definiteness: "indefinite"})).toBe("ажжи̂бӈовах");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("ажжи̂бӈовзам");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "instrumental", definiteness: "indefinite"})).toBe("ажжи̂бӈевот");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "definite"})).toBe("лежжи̂баӈ");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "instrumental", definiteness: "definite"})).toBe("ложжи̂бӈовот");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("ажжи̂бӈар");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("ажжи̂бӈарозам");
  });
  test("verbal, G pattern", () => {
    const radicals = ["ҙ", "м", "к"] as const;
    const pattern = {sort: "verbal", type: "ground"} as const;
    const theme = "у";
    const patternAffixes = {prefixal: [], infixal: [], suffixal: [], terminal: []};
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("заму̂к");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdIndefinite", gender: "fire"})).toBe("азму̂ко");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "second", gender: "fire"})).toBe("тозму̂ко");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstPlural", gender: "water"})).toBe("бамезму̂к");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstSingular", gender: "fire"})).toBe("езму̂ко");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdDefinite", gender: "fire"})).toBe("заму̂кно");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdIndefinite", gender: "water"})).toBe("азму̂кан");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "second", gender: "water"})).toBe("тезму̂кан");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstPlural", gender: "fire"})).toBe("бамозму̂кно");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstSingular", gender: "water"})).toBe("изму̂кан");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("до̀зму̂к");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "thirdIndefinite", gender: "fire"})).toBe("адо̀зму̂кно");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "second", gender: "fire"})).toBe("тодо̀зму̂ко");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstPlural", gender: "water"})).toBe("бамедо̀зму̂кан");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstSingular", gender: "fire"})).toBe("едо̀зму̂кно");
  });
  test("verbal, G pattern, reflexive", () => {
    const radicals = ["в", "л", "к"] as const;
    const pattern = {sort: "verbal", type: "ground"} as const;
    const theme = "и";
    const patternAffixes = {prefixal: [], infixal: [], suffixal: [], terminal: ["-ҙ"]};
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("вали̂кез");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdIndefinite", gender: "fire"})).toBe("авли̂коз");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "second", gender: "fire"})).toBe("товли̂коз");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstPlural", gender: "water"})).toBe("бамевли̂кез");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstSingular", gender: "fire"})).toBe("евли̂коз");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdDefinite", gender: "fire"})).toBe("вали̂кноз");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdIndefinite", gender: "water"})).toBe("авли̂кнез");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "second", gender: "water"})).toBe("тевли̂кнез");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstPlural", gender: "fire"})).toBe("бамовли̂кноз");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstSingular", gender: "water"})).toBe("ивли̂кнез");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("до̀вли̂кез");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "thirdIndefinite", gender: "fire"})).toBe("адо̀вли̂кноз");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "second", gender: "fire"})).toBe("тодо̀вли̂коз");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstPlural", gender: "water"})).toBe("бамедо̀вли̂кнез");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstSingular", gender: "fire"})).toBe("едо̀вли̂кноз");
  });
  test("verbal, Dm pattern", () => {
    const radicals = ["т", "л", "г"] as const;
    const pattern = {sort: "verbal", type: "doubleMedial"} as const;
    const theme = "у";
    const patternAffixes = {prefixal: [], infixal: [], suffixal: [], terminal: []};
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("таллу̂г");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdIndefinite", gender: "fire"})).toBe("аталлу̂го");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "second", gender: "fire"})).toBe("тоталлу̂го");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstPlural", gender: "water"})).toBe("баметаллу̂г");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstSingular", gender: "fire"})).toBe("еталлу̂го");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdDefinite", gender: "fire"})).toBe("таллу̂гно");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdIndefinite", gender: "water"})).toBe("аталлу̂ган");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "second", gender: "water"})).toBe("теталлу̂ган");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstPlural", gender: "fire"})).toBe("бамоталлу̂гно");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstSingular", gender: "water"})).toBe("италлу̂ган");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("до̀таллу̂г");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "thirdIndefinite", gender: "fire"})).toBe("адо̀таллу̂гно");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "second", gender: "fire"})).toBe("тодо̀таллу̂го");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstPlural", gender: "water"})).toBe("бамедо̀таллу̂ган");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstSingular", gender: "fire"})).toBe("едо̀таллу̂гно");
  });
  test("verbal, Df pattern", () => {
    const radicals = ["ӟ", "с", "б"] as const;
    const pattern = {sort: "verbal", type: "doubleFinal"} as const;
    const theme = "и";
    const patternAffixes = {prefixal: [], infixal: [], suffixal: [], terminal: []};
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("заси̂ббе");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdIndefinite", gender: "fire"})).toBe("азси̂ббо");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "second", gender: "fire"})).toBe("тозси̂ббо");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstPlural", gender: "water"})).toBe("бамезси̂ббе");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstSingular", gender: "fire"})).toBe("езси̂ббо");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdDefinite", gender: "fire"})).toBe("заси̂ббано");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdIndefinite", gender: "water"})).toBe("азси̂ббан");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "second", gender: "water"})).toBe("тезси̂ббан");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstPlural", gender: "fire"})).toBe("бамозси̂ббано");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstSingular", gender: "water"})).toBe("изси̂ббан");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("до̀зси̂ббе");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "thirdIndefinite", gender: "fire"})).toBe("адо̀зси̂ббано");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "second", gender: "fire"})).toBe("тодо̀зси̂ббо");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstPlural", gender: "water"})).toBe("бамедо̀зси̂ббан");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstSingular", gender: "fire"})).toBe("едо̀зси̂ббано");
  });
  test("verbal, Di pattern", () => {
    const radicals = ["ҕ", "в", "ц"] as const;
    const pattern = {sort: "verbal", type: "doubleInitial"} as const;
    const theme = "у";
    const patternAffixes = {prefixal: [], infixal: [], suffixal: [], terminal: []};
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("аҕҕаву̂ц");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdIndefinite", gender: "fire"})).toBe("аҕҕаву̂цо");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "second", gender: "fire"})).toBe("тоҕҕаву̂цо");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstPlural", gender: "water"})).toBe("бамеҕҕаву̂ц");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstSingular", gender: "fire"})).toBe("еҕҕаву̂цо");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdDefinite", gender: "fire"})).toBe("аҕҕаву̂цно");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdIndefinite", gender: "water"})).toBe("аҕҕаву̂цан");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "second", gender: "water"})).toBe("теҕҕаву̂цан");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstPlural", gender: "fire"})).toBe("бамоҕҕаву̂цно");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstSingular", gender: "water"})).toBe("иҕҕаву̂цан");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("до̀ҕҕаву̂ц");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "thirdIndefinite", gender: "fire"})).toBe("адо̀ҕҕаву̂цно");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "second", gender: "fire"})).toBe("тодо̀ҕҕаву̂цо");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstPlural", gender: "water"})).toBe("бамедо̀ҕҕаву̂цан");
    expect(getForm(radicals, pattern, theme, patternAffixes, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstSingular", gender: "fire"})).toBe("едо̀ҕҕаву̂цно");
  });
  test("failed 1", () => {
    expect(getForm(
      ["ҙ", "р", "с"], {sort: "substantive", type: "doubleFinal"}, "и",
      {prefixal: [], infixal: ["-еб-"], suffixal: [], terminal: []},
      {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "definite"}
    )).toBe("лезби̂рассе");
  });
  test("failed 2", () => {
    expect(getForm(
      ["г", "т", "к"], {sort: "substantive", type: "doubleInitial"}, "и",
      {prefixal: ["бо-"], infixal: [], suffixal: [], terminal: []},
      {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "definite"}
    )).toBe("лебогги̂так");
  });
  test("random", () => {
    expect(getForm(
      ["ў", "з", "ц"], {sort: "substantive", type: "ground"}, "у",
      {prefixal: [], infixal: ["-ед-"], suffixal: [], terminal: []},
      {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "accusative", definiteness: "indefinite"}
    )).toBe("оду̂цца");
    expect(getForm(
      ["ў", "з", "ц"], {sort: "substantive", type: "ground"}, "у",
      {prefixal: [], infixal: ["-ед-"], suffixal: [], terminal: []},
      {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "dative", definiteness: "definite"}
    )).toBe("лоду̂ццевас");
    expect(getForm(
      ["т", "б", "ҙ"], {sort: "verbal", type: "doubleFinal"}, "у",
      {prefixal: [], infixal: [], suffixal: ["-ал-"], terminal: ["-ҙ"]},
      {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "ablative", definiteness: "definite"}
    )).toBe("лотбу̂ззалозмаз");
  });
});