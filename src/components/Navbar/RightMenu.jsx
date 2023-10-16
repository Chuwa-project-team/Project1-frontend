/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Menu, Avatar } from 'antd';
import { UserOutlined, LogoutOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../../app/userSlice';

const RightMenu = ({ mode}) => {
  
  const { user, isAuthenticated } = useSelector(state => state.user);
  const dispatch = useDispatch();
  return (
    <Menu mode={mode} disabledOverflow={true} >
      
      <Menu.SubMenu
        title={
          <>
            {/* <Avatar icon={<UserOutlined />} /> */}
            <UserOutlined  style={{ fontSize: '120%'}}/>
          </>
        }

        style={{paddingInline: "0px"}}
      >
        {isAuthenticated ? (
          <>
            <Menu.Item key="log-out" onClick={() => dispatch(logOutUser())}>
              <LogoutOutlined /> Log out
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item key="sign-in">
              <UserOutlined /> <Link to="signin">Log in</Link>
            </Menu.Item>
            <Menu.Item key="sign-up">
              <UserOutlined /> <Link to="signup">Sign up</Link>
            </Menu.Item>
          </>
        )}
        </Menu.SubMenu>
    
    </Menu>
  );
};

export default RightMenu;