import { FC, PropsWithChildren, useEffect, useState } from 'react'
import styles from './MainLayout.module.css'
import SideMenu from '@/widgets/SideMenu'
import Header from '@/widgets/Header'
import { useRouter } from 'next/navigation'

const MainLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props
  const { push } = useRouter()

  useEffect(() => {
    if (localStorage.getItem('access_token') === null) {
      push('/login')
    }
  }, [])

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