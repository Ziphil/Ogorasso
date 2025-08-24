//

import {AffixSpelling, AffixType, PATTERN_DATA, PatternCategory, PatternSpelling, PatternType} from "../type/anatomy";


export function getPatternCategory(form: PatternSpelling): PatternCategory | null {
  const category = PATTERN_DATA.get(form)?.category ?? null;
  return category;
}

export function getPatternType(form: PatternSpelling): PatternType | null {
  const type = PATTERN_DATA.get(form)?.type ?? null;
  return type;
}

export function getAffixType(form: AffixSpelling): AffixType | null {
  if (form.match(/^([^-]+?)-$/)) {
    return "prefixal";
  } else if (form.match(/^-(е|о)([^-]+?)-$/)) {
    return "prethematic";
  } else if (form.match(/^-([^-]+?)(а)-$/)) {
    return "postthematic";
  } else if (form.match(/^-([^-]+?)$/)) {
    return "suffixal";
  } else {
    return null;
  }
}