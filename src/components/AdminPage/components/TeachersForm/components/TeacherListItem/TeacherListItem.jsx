import { Form, Button, Space, Input } from "antd";
import style from "./TeacherListItem.module.css";

export const TeacherListItem = ({ teacher, onFinish }) => {
  return (
    <Form
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      autoComplete="off"
      className={style.form}
    >
      <Space style={{ display: "flex", marginBottom: 8 }} align="baseline">
        <Form.Item
          name="teacher-in-list"
          rules={[
            { required: false, message: "Необходимо ввести ник с GitHub" },
          ]}
        >
          {/* <Input value={teacher} /> */}
          <div name="teacherValue">{teacher}</div>
        </Form.Item>
        <Button type="secondary" htmlType="submit">
          -
        </Button>
      </Space>
    </Form>
  );
};
