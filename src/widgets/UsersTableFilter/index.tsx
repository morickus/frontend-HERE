import React, { useState } from 'react'
import styles from './UsersTableFilter.module.css'
import Form from 'antd/lib/form'
import Select from 'antd/lib/select'
import Button from 'antd/lib/button'
import Radio from 'antd/lib/radio'
import Space from 'antd/lib/space'
import InputNumber from 'antd/lib/input-number'
import { Role } from '@/redux/slices/usersSlice'

const UsersTableFilter = () => {
  const [form] = Form.useForm()
  const [active, setActive] = useState(true)

  const handleSubmit = (values: any) => {
    console.log('values ',values)
  }

  return (
    <div className={styles.root}>
      <div className={styles.button} onClick={() => setActive(prev => !prev)}>
        <div className={`${styles.hamburger} ${active && styles.active}`}>
          <span className={`${styles.line} ${styles.line1}`} />
          <span className={`${styles.line} ${styles.line2}`} />
          <span className={`${styles.line} ${styles.line3}`} />
        </div>
      </div>

      <Form
        form={form}
        name="filter-user"
        layout="vertical"
        onFinish={handleSubmit}
        autoComplete="off"
        requiredMark={false}
        initialValues={{ sex: '' }}
        className={`${styles.form} ${active && styles.active}`}
      >
        <p className={styles.title}>Фильтр поиска</p>
        <div className={styles.age}>
          <Form.Item
            label="Возраст:"
            name="age-min"
          >
            <InputNumber placeholder="От" />
          </Form.Item>
          <div className={styles.divider} />
          <Form.Item
            name="age-max"
          >
            <InputNumber placeholder="До" />
          </Form.Item>
        </div>
        <Form.Item
          label="Пол:"
          name="sex"
        >
          <Radio.Group>
            <Space direction="vertical">
              <Radio value="М">Женский</Radio>
              <Radio value="Ж">Мужской</Radio>
              <Radio value="">Любой</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Роль:"
          name="role"
        >
          <Select
            size="large"
            placeholder="Аналитик"
            options={arrayRole}
          />
        </Form.Item>
        <Form.Item
          label="Уровень:"
          name="level"
        >
          <Select
            size="large"
            placeholder="Middle"
            options={[{ value: 'senior', label: 'Senior' }, { value: 'middle', label: 'Middle' }, { value: 'junior', label: 'Junior' }]}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" className={styles.btn}>
            Применить
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export const arrayRole: Array<{value: Role, label: string}> = [
  { value: 'ux-ui', label: 'UX/UI дизайнер' },
  { value: 'product-manager', label: 'Продакт-менеджер' },
  { value: 'project-manager', label: 'Проджект-менеджер' },
  { value: 'frontend', label: 'Фронтенд' },
  { value: 'backend', label: 'Бэкенд' },
  { value: 'fullstack', label: 'Фулл стак' },
  { value: 'analyst', label: 'Аналитик' },
]

export default UsersTableFilter