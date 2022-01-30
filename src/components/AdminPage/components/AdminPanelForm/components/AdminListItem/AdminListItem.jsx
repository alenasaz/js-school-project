import { Form, Button, Space } from "antd";
import style from "./AdminListItem.module.css";

export const AdminListItem = ({ name, onFinish, onClick }) => {
  return (
    <div className={style._}>
      <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Space style={{ display: "flex", marginBottom: 8 }} align="baseline">
          <Form.Item>
            <div className={style.block}>{name}</div>
          </Form.Item>
          <Button
            type="secondary"
            htmlType="submit"
            name={name}
            onClick={onClick}
          >
            -
          </Button>
        </Space>
      </Form>
    </div>
  );
};
