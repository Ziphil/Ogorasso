//

import type {Kind} from "../../util/misc";
import type {SimpleWord} from "../entry";


export class CompoundAnatomyRelation implements Kind<"compound"> {

  public readonly kind: "compound";
  public readonly constituents: ReadonlyArray<SimpleWord>;

  public constructor(initializer: Pick<CompoundAnatomyRelation, "constituents">) {
    this.kind = "compound";
    this.constituents = initializer.constituents;
  }

  public toPlain(): null {
    return null;
  }

}