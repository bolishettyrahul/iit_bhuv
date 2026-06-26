import React from 'react';
import { pricingConfig } from '../../../config/pricing';
import styles from './CurrencySelector.module.css';

interface CurrencySelectorProps {
  activeCurrency: string;
  onChange: (currency: string) => void;
}

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({ activeCurrency, onChange }) => {
  return (
    <div className={styles.selectorWrap}>
      <label htmlFor="currency-select" className={styles.label}>
        Currency
      </label>
      <div className={styles.selectContainer}>
        <select
          id="currency-select"
          className={styles.select}
          value={activeCurrency}
          onChange={(e) => onChange(e.target.value)}
        >
          {pricingConfig.currencies.map((c) => (
            <option key={c.code} value={c.code}>
              {c.code} ({c.symbol})
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencySelector;
