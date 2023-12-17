import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from '@/utils/axios'
import MainLayout from '@/layouts/MainLayout'
import styles from '@/styles/Home.module.css'
import { BarList, DonutChart } from '@tremor/react'
import { events, roles } from '../../data'

const Home = () => {
  return (
    <MainLayout>
      <span className='title'>Главная</span>
      <div className={styles.root}>
        <span className={styles.title}>Информация за последние 30 дней</span>
        <div className={styles['wrap-statistic']}>
          <div>
            <span className={styles.label}>Среднее время сеанса</span>
            <p className={styles.value}>00ч03м02с</p>
          </div>
          <div>
            <span className={styles.label}>Обратные связи</span>
            <p className={styles.value}>321</p>
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
            <BarList data={roles.map(i => ({name: i.name, value: i.roles}))} />
          </div>
          <div>
            <span className={styles.label}>Количествово мероприятий</span>
            <DonutChart
              className="mt-6"
              data={events}
              category="count"
              index="name"
            />
            <br/>
            <BarList data={roles.map(i => ({name: i.name, value: i.roles}))} />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Home