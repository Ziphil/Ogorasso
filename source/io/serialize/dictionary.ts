//

import {AnatomyRelation, Dictionary, RootEntry, Word} from "../../dictionary";
import {SimplexAnatomy, decodeInflectionDescriptor, getAllPossibleForms} from "../../function";
import {mapObjectKey} from "../../util/misc";


export function writeDictionary(dictionary: Dictionary): string {
  const json = serializeDictionary(dictionary);
  return JSON.stringify(json);
}

export function serializeDictionary(dictionary: Dictionary): {} {
  const json = {
    type: "claude",
    version: "2",
    words: dictionary.words.map(serializeWord),
    roots: dictionary.roots.map(serializeRootEntry)
  };
  return json;
}

function serializeWord(word: Word): {} {
  const json = {
    number: word.number,
    spelling: word.spelling,
    sections: word.sections,
    anatomy: word.anatomy !== null ? serializeAnatomyRelation(word.anatomy) : null,
    origin: word.origin,
    oldSpellings: word.oldSpellings,
    inflectedSpellings: serializeInflectedSpellings(word)
  };
  return json;
}

function serializeAnatomyRelation(anatomy: AnatomyRelation): {} | null {
  if (anatomy !== null) {
    if (anatomy.kind === "simplex") {
      const plainAnatomy = anatomy.toPlain() as SimplexAnatomy;
      const json = {
        kind: "simplex",
        root: anatomy.root,
        pattern: plainAnatomy.pattern,
        theme: plainAnatomy.theme,
        affixes: plainAnatomy.affixes
      };
      return json;
    } else if (anatomy.kind === "compound") {
      const json = {
        kind: "compound",
        constituents: anatomy.constituents
      };
      return json;
    } else if (anatomy.kind === "exceptional") {
      return null;
    } else {
      anatomy satisfies never;
      throw new Error("cannot happen");
    }
  } else {
    return null;
  }
}

function serializeInflectedSpellings(word: Word): {} | null {
  if (word.anatomy !== null) {
    const plainAnatomy = word.anatomy.toPlain();
    if (plainAnatomy !== null) {
      const inflectedSpellings = mapObjectKey(getAllPossibleForms(plainAnatomy), (descriptor) => decodeInflectionDescriptor(descriptor, "japanese"));
      return inflectedSpellings;
    } else {
      return null;
    }
  } else {
    return null;
  }
}

function serializeRootEntry(root: RootEntry): {} {
  const json = {
    number: root.number,
    root: root.root,
    sections: root.sections
  };
  return json;
}