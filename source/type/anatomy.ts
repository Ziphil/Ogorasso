//


export const RADICALS = ["к", "г", "х", "ҕ", "т", "д", "с", "з", "п", "б", "ф", "в", "ҫ", "ҙ", "ш", "ж", "ц", "ӟ", "ч", "ӝ", "ӈ", "н", "м", "л", "р", "й", "ў", "ъ"] as const;
export const THEMES = ["е", "о"] as const;

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

  readonly root: Root;
  readonly pattern: Pattern;
  readonly affixes: Record<AffixType, ReadonlyArray<Affix>>;
  readonly theme: Theme;

}


export type Radical = (typeof RADICALS)[number];
export type Root = readonly [Radical, Radical, Radical] | readonly [Radical, Radical, Radical, Radical];

export type Pattern = Parameters<(typeof PATTERN_DATA)["get"]>[0];
export type PatternCategory = (typeof PATTERN_CATEGORIES)[number];
export type PatternType = (typeof PATTERN_TYPES)[number];

export type Affix = string;
export type AffixType = (typeof AFFIX_TYPES)[number];

export type Theme = (typeof THEMES)[number];