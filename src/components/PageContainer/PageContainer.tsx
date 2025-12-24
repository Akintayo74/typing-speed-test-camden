import * as React from 'react';
import styles from './PageContainer.module.css';

type PageContainerProps = {
  children: React.ReactNode
}

function PageContainer({children}: PageContainerProps) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
} 

export default PageContainer;