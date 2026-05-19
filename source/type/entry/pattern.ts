//

import type {Kind} from "../../util/misc";
import type {PatternSort, PatternSpelling, PatternType} from "../anatomy/core";
import {PATTERN_DATA} from "../anatomy/core";


export class SimplePattern implements Kind<"pattern"> {

  public readonly kind: "pattern";
  public readonly number: number;
  public readonly spelling: PatternSpelling;

  public constructor(initializer: Pick<SimplePattern, "number" | "spelling">) {
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


export class Pattern extends SimplePattern implements Kind<"pattern"> {

  public constructor(initializer: Pick<Pattern, "number" | "spelling">) {
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