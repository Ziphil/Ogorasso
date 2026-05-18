//


const VOWEL_CHARS = new Set(["е", "и", "о", "у", "а"]);
const LONG_DIACTIRICS = new Set(["\u0302", "\u0300"]);


export class Grapheme {

  public readonly text: string;

  public constructor(text: string) {
    this.text = text;
  }

  public isVowel(): boolean {
    return VOWEL_CHARS.has(this.text[0].toLowerCase());
  }

  public isLongVowel(): boolean {
    return this.isVowel() && this.text.length > 1;
  }

  public isA(): boolean {
    return this.text.toLowerCase() === "а";
  }

  public isEo(): boolean {
    return this.text.toLowerCase() === "е" || this.text.toLowerCase() === "о";
  }

  public isConsonant(): boolean {
    return !this.isVowel();
  }

}


export function toGraphemes(text: string): Array<Grapheme> {
  const result = [] as Array<Grapheme>;
  for (let index = 0 ; index < text.length ; index ++) {
    if (LONG_DIACTIRICS.has(text[index + 1]) && result.length > 0) {
      result.push(new Grapheme(text.substring(index, index + 2)));
      index ++;
    } else {
      result.push(new Grapheme(text[index]));
    }
  }
  return result;
}