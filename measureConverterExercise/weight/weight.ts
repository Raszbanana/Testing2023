/* eslint-disable @typescript-eslint/no-unused-vars */
// Initialize enum because enums are better to work with #based
export enum WeightUnit {
  Kilograms = 'kilograms',
  Pounds = 'pounds'
}
const conversionFactor = 2.20462;
export class WeightConverter {

  convert(value: number, unit: WeightUnit): number | string {
    if (unit === WeightUnit.Kilograms) {
      // Convert from kilograms to pounds
      return value * conversionFactor;
    } else if (unit === WeightUnit.Pounds) {
      // Convert from pounds to kilograms
      return value / conversionFactor;
    }
    return 'Invalid unit';
  }
}

