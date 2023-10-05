import {useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import  {getAllProducts} from '../../services/product';
import ProductItem from '../../components/ProductItem';
export default function ProductList() {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        async function fetchProducts() {
        setProducts(await getAllProducts()) 
        console.log(products);}
        fetchProducts();
    }, []);
    return (
        <div>
        <h2>ProductList</h2>
        <Row gutter={16}> {/* Adjust gutter as needed */}
          {products.map(product => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <ProductItem
                name={product.name}
                imageUrl={product.imageUrl}
                price={product.price}
                count={product.count}
                countHandler={() => {}}
                editHandler={() => {}}
                userRole="admin"
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  }