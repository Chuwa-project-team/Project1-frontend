// import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProductForm from '../../components/Form/productForm';
// import { authUser } from '../../app/userSlice';

export default function CreateProduct() {
  const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();

  const fields = [
    {

        label: 'Product Name',
        name: 'productName',
        type: 'text'
    },
    {
        label: 'Product Description',
        name: 'productDescription',
        type: 'textarea'
    },
    {
        label: 'Category',
        name: 'productCategory',
        type: 'select'
    },
    {
        label: 'Price',
        name: 'productPrice',
        type: 'text'
    },
    {
        label: 'In Stock Quantity',
        name: 'productQuantity',
        type: 'text'
    },
    {
        label: 'In Stock Quantity',
        name: 'productQuantity',
        type: 'text'
    },
    {
        label: 'Add Image Link',
        placeholder: 'http://',
        name: 'productImage',
        type: 'text'
    }
  ];

  const onSubmit = () => {
    dispatch();
  };

  return (
    <div>
      <ProductForm
        buttonText="Add Product"
        onSubmit={onSubmit}
        title="Create Product"
        fields={fields}
      />
    </div>
  );
}