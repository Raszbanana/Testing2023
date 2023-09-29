/* eslint-disable @typescript-eslint/no-unused-vars */
// Initialize enum because enums are better to work with #based
export enum WeightUnit {
  KILOGRAMS = 'kilograms',
  POUNDS = 'pounds'
}
const conversionFactor = 2.20462;
export class WeightConverter {

  convert(value: number, unit: WeightUnit): number | string {
    if (unit === WeightUnit.KILOGRAMS) {
      // Convert from kilograms to pounds
      return value * conversionFactor;
    } else if (unit === WeightUnit.POUNDS) {
      // Convert from pounds to kilograms
      return value / conversionFactor;
    }
    return 'Invalid unit';
  }
}

