import { connection } from './database/connection';

export enum DanishSystemEnum {
  TWELVE = '12',
  TEN = '10',
  SEVEN = '7',
  FOUR = '4',
  TWO = '02',
  ZERO = '00',
  MINUS_THREE = '-03',
}

export enum AmericanSystemEnum {
  A_PLUS = 'A+',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
}

export enum GradingSystemEnum {
  DANISH = 'Danish',
  AMERICAN = 'American',
}
export class Grades {
  private grade: string;
  private gradingSystem: GradingSystemEnum;

  constructor(grade: string, gradingSystem: GradingSystemEnum) {
    this.grade = grade;
    this.gradingSystem = gradingSystem;
  }

  async convert(): Promise<string> {
    if (this.gradingSystem === GradingSystemEnum.DANISH) {
      return this.findUSAGrade(this.grade);
    } else if (this.gradingSystem === GradingSystemEnum.AMERICAN) {
      return this.findDanishGrade(this.grade);
    } else {
      return 'Error: Unknown grading system';
    }
  }

  findUSAGrade = async (grade: string): Promise<string> => {
    const db = await connection();
    const query = 'SELECT cUSA FROM grades WHERE cDenmark = ?';
    const row = await db.get(query, [ grade ]);

    if (row) {
      return row.cUSA;
    } else {
      return 'Invalid Danish grade';
    }
  };

  findDanishGrade = async (grade: string): Promise<string> => {
    const db = await connection();
    const query = 'SELECT cDenmark FROM grades WHERE cUSA = ?';
    const row = await db.get(query, [ grade ]);

    if (row) {
      return row.cDenmark;
    } else {
      return 'Invalid USA grade';
    }
  };
}
