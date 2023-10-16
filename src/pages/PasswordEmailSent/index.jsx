import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function PasswordEmailSent() {
    const navigate = useNavigate();
    const onClick = () => {
          navigate('/');
      };
    
    return (
        <Result
        status="success"
        title="Password update email sent"
        subTitle="We have sent the update password link to your email,please check that!"
        extra={[
          <Button type="primary" key="console" onClick={onClick}>
            Back to home
          </Button>,

        ]}
      />
    );
}