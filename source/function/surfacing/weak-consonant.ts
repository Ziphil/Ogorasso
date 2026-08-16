//

import {Grapheme, extractDiacritic, extractLetter, isSolidLongVowel, isSolidWeakConsonant, isVowel, isWeakConsonant, toGraphemes} from "./grapheme";


export function surfaceWeakConsonants(text: string): string {
  const graphemes = desactivateGeminatedWeakConsonant([...toGraphemes(text)]);
  let index = 0;
  while (index < graphemes.length) {
    const fusingGraphemes = getFusingGraphemes(graphemes, index);
    if (fusingGraphemes.length > 1) {
      const fusedVowel = getFusedVowel(fusingGraphemes);
      const fusedDiacritic = getFusedDiactiric(fusingGraphemes);
      if (fusedDiacritic !== null) {
        graphemes.splice(index, fusingGraphemes.length, fusedVowel + fusedDiacritic);
      } else {
        graphemes.splice(index, fusingGraphemes.length, fusedVowel);
      }
    }
    index ++;
  }
  return graphemes.join("");
}

function desactivateGeminatedWeakConsonant(graphemes: Array<Grapheme>): Array<Grapheme> {
  let index = 0;
  while (index < graphemes.length) {
    const leftGrapheme = graphemes[index];
    const rightGrapheme = graphemes[index + 1];
    if (isWeakConsonant(leftGrapheme) && isWeakConsonant(rightGrapheme) && leftGrapheme === rightGrapheme) {
      const precedingGraphemes = graphemes.slice(0, index);
      const followingGraphemes = graphemes.slice(index + 2);
      if (precedingGraphemes.some((grapheme) => isSolidLongVowel(grapheme))) {
        graphemes.splice(index, 2, leftGrapheme, "ъ");
      } else if (followingGraphemes.some((grapheme) => isSolidLongVowel(grapheme))) {
        graphemes.splice(index, 2, "ъ", rightGrapheme);
      }
    }
    index ++;
  }
  return graphemes;
}

function getFusingGraphemes(graphemes: Array<Grapheme>, from: number): Array<Grapheme> {
  let type = (isWeakConsonant(graphemes[from])) ? "weak" : (isVowel(graphemes[from])) ? "vowel" : null;
  if (type !== null) {
    let index = from;
    const fusingGraphemes = [];
    while (index < graphemes.length) {
      const grapheme = graphemes[index];
      if ((type === "weak" && isWeakConsonant(grapheme)) || (type === "vowel" && isVowel(grapheme))) {
        fusingGraphemes.push(grapheme);
        type = (type === "weak") ? "vowel" : "weak";
        index ++;
      } else {
        break;
      }
    }
    return fusingGraphemes;
  } else {
    return [];
  }
}

function getFusedVowel(graphemes: Array<Grapheme>): string {
  let consonantScore = 0;
  let vowelScore = 0;
  for (const grapheme of graphemes) {
    const [thisConsonantScore, thisVowelScore] = getScores(grapheme);
    consonantScore += thisConsonantScore;
    vowelScore += thisVowelScore;
  }
  if (consonantScore >= 2) {
    return "и";
  } else if (consonantScore <= -2) {
    return "у";
  } else if (consonantScore === 1) {
    if (vowelScore > 0) {
      return "и";
    } else if (vowelScore < 0) {
      return "е";
    } else {
      return (graphemes.some((grapheme) => extractLetter(grapheme) === "е" || extractLetter(grapheme) === "и")) ? "и" : "е";
    }
  } else if (consonantScore === -1) {
    if (vowelScore < 0) {
      return "у";
    } else if (vowelScore > 0) {
      return "о";
    } else {
      return (graphemes.some((grapheme) => extractLetter(grapheme) === "о" || extractLetter(grapheme) === "у")) ? "у" : "о";
    }
  } else {
    if (vowelScore >= 2) {
      return "и";
    } else if (vowelScore <= -2) {
      return "у";
    } else if (vowelScore === 1) {
      return "е";
    } else if (vowelScore === -1) {
      return "о";
    } else {
      if (graphemes.every((grapheme) => grapheme === "а" || grapheme === "ъ")) {
        return "а";
      } else {
        const solidLongVowelGrapheme = graphemes.find((grapheme) => isSolidLongVowel(grapheme));
        const lastSolidWeakConsonantGrapheme = graphemes.findLast((grapheme) => isSolidWeakConsonant(grapheme));
        const lastVowelGrapheme = graphemes.findLast((grapheme) => isVowel(grapheme))!;
        if (solidLongVowelGrapheme !== undefined) {
          const solidLongVowel = extractLetter(solidLongVowelGrapheme);
          return (solidLongVowel === "е" || solidLongVowel === "и") ? "е" : "о";
        } else if (lastSolidWeakConsonantGrapheme !== undefined) {
          const lastSolidWeakConsonant = lastSolidWeakConsonantGrapheme;
          return (lastSolidWeakConsonant === "й") ? "е" : "о";
        } else {
          const lastVowel = extractLetter(lastVowelGrapheme);
          return (lastVowel === "е" || lastVowel === "и") ? "е" : "о";
        }
      }
    }
  }
}

function getScores(grapheme: Grapheme): [number, number] {
  if (isWeakConsonant(grapheme)) {
    if (grapheme === "й") {
      return [1, 0];
    } else if (grapheme === "ў") {
      return [-1, 0];
    } else if (grapheme === "ъ") {
      return [0, 0];
    } else {
      throw new Error("cannot happen");
    }
  } else if (isVowel(grapheme)) {
    const vowel = extractLetter(grapheme);
    if (vowel === "е") {
      return [0, 1];
    } else if (vowel === "и") {
      return [1, 1];
    } else if (vowel === "о") {
      return [0, -1];
    } else if (vowel === "у") {
      return [-1, -1];
    } else if (vowel === "а") {
      return [0, 0];
    } else {
      throw new Error("cannot happen");
    }
  } else {
    throw new Error("cannot happen");
  }
}

function getFusedDiactiric(graphemes: Array<Grapheme>): string | null {
  const diacriticGrapheme = graphemes.find((grapheme) => extractDiacritic(grapheme) !== null);
  return diacriticGrapheme !== undefined ? extractDiacritic(diacriticGrapheme)! : null;
}