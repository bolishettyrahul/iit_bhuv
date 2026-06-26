import { useMemo } from 'react';
import { calculatePrice, CalculatedPrice } from '../lib/pricingEngine';

export function usePricingMatrix(
  prices: { [currencyCode: string]: number },
  currencyCode: string,
  billingCycle: 'monthly' | 'annual'
): CalculatedPrice {
  return useMemo(() => {
    return calculatePrice(prices, currencyCode, billingCycle);
  }, [prices, currencyCode, billingCycle]);
}
