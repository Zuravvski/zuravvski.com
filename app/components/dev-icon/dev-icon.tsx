import clsx from 'clsx';
import { DevIconType } from './dev-icon-type';

interface DevIconProps {
  icon: DevIconType;
  colored?: boolean;
}

export const DevIcon = ({ icon, colored = false }: DevIconProps) => {
  return (
    <i className={clsx(`devicon-${icon}-plain`, colored && 'colored', 'transition-colors')} />
  )
}
