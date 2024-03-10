import styled from "styled-components";
import {
    colors
} from "../../styles/colors";


export const SectionOfDiary = styled.section `
    min-width: 335px;
    display: flex;
    flex-direction: column;
    min-height: 335px;
    max-height: ${(props) => props.height || '824px'};
    padding: 16px 8px;
    gap: 22px;
    border: 1px solid #EFEDE8;
    border-radius: 12px;
    color: ${colors.white};

    @media screen and (min-width: 768px) {
    min-width: 704px;
    min-height: 236px;
    height: 236px;
    gap: 16px;
  }


  @media screen and (min-width: 1440px) {
    width: 824px;
  }
`


export const SectionWrapper = styled.div `
  width: 100%;
  display: flex;                
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    margin-right: 8px;
  }

`

export const SectionTitle = styled.h3 `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
    color: rgba(239, 237, 232, 0.5);
    font-weight: 400;
    line-height: 1.29;
    font-size: 14px;
    margin: 0;
`

export const NavigationLink = styled.button `
    display: flex;
    align-items:center;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    color: ${colors.orange};
    background-color: transparent;
    border: none;
    &hover,
    &focus {
        color: ${colors.orangeSecond};
        svg {
            stroke: ${colors.orangeSecond};
        }
    }

    @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
;
`
export const SvgForRoute = styled.svg `
    width: 16px;
    height: 16px;
    fill: none;
    stroke: ${colors.orange};
    display: inline-block;
`

export const DiaryTabletTitle = styled.ul `
    display: flex;
    gap: 8px;
    line-height: 1.5;
    color: ${colors.orange};

    @media screen and (min-width: 1440px) {
    margin-right: 16px;
    margin-left: 16px;
  }
`

export const DiaryTabletSupTitle = styled.li `
    display: inline-block;
    font-size: 12px;
    width: ${(props) => props.width || '100%'};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export const List = styled.ul `
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-right: 8px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    gap: 8px;
    padding-right: 18px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 16px;
    padding-right: 0px;
  }
`;

export const EmptyList = styled.p`
  margin: auto;
  display: block;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.28;
`

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
  }
  `

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-basis: calc((100% - 2 * 16px) / 3);

  @media screen and (min-width: 768px) {
    flex-basis: auto;
  }
`

export const CardSupTitle = styled.h4`
  max-width: ${(props) => props.size || 'inherit'};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  color: ${colors.orangeSecond};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Info = styled.div`
display: ${(props) => props.display || 'inline-block'};
gap: 8px;
width: ${(props) => props.width || '100%'};
max-width: ${(props) => props.$maxwidth || '100%'};
height: 38px;
padding: 10px 14px;
border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.3);
font-size: 14px;
line-height: 1.29;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
align-items: center;

@media screen and (min-width: 768px) {
  max-width: none;
  height: 40px;
  padding: 8px 14px;
  line-height: 1.5;
  font-size: 16px;
}
`;


export const DescriptionBox = styled.div`
  position: relative;
  display: flex;
  padding-right: 28px;
  gap: 16px;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding-right: 32px;
    gap: 8px;
  }
`;

export const RemoveButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 9px;
  padding: 0;
  line-height: 0;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    bottom: 10px;
  }
`;


export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  fill: none;
  stroke: ${colors.orangeSecond};
  display: inline-block;
  transition: stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    stroke: ${colors.orange};
  }

`

export const Circle = styled.div`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background: ${(props) => (props.color === 'false' ? '#419B09' : '#E9101D')};
`;