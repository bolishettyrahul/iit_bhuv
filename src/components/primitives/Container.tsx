import React from 'react';
import { cn } from '../../utils/cn';
import styles from './Container.module.css';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  clean?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  clean = false,
  className,
  ...props
}) => {
  return (
    <div className={cn(!clean && styles.container, className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
