//

import type {AffixSpelling, AffixType} from "../../function/anatomy/type";
import type {Kind} from "../../util/misc";
import type {Section} from "./word";


export class SimpleAffixEntry implements Kind<"affix"> {

  public readonly kind: "affix";
  public readonly number: number;
  public readonly spelling: AffixSpelling;

  public constructor(initializer: Pick<SimpleAffixEntry, "number" | "spelling">) {
    this.kind = "affix";
    this.number = initializer.number;
    this.spelling = initializer.spelling;
  }

  public get type(): AffixType | null {
    return getAffixType(this.spelling);
  }

}


export class AffixEntry extends SimpleAffixEntry implements Kind<"affix"> {

  public readonly sections: ReadonlyArray<Section>;

  public constructor(initializer: Pick<AffixEntry, "number" | "spelling" | "sections">) {
    super(initializer);
    this.sections = initializer.sections;
  }

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