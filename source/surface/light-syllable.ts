//

import {Grapheme, isConsonant, isVowel, toGraphemes} from "./grapheme";


export function transformLightSyllables(text: string): string {
  let graphemes = toGraphemes(text);
  graphemes = dropRedundantHollowVowels(graphemes);
  graphemes = dropRedundantSolidVowels(graphemes);
  return graphemes.join("");
}

function dropRedundantHollowVowels(graphemes: Array<Grapheme>): Array<Grapheme> {
  let resultGraphemes = [...graphemes];
  let index = 0;
  while (index < resultGraphemes.length - 4) {
    if (isVowel(resultGraphemes[index]) && isConsonant(resultGraphemes[index + 1]) && resultGraphemes[index + 2] === "а" && isConsonant(resultGraphemes[index + 3]) && isVowel(resultGraphemes[index + 4])) {
      resultGraphemes = [...resultGraphemes.slice(0, index + 2), ...resultGraphemes.slice(index + 3)];
    }
    index ++;
  }
  return resultGraphemes;
}

function dropRedundantSolidVowels(graphemes: Array<Grapheme>): Array<Grapheme> {
  let resultGraphemes = [...graphemes];
  let index = 0;
  while (index < resultGraphemes.length - 3) {
    if (isConsonant(resultGraphemes[index]) && (resultGraphemes[index + 1] === "е" || resultGraphemes[index + 1] === "о") && isConsonant(resultGraphemes[index + 2]) && (resultGraphemes[index + 3] === "е" || resultGraphemes[index + 3] === "о")) {
      resultGraphemes = [...resultGraphemes.slice(0, index + 1), ...resultGraphemes.slice(index + 2)];
    }
    index ++;
  }
  return resultGraphemes;
}