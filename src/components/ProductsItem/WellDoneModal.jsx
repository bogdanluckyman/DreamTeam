import { SvgFormModal } from './FormModal.styles';
import {
  CloseWellDoneContainer,
  DiaryButton,
  InnerWellDoneContainer,
  NextProduct,
  Paragraph,
  Span,
  Text,
  WellDoneBackground,
  WellDoneContainer,
  WellDoneImg,
} from './WellDoneModal.styles';

const WellDoneModal = ({ Calories, onClose, toFormModal, Background }) => {
  console.log(Calories);
  return (
    <WellDoneBackground onClick={Background}>
      <WellDoneContainer>
        <CloseWellDoneContainer onClick={onClose}>
          <SvgFormModal width="13" height="13">
            <use href="/src/img/symbol-defs.svg#icon-close-white"></use>
          </SvgFormModal>
        </CloseWellDoneContainer>
        <InnerWellDoneContainer>
          <WellDoneImg></WellDoneImg>
          <Text>Well done</Text>
          <Paragraph>
            Calories: <Span>{Calories}</Span>
          </Paragraph>
          <NextProduct onClick={toFormModal}>Next product</NextProduct>
          <DiaryButton onClick={onClose}>
            To the diary
            <svg width="16" height="16"></svg>
          </DiaryButton>
        </InnerWellDoneContainer>
      </WellDoneContainer>
    </WellDoneBackground>
  );
};
export default WellDoneModal;
