//

import {Adhesivity, AdverbType, Case, Definiteness, Gender, Inflection, Person, Tense, Voice} from "../type";
import {isTruthy} from "../util/misc";


export type InflectionAffixes = {
  prefixal: ReadonlyArray<string>,
  suffixal: ReadonlyArray<string>
};

export function getInflectionAffixes(inflection: Inflection): InflectionAffixes {
  if (inflection.sort === "substantive") {
    if (inflection.category === "base" || inflection.category === "adjective") {
      const baseAffixes = getSubstantiveBaseInflectionAffixes(inflection);
      const categoryAffixes = getCategoryInflectionAffixes(inflection.category);
      return {
        prefixal: [...categoryAffixes.prefixal, ...baseAffixes.prefixal],
        suffixal: [...categoryAffixes.suffixal, ...baseAffixes.suffixal]
      };
    } else if (inflection.category === "adverb") {
      const adverbAffixes = getSubstantiveAdverbInflectionAffixes(inflection);
      return {
        prefixal: adverbAffixes.prefixal,
        suffixal: adverbAffixes.suffixal
      };
    } else {
      const adpredicativeAffixes = getSubstantiveAdpredicativeInflectionAffixes(inflection);
      return {
        prefixal: adpredicativeAffixes.prefixal,
        suffixal: adpredicativeAffixes.suffixal
      };
    }
  } else {
    if (inflection.category === "base") {
      const baseAffixes = getVerbalBaseInflectionAffixes(inflection);
      return {
        prefixal: baseAffixes.prefixal,
        suffixal: baseAffixes.suffixal
      };
    } else {
      const baseAffixes = getSubstantiveBaseInflectionAffixes(inflection);
      const categoryAffixes = getCategoryInflectionAffixes(inflection.category);
      return {
        prefixal: [...categoryAffixes.prefixal, ...baseAffixes.prefixal],
        suffixal: [...categoryAffixes.suffixal, ...baseAffixes.suffixal]
      };
    }
  }
}

const SUBSTANTIVE_INFLECTION_PREFIXES = new Map<`${Definiteness}.${Gender}`, string>([
  ["indefinite.water", ""], ["indefinite.fire", ""],
  ["definite.water", "ле"], ["definite.fire", "ло"]
]);
const SUBSTANTIVE_INFLECTION_SUFFIXES = new Map<`${Adhesivity}.${Gender}.${Case}`, string>([
  ["adverbial.water.nominative", ""], ["adverbial.fire.nominative", "о"],
  ["adverbial.water.accusative", "а"], ["adverbial.fire.accusative", "а"],
  ["adverbial.water.dative", "еҫ"], ["adverbial.fire.dative", "оҫ"],
  ["adverbial.water.ablative", "еӟам"], ["adverbial.fire.ablative", "оӟам"],
  ["adverbial.water.instrumental", "еўат"], ["adverbial.fire.instrumental", "оўат"],
  ["adverbial.water.locative", "ей"], ["adverbial.fire.locative", "ой"],
  ["adjectival.water.nominative", "ев"], ["adjectival.fire.nominative", "ов"],
  ["adjectival.water.accusative", "евах"], ["adjectival.fire.accusative", "овах"],
  ["adjectival.water.dative", "еваҫ"], ["adjectival.fire.dative", "оваҫ"],
  ["adjectival.water.ablative", "еваӟам"], ["adjectival.fire.ablative", "оваӟам"],
  ["adjectival.water.instrumental", "еваўат"], ["adjectival.fire.instrumental", "оваўат"],
  ["adjectival.water.locative", "евай"], ["adjectival.fire.locative", "овай"]
]);
const ADVERB_INFLECTION_SUFFIXES = new Map<`${AdverbType}`, string>([
  ["simple", "о̀ӈ"], ["k", "о̀ўак"]
]);
const ADPREDICATIVE_INFLECTION_SUFFIXES = new Map<`${Gender}`, string>([
  ["water", "ѐ"], ["fire", "о̀"]
]);

export function getSubstantiveBaseInflectionAffixes(inflection: {adhesivity: Adhesivity, gender: Gender, case: Case, definiteness: Definiteness}): InflectionAffixes {
  const prefixal = [
    SUBSTANTIVE_INFLECTION_PREFIXES.get(`${inflection.definiteness}.${inflection.gender}`)
  ].filter(isTruthy);
  const suffixal = [
    SUBSTANTIVE_INFLECTION_SUFFIXES.get(`${inflection.adhesivity}.${inflection.gender}.${inflection.case}`)
  ].filter(isTruthy);
  return {prefixal, suffixal};
}

export function getSubstantiveAdverbInflectionAffixes(inflection: {type: AdverbType}): InflectionAffixes {
  const suffixal = [
    ADVERB_INFLECTION_SUFFIXES.get(inflection.type)
  ].filter(isTruthy);
  return {prefixal: [], suffixal};
}

export function getSubstantiveAdpredicativeInflectionAffixes(inflection: {gender: Gender}): InflectionAffixes {
  const suffixal = [
    ADPREDICATIVE_INFLECTION_SUFFIXES.get(inflection.gender)
  ].filter(isTruthy);
  return {prefixal: [], suffixal};
}

const VOICE_INFLECTION_PREFIXES = new Map<`${Voice}`, string>([
  ["active", ""], ["passive", "до̀"]
]);
const TENSE_INFLECTION_SUFFIXES = new Map<`${Tense}`, string>([
  ["present", ""], ["past", "ан"]
]);
const PERSON_INFLECTION_PREFIXES = new Map<`${Person}.${Gender}`, string>([
  ["thirdDefinite.water", ""], ["thirdDefinite.fire", ""],
  ["thirdIndefinite.water", "ъа"], ["thirdIndefinite.fire", "ъа"],
  ["second.water", "те"], ["second.fire", "то"],
  ["firstPlural.water", "баме"], ["firstPlural.fire", "бамо"],
  ["firstSingular.water", "йе"], ["firstSingular.fire", "йо"]
]);
const GENDER_INFLECTION_SUFFIXES = new Map<`${Gender}`, string>([
  ["water", ""], ["fire", "о"]
]);

export function getVerbalBaseInflectionAffixes(inflection: {voice: Voice, tense: Tense, person: Person, gender: Gender}): InflectionAffixes {
  const prefixal = [
    PERSON_INFLECTION_PREFIXES.get(`${inflection.person}.${inflection.gender}`),
    VOICE_INFLECTION_PREFIXES.get(inflection.voice)
  ].filter(isTruthy);
  const suffixal = [
    TENSE_INFLECTION_SUFFIXES.get(inflection.tense),
    GENDER_INFLECTION_SUFFIXES.get(inflection.gender)
  ].filter(isTruthy);
  return {prefixal, suffixal};
}

export function getCategoryInflectionAffixes(category: Inflection["category"]): InflectionAffixes {
  if (category === "adjective") {
    return {prefixal: [], suffixal: ["ар"]};
  } else if (category === "noun") {
    return {prefixal: [], suffixal: ["ал"]};
  } else {
    return {prefixal: [], suffixal: []};
  }
}
