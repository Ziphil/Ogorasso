//

import type {Kind} from "../../util/misc";
import type {Radicals} from "../anatomy/core";
import type {Origin, Section} from "./word";


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
  public readonly origin: Origin;

  public constructor(initializer: Pick<Root, "number" | "radicals" | "sections" | "origin">) {
    super(initializer);
    this.sections = initializer.sections;
    this.origin = initializer.origin;
  }

}
