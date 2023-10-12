// import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProductForm from '../../components/Form/productForm';
// import { authUser } from '../../app/userSlice';

export default function EditProduct() {
  const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();

  const fields = [
    {
        label: 'Product Name',
        name: 'name',
        type: 'text'
    },
    {
        label: 'Product Description',
        name: 'description',
        type: 'textarea'
    },
    {
        label: 'Category',
        name: 'category',
        type: 'select'
    },
    {
        label: 'Price',
        name: 'price',
        type: 'text'
    },
    {
        label: 'In Stock Quantity',
        name: 'quantity',
        type: 'text'
    },
    {
        label: 'Add Image Link',
        placeholder: 'http://',
        name: 'imageUrl',
        type: 'text'
    }
  ];

  const onSubmit = () => {
    dispatch();
  };

  return (
    <div>
      <ProductForm
        buttonText="Edit Product"
        onSubmit={onSubmit}
        title="Edit Product"
        fields={fields}
      />
    </div>
  );
}