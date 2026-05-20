//

import {getForm} from "../../morphology";
import {mapObject} from "../../util/misc";
import type {Kind} from "../../util/misc";
import type {Anatomy} from "../anatomy";
import type {Inflection} from "../inflection";


export class SimpleWord implements Kind<"word"> {

  public readonly kind: "word";
  public readonly number: number;
  public readonly spelling: string;

  public constructor(initializer: Pick<SimpleWord, "number" | "spelling">) {
    this.kind = "word";
    this.number = initializer.number;
    this.spelling = initializer.spelling;
  }

}


export class Word extends SimpleWord implements Kind<"word"> {

  public readonly sections: ReadonlyArray<Section>;
  public readonly anatomy: Anatomy | null;
  public readonly origin: Origin;
  public readonly oldSpellings: ReadonlyArray<string>;
  public readonly separatedSpellings: ReadonlyArray<string>;

  public constructor(initializer: Pick<Word, "number" | "spelling" | "sections" | "anatomy" | "origin" | "oldSpellings" | "separatedSpellings">) {
    super(initializer);
    this.sections = initializer.sections;
    this.anatomy = initializer.anatomy;
    this.origin = initializer.origin;
    this.oldSpellings = initializer.oldSpellings;
    this.separatedSpellings = initializer.separatedSpellings;
  }

  public getForm(inflection: Inflection): string | null {
    if (this.anatomy !== null && this.anatomy.kind === "simplex") {
      const root = this.anatomy.root.root;
      const pattern = this.anatomy.pattern.pattern ?? {sort: "substantive", type: "ground"};
      const theme = this.anatomy.theme.spelling;
      const patternAffixes = mapObject(this.anatomy.affixes, (key, value) => value.map((affix) => affix.spelling));
      if (pattern.sort === inflection.sort) {
        return getForm(root, pattern, theme, patternAffixes, inflection);
      } else {
        return null;
      }
    } else {
      return null;
    }
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


export type Origin = "proper" | "loan" | "foreign";