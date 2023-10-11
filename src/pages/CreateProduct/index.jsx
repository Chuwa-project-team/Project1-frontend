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
        label: 'Add Image Link',
        placeholder: 'http://',
        name: 'productImage',
        type: 'text'
    }
  ];

  const onSubmit = async (formData) => {
    try {
      const newProduct = await createNewProduct(formData);
      navigate(location.state?.from || '/');
      return newProduct;
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