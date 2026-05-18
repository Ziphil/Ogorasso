//


const VOWEL_CHARS = new Set(["е", "и", "о", "у", "а"]);
const WEAK_CONSONANT_CHARS = new Set(["й", "ў", "ъ"]);
const LONG_DIACTIRICS = new Set(["\u0302", "\u0300"]);


export type Grapheme = string;

export function toGraphemes(text: string): Array<Grapheme> {
  const result = [] as Array<Grapheme>;
  for (let index = 0 ; index < text.length ; index ++) {
    if (LONG_DIACTIRICS.has(text[index + 1])) {
      result.push(text.substring(index, index + 2));
      index ++;
    } else {
      result.push(text[index]);
    }
  }
  return result;
}

export function isVowel(grapheme: Grapheme): boolean {
  return VOWEL_CHARS.has(grapheme[0]);
}

export function isLongVowel(grapheme: Grapheme): boolean {
  return isVowel(grapheme) && LONG_DIACTIRICS.has(grapheme[1]);
}

export function isSolidLongVowel(grapheme: Grapheme): boolean {
  return isLongVowel(grapheme) && grapheme !== "а";
}

export function isConsonant(grapheme: Grapheme): boolean {
  return !isVowel(grapheme);
}

export function isWeakConsonant(grapheme: Grapheme): boolean {
  return WEAK_CONSONANT_CHARS.has(grapheme);
}

export function isSolidWeakConsonant(grapheme: Grapheme): boolean {
  return isWeakConsonant(grapheme) && grapheme !== "ъ";
}

export function extractLetter(grapheme: Grapheme): string {
  return grapheme[0];
}

export function extractDiacritic(grapheme: Grapheme): string | null {
  return grapheme[1] ?? null;
}