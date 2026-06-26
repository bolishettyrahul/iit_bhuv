export const motionConfig = {
  easings: {
    snappy: 'cubic-bezier(0.19, 1, 0.22, 1)',   // Ultra-premium industrial curve
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',     // Standard fluid curve
    micro: 'cubic-bezier(0.16, 1, 0.3, 1)',     // Snappy hover responses
    accordion: 'cubic-bezier(0.25, 1, 0.5, 1)'  // Custom smooth easing for accordions
  },
  durations: {
    entry: 500,     // Hero/Loading transitions
    transition: 300, // Card slide-outs/Accordions
    hover: 150      // Button feedback loop
  },
  revealOffset: 30 // Distance of translation during reveal in pixels
};
