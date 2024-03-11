import{u as e,i as w,a7 as l,d as h,j as i,b as u,c as f,p as x,a8 as b,a9 as v,r as c,L as m,O as j,aa as k}from"./index-97afe6b1.js";import{T as y}from"./TitlePage-928bad2d.js";import{n as E}from"./index-57e3ddad.js";const F=e.ul`
  display: flex;
  margin-top: 28px;
  gap: 28px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`,C=e(w)`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  word-wrap: break-word;

  color: ${t=>t.isactive==="true"?"#EFEDE8":""};
  position: relative;

  &:after {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: ${t=>t.isactive==="true"?"4px":"0"};
    background-color: #e6533c;
    border-radius: 2px;
    content: '';
    transition: height 0.3s;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }

  @media (max-width: 374px) {
    font-size: 18px;
  }
`,z=()=>{const t=["Body parts","Muscles","Equipment"],{filter:r}=l(),d=h(),o=r;return i.jsx(i.Fragment,{children:i.jsx(F,{children:t.map(a=>i.jsx("li",{children:i.jsx(C,{to:`/exercises/${a}`,state:{from:d},isactive:a===o?"true":"false",children:a})},a))})})},L="/DreamTeam/assets/sprite-49e385ab.svg",D="/DreamTeam/assets/trainingGym-1-78b576d3.jpg",$="/DreamTeam/assets/trainingGym-1@2x-7f8d3593.jpg",B=e.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
  }

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 96px;
  }
`;e.div`
  margin-left: 0;

  background-color: #040404;
  color: #efede8;
  min-height: 100vh;
  padding-top: 72px;
`;e.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    display: block;
    max-width: 335px;
    margin: 0 auto;
  }
  @media (min-width: 1440px) {
    width: 1248px;
    margin: 0 auto;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    width: 704px;
    margin: 0 auto;
  }
`;e.h2`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 24px;

  @media (min-width: 768px) and (max-width: 1439px) {
    font-size: 32px;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
  }
`;e.div`
  display: flex;

  @media (max-width: 767px) {
    margin-top: 10px;
    margin-left: -8px;
  }
`;e.div`
  margin: 0 auto;
  position: relative;
  padding-top: 64px;

  @media (max-width: 767px) {
    padding-top: 40px;
  }
`;e.li`
  width: 237px;
  height: 206px;
  background-color: gray;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  position: relative;

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 224px;
  }
  @media (min-width: 320px) and (max-width: 374px) {
    width: 90%;
  }
  @media (min-width: 375px) and (max-width: 767px) {
    width: 335px;
  }
`;e.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 1440px) {
    max-width: calc(237px * 5 + 20px * 5);
    margin: 0 auto;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    max-width: calc(237px * 3 + 20px * 3);
    margin: 0 auto;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    max-width: calc(335px * 1 + 20px * 1);
    margin: 0 auto;
  }
`;e.button`
  background-color: ${t=>t.isActive?"#EFEDE8":"transparent"};
  color: ${t=>t.isActive?"#EFEDE8":"white"};
  border: none;
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:not(.active) {
    opacity: 0.4;
  }

  &.active::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: #ef8964;
    animation: slideIn 4s ease forwards;
    border-radius: 2px;
  }
`;e.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;e.button`
  background-color: #efede8;
  padding: 5px;
  margin: 0 5px;
  border-radius: 50%;
  border: 2px solid black;
  width: 25px;
  height: 25px;
  opacity: 10%;

  &:hover,
  &:focus {
    background-color: ##e6533c;
    opacity: 100%;
  }
`;const T=e.div`
  /* border: 2px solid red;
  position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 20px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-direction: row;

    margin-top: 78px;
    margin-bottom: 70px;
  }

  @media (max-width: 374px) {
  }
`;e.div`
  text-align: center;
`;e.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;const I=e.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  /* border: 2px solid red; */
`,P=e.a`
  position: absolute;
  display: flex;
  align-items: center;
  top: 6px;
  gap: 8px;
  color: #FFFFFF
  font-size: 10px;
  font-weight: 400;
  line-height: 1.167;
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    top: 32px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.167;
  }

  > svg {
    stroke: #FFFFFF
    width: 10px;
    height: 10px;
    transition: stroke 0.3s ease;
    @media (min-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }

  &:hover {
    color: #E6533C;
    cursor: pointer;

    > svg {
      stroke: #E6533C;
      width: 16px;
      height: 16px;
    }
  }
`,A=e.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
  @media (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${D});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${$});
  }
`,S=()=>{const t=u(),r=f(),d=x(b),o=x(v),a=h(),{filter:n,filterList:p}=l();c.useEffect(()=>{(async()=>{n===void 0?E("We are still awating for data"):t(k({filter:n}))})()},[t,n]);function g(s){return s.charAt(0).toUpperCase()+s.slice(1)}return i.jsx(A,{children:i.jsx(B,{children:i.jsx(I,{children:o?i.jsx(m,{}):i.jsxs("div",{children:[n!==void 0&&a.pathname.endsWith(n.replace(" ","%20"))?null:i.jsxs(P,{onClick:()=>r(-1),children:[i.jsx("svg",{style:{fill:"none"},children:i.jsx("use",{href:L+"#icon-arrow-left"})}),"Back"," "]}),i.jsxs(T,{children:[i.jsx(y,{title:p?g(p.split(" ")[0]):"Exercises"}),i.jsx(z,{})]}),o&&!d&&i.jsx(m,{}),i.jsx(i.Fragment,{children:i.jsx(c.Suspense,{children:i.jsx(j,{})})})]})})})})};export{S as default};
