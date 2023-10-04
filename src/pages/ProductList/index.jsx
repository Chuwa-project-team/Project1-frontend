import {useEffect } from 'react';
import  {getAllProducts} from '../../services/product';
import ProductItem from '../../components/ProductItem';
export default function ProductList() {
    let products = [];
    useEffect( () => {
        async function fetchProducts() {
        products = await getAllProducts();
        console.log(products);}
        fetchProducts();
    }, []);
    return (
      <div>
        <h2>ProductList</h2>
        {products.map(product => <ProductItem key={product.id} product={product} />)}
      </div>
    );
  }