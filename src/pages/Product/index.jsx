import { useLocation } from 'react-router-dom';
import { Button, Card, Typography, Tag } from 'antd';

const { Title, Text } = Typography;
export default function Product() {
    const location = useLocation();
    const product = location.state.product;
    console.log(product);
    // Use product info to display details

    return (
        <div style={{ padding: '24px', display: 'flex', justifyContent: 'center' }}>
          <Card
            style={{ width: 800, display: 'flex', flexDirection: 'row' }}
            bordered={false}
          >
            <img
              src="./meta"
              alt="Product"
              style={{ width: '50%', objectFit: 'cover' }}
            />
    
            <div style={{ paddingLeft: '24px', width: '50%' }}>
              <Text type="secondary">Category1</Text>
              <Title level={2}>Meta Quest2 VR headset</Title>
              <Title level={3}>$299</Title>
              <Tag color="red">Out of Stock</Tag>
              <Text>
                Hundreds of hit games, one-of-a-kind experiences, live events,
                new ways to stay fit and a growing community... 
              </Text>
    
              <div style={{ marginTop: '24px' }}>
                <Button type="primary" style={{ marginRight: '16px' }}>
                  Add To Cart
                </Button>
                <Button>Edit</Button>
              </div>
            </div>
          </Card>
        </div>
      );
}

