//

import {Anatomy, Sort} from "../anatomy";
import {surfaceEuphony, surfaceLightSyllables, surfaceMerger, surfaceWeakConsonants} from "../surfacing";
import {isConsonant} from "../surfacing/grapheme";
import {getInflectionAffixes} from "./inflection";
import {
  ADHESIVITIES,
  ADVERB_TYPES,
  CASES,
  DEFINITENESSES,
  GENDERS,
  Inflection,
  PERSONS,
  SubstantiveInflectionSpecifier,
  TENSES,
  VOICES,
  VerbalInflectionSpecifier
} from "./type";


export function getForm(anatomy: Anatomy, inflection: Inflection): string {
  const stemUnderlyingForm = surfaceLightSyllables(getStemUnderlyingForm(anatomy));
  const underlyingForm = getUnderlyingForm(stemUnderlyingForm, anatomy, inflection);
  const surfaceForm = surfaceMerger(surfaceWeakConsonants(surfaceEuphony(surfaceLightSyllables(underlyingForm))));
  return surfaceForm;
}

export function getAllForms(anatomy: Anatomy): Record<SubstantiveInflectionSpecifier, string> | Record<VerbalInflectionSpecifier, string> {
  const sort = getInflectionSort(anatomy);
  if (sort === "substantive") {
    const forms = {} as Record<SubstantiveInflectionSpecifier, string>;
    for (const category of ["base", "adjective"] as const) {
      for (const adhesivity of ADHESIVITIES) {
        for (const gender of GENDERS) {
          for (const caze of CASES) {
            for (const definiteness of DEFINITENESSES) {
              const inflection = {sort, category, adhesivity, gender, case: caze, definiteness};
              const form = getForm(anatomy, inflection);
              forms[`${sort}.${category}.${adhesivity}.${gender}.${caze}.${definiteness}`] = form;
            }
          }
        }
      }
    }
    for (const category of ["adverb"] as const) {
      for (const type of ADVERB_TYPES) {
        const inflection = {sort, category, type};
        const form = getForm(anatomy, inflection);
        forms[`${sort}.${category}.${type}`] = form;
      }
    }
    for (const category of ["prepositional"] as const) {
      for (const gender of GENDERS) {
        const inflection = {sort, category, gender};
        const form = getForm(anatomy, inflection);
        forms[`${sort}.${category}.${gender}`] = form;
      }
    }
    return forms;
  } else {
    const forms = {} as Record<VerbalInflectionSpecifier, string>;
    for (const category of ["base"] as const) {
      for (const voice of VOICES) {
        for (const tense of TENSES) {
          for (const person of PERSONS) {
            for (const gender of GENDERS) {
              const inflection = {sort, category, voice, tense, person, gender};
              const form = getForm(anatomy, inflection);
              forms[`${sort}.${category}.${voice}.${tense}.${person}.${gender}`] = form;
            }
          }
        }
      }
    }
    for (const category of ["adjective", "noun"] as const) {
      for (const adhesivity of ADHESIVITIES) {
        for (const gender of GENDERS) {
          for (const caze of CASES) {
            for (const definiteness of DEFINITENESSES) {
              const inflection = {sort, category, adhesivity, gender, case: caze, definiteness} as const;
              const form = getForm(anatomy, inflection);
              forms[`${sort}.${category}.${adhesivity}.${gender}.${caze}.${definiteness}`] = form;
            }
          }
        }
      }
    }
    return forms;
  }
}

export function getInflectionSort(anatomy: Anatomy): Sort {
  if (anatomy.kind === "simplex") {
    if (anatomy.pattern.sort === "verbal") {
      if (anatomy.affixes.suffixal.length > 0) {
        return "substantive";
      } else {
        return "verbal";
      }
    } else {
      return "substantive";
    }
  } else {
    return "substantive";
  }
}

