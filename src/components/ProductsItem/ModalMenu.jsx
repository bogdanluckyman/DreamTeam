import {
  Active,
  CloseMenuContainer,
  LogoutMenu,
  MenuButton,
  MenuButtons,
  MenuInnerContainer,
  MenuModalBackground,
  MenuModalContainer,
} from './ModalMenu.styles';

const ModalMenu = ({ onClose }) => {
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
  return (
    <MenuModalBackground onClick={handleBackgroundClick}>
      <Active>
        <CloseMenuContainer onClick={onClose}>
          <svg width="16" height="16">
            <use href="/src/img/symbol-defs.svg#icon-close-white"></use>
          </svg>
        </CloseMenuContainer>
        <MenuInnerContainer>
          <MenuButtons>
            <MenuButton>Diary</MenuButton>
            <MenuButton>Products</MenuButton>
            <MenuButton>Exercises</MenuButton>
          </MenuButtons>
        </MenuInnerContainer>
        <LogoutMenu>
          <p> Logout</p>
          <svg width="16" height="16">
            <use href="/src/img/symbol-defs.svg#icon-close-white"></use>
          </svg>
        </LogoutMenu>
      </Active>
    </MenuModalBackground>
  );
};
export default ModalMenu;
