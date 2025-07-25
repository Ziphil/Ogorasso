//

import {AffixWord, NormalWord, PatternWord, RootWord, ThemeWord, Word} from "../type/word";
import {checkAffix, checkPattern, checkRoot, checkTheme, extractAffix, extractPattern, extractRoot, extractTheme, parseAnatomy} from "./anatomy";
import {convertEquivalent, convertInformation, convertPhrase, convertRelation} from "./word-content";


export function convertWord(rawWord: any): Word {
  const rawForm = rawWord["name"] as string;
  if (checkRoot(rawForm)) {
    return convertRootWord(rawWord);
  } else if (checkTheme(rawForm)) {
    return convertThemeWord(rawWord);
  } else if (checkAffix(rawForm)) {
    return convertAffixWord(rawWord);
  } else if (checkPattern(rawForm)) {
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
    form: rawWord["name"],
    anatomy: parseAnatomy(rawWord["name"], rawRelations),
    equivalents: rawWord["equivalents"].map(convertEquivalent),
    information: rawWord["information"].map(convertInformation),
    phrases: rawWord["phrases"].map(convertPhrase),
    relations: rawRelations.filter((rawRelation) => !rawRelation["name"].includes("√") && !rawRelation["name"].includes("‹")).map(convertRelation)
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
      equivalents: rawWord["equivalents"].map(convertEquivalent)
    } satisfies RootWord;
    return word;
  } else {
    throw new Error("invalid root word");
  }
}

export function convertPatternWord(rawWord: any): PatternWord {
  const pattern = extractPattern(rawWord["name"]);
  if (pattern !== null) {
    const word = {
      kind: "pattern",
      number: +rawWord["number"],
      pattern,
      equivalents: rawWord["equivalents"].map(convertEquivalent)
    } satisfies PatternWord;
    return word;
  } else {
    throw new Error("invalid pattern word");
  }
}

export function convertAffixWord(rawWord: any): AffixWord {
  const affix = extractAffix(rawWord["name"]);
  if (affix !== null) {
    const word = {
      kind: "affix",
      number: +rawWord["number"],
      affix,
      equivalents: rawWord["equivalents"].map(convertEquivalent)
    } satisfies AffixWord;
    return word;
  } else {
    throw new Error("invalid affix word");
  }
}

export function convertThemeWord(rawWord: any): ThemeWord {
  const theme = extractTheme(rawWord["name"]);
  if (theme !== null) {
    const word = {
      kind: "theme",
      number: +rawWord["number"],
      theme
    } satisfies ThemeWord;
    return word;
  } else {
    throw new Error("invalid theme word");
  }
}