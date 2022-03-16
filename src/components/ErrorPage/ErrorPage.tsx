import { Result, Button } from 'antd';
import {useNavigate} from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate()
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    navigate('/')
  }

  return (
    <Result
      status="403"
      title="403"
      subTitle="Извините, вы не авторизованы для доступа к этой странице."
      extra={<Button type="primary" onClick={handleClick}>На главную</Button>}
    />
  )
}

