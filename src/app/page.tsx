import React from 'react';
import Navbar from '../components/sections/Navbar';
import Hero from '../components/sections/Hero';
import Problem from '../components/sections/Problem';
import Solution from '../components/sections/Solution';
import FeatureShowcase from '../components/sections/FeatureShowcase';
import BentoAccordion from '../components/sections/BentoAccordion';
import WorksWith from '../components/sections/WorksWith';
import DeveloperExperience from '../components/sections/DeveloperExperience';
import Testimonials from '../components/sections/Testimonials';
import PricingPanel from '../components/sections/pricing/PricingPanel';
import FAQ from '../components/sections/FAQ';
import FinalCTA from '../components/sections/FinalCTA';
import Footer from '../components/sections/Footer';
import ScrollReveal from '../components/shared/ScrollReveal';

export const metadata = {
  title: 'DataFlow — Premium Data Ingestion & Pipeline Automation',
  description: 'Connect database sources, map schemas, and monitor automated pipelines without writing custom ETL scripts or glue code.',
  alternates: {
    canonical: 'https://dataflow.dev'
  }
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        
        <ScrollReveal threshold={0.1}>
          <Problem />
        </ScrollReveal>
        
        <ScrollReveal threshold={0.1}>
          <Solution />
        </ScrollReveal>
        
        <ScrollReveal threshold={0.1}>
          <FeatureShowcase />
        </ScrollReveal>
        
        <ScrollReveal threshold={0.1}>
          <BentoAccordion />
        </ScrollReveal>
        
        <ScrollReveal threshold={0.1}>
          <WorksWith />
        </ScrollReveal>
        
        <ScrollReveal threshold={0.1}>
          <DeveloperExperience />
        </ScrollReveal>
        
        <ScrollReveal threshold={0.1}>
          <Testimonials />
        </ScrollReveal>
        
        <ScrollReveal threshold={0.1}>
          <PricingPanel />
        </ScrollReveal>
        
        <ScrollReveal threshold={0.1}>
          <FAQ />
        </ScrollReveal>
        
        <ScrollReveal threshold={0.1}>
          <FinalCTA />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
