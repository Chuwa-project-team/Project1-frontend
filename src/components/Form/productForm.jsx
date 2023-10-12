/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { Button, Form, Input, Typography, Select, Divider, Space } from "antd";
import { LockOutlined, PlusOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

export default function ProductForm({
    buttonText,
    onSubmit,
    title,
    fields,
    initialValueContents,
    errors
}) {
    const {status} = useSelector(state => state.user);

    // const handleOnChange = (value) => {
    //     console.log(`selected ${value}`);
    // };

    const filterOption = (input, option) => (option?.label ?? '').includes(input);
    const filterSort = (optionA, optionB) =>
        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase());
    
    const [options, setOptions] = useState(['phone', 'watch']);
    const [name, setName] = useState('');
    const inputRef = useRef(null);
    const onNameChange = (event) => {
        setName(event.target.value);
    };
    let index = 0;
    const addOption = (e) => {
        e.preventDefault();
        setOptions([...options, name || `New item ${index++}`]);
        setName('');
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };

    return (
        <>
        <Typography>{title}</Typography>
        <Form onFinish={onSubmit} autoComplete="off">
            {fields.map(field => (
                <Form.Item
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    rules={field.rules}
                    initialValue={initialValueContents}
                >
                    {field.type === "textarea" ? (
                    <Input.TextArea
                        showCount
                        maxLength={100}
                        placeholder={field.placeholder}
                        size='large'
                    />
                    ) : field.type === "select" ? (
                        <Select
                            showSearch
                            placeholder={field.placeholder}
                            size='large'
                            optionFilterProp="children"
                            filterOption={filterOption}
                            filterSort={filterSort}
                            dropdownRender={(menu) => (
                                <>
                                  {menu}
                                  <Divider
                                    style={{
                                      margin: '8px 0',
                                    }}
                                  />
                                  <Space
                                    style={{
                                      padding: '0 8px 4px',
                                    }}
                                  >
                                    <Input
                                      placeholder="Please enter item"
                                      ref={inputRef}
                                      value={name}
                                      onChange={onNameChange}
                                    />
                                    <Button type="text" icon={<PlusOutlined />} onClick={addOption}>
                                      Add item
                                    </Button>
                                  </Space>
                                </>
                              )}
                            options={options.map((option) => ({
                                value: option,
                                label: option,
                            }))}
                        />
                    ) : (
                    <Input
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
        </>
    )
}