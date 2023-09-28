export enum TemperatureScale {
  Celsius = 'C',
  Fahrenheit = 'F',
  Kelvin = 'K',
}

export class Temperature {
  private readonly measure: number;
  private readonly scale: TemperatureScale;

  constructor(measure: number, scale: TemperatureScale) {
    this.measure = measure;
    this.scale = scale;
  }

  public convert(toScale: TemperatureScale): number {
    let result: number;

    if(!isNaN(this.measure)) {

      switch (this.scale) {
      case TemperatureScale.Celsius:
        result = this.convertFromCelsius(toScale);
        break;

      case TemperatureScale.Fahrenheit:
        result = this.convertFromFahrenheit(toScale);
        break;

      case TemperatureScale.Kelvin:
        result = this.convertFromKelvin(toScale);
        break;

      default:
        throw new Error(`Invalid temperature scale: ${this.scale}`);
      }

      return parseFloat(result.toFixed(2));
    }
    throw new Error('Invalid temperature value');
  }

  private convertFromCelsius(toScale: TemperatureScale): number {
    switch (toScale) {
    case TemperatureScale.Fahrenheit:
      return (this.measure * 9 / 5) + 32;
    case TemperatureScale.Kelvin:
      return this.measure + 273.15;
    default:
      throw new Error(`Invalid temperature scale: ${toScale}`);
    }
  }

  private convertFromFahrenheit(toScale: TemperatureScale): number {
    switch (toScale) {
    case TemperatureScale.Celsius:
      return (this.measure - 32) * 5 / 9;

    case TemperatureScale.Kelvin:
      return (this.measure + 459.67) * 5 / 9;

    default:
      throw new Error(`Invalid temperature scale: ${toScale}`);
    }
  }

  private convertFromKelvin(toScale: TemperatureScale): number {
    switch (toScale) {
    case TemperatureScale.Celsius:
      return this.measure - 273.15;

    case TemperatureScale.Fahrenheit:
      return (this.measure * 9 / 5) - 459.67;
      
    default:
      throw new Error(`Invalid temperature scale: ${toScale}`);
    }
  }
}

