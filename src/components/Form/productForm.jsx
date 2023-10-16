/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { Button, Form, Input, Typography, Select, Divider, Space, Image, message } from "antd";
import { LockOutlined, PlusOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import styles from "./Form.module.css";
export default function ProductForm({
    buttonText,
    onSubmit,
    title,
    fields,
    initialValueContents,
    errors,
}) {
    console.log('initialValueContents', initialValueContents);
    const { status } = useSelector((state) => state.user);

    const filterOption = (input, option) => (option?.label ?? '').includes(input);
    const filterSort = (optionA, optionB) =>
        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase());

    const options = ['Category1', 'Category2', 'Category3', 'Category4', 'Category5'];

    return (
        <div className={styles.productFormContainer}>
            <Typography>{title}</Typography>
            <Form onFinish={onSubmit} autoComplete="off">
                {fields.map((field) => (
                    <Form.Item
                        key={field.name}
                        name={field.name}
                        label={field.label}
                        rules={field.rules}
                        initialValue={initialValueContents ? initialValueContents[field.name] : ''}
                        
                    >
                        {field.type === 'textarea' ? (
                            <Input.TextArea
                                showCount
                                maxLength={500}
                                placeholder={initialValueContents ? initialValueContents[field.name] : ''}
                                size="large"
                            />
                        ) : field.type === 'select' ? (
                            <Select
                                showSearch
                                size="large"
                                optionFilterProp="children"
                                filterOption={filterOption}
                                filterSort={filterSort}
                                options={options.map((option) => ({
                                    value: option,
                                    label: option,
                                }))}
                            />
                        ) : (
                             <Input disabled={field.disabled} placeholder={initialValueContents ? initialValueContents[field.name] : ''} size="large" />
                            // <Input size="large" />
                        )}
                    </Form.Item>
                ))}
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        loading={status === 'loading'}
                    >
                        {buttonText}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

