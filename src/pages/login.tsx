import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Login.module.css'

// import { Button, Checkbox, Form, Input } from 'antd'
import Form from 'antd/lib/form'
import Button from 'antd/lib/button'
import Checkbox from 'antd/lib/checkbox'
import Input from 'antd/lib/input'

import { login } from '@/commands/auth'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { useRouter } from 'next/navigation'

type FieldType = {
  username?: string
  password?: string
  remember?: boolean
}

export interface ILogin {
  username: string
  password: string
  remember?: boolean
}

const Login = () => {
  const { push } = useRouter()
  const [form] = Form.useForm()
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
      push('/')
    }
  }, [])

  const handleSubmit = (values: ILogin) => {
    dispatch(login(values)).then(() => push('/'))
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h1 className="title">Добро пожаловать</h1>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="HERE Logo"
          width={192}
          height={44}
          priority
        />
        <Form
          form={form}
          name="login"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          autoComplete="off"
          requiredMark={false}
          className={styles.form}
        >
          <Form.Item<FieldType>
            label="Логин:"
            name="username"
            rules={[{ required: true, message: 'Пожалуйста заполните логин!' }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Пароль:"
            name="password"
            rules={[{ required: true, message: 'Пожалуйста заполните пароль!' }]}
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Запомнить меня</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" className={styles.btn}>
              ENTER
            </Button>
          </Form.Item>
          <div>
            <span>Нет аккаунта?</span>&nbsp;
            <Link href="/register">Регистрация</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login
