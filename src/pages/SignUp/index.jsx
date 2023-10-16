import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../../components/Form/authForm';
import { signUpUser } from '../../app/userSlice';

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const onSubmit = data => {
    dispatch(signUpUser(data)).then(() => navigate('/signin'));
  };
  return (
    <div>
      <AuthForm
        buttonText="Create account"
        onSubmit={onSubmit}
        title="Sign up an account"
        fields={fields}
      />
      <div>
        <p>Already have an account? Please <Link to="/signin">Sign in</Link>.</p>
      </div>
    </div>
  );
}