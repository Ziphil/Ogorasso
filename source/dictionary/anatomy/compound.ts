//

import type {Anatomy} from "../../function/anatomy";
import type {Kind} from "../../util/misc";
import type {SimpleWord} from "../entry";


export class CompoundAnatomyRelation implements Kind<"compound"> {

  public readonly kind: "compound";
  public readonly constituents: ReadonlyArray<SimpleWord>;

  public constructor(initializer: Pick<CompoundAnatomyRelation, "constituents">) {
    this.kind = "compound";
    this.constituents = initializer.constituents;
  }

  public toPlain(): Anatomy | null {
    return null;
  }

}