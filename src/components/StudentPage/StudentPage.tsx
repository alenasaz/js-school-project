import { useState } from 'react'
import * as React from 'react'
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  Space,
  Checkbox,
  Layout,
} from 'antd'
import {
  MinusCircleOutlined,
  PlusOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { RepositoriesList } from './RepositoriesList'
import {
  $displayDrawer,
  $userName,
  setDrawerVisible,
  setDrawerUnvisible,
} from '../../store/studentState'
import { useStore } from 'effector-react'
import { initialGitRepoOptions, initialPlainOptions } from './constants'

const { Option } = Select
const { Content } = Layout
const CheckboxGroup = Checkbox.Group

const StudentPage = () => {
  // TODO: Надо будет брать из эффектора. Для сохранения имени пользователя и запроса к списку репозиториев GitHub,
  //  надо будет брать из запроса авторизации
  const user = useStore($userName)
  const isVisible = useStore($displayDrawer)
  //const [indeterminate, setIndeterminate] = useState(true)
  const handleClick = () => {
    setDrawerVisible()
  }
  const handleClose = () => {
    setDrawerUnvisible()
  }

  type CheckboxValueType = string | number | boolean
  const handleChange = (list: CheckboxValueType[]) => {
    //setIndeterminate(list.length <= initialPlainOptions.length)
  }

  const handleFinish = (values: string[]) => {
    console.log('Received values of form:', values)
  }

  const handleClickAddElement =
    (method: (defaultValue?: string, insertIndex?: number) => void) => () =>
      method()

  const handleClickRemoveElement =
    (method: (index: number | number[]) => void, value: number | number[]) =>
    () =>
      method(value)

  return (
    <>
      <Row gutter={16}>
        <Col span={12} style={{ textAlign: 'start' }}>
          <p>Здравствуйте, {user}</p>
        </Col>
        <Col span={5}>
          <Button type="link" icon={<SettingOutlined />} onClick={handleClick}>
            Настройки
          </Button>
        </Col>

        <Col span={24}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 400,
              width: 1000,
              background: '#d9d9d9',
            }}
          >
            {<RepositoriesList user={user} /> || 'На текущий момент данных нет'}
          </Content>
        </Col>
      </Row>
      <Drawer
        width={600}
        onClose={handleClose}
        visible={isVisible}
        bodyStyle={{ paddingBottom: 80 }}
        extra={<Space></Space>}
      >
        <Row gutter={16}>
          <Col span={10}>
            <CheckboxGroup
              options={initialPlainOptions}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <br />
        <br />
        <p>Мои репозитории</p>

        <Form
          name="dynamic_form_nest_item"
          onFinish={handleFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.List name="reposList">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <>
                    <Row gutter={16}>
                      <Col span={11}>
                        <Form.Item
                          key={key}
                          name={[name, 'repo']}
                          rules={[{ required: true, message: 'Выберите' }]}
                        >
                          <Select placeholder="Выберите">
                            {initialGitRepoOptions.map((gitRepo) => (
                              <Option value={gitRepo}>{gitRepo}</Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={11}>
                        <Form.Item
                          {...restField}
                          name={[name, 'url']}
                          rules={[
                            { required: true, message: 'Url репозитория' },
                          ]}
                        >
                          <Input placeholder="Url репозитория" />
                        </Form.Item>
                      </Col>

                      <MinusCircleOutlined
                        style={{
                          paddingTop: 7,
                        }}
                        onClick={handleClickRemoveElement(remove, name)}
                      />
                    </Row>
                  </>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={handleClickAddElement(add)}
                    block
                    icon={<PlusOutlined />}
                  >
                    Добавить репозиторий
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  )
}

export default StudentPage
