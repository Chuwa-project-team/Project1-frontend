// import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductForm from '../../components/Form/productForm';
import { updateProduct } from '../../services/product';
import { getProduct } from "../../services/product";
export default function EditProduct() {

  const navigate = useNavigate();
  const { name } = useParams();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      setIsLoading(true);
      const fetchedProduct = await getProduct(name);
      setProduct(fetchedProduct);
      setIsLoading(false);
    }
    fetchProduct();
  }, []);

  const fields = [
    {
        label: 'Product Name',
        name: 'name',
        type: 'text',
        disabled: true,
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
        type: 'text',
        rules: [
          { required: true, message: 'Price cannot be empty' },
        ]
    },
    {
        label: 'In Stock Quantity',
        name: 'quantity',
        type: 'text',
        rules: [
          { required: true, message: 'Price cannot be empty' },
        ]
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
      const response = await updateProduct(formData);
      navigate(location.state?.from || '/');
      console.log(`Product successfully edited ${response}`);
    } catch (err) {
      console.error("Error when updating a product: ", err);
    }
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ProductForm
          buttonText="Edit Product"
          onSubmit={onSubmit}
          title="Edit Product"
          fields={fields}
          initialValueContents={product}
        />
      )}
    </div>
  );
}