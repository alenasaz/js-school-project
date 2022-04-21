import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Input, Button, Checkbox, PageHeader } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import LoginGithub from 'react-login-github'
import { NavigationPageTypesEnum } from '../../constants'

const StudentLoginPage = () => {
  const navigate = useNavigate()
  const onSuccess = (response: string) => {
    console.log(response)
    navigate(NavigationPageTypesEnum.studentPage)
  }
  const onFailure = (response: string) => console.error(response)

  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <LoginGithub
          clientId="f97800e6afe29e050475"
          onSuccess={onSuccess}
          onFailure={onFailure}
          redirectUri="http://localhost:3000/student"
          buttonText=" Войти с помощью GitHub"
          className="ant-btn"
          icon={<GithubOutlined />}
        />
      </Form>
    </div>
  )
}

export default StudentLoginPage
