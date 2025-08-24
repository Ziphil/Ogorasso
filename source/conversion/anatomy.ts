//

import {getAffixType} from "../function/anatomy";
import {AffixSpelling, AffixType, Anatomy, PATTERN_DATA, PatternSpelling, Root, ThemeSpelling} from "../type/anatomy";
import {AffixRelation, ConstituentRelation, PatternRelation, RootRelation, ThemeRelation} from "../type/relation";


export function parseAnatomy(rawSpelling: string, rawRelations: Array<any>): Anatomy | null {
  if (rawRelations.some((rawRelation) => rawRelation["titles"][0] === "合成元")) {
    const constituents = parseComponentRelations(rawRelations);
    return {kind: "compound", constituents};
  } else {
    const root = parseRootRelation(rawRelations);
    const pattern = parsePatternRelation(rawRelations);
    const theme = parseThemeRelation(rawRelations) ?? inferThemeRelation(rawSpelling);
    const affixes = parseAffixRelations(rawRelations);
    if (root !== null && pattern !== null && theme !== null) {
      return {kind: "simplex", root, pattern, theme, affixes};
    } else {
      return null;
    }
  }
}

export function parseComponentRelations(rawRelations: Array<any>): ReadonlyArray<ConstituentRelation> {
  const rawComponentRelations = rawRelations.filter((rawRelation) => rawRelation["titles"][0] === "合成元");
  const componentRelations = rawComponentRelations.map((rawRelation) => ({
    kind: "constituent",
    number: +rawRelation["number"],
    spelling: rawRelation["spelling"]
  }) satisfies ConstituentRelation);
  return componentRelations;
}

export function parseRootRelation(rawRelations: Array<any>): RootRelation | null {
  const rawRootRelation = rawRelations.find((rawRelation) => rawRelation["titles"][0] === "語根" && checkRoot(rawRelation["spelling"]));
  if (rawRootRelation !== undefined) {
    const number = +rawRootRelation["number"];
    const root = extractRoot(rawRootRelation["spelling"]);
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
  return rawForm.match(/^√(.)-(.)(?:-(.))?(?:-(.))?$/) !== null;
}

export function extractRoot(rawForm: string): Root | null {
  const match = rawForm.match(/^√(.)-(.)(?:-(.))?(?:-(.))?$/);
  if (match !== null) {
    if (match[3] !== undefined) {
      if (match[4] !== undefined) {
        return [match[1].toLowerCase(), match[2].toLowerCase(), match[3].toLowerCase(), match[4].toLowerCase()] as Root;
      } else {
        return [match[1].toLowerCase(), match[2].toLowerCase(), match[3].toLowerCase()] as Root;
      }
    } else {
      return [match[1].toLowerCase(), match[2].toLowerCase()] as Root;
    }
  } else {
    return null;
  }
}

export function parsePatternRelation(rawRelations: Array<any>): PatternRelation | null {
  const rawPatternRelation = rawRelations.find((rawRelation) => checkPatternHead(rawRelation["spelling"]));
  if (rawPatternRelation !== undefined) {
    const number = +rawPatternRelation["number"];
    const spelling = extractPatternSpelling(rawPatternRelation["spelling"]);
    if (spelling !== null) {
      return {kind: "pattern", number, spelling};
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export function checkPatternHead(rawHead: string): boolean {
  const match = rawHead.match(/^‹(?!=)(.*)›$/);
  return match !== null && !match[1].includes("-");
}

export function extractPatternSpelling(rawHead: string): PatternSpelling | null {
  const match = rawHead.match(/^‹(.*)›$/);
  if (match !== null && PATTERN_DATA.has(match[1] as any)) {
    return match[1] as PatternSpelling;
  } else {
    return null;
  }
}

export function parseAffixRelations(rawRelations: Array<any>): Record<AffixType, ReadonlyArray<AffixRelation>> {
  const rawAffixRelations = rawRelations.filter((rawRelation) => checkAffixHead(rawRelation["spelling"]));
  const affixes = {
    prefixal: [] as Array<AffixRelation>,
    prethematic: [] as Array<AffixRelation>,
    postthematic: [] as Array<AffixRelation>,
    suffixal: [] as Array<AffixRelation>
  };
  for (const rawAffixRelation of rawAffixRelations) {
    const number = +rawAffixRelation["number"];
    const spelling = extractAffixSpelling(rawAffixRelation["spelling"]);
    const affixType = (spelling !== null) ? getAffixType(spelling) : null ;
    if (spelling !== null && affixType !== null) {
      affixes[affixType].push({kind: "affix", number, spelling});
    }
  }
  return affixes;
}

export function checkAffixHead(rawHead: string): boolean {
  const match = rawHead.match(/^‹(?!=)(.*)›$/);
  return match !== null && match[1].includes("-");
}

export function extractAffixSpelling(rawHead: string): AffixSpelling | null {
  const match = rawHead.match(/^‹(?!=)(.*)›$/);
  if (match !== null) {
    return match[1];
  } else {
    return null;
  }
}

export function parseThemeRelation(rawRelations: Array<any>): ThemeRelation | null {
  const rawThemeRelation = rawRelations.find((rawRelation) => checkThemeHead(rawRelation["spelling"]));
  if (rawThemeRelation !== undefined) {
    const number = +rawThemeRelation["number"];
    const spelling = extractThemeSpelling(rawThemeRelation["spelling"]);
    if (spelling !== null) {
      return {kind: "theme", number, spelling};
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export function inferThemeRelation(rawSpelling: string): ThemeRelation | null {
  const form = inferThemeSpelling(rawSpelling);
  if (form !== null) {
    return {kind: "theme", number: -1, spelling: form};
  } else {
    return null;
  }
}

/** 辞書の見出し語から幹母音を推定します。
 * 弱子音の消失が起こっている場合は正しい幹母音を推定できない場合があるので注意してください。 */
export function inferThemeSpelling(rawSpelling: string): ThemeSpelling | null {
  if (rawSpelling.includes("е̂") || rawSpelling.includes("и̂")) {
    return "е";
  } else if (rawSpelling.includes("о̂") || rawSpelling.includes("у̂")) {
    return "о";
  } else {
    return null;
  }
}

export function checkThemeHead(rawHead: string): boolean {
  return rawHead.match(/^‹=(.)›$/) !== null;
}

export function extractThemeSpelling(rawHead: string): ThemeSpelling | null {
  const match = rawHead.match(/^‹=(.)›$/);
  if (match !== null && (match[1] === "е" || match[1] === "о")) {
    return match[1];
  } else {
    return null;
  }
}
