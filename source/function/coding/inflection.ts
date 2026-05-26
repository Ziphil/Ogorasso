//

import {InflectionDescriptor} from "../morphology/type";


export type NaturalLocale = "japanese" | "abbreviation";

const INFLECTION_CODING_MAP = new Map<string, Record<NaturalLocale, string>>([
  ["substant", {japanese: "体言", abbreviation: "SUB"}],
  ["verbant", {japanese: "用言", abbreviation: "VER"}],
  ["base", {japanese: "基本", abbreviation: "BAS"}],
  ["adjective", {japanese: "形容詞", abbreviation: "ADJ"}],
  ["noun", {japanese: "名詞", abbreviation: "NON"}],
  ["adverb", {japanese: "副詞", abbreviation: "ADV"}],
  ["prepositional", {japanese: "前置", abbreviation: "PREP"}],
  ["verbophoric", {japanese: "連用", abbreviation: "ADV"}],
  ["substophoric", {japanese: "連体", abbreviation: "ADJ"}],
  ["water", {japanese: "水類", abbreviation: "WAT"}],
  ["fire", {japanese: "火類", abbreviation: "FIR"}],
  ["nominative", {japanese: "主格", abbreviation: "NOM"}],
  ["accusative", {japanese: "対格", abbreviation: "ACC"}],
  ["dative", {japanese: "与格", abbreviation: "DAT"}],
  ["ablative", {japanese: "奪格", abbreviation: "ABL"}],
  ["instrumental", {japanese: "具格", abbreviation: "INS"}],
  ["locative", {japanese: "処格", abbreviation: "LOC"}],
  ["definite", {japanese: "定", abbreviation: "DF"}],
  ["indefinite", {japanese: "不定", abbreviation: "INDF"}],
  ["simple", {japanese: "単純型", abbreviation: "SIMP"}],
  ["k", {japanese: "K型", abbreviation: "K"}],
  ["active", {japanese: "能動", abbreviation: "ACT"}],
  ["passive", {japanese: "受動", abbreviation: "PAS"}],
  ["present", {japanese: "現在", abbreviation: "PRS"}],
  ["past", {japanese: "過去", abbreviation: "PST"}],
  ["thirdDefinite", {japanese: "三人称定", abbreviation: "3DF"}],
  ["thirdIndefinite", {japanese: "三人称不定", abbreviation: "3INDF"}],
  ["second", {japanese: "二人称", abbreviation: "2"}],
  ["firstPlural", {japanese: "一人称複数", abbreviation: "1PL"}],
  ["firstSingular", {japanese: "一人称単数", abbreviation: "1SG"}]
]);

export function decodeInflectionDescriptor(descriptor: InflectionDescriptor, locale: NaturalLocale): string {
  const segments = descriptor.split(".");
  const decodedSegments = segments.map((segment) => decodeInflectionDescriptorSegment(segment, locale));
  return decodedSegments.join(".");
}

export function decodeInflectionDescriptorSegment(segment: string, locale: NaturalLocale): string {
  return INFLECTION_CODING_MAP.get(segment)?.[locale] ?? segment;
}