//

import type {CompoundAnatomyRelation} from "./compound";
import type {SimplexAnatomyRelation} from "./simplex";

export * from "./compound";
export * from "./simplex";


export type AnatomyRelation = SimplexAnatomyRelation | CompoundAnatomyRelation;