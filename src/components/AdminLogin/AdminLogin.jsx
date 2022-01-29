import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { checkIsAdmin } from "../../utils";

export const AdminLogin = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    if (checkIsAdmin({ ...values })) navigate("/admin-page");
  };

  const onFinishFailed = (errorInfo) => {
    alert("Проверьте, чтобы все данные были заполнены");
  };

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
  );
};
