//

import type {Kind} from "../../util/misc";
import type {ThemeSpelling} from "../anatomy/core";


export class SimpleTheme implements Kind<"theme"> {

  public readonly kind: "theme";
  public readonly number: number;
  public readonly spelling: ThemeSpelling;

  public constructor(initializer: Pick<SimpleTheme, "number" | "spelling">) {
    this.kind = "theme";
    this.number = initializer.number;
    this.spelling = initializer.spelling;
  }

}


export class Theme extends SimpleTheme implements Kind<"theme"> {

  public constructor(initializer: Pick<Theme, "number" | "spelling">) {
    super(initializer);
  }

}