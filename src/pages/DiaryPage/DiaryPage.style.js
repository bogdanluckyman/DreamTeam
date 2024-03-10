import styled from "styled-components";

export const DiaryTitleWrap = styled.div `
    width: 100%;
    margin-top: 45px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
        margin-top: 72px;
        margin-bottom: 32px;
    }
`

export const DiaryActWrap = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media screen and (min-width: 768px) {
        gap: 32px;
    }
`

export const DiaryContentWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 64px;

    @media screen and ( min-width: 1440px) {
        flex-direction: row;
        gap: 32px;
    }
`