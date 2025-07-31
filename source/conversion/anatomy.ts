//

import {getAffixType} from "../function/anatomy";
import {AffixForm, AffixRelation, AffixType, Anatomy, PATTERN_DATA, PatternForm, PatternRelation, Root, RootRelation, ThemeForm, ThemeRelation} from "../type/anatomy";


export function parseAnatomy(rawForm: string, rawRelations: Array<any>): Anatomy | null {
  const root = parseRootRelation(rawRelations);
  const pattern = parsePatternRelation(rawRelations);
  const theme = parseThemeRelation(rawRelations) ?? inferThemeRelation(rawForm);
  const affixes = parseAffixeRelations(rawRelations);
  if (root !== null && pattern !== null && theme !== null) {
    return {root, pattern, theme, affixes};
  } else {
    return null;
  }
}

export function parseRootRelation(rawRelations: Array<any>): RootRelation | null {
  const rawRootRelation = rawRelations.find((rawRelation) => rawRelation["titles"][0] === "語根" && checkRoot(rawRelation["name"]));
  if (rawRootRelation !== undefined) {
    const number = +rawRootRelation["number"];
    const root = extractRoot(rawRootRelation["name"]);
    if (root !== null) {
      return {kind: "root", number, root};
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export function checkRoot(rawForm: string): boolean {
  return rawForm.match(/^√(.)-(.)-(.)(?:-(.))?$/) !== null;
}

export function extractRoot(rawForm: string): Root | null {
  const match = rawForm.match(/^√(.)-(.)-(.)(?:-(.))?$/);
  if (match !== null) {
    if (match[4] !== undefined) {
      return [match[1].toLowerCase(), match[2].toLowerCase(), match[3].toLowerCase(), match[4].toLowerCase()] as Root;
    } else {
      return [match[1].toLowerCase(), match[2].toLowerCase(), match[3].toLowerCase()] as Root;
    }
  } else {
    return null;
  }
}

export function parsePatternRelation(rawRelations: Array<any>): PatternRelation | null {
  const rawPatternRelation = rawRelations.find((rawRelation) => checkPatternForm(rawRelation["name"]));
  if (rawPatternRelation !== undefined) {
    const number = +rawPatternRelation["number"];
    const form = extractPatternForm(rawPatternRelation["name"]);
    if (form !== null) {
      return {kind: "pattern", number, form};
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export function checkPatternForm(rawForm: string): boolean {
  const match = rawForm.match(/^‹(?!=)(.*)›$/);
  return match !== null && !match[1].includes("-");
}

export function extractPatternForm(rawForm: string): PatternForm | null {
  const match = rawForm.match(/^‹(.*)›$/);
  if (match !== null && PATTERN_DATA.has(match[1] as any)) {
    return match[1] as PatternForm;
  } else {
    return null;
  }
}

export function parseAffixeRelations(rawRelations: Array<any>): Record<AffixType, ReadonlyArray<AffixRelation>> {
  const rawAffixRelations = rawRelations.filter((rawRelation) => checkAffixForm(rawRelation["name"]));
  const affixes = {
    prestem: [] as Array<AffixRelation>,
    prethematic: [] as Array<AffixRelation>,
    postthematic: [] as Array<AffixRelation>,
    poststem: [] as Array<AffixRelation>
  };
  for (const rawAffixRelation of rawAffixRelations) {
    const number = +rawAffixRelation["number"];
    const form = extractAffixForm(rawAffixRelation["name"]);
    const affixType = (form !== null) ? getAffixType(form) : null ;
    if (form !== null && affixType !== null) {
      affixes[affixType].push({kind: "affix", number, form});
    }
  }
  return affixes;
}

export function checkAffixForm(rawForm: string): boolean {
  const match = rawForm.match(/^‹(?!=)(.*)›$/);
  return match !== null && match[1].includes("-");
}

export function extractAffixForm(rawForm: string): AffixForm | null {
  const match = rawForm.match(/^‹(?!=)(.*)›$/);
  if (match !== null) {
    return match[1];
  } else {
    return null;
  }
}

export function parseThemeRelation(rawRelations: Array<any>): ThemeRelation | null {
  const rawThemeRelation = rawRelations.find((rawRelation) => checkThemeForm(rawRelation["name"]));
  if (rawThemeRelation !== undefined) {
    const number = +rawThemeRelation["number"];
    const form = extractThemeForm(rawThemeRelation["name"]);
    if (form !== null) {
      return {kind: "theme", number, form};
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export function inferThemeRelation(rawForm: string): ThemeRelation | null {
  const form = inferThemeForm(rawForm);
  if (form !== null) {
    return {kind: "theme", number: -1, form};
  } else {
    return null;
  }
}

/** 辞書の見出し語から幹母音を推定します。
 * 弱子音の消失が起こっている場合は正しい幹母音を推定できない場合があるので注意してください。 */
export function inferThemeForm(rawForm: string): ThemeForm | null {
  if (rawForm.includes("е̂") || rawForm.includes("и̂")) {
    return "е";
  } else if (rawForm.includes("о̂") || rawForm.includes("у̂")) {
    return "о";
  } else {
    return null;
  }
}

export function checkThemeForm(rawForm: string): boolean {
  return rawForm.match(/^‹=(.)›$/) !== null;
}

export function extractThemeForm(rawForm: string): ThemeForm | null {
  const match = rawForm.match(/^‹=(.)›$/);
  if (match !== null && (match[1] === "е" || match[1] === "о")) {
    return match[1];
  } else {
    return null;
  }
}
