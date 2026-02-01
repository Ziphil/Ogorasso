//

import {
  AffixSpelling,
  AffixType,
  Anatomy,
  CompoundAnatomy,
  PATTERN_DATA,
  PatternSpelling,
  Radicals,
  SimpleAffix,
  SimplePattern,
  SimpleRoot,
  SimpleTheme,
  SimpleWord,
  SimplexAnatomy,
  ThemeSpelling,
  getAffixType
} from "../type";


export function parseAnatomy(rawSpelling: string, rawRelations: Array<any>): Anatomy | null {
  if (rawRelations.some((rawRelation) => rawRelation["titles"][0] === "合成元")) {
    const constituents = parseConstituents(rawRelations);
    return new CompoundAnatomy({constituents});
  } else {
    const root = parseSimpleRoot(rawRelations);
    const pattern = parseSimplePattern(rawRelations);
    const theme = parseSimpleTheme(rawRelations) ?? inferSimpleTheme(rawSpelling);
    const affixes = parseAffixRelations(rawRelations);
    if (root !== null && pattern !== null && theme !== null) {
      return new SimplexAnatomy({root, pattern, theme, affixes});
    } else {
      return null;
    }
  }
}

export function parseConstituents(rawRelations: Array<any>): ReadonlyArray<SimpleWord> {
  const rawConstituents = rawRelations.filter((rawRelation) => rawRelation["titles"][0] === "合成元");
  const constituents = rawConstituents.map((rawRelation) => new SimpleWord({
    number: +rawRelation["number"],
    spelling: rawRelation["spelling"]
  }));
  return constituents;
}

export function checkAnatomySection(rawSection: any): boolean {
  const rawEquivalents = rawSection["equivalents"] as Array<any>;
  return rawEquivalents.length <= 0;
}

