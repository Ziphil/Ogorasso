//

import type {Kind} from "../util/misc";
import type {AffixSpelling, Anatomy, PatternSpelling, Root, ThemeSpelling} from "./anatomy";
import type {Equivalent, Section} from "./word-content";


export interface NormalWord extends Kind<"normal"> {

  readonly number: number;
  readonly spelling: string;
  readonly sections: ReadonlyArray<Section>;
  readonly anatomy: Anatomy | null;
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
  readonly spelling: PatternSpelling;
  readonly equivalents: ReadonlyArray<Equivalent>;

}


export interface AffixWord extends Kind<"affix"> {

  readonly number: number;
  readonly spelling: AffixSpelling;
  readonly equivalents: ReadonlyArray<Equivalent>;

}


export interface ThemeWord extends Kind<"theme"> {

  readonly number: number;
  readonly spelling: ThemeSpelling;

}


export type Word = NormalWord | RootWord | PatternWord | AffixWord | ThemeWord;