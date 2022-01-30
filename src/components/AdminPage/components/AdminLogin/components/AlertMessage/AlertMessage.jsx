import { Alert } from "antd";
import style from "./AlertMessage.module.css";

export const AlertMessage = () => {
  return (
    <div className={style._}>
      <div className={style.alertWrapper}>
        <Alert
          message="Ошибка"
          showIcon
          description="Неверный логин или пароль"
          type="error"
        />
      </div>
    </div>
  );
};
