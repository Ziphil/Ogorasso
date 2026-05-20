//

import {Entry} from "../../type";
import {deserializeEntry} from "./entry";


export function readEntries(jsonString: string): Array<Entry> {
  const json = JSON.parse(jsonString);
  const rawEntries = json["words"] as Array<any>;
  const entries = rawEntries.map((rawEntry) => deserializeEntry(rawEntry));
  return entries;
}