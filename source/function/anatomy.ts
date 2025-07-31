//

import {AffixForm, AffixType, PATTERN_DATA, PatternCategory, PatternForm, PatternType} from "../type/anatomy";


export function getPatternCategory(form: PatternForm): PatternCategory | null {
  const category = PATTERN_DATA.get(form)?.category ?? null;
  return category;
}

export function getPatternType(form: PatternForm): PatternType | null {
  const type = PATTERN_DATA.get(form)?.type ?? null;
  return type;
}

export function getAffixType(form: AffixForm): AffixType | null {
  if (form.match(/^([^-]+?)-$/)) {
    return "prestem";
  } else if (form.match(/^-(е|о)([^-]+?)-$/)) {
    return "prethematic";
  } else if (form.match(/^-([^-]+?)(а)-$/)) {
    return "postthematic";
  } else if (form.match(/^-([^-]+?)$/)) {
    return "poststem";
  } else {
    return null;
  }
}