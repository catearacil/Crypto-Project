export default interface Crypto {
    Asset: {
      id: string;
      img: string;
      name: string;
      symbol: string;
    };
    market_data: {
      price_usd: number;
      percent_change_usd_last_24_hours: number;
    };
  }