function getUnderlyingForm(stemUnderlyingForm: string, anatomy: Anatomy, inflection: Inflection): string {
  const inflectionAffixes = getInflectionAffixes(inflection);
  let underlyingRealization = "";
  underlyingRealization += inflectionAffixes.prefixal.map((affix) => affix.replace(/-/g, "")).join("");
  if (hasStemUnderlyingFormInitialGeminate(stemUnderlyingForm) && ("affixes" in anatomy && anatomy.affixes.prefixal.length <= 0) && inflectionAffixes.prefixal.length <= 0) {
    underlyingRealization += "а";
  }
  underlyingRealization += stemUnderlyingForm;
  if (hasStemUnderlyingFormFinalGeminate(stemUnderlyingForm) && ("affixes" in anatomy && anatomy.affixes.suffixal.length <= 0) && inflectionAffixes.suffixal.length <= 0 && anatomy.affixes.terminal.length <= 0) {
    underlyingRealization += "е";
  }
  underlyingRealization += inflectionAffixes.suffixal.map((affix) => affix.replace(/-/g, "")).join("");
  if (anatomy.kind === "simplex" && anatomy.affixes.terminal.length > 0) {
    const last = underlyingRealization[underlyingRealization.length - 1];
    if (last !== "е" && last !== "о" && last !== "а") {
      if (("voice" in inflection && inflection.gender === "water") || ("adhesivity" in inflection && inflection.gender === "water" && inflection.case === "nominative" && inflection.adhesivity === "adverbial")) {
        underlyingRealization += "е";
      } else {
        underlyingRealization += "а";
      }
    }
    underlyingRealization += anatomy.affixes.terminal.map((affix) => affix.replace(/-/g, "")).join("");
  }
  return underlyingRealization;
}

function hasStemUnderlyingFormInitialGeminate(stemUnderlyingForm: string): boolean {
  return stemUnderlyingForm.length >= 2 && isConsonant(stemUnderlyingForm[0]) && stemUnderlyingForm[0] === stemUnderlyingForm[1];
}

function hasStemUnderlyingFormFinalGeminate(stemUnderlyingForm: string): boolean {
  return stemUnderlyingForm.length >= 2 && isConsonant(stemUnderlyingForm[stemUnderlyingForm.length - 1]) && stemUnderlyingForm[stemUnderlyingForm.length - 1] === stemUnderlyingForm[stemUnderlyingForm.length - 2];
}

export const EXCEPTIONAL_UNDERLYING_FORMS = new Map<string, string>([
  ["ѐ", "ъ"], ["шѐ", "ш"], ["бамѐ", "бам"], ["цѐ", "ц"],
  ["ех", "ъ"], ["шех", "ш"], ["бамех", "бам"], ["цех", "ц"],
  ["хе̂е", "хе̂ъъ"], ["хо̂е", "хо̂ъъ"], ["те̂шше", "те̂шш"], ["бе̂мме", "бе̂мм"], ["и̂цце", "йе̂цц"],
  ["хѐ", "х"], ["тѐ", "т"], ["ѝ", "й"], ["кѐ", "к"], ["фѐ", "ф"], ["аффѐ", "фф"], ["нѐ", "н"], ["аннѐ", "нн"], ["ажжѐ", "жж"],
  ["хе̂с", "хе̂с"], ["те̂с", "те̂с"], ["и̂с", "йе̂с"], ["ке̂с", "ке̂с"], ["фе̂с", "фе̂с"], ["аффе̂с", "ффе̂с"], ["не̂с", "не̂с"], ["анне̂с", "нне̂с"], ["ажже̂с", "жже̂с"],
  ["хо̂с", "хо̂с"], ["то̂с", "то̂с"], ["е̂с", "йо̂с"], ["ко̂с", "ко̂с"], ["фо̂с", "фо̂с"], ["аффо̂с", "ффо̂с"], ["но̂с", "но̂с"], ["анно̂с", "нно̂с"], ["ажжо̂с", "жжо̂с"],
  ["хе̂дде", "хе̂дд"], ["те̂дде", "те̂дд"], ["и̂дде", "йе̂дд"], ["ке̂дде", "ке̂дд"], ["фе̂дде", "фе̂дд"], ["аффе̂дде", "ффе̂дд"], ["не̂дде", "не̂дд"], ["анне̂дде", "нне̂дд"], ["ажже̂дде", "жже̂дд"],
  ["хо̂ддо", "хо̂дд"], ["то̂ддо", "то̂дд"], ["е̂ддо", "йо̂дд"], ["ко̂ддо", "ко̂дд"], ["фо̂ддо", "фо̂дд"], ["аффо̂ддо", "ффо̂дд"], ["но̂ддо", "но̂дд"], ["анно̂ддо", "нно̂дд"], ["ажжо̂ддо", "жжо̂дд"],
  ["хо̂чче", "хо̂чч"], ["то̂чче", "то̂чч"], ["е̂чче", "йо̂чч"], ["ко̂чче", "ко̂чч"], ["фо̂чче", "фо̂чч"], ["аффо̂чче", "ффо̂чч"], ["но̂чче", "но̂чч"], ["анно̂чче", "нно̂чч"], ["ажжо̂чче", "жжо̂чч"]
]);

