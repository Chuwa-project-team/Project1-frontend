/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, Form, Input, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import styles from "./authForm.module.css";
export default function AuthForm({
    buttonText,
    onSubmit,
    title,
    fields,
    errors
}) {
    const {status} = useSelector(state => state.user);

    return (
        <div className={styles.container}>
        <Typography className={styles.title}>{title}</Typography>
        <Form onFinish={onSubmit} autoComplete="off" className={styles.form}>
            {fields.map(field => (
                <Form.Item
                    key={field.name}
                    name={field.name}
                    rules={field.rules}
                >
                    {field.type === "password" ? (
                    <Input.Password
                        prefix={<LockOutlined />}
                        placeholder={field.placeholder}
                        size='large'
                    />
                    ) : (
                    <Input
                        prefix={<UserOutlined />}
                        placeholder={field.placeholder}
                        size='large'
                    />
                    )}                       
                </Form.Item>
            ))}
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    loading={status === "loading"}
                >
                    {buttonText}
                </Button>
            </Form.Item>
        </Form>
        </div>
    )
}