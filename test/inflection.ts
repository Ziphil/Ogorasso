//

import {describe, expect, test} from "vitest";
import {Anatomy, getForm} from "../source";


describe("inflection", () => {
  test("substantive, G pattern", () => {
    const anatomy = {
      kind: "simplex",
      root: ["ц", "н", "т"],
      pattern: {sort: "substantive", type: "ground"},
      theme: "и",
      affixes: {prefixal: [], infixal: [], suffixal: [], terminal: []}
    } as Anatomy;
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("ци̂нат");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "accusative", definiteness: "indefinite"})).toBe("ци̂нта");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "dative", definiteness: "indefinite"})).toBe("ци̂нтос");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "ablative", definiteness: "indefinite"})).toBe("ци̂нтезам");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "instrumental", definiteness: "indefinite"})).toBe("ци̂нтут");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "locative", definiteness: "indefinite"})).toBe("ци̂нти");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("ци̂нтев");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "accusative", definiteness: "indefinite"})).toBe("ци̂нтовах");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("ци̂нтовзам");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "instrumental", definiteness: "indefinite"})).toBe("ци̂нтевот");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "definite"})).toBe("леци̂нат");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "instrumental", definiteness: "definite"})).toBe("лоци̂нтовот");
    expect(getForm(anatomy, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("ци̂нтар");
    expect(getForm(anatomy, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("ци̂нтарозам");
    expect(getForm(anatomy, {sort: "substantive", category: "adverb", type: "simple"})).toBe("ци̂нто̀ӈ");
    expect(getForm(anatomy, {sort: "substantive", category: "adverb", type: "k"})).toBe("ци̂нту̀к");
    expect(getForm(anatomy, {sort: "substantive", category: "prepositional", gender: "water"})).toBe("ци̂нтѐ");
    expect(getForm(anatomy, {sort: "substantive", category: "prepositional", gender: "fire"})).toBe("ци̂нто̀");
  });
  test("substantive, Dm pattern", () => {
    const anatomy = {
      kind: "simplex",
      root: ["г", "б", "ш"],
      pattern: {sort: "substantive", type: "doubleMedial"},
      theme: "у",
      affixes: {prefixal: [], infixal: [], suffixal: [], terminal: []}
    } as Anatomy;
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("гу̂ббаш");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "accusative", definiteness: "indefinite"})).toBe("гу̂ббаша");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "dative", definiteness: "indefinite"})).toBe("гу̂ббашос");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "ablative", definiteness: "indefinite"})).toBe("гу̂ббашезам");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "instrumental", definiteness: "indefinite"})).toBe("гу̂ббашут");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "locative", definiteness: "indefinite"})).toBe("гу̂ббаши");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("гу̂ббашев");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "accusative", definiteness: "indefinite"})).toBe("гу̂ббашовах");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("гу̂ббашовзам");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "instrumental", definiteness: "indefinite"})).toBe("гу̂ббашевот");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "definite"})).toBe("легу̂ббаш");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "instrumental", definiteness: "definite"})).toBe("логу̂ббашовот");
    expect(getForm(anatomy, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("гу̂ббашар");
    expect(getForm(anatomy, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("гу̂ббашрозам");
    expect(getForm(anatomy, {sort: "substantive", category: "adverb", type: "simple"})).toBe("гу̂ббашо̀ӈ");
    expect(getForm(anatomy, {sort: "substantive", category: "adverb", type: "k"})).toBe("гу̂ббашу̀к");
    expect(getForm(anatomy, {sort: "substantive", category: "prepositional", gender: "water"})).toBe("гу̂ббашѐ");
    expect(getForm(anatomy, {sort: "substantive", category: "prepositional", gender: "fire"})).toBe("гу̂ббашо̀");
  });
  test("substantive, Df pattern", () => {
    const anatomy = {
      kind: "simplex",
      root: ["х", "л", "ф"],
      pattern: {sort: "substantive", type: "doubleFinal"},
      theme: "и",
      affixes: {prefixal: [], infixal: [], suffixal: [], terminal: []}
    } as Anatomy;
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("хи̂лаффе");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "accusative", definiteness: "indefinite"})).toBe("хи̂лаффа");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "dative", definiteness: "indefinite"})).toBe("хи̂лаффос");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "ablative", definiteness: "indefinite"})).toBe("хи̂лаффезам");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "instrumental", definiteness: "indefinite"})).toBe("хи̂лаффут");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "locative", definiteness: "indefinite"})).toBe("хи̂лаффи");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("хи̂лаффев");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "accusative", definiteness: "indefinite"})).toBe("хи̂лаффовах");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("хи̂лаффовзам");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "instrumental", definiteness: "indefinite"})).toBe("хи̂лаффевот");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "definite"})).toBe("лехи̂лаффе");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "instrumental", definiteness: "definite"})).toBe("лохи̂лаффовот");
    expect(getForm(anatomy, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("хи̂лаффар");
    expect(getForm(anatomy, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("хи̂лаффарозам");
    expect(getForm(anatomy, {sort: "substantive", category: "adverb", type: "simple"})).toBe("хи̂лаффо̀ӈ");
    expect(getForm(anatomy, {sort: "substantive", category: "adverb", type: "k"})).toBe("хи̂лаффу̀к");
    expect(getForm(anatomy, {sort: "substantive", category: "prepositional", gender: "water"})).toBe("хи̂лаффѐ");
    expect(getForm(anatomy, {sort: "substantive", category: "prepositional", gender: "fire"})).toBe("хи̂лаффо̀");
  });
  test("substantive, Di pattern", () => {
    const anatomy = {
      kind: "simplex",
      root: ["ӝ", "б", "ӈ"],
      pattern: {sort: "substantive", type: "doubleInitial"},
      theme: "и",
      affixes: {prefixal: [], infixal: [], suffixal: [], terminal: []}
    } as Anatomy;
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("ажжи̂баӈ");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "accusative", definiteness: "indefinite"})).toBe("ажжи̂бӈа");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "dative", definiteness: "indefinite"})).toBe("ажжи̂бӈос");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "ablative", definiteness: "indefinite"})).toBe("ажжи̂бӈезам");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "instrumental", definiteness: "indefinite"})).toBe("ажжи̂бӈут");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "locative", definiteness: "indefinite"})).toBe("ажжи̂бӈи");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("ажжи̂бӈев");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "accusative", definiteness: "indefinite"})).toBe("ажжи̂бӈовах");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("ажжи̂бӈовзам");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "instrumental", definiteness: "indefinite"})).toBe("ажжи̂бӈевот");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "definite"})).toBe("лежжи̂баӈ");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "instrumental", definiteness: "definite"})).toBe("ложжи̂бӈовот");
    expect(getForm(anatomy, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("ажжи̂бӈар");
    expect(getForm(anatomy, {sort: "substantive", category: "adjective", adhesivity: "adverbial", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("ажжи̂бӈарозам");
    expect(getForm(anatomy, {sort: "substantive", category: "adverb", type: "simple"})).toBe("ажжи̂бӈо̀ӈ");
    expect(getForm(anatomy, {sort: "substantive", category: "adverb", type: "k"})).toBe("ажжи̂бӈу̀к");
    expect(getForm(anatomy, {sort: "substantive", category: "prepositional", gender: "water"})).toBe("ажжи̂бӈѐ");
    expect(getForm(anatomy, {sort: "substantive", category: "prepositional", gender: "fire"})).toBe("ажжи̂бӈо̀");
  });
  test("verbal, G pattern", () => {
    const anatomy = {
      kind: "simplex",
      root: ["ҙ", "м", "к"],
      pattern: {sort: "verbal", type: "ground"},
      theme: "у",
      affixes: {prefixal: [], infixal: [], suffixal: [], terminal: []}
    } as Anatomy;
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("заму̂к");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdIndefinite", gender: "fire"})).toBe("азму̂ко");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "second", gender: "fire"})).toBe("тозму̂ко");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstPlural", gender: "water"})).toBe("бамезму̂к");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstSingular", gender: "fire"})).toBe("езму̂ко");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdDefinite", gender: "fire"})).toBe("заму̂кно");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdIndefinite", gender: "water"})).toBe("азму̂кан");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "second", gender: "water"})).toBe("тезму̂кан");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstPlural", gender: "fire"})).toBe("бамозму̂кно");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstSingular", gender: "water"})).toBe("изму̂кан");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("до̀зму̂к");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "thirdIndefinite", gender: "fire"})).toBe("адо̀зму̂кно");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "second", gender: "fire"})).toBe("тодо̀зму̂ко");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstPlural", gender: "water"})).toBe("бамедо̀зму̂кан");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstSingular", gender: "fire"})).toBe("едо̀зму̂кно");
  });
  test("verbal, G pattern, reflexive", () => {
    const anatomy = {
      kind: "simplex",
      root: ["в", "л", "к"],
      pattern: {sort: "verbal", type: "ground"},
      theme: "и",
      affixes: {prefixal: [], infixal: [], suffixal: [], terminal: ["-ҙ"]}
    } as Anatomy;
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("вали̂кез");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdIndefinite", gender: "fire"})).toBe("авли̂коз");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "second", gender: "fire"})).toBe("товли̂коз");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstPlural", gender: "water"})).toBe("бамевли̂кез");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstSingular", gender: "fire"})).toBe("евли̂коз");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdDefinite", gender: "fire"})).toBe("вали̂кноз");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdIndefinite", gender: "water"})).toBe("авли̂кнез");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "second", gender: "water"})).toBe("тевли̂кнез");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstPlural", gender: "fire"})).toBe("бамовли̂кноз");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstSingular", gender: "water"})).toBe("ивли̂кнез");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("до̀вли̂кез");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "thirdIndefinite", gender: "fire"})).toBe("адо̀вли̂кноз");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "second", gender: "fire"})).toBe("тодо̀вли̂коз");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstPlural", gender: "water"})).toBe("бамедо̀вли̂кнез");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstSingular", gender: "fire"})).toBe("едо̀вли̂кноз");
  });
  test("verbal, Dm pattern", () => {
    const anatomy = {
      kind: "simplex",
      root: ["т", "л", "г"],
      pattern: {sort: "verbal", type: "doubleMedial"},
      theme: "у",
      affixes: {prefixal: [], infixal: [], suffixal: [], terminal: []}
    } as Anatomy;
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("таллу̂г");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdIndefinite", gender: "fire"})).toBe("аталлу̂го");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "second", gender: "fire"})).toBe("тоталлу̂го");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstPlural", gender: "water"})).toBe("баметаллу̂г");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstSingular", gender: "fire"})).toBe("еталлу̂го");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdDefinite", gender: "fire"})).toBe("таллу̂гно");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdIndefinite", gender: "water"})).toBe("аталлу̂ган");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "second", gender: "water"})).toBe("теталлу̂ган");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstPlural", gender: "fire"})).toBe("бамоталлу̂гно");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstSingular", gender: "water"})).toBe("италлу̂ган");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("до̀таллу̂г");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "thirdIndefinite", gender: "fire"})).toBe("адо̀таллу̂гно");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "second", gender: "fire"})).toBe("тодо̀таллу̂го");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstPlural", gender: "water"})).toBe("бамедо̀таллу̂ган");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstSingular", gender: "fire"})).toBe("едо̀таллу̂гно");
  });
  test("verbal, Df pattern", () => {
    const anatomy = {
      kind: "simplex",
      root: ["ӟ", "с", "б"],
      pattern: {sort: "verbal", type: "doubleFinal"},
      theme: "и",
      affixes: {prefixal: [], infixal: [], suffixal: [], terminal: []}
    } as Anatomy;
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("заси̂ббе");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdIndefinite", gender: "fire"})).toBe("азси̂ббо");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "second", gender: "fire"})).toBe("тозси̂ббо");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstPlural", gender: "water"})).toBe("бамезси̂ббе");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstSingular", gender: "fire"})).toBe("езси̂ббо");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdDefinite", gender: "fire"})).toBe("заси̂ббано");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdIndefinite", gender: "water"})).toBe("азси̂ббан");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "second", gender: "water"})).toBe("тезси̂ббан");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstPlural", gender: "fire"})).toBe("бамозси̂ббано");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstSingular", gender: "water"})).toBe("изси̂ббан");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("до̀зси̂ббе");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "thirdIndefinite", gender: "fire"})).toBe("адо̀зси̂ббано");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "second", gender: "fire"})).toBe("тодо̀зси̂ббо");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstPlural", gender: "water"})).toBe("бамедо̀зси̂ббан");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstSingular", gender: "fire"})).toBe("едо̀зси̂ббано");
  });
  test("verbal, Di pattern", () => {
    const anatomy = {
      kind: "simplex",
      root: ["ҕ", "в", "ц"],
      pattern: {sort: "verbal", type: "doubleInitial"},
      theme: "у",
      affixes: {prefixal: [], infixal: [], suffixal: [], terminal: []}
    } as Anatomy;
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("аҕҕаву̂ц");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdIndefinite", gender: "fire"})).toBe("аҕҕаву̂цо");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "second", gender: "fire"})).toBe("тоҕҕаву̂цо");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstPlural", gender: "water"})).toBe("бамеҕҕаву̂ц");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstSingular", gender: "fire"})).toBe("еҕҕаву̂цо");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdDefinite", gender: "fire"})).toBe("аҕҕаву̂цно");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdIndefinite", gender: "water"})).toBe("аҕҕаву̂цан");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "second", gender: "water"})).toBe("теҕҕаву̂цан");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstPlural", gender: "fire"})).toBe("бамоҕҕаву̂цно");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstSingular", gender: "water"})).toBe("иҕҕаву̂цан");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("до̀ҕҕаву̂ц");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "thirdIndefinite", gender: "fire"})).toBe("адо̀ҕҕаву̂цно");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "present", person: "second", gender: "fire"})).toBe("тодо̀ҕҕаву̂цо");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstPlural", gender: "water"})).toBe("бамедо̀ҕҕаву̂цан");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "passive", tense: "past", person: "firstSingular", gender: "fire"})).toBe("едо̀ҕҕаву̂цно");
  });
  test("exceptional: хе̂е", () => {
    const anatomy = {
      kind: "exceptional",
      spelling: "хе̂е"
    } as Anatomy;
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("хе̂е");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "accusative", definiteness: "indefinite"})).toBe("хе̂а");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("хе̂овзам");
  });
  test("exceptional: и̂цце", () => {
    const anatomy = {
      kind: "exceptional",
      spelling: "и̂цце"
    } as Anatomy;
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("и̂цце");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "accusative", definiteness: "indefinite"})).toBe("и̂цца");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("и̂ццовзам");
  });
  test("exceptional: ѐ", () => {
    const anatomy = {
      kind: "exceptional",
      spelling: "ѐ"
    } as Anatomy;
    expect(getForm(anatomy, {sort: "substantive", category: "prepositional", gender: "water"})).toBe("ѐ");
    expect(getForm(anatomy, {sort: "substantive", category: "prepositional", gender: "fire"})).toBe("о̀");
  });
  test("exceptional: анне̂с", () => {
    const anatomy = {
      kind: "exceptional",
      spelling: "анне̂с"
    } as Anatomy;
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("анне̂с");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "accusative", definiteness: "indefinite"})).toBe("анне̂са");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("анне̂совзам");
  });
  test("exceptional: е̂ддо", () => {
    const anatomy = {
      kind: "exceptional",
      spelling: "е̂ддо"
    } as Anatomy;
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("е̂дде");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "accusative", definiteness: "indefinite"})).toBe("е̂дда");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("е̂ддовзам");
  });
  test("exceptional: ѝ", () => {
    const anatomy = {
      kind: "exceptional",
      spelling: "ѝ"
    } as Anatomy;
    expect(getForm(anatomy, {sort: "substantive", category: "prepositional", gender: "water"})).toBe("ѝ");
    expect(getForm(anatomy, {sort: "substantive", category: "prepositional", gender: "fire"})).toBe("ѐ");
  });
  test("exceptional: у", () => {
    const anatomy = {
      kind: "exceptional",
      spelling: "у"
    } as Anatomy;
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"})).toBe("у");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "accusative", definiteness: "indefinite"})).toBe("ух");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "locative", definiteness: "indefinite"})).toBe("у");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "instrumental", definiteness: "indefinite"})).toBe("уват");
  });
  test("exceptional: ку̂к", () => {
    const anatomy = {
      kind: "exceptional",
      spelling: "ку̂к"
    } as Anatomy;
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "nominative", definiteness: "indefinite"})).toBe("ку̂к");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "accusative", definiteness: "indefinite"})).toBe("ко̂к");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("ко̂замок");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "instrumental", definiteness: "indefinite"})).toBe("ку̂ток");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "locative", definiteness: "indefinite"})).toBe("ке̂ок");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "nominative", definiteness: "indefinite"})).toBe("ко̂вок");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "accusative", definiteness: "indefinite"})).toBe("ко̂вахок");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("ко̂взамок");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "instrumental", definiteness: "indefinite"})).toBe("ко̂воток");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "fire", case: "locative", definiteness: "indefinite"})).toBe("ко̂веок");
  });
  test("exceptional: ко̂ддео", () => {
    const anatomy = {
      kind: "exceptional",
      spelling: "ко̂ддео"
    } as Anatomy;
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "dative", definiteness: "indefinite"})).toBe("ко̂ддосо");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "ablative", definiteness: "indefinite"})).toBe("ко̂ддозамо");
    expect(getForm(anatomy, {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "locative", definiteness: "indefinite"})).toBe("ко̂ддео");
  });
  test("exceptional: е̂к", () => {
    const anatomy = {
      kind: "exceptional",
      spelling: "е̂к"
    } as Anatomy;
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdDefinite", gender: "water"})).toBe("е̂к");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "thirdIndefinite", gender: "fire"})).toBe("е̂ко");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "second", gender: "fire"})).toBe("те̂ко");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstPlural", gender: "water"})).toBe("бами̂к");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "present", person: "firstSingular", gender: "fire"})).toBe("и̂ко");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdDefinite", gender: "fire"})).toBe("е̂кно");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "thirdIndefinite", gender: "water"})).toBe("е̂кан");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "second", gender: "water"})).toBe("ти̂кан");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstPlural", gender: "fire"})).toBe("баме̂кно");
    expect(getForm(anatomy, {sort: "verbal", category: "base", voice: "active", tense: "past", person: "firstSingular", gender: "water"})).toBe("и̂кан");
  });
  test("random 1", () => {
    expect(getForm(
      {kind: "simplex", root: ["ў", "з", "ц"], pattern: {sort: "substantive", type: "ground"}, theme: "у", affixes: {prefixal: [], infixal: ["-ед-"], suffixal: [], terminal: []}},
      {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "accusative", definiteness: "indefinite"}
    )).toBe("оду̂цца");
    expect(getForm(
      {kind: "simplex", root: ["ў", "з", "ц"], pattern: {sort: "substantive", type: "ground"}, theme: "у", affixes: {prefixal: [], infixal: ["-ед-"], suffixal: [], terminal: []}},
      {sort: "substantive", category: "base", adhesivity: "adjectival", gender: "water", case: "dative", definiteness: "definite"}
    )).toBe("лоду̂ццевас");
  });
  test("random 2", () => {
    expect(getForm(
      {kind: "simplex", root: ["т", "б", "ҙ"], pattern: {sort: "verbal", type: "doubleFinal"}, theme: "у", affixes: {prefixal: [], infixal: [], suffixal: ["-ал-"], terminal: ["-ҙ"]}},
      {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "fire", case: "ablative", definiteness: "definite"}
    )).toBe("лотбу̂ззалозмаз");
  });
  test("random 3", () => {
    expect(getForm(
      {kind: "simplex", root: ["ч", "к", "ў"], pattern: {sort: "substantive", type: "ground"}, theme: "у", affixes: {prefixal: ["ҫе-"], infixal: [], suffixal: [], terminal: []}},
      {sort: "substantive", category: "prepositional", gender: "water"}
    )).toBe("сечу̂ко̀");
    expect(getForm(
      {kind: "simplex", root: ["ч", "к", "ў"], pattern: {sort: "substantive", type: "ground"}, theme: "у", affixes: {prefixal: ["ҫе-"], infixal: [], suffixal: [], terminal: []}},
      {sort: "substantive", category: "prepositional", gender: "fire"}
    )).toBe("сечу̂ку̀");
  });
  test("random 4", () => {
    expect(getForm(
      {kind: "simplex", root: ["ҙ", "р", "с"], pattern: {sort: "substantive", type: "doubleFinal"}, theme: "и", affixes: {prefixal: [], infixal: ["-еб-"], suffixal: [], terminal: []}},
      {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "definite"}
    )).toBe("лезби̂рассе");
  });
  test("random 5", () => {
    expect(getForm(
      {kind: "simplex", root: ["г", "т", "к"], pattern: {sort: "substantive", type: "doubleInitial"}, theme: "и", affixes: {prefixal: ["бо-"], infixal: [], suffixal: [], terminal: []}},
      {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "definite"}
    )).toBe("лебогги̂так");
  });
  test("random 6", () => {
    expect(getForm(
      {kind: "simplex", root: ["в", "й", "д"], pattern: {sort: "verbal", type: "ground"}, theme: "у", affixes: {prefixal: ["бо-"], infixal: [], suffixal: [], terminal: []}},
      {sort: "verbal", category: "noun", adhesivity: "adverbial", gender: "fire", case: "accusative", definiteness: "definite"}
    )).toBe("лобово̂лла");
  });
  test("random 7", () => {
    expect(getForm(
      {kind: "simplex", root: ["ӈ", "ч", "ў"], pattern: {sort: "substantive", type: "doubleFinal"}, theme: "и", affixes: {prefixal: [], infixal: [], suffixal: [], terminal: []}},
      {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "nominative", definiteness: "indefinite"}
    )).toBe("ӈи̂чое");
    expect(getForm(
      {kind: "simplex", root: ["ӈ", "ч", "ў"], pattern: {sort: "substantive", type: "doubleFinal"}, theme: "и", affixes: {prefixal: [], infixal: [], suffixal: [], terminal: []}},
      {sort: "substantive", category: "base", adhesivity: "adverbial", gender: "water", case: "accusative", definiteness: "indefinite"}
    )).toBe("ӈи̂чоа");
  });
});