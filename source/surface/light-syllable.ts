//

import {Grapheme, toGraphemes} from "./grapheme";


export function transformLightSyllables(light: string): string {
  let graphemes = toGraphemes(light);
  graphemes = dropRedundantA(graphemes);
  graphemes = dropRedundantEo(graphemes);
  return graphemes.map((grapheme) => grapheme.text).join("");
}

function dropRedundantA(graphemes: Array<Grapheme>): Array<Grapheme> {
  let resultGraphemes = [...graphemes];
  let index = 0;
  while (true) {
    if (resultGraphemes[index]?.isVowel() && resultGraphemes[index + 1]?.isConsonant() && resultGraphemes[index + 2]?.isA() && resultGraphemes[index + 3]?.isConsonant() && resultGraphemes[index + 4]?.isVowel()) {
      resultGraphemes = [...resultGraphemes.slice(0, index + 2), ...resultGraphemes.slice(index + 3)];
    }
    if (index >= resultGraphemes.length - 4) {
      break;
    }
    index ++;
  }
  return resultGraphemes;
}

function dropRedundantEo(graphemes: Array<Grapheme>): Array<Grapheme> {
  let resultGraphemes = [...graphemes];
  let index = 0;
  while (true) {
    if (resultGraphemes[index]?.isConsonant() && resultGraphemes[index + 1]?.isEo() && resultGraphemes[index + 2]?.isConsonant() && resultGraphemes[index + 3]?.isEo()) {
      resultGraphemes = [...resultGraphemes.slice(0, index + 1), ...resultGraphemes.slice(index + 2)];
    }
    if (index >= resultGraphemes.length - 3) {
      break;
    }
    index ++;
  }
  return resultGraphemes;
}