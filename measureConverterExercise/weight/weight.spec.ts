import { WeightConverter, WeightUnit } from './weight';

describe('Weight Conversion', () => {
  it('should convert kilograms to pounds correctly', () => {
    const kgToPoundsCases = [
      { input: 0, expected: 0 },
      { input: 1, expected: 2.20462 },
      { input: 5, expected: 11.0231 },
      { input: 10, expected: 22.0462 },
    ];

    kgToPoundsCases.forEach(({ input, expected }) => {
      const weight = new WeightConverter();
      expect(weight.convert(input, WeightUnit.Kilograms)).toBeCloseTo(expected, 4); // toBeCloseTo because of floating point precision
    });
  });

  it('should convert pounds to kilograms correctly', () => {
    const poundsToKgCases = [
      { input: 0, expected: 0 },
      { input: 1, expected: 0.453592 },
      { input: 5, expected: 2.26796 },
      { input: 10, expected: 4.53592 },
    ];  

    poundsToKgCases.forEach(({ input, expected }) => {
      const weight = new WeightConverter();
      expect(weight.convert(input, WeightUnit.Pounds)).toBeCloseTo(expected, 4); // toBeCloseTo because of floating point precision
    });
  });

  it('should return "Invalid unit" for an unsupported unit', () => {
    const invalidUnitCases = [
      { input: 1, unit: 'invalidUnit' },
      { input: 10, unit: 'grams' },
    ];

    invalidUnitCases.forEach(({ input, unit }) => {
      const weight = new WeightConverter();
      expect(weight.convert(input, unit as WeightUnit)).toBe('Invalid unit');
    });
  });
});
