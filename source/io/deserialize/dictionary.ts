//

import {Dictionary} from "../../dictionary";
import {deserializeEntry} from "./entry";


export function readDictionary(jsonString: string): Dictionary {
  const json = JSON.parse(jsonString);
  return deserializeDictionary(json);
}

export function deserializeDictionary(rawDictionary: any): Dictionary {
  const rawEntries = rawDictionary["words"] as Array<any>;
  const entries = rawEntries.map((rawEntry) => deserializeEntry(rawEntry));
  const words = entries.filter((entry) => entry.kind === "word");
  const roots = entries.filter((entry) => entry.kind === "root");
  const affixes = entries.filter((entry) => entry.kind === "affix");
  const patterns = entries.filter((entry) => entry.kind === "pattern");
  const themes = entries.filter((entry) => entry.kind === "theme");
  const dictionary = new Dictionary({words, roots, affixes, patterns, themes});
  return dictionary;
}