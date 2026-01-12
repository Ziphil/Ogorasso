//

import type {Kind} from "../../util/misc";
import type {SimpleAffix} from "../entry/affix";
import type {SimplePattern} from "../entry/pattern";
import type {SimpleRoot} from "../entry/root";
import type {SimpleTheme} from "../entry/theme";
import type {AffixType} from "./core";


export class SimplexAnatomy implements Kind<"simplex"> {

  public readonly kind: "simplex";
  public readonly root: SimpleRoot;
  public readonly pattern: SimplePattern;
  public readonly affixes: Record<AffixType, ReadonlyArray<SimpleAffix>>;
  public readonly theme: SimpleTheme;

  public constructor(initializer: Pick<SimplexAnatomy, "root" | "pattern" | "affixes" | "theme">) {
    this.kind = "simplex";
    this.root = initializer.root;
    this.pattern = initializer.pattern;
    this.affixes = initializer.affixes;
    this.theme = initializer.theme;
  }

}
