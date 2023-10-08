/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Input, Space } from 'antd';
const { Search } = Input;
import { MenuOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { logOutUser } from '../../app/userSlice';
import RightMenu from './RightMenu';

import './style.css';

const TITLE = 'Management';

const onSearch = (value, _e, info) => console.log(info?.source, value);

const Navbar = () => {
    const { user, isAuthenticated } = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <nav className="navbar">
            <Link to="/" className="logo">
            {TITLE}
            </Link>
            <Link to="/search">
                <Search
                    placeholder="Search"
                    allowClear
                    onSearch={onSearch}
                    style={{
                        width: 300,
                    }}
                />
            </Link>
            <div className="navbar-menu">
                <Space style={{ fontSize: '16px' }}>
                    <div className="rightMenu">
                        <RightMenu mode="horizontal" />
                    </div>
                    <div className="mobile-no-display">
                        <UserOutlined />
                        {isAuthenticated ? (
                            <>
                                <a onClick={() => dispatch(logOutUser())}>Sign out</a>
                            </>
                        ) : (
                            <>
                                <Link to="signin">Sign in</Link>
                            </>
                        )}
                    </div>
                    <ShoppingCartOutlined />
                    <span>$<span>0.00</span></span>
                </Space>
            </div>
        </nav>
    );
}

export default Navbar;