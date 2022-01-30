import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { checkIsAdmin } from "../../../../utils";
import { AlertMessage } from "./components/AlertMessage/AlertMessage";
import style from "./AdminLogin.module.css";

export const AdminLogin = () => {
  const [isAlertShow, setIsAlertShow] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    checkIsAdmin({ ...values })
      ? navigate("/admin-page")
      : setIsAlertShow(true);
  };

  const onFinishFailed = () => {
    setIsAlertShow(true);
  };

  return (
    <div className={style._}>
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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Логин"
          name="username"
          rules={[
            {
              required: true,
              message: "Введите логин!",
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
              required: true,
              message: "Введите пароль!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 12,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
      {isAlertShow && <AlertMessage />}
    </div>
  );
};
