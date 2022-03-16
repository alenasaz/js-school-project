import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { checkIsAdmin } from '../../utils/checkIsAdmin'
import { Form, Input, Button, Alert, Space } from 'antd'
import { LoginCheck } from '../../interfaces'

export const AdminLoginPage = () => {
  //TODO перенести в эффектор
  const [isError, setIsError] = useState(false)

  const navigate = useNavigate()
  const handleFinish = (values: LoginCheck) => {
    checkIsAdmin({ ...values }) ? navigate('/admin') : setIsError(true)
  }

  const handleFinishFailed = () => {
    setIsError(true)
  }

  return (
    <Space direction="vertical" size={32}>
      {isError && <Alert message="Неверный логин или пароль!" type="error" />}

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Введите логин!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Введите пароль!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </Space>
  )
}
