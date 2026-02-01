//


export const RADICALS = ["к", "г", "х", "ҕ", "т", "д", "с", "з", "п", "б", "ф", "в", "ҫ", "ҙ", "ш", "ж", "ц", "ӟ", "ч", "ӝ", "ӈ", "н", "м", "л", "р", "й", "ў", "ъ"] as const;

export type Radical = (typeof RADICALS)[number];
export type Radicals = readonly [Radical, Radical] | readonly [Radical, Radical, Radical] | readonly [Radical, Radical, Radical, Radical];

export const PATTERN_CATEGORIES = ["verbal", "substantive"] as const;
export const PATTERN_TYPES = ["ground", "doubleMedial", "doubleFinal", "doubleInitial"] as const;
export const PATTERN_DATA = new Map([
  ["катө̂п", {category: "verbal", type: "ground"}],
  ["каттө̂п", {category: "verbal", type: "doubleMedial"}],
  ["катө̂ппе", {category: "verbal", type: "doubleFinal"}],
  ["аккатө̂п", {category: "verbal", type: "doubleInitial"}],
  ["кө̂тап", {category: "substantive", type: "ground"}],
  ["кө̂ттап", {category: "substantive", type: "doubleMedial"}],
  ["кө̂тaппе", {category: "substantive", type: "doubleFinal"}],
  ["аккө̂тап", {category: "substantive", type: "doubleInitial"}]
] as const);

export type PatternSpelling = Parameters<(typeof PATTERN_DATA.get)>[0];
export type PatternCategory = (typeof PATTERN_CATEGORIES)[number];
export type PatternType = (typeof PATTERN_TYPES)[number];

export const AFFIX_TYPES = ["prefixal", "infixal", "suffixal", "terminal"] as const;

export type AffixSpelling = string;
export type AffixType = (typeof AFFIX_TYPES)[number];

export const THEME_CHARS = ["и", "у"] as const;

export type ThemeSpelling = (typeof THEME_CHARS)[number];