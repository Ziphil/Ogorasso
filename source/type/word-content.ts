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

  readonly spelling: string;
  readonly terms: ReadonlyArray<string>;
  readonly termString: string;

}