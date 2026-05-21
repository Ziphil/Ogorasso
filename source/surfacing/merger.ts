//

import {toGraphemes} from "./grapheme";


const MERGER_MAP = new Map<string, string>([
  ["ҫ", "с"],
  ["ҙ", "з"],
  ["ӟ", "з"],
  ["ӝ", "ж"]
]);

export function surfaceMerger(text: string): string {
  const graphemes = [...toGraphemes(text)];
  let index = 0;
  while (index < graphemes.length) {
    const grapheme = graphemes[index];
    const replacement = MERGER_MAP.get(grapheme);
    if (replacement !== undefined) {
      graphemes.splice(index, 1, replacement);
    }
    index ++;
  }
  return graphemes.join("");
}