export function parseSimpleRoot(rawRelations: Array<any>): SimpleRoot | null {
  const rawRootRelations = rawRelations.find((rawRelation) => rawRelation["titles"][0] === "語根" && checkRootSpelling(rawRelation["spelling"]));
  if (rawRootRelations !== undefined) {
    const number = +rawRootRelations["number"];
    const radicals = extractRadicals(rawRootRelations["spelling"]);
    if (radicals !== null) {
      return new SimpleRoot({number, radicals});
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export function checkRootSpelling(rawSpelling: string): boolean {
  return rawSpelling.match(/^√(.)-(.)(?:-(.))?(?:-(.))?$/) !== null;
}

export function extractRadicals(rawSpelling: string): Radicals | null {
  const match = rawSpelling.match(/^√(.)-(.)(?:-(.))?(?:-(.))?$/);
  if (match !== null) {
    if (match[3] !== undefined) {
      if (match[4] !== undefined) {
        return [match[1].toLowerCase(), match[2].toLowerCase(), match[3].toLowerCase(), match[4].toLowerCase()] as Radicals;
      } else {
        return [match[1].toLowerCase(), match[2].toLowerCase(), match[3].toLowerCase()] as Radicals;
      }
    } else {
      return [match[1].toLowerCase(), match[2].toLowerCase()] as Radicals;
    }
  } else {
    return null;
  }
}

export function parseSimplePattern(rawRelations: Array<any>): SimplePattern | null {
  const rawPatternRelations = rawRelations.find((rawRelation) => checkPatternSpelling(rawRelation["spelling"]));
  if (rawPatternRelations !== undefined) {
    const number = +rawPatternRelations["number"];
    const spelling = extractPatternSpelling(rawPatternRelations["spelling"]);
    if (spelling !== null) {
      return new SimplePattern({number, spelling});
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export function checkPatternSpelling(rawSpelling: string): boolean {
  const match = rawSpelling.match(/^‹(?!=)(.*)›$/);
  return match !== null && !match[1].includes("-");
}

export function extractPatternSpelling(rawSpelling: string): PatternSpelling | null {
  const match = rawSpelling.match(/^‹(.*)›$/);
  if (match !== null && PATTERN_DATA.has(match[1] as any)) {
    return match[1] as PatternSpelling;
  } else {
    return null;
  }
}

export function parseAffixRelations(rawRelations: Array<any>): Record<AffixType, ReadonlyArray<SimpleAffix>> {
  const rawAffixRelations = rawRelations.filter((rawRelation) => checkAffixSpelling(rawRelation["spelling"]));
  const affixes = {
    prefixal: [] as Array<SimpleAffix>,
    infixal: [] as Array<SimpleAffix>,
    suffixal: [] as Array<SimpleAffix>,
    terminal: [] as Array<SimpleAffix>
  };
  for (const rawAffixRelation of rawAffixRelations) {
    const number = +rawAffixRelation["number"];
    const spelling = extractAffixSpelling(rawAffixRelation["spelling"]);
    const affixType = (spelling !== null) ? getAffixType(spelling) : null ;
    if (spelling !== null && affixType !== null) {
      affixes[affixType].push(new SimpleAffix({number, spelling}));
    }
  }
  return affixes;
}

export function checkAffixSpelling(rawSpelling: string): boolean {
  const match = rawSpelling.match(/^‹(?!=)(.*)›$/);
  return match !== null && match[1].includes("-");
}

export function extractAffixSpelling(rawSpelling: string): AffixSpelling | null {
  const match = rawSpelling.match(/^‹(?!=)(.*)›$/);
  if (match !== null) {
    return match[1];
  } else {
    return null;
  }
}

export function parseSimpleTheme(rawRelations: Array<any>): SimpleTheme | null {
  const rawThemeRelation = rawRelations.find((rawRelation) => checkThemeSpelling(rawRelation["spelling"]));
  if (rawThemeRelation !== undefined) {
    const number = +rawThemeRelation["number"];
    const spelling = extractThemeSpelling(rawThemeRelation["spelling"]);
    if (spelling !== null) {
      return new SimpleTheme({number, spelling});
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export function inferSimpleTheme(rawSpelling: string): SimpleTheme | null {
  const spelling = inferThemeSpelling(rawSpelling);
  if (spelling !== null) {
    return new SimpleTheme({number: -1, spelling});
  } else {
    return null;
  }
}

/** 辞書の見出し語から幹母音を推定します。
 * 弱子音の消失が起こっている場合は正しい幹母音を推定できない場合があるので注意してください。 */
export function inferThemeSpelling(rawSpelling: string): ThemeSpelling | null {
  if (rawSpelling.includes("е̂") || rawSpelling.includes("и̂")) {
    return "и";
  } else if (rawSpelling.includes("о̂") || rawSpelling.includes("у̂")) {
    return "у";
  } else {
    return null;
  }
}

export function checkThemeSpelling(rawSpelling: string): boolean {
  return rawSpelling.match(/^‹=(.)›$/) !== null;
}

export function extractThemeSpelling(rawSpelling: string): ThemeSpelling | null {
  const match = rawSpelling.match(/^‹=(.)›$/);
  if (match !== null && (match[1] === "и" || match[1] === "у")) {
    return match[1];
  } else {
    return null;
  }
}

export function extractOldSpellings(rawSection: any): Array<string> {
  const rawVariants = rawSection["variants"] as Array<any>;
  const rawOldSpellingVariants = rawVariants.filter((rawVariant) => rawVariant["title"] === "旧綴り");
  return rawOldSpellingVariants.map((rawVariant) => rawVariant["spelling"]);
}

export function extractSeparatedSpellings(rawSection: any): Array<string> {
  const rawVariants = rawSection["variants"] as Array<any>;
  const rawSeparatedSpellingVariants = rawVariants.filter((rawVariant) => rawVariant["title"] === "分離形");
  return rawSeparatedSpellingVariants.map((rawVariant) => rawVariant["spelling"]);
}