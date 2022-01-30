import style from "./AdminPage.module.css";
import { AdminPanelForm } from "./components/AdminPanelForm/AdminPanelForm";

export const AdminPage = () => {
  return (
    <div className={style._}>
      <AdminPanelForm title="Преподаватели" placeholder="Ник на GitHub" />
      <AdminPanelForm
        title="Имена учебных репозиториев"
        placeholder="Имя репозитория"
      />
    </div>
  );
};
