//

import {Inflection, InflectionDescriptor} from "./type";


export function toInflectionSpecifier(inflection: Inflection): InflectionDescriptor {
  if (inflection.sort === "substant") {
    if (inflection.category === "base" || inflection.category === "adjective") {
      return `substant.${inflection.category}.${inflection.phoricity}.${inflection.gender}.${inflection.case}.${inflection.definiteness}`;
    } else if (inflection.category === "adverb") {
      return `substant.adverb.${inflection.type}`;
    } else if (inflection.category === "prepositional") {
      return `substant.prepositional.${inflection.gender}`;
    } else {
      inflection.category satisfies never;
      throw new Error("cannot occur");
    }
  } else if (inflection.sort === "verbant") {
    if (inflection.category === "base") {
      return `verbant.base.${inflection.voice}.${inflection.tense}.${inflection.person}.${inflection.gender}`;
    } else if (inflection.category === "adjective" || inflection.category === "noun") {
      return `verbant.${inflection.category}.${inflection.voice}.${inflection.phoricity}.${inflection.gender}.${inflection.case}.${inflection.definiteness}`;
    } else {
      inflection.category satisfies never;
      throw new Error("cannot occur");
    }
  } else {
    inflection satisfies never;
    throw new Error("cannot occur");
  }
}