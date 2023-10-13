/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import Counter from '../Counter'
import { editCartProduct } from '../../app/cartSlice';
import {  Modal } from 'antd';
import { Col, Row } from 'antd';
import CartItem from './CartItem';
function CartCard({isOpen,onCancel}) {
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
        </Modal>
    )
    

}


export default CartCard;