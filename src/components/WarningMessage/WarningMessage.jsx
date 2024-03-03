
import {
  Wrappers,
  Wrappper,
  WrapperMark,
  Text,
} from './WarningMessage.styled';

const WarningMessage = () => {
  return (
    <Wrappers>
      <Wrappper>
        <WrapperMark>
          <svg width="24" height="24">
            {/* <use href={`${sprite}#*назва іконки*`}></use> */}
          </svg>
        </WrapperMark>
        <Text>
          We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.
        </Text>
      </Wrappper>
    </Wrappers>
  );
};

export default WarningMessage;