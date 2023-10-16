/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./productDetail.module.css";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getProduct } from "../../services/product";
import { useSelector, useDispatch } from "react-redux";
import { editCartProduct } from "../../app/cartSlice";
import Counter from "../../components/Counter";
import { Card, Typography, Tag, Button } from "antd";

const { Title, Text } = Typography;

function ProductDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name } = useParams();

  const [product, setProduct] = useState([]);
  const cartProducts = useSelector((state) => state.cart.products);
  const cart_product = cartProducts.find(
    (p) => p.product.name === product.name
  );
  const count = cart_product ? cart_product.count : 0;
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    async function fetchProduct() {
      setProduct(await getProduct(name));
    }
    fetchProduct();
  }, [name]);

  const cartCountHandler = (product, value) => {
    dispatch(editCartProduct({ product, value }));
  };

  const countHandler = (value) => {
    cartCountHandler(product, value);
  };

  const editHandler = (product) => {
    navigate(`/editProduct/${product.name}`, { state: { product } });
  };

  return (
    <div style={{ padding: "24px", display: "flex", justifyContent: "center" }}>
      <Card style={{ width: 800 }} bordered={true}>
        <div className={styles.responsiveDiv}>
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{ width: "40%", objectFit: "cover" }}
          />
          <div style={{ paddingLeft: "24px", width: "50%" }}>
            {" "}
            <Text type="secondary">{product.category}</Text>
            <Title level={2}>{product.name}</Title>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Title level={3}>${product.price}</Title>
              {product.quantity !== 0 ? (
                <Tag
                  color="green"
                  style={{ height: "fit-content", marginLeft: "8px" }}
                >
                  In Stock
                </Tag>
              ) : (
                <Tag
                  color="red"
                  style={{ height: "fit-content", marginLeft: "8px" }}
                >
                  Out of Stock
                </Tag>
              )}
            </div>
            <Text>{product.description}</Text>
            <div style={{ marginTop: "24px" }}>
              {user.role === "regular" || user.role === "admin" ? (
                count === 0 ? (
                  <Button
                    type="primary"
                    style={{ marginRight: "16px" }}
                    onClick={() => countHandler(1)}
                  >
                    Add To Cart
                  </Button>
                ) : (
                  <Counter handler={countHandler} value={count}></Counter>
                )
              ) : null}
              {user.role === "admin" ? (
                <Button
                  onClick={() => {
                    editHandler(product);
                  }}
                >
                  Edit
                </Button>
              ) : null}
            </div>
          </div>
        </div>

        {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{ width: "40%", objectFit: "cover" }}
          />
          <div style={{ paddingLeft: "24px", width: "50%" }}>
            <Text type="secondary">{product.category}</Text>
            <Title level={2}>{product.name}</Title>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Title level={3}>${product.price}</Title>
              {product.quantity !== 0 ? (
                <Tag
                  color="green"
                  style={{ height: "fit-content", marginLeft: "8px" }}
                >
                  In Stock
                </Tag>
              ) : (
                <Tag
                  color="red"
                  style={{ height: "fit-content", marginLeft: "8px" }}
                >
                  Out of Stock
                </Tag>
              )}
            </div>
            <Text>{product.description}</Text>
            <div style={{ marginTop: "24px" }}>
              {user.role === "regular" || user.role === "admin" ? (
                count === 0 ? (
                  <Button
                    type="primary"
                    style={{ marginRight: "16px" }}
                    onClick={() => countHandler(1)}
                  >
                    Add To Cart
                  </Button>
                ) : (
                  <Counter handler={countHandler} value={count}></Counter>
                )
              ) : null}
              {user.role === "admin" ? (
                <Button
                  onClick={() => {
                    editHandler(product);
                  }}
                >
                  Edit
                </Button>
              ) : null}
            </div>
          </div>
        </div> */}
      </Card>
    </div>
  );
}

export default ProductDetail;
