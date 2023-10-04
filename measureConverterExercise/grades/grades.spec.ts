import { Grades, GradingSystemEnum } from './grades';

describe('Grades', () => {
  let grades: Grades;

  it('it should convert 12 to A+', async () => {
    grades = new Grades('12', GradingSystemEnum.DANISH);

    const result = await grades.convert();

    expect(result).toBe('A+');
  });

  it('it should convert C to 4', async () => {
    grades = new Grades('C', GradingSystemEnum.AMERICAN);

    const result = await grades.convert();

    expect(result).toBe('4');
  });
  it('it should return Invalid Danish grade when inserting C as Danish Grade', async () => {
    grades = new Grades('C', GradingSystemEnum.DANISH);

    const result = await grades.convert();

    expect(result).toBe('Invalid Danish grade');
  });

  it('it should return Invalid USA grade when inserting 12 as USA Grade', async () => {
    grades = new Grades('12', GradingSystemEnum.AMERICAN);

    const result = await grades.convert();

    expect(result).toBe('Invalid USA grade');
  });

  it('it should return Invalid USA grade when inserting 120 as Danish Grade', async () => {
    grades = new Grades('120', GradingSystemEnum.DANISH);

    const result = await grades.convert();

    expect(result).toBe('Invalid Danish grade');
  });

  // DATABASE MOCKED BASED TEST

  it('it should convert 12 to A+ as USA Grade', async () => {
    grades = new Grades('12', GradingSystemEnum.DANISH);

    jest.spyOn(grades, 'findUSAGrade').mockResolvedValue('A+');

    const result = await grades.convert();

    expect(result).toBe('A+');
  });

  it('it should convert C to 4 as Danish Grade', async () => {
    grades = new Grades('C', GradingSystemEnum.AMERICAN);

    jest.spyOn(grades, 'findDanishGrade').mockResolvedValue('4');

    const result = await grades.convert();

    expect(result).toBe('4');
  });
});
