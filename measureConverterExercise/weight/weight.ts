/* eslint-disable @typescript-eslint/no-unused-vars */
// Nikolai
export enum WeightUnit {
  Kilograms = 'kilograms',
  Pounds = 'pounds'
}
export class Weight {
  constructor(private value: number, private unit: WeightUnit ) {}

  convert(): number | string {
    if (this.unit === WeightUnit.Kilograms) {
      return this.value * 2.20462;
    } else if (this.unit === WeightUnit.Pounds) {
      // Convert from pounds to kilograms
      return this.value / 2.20462;
    }
    return 'Invalid unit';
  }
}

// Example usage:
const weightInKilograms = new Weight(50, WeightUnit.Kilograms);
const weightInPounds = new Weight(110, WeightUnit.Pounds);
