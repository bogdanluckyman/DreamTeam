import React from 'react';
import { NavgtionContainer, Title, ButtonsContainer, TabButton } from '../../pages/Authorized/ExercisesPage/ExercisesPage.styled';

export default function NavigationContainer({ activeTab, handleTabClick }) {
  return (
    <NavgtionContainer>
      <Title>Exercises</Title>
      <ButtonsContainer>
        <TabButton
          className={activeTab === 1 ? 'active' : ''}
          onClick={() => handleTabClick(1)}
        >
          Body parts
        </TabButton>
        <TabButton
          className={activeTab === 2 ? 'active' : ''}
          onClick={() => handleTabClick(2)}
        >
          Muscles
        </TabButton>
        <TabButton
          className={activeTab === 3 ? 'active' : ''}
          onClick={() => handleTabClick(3)}
        >
          Equipment
        </TabButton>
      </ButtonsContainer>
    </NavgtionContainer>
  );
}
