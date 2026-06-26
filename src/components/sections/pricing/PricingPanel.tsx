'use client';

import React, { useState } from 'react';
import { pricingConfig } from '../../../config/pricing';
import { Container } from '../../primitives/Container';
import { Badge } from '../../primitives/Badge';
import BillingToggle from './BillingToggle';
import CurrencySelector from './CurrencySelector';
import PricingCard from './PricingCard';
import styles from './PricingPanel.module.css';

export const PricingPanel: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [activeCurrency, setActiveCurrency] = useState<string>('USD');

  return (
    <section id="pricing" className={styles.section} aria-labelledby="pricing-title">
      <Container>
        <div className={styles.headerBlock}>
          <div className={styles.badgeWrapper}>
            <Badge>Pricing Options</Badge>
          </div>
          <h2 id="pricing-title" className={styles.title}>Flexible, value-aligned plans</h2>
          <p className={styles.description}>
            Regional exchange rates with a 20% commitment discount for annual billing.
          </p>
        </div>

        {/* Client Selection Controls */}
        <div className={styles.controlsRow}>
          <BillingToggle billingCycle={billingCycle} onChange={setBillingCycle} />
          <CurrencySelector activeCurrency={activeCurrency} onChange={setActiveCurrency} />
        </div>

        {/* Pricing Cards Grid */}
        <div className={styles.pricingGrid}>
          {pricingConfig.tiers.map((tier) => (
            <div key={tier.id} className={styles.gridCol}>
              <PricingCard
                tier={tier}
                billingCycle={billingCycle}
                activeCurrency={activeCurrency}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PricingPanel;
