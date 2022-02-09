import { Space } from 'antd';
import {AdminPageForm} from './components/AdminPanelForm'
import {ErrorPage} from "../ErrorPage/ErrorPage";

export const AdminPage = (props: { isAdmin: boolean }) => {
  // заглушка, если перейти не под ролью администратора на '.../admin'
  if (!props.isAdmin) {
    return <ErrorPage />
  }

  return (
    <>
      <Space direction="vertical" size={80}>
        <AdminPageForm title={'Преподаватели'} placeholder={'Ник на Github'} />
        <AdminPageForm title={'Имена репозиториев'} placeholder={'Имя репозитория'} />
      </Space>
    </>
  )
}