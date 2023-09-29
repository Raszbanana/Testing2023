import { Currency } from './currency';

describe('Currency', () => {
  let currency: Currency;

  beforeEach(() => {
    currency = new Currency('EUR');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should convert 0 amount to USD', async () => {
    const convertedAmount = await currency.convert(0);
    expect(convertedAmount).toEqual(0);
  });

  it('should handle API errors', async () => {
    // This test case tests against the actual API without mocking
    // You may need to configure the API to return an error for testing this scenario
    // Ensure proper error handling in your code
    await expect(currency.convert(10)).rejects.toThrow();
  });
});
