//


export const ADHESIVITIES = ["adverbial", "adjectival"] as const;
export type Adhesivity = (typeof ADHESIVITIES)[number];

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

export type SubstantiveInflection = {
  sort: "substantive",
  category: "base" | "adjective",
  adhesivity: Adhesivity,
  gender: Gender,
  case: Case,
  definiteness: Definiteness,
  short?: boolean
} | {
  sort: "substantive",
  category: "adverb",
  type: AdverbType
} | {
  sort: "substantive",
  category: "prepositional",
  gender: Gender
};
export type SubstantiveInflectionSpecifier =
  `substantive.${"base" | "adjective"}.${Adhesivity}.${Gender}.${Case}.${Definiteness}` |
  `substantive.${"adverb"}.${AdverbType}` |
  `substantive.${"prepositional"}.${Gender}`;

export type VerbalInflection = {
  sort: "verbal",
  category: "base",
  voice: Voice,
  tense: Tense,
  person: Person,
  gender: Gender
} | {
  sort: "verbal",
  category: "noun" | "adjective",
  voice: Voice,
  adhesivity: Adhesivity,
  gender: Gender,
  case: Case,
  definiteness: Definiteness
};
export type VerbalInflectionSpecifier =
  `verbal.${"base"}.${Voice}.${Tense}.${Person}.${Gender}` |
  `verbal.${"noun" | "adjective"}.${Voice}.${Adhesivity}.${Gender}.${Case}.${Definiteness}`;

export type Inflection = VerbalInflection | SubstantiveInflection;
export type InflectionSpecifier = VerbalInflectionSpecifier | SubstantiveInflectionSpecifier;