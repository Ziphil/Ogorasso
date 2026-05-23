//

import type {Pattern, PatternSort, PatternSpelling, PatternType} from "../../function/anatomy/type";
import {PATTERN_DATA} from "../../function/anatomy/type";
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

  public get pattern(): Pattern | null {
    if (this.sort !== null && this.type !== null) {
      return {sort: this.sort, type: this.type};
    } else {
      return null;
    }
  }

}


export class PatternEntry extends SimplePatternEntry implements Kind<"pattern"> {

  public constructor(initializer: Pick<PatternEntry, "number" | "spelling">) {
    super(initializer);
  }

}


export function getPatternSort(spelling: PatternSpelling): PatternSort | null {
  const sort = PATTERN_DATA.get(spelling)?.sort ?? null;
  return sort;
}

export function getPatternType(spelling: PatternSpelling): PatternType | null {
  const type = PATTERN_DATA.get(spelling)?.type ?? null;
  return type;
}