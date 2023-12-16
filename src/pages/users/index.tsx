import React, { useState, useEffect } from 'react'
import MainLayout from '@/layouts/MainLayout'
import styles from '@/styles/Users.module.css'
import Table from 'antd/lib/table'
import type { ColumnsType } from 'antd/es/table'
import CopyOutlined from '@ant-design/icons/CopyOutlined'
import Copy from '@/tools/CopyToClipboard'
import axios from '@/utils/axios'

const Users = () => {
  const [users, setUsers] = useState('')

  useEffect(() => {
    (async () =>{
      try{
        const {data} = await axios.get('/users')
        setUsers(data)
      }
      catch (e){
        console.log('not auth')
      }
    })()
  }, [])

  console.log('data ',users)
  return (
    <MainLayout>
      <span className='title'>Пользователи</span>
      <Table columns={columns} dataSource={data} className={styles.table} rowClassName={styles['table__row']} pagination={false} />
    </MainLayout>
  )
}

interface DataType {
  key: string
  fio: string
  age: number
  sex: 'М' | 'Ж'
  address: string
  role?: string
  phone: string
  email?: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'ФИО',
    dataIndex: 'fio',
    key: 'fio',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Возраст',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Город',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Роль',
    dataIndex: 'role',
    key: 'role',
    render: role => role ?? '-'
  },
  {
    title: 'Телефон',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Почта',
    dataIndex: 'email',
    key: 'email',
    render: email => {
      if (!email) {
        return '-'
      }
      return (
        <>
          <span>{email}</span>
          <CopyOutlined className={styles.copy} onClick={() => Copy(email, 'Почта скопирована!')} />
        </>
      )
    }
  },
  {
    width: '50px'
  }
]

const data: DataType[] = [
  {
    key: '1',
    fio: 'Шабашвили Баховый Тягович',
    age: 32,
    sex: 'М',
    address: 'Москва',
    role: 'Frontend',
    phone: '+7-980-555-35-35',
    email: 'aaabbbaaa@gmail.com'
  },
  {
    key: '2',
    fio: 'Баранова Анастасия Адамовна',
    age: 42,
    sex: 'Ж',
    address: 'СПб',
    role: 'UX/UI',
    phone: '+7-981-345-67-78',
    email: 'opyatagaming@list.ru'
  },
  {
    key: '3',
    fio: 'Нестеров Давид Макарович',
    age: 32,
    sex: 'М',
    address: 'Москва',
    role: 'Backend',
    phone: '+7-981-345-67-78'
  },
  {
    key: '4',
    fio: 'Нестеров Давид Макарович',
    age: 32,
    sex: 'М',
    address: 'Москва',
    role: 'Backend',
    phone: '+7-981-345-67-78'
  },
  {
    key: '5',
    fio: 'Нестеров Давид Макарович',
    age: 32,
    sex: 'М',
    address: 'Москва',
    role: 'Backend',
    phone: '+7-981-345-67-78'
  },
]

export default Users