import { useNavigate } from 'react-router-dom';
import {
  Section,
  Content,
  Svg,
  StyledLink,
  TextErr,
  TitleErr,
  SideContent,
} from './ErrorPage.styled';

import sprite from '../../img/symbol-defs.svg';
import BtnToHome from '../../components/BtnToHome/BtnToHome';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Section>
      <SideContent>
        <StyledLink to="/">
          <Svg>
            <use href={`${sprite}#icon-logo-white`} />
          </Svg>
          PowerPulse
        </StyledLink>
        <Content>
          <TitleErr>404</TitleErr>
          <TextErr>
            Sorry, you have reached a page that we could not find. It seems that
            you are lost among the numbers and letters of our virtual space.
            Perhaps this page went on vacation or decided to disappear into
            another dimension. We apologize for this inconvenience.
          </TextErr>
          <BtnToHome
            className="Button"
            text="Go Home"
            type="button"
            onClick={handleClick}
          />
        </Content>
      </SideContent>
    </Section>
  );
};

export default ErrorPage;
