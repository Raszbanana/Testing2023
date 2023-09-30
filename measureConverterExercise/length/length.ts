// Pawel

export enum MeasurementSystemEnum {
  METRIC = 'metric',
  IMPERIAL = 'imperial',
}
export class Length {
  private length: string;
  private measureSystem: MeasurementSystemEnum;

  constructor(valueToConvert: number, measureSystem: MeasurementSystemEnum) {
    this.length = valueToConvert.toFixed(2);
    this.measureSystem = measureSystem;
  }

  convert(): string {
    if (this.measureSystem === MeasurementSystemEnum.METRIC) {
      return (parseFloat(this.length) / 2.54).toFixed(2) + ' in';
    } else if (this.measureSystem === MeasurementSystemEnum.IMPERIAL) {
      return (parseFloat(this.length) * 2.54).toFixed(2) + ' cm';
    } else {
      return 'Invalid measurement system';
    }
  }
}
