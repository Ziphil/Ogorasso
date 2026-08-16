//

import type {AffixEntry} from "./affix";
import type {PatternEntry} from "./pattern";
import type {RootEntry} from "./root";
import type {ThemeEntry} from "./theme";
import type {Word} from "./word";

export * from "./affix";
export * from "./pattern";
export * from "./root";
export * from "./theme";
export * from "./word";


export type Entry = Word | RootEntry | PatternEntry | AffixEntry | ThemeEntry;