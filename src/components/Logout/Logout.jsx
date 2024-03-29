import sprite from '../../img/symbol-defs.svg';
import { LogoutLink, Text } from './Logout.styled';
import { logOut } from '../../redux/auth/operation';
import { useDispatch } from 'react-redux';

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <LogoutLink to="/" onClick={handleLogOut}>
      <Text>Logout</Text>
      <svg width="24" height="24">
        <use href={`${sprite}#icon-log-out`}></use>
      </svg>
    </LogoutLink>
  );
};

export default Logout;
