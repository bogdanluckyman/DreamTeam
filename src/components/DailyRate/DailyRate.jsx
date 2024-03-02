import PropTypes from 'prop-types';

import { Text, Value, Container, Wrapper, Svg } from './DailyRate.styled';

const DailyRate = ({ color,  text, value }) => {
  return (
    <Container color={color}>
      <Wrapper>
        <Svg>
          {/* <use href={`${sprite}#${iconId}`} /> */}
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
  value: PropTypes.string.isRequired,
};

export default DailyRate;