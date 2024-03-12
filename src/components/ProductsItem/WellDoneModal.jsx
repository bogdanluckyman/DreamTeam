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
import { useNavigate } from 'react-router';

const WellDoneModal = ({ Calories, onClose, Background }) => {
  const navigate = useNavigate();

  const linkNav = () => {
    navigate('/diary');
  };

  return (
    <WellDoneBackground onClick={Background}>
      <WellDoneContainer>
        <CloseWellDoneContainer onClick={onClose}>
          <SvgFormModal width="13" height="13">
            <use href="/DreamTeam/src/img/symbol-defs.svg#icon-close-white"></use>
          </SvgFormModal>
        </CloseWellDoneContainer>
        <InnerWellDoneContainer>
          <WellDoneImg></WellDoneImg>
          <Text>Well done</Text>
          <Paragraph>
            Calories: <Span>{Calories}</Span>
          </Paragraph>
          <NextProduct onClick={onClose}>Next product</NextProduct>
          <DiaryButton onClick={linkNav}>
            <ParagtafDiarty> To the diary</ParagtafDiarty>

            <SvgNext>
              <use
                href="/DreamTeam/src/img/symbol-defs.svg#icon-next"
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
