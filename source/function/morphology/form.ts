//

import {Anatomy, Sort} from "../anatomy";
import {surfaceEuphony, surfaceLightSyllables, surfaceMerger, surfaceWeakConsonants} from "../surfacing";
import {isConsonant} from "../surfacing/grapheme";
import {toInflectionSpecifier} from "./function";
import {getInflectionAffixes} from "./inflection";
import {Inflection, InflectionSpecifier} from "./type";


export const EXCEPTIONAL_SURFACE_FORMS = new Map<string, Map<InflectionSpecifier, string>>([
  ["у", new Map<InflectionSpecifier, string>([
    ["substantive.base.adverbial.water.nominative.indefinite", "у"], ["substantive.base.adverbial.fire.nominative.indefinite", "у"],
    ["substantive.base.adverbial.water.accusative.indefinite", "ух"], ["substantive.base.adverbial.fire.accusative.indefinite", "ух"],
    ["substantive.base.adverbial.water.dative.indefinite", "ус"], ["substantive.base.adverbial.fire.dative.indefinite", "ус"],
    ["substantive.base.adverbial.water.ablative.indefinite", "ум"], ["substantive.base.adverbial.fire.ablative.indefinite", "ум"],
    ["substantive.base.adverbial.water.instrumental.indefinite", "ут"], ["substantive.base.adverbial.fire.instrumental.indefinite", "ут"],
    ["substantive.base.adverbial.water.locative.indefinite", "у"], ["substantive.base.adverbial.fire.locative.indefinite", "у"],
    ["substantive.base.adjectival.water.nominative.indefinite", "ув"], ["substantive.base.adjectival.fire.nominative.indefinite", "ув"],
    ["substantive.base.adjectival.water.accusative.indefinite", "увах"], ["substantive.base.adjectival.fire.accusative.indefinite", "увах"],
    ["substantive.base.adjectival.water.dative.indefinite", "увас"], ["substantive.base.adjectival.fire.dative.indefinite", "увас"],
    ["substantive.base.adjectival.water.ablative.indefinite", "увам"], ["substantive.base.adjectival.fire.ablative.indefinite", "увам"],
    ["substantive.base.adjectival.water.instrumental.indefinite", "уват"], ["substantive.base.adjectival.fire.instrumental.indefinite", "уват"],
    ["substantive.base.adjectival.water.locative.indefinite", "уве"], ["substantive.base.adjectival.fire.locative.indefinite", "уве"]
  ])],
  ["ку̂к", new Map<InflectionSpecifier, string>([
    ["substantive.base.adverbial.fire.nominative.indefinite", "ку̂к"],
    ["substantive.base.adverbial.fire.accusative.indefinite", "ко̂к"],
    ["substantive.base.adverbial.fire.dative.indefinite", "ко̂сок"],
    ["substantive.base.adverbial.fire.ablative.indefinite", "ко̂замок"],
    ["substantive.base.adverbial.fire.instrumental.indefinite", "ку̂ток"],
    ["substantive.base.adverbial.fire.locative.indefinite", "ке̂ок"],
    ["substantive.base.adjectival.fire.nominative.indefinite", "ко̂вок"],
    ["substantive.base.adjectival.fire.accusative.indefinite", "ко̂вахок"],
    ["substantive.base.adjectival.fire.dative.indefinite", "ко̂васок"],
    ["substantive.base.adjectival.fire.ablative.indefinite", "ко̂взамок"],
    ["substantive.base.adjectival.fire.instrumental.indefinite", "ко̂воток"],
    ["substantive.base.adjectival.fire.locative.indefinite", "ко̂веок"]
  ])],
  ["ко̂ддео", new Map<InflectionSpecifier, string>([
    ["substantive.base.adverbial.fire.dative.indefinite", "ко̂ддосо"],
    ["substantive.base.adverbial.fire.ablative.indefinite", "ко̂ддозамо"],
    ["substantive.base.adverbial.fire.locative.indefinite", "ко̂ддео"]
  ])]
]);

export function getForm(anatomy: Anatomy, inflection: Inflection): string {
  const exceptionalForms = (anatomy.kind === "exceptional") ? EXCEPTIONAL_SURFACE_FORMS.get(anatomy.spelling) : undefined;
  if (!exceptionalForms) {
    const stemUnderlyingForm = surfaceLightSyllables(getStemUnderlyingForm(anatomy, inflection));
    const underlyingForm = getUnderlyingForm(stemUnderlyingForm, anatomy, inflection);
    const surfaceForm = surfaceMerger(surfaceWeakConsonants(surfaceEuphony(surfaceLightSyllables(underlyingForm))));
    return surfaceForm;
  } else {
    const surfaceForm = exceptionalForms.get(toInflectionSpecifier(inflection)) ?? "";
    return surfaceForm;
  }
}

