import React from 'react';
import { Card } from '../../pages/Authorized/ExercisesPage/ExercisesPage.styled';

export default function ExerciseCard({ cardNumber }) {
  return (
    <Card>
      <div>{cardNumber}</div>
    </Card>
  );
}
