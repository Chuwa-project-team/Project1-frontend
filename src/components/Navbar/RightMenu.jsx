/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Menu, Avatar } from 'antd';
import { UserOutlined, LogoutOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../../app/userSlice';

const RightMenu = ({ mode, handleCartModalOpen }) => {
  const  totalPrice  = useSelector(state => state.cart.totalPrice);
  const { user, isAuthenticated } = useSelector(state => state.user);
  const dispatch = useDispatch();
  return (
    <Menu mode={mode} disabledOverflow={true} >
      
      <Menu.SubMenu
        title={
          <>
            <Avatar icon={<UserOutlined />} />
          </>
        }
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
          <Menu.Item >
            <div className="mobile-no-display">
         {isAuthenticated ? (
          <Menu.Item key="log-out" onClick={() => dispatch(logOutUser())} >
            Log out
          </Menu.Item>):(
          <Menu.Item key="sign-in">
             <Link to="signin">Log in</Link>
          </Menu.Item> )}
          </div>
          </Menu.Item>
          <Menu.Item onClick={handleCartModalOpen}>
                    <ShoppingCartOutlined  />
                    <span>${totalPrice.toFixed(2)}</span>
          </Menu.Item>      
    </Menu>
  );
};

export default RightMenu;