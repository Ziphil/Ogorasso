//

import type {Kind} from "../../util/misc";
import type {SimpleWord} from "../entry";


export class CompoundAnatomy implements Kind<"compound"> {

  public readonly kind: "compound";
  public readonly constituents: ReadonlyArray<SimpleWord>;

  public constructor(initializer: Pick<CompoundAnatomy, "constituents">) {
    this.kind = "compound";
    this.constituents = initializer.constituents;
  }

}