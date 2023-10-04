import { Layout } from 'antd';
import {  Outlet } from 'react-router-dom';
const { Header, Footer, Content } = Layout;
//import {blue, grey} from '@ant-design/colors';

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
  };
  
  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
  };
  
  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
  };

export default function MainLayout() {
    return (
        <Layout>
            <Header style = {headerStyle}>Header</Header>
            <Content style = {contentStyle}><Outlet /></Content>
            <Footer style = {footerStyle}>Footer</Footer>
        </Layout>
    );
}