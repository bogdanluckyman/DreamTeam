import{u as t,n as p,j as e,b as l,y as h}from"./index-703a8844.js";import{P as o}from"./index-d4f08516.js";const r="/DreamTeam/assets/hero-background-mobile-1x-13cc494e.jpg",x="/DreamTeam/assets/hero-background-mobile-2x-3da7be96.jpg",a="/DreamTeam/assets/hero-background-tablet-1x-0b19296c.jpg",d="/DreamTeam/assets/hero-background-1x-bba9b0f3.jpg",m="/DreamTeam/assets/hero-background-2x-6f32b58d.jpg",b=t.div`
  background:
    linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    lightgray 50% / cover no-repeat;

  position: relative;
  background-image: url(${r});
  background-image: -webkit-image-set(
    url(${r}) ; 1x,
    url(${x}) ; 2x
  );
  color: #efede8;
  background-repeat: no-repeat;
  background-color: var(--black-color);
  background-position: bottom 0 right -40%;
  margin: 0 auto;
  position: relative;
  height: 100vh;
  margin: 0 auto;
  width: 100%;
  //background-size: contain;

  margin-rigth: 50px;

  @media screen and (min-width: 375px) {
    width: 375px;
    margin-rigth: 450px;
  }

  @media screen and (min-width: 768px) {
    background:
      linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      lightgray 50% / cover no-repeat;

    background-repeat: no-repeat;
    width: 768px;
    height: 1005px;
    background-color: rgba(0, 0, 0, 1);

    background-image: url(${a});
    background-image: -webkit-image-set(
      url(${a}) ; 1x,
      url(${a}) ; 2x
    );
    background-position: bottom 0 right 0%;
  }

  @media screen and (min-width: 1440px) {
    background:
      linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%),
      lightgray 50% / cover no-repeat;
    width: 1440px;
    height: 800px;

    background-repeat: no-repeat;
    background-position: bottom 0 right 0%;

    background-color: rgba(0, 0, 0, 1);

    background-image: url(${d});
    background-image: -webkit-image-set(url(${d}) ; 1x, url(${m}) ; 2x);
  }
`,u=t.div`
  background: var(--orange-color);
  max-width: calc(64%);
  float: left;
  height: 100%;
  box-sizing: border-box;
  padding: 24px 20px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    max-width: none;
    width: 420px;
    padding: 32px 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 669px;
    padding: 32px 96px;
  }
`,w=t.div`
  margin-bottom: auto;
`,f=t.h1`

color: var(--white-color)
font-family: Roboto;
  font-size: 66px;
  line-height: 1;
  letter-spacing: 0.66px;
  margin: 0;
font-style: normal;
font-weight: 500;



  @media screen and (min-width: 768px) {
    font-size: 160px;
    line-height: 0.93;
    letter-spacing: 1.6px;
    
  }
`,k=t.p`
color: var(--white-color)
font-family: Roboto;
  font-size: 14px;
  margin-top: 14px;
  font-style: normal;
  font-weight: 400;

  
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    width: 356px;
    font-size: 16px;
    margin-top: 28px;
    line-height: calc(24 / 16);
  }

  @media screen and (min-width: 1440px) {
    width: 477px;
  }
`,v=t(p)`
color: var(--white-color)
  position: absolute;
  left: 32px;
  top: 32px;
  display: flex;
    gap: 8px;

   @media screen and (min-width: 1440px) {
  left: 96px;
  }
`,y=t.svg`
  width: 40px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 44pxpx;
    height: 17px;
  }
`,j=t.button`
  margin-top: 28px;
  display: flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  font-family: inherit;
  background-color: #e6533c;
  color: white;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  line-height: calc(18 / 16);
  border: 1px solid rgba(239, 237, 232, 0.3);
  transition: background 0.3s ease-out;

  &:hover {
    color: white;
    background: #ef8964;
  }

  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: 1.2;
  }
`,s=({className:i="",text:n,type:g,onClick:c})=>e.jsx(j,{className:i,type:g,onClick:c,children:n});s.propTypes={text:o.string.isRequired,type:o.string,className:o.string,onClick:o.func};const $=()=>{const i=l(),n=()=>{i("/")};return e.jsx(b,{children:e.jsxs(u,{children:[e.jsxs(v,{to:"/",children:[e.jsx(y,{children:e.jsx("use",{href:`${h}#icon-logo-white`})}),"PowerPulse"]}),e.jsxs(w,{children:[e.jsx(f,{children:"404"}),e.jsx(k,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),e.jsx(s,{className:"Button",text:"Go Home",type:"button",onClick:n})]})]})})};export{$ as default};
