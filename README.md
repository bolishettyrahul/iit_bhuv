# DataFlow — Premium Data Ingestion & Pipeline Automation

DataFlow is a high-performance, premium SaaS landing page designed to showcase a modern ETL pipeline automation product. Connect database sources, map schemas, and monitor automated pipelines without writing custom glue code. Built using **Next.js**, **React**, and **Vanilla CSS Modules** for clean design, responsive structure, and bespoke animations.

---

## 🚀 Key Features & Enhancements

### 1. Interactive Integrations Sandbox (Playground)
- **Live Terminal Console**: Simulated real-time logging terminal displaying database blocks, schema alignment check, metadata readings, and latency statistics.
- **Dynamic Selection Nodes**: Interactive source nodes (**PostgreSQL**, **AWS S3**) and destination target nodes (**Snowflake**, **BigQuery**, **Docker**) that update states instantly.
- **SVG Animated Beams**: Selected integrations dynamically light up connection pathways using SVG paths with flowing neon dash-array animations.
- **Metrics Dashboard**: Simulated real-time count-ups for rows synced, live latency calculations, and data rate estimations.

### 2. Animated Solution Stepper
- An auto-advancing 4-step progress timeline displaying pipeline stages.
- Each active step features a smooth progress bar overlay filling up in real-time.
- Connected lines trace the progress using an animated glowing signal packet.

### 3. Sleek Glassmorphic Design System
- **Compact Navbar**: Highly optimized 48px navbar built with responsive layout support, high-saturation blur backdrop filter (`blur(24px) saturate(220%)`), and translucent outlines.
- **Translucent Neumorphic Cards**: Standardized card components implementing glassmorphic backings, dual-shadow glows (light top-left highlight and deep bottom-right offset shadow), and glossy borders.
- **Animated Background Mesh**: A vibrant CSS radial-gradient mesh overlay utilizing custom theme colors (Mystic Mint, Deep Saffron, Forsythia, and Nocturnal Expedition) with floating blur animations.

### 4. Scroll-Triggered Drawing Borders
- Replaces static section dividers with dynamic borders that automatically expand outward from the center when a section enters the viewport.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15+ (App Router, Turbopack)
- **Core Library**: React 19
- **Styling**: Vanilla CSS Modules (custom variables & design tokens)
- **Typing**: TypeScript
- **Icons**: Lucide-inspired SVG custom components

---

## ⚙️ Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.x or later) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bolishettyrahul/iit_bhuv.git
   cd iit_bhuv
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To run the Next.js development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the interactive application.

### Build and Optimization

To build the application for production:
```bash
npm run build
```

To run the production build locally:
```bash
npm run start
```
