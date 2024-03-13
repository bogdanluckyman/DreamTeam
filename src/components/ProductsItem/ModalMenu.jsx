import { useNavigate } from 'react-router';
import {
  Active,
  CloseMenuContainer,
  LogoutMenu,
  MenuButton,
  MenuButtons,
  MenuInnerContainer,
  MenuModalBackground,
  SvgMenuModal,
} from './ModalMenu.styles';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operation';

const ModalMenu = ({ onClose, sprite }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const logout = () => {
    dispatch(logOut());
    onClose();
    navigate('/signin');
  };

  return (
    <MenuModalBackground onClick={handleBackgroundClick}>
      <Active>
        <MenuInnerContainer>
          <CloseMenuContainer onClick={onClose}>
            <svg width="16" height="16">
              <use xlinkHref={`${sprite}#icon-close-white`} />
            </svg>
          </CloseMenuContainer>
          <MenuButtons>
            <MenuButton onClick={() => navigate('/diary')}>Diary</MenuButton>
            <MenuButton onClick={() => navigate('/products')}>
              Products
            </MenuButton>
            <MenuButton onClick={() => navigate('/exercises')}>
              Exercises
            </MenuButton>
          </MenuButtons>
          <LogoutMenu onClick={logout}>
            <p> Logout</p>
            <svg fill="pink" width="16" height="16">
              <SvgMenuModal
                fill="pink"
                xlinkHref={`${sprite}#icon-log-out`}
              ></SvgMenuModal>
            </svg>
          </LogoutMenu>
        </MenuInnerContainer>
      </Active>
    </MenuModalBackground>
  );
};

export default ModalMenu;
