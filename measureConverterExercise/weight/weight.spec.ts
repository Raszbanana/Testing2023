import { Weight, WeightUnit } from './weight';

it('should convert kilograms to pounds', () => {
  const weightInKilograms = new Weight(50, WeightUnit.Kilograms);
  expect(weightInKilograms.convert()).toBe(110.231);
});