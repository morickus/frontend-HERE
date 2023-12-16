import React from 'react'
import styles from './Header.module.css'
import BellOutlined from '@ant-design/icons/BellOutlined'
import SearchOutlined from '@ant-design/icons/SearchOutlined'
import UserOutlined from '@ant-design/icons/UserOutlined'
import DeleteRowOutlined from '@ant-design/icons/DeleteRowOutlined'
import Input from 'antd/lib/input'
import Badge from 'antd/lib/badge'
import Avatar from 'antd/lib/avatar'
import Link from 'next/link'

const Header = () => {
  const logout = () => {

  }

  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <Input size="large" placeholder="Ищем..." prefix={<SearchOutlined />} className={styles.search} />
      </div>
      <div className={styles.right}>
        <Link href="/" className={styles.badge}>
          <Badge count={1} color="#5691F8" offset={[-4, 5]}>
            <BellOutlined className={styles.icon} />
          </Badge>
        </Link>
        <Link href="/account" className={styles.user}>
          <Avatar size={60} icon={<UserOutlined />} />
          <div className={styles['info-user']}>
            <span className={styles['info-user__name']}>
              Mark
            </span>
            <span className={styles['info-user__role']}>
              администратор
            </span>
          </div>
        </Link>
        <div onClick={logout}>
          <DeleteRowOutlined className={styles.logout} />
        </div>
      </div>
    </div>
  )
}

export default Header