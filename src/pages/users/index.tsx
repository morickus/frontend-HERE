import React, { useState, useEffect } from 'react'
import MainLayout from '@/layouts/MainLayout'
import styles from '@/styles/Users.module.css'
import Table from 'antd/lib/table'
import type { ColumnsType } from 'antd/es/table'
import CopyOutlined from '@ant-design/icons/CopyOutlined'
import Copy from '@/tools/CopyToClipboard'
import axios from '@/utils/axios'
import UsersTableFilter, { arrayRole } from '@/widgets/UsersTableFilter'
import { getUsers } from '@/commands/users'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { Role, Sex, User } from '@/redux/slices/usersSlice'


export interface DataType {
  key: number
  fio: string
  age: number
  sex: Sex
  city: string
  role?: string
  phone: string
  email?: string
}

const Users = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.users.users)
  const [data, setData] = useState<DataType[]>([])
  const [source, setSource] = useState<User[]>([])

  useEffect(() => {
    setSource(getUsers())
    // dispatch(getUsers())
  }, [])

  useEffect(() => {
    let array: DataType[] = mappingTable(source)
    setData(array)
  }, [source])

  return (
    <MainLayout>
      <span className='title'>Пользователи</span>
      <div className={styles['table-wrap']}>
        <Table columns={columns} dataSource={data} className={styles.table} rowClassName={styles['table__row']} pagination={false} />
        <UsersTableFilter />
      </div>
    </MainLayout>
  )
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

const mappingTable = (v: User[]) => {
  return v.map(i => {
    let sex: Sex
    switch(i.sex) {
      case 'male':
        sex = 'М'
        break
      case 'female':
        sex = 'Ж'
        break
      default:
        sex = '-'
    }

    let role = arrayRole.find(e => e.value == i.role)?.label

    return {
      key: i.id,
      fio: `${i.name} ${i.second} ${i.father}`,
      age: i.age,
      sex,
      city: i.city,
      role,
      phone: i.phone,
      email: i.email,
    }
  })
}

export default Users