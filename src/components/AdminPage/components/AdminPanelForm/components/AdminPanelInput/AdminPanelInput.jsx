import { Form, Button, Space, Input } from "antd";
import style from "./AdminPanelInput.module.css";

export const AdminPanelInput = ({ onFinish, title, children, placeholder }) => {
  return (
    <div className={style._}>
      <h2 className={style.title}>{title}</h2>
      <div>{children}</div>
      <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
        className={style.form}
      >
        <Space style={{ display: "flex", marginBottom: 8 }} align="baseline">
          <Form.Item
            name="teacher"
            rules={[
              { required: true, message: "Необходимо ввести ник с GitHub" },
            ]}
          >
            <Input placeholder={placeholder} />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            +
          </Button>
        </Space>
      </Form>
    </div>
  );
};
