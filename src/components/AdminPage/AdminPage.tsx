import { FC } from 'react'
import { Space } from 'antd'
import { useStore } from 'effector-react'
import { AdminPageForm } from './components/AdminPageForm'
import { ErrorPage } from '../ErrorPage'
import { $accessByRole, $currentUser, setUserNameEvent } from 'src/store'
import { adminFormTypesEnum } from './constants'

export const AdminPage: FC = () => {
  const { isAdmin } = useStore($accessByRole)
  if (!isAdmin) {
    return <ErrorPage />
  }

  setUserNameEvent('admin')
  const { name } = useStore($currentUser)

  return (
    <>
      <div>Hello, {name}</div>
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
