import { pricingConfig } from '../config/pricing';

export interface CalculatedPrice {
  totalCents: number;
  displayPriceCents: number;
  currencySymbol: string;
  perUnitLabel: string;
  billingFrequencyLabel: string;
}

export function calculatePrice(
  basePriceUSD: number,
  currencyCode: string,
  billingCycle: 'monthly' | 'annual'
): CalculatedPrice {
  const currency = pricingConfig.currencies.find(c => c.code === currencyCode) || pricingConfig.currencies[0];
  const multiplier = currency.multiplier;
  
  // Calculate base monthly price in cents
  const baseMonthlyCents = basePriceUSD * 100;
  
  if (basePriceUSD === 0) {
    return {
      totalCents: 0,
      displayPriceCents: 0,
      currencySymbol: currency.symbol,
      perUnitLabel: '/mo',
      billingFrequencyLabel: 'Free forever'
    };
  }
  
  if (billingCycle === 'monthly') {
    const totalCents = Math.round(baseMonthlyCents * multiplier);
    return {
      totalCents,
      displayPriceCents: totalCents,
      currencySymbol: currency.symbol,
      perUnitLabel: '/mo',
      billingFrequencyLabel: 'billed monthly'
    };
  } else {
    // Annual billing: 20% discount (0.80 multiplier)
    const discountFactor = 1 - pricingConfig.annualDiscount;
    const discountedMonthlyCents = baseMonthlyCents * discountFactor;
    
    // Annual total in cents
    const totalCents = Math.round(discountedMonthlyCents * 12 * multiplier);
    
    // Monthly equivalent in cents
    const displayPriceCents = Math.round(discountedMonthlyCents * multiplier);
    
    return {
      totalCents,
      displayPriceCents,
      currencySymbol: currency.symbol,
      perUnitLabel: '/mo',
      billingFrequencyLabel: `billed annually (${currency.symbol}${Math.round(totalCents / 100)}/yr)`
    };
  }
}
export interface ExchangeRateProvider {
  getRate(targetCurrency: string): Promise<number> | number;
}

export class StaticExchangeRateProvider implements ExchangeRateProvider {
  getRate(targetCurrency: string): number {
    const currency = pricingConfig.currencies.find(c => c.code === targetCurrency);
    return currency ? currency.multiplier : 1.0;
  }
}
