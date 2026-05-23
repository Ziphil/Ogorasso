//


export type Sort = "verbal" | "substantive";

export const RADICALS = ["к", "г", "х", "ҕ", "т", "д", "с", "з", "п", "б", "ф", "в", "ҫ", "ҙ", "ш", "ж", "ц", "ӟ", "ч", "ӝ", "ӈ", "н", "м", "л", "р", "й", "ў", "ъ"] as const;

export type Radical = (typeof RADICALS)[number];
export type Root = readonly [Radical, Radical, Radical] | readonly [Radical, Radical, Radical, Radical];

export const PATTERN_SORTS = ["verbal", "substantive"] as const;
export const PATTERN_TYPES = ["ground", "doubleMedial", "doubleFinal", "doubleInitial"] as const;
export const PATTERN_DATA = new Map<string, Pattern>([
  ["катө̂п", {sort: "verbal", type: "ground"}],
  ["каттө̂п", {sort: "verbal", type: "doubleMedial"}],
  ["катө̂ппе", {sort: "verbal", type: "doubleFinal"}],
  ["аккатө̂п", {sort: "verbal", type: "doubleInitial"}],
  ["кө̂тап", {sort: "substantive", type: "ground"}],
  ["кө̂ттап", {sort: "substantive", type: "doubleMedial"}],
  ["кө̂тaппе", {sort: "substantive", type: "doubleFinal"}],
  ["аккө̂тап", {sort: "substantive", type: "doubleInitial"}]
] as const);

export type PatternSpelling = Parameters<(typeof PATTERN_DATA.get)>[0];
export type PatternSort = (typeof PATTERN_SORTS)[number];
export type PatternType = (typeof PATTERN_TYPES)[number];
export type Pattern = {sort: "verbal", type: PatternType} | {sort: "substantive", type: PatternType};

export const AFFIX_TYPES = ["prefixal", "infixal", "suffixal", "terminal"] as const;

export type AffixSpelling = string;
export type AffixType = (typeof AFFIX_TYPES)[number];

export type Affixes = Record<AffixType, ReadonlyArray<string>>;

export const THEME_CHARS = ["и", "у"] as const;

export type ThemeSpelling = (typeof THEME_CHARS)[number];
export type Theme = (typeof THEME_CHARS)[number];

export type Anatomy = {
  root: Root,
  pattern: Pattern,
  theme: Theme,
  affixes: Affixes
};