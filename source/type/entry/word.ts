//

import type {Kind} from "../../util/misc";
import type {Anatomy} from "../anatomy/index";


export class Word implements Kind<"normal"> {

  public readonly kind: "normal";
  public readonly number: number;
  public readonly spelling: string;
  public readonly sections: ReadonlyArray<Section>;
  public readonly anatomy: Anatomy | null;
  public readonly borrowed: boolean;

  public constructor(initializer: Pick<Word, "number" | "spelling" | "sections" | "anatomy" | "borrowed">) {
    this.kind = "normal";
    this.number = initializer.number;
    this.spelling = initializer.spelling;
    this.sections = initializer.sections;
    this.anatomy = initializer.anatomy;
    this.borrowed = initializer.borrowed;
  }

}


export interface Section {

  readonly equivalents: ReadonlyArray<Equivalent>;
  readonly information: ReadonlyArray<Information>;
  readonly phrases: ReadonlyArray<Phrase>;
  readonly relations: ReadonlyArray<Relation>;

}

export interface Equivalent {

  readonly titles: ReadonlyArray<string>;
  readonly terms: ReadonlyArray<string>;
  readonly termString: string;
  readonly hidden: boolean;

}


export interface Information {

  readonly title: string;
  readonly text: string;
  readonly hidden: boolean;

}


export interface Phrase {

  readonly spelling: string;
  readonly terms: ReadonlyArray<string>;
  readonly termString: string;

}


export interface Relation {

  readonly title: string;
  readonly number: number;
  readonly spelling: string;

}