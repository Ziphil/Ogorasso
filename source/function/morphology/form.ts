//

import {Anatomy, Sort} from "../anatomy";
import {surfaceEuphony, surfaceLightSyllables, surfaceMerger, surfaceWeakConsonants} from "../surfacing";
import {isConsonant} from "../surfacing/grapheme";
import {toInflectionSpecifier} from "./function";
import {getInflectionAffixes} from "./inflection";
import {Inflection, InflectionDescriptor} from "./type";


export const EXCEPTIONAL_SURFACE_FORMS = new Map<string, Map<InflectionDescriptor, string>>([
  ["у", new Map<InflectionDescriptor, string>([
    ["substant.base.verbophoric.water.nominative.indefinite", "у"], ["substant.base.verbophoric.fire.nominative.indefinite", "у"],
    ["substant.base.verbophoric.water.accusative.indefinite", "ух"], ["substant.base.verbophoric.fire.accusative.indefinite", "ух"],
    ["substant.base.verbophoric.water.dative.indefinite", "ус"], ["substant.base.verbophoric.fire.dative.indefinite", "ус"],
    ["substant.base.verbophoric.water.ablative.indefinite", "ум"], ["substant.base.verbophoric.fire.ablative.indefinite", "ум"],
    ["substant.base.verbophoric.water.instrumental.indefinite", "ут"], ["substant.base.verbophoric.fire.instrumental.indefinite", "ут"],
    ["substant.base.verbophoric.water.locative.indefinite", "у"], ["substant.base.verbophoric.fire.locative.indefinite", "у"],
    ["substant.base.substophoric.water.nominative.indefinite", "ув"], ["substant.base.substophoric.fire.nominative.indefinite", "ув"],
    ["substant.base.substophoric.water.accusative.indefinite", "увах"], ["substant.base.substophoric.fire.accusative.indefinite", "увах"],
    ["substant.base.substophoric.water.dative.indefinite", "увас"], ["substant.base.substophoric.fire.dative.indefinite", "увас"],
    ["substant.base.substophoric.water.ablative.indefinite", "увам"], ["substant.base.substophoric.fire.ablative.indefinite", "увам"],
    ["substant.base.substophoric.water.instrumental.indefinite", "уват"], ["substant.base.substophoric.fire.instrumental.indefinite", "уват"],
    ["substant.base.substophoric.water.locative.indefinite", "уве"], ["substant.base.substophoric.fire.locative.indefinite", "уве"]
  ])],
  ["ку̂к", new Map<InflectionDescriptor, string>([
    ["substant.base.verbophoric.fire.nominative.indefinite", "ку̂к"],
    ["substant.base.verbophoric.fire.accusative.indefinite", "ко̂к"],
    ["substant.base.verbophoric.fire.dative.indefinite", "ко̂сок"],
    ["substant.base.verbophoric.fire.ablative.indefinite", "ко̂замок"],
    ["substant.base.verbophoric.fire.instrumental.indefinite", "ку̂ток"],
    ["substant.base.verbophoric.fire.locative.indefinite", "ке̂ок"],
    ["substant.base.substophoric.fire.nominative.indefinite", "ко̂вок"],
    ["substant.base.substophoric.fire.accusative.indefinite", "ко̂вахок"],
    ["substant.base.substophoric.fire.dative.indefinite", "ко̂васок"],
    ["substant.base.substophoric.fire.ablative.indefinite", "ко̂взамок"],
    ["substant.base.substophoric.fire.instrumental.indefinite", "ко̂воток"],
    ["substant.base.substophoric.fire.locative.indefinite", "ко̂веок"]
  ])],
  ["ко̂ддео", new Map<InflectionDescriptor, string>([
    ["substant.base.verbophoric.fire.dative.indefinite", "ко̂ддосо"],
    ["substant.base.verbophoric.fire.ablative.indefinite", "ко̂ддозамо"],
    ["substant.base.verbophoric.fire.locative.indefinite", "ко̂ддео"]
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
    if (anatomy.pattern.sort === "verbant") {
      if (anatomy.affixes.suffixal.length > 0) {
        return "substant";
      } else {
        return "verbant";
      }
    } else {
      return "substant";
    }
  } else if (anatomy.kind === "exceptional") {
    if (anatomy.spelling === "е̂к") {
      return "verbant";
    } else {
      return "substant";
    }
  } else {
    anatomy satisfies never;
    throw new Error("cannot happen");
  }
}

function getUnderlyingForm(stemUnderlyingForm: string, anatomy: Anatomy, inflection: Inflection): string {
  const inflectionAffixes = getInflectionAffixes(inflection);
  let underlyingRealization = "";
  underlyingRealization += inflectionAffixes.prefixal.map((affix) => affix.replace(/‧/g, "")).join("");
  underlyingRealization += (hasStemUnderlyingFormInitialGeminate(stemUnderlyingForm) && inflectionAffixes.prefixal.length <= 0) ? "а" : "";
  underlyingRealization += stemUnderlyingForm;
  underlyingRealization += (hasStemUnderlyingFormFinalGeminate(stemUnderlyingForm) && inflectionAffixes.suffixal.length <= 0) ? "е" : "";
  underlyingRealization += inflectionAffixes.suffixal.map((affix) => affix.replace(/‧/g, "")).join("");
  if ("affixes" in anatomy && anatomy.affixes.terminal.length > 0) {
    const last = underlyingRealization[underlyingRealization.length - 1];
    if (last !== "е" && last !== "о" && last !== "а") {
      underlyingRealization += (hasStemUnderlyingFormGenderVowel(inflection)) ? "е" : "а";
    }
    underlyingRealization += anatomy.affixes.terminal.map((affix) => affix.replace(/‧/g, "")).join("");
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
  return ("voice" in inflection && inflection.gender === "water") || ("phoricity" in inflection && inflection.gender === "water" && inflection.case === "nominative" && inflection.phoricity === "verbophoric");
}

/** 例外的な語幹をとる単語 (の辞書形) とその語幹のマップです。
 * е̂к もここに含まれていますが、動形容詞と動名詞においてさらに語幹が変化する現象は `getStemUnderlyingForm` 関数内で個別に対応されています。 */
export const EXCEPTIONAL_STEM_UNDERLYING_FORMS = new Map<string, string>([
  ["ѐ", "ъ"], ["шѐ", "ш"], ["бамѐ", "бам"], ["цѐ", "ц"],
  ["ех", "ъ"], ["шех", "ш"], ["бамех", "бам"], ["цех", "ц"],
  ["хе̂е", "хе̂ъъ"], ["хо̂е", "хо̂ъъ"], ["те̂шше", "те̂шш"], ["бе̂мме", "бе̂мм"], ["и̂цце", "йе̂цц"],
  ["хѐ", "х"], ["тѐ", "т"], ["ѝ", "й"], ["кѐ", "к"], ["фѐ", "ф"], ["аффѐ", "фф"], ["нѐ", "н"], ["аннѐ", "нн"], ["ажжѐ", "жж"],
  ["хе̂с", "хе̂с"], ["те̂с", "те̂с"], ["и̂с", "йе̂с"], ["ке̂с", "ке̂с"], ["фе̂с", "фе̂с"], ["аффе̂с", "ффе̂с"], ["не̂с", "не̂с"], ["анне̂с", "нне̂с"], ["ажже̂с", "жже̂с"],
  ["хо̂с", "хо̂с"], ["то̂с", "то̂с"], ["е̂с", "йо̂с"], ["ко̂с", "ко̂с"], ["фо̂с", "фо̂с"], ["аффо̂с", "ффо̂с"], ["но̂с", "но̂с"], ["анно̂с", "нно̂с"], ["ажжо̂с", "жжо̂с"],
  ["хе̂дде", "хе̂дд"], ["те̂дде", "те̂дд"], ["и̂дде", "йе̂дд"], ["ке̂дде", "ке̂дд"], ["фе̂дде", "фе̂дд"], ["аффе̂дде", "ффе̂дд"], ["не̂дде", "не̂дд"], ["анне̂дде", "нне̂дд"], ["ажже̂дде", "жже̂дд"],
  ["хо̂ддо", "хо̂дд"], ["то̂ддо", "то̂дд"], ["е̂ддо", "йо̂дд"], ["ко̂ддо", "ко̂дд"], ["фо̂ддо", "фо̂дд"], ["аффо̂ддо", "ффо̂дд"], ["но̂ддо", "но̂дд"], ["анно̂ддо", "нно̂дд"], ["ажжо̂ддо", "жжо̂дд"],
  ["хо̂чче", "хо̂чч"], ["то̂чче", "то̂чч"], ["е̂чче", "йо̂чч"], ["ко̂чче", "ко̂чч"], ["фо̂чче", "фо̂чч"], ["аффо̂чче", "ффо̂чч"], ["но̂чче", "но̂чч"], ["анно̂чче", "нно̂чч"], ["ажжо̂чче", "жжо̂чч"],
  ["е̂к", "ъе̂к"]
]);

/** 曲用として短形をとる単語 (の辞書形) です。
 * 人称代体言のみが該当します。
 * 辞書では、人称代体言は短形と前置形が同じエントリーになっており、辞書形として前置形の方が採用されているため、ここでも前置形が格納されています。 */
export const EXCEPTIONAL_SHORTS = new Set([
  "ѐ", "шѐ", "бамѐ", "цѐ"
]);

/** 活用接辞のない語幹部分の基層形を計算します。
 * 語幹頭もしくは語幹末が重子音の場合でも、緩衝母音の а や е は付与されません (これは `getUnderlyingForm` 関数で付加される)。
 * また、語末型語型接辞は無視されます (これは活用接辞として扱って `getUnderlyingForm` 関数で追加する)。 */
function getStemUnderlyingForm(anatomy: Anatomy, inflection: Inflection): string {
  if (anatomy.kind === "simplex") {
    const {root, pattern, theme, affixes} = anatomy;
    if (root.length === 3) {
      if (pattern.sort === "verbant") {
        let coreUnderlyingRealization = "";
        coreUnderlyingRealization += affixes.prefixal.map((affix) => affix.replace(/‧/g, "")).join("");
        coreUnderlyingRealization += (pattern.type === "doubleInitial") ? root[0] + root[0] : root[0];
        coreUnderlyingRealization += "а";
        coreUnderlyingRealization += (pattern.type === "doubleMedial") ? root[1] + root[1] : root[1];
        coreUnderlyingRealization += affixes.infixal.map((affix) => affix.replace(/‧/g, "")).join("");
        coreUnderlyingRealization += theme + "\u0302";
        coreUnderlyingRealization += (pattern.type === "doubleFinal") ? root[2] + root[2] : root[2];
        coreUnderlyingRealization += affixes.suffixal.map((affix) => affix.replace(/‧/g, "")).join("");
        return coreUnderlyingRealization;
      } else if (pattern.sort === "substant") {
        let coreUnderlyingRealization = "";
        coreUnderlyingRealization += affixes.prefixal.map((affix) => affix.replace(/‧/g, "")).join("");
        coreUnderlyingRealization += (pattern.type === "doubleInitial") ? root[0] + root[0] : root[0];
        coreUnderlyingRealization += affixes.infixal.map((affix) => affix.replace(/‧/g, "")).join("");
        coreUnderlyingRealization += theme + "\u0302";
        coreUnderlyingRealization += (pattern.type === "doubleMedial") ? root[1] + root[1] : root[1];
        coreUnderlyingRealization += "а";
        coreUnderlyingRealization += (pattern.type === "doubleFinal") ? root[2] + root[2] : root[2];
        coreUnderlyingRealization += affixes.suffixal.map((affix) => affix.replace(/‧/g, "")).join("");
        return coreUnderlyingRealization;
      } else {
        pattern satisfies never;
        throw new Error("cannot happen");
      }
    } else {
      if (pattern.sort === "verbant") {
        let coreUnderlyingRealization = "";
        coreUnderlyingRealization += affixes.prefixal.map((affix) => affix.replace(/‧/g, "")).join("");
        coreUnderlyingRealization += root[0];
        coreUnderlyingRealization += "а";
        coreUnderlyingRealization += root[1];
        coreUnderlyingRealization += "а";
        coreUnderlyingRealization += root[2];
        coreUnderlyingRealization += affixes.infixal.map((affix) => affix.replace(/‧/g, "")).join("");
        coreUnderlyingRealization += theme + "\u0302";
        coreUnderlyingRealization += root[3];
        coreUnderlyingRealization += affixes.suffixal.map((affix) => affix.replace(/‧/g, "")).join("");
        return coreUnderlyingRealization;
      } else if (pattern.sort === "substant") {
        let coreUnderlyingRealization = "";
        coreUnderlyingRealization += affixes.prefixal.map((affix) => affix.replace(/‧/g, "")).join("");
        coreUnderlyingRealization += root[0];
        coreUnderlyingRealization += affixes.infixal.map((affix) => affix.replace(/‧/g, "")).join("");
        coreUnderlyingRealization += theme + "\u0302";
        coreUnderlyingRealization += root[1];
        coreUnderlyingRealization += "а";
        coreUnderlyingRealization += root[2];
        coreUnderlyingRealization += "а";
        coreUnderlyingRealization += root[3];
        coreUnderlyingRealization += affixes.suffixal.map((affix) => affix.replace(/‧/g, "")).join("");
        return coreUnderlyingRealization;
      } else {
        pattern satisfies never;
        throw new Error("cannot happen");
      }
    }
  } else if (anatomy.kind === "exceptional") {
    if (anatomy.spelling === "е̂к") {
      return (inflection.sort === "verbant" && inflection.category !== "base") ? "ъе̂ъ" : "ъе̂к";
    } else {
      return EXCEPTIONAL_STEM_UNDERLYING_FORMS.get(anatomy.spelling) ?? "";
    }
  } else {
    anatomy satisfies never;
    throw new Error("cannot happen");
  }
}