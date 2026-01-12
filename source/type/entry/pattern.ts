//

import type {Kind} from "../../util/misc";
import type {PatternCategory, PatternSpelling, PatternType} from "../anatomy/core";
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

  public get category(): PatternCategory | null {
    return getPatternCategory(this.spelling);
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


export function getPatternCategory(spelling: PatternSpelling): PatternCategory | null {
  const category = PATTERN_DATA.get(spelling)?.category ?? null;
  return category;
}

export function getPatternType(spelling: PatternSpelling): PatternType | null {
  const type = PATTERN_DATA.get(spelling)?.type ?? null;
  return type;
}