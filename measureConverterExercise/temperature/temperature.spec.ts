import { Temperature, TemperatureScale } from './temperature';

describe('Temperature Conversion', () => {
  it('should convert between Celsius and Fahrenheit correctly', () => {
    const cases = [
      {
        input: 0,
        inputScale: TemperatureScale.CELSIUS,
        expected: 32,
        expectedScale: TemperatureScale.FAHRENHEIT,
      },
      {
        input: 100,
        inputScale: TemperatureScale.CELSIUS,
        expected: 212,
        expectedScale: TemperatureScale.FAHRENHEIT,
      },
      {
        input: -40,
        inputScale: TemperatureScale.CELSIUS,
        expected: -40,
        expectedScale: TemperatureScale.FAHRENHEIT,
      },
      {
        input: 32,
        inputScale: TemperatureScale.FAHRENHEIT,
        expected: 0,
        expectedScale: TemperatureScale.CELSIUS,
      },
      {
        input: 212,
        inputScale: TemperatureScale.FAHRENHEIT,
        expected: 100,
        expectedScale: TemperatureScale.CELSIUS,
      },
    ];

    cases.forEach(({ input, inputScale, expected, expectedScale }) => {
      const temperature = new Temperature(input, inputScale);
      const converted = temperature.convert(expectedScale);
      expect(converted).toBeCloseTo(expected, 1); // toBeCloseTo because of floating point precision
    });
  });

  it('should convert between Celsius and Kelvin correctly', () => {
    const cases = [
      {
        input: 0,
        inputScale: TemperatureScale.CELSIUS,
        expected: 273.15,
        expectedScale: TemperatureScale.KELVIN,
      },
      {
        input: -273.15,
        inputScale: TemperatureScale.CELSIUS,
        expected: 0,
        expectedScale: TemperatureScale.KELVIN,
      },
    ];

    cases.forEach(({ input, inputScale, expected, expectedScale }) => {
      const temperature = new Temperature(input, inputScale);
      const converted = temperature.convert(expectedScale);
      expect(converted).toBeCloseTo(expected, 1); // toBeCloseTo because of floating point precision
    });
  });

  it('should convert between Fahrenheit and Kelvin correctly', () => {
    const cases = [
      {
        input: 32,
        inputScale: TemperatureScale.FAHRENHEIT,
        expected: 273.15,
        expectedScale: TemperatureScale.KELVIN,
      },
      {
        input: 373.15,
        inputScale: TemperatureScale.KELVIN,
        expected: 212,
        expectedScale: TemperatureScale.FAHRENHEIT,
      },
    ];

    cases.forEach(({ input, inputScale, expected, expectedScale }) => {
      const temperature = new Temperature(input, inputScale);
      const converted = temperature.convert(expectedScale);
      expect(converted).toBeCloseTo(expected, 1); // toBeCloseTo because of floating point precision
    });
  });

  it('should handle invalid destination scales', () => {
    const invalidScale = 'InvalidScale';
    const temperature = new Temperature(0, TemperatureScale.CELSIUS);

    expect(() =>
      temperature.convert(invalidScale as TemperatureScale)
    ).toThrowError(`Invalid temperature scale: ${invalidScale}`);
  });

  it('should handle invalid temperature values', () => {
    const temperature = new Temperature({} as number, TemperatureScale.CELSIUS);

    expect(() => temperature.convert(TemperatureScale.FAHRENHEIT)).toThrowError(
      'Invalid temperature value'
    );
  });
});
