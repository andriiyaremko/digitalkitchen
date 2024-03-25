import React from "react";
import {Button, Form, Input, message} from "antd";
import {useForm} from "antd/es/form/Form";
import UserApi from "../../Api/UserApi";
import {useUserStore} from "../../Store/userStore";
import './Authorization/auth.css'
import handleHashPassword from "../../Security";
import {Link} from "react-router-dom";

const Login = () => {
    const [form] = useForm();

    const {login} = useUserStore();

    const authorization = async () => {
        try {
            const values = await form.validateFields();
            const hash = await handleHashPassword(values.password);
            const user = await UserApi.login(values.email, hash);
            login(user);
            form.resetFields();
        } catch (error) {
            message.error('Wrong email or password');
        }
    };

    return (
        <div>
            <h1 style={{textAlign:'center'}}>Login</h1>
            <Form
                form={form}
                style={{maxWidth:'400px', marginInline:'auto', marginTop:"25px"}}
                layout={'vertical'}
                onFinish={authorization}
            >
                <Form.Item
                    label="Enter your email"
                    name="email"
                    rules={[{ type:"email" ,required: true, message: 'Please input your password!' }]}
                >
                    <Input placeholder={"Email"}/>
                </Form.Item>

                <Form.Item
                    label="Enter your password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder={"Password"}/>
                </Form.Item>
                <Form.Item>
                    <div className={'form-footer'}>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                        <Link to={'/create user'}><Button type={'link'}>Don`t have account?</Button></Link>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;