'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  threshold?: number;
  delay?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  threshold = 0.15,
  delay = 0,
  className,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.classList.add('inView');
          }, delay);
          observer.unobserve(element); // Run the animation once
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, delay]);

  return (
    <div ref={ref} className={cn('revealSection', className)} {...props}>
      {children}
    </div>
  );
};

export default ScrollReveal;
