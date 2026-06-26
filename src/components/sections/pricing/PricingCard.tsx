import React from 'react';
import { PricingTier } from '../../../config/pricing';
import { Card } from '../../primitives/Card';
import { Button } from '../../primitives/Button';
import { Badge } from '../../primitives/Badge';
import { usePricingMatrix } from '../../../hooks/usePricingMatrix';
import { formatCurrency } from '../../../lib/formatCurrency';
import { ArrowTrendingUpIcon } from '../../icons';
import styles from './PricingCard.module.css';

interface PricingCardProps {
  tier: PricingTier;
  billingCycle: 'monthly' | 'annual';
  activeCurrency: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  tier,
  billingCycle,
  activeCurrency
}) => {
  const priceDetails = usePricingMatrix(tier.basePriceUSD, activeCurrency, billingCycle);
  const formattedPrice = formatCurrency(priceDetails.displayPriceCents, activeCurrency);
  const isPro = tier.id === 'pro';
  
  return (
    <Card variant="pricing" highlighted={isPro} className={styles.pricingCard}>
      {isPro && (
        <div className={styles.badgeBanner}>
          <Badge className={styles.recommendedBadge}>
            <ArrowTrendingUpIcon className={styles.recommendedIcon} />
            Recommended
          </Badge>
        </div>
      )}
      
      <div className={styles.cardHeader}>
        <h3 className={styles.tierName}>{tier.name}</h3>
        <div className={styles.priceRow}>
          <span className={styles.priceVal}>{formattedPrice}</span>
          <span className={styles.priceUnit}>{priceDetails.perUnitLabel}</span>
        </div>
        <p className={styles.billingLabel}>{priceDetails.billingFrequencyLabel}</p>
      </div>
      
      <div className={styles.featuresSection}>
        <ul className={styles.featuresList}>
          {tier.features.map((feat, idx) => (
            <li key={idx} className={styles.featureItem}>
              <span className={styles.checkmark} aria-hidden="true">✓</span>
              <span className={styles.featureText}>{feat}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={styles.actionWrap}>
        <Button
          as="a"
          href={tier.id === 'enterprise' ? 'mailto:sales@dataflow.dev' : '#pricing'}
          variant={isPro ? 'primary' : 'outline'}
          className={styles.ctaBtn}
        >
          {tier.id === 'starter' && 'Build Free Pipeline'}
          {tier.id === 'pro' && 'Deploy Pro Pipeline'}
          {tier.id === 'enterprise' && 'Contact Sales'}
        </Button>
      </div>
    </Card>
  );
};

export default PricingCard;
