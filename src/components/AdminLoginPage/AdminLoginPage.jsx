import { Form, Input, Button, Checkbox, Alert, Space} from 'antd';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { checkIsAdmin, incorrectLoginAlert} from "../../utils";

export const AdminLoginPage = () => {
    const [isError, setIsError] = useState(false)
    const navigate = useNavigate()
    const onFinish = (values) => {
        checkIsAdmin({...values}) ? navigate('/admin-page') : setIsError(true)
    };

    const onFinishFailed = () => {
        setIsError(true)
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Space direction="vertical" size={16}>
                {isError && <Alert message="Неверный логин или пароль!" type="error" />}
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Введите логин!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


            </Space>
            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Введите пароль!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>

        </Form>
    );
};
