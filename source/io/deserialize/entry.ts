//

import {
  AffixEntry,
  Entry,
  Equivalent,
  Information,
  PatternEntry,
  Phrase,
  Relation,
  RootEntry,
  Section,
  ThemeEntry,
  Word
} from "../../type";
import {
  checkAffixSpelling,
  checkAnatomySection,
  checkPatternSpelling,
  checkRootSpelling,
  checkThemeSpelling,
  extractAffixSpelling,
  extractOldSpellings,
  extractPatternSpelling,
  extractRadicals,
  extractSeparatedSpellings,
  extractThemeSpelling,
  parseAnatomy
} from "./anatomy";


/** ZpDIC Online API (v1) から返される単語エントリーを、このライブラリが提供するクラスのインスタンスに変換します。 */
export function deserializeEntry(rawEntry: any): Entry {
  const rawSpelling = rawEntry["spelling"] as string;
  if (checkRootSpelling(rawSpelling)) {
    return deserializeRoot(rawEntry);
  } else if (checkThemeSpelling(rawSpelling)) {
    return deserializeTheme(rawEntry);
  } else if (checkAffixSpelling(rawSpelling)) {
    return deserializeAffix(rawEntry);
  } else if (checkPatternSpelling(rawSpelling)) {
    return deserializePattern(rawEntry);
  } else {
    return deserializeWord(rawEntry);
  }
}

export function deserializeWord(rawEntry: any): Word {
  const rawSections = rawEntry["sections"] as Array<any>;
  const lastRawSection = rawSections[rawSections.length - 1];
  const concreteRawSections = (lastRawSection !== undefined && checkAnatomySection(lastRawSection)) ? rawSections.slice(0, -1) : rawSections;
  const rawAnatomyRelations = (lastRawSection !== undefined && checkAnatomySection(lastRawSection)) ? lastRawSection["relations"] as Array<any> : null;
  const word = new Word({
    number: +rawEntry["number"],
    spelling: rawEntry["spelling"],
    anatomy: (rawAnatomyRelations !== null) ? parseAnatomy(rawEntry["spelling"], rawAnatomyRelations) : null,
    sections: concreteRawSections.map(deserializeSection),
    origin: (rawEntry["tags"].includes("借用語")) ? "loan" : (rawEntry["tags"].includes("外来語")) ? "foreign" : "proper",
    oldSpellings: (lastRawSection !== undefined && rawAnatomyRelations !== null) ? extractOldSpellings(lastRawSection) : [],
    separatedSpellings: (lastRawSection !== undefined && rawAnatomyRelations !== null) ? extractSeparatedSpellings(lastRawSection) : []
  });
  return word;
}

export function deserializeRoot(rawEntry: any): RootEntry {
  const radicals = extractRadicals(rawEntry["spelling"]);
  if (radicals !== null) {
    const rawSections = rawEntry["sections"] as Array<any>;
    const root = new RootEntry({
      number: +rawEntry["number"],
      root: radicals,
      sections: rawSections.map(deserializeSection),
      origin: (rawEntry["tags"].includes("借用語")) ? "loan" : (rawEntry["tags"].includes("外来語")) ? "foreign" : "proper"
    });
    return root;
  } else {
    throw new Error("invalid root entry");
  }
}

export function deserializePattern(rawEntry: any): PatternEntry {
  const spelling = extractPatternSpelling(rawEntry["spelling"]);
  if (spelling !== null) {
    const pattern = new PatternEntry({
      number: +rawEntry["number"],
      spelling
    });
    return pattern;
  } else {
    throw new Error("invalid pattern entry");
  }
}

export function deserializeAffix(rawEntry: any): AffixEntry {
  const spelling = extractAffixSpelling(rawEntry["spelling"]);
  if (spelling !== null) {
    const rawSections = rawEntry["sections"] as Array<any>;
    const affix = new AffixEntry({
      number: +rawEntry["number"],
      spelling,
      sections: rawSections.map(deserializeSection)
    });
    return affix;
  } else {
    throw new Error("invalid affix entry");
  }
}

export function deserializeTheme(rawEntry: any): ThemeEntry {
  const spelling = extractThemeSpelling(rawEntry["spelling"]);
  if (spelling !== null) {
    const theme = new ThemeEntry({
      number: +rawEntry["number"],
      spelling
    });
    return theme;
  } else {
    throw new Error("invalid theme entry");
  }
}

export function deserializeSection(rawSection: any): Section {
  const rawRelations = rawSection["relations"] as Array<any>;
  const section = {
    equivalents: rawSection["equivalents"].map(deserializeEquivalent),
    information: rawSection["informations"].map(deserializeInformation),
    phrases: rawSection["phrases"].map(deserializePhrase),
    relations: rawRelations.filter((rawRelation) => !rawRelation["spelling"].includes("√") && !rawRelation["spelling"].includes("‹")).map(deserializeRelation)
  } satisfies Section;
  return section;
}

export function deserializeEquivalent(rawEquivalent: any): Equivalent {
  const equivalent = {
    titles: rawEquivalent["titles"],
    terms: rawEquivalent["terms"],
    termString: rawEquivalent["termString"],
    hidden: rawEquivalent["hidden"]
  } satisfies Equivalent;
  return equivalent;
}

export function deserializeInformation(rawInformation: any): Information {
  const information = {
    title: rawInformation["title"],
    text: rawInformation["text"],
    hidden: rawInformation["hidden"]
  } satisfies Information;
  return information;
}

export function deserializePhrase(rawPhrase: any): Phrase {
  const phrase = {
    spelling: rawPhrase["form"],
    terms: rawPhrase["terms"],
    termString: rawPhrase["termString"]
  } satisfies Phrase;
  return phrase;
}

export function deserializeRelation(rawRelation: any): Relation {
  const relation = {
    title: rawRelation["titles"][0] ?? "関連語",
    number: rawRelation["number"],
    spelling: rawRelation["spelling"]
  } satisfies Relation;
  return relation;
}