//

import type {Kind} from "../../util/misc";
import type {ThemeSpelling} from "../anatomy/core";


export class SimpleThemeEntry implements Kind<"theme"> {

  public readonly kind: "theme";
  public readonly number: number;
  public readonly spelling: ThemeSpelling;

  public constructor(initializer: Pick<SimpleThemeEntry, "number" | "spelling">) {
    this.kind = "theme";
    this.number = initializer.number;
    this.spelling = initializer.spelling;
  }

}


export class ThemeEntry extends SimpleThemeEntry implements Kind<"theme"> {

  public constructor(initializer: Pick<ThemeEntry, "number" | "spelling">) {
    super(initializer);
  }

}