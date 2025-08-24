//

import {NormalRelation} from "../type/relation";
import {Equivalent, Information, Phrase, Section} from "../type/word-content";


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

export function convertRelation(rawRelation: any): NormalRelation {
  const relation = {
    title: rawRelation["titles"][0] ?? "関連語",
    number: rawRelation["number"],
    spelling: rawRelation["spelling"]
  } satisfies NormalRelation;
  return relation;
}