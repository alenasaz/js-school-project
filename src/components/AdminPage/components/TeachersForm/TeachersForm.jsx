import { Form, Input, Button, Space } from "antd";
import style from "./TeachersForm.module.css";

export const TeachersForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <Form
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      autoComplete="off"
      className={style._}
    >
      <Space style={{ display: "flex", marginBottom: 8 }} align="baseline">
        <Form.Item
          name="teacher"
          rules={[{ required: true, message: "Missing first name" }]}
        >
          <Input placeholder="First Name" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          +
        </Button>
      </Space>
      <Space style={{ display: "flex", marginBottom: 8 }} align="baseline">
        <div className={style.block}>test</div>
        <Button type="secondary" htmlType="submit">
          -
        </Button>
      </Space>
    </Form>
  );
};
