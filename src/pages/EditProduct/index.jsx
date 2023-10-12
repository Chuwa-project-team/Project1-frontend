// import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProductForm from '../../components/Form/productForm';
import { updateProduct } from '../../services/product';

export default function EditProduct() {
  const navigate = useNavigate();
  const location = useLocation();

  const [productData, setProductData] = useState(null);

  useEffect(() => {
    // check if location.state passes product original data
    if(location.state?.product) {
      setProductData(location.state.product);
    } else {
      console.error("No original product value passes!");
    }
  }, [location]);

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
      const response = await updateProduct(productData?.name, formData);
      navigate(location.state?.from || '/');
      console.log(`Product successfully edited ${response}`);
    } catch (err) {
      console.error("Error when updating a product: ", err);
    }
  };

  return (
    <div>
      <ProductForm
        buttonText="Edit Product"
        onSubmit={onSubmit}
        title="Edit Product"
        fields={fields}
        initialValueContents={productData}
      />
    </div>
  );
}