import * as React from 'react';
import styles from './Spacer.module.css';

const gapSizes = {
    400: styles.gapMedium,
    500: styles.gap,
    600: styles.gap,
} as const;

type SpacerProps = {
  children: React.ReactNode,
  gap?: keyof typeof gapSizes,
}

function Spacer({ gap = 400, children }: SpacerProps) {
  const gapClass = gapSizes[gap];

  return (
    <div className={`${styles.container} ${gapClass}`}>
      {children}
    </div>
  )
}

export default Spacer;