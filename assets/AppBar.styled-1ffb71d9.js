import{u as n,q as t,c as a,j as i,s as p}from"./index-b32af529.js";const d=n(t)`
  display: inline-block;
  text-decoration: none;
  /* padding: 12px; */
  font-weight: 700;

  font-size: 20px;

  &:hover {
    color: goldenrod;
  }
  &.active {
    color: goldenrod;
  }
`,x=n.nav`
  /* max-width: 375px; */
  /* margin: 0 auto; */
  padding: 25px 18px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 32px 96px;
  }
`,o=n.svg`
  width: 126px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 152px;
    height: 17px;
  }
`,r=()=>{const{isLoggedIn:e}=a();return i.jsxs(x,{children:[i.jsx(d,{to:"/",children:i.jsx(o,{children:i.jsx("use",{href:`${p}#icon-logo`})})}),e&&i.jsx(d,{to:"/profile"})]})},h=n.header`
  /* width: 100%; */
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  /* padding: 25px 18px; */

  @media screen and (min-width: 375px) {
    width: 375px;
    /* margin: 0 auto; */
  }

  @media screen and (min-width: 768px) {
    /* padding-left: 32px; */
    /* padding-top: 32px; */
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    /* padding: 32px 96px; */
    width: 1440px;
  }
`;export{h as H,r as N};
