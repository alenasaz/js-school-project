import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox, PageHeader } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import "./LoginPage.css";
import { AuthContext } from '../../App.js'

export const LoginPage = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [data, setData] = useState({ errorMessage: "", isLoading: false });

  const { client_id, redirect_uri } = state;

  useEffect(() => {
    // After requesting Github access, Github redirects back to your app with a code parameter
    const url = window.location.href;
    const hasCode = url.includes("?code=");

    // If Github API returns the code parameter
    if (hasCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, null, newUrl[0]);
      setData({ ...data, isLoading: true });

      const requestData = {
        code: newUrl[1],
      };

      const proxy_url = state.proxy_url;

      // Use code parameter and other parameters to make POST request to proxy_server
      fetch(proxy_url, {
        method: "POST",
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: "LOGIN",
            payload: { user: data, isLoggedIn: true },
          });
        })
        .catch((error) => {
          setData({
            isLoading: false,
            errorMessage: "Sorry! Login failed",
          });
        });
    }
  }, [state, dispatch, data]);

  if (state.isLoggedIn) {
    return <Link to="/" />;
  }
  return (
    <div className="form-wrapper">
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
        <div className="input-wrapper">
          <PageHeader className="site-page-header" title="Ведомость школы JS" />
          <Form.Item
            label="Логин"
            name="username"
            rules={[
              {
                // required: true,
                message: "Введите логин",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[
              {
                // required: true,
                message: "Введите пароль",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Запомнить</Checkbox>
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
            <a
            className="login-link"
            href={`https://github.com/login/oauth/authorize?scope=user&client_id=f97800e6afe29e050475&redirect_uri=http://localhost:3000`}
            onClick={() => {
              setData({ ...data, errorMessage: "" });
            }}
          >
          <Button icon={<GithubOutlined />}  onClick={() => {
            setData({ ...data, errorMessage: "" });
            console.log(data);
          }} >
            Login with GitHub
          </Button>
          </a>
            
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
