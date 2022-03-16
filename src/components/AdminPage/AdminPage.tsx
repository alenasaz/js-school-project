import { Space } from 'antd'
import { AdminPageForm } from './components/AdminPanelForm'
import { ErrorPage } from '../ErrorPage/ErrorPage'
import { AdminPageProps } from '../../interfaces'

export const AdminPage = ({ isAdmin }: AdminPageProps) => {
  if (!isAdmin) {
    return <ErrorPage />
  }

  return (
    <>
      <Space direction="vertical" size={80}>
        <AdminPageForm title="Преподаватели" placeholder="Ник на Github" />
        <AdminPageForm
          title="Имена репозиториев"
          placeholder="Имя репозитория"
        />
      </Space>
    </>
  )
}
