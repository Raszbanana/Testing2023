import { Temperature, TemperatureScale } from './temperature';

describe('Temperature Conversion', () => {
  it('should convert between Celsius and Fahrenheit correctly', () => {
    const cases = [
      {
        input: 0,
        inputScale: TemperatureScale.Celsius,
        expected: 32,
        expectedScale: TemperatureScale.Fahrenheit,
      },
      {
        input: 100,
        inputScale: TemperatureScale.Celsius,
        expected: 212,
        expectedScale: TemperatureScale.Fahrenheit,
      },
      {
        input: -40,
        inputScale: TemperatureScale.Celsius,
        expected: -40,
        expectedScale: TemperatureScale.Fahrenheit,
      },
      {
        input: 32,
        inputScale: TemperatureScale.Fahrenheit,
        expected: 0,
        expectedScale: TemperatureScale.Celsius,
      },
      {
        input: 212,
        inputScale: TemperatureScale.Fahrenheit,
        expected: 100,
        expectedScale: TemperatureScale.Celsius,
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
        inputScale: TemperatureScale.Celsius,
        expected: 273.15,
        expectedScale: TemperatureScale.Kelvin,
      },
      {
        input: -273.15,
        inputScale: TemperatureScale.Celsius,
        expected: 0,
        expectedScale: TemperatureScale.Kelvin,
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
        inputScale: TemperatureScale.Fahrenheit,
        expected: 273.15,
        expectedScale: TemperatureScale.Kelvin,
      },
      {
        input: 212,
        inputScale: TemperatureScale.Fahrenheit,
        expected: 373.15,
        expectedScale: TemperatureScale.Kelvin,
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
    const temperature = new Temperature(0, TemperatureScale.Celsius);

    expect(() =>
      temperature.convert(invalidScale as TemperatureScale)
    ).toThrowError(`Invalid temperature scale: ${invalidScale}`);
  });

  it('should handle invalid temperature values', () => {
    const temperature = new Temperature({} as number, TemperatureScale.Celsius);

    expect(() => temperature.convert(TemperatureScale.Fahrenheit)).toThrowError(
      'Invalid temperature value'
    );
  });
});
