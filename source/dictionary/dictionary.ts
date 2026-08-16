//

import {AffixEntry} from "./entry/affix";
import {PatternEntry} from "./entry/pattern";
import {RootEntry} from "./entry/root";
import {ThemeEntry} from "./entry/theme";
import {Word} from "./entry/word";


export class Dictionary {

  public readonly words: ReadonlyArray<Word>;
  public readonly roots: ReadonlyArray<RootEntry>;
  public readonly affixes: ReadonlyArray<AffixEntry>;
  public readonly patterns: ReadonlyArray<PatternEntry>;
  public readonly themes: ReadonlyArray<ThemeEntry>;

  public constructor(initializer: Pick<Dictionary, "words" | "roots" | "affixes" | "patterns" | "themes">) {
    this.words = initializer.words;
    this.roots = initializer.roots;
    this.affixes = initializer.affixes;
    this.patterns = initializer.patterns;
    this.themes = initializer.themes;
  }

}