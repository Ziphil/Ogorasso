//

import {isTruthy} from "../../util/misc";
import {Affixes} from "../anatomy";
import {AdverbType, Case, Definiteness, Gender, Inflection, Person, Phoricity, Tense, Voice} from "./type";


export type InflectionAffixes = Pick<Affixes, "prefixal" | "suffixal">;

export function getInflectionAffixes(inflection: Inflection): InflectionAffixes {
  if (inflection.sort === "substant") {
    if (inflection.category === "base" || inflection.category === "adjective") {
      const baseAffixes = getSubstantBaseInflectionAffixes(inflection);
      const categoryAffixes = getCategoryInflectionAffixes(inflection.category);
      return {
        prefixal: [...categoryAffixes.prefixal, ...baseAffixes.prefixal],
        suffixal: [...categoryAffixes.suffixal, ...baseAffixes.suffixal]
      };
    } else if (inflection.category === "adverb") {
      const adverbAffixes = getSubstantAdverbInflectionAffixes(inflection);
      return {
        prefixal: adverbAffixes.prefixal,
        suffixal: adverbAffixes.suffixal
      };
    } else if (inflection.category === "prepositional") {
      const adpredicativeAffixes = getSubstantPrepositionalInflectionAffixes(inflection);
      return {
        prefixal: adpredicativeAffixes.prefixal,
        suffixal: adpredicativeAffixes.suffixal
      };
    } else {
      inflection.category satisfies never;
      throw new Error("cannot happen");
    }
  } else {
    if (inflection.category === "base") {
      const baseAffixes = getVerbantBaseInflectionAffixes(inflection);
      return {
        prefixal: baseAffixes.prefixal,
        suffixal: baseAffixes.suffixal
      };
    } else if (inflection.category === "adjective" || inflection.category === "noun") {
      const baseAffixes = getSubstantBaseInflectionAffixes(inflection);
      const categoryAffixes = getCategoryInflectionAffixes(inflection.category);
      return {
        prefixal: [...categoryAffixes.prefixal, ...baseAffixes.prefixal],
        suffixal: [...categoryAffixes.suffixal, ...baseAffixes.suffixal]
      };
    } else {
      inflection.category satisfies never;
      throw new Error("cannot happen");
    }
  }
}

const SUBSTANT_INFLECTION_PREFIXES = new Map<`${Definiteness}.${Gender}`, string>([
  ["indefinite.water", ""], ["indefinite.fire", ""],
  ["definite.water", "ле‧"], ["definite.fire", "ло‧"]
]);
const SUBSTANT_INFLECTION_SUFFIXES = new Map<`${Phoricity}.${Gender}.${Case}`, string>([
  ["verbophoric.water.nominative", ""], ["verbophoric.fire.nominative", "‧о"],
  ["verbophoric.water.accusative", "‧а"], ["verbophoric.fire.accusative", "‧а"],
  ["verbophoric.water.dative", "‧еҫ"], ["verbophoric.fire.dative", "‧оҫ"],
  ["verbophoric.water.ablative", "‧еӟам"], ["verbophoric.fire.ablative", "‧оӟам"],
  ["verbophoric.water.instrumental", "‧еўат"], ["verbophoric.fire.instrumental", "‧оўат"],
  ["verbophoric.water.locative", "‧ей"], ["verbophoric.fire.locative", "‧ой"],
  ["substophoric.water.nominative", "‧ев"], ["substophoric.fire.nominative", "‧ов"],
  ["substophoric.water.accusative", "‧евах"], ["substophoric.fire.accusative", "‧овах"],
  ["substophoric.water.dative", "‧еваҫ"], ["substophoric.fire.dative", "‧оваҫ"],
  ["substophoric.water.ablative", "‧еваӟам"], ["substophoric.fire.ablative", "‧оваӟам"],
  ["substophoric.water.instrumental", "‧еваўат"], ["substophoric.fire.instrumental", "‧оваўат"],
  ["substophoric.water.locative", "‧евай"], ["substophoric.fire.locative", "‧овай"]
]);
const SUBSTANT_SHORT_INFLECTION_SUFFIXES = new Map<`${Phoricity}.${Gender}.${Case}`, string>([
  ["verbophoric.water.nominative", ""], ["verbophoric.fire.nominative", "‧о"],
  ["verbophoric.water.accusative", "‧ех"], ["verbophoric.fire.accusative", "‧ох"],
  ["verbophoric.water.dative", "‧еҫ"], ["verbophoric.fire.dative", "‧оҫ"],
  ["verbophoric.water.ablative", "‧ем"], ["verbophoric.fire.ablative", "‧ом"],
  ["verbophoric.water.instrumental", "‧ет"], ["verbophoric.fire.instrumental", "‧от"],
  ["verbophoric.water.locative", "‧ей"], ["verbophoric.fire.locative", "‧ой"],
  ["substophoric.water.nominative", "‧ев"], ["substophoric.fire.nominative", "‧ов"],
  ["substophoric.water.accusative", "‧евах"], ["substophoric.fire.accusative", "‧овах"],
  ["substophoric.water.dative", "‧еваҫ"], ["substophoric.fire.dative", "‧оваҫ"],
  ["substophoric.water.ablative", "‧евам"], ["substophoric.fire.ablative", "‧овам"],
  ["substophoric.water.instrumental", "‧еват"], ["substophoric.fire.instrumental", "‧оват"],
  ["substophoric.water.locative", "‧евай"], ["substophoric.fire.locative", "‧овай"]
]);
const ADVERB_INFLECTION_SUFFIXES = new Map<`${AdverbType}`, string>([
  ["simple", "‧о̀ӈ"], ["k", "‧о̀ўак"]
]);
const PREPOSITIONAL_INFLECTION_SUFFIXES = new Map<`${Gender}`, string>([
  ["water", "‧ѐ"], ["fire", "‧о̀"]
]);

