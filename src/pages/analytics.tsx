import React from 'react'
import MainLayout from '@/layouts/MainLayout'
import styles from '@/styles/Analytics.module.css'
import stylesHome from '@/styles/Home.module.css'
import { AreaChart, BarChart, BarList, DonutChart, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@tremor/react'
import { roles, events, loyalty, budget, sales, expenses } from '../../data'

const Analytics = () => {
  const valueFormatter = (number: number) => {
    return "$ " + new Intl.NumberFormat("us").format(number).toString();
  };

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
          <TabPanels>
            <TabPanel>
              <div className={stylesHome['wrap-statistic']}>
                <div>
                  <span className={stylesHome.label}>Среднее время сеанса</span>
                  <p className={stylesHome.value}>00ч03м02с</p>
                </div>
                <div>
                  <span className={stylesHome.label}>Общее кол-во времени</span>
                  <p className={stylesHome.value}>7405.2ч</p>
                </div>
                <div>
                  <span className={stylesHome.label}>Лояльность</span>
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
                  <p className="text-3xl font-bold">${budget.map(i => i.amount).reduce((accumulator, currentValue) => accumulator + currentValue, 0,)}</p>
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
                  <p className="text-3xl font-bold">${expenses.map(i => i.amount).reduce((accumulator, currentValue) => accumulator + currentValue, 0,)}</p>
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
                    data={[{name: 'Женский', count: 12}, {name: 'Мужской', count: 20}]}
                    valueFormatter={(count) => `${count}%`}
                    category="count"
                    index="name"
                  />
                  <br/>
                  <BarList data={roles.map(i => ({name: i.name, value: i.roles}))} />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              4
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </MainLayout>
  )
}

export default Analytics