export function getInflectionSort(anatomy: Anatomy): Sort {
  if (anatomy.kind === "simplex") {
    if (anatomy.pattern.sort === "verbal") {
      if (anatomy.affixes.suffixal.length > 0) {
        return "substantive";
      } else {
        return "verbal";
      }
    } else {
      return "substantive";
    }
  } else {
    return "substantive";
  }
}

function getUnderlyingForm(stemUnderlyingForm: string, anatomy: Anatomy, inflection: Inflection): string {
  const inflectionAffixes = getInflectionAffixes(inflection);
  let underlyingRealization = "";
  underlyingRealization += inflectionAffixes.prefixal.map((affix) => affix.replace(/-/g, "")).join("");
  underlyingRealization += (hasStemUnderlyingFormInitialGeminate(stemUnderlyingForm) && inflectionAffixes.prefixal.length <= 0) ? "а" : "";
  underlyingRealization += stemUnderlyingForm;
  underlyingRealization += (hasStemUnderlyingFormFinalGeminate(stemUnderlyingForm) && inflectionAffixes.suffixal.length <= 0) ? "е" : "";
  underlyingRealization += inflectionAffixes.suffixal.map((affix) => affix.replace(/-/g, "")).join("");
  if ("affixes" in anatomy && anatomy.affixes.terminal.length > 0) {
    const last = underlyingRealization[underlyingRealization.length - 1];
    if (last !== "е" && last !== "о" && last !== "а") {
      underlyingRealization += (hasStemUnderlyingFormGenderVowel(inflection)) ? "е" : "а";
    }
    underlyingRealization += anatomy.affixes.terminal.map((affix) => affix.replace(/-/g, "")).join("");
  }
  return underlyingRealization;
}

function hasStemUnderlyingFormInitialGeminate(stemUnderlyingForm: string): boolean {
  return stemUnderlyingForm.length >= 2 && isConsonant(stemUnderlyingForm[0]) && stemUnderlyingForm[0] === stemUnderlyingForm[1];
}

function hasStemUnderlyingFormFinalGeminate(stemUnderlyingForm: string): boolean {
  return stemUnderlyingForm.length >= 2 && isConsonant(stemUnderlyingForm[stemUnderlyingForm.length - 1]) && stemUnderlyingForm[stemUnderlyingForm.length - 1] === stemUnderlyingForm[stemUnderlyingForm.length - 2];
}

function hasStemUnderlyingFormGenderVowel(inflection: Inflection): boolean {
  return ("voice" in inflection && inflection.gender === "water") || ("adhesivity" in inflection && inflection.gender === "water" && inflection.case === "nominative" && inflection.adhesivity === "adverbial");
}

export const EXCEPTIONAL_STEM_UNDERLYING_FORMS = new Map<string, string>([
  ["ѐ", "ъ"], ["шѐ", "ш"], ["бамѐ", "бам"], ["цѐ", "ц"],
  ["ех", "ъ"], ["шех", "ш"], ["бамех", "бам"], ["цех", "ц"],
  ["хе̂е", "хе̂ъъ"], ["хо̂е", "хо̂ъъ"], ["те̂шше", "те̂шш"], ["бе̂мме", "бе̂мм"], ["и̂цце", "йе̂цц"],
  ["хѐ", "х"], ["тѐ", "т"], ["ѝ", "й"], ["кѐ", "к"], ["фѐ", "ф"], ["аффѐ", "фф"], ["нѐ", "н"], ["аннѐ", "нн"], ["ажжѐ", "жж"],
  ["хе̂с", "хе̂с"], ["те̂с", "те̂с"], ["и̂с", "йе̂с"], ["ке̂с", "ке̂с"], ["фе̂с", "фе̂с"], ["аффе̂с", "ффе̂с"], ["не̂с", "не̂с"], ["анне̂с", "нне̂с"], ["ажже̂с", "жже̂с"],
  ["хо̂с", "хо̂с"], ["то̂с", "то̂с"], ["е̂с", "йо̂с"], ["ко̂с", "ко̂с"], ["фо̂с", "фо̂с"], ["аффо̂с", "ффо̂с"], ["но̂с", "но̂с"], ["анно̂с", "нно̂с"], ["ажжо̂с", "жжо̂с"],
  ["хе̂дде", "хе̂дд"], ["те̂дде", "те̂дд"], ["и̂дде", "йе̂дд"], ["ке̂дде", "ке̂дд"], ["фе̂дде", "фе̂дд"], ["аффе̂дде", "ффе̂дд"], ["не̂дде", "не̂дд"], ["анне̂дде", "нне̂дд"], ["ажже̂дде", "жже̂дд"],
  ["хо̂ддо", "хо̂дд"], ["то̂ддо", "то̂дд"], ["е̂ддо", "йо̂дд"], ["ко̂ддо", "ко̂дд"], ["фо̂ддо", "фо̂дд"], ["аффо̂ддо", "ффо̂дд"], ["но̂ддо", "но̂дд"], ["анно̂ддо", "нно̂дд"], ["ажжо̂ддо", "жжо̂дд"],
  ["хо̂чче", "хо̂чч"], ["то̂чче", "то̂чч"], ["е̂чче", "йо̂чч"], ["ко̂чче", "ко̂чч"], ["фо̂чче", "фо̂чч"], ["аффо̂чче", "ффо̂чч"], ["но̂чче", "но̂чч"], ["анно̂чче", "нно̂чч"], ["ажжо̂чче", "жжо̂чч"]
]);

