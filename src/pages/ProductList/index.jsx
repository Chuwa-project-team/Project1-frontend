import {useState, useEffect } from 'react';
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
        {products.map(product => <ProductItem
            key={product.id}
            imageUrl = {product.imageUrl}
            price={product.price}
            count={product.count}
            countHandler={()=>{}}
            editHandler={()=>{}}
            userRole="admin"
         />)}
      </div>
    );
  }