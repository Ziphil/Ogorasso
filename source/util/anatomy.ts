//

import {AffixType} from "../type/anatomy";


export function getAffixType(affix: string): AffixType | null {
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