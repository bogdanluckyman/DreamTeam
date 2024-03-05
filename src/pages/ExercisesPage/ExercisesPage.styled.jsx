import styled from 'styled-components';

export const ExercisesPageContainer = styled.div`
    margin-left: 0;
    padding-left: 20px;
    background-color: #040404;
    color: #EFEDE8;
    min-height: 100vh;
`;

export const NavgtionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    
    @media (max-width: 767px) {
        flex-direction: column;
        display: block;
    }
`;

export const Title = styled.h2`
    margin-top: 0px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    
    @media (max-width: 767px) {
        margin-top: 0;
        margin-left: -8px;
    }
`;

export const CardContainer = styled.div`
    margin-left: -55px;
    position: relative;
`;

export const Card = styled.li`
    width: 237px;
    height: 206px;
    background-color: gray;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: white;
    position: relative;
    
    @media (min-width: 768px) and (max-width: 1439px) {
        width: 224px;
    }
    
    @media (min-width: 320px) and (max-width: 767px) {
        width: 335px;
    }
`;


export const CardList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    @media (min-width: 1440px) {
        max-width: calc(237px * 5 + 20px * 5);
        margin: 0 auto;
    }
    @media (min-width: 768px) and (max-width: 1439px){
        max-width: calc(237px * 3 + 20px * 3);
        margin: 0 auto;
    }
    @media (min-width: 320px) and (max-width: 767px){
        max-width: calc(335px * 1 + 20px * 1);
        margin: 0 auto;
    }
`;

export const TabButton = styled.button`
    background-color: ${props => props.isActive ? '#EFEDE8' : 'transparent'};
    color: ${props => props.isActive ? '#EFEDE8' : 'white'};
    border: none;
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 5px;
    cursor: pointer;
    width: 84px;
    height: 32px;

    &:not(.active) {
        opacity: 0.4;
    }

    &.active::after {
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        background-color: #EF8964;
        animation: slideIn 4s ease forwards;
        border-radius: 2px;
    }
`;

export const NavigationPanel = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const CircleButton = styled.button`
    background-color: ${props => props.isActive ? '#EFEDE8' : 'transparent'};
    color: ${props => props.isActive ? '#EFEDE8' : 'white'};
    border: none;
    padding: 5px;
    margin: 0 5px;
    border-radius: 50%;
    width: 25px;
    height: 25px;

    &:not(.active) {
        opacity: 0.4;
    }
`;