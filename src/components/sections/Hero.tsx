'use client';

import React, { useEffect, useRef } from 'react';
import { contentConfig } from '../../config/content';
import { Container } from '../primitives/Container';
import { Button } from '../primitives/Button';
import { Badge } from '../primitives/Badge';
import { CubeIcon, CogIcon, ArrowPathIcon, LinkIcon, ChartPieIcon } from '../icons';
import { Marquee } from '../primitives/Marquee';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const { hero } = contentConfig;
  const containerRef = useRef<HTMLDivElement>(null);
  const cockpitRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Parallax Scroll Tracker
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      containerRef.current.style.setProperty('--scroll-y', `${scrollY}px`);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // 3D Card Tilt mouse tracker
    const cockpit = cockpitRef.current;
    if (!cockpit) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = cockpit.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Calculate rotation deg (clamped to max 12 deg)
      const rotateX = -(y / (rect.height / 2)) * 12;
      const rotateY = (x / (rect.width / 2)) * 12;
      
      cockpit.style.setProperty('--rx', `${rotateX}deg`);
      cockpit.style.setProperty('--ry', `${rotateY}deg`);
    };
    
    const handleMouseLeave = () => {
      cockpit.style.setProperty('--rx', '0deg');
      cockpit.style.setProperty('--ry', '0deg');
    };
    
    cockpit.addEventListener('mousemove', handleMouseMove);
    cockpit.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (cockpit) {
        cockpit.removeEventListener('mousemove', handleMouseMove);
        cockpit.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section id="hero" ref={containerRef} className={styles.heroSection}>
      <Container className={styles.heroContainer}>
        {/* Left Column - Copy & CTA */}
        <div className={styles.headlineBlock}>
          <div className={styles.badgeWrapper}>
            <Badge className={styles.productBadge}>
              <CubeIcon className={styles.badgeIcon} />
              {hero.badge}
            </Badge>
          </div>
          
          <h1 className={styles.mainTitle}>{hero.title}</h1>
          <p className={styles.description}>{hero.description}</p>
          
          <div className={styles.actionsGroup}>
            <Button as="a" href="#pricing" variant="primary" className={styles.primaryBtn}>
              {hero.primaryCTA}
            </Button>
            <Button as="a" href="#dx" variant="outline" className={styles.secondaryBtn}>
              {hero.secondaryCTA}
            </Button>
          </div>
          
          <p className={styles.frictionText}>{hero.frictionReducer}</p>
        </div>

        {/* Right Column - Product Ingestion Cockpit */}
        <div className={styles.cockpitBlock} aria-hidden="true">
          <div ref={cockpitRef} className={styles.cockpitCard}>
            <div className={styles.cockpitHeader}>
              <div className={styles.cockpitStatusDot} />
              <span className={styles.cockpitTitle}>Platform Engine Status</span>
            </div>
            
            {/* Visual Pipeline Flow */}
            <div className={styles.pipelineVisual}>
              <div className={styles.pipelineNode}>
                <div className={styles.nodeIconWrap}>
                  <CubeIcon />
                </div>
                <span className={styles.nodeLabel}>{hero.cockpit.source.label}</span>
                <span className={styles.nodeStatus}>{hero.cockpit.source.status}</span>
              </div>
              
              <div className={styles.pipelineConnector}>
                <div className={styles.connectorLine} />
              </div>
              
              <div className={styles.pipelineNode}>
                <div className={styles.nodeIconWrap}>
                  <CogIcon />
                </div>
                <span className={styles.nodeLabel}>{hero.cockpit.mapper.label}</span>
                <span className={styles.nodeStatus}>{hero.cockpit.mapper.status}</span>
              </div>
              
              <div className={styles.pipelineConnector}>
                <div className={styles.connectorLine} />
              </div>
              
              <div className={styles.pipelineNode}>
                <div className={styles.nodeIconWrap}>
                  <ArrowPathIcon />
                </div>
                <span className={styles.nodeLabel}>{hero.cockpit.validator.label}</span>
                <span className={styles.nodeStatus}>{hero.cockpit.validator.status}</span>
              </div>
              
              <div className={styles.pipelineConnector}>
                <div className={styles.connectorLine} />
              </div>
              
              <div className={styles.pipelineNode}>
                <div className={styles.nodeIconWrap}>
                  <LinkIcon />
                </div>
                <span className={styles.nodeLabel}>{hero.cockpit.warehouse.label}</span>
                <span className={styles.nodeStatus}>{hero.cockpit.warehouse.status}</span>
              </div>
            </div>
            
            {/* Live Metric Pills */}
            <div className={styles.cockpitMetrics}>
              {hero.cockpit.metrics.map((metric, idx) => (
                <div key={idx} className={styles.metricPill}>
                  <span className={styles.metricLabel}>{metric.label}</span>
                  <span className={styles.metricValue}>{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      
      <div className={styles.heroMarqueeBelt} aria-hidden="true">
        <Marquee speed="slow" pauseOnHover={false} direction="left">
          <span className={styles.marqueeItem} style={{ '--glow-color': '#0064a5' } as React.CSSProperties}>
            <CubeIcon className={styles.marqueeIcon} />
            POSTGRESQL_PIPELINE
          </span>
          <span className={styles.marqueeItem} style={{ '--glow-color': '#29b5e8' } as React.CSSProperties}>
            <ArrowPathIcon className={styles.marqueeIcon} />
            SNOWFLAKE_INGEST
          </span>
          <span className={styles.marqueeItem} style={{ '--glow-color': '#ff9900' } as React.CSSProperties}>
            <LinkIcon className={styles.marqueeIcon} />
            AWS_S3_CONNECTOR
          </span>
          <span className={styles.marqueeItem} style={{ '--glow-color': '#4285f4' } as React.CSSProperties}>
            <ChartPieIcon className={styles.marqueeIcon} />
            BIGQUERY_TARGET
          </span>
          <span className={styles.marqueeItem} style={{ '--glow-color': '#de350b' } as React.CSSProperties}>
            <CogIcon className={styles.marqueeIcon} />
            KAFKA_STREAM_SOURCE
          </span>
          <span className={styles.marqueeItem} style={{ '--glow-color': '#47a248' } as React.CSSProperties}>
            <CubeIcon className={styles.marqueeIcon} />
            MONGODB_DOCUMENT_FLOW
          </span>
          <span className={styles.marqueeItem} style={{ '--glow-color': '#005571' } as React.CSSProperties}>
            <LinkIcon className={styles.marqueeIcon} />
            ELASTICSEARCH_INDEX
          </span>
          <span className={styles.marqueeItem} style={{ '--glow-color': '#ffc801' } as React.CSSProperties}>
            <ArrowPathIcon className={styles.marqueeIcon} />
            REDSHIFT_SYNC_WAREHOUSE
          </span>
        </Marquee>
      </div>
    </section>
  );
};

export default Hero;
