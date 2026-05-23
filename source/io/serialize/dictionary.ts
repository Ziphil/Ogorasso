//

import {AnatomyRelation, Entry, RootEntry, Word} from "../../dictionary";
import {getAllForms} from "../../function";


export function writeEntries(entries: Array<Entry>): {} {
  const json = {
    type: "withForms",
    version: "1",
    words: entries.filter((entry) => entry.kind === "word").map(writeWord),
    roots: entries.filter((entry) => entry.kind === "root").map(writeRoot)
  };
  return json;
}

function writeWord(word: Word): {} {
  const json = {
    number: word.number,
    spelling: word.spelling,
    sections: word.sections,
    anatomy: word.anatomy !== null ? writeAnatomy(word.anatomy) : null,
    origin: word.origin,
    oldSpellings: word.oldSpellings,
    inflectedSpellings: writeInflectedSpellings(word)
  };
  return json;
}

function writeAnatomy(anatomy: AnatomyRelation): {} {
  if (anatomy.kind === "simplex") {
    const json = {
      kind: "simplex",
      root: anatomy.root,
      pattern: anatomy.pattern,
      theme: anatomy.theme,
      affixes: anatomy.affixes
    };
    return json;
  } else {
    const json = {
      kind: "compound",
      constituents: anatomy.constituents
    };
    return json;
  }
}

function writeInflectedSpellings(word: Word): {} | null {
  if (word.anatomy !== null) {
    const anatomy = word.anatomy.toPlain();
    if (anatomy !== null) {
      const inflectedSpellings = getAllForms(anatomy);
      return inflectedSpellings;
    } else {
      return null;
    }
  } else {
    return null;
  }
}

function writeRoot(root: RootEntry): {} {
  const json = {
    number: root.number,
    root: root.root,
    sections: root.sections
  };
  return json;
}