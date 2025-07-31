//

import {Kind} from "../util/misc";
import {AffixForm, Anatomy, PatternForm, Root, ThemeForm} from "./anatomy";
import {Equivalent, Information, NormalRelation, Phrase} from "./word-content";


export interface NormalWord extends Kind<"normal"> {

  readonly number: number;
  readonly form: string;
  readonly anatomy: Anatomy | null;
  readonly equivalents: ReadonlyArray<Equivalent>;
  readonly information: ReadonlyArray<Information>;
  readonly phrases: ReadonlyArray<Phrase>;
  readonly relations: ReadonlyArray<NormalRelation>;
  readonly foreign: boolean;

}


export interface RootWord extends Kind<"root"> {

  readonly number: number;
  readonly root: Root;
  readonly equivalents: ReadonlyArray<Equivalent>;
  readonly foreign: boolean;

}


export interface PatternWord extends Kind<"pattern"> {

  readonly number: number;
  readonly form: PatternForm;
  readonly equivalents: ReadonlyArray<Equivalent>;

}


export interface AffixWord extends Kind<"affix"> {

  readonly number: number;
  readonly form: AffixForm;
  readonly equivalents: ReadonlyArray<Equivalent>;

}


export interface ThemeWord extends Kind<"theme"> {

  readonly number: number;
  readonly form: ThemeForm;

}


export type Word = NormalWord | RootWord | PatternWord | AffixWord | ThemeWord;