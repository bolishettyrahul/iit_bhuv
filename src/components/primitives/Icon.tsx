import React from 'react';
import * as Icons from '../icons';

export type IconName = keyof typeof Icons;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = Icons[name];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
};
