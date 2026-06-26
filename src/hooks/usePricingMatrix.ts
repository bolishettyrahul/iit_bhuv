import { useMemo } from 'react';
import { calculatePrice, CalculatedPrice } from '../lib/pricingEngine';

export function usePricingMatrix(
  basePriceUSD: number,
  currencyCode: string,
  billingCycle: 'monthly' | 'annual'
): CalculatedPrice {
  return useMemo(() => {
    return calculatePrice(basePriceUSD, currencyCode, billingCycle);
  }, [basePriceUSD, currencyCode, billingCycle]);
}
