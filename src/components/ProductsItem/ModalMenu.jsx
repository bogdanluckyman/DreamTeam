import {
  Active,
  CloseMenuContainer,
  LogoutMenu,
  MenuButton,
  MenuButtons,
  MenuInnerContainer,
  MenuModalBackground,
  MenuModalContainer,
  SvgMenuModal,
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
        <MenuInnerContainer>
          <CloseMenuContainer onClick={onClose}>
            <svg width="16" height="16">
              <use href="/src/img/symbol-defs.svg#icon-close-white"></use>
            </svg>
          </CloseMenuContainer>

          <MenuButtons>
            <MenuButton>Diary</MenuButton>
            <MenuButton>Products</MenuButton>
            <MenuButton>Exercises</MenuButton>
          </MenuButtons>

          <LogoutMenu>
            <p> Logout</p>
            <SvgMenuModal width="16" height="16">
              <SvgMenuModal href="/src/img/symbol-defs.svg#icon-log-out"></SvgMenuModal>
            </SvgMenuModal>
          </LogoutMenu>
        </MenuInnerContainer>
      </Active>
    </MenuModalBackground>
  );
};
export default ModalMenu;
