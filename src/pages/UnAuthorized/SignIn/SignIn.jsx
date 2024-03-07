import { LoginForm } from '../../../components/LoginForm/LoginForm';

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
import {
  SignUpTittle,
  SignUpText,
  FormContainer,
} from '../SignUp/SignUp.styled';

export default function Login() {
  return (
    <Container>
      <FormContainer>
        <SignUpTittle>Sign In</SignUpTittle>
        <SignUpText>
          Welcome! Please enter your credentials to login to the platform:
        </SignUpText>
        <LoginForm />
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
}
