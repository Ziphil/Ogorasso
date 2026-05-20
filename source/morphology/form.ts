//

import {transformEuphony, transformLightSyllables, transformMerger, transformWeakConsonants} from "../surface";
import {
  ADHESIVITIES,
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

export function getForm(root: Root, pattern: Pattern, theme: Theme, patternAffixes: PatternAffixes, inflection: Inflection): string {
  const coreUnderlyingForm = transformLightSyllables(getCoreUnderlyingForm(root, pattern, theme, patternAffixes));
  const underlyingForm = getUnderlyingForm(coreUnderlyingForm, pattern, patternAffixes, inflection);
  const surfaceForm = transformMerger(transformWeakConsonants(transformEuphony(transformLightSyllables(underlyingForm))));
  return surfaceForm;
}

export function getAllForms(root: Root, pattern: Pattern, theme: Theme, patternAffixes: PatternAffixes): Record<SubstantiveInflectionSpecifier, string> | Record<VerbalInflectionSpecifier, string> {
  const sort = getInflectionSort(pattern, patternAffixes);
  if (sort === "substantive") {
    const forms = {} as Record<SubstantiveInflectionSpecifier, string>;
    for (const category of ["base", "adjective"] as const) {
      for (const adhesivity of ADHESIVITIES) {
        for (const gender of GENDERS) {
          for (const caze of CASES) {
            for (const definiteness of DEFINITENESSES) {
              const inflection = {sort, category, adhesivity, gender, case: caze, definiteness};
              const form = getForm(root, pattern, theme, patternAffixes, inflection);
              forms[`${sort}.${category}.${adhesivity}.${gender}.${caze}.${definiteness}`] = form;
            }
          }
        }
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
              const form = getForm(root, pattern, theme, patternAffixes, inflection);
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
              const form = getForm(root, pattern, theme, patternAffixes, inflection);
              forms[`${sort}.${category}.${adhesivity}.${gender}.${caze}.${definiteness}`] = form;
            }
          }
        }
      }
    }
    return forms;
  }
}

export function getInflectionSort(pattern: Pattern, patternAffixes: PatternAffixes): Sort {
  if (pattern.sort === "verbal") {
    if (patternAffixes.suffixal.length > 0) {
      return "substantive";
    } else {
      return "verbal";
    }
  } else {
    return "substantive";
  }
}

function getUnderlyingForm(coreUnderlyingForm: string, pattern: Pattern, patternAffixes: PatternAffixes, inflection: Inflection): string {
  const inflectionAffixes = getInflectionAffixes(inflection);
  let underlyingRealization = "";
  underlyingRealization += inflectionAffixes.prefixal.map((affix) => affix.replace(/-/g, "")).join("");
  underlyingRealization += (pattern.type === "doubleInitial" && patternAffixes.prefixal.length <= 0 && inflectionAffixes.prefixal.length <= 0) ? "а" : "";
  underlyingRealization += coreUnderlyingForm;
  underlyingRealization += (pattern.type === "doubleFinal" && patternAffixes.suffixal.length <= 0 && inflectionAffixes.suffixal.length <= 0 && patternAffixes.terminal.length <= 0) ? "е" : "";
  underlyingRealization += inflectionAffixes.suffixal.map((affix) => affix.replace(/-/g, "")).join("");
  if (patternAffixes.terminal.length > 0) {
    const last = underlyingRealization[underlyingRealization.length - 1];
    if (last !== "е" && last !== "о" && last !== "а") {
      if (("voice" in inflection && inflection.gender === "water") || ("adhesivity" in inflection && inflection.gender === "water" && inflection.case === "nominative" && inflection.adhesivity === "adverbial")) {
        underlyingRealization += "е";
      } else {
        underlyingRealization += "а";
      }
    }
    underlyingRealization += patternAffixes.terminal.map((affix) => affix.replace(/-/g, "")).join("");
  }
  return underlyingRealization;
}

function getCoreUnderlyingForm(root: Root, pattern: Pattern, theme: Theme, patternAffixes: PatternAffixes): string {
  if (root.length === 3) {
    if (pattern.sort === "verbal") {
      let coreUnderlyingRealization = "";
      coreUnderlyingRealization += patternAffixes.prefixal.map((affix) => affix.replace(/-/g, "")).join("");
      coreUnderlyingRealization += (pattern.type === "doubleInitial") ? root[0] + root[0] : root[0];
      coreUnderlyingRealization += "а";
      coreUnderlyingRealization += (pattern.type === "doubleMedial") ? root[1] + root[1] : root[1];
      coreUnderlyingRealization += patternAffixes.infixal.map((affix) => affix.replace(/-/g, "")).join("");
      coreUnderlyingRealization += theme + "\u0302";
      coreUnderlyingRealization += (pattern.type === "doubleFinal") ? root[2] + root[2] : root[2];
      coreUnderlyingRealization += patternAffixes.suffixal.map((affix) => affix.replace(/-/g, "")).join("");
      return coreUnderlyingRealization;
    } else {
      let coreUnderlyingRealization = "";
      coreUnderlyingRealization += patternAffixes.prefixal.map((affix) => affix.replace(/-/g, "")).join("");
      coreUnderlyingRealization += (pattern.type === "doubleInitial") ? root[0] + root[0] : root[0];
      coreUnderlyingRealization += patternAffixes.infixal.map((affix) => affix.replace(/-/g, "")).join("");
      coreUnderlyingRealization += theme + "\u0302";
      coreUnderlyingRealization += (pattern.type === "doubleMedial") ? root[1] + root[1] : root[1];
      coreUnderlyingRealization += "а";
      coreUnderlyingRealization += (pattern.type === "doubleFinal") ? root[2] + root[2] : root[2];
      coreUnderlyingRealization += patternAffixes.suffixal.map((affix) => affix.replace(/-/g, "")).join("");
      return coreUnderlyingRealization;
    }
  } else {
    if (pattern.sort === "verbal") {
      let coreUnderlyingRealization = "";
      coreUnderlyingRealization += patternAffixes.prefixal.map((affix) => affix.replace(/-/g, "")).join("");
      coreUnderlyingRealization += root[0];
      coreUnderlyingRealization += "а";
      coreUnderlyingRealization += root[1];
      coreUnderlyingRealization += "а";
      coreUnderlyingRealization += root[2];
      coreUnderlyingRealization += patternAffixes.infixal.map((affix) => affix.replace(/-/g, "")).join("");
      coreUnderlyingRealization += theme + "\u0302";
      coreUnderlyingRealization += root[3];
      coreUnderlyingRealization += patternAffixes.suffixal.map((affix) => affix.replace(/-/g, "")).join("");
      return coreUnderlyingRealization;
    } else {
      let coreUnderlyingRealization = "";
      coreUnderlyingRealization += patternAffixes.prefixal.map((affix) => affix.replace(/-/g, "")).join("");
      coreUnderlyingRealization += root[0];
      coreUnderlyingRealization += patternAffixes.infixal.map((affix) => affix.replace(/-/g, "")).join("");
      coreUnderlyingRealization += theme + "\u0302";
      coreUnderlyingRealization += root[1];
      coreUnderlyingRealization += "а";
      coreUnderlyingRealization += root[2];
      coreUnderlyingRealization += "а";
      coreUnderlyingRealization += root[3];
      coreUnderlyingRealization += patternAffixes.suffixal.map((affix) => affix.replace(/-/g, "")).join("");
      return coreUnderlyingRealization;
    }
  }
}