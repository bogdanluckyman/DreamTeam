import { useState } from 'react';
import {
  ExercisesPageContainer,
  NavgtionContainer,
  Title,
  ButtonsContainer,
  CardContainer,
  Card,
  CardList,
  TabButton,
  NavigationPanel,
  CircleButton,
} from './ExercisesPage.styled';

export default function ExercisesPage() {
  const [activeTab, setActiveTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getCardsPerPage = () => {
    if (window.innerWidth >= 1440) {
      return activeTab === 1 ? 10 : 3;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
      return activeTab === 1 ? 9 : 3;
    } else if (window.innerWidth < 767) {
      return activeTab === 1 ? 10 : 1;
    } else {
      return 1;
    }
  };

  const cardsPerPage = getCardsPerPage();
  const totalCards = {
    1: 13,
    2: 13,
    3: 13,
  };
  const totalPages = Math.ceil(totalCards[activeTab] / cardsPerPage);

  return (
    <ExercisesPageContainer>
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
      <CardContainer>
        <CardList>
          {[...Array(cardsPerPage)].map((_, index) => {
            const cardNumber =
              index +
              (currentPage - 1) * cardsPerPage +
              (activeTab - 1) * 13 +
              1;
            if (cardNumber <= totalCards[activeTab]) {
              return (
                <Card key={index + (currentPage - 1) * cardsPerPage}>
                  <div>{cardNumber}</div>
                </Card>
              );
            }
            return null;
          })}
        </CardList>
        {totalPages > 1 && (
          <NavigationPanel>
            {[...Array(totalPages)].map((_, index) => (
              <CircleButton
                key={index}
                type="radio"
                
                isactive={(index + 1 === currentPage).toString()}
                onClick={() => handlePageChange(index + 1)}
              >
              </CircleButton>
            ))}
          </NavigationPanel>
        )}
      </CardContainer>
    </ExercisesPageContainer>
  );
}