/** 活用接辞のない語幹部分の基層形を計算します。
 * ただし、語末型語型接辞は無視します (語末型語型接辞のみ活用接辞として扱って `getUnderlyingForm` 関数で追加する)。 */
function getStemUnderlyingForm(anatomy: Anatomy): string {
  if (anatomy.kind === "simplex") {
    const {root, pattern, theme, affixes} = anatomy;
    if (root.length === 3) {
      if (pattern.sort === "verbal") {
        let coreUnderlyingRealization = "";
        coreUnderlyingRealization += affixes.prefixal.map((affix) => affix.replace(/-/g, "")).join("");
        coreUnderlyingRealization += (pattern.type === "doubleInitial") ? root[0] + root[0] : root[0];
        coreUnderlyingRealization += "а";
        coreUnderlyingRealization += (pattern.type === "doubleMedial") ? root[1] + root[1] : root[1];
        coreUnderlyingRealization += affixes.infixal.map((affix) => affix.replace(/-/g, "")).join("");
        coreUnderlyingRealization += theme + "\u0302";
        coreUnderlyingRealization += (pattern.type === "doubleFinal") ? root[2] + root[2] : root[2];
        coreUnderlyingRealization += affixes.suffixal.map((affix) => affix.replace(/-/g, "")).join("");
        return coreUnderlyingRealization;
      } else {
        let coreUnderlyingRealization = "";
        coreUnderlyingRealization += affixes.prefixal.map((affix) => affix.replace(/-/g, "")).join("");
        coreUnderlyingRealization += (pattern.type === "doubleInitial") ? root[0] + root[0] : root[0];
        coreUnderlyingRealization += affixes.infixal.map((affix) => affix.replace(/-/g, "")).join("");
        coreUnderlyingRealization += theme + "\u0302";
        coreUnderlyingRealization += (pattern.type === "doubleMedial") ? root[1] + root[1] : root[1];
        coreUnderlyingRealization += "а";
        coreUnderlyingRealization += (pattern.type === "doubleFinal") ? root[2] + root[2] : root[2];
        coreUnderlyingRealization += affixes.suffixal.map((affix) => affix.replace(/-/g, "")).join("");
        return coreUnderlyingRealization;
      }
    } else {
      if (pattern.sort === "verbal") {
        let coreUnderlyingRealization = "";
        coreUnderlyingRealization += affixes.prefixal.map((affix) => affix.replace(/-/g, "")).join("");
        coreUnderlyingRealization += root[0];
        coreUnderlyingRealization += "а";
        coreUnderlyingRealization += root[1];
        coreUnderlyingRealization += "а";
        coreUnderlyingRealization += root[2];
        coreUnderlyingRealization += affixes.infixal.map((affix) => affix.replace(/-/g, "")).join("");
        coreUnderlyingRealization += theme + "\u0302";
        coreUnderlyingRealization += root[3];
        coreUnderlyingRealization += affixes.suffixal.map((affix) => affix.replace(/-/g, "")).join("");
        return coreUnderlyingRealization;
      } else {
        let coreUnderlyingRealization = "";
        coreUnderlyingRealization += affixes.prefixal.map((affix) => affix.replace(/-/g, "")).join("");
        coreUnderlyingRealization += root[0];
        coreUnderlyingRealization += affixes.infixal.map((affix) => affix.replace(/-/g, "")).join("");
        coreUnderlyingRealization += theme + "\u0302";
        coreUnderlyingRealization += root[1];
        coreUnderlyingRealization += "а";
        coreUnderlyingRealization += root[2];
        coreUnderlyingRealization += "а";
        coreUnderlyingRealization += root[3];
        coreUnderlyingRealization += affixes.suffixal.map((affix) => affix.replace(/-/g, "")).join("");
        return coreUnderlyingRealization;
      }
    }
  } else if (anatomy.kind === "exceptional") {
    return EXCEPTIONAL_UNDERLYING_FORMS.get(anatomy.spelling) ?? "";
  } else {
    anatomy satisfies never;
    throw new Error("cannot occur");
  }
}