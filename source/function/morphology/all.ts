//

import {Anatomy} from "../anatomy";
import {getForm, getInflectionSort} from "./form";
import {
  ADHESIVITIES,
  ADVERB_TYPES,
  CASES,
  DEFINITENESSES,
  GENDERS,
  PERSONS,
  SubstantiveInflectionSpecifier,
  TENSES,
  VOICES,
  VerbalInflectionSpecifier
} from "./type";


export function getAllForms(anatomy: Anatomy): Record<SubstantiveInflectionSpecifier, string> | Record<VerbalInflectionSpecifier, string> {
  const sort = getInflectionSort(anatomy);
  if (sort === "substantive") {
    const forms = {} as Record<SubstantiveInflectionSpecifier, string>;
    for (const category of ["base", "adjective"] as const) {
      for (const adhesivity of ADHESIVITIES) {
        for (const gender of GENDERS) {
          for (const caze of CASES) {
            for (const definiteness of DEFINITENESSES) {
              const inflection = {sort, category, adhesivity, gender, case: caze, definiteness};
              const form = getForm(anatomy, inflection);
              forms[`${sort}.${category}.${adhesivity}.${gender}.${caze}.${definiteness}`] = form;
            }
          }
        }
      }
    }
    for (const category of ["adverb"] as const) {
      for (const type of ADVERB_TYPES) {
        const inflection = {sort, category, type};
        const form = getForm(anatomy, inflection);
        forms[`${sort}.${category}.${type}`] = form;
      }
    }
    for (const category of ["prepositional"] as const) {
      for (const gender of GENDERS) {
        const inflection = {sort, category, gender};
        const form = getForm(anatomy, inflection);
        forms[`${sort}.${category}.${gender}`] = form;
      }
    }
    return forms;
  } else {
    const forms = {} as Record<VerbalInflectionSpecifier, string>;
    for (const category of ["base"] as const) {
      for (const voice of VOICES) {
        for (const tense of TENSES) {
          for (const person of PERSONS) {
            for (const gender of GENDERS) {
              const inflection = {sort, category, voice, tense, person, gender};
              const form = getForm(anatomy, inflection);
              forms[`${sort}.${category}.${voice}.${tense}.${person}.${gender}`] = form;
            }
          }
        }
      }
    }
    for (const category of ["adjective", "noun"] as const) {
      for (const adhesivity of ADHESIVITIES) {
        for (const gender of GENDERS) {
          for (const caze of CASES) {
            for (const definiteness of DEFINITENESSES) {
              const inflection = {sort, category, adhesivity, gender, case: caze, definiteness} as const;
              const form = getForm(anatomy, inflection);
              forms[`${sort}.${category}.${adhesivity}.${gender}.${caze}.${definiteness}`] = form;
            }
          }
        }
      }
    }
    return forms;
  }
}
