//

import {AffixSpelling, AffixType, PATTERN_DATA, PatternSort, PatternSpelling, PatternType} from "./type";


export function getPatternSort(spelling: PatternSpelling): PatternSort | null {
  const sort = PATTERN_DATA.get(spelling)?.sort ?? null;
  return sort;
}

export function getPatternType(spelling: PatternSpelling): PatternType | null {
  const type = PATTERN_DATA.get(spelling)?.type ?? null;
  return type;
}

export function getAffixType(spelling: AffixSpelling): AffixType | null {
  if (spelling.match(/^([^-]+?)-$/)) {
    return "prefixal";
  } else if (spelling.match(/^-(е|о)([^-]+?)-$/)) {
    return "infixal";
  } else if (spelling.match(/^-(а)([^-]+?)-$/)) {
    return "suffixal";
  } else if (spelling.match(/^-([^-]+?)$/)) {
    return "terminal";
  } else {
    return null;
  }
}