import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Register.module.css'
import {register} from '@/commands/auth'
import {useDispatch} from 'react-redux'
import {ThunkDispatch} from '@reduxjs/toolkit'

// import {Button, Form, Input} from 'antd'
import Form from 'antd/lib/form'
import Button from 'antd/lib/button'
import Input from 'antd/lib/input'

type FieldType = {
  username?: string
  email?: string
  password?: string
  password2?: string
}

export interface IRegister {
  username: string
  email: string
  password: string
}

const Register = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  const handleSubmit = (values: IRegister) => {
    dispatch(register(values))
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h1 className={styles.title}>Регистрация</h1>
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
          onFinish={handleSubmit}
          autoComplete="off"
          requiredMark={false}
          className={styles.form}
        >
          <Form.Item<FieldType>
            label="Логин:"
            name="username"
            rules={[{required: true, message: 'Пожалуйста заполните логин!'}]}
          >
            <Input size="large"/>
          </Form.Item>

          <Form.Item<FieldType>
            label="E-mail:"
            name="email"
            rules={[
              {required: true, message: 'Пожалуйста заполните почту!'},
              {
                type: 'email',
                message: 'Введен невалидный адрес электронной почты!',
              }
            ]}
          >
            <Input size="large"/>
          </Form.Item>

          <Form.Item<FieldType>
            label="Пароль:"
            name="password"
            rules={[{required: true, message: 'Пожалуйста заполните пароль!'}]}
          >
            <Input.Password size="large"/>
          </Form.Item>

          <Form.Item<FieldType>
            label="Повторить пароль:"
            name="password2"
            dependencies={['password']}
            rules={[
              {required: true, message: 'Пожалуйста заполните пароль еще раз!'},
              ({getFieldValue}) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('Пароли не совпадают!'))
                },
              }),
            ]}
          >
            <Input.Password size="large"/>
          </Form.Item>
          <br/>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" className={styles.btn}>
              ENTER
            </Button>
          </Form.Item>
          <div>
            <span>Есть аккаунта?</span>&nbsp;
            <Link href="/login">Войти</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Register
