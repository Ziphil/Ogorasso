//

import {NormalRelation} from "../type/relation";
import {Equivalent, Information, Phrase} from "../type/word-content";


export function convertEquivalent(rawEquivalent: any): Equivalent {
  const equivalent = {
    titles: rawEquivalent["titles"],
    terms: rawEquivalent["names"],
    termString: rawEquivalent["nameString"],
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
    terms: rawPhrase["names"],
    termString: rawPhrase["nameString"]
  } satisfies Phrase;
  return phrase;
}

export function convertRelation(rawRelation: any): NormalRelation {
  const relation = {
    title: rawRelation["titles"][0] ?? "関連語",
    number: rawRelation["number"],
    spelling: rawRelation["name"]
  } satisfies NormalRelation;
  return relation;
}