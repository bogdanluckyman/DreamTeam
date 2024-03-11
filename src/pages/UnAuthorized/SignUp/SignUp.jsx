import { RegisterForm } from '../../../components/RegisterForm/RegisterForm';

import { SignUpTittle, SignUpText, FormContainer } from './SignUp.styled';

import {
  RightImageContainer,
  Container,
  BlockContainer,
  VideoTutorial,
  IconPlay,
  Svg,
  VideoTutorialTitle,
  VideoTutorialText,
  CaloriesContainer,
  IconRun,
  TitleRunMan,
  SvgRun,
  SpanRun,
} from '../../Home/Home.styled';
import sprite from '../../../img/sprite.svg';

const SignUp = () => {
  return (
    <Container>
      <FormContainer>
        <SignUpTittle>Sign Up</SignUpTittle>
        <SignUpText>
          Thank you for your interest in our platform. To complete the
          registration process, please provide us with the following
          information.
        </SignUpText>
        <RegisterForm />
      </FormContainer>
      <RightImageContainer>
        <BlockContainer>
          <VideoTutorial>
            <IconPlay>
              <Svg>
                <use href={`${sprite}#icon-Polygon-1`}></use>
              </Svg>
            </IconPlay>
            <VideoTutorialTitle>
              350+ <VideoTutorialText>Video tutorial</VideoTutorialText>
            </VideoTutorialTitle>
          </VideoTutorial>
          <CaloriesContainer>
            <IconRun>
              <SvgRun>
                <use href={`${sprite}#icon-running-stick-figure`}></use>
              </SvgRun>
            </IconRun>
            <TitleRunMan>
              500 <SpanRun>cal</SpanRun>
            </TitleRunMan>
          </CaloriesContainer>
        </BlockContainer>
      </RightImageContainer>
    </Container>
  );
};

export default SignUp;
