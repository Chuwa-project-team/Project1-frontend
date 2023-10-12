// import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import ProductForm from '../../components/Form/productForm';
import { createNewProduct } from '../../services/product';

export default function CreateProduct() {
  const navigate = useNavigate();
  const location = useLocation();

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

  const onSubmit = async (formData) => {
    try {
      const response = await createNewProduct(formData);
      navigate(location.state?.from || '/');
      console.log(`Product successfully created ${response}`);
    } catch (err) {
      console.error("Error creating new product: ", err);
    }
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