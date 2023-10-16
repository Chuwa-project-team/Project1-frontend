/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from './productDetail.module.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React, {useState, useEffect}from 'react';
import { getProduct } from '../../services/product';
import { useSelector, useDispatch } from 'react-redux';
import { editCartProduct } from '../../app/cartSlice';
import Counter from '../../components/Counter';

function ProductDetail({  onAddToCart }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [product, setProduct] = useState([]);
    const cartProducts = useSelector(state => state.cart.products);
    const cart_product = cartProducts.find(p => p.product.name === product.name);
    const count = cart_product ? cart_product.count : 0;
    const { isAuthenticated, user } = useSelector(state => state.user);
    const { name } = useParams();
    
    useEffect( () => {
        async function fetchProduct() {
            setProduct(await getProduct(name)) 
        }
        fetchProduct();
    }, []);

    // const cartCountHandlerCreator = (product) => {
    //     return (value) => {
    //       cartCountHandler(product, value);
    //     };
    //   }
    const cartCountHandler = (product, value) => {
      // Dispatch an action to update the cart
      dispatch(editCartProduct({product, value}));
    };

    const countHandler = (value) => {
        cartCountHandler(product, value);
    }
    const editHandler = (product) => {
        navigate(`/editProduct/${product.name}`, { state: { product } });
    };

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', width: '60%', margin: '0 auto' }}>
      <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '100%', display: 'block', margin: '0 auto' }} />
      
      <div style={{ textAlign: 'right', padding: '10px' }}>
        <h3>{product.category}</h3>
        <h1>{product.name}</h1>
        <h2>${product.price}</h2>
        {product.quantity === 0 ? <span style={{ color: 'red' }}>Out of Stock</span> : null}
        <p>{product.description}</p>

        {user.role === "regular" || user.role === "admin" ? (
            count === 0 ? (
                <button className={styles.button} onClick={()=>countHandler(1)}>Add To Cart</button>           
            ) : (
                <Counter handler={countHandler} value={count} ></Counter>
            )
        ) : null } 
        {user.role === "admin" ? (
            <button className={`${styles.button} ${styles.buttonEdit}`} onClick={()=>{editHandler(product)}}>Edit</button>
        ) : null }
      </div>
    </div>
  );
}

export default ProductDetail;


