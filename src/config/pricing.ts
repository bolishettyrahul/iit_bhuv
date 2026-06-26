export interface PricingTier {
  id: string;
  name: string;
  basePriceUSD: number;
  features: string[];
}

export interface CurrencyConfig {
  code: string;
  symbol: string;
  multiplier: number;
  locale: string;
}

export const pricingConfig = {
  tiers: [
    {
      id: 'starter',
      name: 'Starter',
      basePriceUSD: 0,
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
      basePriceUSD: 50,
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
      basePriceUSD: 250,
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
    { code: 'USD', symbol: '$', multiplier: 1.0, locale: 'en-US' },
    { code: 'INR', symbol: '₹', multiplier: 83.0, locale: 'en-IN' }, // Actual exchange rate multiplier
    { code: 'EUR', symbol: '€', multiplier: 0.92, locale: 'de-DE' } // Actual exchange rate multiplier
  ] as CurrencyConfig[],
  
  annualDiscount: 0.20 // 20% discount
};
