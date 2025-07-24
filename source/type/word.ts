//

import {Affix, Anatomy, Pattern, Root} from "./anatomy";


interface SuperWord<K extends string> {

  readonly kind: K;
  readonly number: number;

}


export interface NormalWord extends SuperWord<"normal"> {

  readonly form: string;
  readonly equivalents: ReadonlyArray<Equivalent>;
  readonly anatomy: Anatomy | null;

}


export interface RootWord extends SuperWord<"root"> {

  readonly root: Root;
  readonly equivalents: ReadonlyArray<Equivalent>;

}


export interface PatternWord extends SuperWord<"pattern"> {

  readonly pattern: Pattern;
  readonly equivalents: ReadonlyArray<Equivalent>;

}


export interface AffixWord extends SuperWord<"affix"> {

  readonly affix: Affix;
  readonly equivalents: ReadonlyArray<Equivalent>;

}


export interface ThemeWord extends SuperWord<"theme"> {

  readonly form: string;

}


export interface Equivalent {

  readonly titles: ReadonlyArray<string>;
  readonly terms: ReadonlyArray<string>;
  readonly termString: string;
  readonly hidden: boolean;

}


export type Word = NormalWord | RootWord | PatternWord | AffixWord | ThemeWord;