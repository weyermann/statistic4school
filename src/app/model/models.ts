export enum ESteps {
  SELECT_DIAGRAM_TYPE = 1,
  SELECT_DATA = 2,
  SELECT_DATA_SCALING = 3,
  SELECT_ANSWER = 4,
}

export enum EQuestionCategories {
  Geografie = 1,
  Natur = 2,
  Sport = 3,
  Biologie = 4
}

export enum EDiagramTypes {
  Balkendiagramm = 1,
  Tortendiagramm = 2,
  Bubblechart = 3,
  Karte = 4,
  Netz = 5
}

export class Questions {
  static q1 = 'In welchem Zürcher Quartier lebten 2017 die meisten Menschen?';
  static q2 = 'Wie lautet die Frage 2?';
  static q3 = 'Wie lautet die Frage 3?';
  static q4 = 'Wie lautet die Frage 4?';
}

export interface DataPoint {
  cat: string;
  val: number;
}

