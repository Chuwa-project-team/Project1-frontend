import {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'antd';
import  {getAllProducts} from '../../services/product';
import ProductItem from '../../components/ProductItem';
import { useSelector, useDispatch } from 'react-redux';
import { editCartProduct } from '../../app/cartSlice';
import { Select } from 'antd';

export default function ProductList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuthenticated, user } = useSelector(state => state.user);
    const cartProducts = useSelector(state => state.cart.products);

    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState('Last added');


    useEffect( () => {
        async function fetchProducts() {
          setProducts(await getAllProducts()) 
        }
        fetchProducts();
        console.log(products)
    }, []);

    useEffect(() => {
      const sortedProducts = [...products];
      if (order === 'Last added') {
        sortedProducts.sort((a, b) => {
          return new Date(b.createDate) - new Date(a.createDate);
        });
      } else if (order === 'Price: low to high') {
        sortedProducts.sort((a, b) => {
          return a.price - b.price;
        });
      }
      else if (order === 'Price: high to low') {
        sortedProducts.sort((a, b) => {
          return b.price - a.price;
        });
      }
      setProducts(sortedProducts);
    }, [order]);

    const cartCountHandlerCreator = (product) => {
      return (value) => {
        cartCountHandler(product, value);
      };
    }
    const cartCountHandler = (product, value) => {
      // Dispatch an action to update the cart
      dispatch(editCartProduct({product, value}));
    };

    
    const editHandler = (product) => {
        navigate(`/editProduct/${product.name}`, { state: { product } });
    };

    const naviToAddProduct = () => {
        navigate(`/createProduct`);
    }

    const handleOrderChange = (value) => {
      setOrder(value);
    }
    return (
        <div>
        <Row gutter={16}>
          < Col xs={24} md={12}>
            Product List
          </Col>
          <Col xs={24} md={12}>
          <Select
            defaultValue="Last added"
            style={{ width: 120 }}
            onChange={handleOrderChange}
            options={[
              { value: 'Last added', label: 'Last added' },
              { value: 'Price: low to high', label: 'Price: low to high' },
              { value: 'Price: high to low', label: 'Price: high to low' },
            ]}
          />
            <button onClick={naviToAddProduct}>Add Product</button>
          </Col>
        </Row>
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
                  isAuthenticated={isAuthenticated}
                  userRole={user.role}
                  />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }