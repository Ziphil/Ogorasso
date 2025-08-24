//

import {AffixWord, NormalWord, PatternWord, RootWord, ThemeWord, Word} from "../type/word";
import {checkAffixHead, checkPatternHead, checkRoot, checkThemeHead, extractAffixSpelling, extractPatternSpelling, extractRoot, extractThemeSpelling, parseAnatomy} from "./anatomy";
import {convertEquivalent, convertSection} from "./word-content";


export function convertWord(rawWord: any): Word {
  const rawHead = rawWord["spelling"] as string;
  if (checkRoot(rawHead)) {
    return convertRootWord(rawWord);
  } else if (checkThemeHead(rawHead)) {
    return convertThemeWord(rawWord);
  } else if (checkAffixHead(rawHead)) {
    return convertAffixWord(rawWord);
  } else if (checkPatternHead(rawHead)) {
    return convertPatternWord(rawWord);
  } else {
    return convertNormalWord(rawWord);
  }
}

export function convertNormalWord(rawWord: any): NormalWord {
  const rawSections = rawWord["sections"] as Array<any>;
  const rawAnatomyRelations = rawSections[rawSections.length - 1]["relations"] as Array<any>;
  const word = {
    kind: "normal",
    number: +rawWord["number"],
    spelling: rawWord["spelling"],
    anatomy: parseAnatomy(rawWord["spelling"], rawAnatomyRelations),
    sections: rawWord["sections"].map(convertSection),
    foreign: rawWord["tags"].includes("外来語")
  } satisfies NormalWord;
  return word;
}

export function convertRootWord(rawWord: any): RootWord {
  const root = extractRoot(rawWord["spelling"]);
  if (root !== null) {
    const rawSections = rawWord["sections"] as Array<any>;
    const word = {
      kind: "root",
      number: +rawWord["number"],
      root,
      equivalents: (rawSections[0] !== undefined) ? rawSections[0]["equivalents"].map(convertEquivalent) : [],
      foreign: rawWord["tags"].includes("外来語")
    } satisfies RootWord;
    return word;
  } else {
    throw new Error("invalid root word");
  }
}

export function convertPatternWord(rawWord: any): PatternWord {
  const spelling = extractPatternSpelling(rawWord["spelling"]);
  if (spelling !== null) {
    const rawSections = rawWord["sections"] as Array<any>;
    const word = {
      kind: "pattern",
      number: +rawWord["number"],
      spelling,
      equivalents: (rawSections[0] !== undefined) ? rawSections[0]["equivalents"].map(convertEquivalent) : []
    } satisfies PatternWord;
    return word;
  } else {
    throw new Error("invalid pattern word");
  }
}

export function convertAffixWord(rawWord: any): AffixWord {
  const spelling = extractAffixSpelling(rawWord["spelling"]);
  if (spelling !== null) {
    const rawSections = rawWord["sections"] as Array<any>;
    const word = {
      kind: "affix",
      number: +rawWord["number"],
      spelling,
      equivalents: (rawSections[0] !== undefined) ? rawSections[0]["equivalents"].map(convertEquivalent) : []
    } satisfies AffixWord;
    return word;
  } else {
    throw new Error("invalid affix word");
  }
}

export function convertThemeWord(rawWord: any): ThemeWord {
  const spelling = extractThemeSpelling(rawWord["spelling"]);
  if (spelling !== null) {
    const word = {
      kind: "theme",
      number: +rawWord["number"],
      spelling
    } satisfies ThemeWord;
    return word;
  } else {
    throw new Error("invalid theme word");
  }
}