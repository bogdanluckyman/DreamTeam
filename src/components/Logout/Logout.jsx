// import { useDispatch } from 'react-redux';
import sprite from '../../img/symbol-defs.svg';
import { LogoutLink, Text } from './Logout.styled';

const Logout = () => {
 // *реедакс частина
//   const dispatch = useDispatch();
 const handleLogOut = () => "діспатч логауту";

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