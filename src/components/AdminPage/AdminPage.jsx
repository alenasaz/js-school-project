import style from "./AdminPage.module.css";
import { TeachersForm } from "./components/TeachersForm/TeachersForm";

export const AdminPage = () => {
  return (
    <div className={style._}>
      <TeachersForm />
    </div>
  );
};
