import { useLocation } from 'react-router-dom';

export default function Product() {
    const location = useLocation();
    const product = location.state.product;

    // Use product info to display details
}


// import "./styles.css";

// import React from 'react';
// import { Button, Card, Typography, Tag,Flex} from 'antd';
// import Meta from './meta.png'
// const { Title, Text } = Typography;

// function App() {
//   return (
//     <div style={{ padding: '24px', display: 'flex', justifyContent: 'center' }}>
//       <Card
//         style={{ width: 800 }}
//         bordered={true}
//       >
//         <Flex justify = "space-between" >
//         {/* wrap="wrap" gap="small" */}
//         <img
//           src={Meta}
//           alt="Product"
//           style={{ width: '40%', objectFit: 'cover' }}
//         />

//         <div style={{ paddingLeft: '24px', width: '50%' }}>
//           <Text type="secondary">Category1</Text>
//           <Title level={2}>Meta Quest2 VR headset</Title>
//           <Flex align="center">
//           <Title level={3}>$299</Title>
//           <Tag color="red"  style={{height: 'fit-content'}}>Out of Stock</Tag>
//           </Flex>
//           <Text>
//             Hundreds of hit games, one-of-a-kind experiences, live events,
//             new ways to stay fit and a growing community... 
//           </Text>

//           <div style={{ marginTop: '24px' }}>
//             <Button type="primary" style={{ marginRight: '16px' }}>
//               Add To Cart
//             </Button>
//             <Button>Edit</Button>
//           </div>
//         </div>
//         </Flex>
//       </Card>
//     </div>
//   );
// }

// export default App;

