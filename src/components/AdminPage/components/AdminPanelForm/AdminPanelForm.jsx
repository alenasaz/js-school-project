import style from "./AdminPanelForm.module.css";
import { AdminListItem } from "./components/AdminListItem/AdminListItem";
import { useState } from "react";
import { AdminPanelInput } from "./components/AdminPanelInput/AdminPanelInput";

export const AdminPanelForm = ({ title, placeholder }) => {
  const [items, setItems] = useState([]);

  const deleteTeacher = (event) => {
    event.preventDefault();
    const teacherNickName = event.currentTarget.name;
    setItems(items.filter((teacher) => teacher !== teacherNickName));
  };

  const onFinish = (values) => {
    setItems([...new Set([...items, values.teacher])]);
  };

  const teacherList = items.map((item) => (
    <AdminListItem onClick={deleteTeacher} name={item} key={item} />
  ));

  return (
    <div className={style._}>
      <AdminPanelInput
        onFinish={onFinish}
        title={title}
        placeholder={placeholder}
      >
        {teacherList}
      </AdminPanelInput>
    </div>
  );
};
