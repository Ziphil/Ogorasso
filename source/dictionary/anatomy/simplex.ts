//

import type {AffixType, Anatomy} from "../../function/anatomy/type";
import {mapObject} from "../../util/misc";
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

  public toPlain(): Anatomy {
    const root = this.root.root;
    const pattern = {sort: this.pattern.sort!, type: this.pattern.type!};
    const theme = this.theme.spelling;
    const affixes = mapObject(this.affixes, (key, value) => value.map((affix) => affix.spelling));
    return {root, pattern, theme, affixes};
  }

}
