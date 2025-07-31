//

import {Kind} from "../util/misc";


export const RADICALS = ["к", "г", "х", "ҕ", "т", "д", "с", "з", "п", "б", "ф", "в", "ҫ", "ҙ", "ш", "ж", "ц", "ӟ", "ч", "ӝ", "ӈ", "н", "м", "л", "р", "й", "ў", "ъ"] as const;
export const THEME_CHARS = ["е", "о"] as const;

export const PATTERN_CATEGORIES = ["verb", "substantive"] as const;
export const PATTERN_TYPES = ["ground", "doubleMedial", "doubleFinal", "doubleInitial"] as const;
export const PATTERN_DATA = new Map([
  ["катө̂п", {category: "verb", type: "ground"}],
  ["каттө̂п", {category: "verb", type: "doubleMedial"}],
  ["катө̂ппе", {category: "verb", type: "doubleFinal"}],
  ["аккатө̂п", {category: "verb", type: "doubleInitial"}],
  ["ҫакатө̂п", {category: "verb", type: "ground"}],
  ["ҫакаттө̂п", {category: "verb", type: "doubleMedial"}],
  ["кө̂тап", {category: "substantive", type: "ground"}],
  ["кө̂ттап", {category: "substantive", type: "doubleMedial"}],
  ["кө̂тaппе", {category: "substantive", type: "doubleFinal"}],
  ["аккө̂тап", {category: "substantive", type: "doubleInitial"}],
  ["ҫакө̂тап", {category: "substantive", type: "ground"}],
  ["ҫакө̂ттап", {category: "substantive", type: "doubleMedial"}]
] as const);

export const AFFIX_TYPES = ["prestem", "prethematic", "postthematic", "poststem"] as const;


export interface Anatomy {

  readonly root: RootRelation;
  readonly pattern: PatternRelation;
  readonly affixes: Record<AffixType, ReadonlyArray<AffixRelation>>;
  readonly theme: ThemeRelation;

}


export interface RootRelation extends Kind<"root"> {

  readonly number: number;
  readonly root: Root;

}


export interface PatternRelation extends Kind<"pattern"> {

  readonly number: number;
  readonly form: PatternForm;

}


export interface AffixRelation extends Kind<"affix"> {

  readonly number: number;
  readonly form: AffixForm;

}


export interface ThemeRelation extends Kind<"theme"> {

  readonly number: number;
  readonly form: ThemeForm;

}


export type Radical = (typeof RADICALS)[number];
export type Root = readonly [Radical, Radical, Radical] | readonly [Radical, Radical, Radical, Radical];

export type PatternForm = Parameters<(typeof PATTERN_DATA.get)>[0];
export type PatternCategory = (typeof PATTERN_CATEGORIES)[number];
export type PatternType = (typeof PATTERN_TYPES)[number];

export type AffixForm = string;
export type AffixType = (typeof AFFIX_TYPES)[number];

export type ThemeForm = (typeof THEME_CHARS)[number];