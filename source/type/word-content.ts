//


export interface Equivalent {

  readonly titles: ReadonlyArray<string>;
  readonly terms: ReadonlyArray<string>;
  readonly termString: string;
  readonly hidden: boolean;

}


export interface Information {

  readonly title: string;
  readonly text: string;
  readonly hidden: boolean;

}


export interface Phrase {

  readonly form: string;
  readonly terms: ReadonlyArray<string>;
  readonly termString: string;

}


export interface Relation {

  readonly title: string;
  readonly number: number;
  readonly form: string;

}