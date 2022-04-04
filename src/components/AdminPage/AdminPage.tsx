import { FC } from 'react'
import { Space, Spin } from 'antd'
import { useStore } from 'effector-react'
import { AdminPageForm } from './components/AdminPageForm'
import { ErrorPage } from '../ErrorPage'
import {
  $accessByRole,
  $currentUser,
  $currentUserIsLoading,
  setUserNameEvent,
} from 'src/store'
import { adminFormTypesEnum } from './constants'

export const AdminPage: FC = () => {
  const { isAdmin } = useStore($accessByRole)
  const isUserLoading = useStore($currentUserIsLoading)
  console.log(isUserLoading)

  if (!isAdmin) {
    return <ErrorPage />
  }

  setUserNameEvent('admin')

  const { name } = useStore($currentUser)

  return (
    <>
      {isUserLoading && <Spin size="large" />}
      {!isUserLoading && (
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
      )}
    </>
  )
}
