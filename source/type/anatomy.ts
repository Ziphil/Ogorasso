//


export const PATTERN_DATA = new Map([
  ["катө̂п", {category: "verb", type: "ground"}],
  ["каттө̂п", {category: "verb", type: "doubleMedial"}],
  ["катө̂ппе", {category: "verb", type: "doubleFinal"}],
  ["аккатө̂п", {category: "verb", type: "doubleInitial"}],
  ["ҫакатө̂п", {category: "verb", type: "quadriliteralGround"}],
  ["ҫакаттө̂п", {category: "verb", type: "quadriliteralDouble"}],
  ["кө̂тап", {category: "substantive", type: "ground"}],
  ["кө̂ттап", {category: "substantive", type: "doubleMedial"}],
  ["кө̂тaппе", {category: "substantive", type: "doubleFinal"}],
  ["аккө̂тап", {category: "substantive", type: "doubleInitial"}],
  ["ҫакө̂тап", {category: "substantive", type: "quadriliteralGround"}],
  ["ҫакө̂ттап", {category: "substantive", type: "quadriliteralDouble"}]
] as const);


export interface Anatomy {

  readonly root: Root;
  readonly pattern: Pattern;
  readonly affixes: Record<AffixType, ReadonlyArray<Affix>>;
  readonly theme: Theme;

}


export type Radical = "к" | "г" | "х" | "ҕ" | "т" | "д" | "с" | "з" | "п" | "б" | "ф" | "в" | "ҫ" | "ҙ" | "ш" | "ж" | "ц" | "ӟ" | "ч" | "ӝ" | "ӈ" | "н" | "м" | "л" | "р" | "й" | "ў" | "ъ";
export type Root = readonly [Radical, Radical, Radical] | readonly [Radical, Radical, Radical, Radical];

export type Pattern = Parameters<(typeof PATTERN_DATA)["get"]>[0];
export type PatternCategory = "verb" | "substantive";
export type PatternType = "ground" | "doubleMedial" | "doubleFinal" | "doubleInitial" | "quadriliteralGround" | "quadriliteralDouble";

export type Affix = string;
export type AffixType = "prestem" | "prethematic" | "postthematic" | "poststem";

export type Theme = "е" | "о";