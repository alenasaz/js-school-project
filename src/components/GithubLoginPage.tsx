import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox, PageHeader } from "antd";
import { GithubOutlined } from "@ant-design/icons";

const GithubLoginPage = () => {
       const [client_id, setClientId] = useState('f97800e6afe29e050475');
       const [redirect_uri, setRedirectUri] = useState('http://localhost:3000/login');
  //   const { state, dispatch } = useContext(AuthContext);
  //   const [data, setData] = useState({ errorMessage: "", isLoading: false });

  //   const { client_id, redirect_uri } = state;

  //   useEffect(() => {
  //     // After requesting Github access, Github redirects back to your app with a code parameter
  //     const url = window.location.href;
  //     const hasCode = url.includes("?code=");

  //     // If Github API returns the code parameter
  //     if (hasCode) {
  //       const newUrl = url.split("?code=");
  //       window.history.pushState({}, null, newUrl[0]);
  //       setData({ ...data, isLoading: true });

  //       const requestData = {
  //         code: newUrl[1],
  //       };

  //       const proxy_url = state.proxy_url;

  //       // Use code parameter and other parameters to make POST request to proxy_server
  //       fetch(proxy_url, {
  //         method: "POST",
  //         body: JSON.stringify(requestData),
  //       })
  //         .then((response) => response.json())
  //         .then((data) => {
  //           dispatch({
  //             type: "LOGIN",
  //             payload: { user: data, isLoggedIn: true },
  //           });
  //         })
  //         .catch((error) => {
  //           setData({
  //             isLoading: false,
  //             errorMessage: "Sorry! Login failed",
  //           });
  //         });
  //     }
  //   }, [state, dispatch, data]);

  //   if (state.isLoggedIn) {
  //     return <Link to="/" />;
  //   }
  return (
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
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <a
          href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
          // onClick={() => {
          //   setData({ ...data, errorMessage: "" });
          // }}
        >
          <Button icon={<GithubOutlined />}>Войти с помощью Github</Button>
        </a>
      </Form.Item>
    </Form>
  );
};

export default GithubLoginPage;
