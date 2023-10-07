import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AuthForm from '../../components/Form/authForm';
import { authUser } from '../../app/userSlice';

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const fields = [
    {
      placeholder: 'Email',
      name: 'email',
      type: 'text'
    },
    {
      placeholder: 'Password',
      name: 'password',
      type: 'password'
    }
  ];

  const onSubmit = data => {
    dispatch(authUser(data)).then(() => {
      navigate(location.state?.from || '/');
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
      <div>
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