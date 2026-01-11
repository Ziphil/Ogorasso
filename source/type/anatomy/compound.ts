//

import type {Kind} from "../../util/misc";


export class CompoundAnatomy implements Kind<"compound"> {

  public readonly kind: "compound";
  public readonly constituents: ReadonlyArray<Constituent>;

  public constructor(initializer: Pick<CompoundAnatomy, "constituents">) {
    this.kind = "compound";
    this.constituents = initializer.constituents;
  }

}


export interface Constituent {

  readonly number: number;
  readonly spelling: string;

}