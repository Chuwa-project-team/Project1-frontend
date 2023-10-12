import { useLocation } from 'react-router-dom';

export default function Product() {
    const location = useLocation();
    const product = location.state.product;
    console.log(product);
    // Use product info to display details
}
