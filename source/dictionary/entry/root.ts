//

import type {Root} from "../../function/anatomy/type";
import type {Kind} from "../../util/misc";
import type {Origin, Section} from "./word";


export class SimpleRootEntry implements Kind<"root"> {

  public readonly kind: "root";
  public readonly number: number;
  public readonly root: Root;

  public constructor(initializer: Pick<SimpleRootEntry, "number" | "root">) {
    this.kind = "root";
    this.number = initializer.number;
    this.root = initializer.root;
  }

}


export class RootEntry extends SimpleRootEntry implements Kind<"root"> {

  public readonly sections: ReadonlyArray<Section>;
  public readonly origin: Origin;

  public constructor(initializer: Pick<RootEntry, "number" | "root" | "sections" | "origin">) {
    super(initializer);
    this.sections = initializer.sections;
    this.origin = initializer.origin;
  }

}
