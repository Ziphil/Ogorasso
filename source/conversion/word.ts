//

import {AffixWord, NormalWord, PatternWord, RootWord, ThemeWord, Word} from "../type/word";
import {checkAffix, checkPattern, checkRoot, checkTheme, extractAffix, extractPattern, extractRoot, extractTheme, parseAnatomy} from "./anatomy";


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
  const rawEquivalents = rawWord["equivalents"] as Array<any>;
  const rawRelations = rawWord["relations"] as Array<any>;
  const word = {
    kind: "normal",
    number: +rawWord["number"],
    form: rawWord["name"],
    equivalents: rawEquivalents,
    anatomy: parseAnatomy(rawWord["name"], rawRelations)
  } satisfies NormalWord;
  return word;
}

export function convertRootWord(rawWord: any): RootWord {
  const rawForm = rawWord["name"] as string;
  const rawEquivalents = rawWord["equivalents"] as Array<any>;
  const root = extractRoot(rawForm);
  if (root !== null) {
    const word = {
      kind: "root",
      number: +rawWord["number"],
      root,
      equivalents: rawEquivalents
    } satisfies RootWord;
    return word;
  } else {
    throw new Error("invalid root word");
  }
}

export function convertPatternWord(rawWord: any): PatternWord {
  const rawForm = rawWord["name"] as string;
  const rawEquivalents = rawWord["equivalents"] as Array<any>;
  const pattern = extractPattern(rawForm);
  if (pattern !== null) {
    const word = {
      kind: "pattern",
      number: +rawWord["number"],
      pattern,
      equivalents: rawEquivalents
    } satisfies PatternWord;
    return word;
  } else {
    throw new Error("invalid pattern word");
  }
}

export function convertAffixWord(rawWord: any): AffixWord {
  const rawForm = rawWord["name"] as string;
  const rawEquivalents = rawWord["equivalents"] as Array<any>;
  const affix = extractAffix(rawForm);
  if (affix !== null) {
    const word = {
      kind: "affix",
      number: +rawWord["number"],
      affix,
      equivalents: rawEquivalents
    } satisfies AffixWord;
    return word;
  } else {
    throw new Error("invalid affix word");
  }
}

export function convertThemeWord(rawWord: any): ThemeWord {
  const rawForm = rawWord["name"] as string;
  const theme = extractTheme(rawForm);
  if (theme !== null) {
    const word = {
      kind: "theme",
      number: +rawWord["number"],
      form: rawForm
    } satisfies ThemeWord;
    return word;
  } else {
    throw new Error("invalid theme word");
  }
}