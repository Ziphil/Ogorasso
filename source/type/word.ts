//

import type {Kind} from "../util/misc";
import type {AffixSpelling, Anatomy, PatternSpelling, Root, ThemeSpelling} from "./anatomy";
import type {Section} from "./word-content";


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
  readonly sections: ReadonlyArray<Section>;
  readonly foreign: boolean;

}


export interface PatternWord extends Kind<"pattern"> {

  readonly number: number;
  readonly spelling: PatternSpelling;

}


export interface AffixWord extends Kind<"affix"> {

  readonly number: number;
  readonly spelling: AffixSpelling;
  readonly sections: ReadonlyArray<Section>;

}


export interface ThemeWord extends Kind<"theme"> {

  readonly number: number;
  readonly spelling: ThemeSpelling;

}


export type Word = NormalWord | RootWord | PatternWord | AffixWord | ThemeWord;