# Codebase Instructions & Design System Directory

This folder contains 12 structured XML files detailing the precise technical, visual, structural, and logical specifications for implementing the Premium AI SaaS Landing Page.

## Directory Index & Reference Triggers

Refer to the table below to understand which XML configuration file should be read and applied during different phases of the development lifecycle:

| Document / Filename | Phase / Context | When to Reference & Use |
| :--- | :--- | :--- |
| **[document_01_requirements_analysis.xml](file:///c:/Users/bolis/OneDrive/Desktop/iit_bhuv/instructions/document_01_requirements_analysis.xml)** | Project Initialization | At the start of implementation to align on KPI goals, section-by-section specs, and Core Web Vitals budgets. |
| **[document_02_asset_analysis.xml](file:///c:/Users/bolis/OneDrive/Desktop/iit_bhuv/instructions/document_02_asset_analysis.xml)** | Static Asset Audit & Font Setup | When importing SVGs as components, binding typographic weights, setting color variables, and configuring easing durations. |
| **[document_03_technical_architecture.xml](file:///c:/Users/bolis/OneDrive/Desktop/iit_bhuv/instructions/document_03_technical_architecture.xml)** | Core Framework & Routing Setup | When designing folder structure, defining RSC vs RCC boundaries, and implementing layout error/loading boundaries. |
| **[document_04_design_system.xml](file:///c:/Users/bolis/OneDrive/Desktop/iit_bhuv/instructions/document_04_design_system.xml)** | Design Tokens & Global CSS Setup | When writing `globals.css` custom properties, padding scales, border-radii, card shadow states, and button controls. |
| **[document_05_landing_page_storytelling.xml](file:///c:/Users/bolis/OneDrive/Desktop/iit_bhuv/instructions/document_05_landing_page_storytelling.xml)** | Content & Section Assembly | When writing the copy, positioning timeline steps, structuring feature micro-stories, and laying out the Bento blocks. |
| **[document_06_ui_architecture.xml](file:///c:/Users/bolis/OneDrive/Desktop/iit_bhuv/instructions/document_06_ui_architecture.xml)** | Component Definition & Composability | When establishing component composition rules, state scopes, dynamic data paths, and writing typescript interfaces. |
| **[document_07_pricing_logic.xml](file:///c:/Users/bolis/OneDrive/Desktop/iit_bhuv/instructions/document_07_pricing_logic.xml)** | Financial Calculations Engine | When writing the pricing calculations hook, setting PPP multipliers, integrating locale formatting, and validating inputs. |
| **[document_08_state_isolation.xml](file:///c:/Users/bolis/OneDrive/Desktop/iit_bhuv/instructions/document_08_state_isolation.xml)** | State Management & Render Profiling | When isolating selectors state variables, debouncing event hooks, applying scroll locks, and optimizing rendering passes. |
| **[document_09_motion_system.xml](file:///c:/Users/bolis/OneDrive/Desktop/iit_bhuv/instructions/document_09_motion_system.xml)** | Custom Animations & Transitions | When writing keyframe entries, viewport intersection hooks, 3D card tilt behaviors, and prefers-reduced-motion media controls. |
| **[document_10_seo_accessibility_performance.xml](file:///c:/Users/bolis/OneDrive/Desktop/iit_bhuv/instructions/document_10_seo_accessibility_performance.xml)** | Indexing, a11y, & Web Vitals | When writing robots/sitemaps, JSON-LD schemas, skip-to-content links, tab focus traps, ARIA rules, and image dimensions. |
| **[document_11_responsive_strategy.xml](file:///c:/Users/bolis/OneDrive/Desktop/iit_bhuv/instructions/document_11_responsive_strategy.xml)** | Breakpoint Adapters & Touch controls | When coding media queries, responsive column wraps, mobile navigation drawers, horizontal swiping cards, and touch sizes. |
| **[document_12_implementation_roadmap.xml](file:///c:/Users/bolis/OneDrive/Desktop/iit_bhuv/instructions/document_12_implementation_roadmap.xml)** | Build Phases & Launch Verification | When following development phases, executing quality check gateways, and running pre-launch performance testing checklists. |

---

## Architectural Rules for Development
1. **No External Libraries**: Do not add packages like Tailwind, Framer Motion, GSAP, Radix UI, Lucide, or Shadcn. Use custom CSS variables, custom styles, and standard HTML structures.
2. **GPU Animations Only**: Transitions must target only `transform`, `opacity`, and `filter`. Do not animate layout metrics.
3. **Strict State Isolation**: Dynamic client states (pricing billing selectors, currency selectors, accordion panels, mobile drawer sliders) must be isolated to leaf nodes. Sibling sections must not re-render.
4. **WCAG Compliance**: Keep touch sizes `>= 44px x 44px`, maintain color contrasts `>= 4.5:1`, manage focus traps, and configure prefers-reduced-motion selectors.
