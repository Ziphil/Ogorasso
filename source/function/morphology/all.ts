//

import {Anatomy} from "../anatomy";
import {EXCEPTIONAL_SHORTS, getForm, getInflectionSort} from "./form";
import {toInflectionSpecifier} from "./function";
import {
  ADHESIVITIES,
  ADVERB_TYPES,
  CASES,
  DEFINITENESSES,
  GENDERS,
  InflectionDescriptor,
  PERSONS,
  SubstantiveInflection,
  TENSES,
  VOICES,
  VerbalInflection
} from "./type";


export function getAllPossibleInflections(anatomy: Anatomy): Array<SubstantiveInflection> | Array<VerbalInflection> {
  const sort = getInflectionSort(anatomy);
  if (sort === "substantive") {
    const inflections = [] as Array<SubstantiveInflection>;
    for (const category of ["base", "adjective"] as const) {
      for (const adhesivity of ADHESIVITIES) {
        for (const gender of GENDERS) {
          for (const caze of CASES) {
            for (const definiteness of DEFINITENESSES) {
              const short = anatomy.kind === "exceptional" && EXCEPTIONAL_SHORTS.has(anatomy.spelling);
              const inflection = {sort, category, adhesivity, gender, case: caze, definiteness, short};
              inflections.push(inflection);
            }
          }
        }
      }
    }
    for (const category of ["adverb"] as const) {
      for (const type of ADVERB_TYPES) {
        const inflection = {sort, category, type};
        inflections.push(inflection);
      }
    }
    for (const category of ["prepositional"] as const) {
      for (const gender of GENDERS) {
        const inflection = {sort, category, gender};
        inflections.push(inflection);
      }
    }
    return inflections;
  } else {
    const inflections = [] as Array<VerbalInflection>;
    for (const category of ["base"] as const) {
      for (const voice of VOICES) {
        for (const tense of TENSES) {
          for (const person of PERSONS) {
            for (const gender of GENDERS) {
              const inflection = {sort, category, voice, tense, person, gender};
              inflections.push(inflection);
            }
          }
        }
      }
    }
    for (const category of ["adjective", "noun"] as const) {
      for (const voice of VOICES) {
        for (const adhesivity of ADHESIVITIES) {
          for (const gender of GENDERS) {
            for (const caze of CASES) {
              for (const definiteness of DEFINITENESSES) {
                const inflection = {sort, category, voice, adhesivity, gender, case: caze, definiteness} as const;
                inflections.push(inflection);
              }
            }
          }
        }
      }
    }
    return inflections;
  }
}

export function getAllPossibleForms(anatomy: Anatomy): Record<InflectionDescriptor, string | undefined> {
  const inflections = getAllPossibleInflections(anatomy);
  const forms = {} as Record<InflectionDescriptor, string | undefined>;
  for (const inflection of inflections) {
    const form = getForm(anatomy, inflection);
    forms[toInflectionSpecifier(inflection)] = form;
  }
  return forms;
}
