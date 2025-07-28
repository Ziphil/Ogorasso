//

import {Affix, AffixType, Anatomy, PATTERN_DATA, Pattern, Root, Theme} from "../type/anatomy";
import {getAffixType} from "../util/anatomy";


export function parseAnatomy(rawForm: string, rawRelations: Array<any>): Anatomy | null {
  const root = parseRoot(rawRelations);
  const pattern = parsePattern(rawRelations);
  const theme = parseTheme(rawRelations) ?? inferTheme(rawForm);
  const affixes = parseAffixes(rawRelations);
  if (root !== null && pattern !== null && theme !== null) {
    return {root, pattern, theme, affixes};
  } else {
    return null;
  }
}

export function parseRoot(rawRelations: Array<any>): Root | null {
  const rawRootRelation = rawRelations.find((rawRelation) => rawRelation["titles"][0] === "語根" && checkRoot(rawRelation["name"]));
  if (rawRootRelation !== undefined) {
    return extractRoot(rawRootRelation["name"]);
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

export function parsePattern(rawRelations: Array<any>): Pattern | null {
  const rawPatternRelation = rawRelations.find((rawRelation) => checkPattern(rawRelation["name"]));
  if (rawPatternRelation !== undefined) {
    return extractPattern(rawPatternRelation["name"]);
  } else {
    return null;
  }
}

export function checkPattern(rawForm: string): boolean {
  const match = rawForm.match(/^‹(?!=)(.*)›$/);
  return match !== null && !match[1].includes("-");
}

export function extractPattern(rawForm: string): Pattern | null {
  const match = rawForm.match(/^‹(.*)›$/);
  if (match !== null && PATTERN_DATA.has(match[1] as any)) {
    return match[1] as Pattern;
  } else {
    return null;
  }
}

export function parseAffixes(rawRelations: Array<any>): Record<AffixType, ReadonlyArray<Affix>> {
  const rawAffixRelations = rawRelations.filter((rawRelation) => checkAffix(rawRelation["name"]));
  const affixes = {
    prestem: [] as Array<Affix>,
    prethematic: [] as Array<Affix>,
    postthematic: [] as Array<Affix>,
    poststem: [] as Array<Affix>
  };
  for (const rawAffixRelation of rawAffixRelations) {
    const affix = extractAffix(rawAffixRelation["name"]);
    const affixType = (affix !== null) ? getAffixType(affix) : null ;
    if (affix !== null && affixType !== null) {
      affixes[affixType].push(affix);
    }
  }
  return affixes;
}

export function checkAffix(rawForm: string): boolean {
  const match = rawForm.match(/^‹(?!=)(.*)›$/);
  return match !== null && match[1].includes("-");
}

export function extractAffix(rawForm: string): Affix | null {
  const match = rawForm.match(/^‹(?!=)(.*)›$/);
  if (match !== null) {
    return match[1];
  } else {
    return null;
  }
}

export function parseTheme(rawRelations: Array<any>): Theme | null {
  const rawThemeRelation = rawRelations.find((rawRelation) => checkTheme(rawRelation["name"]));
  if (rawThemeRelation !== undefined) {
    return extractTheme(rawThemeRelation["name"]);
  } else {
    return null;
  }
}

/** 辞書の見出し語から幹母音を推定します。
 * 弱子音の消失が起こっている場合は正しい幹母音を推定できない場合があるので注意してください。 */
export function inferTheme(rawForm: string): Theme | null {
  if (rawForm.includes("е̂") || rawForm.includes("и̂")) {
    return "е";
  } else if (rawForm.includes("о̂") || rawForm.includes("у̂")) {
    return "о";
  } else {
    return null;
  }
}

export function checkTheme(rawForm: string): boolean {
  return rawForm.match(/^‹=(.)›$/) !== null;
}

export function extractTheme(rawForm: string): Theme | null {
  const match = rawForm.match(/^‹=(.)›$/);
  if (match !== null && (match[1] === "е" || match[1] === "о")) {
    return match[1];
  } else {
    return null;
  }
}
