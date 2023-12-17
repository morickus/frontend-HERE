import React, { useEffect, useState } from 'react'
import MainLayout from '@/layouts/MainLayout'
import styles from '@/styles/Analytics.module.css'
import stylesHome from '@/styles/Home.module.css'
import { AreaChart, BarChart, BarList, DonutChart, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@tremor/react'
import { roles, events, loyalty, budget, sales, expenses, age, region, traffic } from '../../data'
import axios from '@/utils/axios'
import { MainData } from '@/pages/index'
import Empty from 'antd/lib/empty'

export interface AnalyticData extends MainData {
  all_time: number
  loyalty: string
  sended_msg: number
  sended_email: number
  sended_sms: number
  responded_email: number
  responded_msg: number
  responded_sms: number
}

const Analytics = () => {
  const [data, setData] = useState<AnalyticData>()

  useEffect(() => {
    axios.get('/analytdata')
      .then(e => setData(e.data))
  }, [])

  const valueFormatter = (number: number) => {
    return "$ " + new Intl.NumberFormat("us").format(number).toString();
  }
  console.log('data ',data)
  return (
    <MainLayout>
      <span className='title'>Аналитика</span>
      <div className={styles.root}>
        <TabGroup>
          <TabList className="mt-8">
            <Tab>Обзор</Tab>
            <Tab>Мероприятия</Tab>
            <Tab>Пользователи</Tab>
            <Tab>Рассылки</Tab>
          </TabList>
          {data ? (
            <>
              <TabPanels>
                <TabPanel>
                  <div className={stylesHome['wrap-statistic']}>
                    <div>
                      <span className={stylesHome.label}>Среднее время сеанса</span>
                      <p className={stylesHome.value}>{data.avg_time}минут</p>
                    </div>
                    <div>
                      <span className={stylesHome.label}>Общее количество времени</span>
                      <p className={stylesHome.value}>{data.all_time}ч</p>
                    </div>
                    <div>
                      <span className={stylesHome.label}>Лояльность</span>
                      <p className="mt-8">Средняя лояльность {data.loyalty}</p>
                      <BarChart
                        data={loyalty}
                        index="name"
                        categories={["Оценка лояльности"]}
                        colors={["blue"]}
                        yAxisWidth={30}
                        stack={true}
                        maxValue={10}
                      />
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className={stylesHome['wrap-statistic']}>
                    <div>
                      <span className={stylesHome.label}>Количествово мероприятий</span>
                      <DonutChart
                        className="mt-6"
                        data={events}
                        category="count"
                        index="name"
                      />
                      <br/>
                      <BarList data={roles.map(i => ({name: i.name, value: i.roles}))} />
                    </div>
                    <div>
                      <span className={stylesHome.label}>Общий бюджет</span>
                      <p className="mt-8">Статистика недели</p>
                      <p className="text-3xl font-bold">{budget.map(i => i.amount).reduce((accumulator, currentValue) => accumulator + currentValue, 0,)}</p>
                      <BarChart
                        className="mt-6"
                        data={budget}
                        index="name"
                        categories={['amount']}
                        colors={["blue"]}
                        yAxisWidth={48}
                        showLegend={false}
                      />
                    </div>
                    <div>
                      <span className={stylesHome.label}>Реализация плана</span>
                      <AreaChart
                        className="h-72 mt-4"
                        data={sales}
                        index="date"
                        categories={["SemiAnalysis", "The Pragmatic Engineer"]}
                        colors={["indigo", "cyan"]}
                        valueFormatter={valueFormatter}
                      />
                    </div>
                    <div>
                      <span className={stylesHome.label}>Общие затраты</span>
                      <p className="mt-8">Статистика недели</p>
                      <p className="text-3xl font-bold">{expenses.map(i => i.amount).reduce((accumulator, currentValue) => accumulator + currentValue, 0,)}</p>
                      <BarChart
                        className="mt-6"
                        data={expenses}
                        index="name"
                        categories={['amount']}
                        colors={["blue"]}
                        yAxisWidth={48}
                        showLegend={false}
                      />
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className={stylesHome['wrap-statistic']}>
                    <div>
                      <span className={stylesHome.label}>Пользователи</span>
                      <DonutChart
                        variant="pie"
                        className="mt-6"
                        data={[{name: 'Женский', count: 32}, {name: 'Мужской', count: 68}]}
                        valueFormatter={(count) => `${count}%`}
                        category="count"
                        index="name"
                      />
                      <br/>
                      <BarList
                        data={[{name: 'Женский', count: 32}, {name: 'Мужской', count: 68}].map(i => ({name: i.name, value: i.count}))}
                        valueFormatter={(count: string) => `${count}%`}
                      />
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
                      <span className={stylesHome.label}>Трафик аудитории</span>
                      <DonutChart
                        variant="pie"
                        className="mt-6"
                        data={traffic}
                        valueFormatter={(count) => `${count}%`}
                        category="count"
                        index="name"
                      />
                      <br/>
                      <BarList
                        data={traffic.map(i => ({name: i.name, value: i.count}))}
                        valueFormatter={(count: string) => `${count}%`}
                      />
                    </div>
                    <div>
                      <span className={stylesHome.label}>Возраст</span>
                      <BarChart
                        className="mt-6"
                        data={age}
                        index="name"
                        categories={['age']}
                        colors={["blue"]}
                        yAxisWidth={48}
                        showLegend={false}
                        maxValue={100}
                      />
                    </div>
                    <div>
                      <span className={stylesHome.label}>Регионы</span>
                      <BarChart
                        className="mt-6"
                        data={region}
                        index="name"
                        categories={['count']}
                        colors={["blue"]}
                        yAxisWidth={48}
                        showLegend={false}
                        maxValue={100}
                      />
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className={stylesHome['wrap-statistic']}>
                    <div>
                      <span className={stylesHome.label}>Всего отправлено рассылок</span>
                      <p className={stylesHome.value}>{data.sended_email + data.sended_msg + data.sended_sms}</p>
                    </div>
                    <div>
                      <span className={stylesHome.label}>Отправленные E-mail рассылки</span>
                      <DonutChart
                        variant="pie"
                        className="mt-6"
                        data={[{name: 'С ответом', count: data.responded_email}, {name: 'Без ответа', count: data.sended_email}]}
                        category="count"
                        index="name"
                      />
                      <br/>
                      <BarList
                        data={[{name: 'С ответом', count: data.responded_email}, {name: 'Без ответа', count: data.sended_email}].map(i => ({name: i.name, value: i.count}))}
                      />
                    </div>
                    <div>
                      <span className={stylesHome.label}>Отправленные SMS рассылки</span>
                      <DonutChart
                        variant="pie"
                        className="mt-6"
                        data={[{name: 'С ответом', count: 32}, {name: 'Без ответа', count: 68}]}
                        valueFormatter={(count) => `${count}%`}
                        category="count"
                        index="name"
                      />
                      <br/>
                      <BarList
                        data={[{name: 'С ответом', count: 32}, {name: 'Без ответа', count: 68}].map(i => ({name: i.name, value: i.count}))}
                        valueFormatter={(count: string) => `${count}%`}
                      />
                    </div>
                    <div>
                      <span className={stylesHome.label}>Отправленные Messenger рассылки</span>
                      <DonutChart
                        variant="pie"
                        className="mt-6"
                        data={[{name: 'С ответом', count: 22}, {name: 'Без ответа', count: 78}]}
                        valueFormatter={(count) => `${count}%`}
                        category="count"
                        index="name"
                      />
                      <br/>
                      <BarList
                        data={[{name: 'С ответом', count: 22}, {name: 'Без ответа', count: 78}].map(i => ({name: i.name, value: i.count}))}
                        valueFormatter={(count: string) => `${count}%`}
                      />
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </>
          ) : <Empty />}
        </TabGroup>
      </div>
    </MainLayout>
  )
}

export default Analytics