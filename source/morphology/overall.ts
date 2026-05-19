//

import {transformEuphony, transformLightSyllables, transformMerger, transformWeakConsonants} from "../surface";
import {AffixType, Inflection, PatternSort, PatternType, Radicals, ThemeSpelling} from "../type";
import {InflectionAffixInventory, getInflectionAffixes} from "./inflection";


type PatternSpec = {
  sort: PatternSort,
  type: PatternType
};

export function getRealization(radicals: Radicals, pattern: PatternSpec, theme: ThemeSpelling, patternAffixes: Record<AffixType, ReadonlyArray<string>>, inflection: Inflection): string {
  const inflextionAffixes = getInflectionAffixes(inflection);
  const coreUnderlyingRealization = transformLightSyllables(getCoreUnderlyingRealization(radicals, pattern, theme, patternAffixes));
  const underlyingRealization = getUnderlyingRealization(coreUnderlyingRealization, pattern, patternAffixes, inflextionAffixes);
  const surfaceRealization = transformMerger(transformWeakConsonants(transformEuphony(transformLightSyllables(underlyingRealization))));
  return surfaceRealization;
}

export function getUnderlyingRealization(coreUnderlyingRealization: string, pattern: PatternSpec, patternAffixes: Record<AffixType, ReadonlyArray<string>>, inflectionAffixes: InflectionAffixInventory): string {
  let underlyingRealization = "";
  underlyingRealization += inflectionAffixes.prefixal.join("");
  underlyingRealization += (pattern.type === "doubleInitial" && patternAffixes.prefixal.length <= 0 && inflectionAffixes.prefixal.length <= 0) ? "а" : "";
  underlyingRealization += coreUnderlyingRealization;
  underlyingRealization += (pattern.type === "doubleFinal" && patternAffixes.suffixal.length <= 0 && inflectionAffixes.suffixal.length <= 0) ? "е" : "";
  underlyingRealization += inflectionAffixes.suffixal.join("");
  return underlyingRealization;
}

export function getCoreUnderlyingRealization(radicals: Radicals, pattern: PatternSpec, theme: ThemeSpelling, patternAffixes: Record<AffixType, ReadonlyArray<string>>): string {
  if (radicals.length === 3) {
    if (pattern.sort === "verbal") {
      let coreUnderlyingRealization = "";
      coreUnderlyingRealization += patternAffixes.prefixal.join("");
      coreUnderlyingRealization += (pattern.type === "doubleInitial") ? radicals[0] + radicals[0] : radicals[0];
      coreUnderlyingRealization += "а";
      coreUnderlyingRealization += (pattern.type === "doubleMedial") ? radicals[1] + radicals[1] : radicals[1];
      coreUnderlyingRealization += patternAffixes.infixal.join("");
      coreUnderlyingRealization += theme + "\u0302";
      coreUnderlyingRealization += (pattern.type === "doubleFinal") ? radicals[2] + radicals[2] : radicals[2];
      coreUnderlyingRealization += patternAffixes.suffixal.join("");
      return coreUnderlyingRealization;
    } else {
      let coreUnderlyingRealization = "";
      coreUnderlyingRealization += patternAffixes.prefixal.join("");
      coreUnderlyingRealization += (pattern.type === "doubleInitial") ? radicals[0] + radicals[0] : radicals[0];
      coreUnderlyingRealization += patternAffixes.infixal.join("");
      coreUnderlyingRealization += theme + "\u0302";
      coreUnderlyingRealization += (pattern.type === "doubleMedial") ? radicals[1] + radicals[1] : radicals[1];
      coreUnderlyingRealization += "а";
      coreUnderlyingRealization += (pattern.type === "doubleFinal") ? radicals[2] + radicals[2] : radicals[2];
      coreUnderlyingRealization += patternAffixes.suffixal.join("");
      return coreUnderlyingRealization;
    }
  } else {
    if (pattern.sort === "verbal") {
      let coreUnderlyingRealization = "";
      coreUnderlyingRealization += patternAffixes.prefixal.join("");
      coreUnderlyingRealization += radicals[0];
      coreUnderlyingRealization += "а";
      coreUnderlyingRealization += radicals[1];
      coreUnderlyingRealization += "а";
      coreUnderlyingRealization += radicals[2];
      coreUnderlyingRealization += patternAffixes.infixal.join("");
      coreUnderlyingRealization += theme + "\u0302";
      coreUnderlyingRealization += radicals[3];
      coreUnderlyingRealization += patternAffixes.suffixal.join("");
      return coreUnderlyingRealization;
    } else {
      let coreUnderlyingRealization = "";
      coreUnderlyingRealization += patternAffixes.prefixal.join("");
      coreUnderlyingRealization += radicals[0];
      coreUnderlyingRealization += patternAffixes.infixal.join("");
      coreUnderlyingRealization += theme + "\u0302";
      coreUnderlyingRealization += radicals[1];
      coreUnderlyingRealization += "а";
      coreUnderlyingRealization += radicals[2];
      coreUnderlyingRealization += "а";
      coreUnderlyingRealization += radicals[3];
      coreUnderlyingRealization += patternAffixes.suffixal.join("");
      return coreUnderlyingRealization;
    }
  }
}