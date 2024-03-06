import { useSelector } from 'react-redux';
import { SvgFormModal } from './FormModal.styles';
import {
  CloseWellDoneContainer,
  DiaryButton,
  InnerWellDoneContainer,
  NextProduct,
  Paragraph,
  ParagtafDiarty,
  Span,
  SvgNext,
  Text,
  WellDoneBackground,
  WellDoneContainer,
  WellDoneImg,
} from './WellDoneModal.styles';

const WellDoneModal = ({ Calories, onClose, toFormModal, Background }) => {
  const diaryProductValue = useSelector((state) => state.diary.productCalories);
  console.log(diaryProductValue);

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
            <ParagtafDiarty> To the diary</ParagtafDiarty>

            <SvgNext>
              <use
                href="/src/img/symbol-defs.svg#icon-next"
                width="25"
                height="25"
              ></use>
            </SvgNext>
          </DiaryButton>
        </InnerWellDoneContainer>
      </WellDoneContainer>
    </WellDoneBackground>
  );
};
export default WellDoneModal;
