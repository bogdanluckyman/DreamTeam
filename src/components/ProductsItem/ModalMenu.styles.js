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

  /* top: -100%;
  
  margin-left: 100%; */

  background: #e6533c;
  height: 100%;
  /* align-items: center; */
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
  width: 22px;
  height: 22px;
  background-color: transparent;
  border: none;
  position: absolute;
  margin-top: 26px;

  @media screen and (min-width: 375px) {
    margin-left: 160px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 300px;
  }
`;
export const MenuButtons = styled.div`
  width: 114px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const MenuInnerContainer = styled.div`
  /* padding: 245px 43px; */
  display: flex;
  justify-content: center;
`;

export const MenuButton = styled.button`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 10px 27px;
  /* height: 38px; */
  background-color: transparent;
  color: #efede8;
`;

export const LogoutMenu = styled.button`
  width: 72px;
  height: 20px;
  display: flex;
  position: absolute;
`;
