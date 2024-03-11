import styled from 'styled-components';

export const MenuModalBackground = styled.div`
  position: fixed;
  z-index: 50;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const MenuModalContainer = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;

  background: #e6533c;
  height: 100%;

  display: flex;

  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  @media screen and (min-width: 375px) {
    width: 200px;
  }
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;
export const Active = styled(MenuModalContainer)`
  transform: translateX(0);
`;

export const CloseMenuContainer = styled.button`
  background: none;
  border: 0;
  box-sizing: border-box;
  color: transparent;
  cursor: pointer;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 18px;
  right: 20px;
  top: 20px;
  transform: translate(50%, -50%);
  outline: none;
  overflow: hidden;
  padding: 10px 0 0;
  position: absolute;
  text-transform: uppercase;
  transition: all 0.2s ease-in;
  width: 24px;
  height: 24px;

  
  &:before,
  &:after {
    background-color: white;
    content: '';
    display: block;
    height: 3px;
    left: 0;
    position: absolute;
    transform-origin: center left;
    transition: all 0.2s ease-in;
    width: 33.9411px; /* Approximation of sqrt(24^2 + 24^2) for diagonal length */
    z-index: -1;
  }

  &:before {
    top: 0;
    transform: rotate(45deg);
  }

  &:after {
    bottom: 0;
    transform: rotate(-45deg);
  }


`;


export const MenuButtons = styled.div`
  width: 114px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;
export const MenuInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const MenuButton = styled.button`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 10px 27px;
  /* height: 38px; */
  background-color: transparent;
  color: #efede8;
  width: fit-content;
`;

export const LogoutMenu = styled.button`
  /* width: 72px; */
  height: 20px;
  display: flex;
  gap: 8px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  background-color: transparent;
  border: none;
  color: #efede8;
`;
export const SvgMenuModal = styled.use`
  fill: white;
  color: white;
  stroke: white;
`;
