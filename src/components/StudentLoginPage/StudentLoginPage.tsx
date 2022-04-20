import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, PageHeader } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
//import GitHubLogin from 'react-github-login'

const StudentLoginPage = () => {
  const onSuccess = (response: string) => console.log(response)
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
        <Form.Item
        // wrapperCol={{
        //   offset: 8,
        //   span: 16,
        // }}
        >
          <a
            className="login-link"
            href={`https://github.com/login/oauth/authorize?scope=user&client_id=f97800e6afe29e050475&redirect_uri=http://localhost:3000/login`}
          >
            <Button icon={<GithubOutlined />}>Войти с помощью GitHub</Button>
          </a>
        </Form.Item>
        {/* <GitHubLogin
          clientId="f97800e6afe29e050475"
          onSuccess={onSuccess}
          onFailure={onFailure}
        /> */}
      </Form>
    </div>
  )
}

export default StudentLoginPage
