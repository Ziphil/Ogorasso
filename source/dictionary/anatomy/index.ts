//

import type {CompoundAnatomyRelation} from "./compound";
import type {ExceptionalAnatomyRelation} from "./exceptional";
import type {SimplexAnatomyRelation} from "./simplex";

export * from "./compound";
export * from "./exceptional";
export * from "./simplex";


export type AnatomyRelation = SimplexAnatomyRelation | CompoundAnatomyRelation | ExceptionalAnatomyRelation;