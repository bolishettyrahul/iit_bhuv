import React from 'react';
import styles from './BillingToggle.module.css';

interface BillingToggleProps {
  billingCycle: 'monthly' | 'annual';
  onChange: (cycle: 'monthly' | 'annual') => void;
}

export const BillingToggle: React.FC<BillingToggleProps> = ({ billingCycle, onChange }) => {
  return (
    <div className={styles.toggleWrap}>
      <button
        type="button"
        className={`${styles.toggleBtn} ${billingCycle === 'monthly' ? styles.active : ''}`}
        onClick={() => onChange('monthly')}
      >
        Monthly
      </button>
      <button
        type="button"
        className={`${styles.toggleBtn} ${billingCycle === 'annual' ? styles.active : ''}`}
        onClick={() => onChange('annual')}
      >
        Annual (Save 20%)
      </button>
    </div>
  );
};

export default BillingToggle;
