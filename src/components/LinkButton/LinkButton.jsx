import { Button } from "antd";
import { Link } from "react-router-dom";
import style from "./LinkButton.module.css";

export const LinkButton = ({ link, children }) => (
  <div className={style._}>
    <Button type="primary">
      <Link to={`/${link}`}>{children}</Link>
    </Button>
  </div>
);
