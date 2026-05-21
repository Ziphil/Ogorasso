//

import {transformEuphony, transformLightSyllables, transformMerger, transformWeakConsonants} from "../surface";
import {
  ADHESIVITIES,
  ADVERB_TYPES,
  AffixType,
  CASES,
  DEFINITENESSES,
  GENDERS,
  Inflection,
  PERSONS,
  Pattern,
  Root,
  Sort,
  SubstantiveInflectionSpecifier,
  TENSES,
  Theme,
  VOICES,
  VerbalInflectionSpecifier
} from "../type";
import {getInflectionAffixes} from "./inflection";


export type PatternAffixes = Record<AffixType, ReadonlyArray<string>>;

export type Derivation = {
  root: Root,
  pattern: Pattern,
  theme: Theme,
  affixes: PatternAffixes
};

export function getForm(anatomy: Derivation, inflection: Inflection): string {
  const coreUnderlyingForm = transformLightSyllables(getStemUnderlyingForm(anatomy));
  const underlyingForm = getUnderlyingForm(coreUnderlyingForm, anatomy, inflection);
  const surfaceForm = transformMerger(transformWeakConsonants(transformEuphony(transformLightSyllables(underlyingForm))));
  return surfaceForm;
}

export function getAllForms(anatomy: Derivation): Record<SubstantiveInflectionSpecifier, string> | Record<VerbalInflectionSpecifier, string> {
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
    for (const category of ["adpredicative"] as const) {
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

export function getInflectionSort(anatomy: Derivation): Sort {
  if (anatomy.pattern.sort === "verbal") {
    if (anatomy.affixes.suffixal.length > 0) {
      return "substantive";
    } else {
      return "verbal";
    }
  } else {
    return "substantive";
  }
}

function getUnderlyingForm(stemUnderlyingForm: string, anatomy: Derivation, inflection: Inflection): string {
  const inflectionAffixes = getInflectionAffixes(inflection);
  let underlyingRealization = "";
  underlyingRealization += inflectionAffixes.prefixal.map((affix) => affix.replace(/-/g, "")).join("");
  underlyingRealization += (anatomy.pattern.type === "doubleInitial" && anatomy.affixes.prefixal.length <= 0 && inflectionAffixes.prefixal.length <= 0) ? "а" : "";
  underlyingRealization += stemUnderlyingForm;
  underlyingRealization += (anatomy.pattern.type === "doubleFinal" && anatomy.affixes.suffixal.length <= 0 && inflectionAffixes.suffixal.length <= 0 && anatomy.affixes.terminal.length <= 0) ? "е" : "";
  underlyingRealization += inflectionAffixes.suffixal.map((affix) => affix.replace(/-/g, "")).join("");
  if (anatomy.affixes.terminal.length > 0) {
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

function getStemUnderlyingForm(anatomy: Derivation): string {
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
}