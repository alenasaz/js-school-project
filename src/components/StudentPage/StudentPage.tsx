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
  } from "antd";
  import {
    GithubOutlined,
    MinusCircleOutlined,
    PlusOutlined,
    SettingOutlined,
  } from "@ant-design/icons";
  import { useState } from "react";
  
  const { Option } = Select;
  const { Content } = Layout;
  const CheckboxGroup = Checkbox.Group;
  const plainOptions = ["Преподаватель", "Преподаватель1", "Преподаватель2"];
  const user_name = "user";
  
  const StudentPage = () => {
    const [indeterminate, setIndeterminate] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const showDrawer = () => {
      setIsVisible(true);
    };
    const onClose = () => {
      setIsVisible(false);
    };
    const onChange = (list: any) => {
      setIndeterminate(!!list.length && list.length < plainOptions.length);
    };
  
    const onFinish = (values: any) => {
      console.log("Received values of form:", values);
    };
  
    return (
      <>
      <Row gutter={16}>
      <Col span={12} style={{textAlign:"start"}}>
            <p>Здравствуйте, {user_name}</p>
          </Col>
          <Col span={5}>
            <Button type="link" icon={<SettingOutlined />} onClick={showDrawer}>
              Настройки
            </Button>
          </Col>
  
          <Col span={24}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                  minHeight:400,
                  width: 1000,
                background: "#d9d9d9",
              }}
            >
              На текущий момент данных нет
            </Content>
          </Col>
        </Row>
        <Drawer
          width={600}
          onClose={onClose}
          visible={isVisible}
          bodyStyle={{ paddingBottom: 80 }}
          extra={<Space></Space>}
        >
          <Row gutter={16}>
            <Col span={10}>
              <CheckboxGroup options={plainOptions} onChange={onChange} />
            </Col>
          </Row>
          <br />
          <br />
          <p>Мои репозитории</p>
          <Form
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
            hideRequiredMark
          >
            <Form.List name="users">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <>
                      <Row gutter={16}>
                        <Col span={11}>
                          <Form.Item
                            name="repo"
                            rules={[{ required: true, message: "Выберите" }]}
                          >
                            <Select placeholder="Выберите">
                              <Option value="public">html-css</Option>
                              <Option value="public">admin-panel-makeup</Option>
                              <Option value="public">admin-panel-app</Option>
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col span={11}>
                          <Form.Item
                            name="url"
                            rules={[
                              { required: true, message: "Url репозитория" },
                            ]}
                          >
                            <Input placeholder="Url репозитория" />
                          </Form.Item>
                        </Col>
                        <MinusCircleOutlined
                          style={{
                            paddingTop: 7,
                          }}
                          onClick={() => remove(name)}
                        />
                      </Row>
                    </>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Добавить репозиторий
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form>
        </Drawer>
      </>
    );
  };
  
  export default StudentPage;
  