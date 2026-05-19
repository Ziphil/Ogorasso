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

export type SubstantiveInflection = {
  type: "substantive",
  category: "base" | "adjective",
  adhesivity: Adhesivity,
  gender: Gender,
  case: Case,
  definiteness: Definiteness
};

export type VerbalInflection = {
  type: "verbal",
  category: "base",
  voice: Voice,
  tense: Tense,
  person: Person,
  gender: Gender
} | {
  type: "verbal",
  category: "participle",
  adhesivity: Adhesivity,
  gender: Gender,
  case: Case,
  definiteness: Definiteness
};