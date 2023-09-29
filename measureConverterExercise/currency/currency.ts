import axios from 'axios';
import { config } from 'dotenv';
config();
export class Currency {
  private baseCurrency: string;
  // And yes i did try to even sign up with free credits, but conversion is a premium feature
  private apiKey = process.env.API_KEY;

  constructor(baseCurrency: string) {
    this.baseCurrency = baseCurrency;
  }

  async convert(amount: number): Promise<number> {
    try {
      // 401 error when trying to use the API, i guess not so free after all....
      const response = await axios.get(`https://freecurrencyapi.net/api/v1/rates?base_currency=${this.baseCurrency}`, 

      );
      if (response.status === 200) {
        const rates = response.data.data.rates;
        const convertedAmount = amount * rates['USD'];
        return convertedAmount;
      } else {
        throw new Error('Failed to fetch conversion rate from the API');
      }
    } catch (error: unknown) {
      throw new Error(`Error fetching conversion rate: ${(error as Error).message}`);
    }
  }

}

