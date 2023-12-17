import React, { useEffect, useState } from 'react'
import MainLayout from '@/layouts/MainLayout'
import styles from '@/styles/Home.module.css'
import { BarList, DonutChart } from '@tremor/react'
import { arrayRole } from '../../data'
import axios from '@/utils/axios'
import Empty from 'antd/lib/empty'

export interface MainData {
  new_users_30: number
  grades: {
    Junior: number
    Middle: number
    Senior: number
  },
  roles: {
    backend: number
    ux_ui: number
    product_manager: number
    frontend: number
    fullstack: number
    analyst: number
  },
  avg_time: number
  new_events: number
  new_reacts: number
}

const Home = () => {
  const [data, setData] = useState<MainData>()

  useEffect(() => {
    axios.get('/maindata')
      .then(e => setData(e.data))
  }, [])

  const roles = arrayRole.map(i => {
    return {
      ...i,
      roles: data?.roles && data?.roles[i.value] || 0
    }
  })

  return (
    <MainLayout>
      <span className='title'>Главная</span>
      <div className={styles.root}>
        {data ? (
          <>
            <span className={styles.title}>Информация за последние 30 дней</span>
            <div className={styles['wrap-statistic']}>
              <div>
                <span className={styles.label}>Среднее время сеанса</span>
                <p className={styles.value}>{data.avg_time}минут</p>
              </div>
              <div>
                <span className={styles.label}>Обратные связи</span>
                <p className={styles.value}>{data.new_reacts}</p>
              </div>
              <div>
                <span className={styles.label}>Роли</span>
                <DonutChart
                  className="mt-6"
                  data={roles}
                  category="roles"
                  index="name"
                />
                <br/>
                <BarList data={roles.map(i => ({name: i.label, value: i.roles}))} />
              </div>
              <div>
                <span className={styles.label}>Количествово мероприятий</span>
                <p className={styles.value}>{data.new_events}</p>
              </div>
            </div>
          </>
        ) : <Empty />}
      </div>
    </MainLayout>
  )
}

export default Home