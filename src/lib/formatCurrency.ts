import { pricingConfig } from '../config/pricing';

export function formatCurrency(cents: number, currencyCode: string): string {
  const currency = pricingConfig.currencies.find(c => c.code === currencyCode) || pricingConfig.currencies[0];
  const value = cents / 100;
  
  // Format based on the currency-specific locale so spacing and symbols are native
  return new Intl.NumberFormat(currency.locale, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: cents % 100 === 0 ? 0 : 2,
    maximumFractionDigits: 2
  }).format(value);
}
