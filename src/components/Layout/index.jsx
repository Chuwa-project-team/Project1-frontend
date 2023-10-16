import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
const { Header, Footer, Content } = Layout;
import { Space } from 'antd';
import { YoutubeOutlined, TwitterOutlined, FacebookOutlined } from '@ant-design/icons';
import Navbar from '../Navbar';
import {useState, createContext} from 'react';
import { SearchProvider } from '../../hooks/useSearchContext';
import CartCard from '../CartCard';
const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#121826',
};

const contentStyle = {
    margin: '24px 16px',
    minHeight: 120,
    padding:'0px'

};
  
const footerStyle = {
    textAlign: 'center',
    color: '#bbb',
    backgroundColor: '#121826',
    display: 'flex',
    justifyContent: 'space-between',
};



const CartModalContext = createContext()

export default function MainLayout() {
    const [isCartModalOpen,setIsCartModalOpen] = useState(false);
    const handleCartModalOpen = () => {
        setIsCartModalOpen(!isCartModalOpen);
    }
    const closeCartModal = () => {
        setIsCartModalOpen(false);
    }
    return (
        <SearchProvider>
        <CartModalContext.Provider value={isCartModalOpen}>
        <Layout>
            <Header style={headerStyle}>
                <Navbar handleCartModalOpen={handleCartModalOpen}/>
            </Header>
            <Content style={contentStyle}>
                <CartCard isOpen={isCartModalOpen} onCancel={closeCartModal}/>
                <Outlet />
            </Content>
            <Footer style={footerStyle}>
                <Space>
                    <span>©2023 All Rights Reserved.</span>
                </Space>
                <Space style={{ color: '#fff', fontSize: '16px' }}>
                    <YoutubeOutlined />
                    <TwitterOutlined />
                    <FacebookOutlined />
                </Space>
                <Space>
                    <span>Contact Us</span>&nbsp;&nbsp;
                    <span>Privacy Policies</span>&nbsp;&nbsp;
                    <span>Help</span>
                </Space>
            </Footer>
      </Layout>
      </CartModalContext.Provider>
      </SearchProvider>
    );
}