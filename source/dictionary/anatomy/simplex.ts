//

import type {AffixType} from "../../function/anatomy/type";
import type {Kind} from "../../util/misc";
import type {SimpleAffixEntry} from "../entry/affix";
import type {SimplePatternEntry} from "../entry/pattern";
import type {SimpleRootEntry} from "../entry/root";
import type {SimpleThemeEntry} from "../entry/theme";


export class SimplexAnatomyRelation implements Kind<"simplex"> {

  public readonly kind: "simplex";
  public readonly root: SimpleRootEntry;
  public readonly pattern: SimplePatternEntry;
  public readonly affixes: Record<AffixType, ReadonlyArray<SimpleAffixEntry>>;
  public readonly theme: SimpleThemeEntry;

  public constructor(initializer: Pick<SimplexAnatomyRelation, "root" | "pattern" | "affixes" | "theme">) {
    this.kind = "simplex";
    this.root = initializer.root;
    this.pattern = initializer.pattern;
    this.affixes = initializer.affixes;
    this.theme = initializer.theme;
  }

}
