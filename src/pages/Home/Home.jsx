import {
  HomeTitle,
  TitleContainer,
  SvgLineBody,
  HomeCont,
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
} from './Home.styled';
import { AuthNav } from '../../components/AuthNav/AuthNav';
import sprite from '../../img/sprite.svg';

const Home = () => {
  return (
    <Container>
      <HomeCont>
        <TitleContainer>
          <SvgLineBody>
            <use href={`${sprite}#icon-line`}></use>
          </SvgLineBody>
          <HomeTitle>Transforming your body shape with Power Pulse</HomeTitle>

          <div>
            <AuthNav />
          </div>
        </TitleContainer>
      </HomeCont>
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

export default Home;
