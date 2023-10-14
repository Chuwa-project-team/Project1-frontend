/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import Counter from '../Counter'
import { editCartProduct } from '../../app/cartSlice';
import {  Modal } from 'antd';
import { Col, Row, Divider } from 'antd';
import CartItem from './CartItem';
import CouponAdder from './CouponAdder';
import PriceSummary from './PriceSummary';
function CartCard({isOpen,onCancel}) {
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const [discount, setDiscount] = useState(0);
    const cartProducts = useSelector(state => state.cart.products);
    const dispatch = useDispatch();

    const cartCountHandlerCreator = (product) => {
        return (value) => {
          cartCountHandler(product, value);
        };
      }
      const cartCountHandler = (product, value) => {
        // Dispatch an action to update the cart
        dispatch(editCartProduct({product, value}));
      };

      
    return (
        <Modal open = {isOpen} title="Cart" onOk={onCancel} onCancel={onCancel}>
        <Row gutter={16}> {/* Adjust gutter as needed */}
          {cartProducts.map(({product,count}) => {
            return (
              <Col key={product.name} xs={24} sm={24} md={24} lg={24}>
                <CartItem
                  name={product.name}
                  imageUrl={product.imageUrl}
                  price={product.price}
                  count={count}
                  countHandler={cartCountHandlerCreator(product)}
                  userRole="admin"
                  />
              </Col>
            );
          })}
        </Row>
        <CouponAdder setDiscount={setDiscount} />
        <Divider />
        <PriceSummary subtotal={totalPrice} discount={Number(discount)}></PriceSummary>
        </Modal>
    )
    

}


export default CartCard;