import { Form, Input, Button, Space } from "antd";
import style from "./TeachersForm.module.css";
import { TeacherListItem } from "./components/TeacherListItem/TeacherListItem";
import { useState } from "react";
// import { values } from "core-js/core/array";

export const TeachersForm = () => {
  const [teachers, setTeachers] = useState(["test"]);

  const deleteTeacher = (event) => {
    event.preventDefault();
    const name = event.target.elements["test"];
    console.log(name);
  };

  const teacherList = teachers.map((item) => (
    <TeacherListItem onSubmit={deleteTeacher} teacher={item} key={item} />
  ));
  const onFinish = (values) => {
    console.log("Received values of form:", values);
    setTeachers([...teachers, values.teacher]);
  };

  return (
    <div className={style._}>
      {teacherList}

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
            <Input placeholder="Ник на GitHub" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            +
          </Button>
        </Space>
      </Form>
    </div>
  );
};
