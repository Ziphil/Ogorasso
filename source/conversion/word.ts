//

import {AffixWord, NormalWord, PatternWord, RootWord, ThemeWord, Word} from "../type/word";
import {checkAffixHead, checkPatternHead, checkRoot, checkThemeHead, extractAffixSpelling, extractPatternSpelling, extractRoot, extractThemeSpelling, parseAnatomy} from "./anatomy";
import {convertEquivalent, convertInformation, convertPhrase, convertRelation} from "./word-content";


export function convertWord(rawWord: any): Word {
  const rawHead = rawWord["name"] as string;
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
  const rawRelations = rawWord["relations"] as Array<any>;
  const word = {
    kind: "normal",
    number: +rawWord["number"],
    spelling: rawWord["name"],
    anatomy: parseAnatomy(rawWord["name"], rawRelations),
    equivalents: rawWord["equivalents"].map(convertEquivalent),
    information: rawWord["informations"].map(convertInformation),
    phrases: rawWord["phrases"].map(convertPhrase),
    relations: rawRelations.filter((rawRelation) => !rawRelation["name"].includes("√") && !rawRelation["name"].includes("‹")).map(convertRelation),
    foreign: rawWord["tags"].includes("外来語")
  } satisfies NormalWord;
  return word;
}

export function convertRootWord(rawWord: any): RootWord {
  const root = extractRoot(rawWord["name"]);
  if (root !== null) {
    const word = {
      kind: "root",
      number: +rawWord["number"],
      root,
      equivalents: rawWord["equivalents"].map(convertEquivalent),
      foreign: rawWord["tags"].includes("外来語")
    } satisfies RootWord;
    return word;
  } else {
    throw new Error("invalid root word");
  }
}

export function convertPatternWord(rawWord: any): PatternWord {
  const spelling = extractPatternSpelling(rawWord["name"]);
  if (spelling !== null) {
    const word = {
      kind: "pattern",
      number: +rawWord["number"],
      spelling,
      equivalents: rawWord["equivalents"].map(convertEquivalent)
    } satisfies PatternWord;
    return word;
  } else {
    throw new Error("invalid pattern word");
  }
}

export function convertAffixWord(rawWord: any): AffixWord {
  const spelling = extractAffixSpelling(rawWord["name"]);
  if (spelling !== null) {
    const word = {
      kind: "affix",
      number: +rawWord["number"],
      spelling,
      equivalents: rawWord["equivalents"].map(convertEquivalent)
    } satisfies AffixWord;
    return word;
  } else {
    throw new Error("invalid affix word");
  }
}

export function convertThemeWord(rawWord: any): ThemeWord {
  const spelling = extractThemeSpelling(rawWord["name"]);
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