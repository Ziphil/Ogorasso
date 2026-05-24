//

import {Inflection, InflectionSpecifier} from "./type";


export function toInflectionSpecifier(inflection: Inflection): InflectionSpecifier {
  if (inflection.sort === "substantive") {
    if (inflection.category === "base" || inflection.category === "adjective") {
      return `substantive.${inflection.category}.${inflection.adhesivity}.${inflection.gender}.${inflection.case}.${inflection.definiteness}`;
    } else if (inflection.category === "adverb") {
      return `substantive.adverb.${inflection.type}`;
    } else if (inflection.category === "prepositional") {
      return `substantive.prepositional.${inflection.gender}`;
    } else {
      inflection.category satisfies never;
      throw new Error("cannot occur");
    }
  } else if (inflection.sort === "verbal") {
    if (inflection.category === "base") {
      return `verbal.base.${inflection.voice}.${inflection.tense}.${inflection.person}.${inflection.gender}`;
    } else if (inflection.category === "adjective" || inflection.category === "noun") {
      return `verbal.${inflection.category}.${inflection.voice}.${inflection.adhesivity}.${inflection.gender}.${inflection.case}.${inflection.definiteness}`;
    } else {
      inflection.category satisfies never;
      throw new Error("cannot occur");
    }
  } else {
    inflection satisfies never;
    throw new Error("cannot occur");
  }
}