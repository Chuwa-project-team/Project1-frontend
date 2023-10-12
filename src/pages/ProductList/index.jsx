import {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'antd';
import  {getAllProducts} from '../../services/product';
import ProductItem from '../../components/ProductItem';
import { useSelector, useDispatch } from 'react-redux';
import { editProduct } from '../../app/cartSlice';

export default function ProductList() {
    const cartProducts = useSelector(state => state.cart.products);
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        async function fetchProducts() {
          setProducts(await getAllProducts()) 
        }
        fetchProducts();
    }, []);

    const cartCountHandlerCreator = (product) => {
      return (value) => {
        cartCountHandler(product, value);
      };
    }
    const cartCountHandler = (product, value) => {
      // Dispatch an action to update the cart
      dispatch(editProduct({product, value}));
    };

    
    const editHandler = (product) => {
        navigate(`/editProduct/${product.name}`, { state: { product } });
    };

    return (
        <div>
        <h2>ProductList</h2>
        <Row gutter={16}> {/* Adjust gutter as needed */}
          {products.map(product => {
            const cart_product = cartProducts.find(p => p.product.name === product.name);
            const countValue = cart_product ? cart_product.count : 0;
            //console.log(countValue)
            return (
              <Col key={product.name} xs={24} sm={12} md={8} lg={6}>
                <ProductItem
                  name={product.name}
                  imageUrl={product.imageUrl}
                  price={product.price}
                  count={countValue}
                  countHandler={cartCountHandlerCreator(product)}
                  editHandler={() => {editHandler(product)}}
                  userRole="admin"
                  />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }