import React from "react";
import {Button, Form, Input} from "antd";
import UserApi from "../../../Api/UserApi";
import './auth.css';
import handleHashPassword from "../../../Security";
import {Link} from "react-router-dom";
import {useUserStore} from "../../../Store/userStore";

const CreateUser = () => {
    const [form] = Form.useForm()
    const {login} = useUserStore();
    const onSubmit = () =>{
        form.validateFields().then(async values => {
            let encryptedPassword = await handleHashPassword(values.password);
            UserApi.create({...values, password: encryptedPassword, role: 'USER'}).then(user => login(user));
            form.resetFields()
        })
    }

    return (
        <div>
            <h1 style={{textAlign:'center'}}>Sign Up</h1>
            <Form
                className="create-user-form"
                layout='vertical'
                form={form}
               onFinish={onSubmit}
                autoComplete="off"
            >
                <Form.Item
                    name="id"
                    hidden={true}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Enter your first name"
                    name="firstname"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input placeholder={"First Name"}/>
                </Form.Item>

                <Form.Item
                    label="Enter your last name"
                    name="lastname"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input placeholder={"Last Name"}/>
                </Form.Item>

                <Form.Item
                    label="Enter your email"
                    name="email"

                    rules={[{ type:"email" ,required: true, message: 'Please input your password!' }]}
                >
                    <Input autoComplete={""} placeholder={"Email"}/>
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
                            Sign Up
                        </Button>
                        <Link to={'/login'}><Button type={'link'}>Already have account?</Button></Link>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
}

export default CreateUser;