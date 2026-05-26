//

import type {AffixType, Anatomy} from "../../function/anatomy";
import {mapObjectValue} from "../../util/misc";
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

  public toPlain(): Anatomy | null {
    if (this.pattern.sort && this.pattern.type) {
      return {
        kind: "simplex",
        root: this.root.root,
        pattern: {sort: this.pattern.sort, type: this.pattern.type},
        theme: this.theme.spelling,
        affixes: mapObjectValue(this.affixes, (key, value) => value.map((affix) => affix.spelling))
      };
    } else {
      return null;
    }
  }

}
