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

const ModalMenu = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      onClose();
    }
  });
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  const logout = () => {
    dispatch(logOut());
    navigate('/signin');
  };
  return (
    <MenuModalBackground onClick={handleBackgroundClick}>
      <Active>
        <MenuInnerContainer>
          <CloseMenuContainer onClick={onClose}>
            <svg width="16" height="16">
              <use href="src/img/symbol-defs.svg#icon-close-white"></use>
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
                href="/src/img/symbol-defs.svg#icon-log-out"
              ></SvgMenuModal>
            </svg>
          </LogoutMenu>
        </MenuInnerContainer>
      </Active>
    </MenuModalBackground>
  );
};
export default ModalMenu;
