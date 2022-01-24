import { Form, Input, Button, Checkbox, PageHeader } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import "./AuthenticationForm.css";

const AuthenticationForm = () => {
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
                required: true,
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
                required: true,
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
            <Button icon={<GithubOutlined />} htmlType="submit"></Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default AuthenticationForm;
