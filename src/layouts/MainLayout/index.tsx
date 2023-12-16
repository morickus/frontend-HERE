import { FC, PropsWithChildren, useState } from 'react'
import styles from './MainLayout.module.css'
import SideMenu from '@/widgets/SideMenu'
import Header from '@/widgets/Header'

const MainLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <div>
      <Header />
      <SideMenu />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default MainLayout