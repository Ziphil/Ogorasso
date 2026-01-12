//

import type {CompoundAnatomy} from "./compound";
import type {SimplexAnatomy} from "./simplex";

export * from "./compound";
export * from "./core";
export * from "./simplex";


export type Anatomy = SimplexAnatomy | CompoundAnatomy;