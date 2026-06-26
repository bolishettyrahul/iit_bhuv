import { pricingConfig } from '../config/pricing';

export interface CalculatedPrice {
  totalCents: number;
  displayPriceCents: number;
  currencySymbol: string;
  perUnitLabel: string;
  billingFrequencyLabel: string;
}

export function calculatePrice(
  prices: { [currencyCode: string]: number },
  currencyCode: string,
  billingCycle: 'monthly' | 'annual'
): CalculatedPrice {
  const currency = pricingConfig.currencies.find(c => c.code === currencyCode) || pricingConfig.currencies[0];
  const priceVal = prices[currencyCode] !== undefined ? prices[currencyCode] : (prices['USD'] || 0);
  
  // Calculate base monthly price in cents
  const baseMonthlyCents = priceVal * 100;
  
  if (priceVal === 0) {
    return {
      totalCents: 0,
      displayPriceCents: 0,
      currencySymbol: currency.symbol,
      perUnitLabel: '/mo',
      billingFrequencyLabel: 'Free forever'
    };
  }
  
  if (billingCycle === 'monthly') {
    return {
      totalCents: baseMonthlyCents,
      displayPriceCents: baseMonthlyCents,
      currencySymbol: currency.symbol,
      perUnitLabel: '/mo',
      billingFrequencyLabel: 'billed monthly'
    };
  } else {
    // Annual billing: 20% discount (0.80 multiplier)
    const discountFactor = 1 - pricingConfig.annualDiscount;
    const discountedMonthlyCents = baseMonthlyCents * discountFactor;
    
    // Annual total in cents
    const totalCents = Math.round(discountedMonthlyCents * 12);
    
    // Monthly equivalent in cents
    const displayPriceCents = Math.round(discountedMonthlyCents);
    
    return {
      totalCents,
      displayPriceCents,
      currencySymbol: currency.symbol,
      perUnitLabel: '/mo',
      billingFrequencyLabel: `billed annually (${currency.symbol}${Math.round(totalCents / 100)}/yr)`
    };
  }
}
