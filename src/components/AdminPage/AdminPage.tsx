import { FC } from 'react'
import { Space } from 'antd'
import { useStore } from 'effector-react'
import { AdminPageForm } from './components/AdminPageForm'
import { ErrorPage } from '../ErrorPage'
import { $accessByRole } from 'src/store/currentRole'
import { adminFormTypesEnum } from './constants'

export const AdminPage: FC = () => {
  const { isAdmin } = useStore($accessByRole)
  if (!isAdmin) {
    return <ErrorPage />
  }

  return (
    <>
      <Space direction="vertical" size={80}>
        <AdminPageForm
          title={adminFormTypesEnum.teacherFormTitle}
          placeholder={adminFormTypesEnum.teacherFormPlaceholder}
        />
        <AdminPageForm
          title={adminFormTypesEnum.repositoryFormTitle}
          placeholder={adminFormTypesEnum.repositoryFormPlaceholder}
        />
      </Space>
    </>
  )
}
