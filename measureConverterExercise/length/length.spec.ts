import { Length, MeasurementSystemEnum } from './length';

describe('Length', () => {
  let length: Length;

  it('should convert 1 cm to 0.39 inches', () => {
    length = new Length(1, MeasurementSystemEnum.METRIC);

    const result = length.convert();

    expect(result).toEqual('0.39 in');
  });

  it('should convert 1 in to 2.54 cm', () => {
    length = new Length(1, MeasurementSystemEnum.IMPERIAL);

    const result = length.convert();

    expect(result).toEqual('2.54 cm');
  });

  it('should convert 10.54 cm to 4.15 inches', () => {
    length = new Length(10.54, MeasurementSystemEnum.METRIC);

    const result = length.convert();

    expect(result).toEqual('4.15 in');
  });

  it('should convert 10.54 in to 26.77 cm', () => {
    length = new Length(10.54, MeasurementSystemEnum.IMPERIAL);

    const result = length.convert();

    expect(result).toEqual('26.77 cm');
  });
});
