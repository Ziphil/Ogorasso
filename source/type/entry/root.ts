//

import type {Kind} from "../../util/misc";
import type {Radicals} from "../anatomy/core";
import type {Section} from "./word";


export class SimpleRoot implements Kind<"root"> {

  public readonly kind: "root";
  public readonly number: number;
  public readonly radicals: Radicals;

  public constructor(initializer: Pick<SimpleRoot, "number" | "radicals">) {
    this.kind = "root";
    this.number = initializer.number;
    this.radicals = initializer.radicals;
  }

}


export class Root extends SimpleRoot implements Kind<"root"> {

  public readonly sections: ReadonlyArray<Section>;
  public readonly borrowed: boolean;

  public constructor(initializer: Pick<Root, "number" | "radicals" | "sections" | "borrowed">) {
    super(initializer);
    this.sections = initializer.sections;
    this.borrowed = initializer.borrowed;
  }

}
