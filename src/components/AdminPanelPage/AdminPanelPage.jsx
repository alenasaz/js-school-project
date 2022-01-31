import { Space } from 'antd';
import {AdminPanelForm} from './components/AdminPanelForm'

export const AdminPanelPage = () => {

  return <>
    <Space direction="vertical" size={80}>
      <AdminPanelForm title={'Преподаватели'} placeholder={'Ник на Github'} />
      <AdminPanelForm title={'Имена репозиториев'} placeholder={'Имя репозитория'} />
    </Space>

  </>
}