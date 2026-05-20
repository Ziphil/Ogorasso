//

import {transformEuphony, transformLightSyllables, transformMerger, transformWeakConsonants} from "../surface";
import {AffixType, Inflection, Pattern, Root, Theme} from "../type";
import {getInflectionAffixes} from "./inflection";


export type PatternAffixes = Record<AffixType, ReadonlyArray<string>>;

export function getRealization(root: Root, pattern: Pattern, theme: Theme, patternAffixes: PatternAffixes, inflection: Inflection): string {
  const coreUnderlyingRealization = transformLightSyllables(getCoreUnderlyingRealization(root, pattern, theme, patternAffixes));
  const underlyingRealization = getUnderlyingRealization(coreUnderlyingRealization, pattern, patternAffixes, inflection);
  const surfaceRealization = transformMerger(transformWeakConsonants(transformEuphony(transformLightSyllables(underlyingRealization))));
  return surfaceRealization;
}

export function getUnderlyingRealization(coreUnderlyingRealization: string, pattern: Pattern, patternAffixes: PatternAffixes, inflection: Inflection): string {
  const inflectionAffixes = getInflectionAffixes(inflection);
  let underlyingRealization = "";
  underlyingRealization += inflectionAffixes.prefixal.map((affix) => affix.replace(/-/g, "")).join("");
  underlyingRealization += (pattern.type === "doubleInitial" && patternAffixes.prefixal.length <= 0 && inflectionAffixes.prefixal.length <= 0) ? "а" : "";
  underlyingRealization += coreUnderlyingRealization;
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

export function getCoreUnderlyingRealization(root: Root, pattern: Pattern, theme: Theme, patternAffixes: PatternAffixes): string {
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