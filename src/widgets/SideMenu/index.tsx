import React from 'react'
import styles from './SideMenu.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import HomeOutlined from '@ant-design/icons/HomeOutlined'
import UserOutlined from '@ant-design/icons/UserOutlined'
import BarChartOutlined from '@ant-design/icons/BarChartOutlined'
import MailOutlined from '@ant-design/icons/MailOutlined'
import TeamOutlined from '@ant-design/icons/TeamOutlined'
import FlagOutlined from '@ant-design/icons/FlagOutlined'
import FileTextOutlined from '@ant-design/icons/FileTextOutlined'
import IdcardOutlined from '@ant-design/icons/IdcardOutlined'

const SideMenu = () => {
  const router = useRouter()

  return (
    <div className={styles.root}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="HERE Logo"
          width={190}
          height={40}
          priority
        />
      </Link>
      <nav className={styles.menu}>
        {menu.map((i, index) => (
          <Link key={index} href={i.href}>
            <div className={`${styles['menu__item']} ${router.asPath == i.href && styles.active}`}>
              <div className={styles.icon}>
                {i.icon}
                {/*<Icon name={i.iconActive} fontSize={20} color="white" />*/}
              </div>
              <span className={styles.text}>{i.text}</span>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default SideMenu

export const menu = [
  {
    text: 'Главная',
    href: '/',
    icon: <HomeOutlined style={{ fontSize: '24px' }} />
  },
  {
    text: 'Пользователи',
    href: '/users',
    icon: <UserOutlined style={{ fontSize: '24px' }} />
  },
  {
    text: 'Статистика',
    href: '/statistic',
    icon: <BarChartOutlined style={{ fontSize: '24px' }} />
  },
  {
    text: 'Рассылки',
    href: '/newsletter',
    icon: <MailOutlined style={{ fontSize: '24px' }} />
  },
  {
    text: 'Сообщества',
    href: '/community',
    icon: <TeamOutlined style={{ fontSize: '24px' }} />
  },
  {
    text: 'Соревнования',
    href: '/competition',
    icon: <FlagOutlined style={{ fontSize: '24px' }} />
  },
  {
    text: 'Отчёты',
    href: '/record',
    icon: <FileTextOutlined style={{ fontSize: '24px' }} />
  },
  {
    text: 'Аккаунт',
    href: '/account',
    icon: <IdcardOutlined style={{ fontSize: '24px' }} />
  }
]