export interface PricingTier {
  id: string;
  name: string;
  prices: {
    [currencyCode: string]: number;
  };
  features: string[];
}

export interface CurrencyConfig {
  code: string;
  symbol: string;
  locale: string;
}

export const pricingConfig = {
  tiers: [
    {
      id: 'starter',
      name: 'Starter',
      prices: {
        USD: 0,
        INR: 0,
        EUR: 0
      },
      features: [
        '5 automated pipelines',
        'Hourly schema synchronization',
        'Basic database mapping engine',
        'Community discord support',
        '1,000 records synced / month'
      ]
    },
    {
      id: 'pro',
      name: 'Pro',
      prices: {
        USD: 79,
        INR: 50,
        EUR: 69
      },
      features: [
        'Unlimited automated pipelines',
        'Realtime schema synchronization',
        'Advanced AI mapping engine',
        'Standard email support (24h SLA)',
        'Unlimited records synced / month',
        'Custom error notifications'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      prices: {
        USD: 250,
        INR: 150,
        EUR: 229
      },
      features: [
        'Dedicated processing engine',
        'Custom service level agreements (SLAs)',
        'On-premise deployment options',
        '24/7 dedicated support engineer',
        'Custom ETL script migrations',
        'Audit logs & advanced SSO access'
      ]
    }
  ] as PricingTier[],
  
  currencies: [
    { code: 'USD', symbol: '$', locale: 'en-US' },
    { code: 'INR', symbol: '₹', locale: 'en-IN' },
    { code: 'EUR', symbol: '€', locale: 'de-DE' }
  ] as CurrencyConfig[],
  
  annualDiscount: 0.20 // 20% discount
};
