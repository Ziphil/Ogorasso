//

import type {Affix} from "./affix";
import type {Pattern} from "./pattern";
import type {Root} from "./root";
import type {Theme} from "./theme";
import type {Word} from "./word";

export * from "./affix";
export * from "./pattern";
export * from "./root";
export * from "./theme";
export * from "./word";


export type Entry = Word | Root | Pattern | Affix | Theme;