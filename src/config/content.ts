export const contentConfig = {
  navbar: {
    logo: 'DataFlow',
    links: [
      { label: 'Problem', href: '#problem' },
      { label: 'Features', href: '#features' },
      { label: 'Capabilities', href: '#capabilities' },
      { label: 'DX', href: '#dx' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' }
    ]
  },
  
  hero: {
    badge: 'Platform Release v1.0',
    title: 'Automate data pipelines. No glue code.',
    description: 'Connect, configure, and monitor automated pipelines without writing custom ETL scripts or manual schema mappings.',
    primaryCTA: 'Build Free Pipeline',
    secondaryCTA: 'View API Docs',
    frictionReducer: 'No credit card required. SOC2 compliant.',
    cockpit: {
      source: { label: 'Source Database', status: 'Live', icon: 'database' },
      mapper: { label: 'Schema Mapper', status: 'Active', icon: 'cog' },
      validator: { label: 'Validation Engine', status: '99.99%', icon: 'check' },
      warehouse: { label: 'Data Warehouse', status: 'Live', icon: 'link' },
      metrics: [
        { label: 'Latency', value: '23ms' },
        { label: 'Synced', value: '50M+' },
        { label: 'Uptime', value: '99.99%' }
      ]
    }
  },
  
  problem: {
    badge: 'The Problem',
    title: 'Still writing custom ETL scripts?',
    description: 'Developers waste 30% of their engineering cycles writing and maintaining brittle pipeline code.',
    painPoints: [
      {
        title: 'Manual schema mappings fail under scale',
        description: 'Any change in source database models triggers cascading pipeline breakdowns.'
      },
      {
        title: 'Broken APIs require constant maintenance',
        description: 'Third-party API updates invalidate hardcoded connectors, leading to data loss.'
      },
      {
        title: 'Glue code eats platform engineering cycles',
        description: 'Writing custom wrappers distracts engineers from building core product features.'
      }
    ]
  },
  
  solution: {
    badge: 'The Solution',
    title: 'Stateless, automated pipelines in 4 steps',
    description: 'Our platform coordinates ingestion, mapping, validation, and storage in a single unified flow.',
    steps: [
      {
        number: '01',
        title: 'Connect',
        description: 'Select database sources and analytical warehouses with a few clicks.'
      },
      {
        number: '02',
        title: 'Configure',
        description: 'Auto-detect schemas and map source columns to destination structures.'
      },
      {
        number: '03',
        title: 'Deploy',
        description: 'Run stateless, highly scalable pipelines with zero cold start delays.'
      },
      {
        number: '04',
        title: 'Monitor',
        description: 'Track logs, execution latencies, and transaction records in real-time.'
      }
    ]
  },
  
  features: {
    badge: 'Feature Showcase',
    title: 'Engineered for extreme reliability',
    description: 'A look under the hood at the technology powering our pipeline automation.',
    items: [
      {
        title: 'Automatic Schema Alignment',
        description: 'Detects schema drift in real-time, matching source and destination attributes automatically without pipeline pauses.',
        badge: 'Automation',
        metric: '99.8% match accuracy'
      },
      {
        title: 'Stateless Ingestion Architecture',
        description: 'Processes incoming records in-memory with sub-millisecond latencies, ensuring zero disk caching and full security.',
        badge: 'Performance',
        metric: 'Sub-20ms latency'
      }
    ]
  },
  
  bento: {
    badge: 'Platform Capabilities',
    title: 'Everything you need in one place',
    description: 'Hover to explore how our system handles scheduling, compliance, logs, and scale.',
    cells: [
      {
        id: 'orchestration',
        title: 'Visual Ingestion Flow',
        description: 'Design complex ingestion graphs with multiple sources, branches, and validation filters in a visual builder.',
        size: 'large',
        metric: 'Active pipelines: 1,240'
      },
      {
        id: 'security',
        title: 'Platform Compliance',
        description: 'Built-in SOC2 Type II compliance, enterprise SSO, automated data encryption, and role-based access control.',
        size: 'small',
        metric: 'SOC2 Certified'
      },
      {
        id: 'observability',
        title: 'Observability Matrix',
        description: 'Live performance metrics, error trace graphs, execution logs, and automated alerts for system warnings.',
        size: 'small',
        metric: '99.99% Ingestion Uptime'
      },
      {
        id: 'scale',
        title: 'High-Volume Processing',
        description: 'Scale from thousands of records to billions. Our distributed system scales processing threads on demand.',
        size: 'large',
        metric: '50M+ Records Synced Daily'
      }
    ]
  },
  
  worksWith: {
    badge: 'Integrations',
    title: 'Works with your existing data stack',
    description: 'Native, high-throughput connectors available out of the box with zero configuration required.',
    connectors: [
      { name: 'Snowflake', id: 'snowflake' },
      { name: 'PostgreSQL', id: 'postgresql' },
      { name: 'BigQuery', id: 'bigquery' },
      { name: 'AWS S3', id: 'aws-s3' },
      { name: 'Docker', id: 'docker' }
    ]
  },
  
  dx: {
    badge: 'Developer Experience',
    title: 'Drive pipelines your way',
    description: 'We expose a robust CLI, type-safe SDK packages, and a GraphQL API so developers retain full structural control.',
    cliCommand: 'dataflow pipeline deploy --config ./pipeline.yaml --live',
    codePreview: `# pipeline.yaml
version: "1.0"
source:
  provider: postgresql
  host: db.live.internal
  port: 5432
mapping:
  strategy: auto-align
  validation: strict
destination:
  provider: snowflake
  warehouse: main_wh`,
    items: [
      { label: 'REST API', desc: 'Secure, token-authorized REST endpoints.' },
      { label: 'Type-Safe SDK', desc: 'React, Node, Go, and Python packages.' },
      { label: 'CLI Control', desc: 'Declarative YAML configuration files.' }
    ]
  },
  
  testimonials: {
    badge: 'Social Proof',
    title: 'Trusted by technical leaders',
    description: 'What heads of platform and CTOs are saying about DataFlow.',
    items: [
      {
        quote: 'Still writing custom ETL scripts was costing us hours. We reduced ETL setup from 2 days to 20 minutes.',
        author: 'Sarah Jenkins',
        role: 'CTO at CloudBase',
        metric: '98% Time Saved'
      },
      {
        quote: 'Schema drift was constantly breaking our database mapping. Auto-sync handles 50M records with zero pipeline downtime.',
        author: 'David Chen',
        role: 'Head of Platform at Streamline',
        metric: '0% Schema Drift Failures'
      }
    ]
  },
  
  faq: {
    badge: 'FAQ',
    title: 'Common questions about getting started',
    description: 'Everything you need to know about pricing, security, and integrations.',
    items: [
      {
        question: 'How does the free tier work?',
        answer: 'The Starter plan is completely free and includes 5 automated pipelines, hourly schema synchronization, and 1,000 records synced per month. No credit card is required.'
      },
      {
        question: 'Are my database connections secure?',
        answer: 'Yes. All connections are encrypted in transit and at rest. We are SOC2 Type II certified and support SSO authentication and VPN tunneling for enterprise setups.'
      },
      {
        question: 'How does automatic schema alignment handle breaking changes?',
        answer: 'When a database column is deleted or changed, our system auto-maps additions or flags mismatches while maintaining the pipeline flow. You get notified via Slack or Webhooks.'
      },
      {
        question: 'Can I cancel or upgrade my plan at any time?',
        answer: 'Yes. You can toggle between monthly and annual plans or upgrade/downgrade from your dashboard instantly. Annual commitments receive a 20% discount.'
      },
      {
        question: 'What happens if I exceed my plan record limits?',
        answer: 'On the free tier, processing pauses until the next billing cycle. On paid plans, you are billed a minimal usage-based fee per additional million records.'
      }
    ]
  },
  
  cta: {
    title: 'Build your first automated workflow in under five minutes.',
    primaryCTA: 'Deploy Free Pipeline',
    frictionReducer: 'No credit card required. SOC2 compliant.',
    trustBadges: [
      { label: 'SOC2 Certified', icon: 'shield' },
      { label: 'SSO Ready', icon: 'lock' },
      { label: 'Audit Logs', icon: 'link' },
      { label: '99.99% Uptime', icon: 'arrow-path' },
      { label: '50M+ Synced', icon: 'cube' }
    ]
  },
  
  footer: {
    tagline: 'Automating the world\'s data pipelines.',
    copyright: `© ${new Date().getFullYear()} DataFlow Inc. All rights reserved.`,
    links: [
      {
        title: 'Product',
        items: [
          { label: 'Features', href: '#features' },
          { label: 'Capabilities', href: '#capabilities' },
          { label: 'Pricing', href: '#pricing' }
        ]
      },
      {
        title: 'Resources',
        items: [
          { label: 'Documentation', href: '#dx' },
          { label: 'API Reference', href: '#dx' },
          { label: 'Status Page', href: '#' }
        ]
      },
      {
        title: 'Company',
        items: [
          { label: 'About Us', href: '#' },
          { label: 'Security', href: '#' },
          { label: 'Contact', href: '#' }
        ]
      },
      {
        title: 'Legal',
        items: [
          { label: 'Privacy Policy', href: '#' },
          { label: 'Terms of Service', href: '#' },
          { label: 'SOC2 Report', href: '#' }
        ]
      }
    ]
  }
};
export type ContentConfig = typeof contentConfig;