/** 活用接辞のない語幹部分の基層形を計算します。
 * ただし、語末型語型接辞は無視します (語末型語型接辞のみ活用接辞として扱って `getUnderlyingForm` 関数で追加する)。 */
function getStemUnderlyingForm(anatomy: Anatomy, inflection: Inflection): string {
  if (anatomy.kind === "simplex") {
    const {root, pattern, theme, affixes} = anatomy;
    if (root.length === 3) {
      if (pattern.sort === "verbal") {
        let coreUnderlyingRealization = "";
        coreUnderlyingRealization += affixes.prefixal.map((affix) => affix.replace(/-/g, "")).join("");
        coreUnderlyingRealization += (pattern.type === "doubleInitial") ? root[0] + root[0] : root[0];
        coreUnderlyingRealization += "а";
        coreUnderlyingRealization += (pattern.type === "doubleMedial") ? root[1] + root[1] : root[1];
        coreUnderlyingRealization += affixes.infixal.map((affix) => affix.replace(/-/g, "")).join("");
        coreUnderlyingRealization += theme + "\u0302";
        coreUnderlyingRealization += (pattern.type === "doubleFinal") ? root[2] + root[2] : root[2];
        coreUnderlyingRealization += affixes.suffixal.map((affix) => affix.replace(/-/g, "")).join("");
        return coreUnderlyingRealization;
      } else {
        let coreUnderlyingRealization = "";
        coreUnderlyingRealization += affixes.prefixal.map((affix) => affix.replace(/-/g, "")).join("");
        coreUnderlyingRealization += (pattern.type === "doubleInitial") ? root[0] + root[0] : root[0];
        coreUnderlyingRealization += affixes.infixal.map((affix) => affix.replace(/-/g, "")).join("");
        coreUnderlyingRealization += theme + "\u0302";
        coreUnderlyingRealization += (pattern.type === "doubleMedial") ? root[1] + root[1] : root[1];
        coreUnderlyingRealization += "а";
        coreUnderlyingRealization += (pattern.type === "doubleFinal") ? root[2] + root[2] : root[2];
        coreUnderlyingRealization += affixes.suffixal.map((affix) => affix.replace(/-/g, "")).join("");
        return coreUnderlyingRealization;
      }
    } else {
      if (pattern.sort === "verbal") {
        let coreUnderlyingRealization = "";
        coreUnderlyingRealization += affixes.prefixal.map((affix) => affix.replace(/-/g, "")).join("");
        coreUnderlyingRealization += root[0];
        coreUnderlyingRealization += "а";
        coreUnderlyingRealization += root[1];
        coreUnderlyingRealization += "а";
        coreUnderlyingRealization += root[2];
        coreUnderlyingRealization += affixes.infixal.map((affix) => affix.replace(/-/g, "")).join("");
        coreUnderlyingRealization += theme + "\u0302";
        coreUnderlyingRealization += root[3];
        coreUnderlyingRealization += affixes.suffixal.map((affix) => affix.replace(/-/g, "")).join("");
        return coreUnderlyingRealization;
      } else {
        let coreUnderlyingRealization = "";
        coreUnderlyingRealization += affixes.prefixal.map((affix) => affix.replace(/-/g, "")).join("");
        coreUnderlyingRealization += root[0];
        coreUnderlyingRealization += affixes.infixal.map((affix) => affix.replace(/-/g, "")).join("");
        coreUnderlyingRealization += theme + "\u0302";
        coreUnderlyingRealization += root[1];
        coreUnderlyingRealization += "а";
        coreUnderlyingRealization += root[2];
        coreUnderlyingRealization += "а";
        coreUnderlyingRealization += root[3];
        coreUnderlyingRealization += affixes.suffixal.map((affix) => affix.replace(/-/g, "")).join("");
        return coreUnderlyingRealization;
      }
    }
  } else if (anatomy.kind === "exceptional") {
    if (anatomy.spelling === "е̂к") {
      return (inflection.sort === "verbal" && inflection.category !== "base") ? "ъе̂ъ" : "ъе̂к";
    } else {
      return EXCEPTIONAL_STEM_UNDERLYING_FORMS.get(anatomy.spelling) ?? "";
    }
  } else {
    anatomy satisfies never;
    throw new Error("cannot occur");
  }
}