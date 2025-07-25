//

import {Affix, Anatomy, Pattern, Root, Theme} from "./anatomy";
import {Equivalent, Information, Phrase, Relation} from "./word-content";


interface SuperWord<K extends string> {

  readonly kind: K;
  readonly number: number;

}


export interface NormalWord extends SuperWord<"normal"> {

  readonly form: string;
  readonly anatomy: Anatomy | null;
  readonly equivalents: ReadonlyArray<Equivalent>;
  readonly information: ReadonlyArray<Information>;
  readonly phrases: ReadonlyArray<Phrase>;
  readonly relations: ReadonlyArray<Relation>;

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

  readonly theme: Theme;

}


export type Word = NormalWord | RootWord | PatternWord | AffixWord | ThemeWord;