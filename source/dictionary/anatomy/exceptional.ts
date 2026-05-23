//

import type {Anatomy} from "../../function/anatomy";
import type {Kind} from "../../util/misc";


export class ExceptionalAnatomyRelation implements Kind<"exceptional"> {

  public readonly kind: "exceptional";
  public readonly spelling: string;

  public constructor(initializer: Pick<ExceptionalAnatomyRelation, "spelling">) {
    this.kind = "exceptional";
    this.spelling = initializer.spelling;
  }

  public toPlain(): Anatomy | null {
    return {
      kind: "exceptional",
      spelling: this.spelling
    };
  }

}
