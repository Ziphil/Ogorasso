//

import {Grapheme, toGraphemes} from "./grapheme";


export function transformLightSyllables(text: string): string {
  let graphemes = toGraphemes(text);
  graphemes = dropRedundantA(graphemes);
  graphemes = dropRedundantEo(graphemes);
  return graphemes.map((grapheme) => grapheme.text).join("");
}

function dropRedundantA(graphemes: Array<Grapheme>): Array<Grapheme> {
  let resultGraphemes = [...graphemes];
  let index = 0;
  while (index < resultGraphemes.length - 4) {
    if (resultGraphemes[index].isVowel() && resultGraphemes[index + 1].isConsonant() && resultGraphemes[index + 2].isA() && resultGraphemes[index + 3].isConsonant() && resultGraphemes[index + 4].isVowel()) {
      resultGraphemes = [...resultGraphemes.slice(0, index + 2), ...resultGraphemes.slice(index + 3)];
    }
    index ++;
  }
  return resultGraphemes;
}

function dropRedundantEo(graphemes: Array<Grapheme>): Array<Grapheme> {
  let resultGraphemes = [...graphemes];
  let index = 0;
  while (index < resultGraphemes.length - 3) {
    if (resultGraphemes[index].isConsonant() && resultGraphemes[index + 1].isEo() && resultGraphemes[index + 2].isConsonant() && resultGraphemes[index + 3].isEo()) {
      resultGraphemes = [...resultGraphemes.slice(0, index + 1), ...resultGraphemes.slice(index + 2)];
    }
    index ++;
  }
  return resultGraphemes;
}