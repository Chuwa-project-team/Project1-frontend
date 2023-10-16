/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-unused-vars */
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AuthForm from '../../components/Form/authForm';
import { authUser } from '../../app/userSlice';
import { message } from 'antd';
export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const fields = [
    {
      placeholder: 'Email',
      name: 'email',
      type: 'text',
      rules: [
        { required: true, message: 'Please input your Email!' },
        { 
          type: 'email', 
          message: 'The input is not valid Email!',
        },
      ]
    },
    {
      placeholder: 'Password',
      name: 'password',
      type: 'password',
      rules: [
        { required: true, message: 'Please input your Password!' },
        { 
          min: 6, 
          message: 'Password must be at least 6 characters!',
        },
        { 
          pattern: /[A-Za-z]/, 
          message: 'Password must contain at least 1 letter!',
        },
        { 
          pattern: /[0-9]/, 
          message: 'Password must contain at least 1 number!',
        },
      ]
    }
  ];

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    maxWidth: "400px",
    justifyContent: "space-between",
    flexWrap: "wrap",
    margin: "0 auto",
  }

  const onSubmit = data => {
    dispatch(authUser(data))
      .then(response => {
        // Check if the response has a status property and it's not 200
        console.log(response.payload);
        if (!response.payload.email) {
          // If the backend provides a specific error message, display it, otherwise display a generic error message
          message.error(response.message || "Wrong email or password. Please try again.");
        } else {
          navigate(location.state?.from || '/');
        }
      })
      .catch(err => {
        // This will handle any errors in the network request or if the promise rejects
        message.error("An unexpected error occurred. Please try again.");
      });
  };

  return (
    <div>
      <AuthForm
        buttonText="Sign in"
        onSubmit={onSubmit}
        title="Sign in to your account"
        fields={fields}
      />
      <div style={containerStyle}>
        <p>
            Dont have an account? <Link to="/signup">Sign up</Link>.
        </p>
        <p>
            <Link to="/password">Forget password</Link>?
        </p>
      </div>
    </div>
  );
}