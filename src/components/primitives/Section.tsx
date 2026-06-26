import React from 'react';
import { cn } from '../../utils/cn';
import styles from './Section.module.css';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  ariaLabelledBy: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  ariaLabelledBy,
  className,
  ...props
}) => {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(styles.section, className)}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
