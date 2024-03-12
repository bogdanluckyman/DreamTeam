import ExerciseCard from './Card';
import { CardList } from '../../pages/Authorized/ExercisesPage/ExercisesPage.styled';

export default function ExercisesCardList({
  cardsPerPage,
  currentPage,
  activeTab,
  totalCards,
}) {
  return (
    <CardList>
      {[...Array(cardsPerPage)].map((_, index) => {
        const cardNumber =
          index + (currentPage - 1) * cardsPerPage + (activeTab - 1) * 13 + 1;
        if (cardNumber <= totalCards[activeTab]) {
          return (
            <ExerciseCard
              key={index + (currentPage - 1) * cardsPerPage}
              cardNumber={cardNumber}
            />
          );
        }
        return null;
      })}
    </CardList>
  );
}
