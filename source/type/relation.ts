//

import type {Kind} from "../util/misc";
import type {AffixSpelling, PatternSpelling, Root, ThemeSpelling} from "./anatomy";


export interface NormalRelation {

  readonly title: string;
  readonly number: number;
  readonly spelling: string;

}


export interface RootRelation extends Kind<"root"> {

  readonly number: number;
  readonly root: Root;

}


export interface PatternRelation extends Kind<"pattern"> {

  readonly number: number;
  readonly spelling: PatternSpelling;

}


export interface AffixRelation extends Kind<"affix"> {

  readonly number: number;
  readonly spelling: AffixSpelling;

}


export interface ThemeRelation extends Kind<"theme"> {

  readonly number: number;
  readonly spelling: ThemeSpelling;

}


export interface ConstituentRelation extends Kind<"constituent"> {

  readonly number: number;
  readonly spelling: string;

}