export function getSubstantBaseInflectionAffixes(inflection: {voice?: Voice, phoricity: Phoricity, gender: Gender, case: Case, definiteness: Definiteness, short?: boolean}): InflectionAffixes {
  const prefixal = [
    SUBSTANT_INFLECTION_PREFIXES.get(`${inflection.definiteness}.${inflection.gender}`),
    (inflection.voice !== undefined) ? VOICE_INFLECTION_PREFIXES.get(inflection.voice) : undefined
  ].filter(isTruthy);
  const suffixal = [
    ((inflection.short) ? SUBSTANT_SHORT_INFLECTION_SUFFIXES : SUBSTANT_INFLECTION_SUFFIXES).get(`${inflection.phoricity}.${inflection.gender}.${inflection.case}`)
  ].filter(isTruthy);
  return {prefixal, suffixal};
}

export function getSubstantAdverbInflectionAffixes(inflection: {type: AdverbType}): InflectionAffixes {
  const suffixal = [
    ADVERB_INFLECTION_SUFFIXES.get(inflection.type)
  ].filter(isTruthy);
  return {prefixal: [], suffixal};
}

export function getSubstantPrepositionalInflectionAffixes(inflection: {gender: Gender}): InflectionAffixes {
  const suffixal = [
    PREPOSITIONAL_INFLECTION_SUFFIXES.get(inflection.gender)
  ].filter(isTruthy);
  return {prefixal: [], suffixal};
}

const VOICE_INFLECTION_PREFIXES = new Map<`${Voice}`, string>([
  ["active", ""], ["passive", "до̀‧"]
]);
const TENSE_INFLECTION_SUFFIXES = new Map<`${Tense}`, string>([
  ["present", ""], ["past", "‧ан"]
]);
const PERSON_INFLECTION_PREFIXES = new Map<`${Person}.${Gender}`, string>([
  ["thirdDefinite.water", ""], ["thirdDefinite.fire", ""],
  ["thirdIndefinite.water", "ъа‧"], ["thirdIndefinite.fire", "ъа‧"],
  ["second.water", "те‧"], ["second.fire", "то‧"],
  ["firstPlural.water", "баме‧"], ["firstPlural.fire", "бамо‧"],
  ["firstSingular.water", "йе‧"], ["firstSingular.fire", "йо‧"]
]);
const GENDER_INFLECTION_SUFFIXES = new Map<`${Gender}`, string>([
  ["water", ""], ["fire", "‧о"]
]);

export function getVerbantBaseInflectionAffixes(inflection: {voice: Voice, tense: Tense, person: Person, gender: Gender}): InflectionAffixes {
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
    return {prefixal: [], suffixal: ["‧ар"]};
  } else if (category === "noun") {
    return {prefixal: [], suffixal: ["‧ал"]};
  } else {
    return {prefixal: [], suffixal: []};
  }
}
