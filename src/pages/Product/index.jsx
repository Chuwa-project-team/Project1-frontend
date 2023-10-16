import { useLocation } from "react-router-dom";
import { Button, Card, Typography, Tag } from 'antd';
// import Meta from "./meta.png";
const { Title, Text } = Typography;

export default function Product() {
  const location = useLocation();
  const product = location.state.product;

  return (
    <div style={{ padding: "24px", display: "flex", justifyContent: "center" }}>
      <Card style={{ width: 800 }} bordered={true}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <img
            src={product.image}
            alt="Product"
            style={{ width: "40%", objectFit: "cover" }}
          />

          <div style={{ paddingLeft: "24px", width: "50%" }}>
            <Text type="secondary">Category1</Text>
            <Title level={2}>{product.name}</Title>
            
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Title level={3}>{product.price}</Title>
              {product.count !== 0 ? (
                <Tag color="green" style={{ height: "fit-content", marginLeft: "8px" }}>
                  In Stock
                </Tag>
              ) : (
                <Tag color="red" style={{ height: "fit-content", marginLeft: "8px" }}>
                  Out of Stock
                </Tag>
              )}
            </div>

            <Text>{product.description}</Text>

            <div style={{ marginTop: "24px" }}>
              <Button
                type="primary"
                style={{ marginRight: "16px" }}
                onClick={product.countHandler}
              >
                Add To Cart
              </Button>
              <Button onClick={product.editHandler}>Edit</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
