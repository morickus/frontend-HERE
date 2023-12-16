import React, { useState } from 'react'
import MainLayout from '@/layouts/MainLayout'
import styles from '@/styles/UserById.module.css'
import UserOutlined from '@ant-design/icons/UserOutlined'
import SendOutlined from '@ant-design/icons/SendOutlined'
import Avatar from 'antd/lib/avatar'
import Input from 'antd/lib/input'
import Button from 'antd/lib/button'
import Space from 'antd/lib/space'

const UserById = () => {
  const [tab, setTab] = useState('users')
  const [input, setInput] = useState<string>('')
  const [messages, setMessages] = useState<string[]>([])

  const tabs = [
    {text: 'Пользователь', key: 'users'},
    {text: 'Статистика', key: 'statistic'},
    {text: 'Написать', key: 'chat'},
  ]

  const onSend = () => {
    setMessages(prev => [...prev, input])
    setInput('')
  }

  return (
    <MainLayout>
      <span className='title'>Профиль</span>
      <div className={styles.root}>
        <div className={styles.tabs}>
          {tabs.map(i => (
            <div
              key={i.key}
              onClick={() => setTab(i.key)}
              className={`${styles['tabs__item']} ${tab == i.key && styles.active}`}
            >
              {i.text}
            </div>
          ))}
        </div>
        <div className={styles.wrap}>
          <span className={styles.title}>Пользователь</span>
          <div className={styles.content}>
            <div className={styles.user}>
              <Avatar size={100} icon={<UserOutlined />} />
              <div className={styles['user__info']}>
                <span>Андрей Пташкин</span>
                <p>Аналитик</p>
                <p>Москва</p>
              </div>
            </div>
            {tab == 'users' && (
              <div className={styles.info}>
                <div className={styles['info__row']}>
                  <span className={styles['info__label']}>Пол:</span>
                  <span className={styles['info__value']}>мужской</span>
                </div>
                <div className={styles['info__row']}>
                  <span className={styles['info__label']}>Дата рождения:</span>
                  <span className={styles['info__value']}>17.12.2000</span>
                </div>
                <div className={styles['info__row']}>
                  <span className={styles['info__label']}>Телефон:</span>
                  <span className={styles['info__value']}>+7-800-555-35-35</span>
                </div>
                <div className={styles['info__row']}>
                  <span className={styles['info__label']}>Эл. почта:</span>
                  <span className={styles['info__value']}>yanasvazi@gmail.com</span>
                </div>
                <div className={styles['info__row']}>
                  <span className={styles['info__label']}>Соц. сети:</span>
                  <span className={styles['info__value']}>@tg</span>
                </div>
              </div>
            )}
            {tab == 'chat' && (
              <div className={styles.chat}>
                <div className={styles['chat__messages']}>
                  {messages.length ? (
                    messages.map(i => (
                      <div className={styles['chat__message']}>{i}</div>
                    ))
                    ) : (
                    <span className={styles.empty}>Нет сообщений</span>
                  )}
                </div>
                <Space.Compact style={{ width: '100%' }}>
                  <Input placeholder="Начните вашу историю с..." value={input} onChange={e => setInput(e.currentTarget.value)} className={styles.input} onPressEnter={onSend} />
                  <Button className={styles.submit} onClick={onSend}><SendOutlined style={{ fontSize: 24 }} /></Button>
                </Space.Compact>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default UserById