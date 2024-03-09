import PropTypes from 'prop-types';

import { Text, Value, Container, Wrapper, Svg } from './DailyRate.styled';
import sprite from '../../img/symbol-defs.svg';


const DailyRate = ({   text, value, iconId }) => {
  return (
    
    <Container>
      <Wrapper>
        <Svg>
          <use href={`${sprite}#${iconId}`} />
        </Svg>
        <Text>{text}</Text>
      </Wrapper>
      <Value>{value}</Value>
    </Container>
  );
};

DailyRate.propTypes = {
  color: PropTypes.string.isRequired,
  iconId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default DailyRate;