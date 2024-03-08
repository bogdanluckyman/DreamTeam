
import React, { useState } from 'react';
import { ExercisesPageContainer, CardContainer, NavigationPanel, CircleButton } from './ExercisesPage.styled';
import NavigationContainer from '../../../components/ExercisesNavigation/NavigationContainer';
import ExercisesCardList from '../../../components/ExercisesCardList/CardList';

export default function ExercisesPage() {
  const [activeTab, setActiveTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const totalCards = {
    1: 13,
    2: 13,
    3: 13,
  };

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
  const totalPages = Math.ceil(totalCards[activeTab] / cardsPerPage);

  return (
    <ExercisesPageContainer>
      <NavigationContainer activeTab={activeTab} handleTabClick={handleTabClick} />
      <CardContainer>
        <ExercisesCardList
          cardsPerPage={cardsPerPage}
          currentPage={currentPage}
          activeTab={activeTab}
          totalCards={totalCards}
        />
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
