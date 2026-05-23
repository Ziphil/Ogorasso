//

import {getPatternSort, getPatternType} from "../../function/anatomy/function";
import type {PatternSort, PatternSpelling, PatternType} from "../../function/anatomy/type";
import type {Kind} from "../../util/misc";


export class SimplePatternEntry implements Kind<"pattern"> {

  public readonly kind: "pattern";
  public readonly number: number;
  public readonly spelling: PatternSpelling;

  public constructor(initializer: Pick<SimplePatternEntry, "number" | "spelling">) {
    this.kind = "pattern";
    this.number = initializer.number;
    this.spelling = initializer.spelling;
  }

  public get sort(): PatternSort | null {
    return getPatternSort(this.spelling);
  }

  public get type(): PatternType | null {
    return getPatternType(this.spelling);
  }

}


export class PatternEntry extends SimplePatternEntry implements Kind<"pattern"> {

  public constructor(initializer: Pick<PatternEntry, "number" | "spelling">) {
    super(initializer);
  }

}