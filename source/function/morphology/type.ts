//


export const PHORICITIES = ["verbophoric", "substophoric"] as const;
export type Phoricity = (typeof PHORICITIES)[number];

export const GENDERS = ["water", "fire"] as const;
export type Gender = (typeof GENDERS)[number];

export const CASES = ["nominative", "accusative", "dative", "ablative", "instrumental", "locative"] as const;
export type Case = (typeof CASES)[number];

export const DEFINITENESSES = ["definite", "indefinite"] as const;
export type Definiteness = (typeof DEFINITENESSES)[number];

export const VOICES = ["active", "passive"] as const;
export type Voice = (typeof VOICES)[number];

export const TENSES = ["present", "past"] as const;
export type Tense = (typeof TENSES)[number];

export const PERSONS = ["thirdDefinite", "thirdIndefinite", "second", "firstPlural", "firstSingular"] as const;
export type Person = (typeof PERSONS)[number];

export const ADVERB_TYPES = ["simple", "k"] as const;
export type AdverbType = (typeof ADVERB_TYPES)[number];

export type SubstantInflection = {
  sort: "substant",
  category: "base" | "adjective",
  phoricity: Phoricity,
  gender: Gender,
  case: Case,
  definiteness: Definiteness,
  short?: boolean
} | {
  sort: "substant",
  category: "adverb",
  type: AdverbType
} | {
  sort: "substant",
  category: "prepositional",
  gender: Gender
};
export type substantInflectionDescriptor =
  `substant.${"base" | "adjective"}.${Phoricity}.${Gender}.${Case}.${Definiteness}` |
  `substant.${"adverb"}.${AdverbType}` |
  `substant.${"prepositional"}.${Gender}`;

export type VerbantInflection = {
  sort: "verbant",
  category: "base",
  voice: Voice,
  tense: Tense,
  person: Person,
  gender: Gender
} | {
  sort: "verbant",
  category: "noun" | "adjective",
  voice: Voice,
  phoricity: Phoricity,
  gender: Gender,
  case: Case,
  definiteness: Definiteness
};
export type VerbantInflectionDescriptor =
  `verbant.${"base"}.${Voice}.${Tense}.${Person}.${Gender}` |
  `verbant.${"noun" | "adjective"}.${Voice}.${Phoricity}.${Gender}.${Case}.${Definiteness}`;

export type Inflection = VerbantInflection | SubstantInflection;
export type InflectionDescriptor = VerbantInflectionDescriptor | substantInflectionDescriptor;