import{u as t,a5 as e}from"./index-8279657f.js";const o=t.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (min-width: 375px) {
    width: 335px;
  }
`,n=t.input`
  display: flex;
  padding: 14px;
  position: relative;
  margin-bottom: 20px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  outline: rgba(239, 237, 232, 0.3) solid 1px;
  background-color: transparent;
  color: #efede8;

  &::placeholder {
    color: rgba(239, 237, 232, 0.6);
  }

  &:hover,
  &:focus {
    outline: 1px solid #e6533c;
  }
  &.default {
    outline: 1px solid rgba(239, 237, 232, 0.3);
  }

  &.success {
    border-color: #3cbf61; /* Зелений колір для успішного введення */
  }

  &.error {
    border-color: #f80505; /* Червоний колір для помилки */
  }
`,r=t.button`
  @media screen and (min-width: 768px) {
    width: 190px;
    height: 56px;
    letter-spacing: 0px;
    padding: 16px 60px;
    font-size: 20px;
    line-height: 1.2;
    border-radius: 12px;
    margin-top: 64px;
  }
  width: 136px;
  height: 42px;
  box-sizing: border-box;
  max-width: 196px;
  margin-bottom: 12px;
  white-space: nowrap;
  outline: none;
  letter-spacing: 0.04em;
  cursor: pointer;
  display: flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  font-family: inherit;
  background-color: rgb(230, 83, 60);
  color: white;

  font-size: 12px;
  font-weight: 500;
  line-height: calc(1.125);
  border: 1px solid rgba(239, 237, 232, 0.3);
  transition: background 0.3s ease-out 0s;
`,p=t.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (min-width: 375px) {
    width: 335px;
  }
`,a=t.input`
  display: flex;
  padding: 14px;
  position: relative;
  /* margin-bottom: 20px; */
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  outline: rgba(239, 237, 232, 0.3) solid 1px;
  background-color: transparent;
  color: #efede8;

  &::placeholder {
    color: rgba(239, 237, 232, 0.6);
  }

  &:hover,
  &:focus {
    outline: 1px solid #e6533c;
  }

  &.default {
    outline: 1px solid rgba(239, 237, 232, 0.3);
  }

  &.success {
    border-color: #3cbf61; /* Зелений колір для успішного введення */
  }

  &.error {
    border-color: #f80505; /* Червоний колір для помилки */
  }
`,s=t.p`
  color: rgba(239, 237, 232, 0.6);

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,d=t(e)`
  color: #efede8;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-decoration-line: underline;
`,x=t.button`
  /* position: absolute; */
  top: 50%; /* Розміщуємо по середині вертикалі */
  right: 8px; /* Відступ від правого краю інпута */
  transform: translateY(-180%);
  margin-left: auto;
  width: 25px;
  height: 25px;
  cursor: pointer;
  z-index: 1; /* Розміщуємо поверх інпута */
  background-color: transparent;
  border: none;

  svg {
    width: 100%;
    height: 100%;
    stroke: #efede8;
  }

  @media screen and (min-width: 768px) {
    width: 53px;
    height: 53px;
    right: 30px;

    width: 30px;
    height: 30px;
    right: 40px;
  }
`,g=t.svg`
  width: 25px;
  height: 25px;
  /* margin-top: 6px; */
  margin-right: 5px;
  stroke: #efede8;
`,l=t.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: left;
  height: 14px;
  font-size: 12px;
  color: #3cbf61;
  padding-left: 12px;
  font-size: 12px;
  font-weight: 400;
  padding-top: 5px;
`,c=t.svg`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  stroke: #3cbf61;
`,h=t.div`
  display: flex;
  width: 100%;
  padding-left: 12px;

  align-items: center;
  justify-content: left;
  height: 14px;
  color: rgba(248, 5, 5, 0.973);
  font-size: 12px;
  font-weight: 400;
`,f=t.svg`
  width: 16px;
  height: 16px;
  margin-right: 10px;

  vertical-align: middle;
`,m=t.div`
  margin-top: 152px;
  /* margin-left: 96px; */
`,b=t.h1`
  font-size: 32px;
  line-height: 1.37;
  margin-bottom: 16px;
  color: white;
`,u=t.p`
  width: 496px;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 32px;
  color: rgba(239, 237, 232, 0.3);
`;export{x as B,h as E,p as F,l as G,a as I,c as S,f as a,g as b,r as c,s as d,d as e,m as f,b as g,u as h,o as i,n as j};
