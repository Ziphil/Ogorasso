//

import {
  Affix,
  Entry,
  Equivalent,
  Information,
  Pattern,
  Phrase,
  Relation,
  Root,
  Section,
  Theme,
  Word
} from "../type";
import {
  checkAffixSpelling,
  checkPatternSpelling,
  checkRootSpelling,
  checkThemeSpelling,
  extractAffixSpelling,
  extractPatternSpelling,
  extractRadicals,
  extractThemeSpelling,
  parseAnatomy
} from "./anatomy";


/** ZpDIC Online API (v1) から返される単語エントリーを、このライブラリが提供するクラスのインスタンスに変換します。 */
export function convertEntry(rawEntry: any): Entry {
  const rawSpelling = rawEntry["spelling"] as string;
  if (checkRootSpelling(rawSpelling)) {
    return convertRoot(rawEntry);
  } else if (checkThemeSpelling(rawSpelling)) {
    return convertTheme(rawEntry);
  } else if (checkAffixSpelling(rawSpelling)) {
    return convertAffix(rawEntry);
  } else if (checkPatternSpelling(rawSpelling)) {
    return convertPattern(rawEntry);
  } else {
    return convertWord(rawEntry);
  }
}

export function convertWord(rawEntry: any): Word {
  const rawSections = rawEntry["sections"] as Array<any>;
  const rawAnatomyRelations = rawSections[rawSections.length - 1]["relations"] as Array<any>;
  const word = new Word({
    number: +rawEntry["number"],
    spelling: rawEntry["spelling"],
    anatomy: parseAnatomy(rawEntry["spelling"], rawAnatomyRelations),
    sections: rawEntry["sections"].map(convertSection),
    origin: (rawEntry["tags"].includes("借用語")) ? "loan" : (rawEntry["tags"].includes("外来語")) ? "foreign" : "proper"
  });
  return word;
}

export function convertRoot(rawEntry: any): Root {
  const radicals = extractRadicals(rawEntry["spelling"]);
  if (radicals !== null) {
    const rawSections = rawEntry["sections"] as Array<any>;
    const root = new Root({
      number: +rawEntry["number"],
      radicals,
      sections: rawSections.map(convertSection),
      origin: (rawEntry["tags"].includes("借用語")) ? "loan" : (rawEntry["tags"].includes("外来語")) ? "foreign" : "proper"
    });
    return root;
  } else {
    throw new Error("invalid root entry");
  }
}

export function convertPattern(rawEntry: any): Pattern {
  const spelling = extractPatternSpelling(rawEntry["spelling"]);
  if (spelling !== null) {
    const pattern = new Pattern({
      number: +rawEntry["number"],
      spelling
    });
    return pattern;
  } else {
    throw new Error("invalid pattern entry");
  }
}

export function convertAffix(rawEntry: any): Affix {
  const spelling = extractAffixSpelling(rawEntry["spelling"]);
  if (spelling !== null) {
    const rawSections = rawEntry["sections"] as Array<any>;
    const affix = new Affix({
      number: +rawEntry["number"],
      spelling,
      sections: rawSections.map(convertSection)
    });
    return affix;
  } else {
    throw new Error("invalid affix entry");
  }
}

export function convertTheme(rawEntry: any): Theme {
  const spelling = extractThemeSpelling(rawEntry["spelling"]);
  if (spelling !== null) {
    const theme = new Theme({
      number: +rawEntry["number"],
      spelling
    });
    return theme;
  } else {
    throw new Error("invalid theme entry");
  }
}

export function convertSection(rawSection: any): Section {
  const rawRelations = rawSection["relations"] as Array<any>;
  const section = {
    equivalents: rawSection["equivalents"].map(convertEquivalent),
    information: rawSection["informations"].map(convertInformation),
    phrases: rawSection["phrases"].map(convertPhrase),
    relations: rawRelations.filter((rawRelation) => !rawRelation["spelling"].includes("√") && !rawRelation["spelling"].includes("‹")).map(convertRelation)
  } satisfies Section;
  return section;
}

export function convertEquivalent(rawEquivalent: any): Equivalent {
  const equivalent = {
    titles: rawEquivalent["titles"],
    terms: rawEquivalent["terms"],
    termString: rawEquivalent["termString"],
    hidden: rawEquivalent["hidden"]
  } satisfies Equivalent;
  return equivalent;
}

export function convertInformation(rawInformation: any): Information {
  const information = {
    title: rawInformation["title"],
    text: rawInformation["text"],
    hidden: rawInformation["hidden"]
  } satisfies Information;
  return information;
}

export function convertPhrase(rawPhrase: any): Phrase {
  const phrase = {
    spelling: rawPhrase["form"],
    terms: rawPhrase["terms"],
    termString: rawPhrase["termString"]
  } satisfies Phrase;
  return phrase;
}

export function convertRelation(rawRelation: any): Relation {
  const relation = {
    title: rawRelation["titles"][0] ?? "関連語",
    number: rawRelation["number"],
    spelling: rawRelation["spelling"]
  } satisfies Relation;
  return relation;
}