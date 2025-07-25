//

import {Equivalent, Information, Phrase, Relation} from "source/type/word-content";


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
    form: rawPhrase["form"],
    terms: rawPhrase["names"],
    termString: rawPhrase["nameString"]
  } satisfies Phrase;
  return phrase;
}

export function convertRelation(rawRelation: any): Relation {
  const relation = {
    title: rawRelation["titles"][0] ?? "関連語",
    number: rawRelation["number"],
    form: rawRelation["name"]
  } satisfies Relation;
  return relation;
}