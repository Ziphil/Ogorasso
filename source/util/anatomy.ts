//

import {Affix, AffixType, PATTERN_DATA, Pattern, PatternCategory, PatternType} from "../type/anatomy";


export function getPatternCategory(pattern: Pattern): PatternCategory | null {
  const category = PATTERN_DATA.get(pattern)?.category ?? null;
  return category;
}

export function getPatternType(pattern: Pattern): PatternType | null {
  const type = PATTERN_DATA.get(pattern)?.type ?? null;
  return type;
}

export function getAffixType(affix: Affix): AffixType | null {
  if (affix.match(/^([^-]+?)-$/)) {
    return "prestem";
  } else if (affix.match(/^-(е|о)([^-]+?)-$/)) {
    return "prethematic";
  } else if (affix.match(/^-([^-]+?)(а)-$/)) {
    return "postthematic";
  } else if (affix.match(/^-([^-]+?)$/)) {
    return "poststem";
  } else {
    return null;
  }
}