import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../../components/Form/authForm';
import { signUpUser } from '../../app/userSlice';

export default function ForgetPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fields = [
    {
      placeholder: 'Email',
      name: 'email',
      type: 'text',
      rules: [
        {
          required: true,
          message: 'Please input your email!'
        }
      ]
    }
  ];

  const onSubmit = data => {
    dispatch(signUpUser(data)).then(() => navigate('/signin'));
  };
  return (
    <div>
      <AuthForm
        buttonText="Update password"
        onSubmit={onSubmit}
        title="Update your password"
        fields={fields}
      />
      <div>
        <p>
            Create a new account? <Link to="/signup">Sign up</Link>.
        </p>
        <p>
            Back to <Link to="/signin">Sign in</Link>.
        </p>
      </div>
    </div>
  );
}