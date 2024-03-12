import{u as s,N as h,a as c,j as e,s as l,b as x,c as g,l as u,r as o,O as j,_ as r,d as m,e as f,L as _,R as v,f as n,g as d,P as w,h as L}from"./index-c046307a.js";import{I as P}from"./index-5fa52316.js";const p=s(h)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: darkblue;
  font-size: 20px;

  &:hover {
    color: goldenrod;
  }
  &.active {
    color: goldenrod;
  }
`,R=s.nav`
  margin-right: auto;
`,y=s.svg`
  width: 126px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 152px;
    height: 17px;
  }
`,E=()=>{const{isLoggedIn:t}=c();return e.jsxs(R,{children:[e.jsx(p,{to:"/",children:e.jsx(y,{children:e.jsx("use",{href:`${l}#icon-logo`})})}),t&&e.jsx(p,{to:"/profile"})]})},b=s.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.33;
  background-color: transparent; /* Зробити фон прозорим */
  color: white; /* Задати білий колір тексту */
  cursor: pointer; /* Змінити курсор при наведенні на кнопку */
  transition: background-color 0.3s ease-out;
`;s.p`
  font-weight: 400;
  /* color: darkblue; */
  font-size: 20px;
`;const k=s.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,I=()=>{const t=x(),a=g(),i=()=>{t(u()),a("/")};return e.jsx(k,{children:e.jsxs(b,{type:"button",onClick:i,children:[e.jsx("span",{children:"Logout"}),e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${l}#icon-log-out`})})]})})},O=s.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 18px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 375px;
    /* margin: 0 auto; */
  }

  @media screen and (min-width: 768px) {
    padding: 32px 32px;
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    /* padding: 32px 96px; */
    width: 1440px;
  }
`,z=()=>{const{isLoggedIn:t}=c();return e.jsxs(O,{children:[e.jsx(E,{}),t?e.jsx(I,{}):null]})},N=s.div`
  padding: 0 16px;
`,T=()=>e.jsxs(N,{children:[e.jsx(z,{}),e.jsx(o.Suspense,{fallback:null,children:e.jsx(j,{})}),e.jsx(P,{position:"top-right",reverseOrder:!1})]}),A=o.lazy(()=>r(()=>import("./Home-1c02121b.js"),["assets/Home-1c02121b.js","assets/index-c046307a.js","assets/index-9342956e.css","assets/Home.styled-ed2bcfa1.js"])),D=o.lazy(()=>r(()=>import("./SignUp-6bf44639.js"),["assets/SignUp-6bf44639.js","assets/index-c046307a.js","assets/index-9342956e.css","assets/SignUp.styled-eecd276e.js","assets/index.esm-8d1bd3c9.js","assets/Home.styled-ed2bcfa1.js"])),V=o.lazy(()=>r(()=>import("./SignIn-760eaef8.js"),["assets/SignIn-760eaef8.js","assets/index-c046307a.js","assets/index-9342956e.css","assets/SignUp.styled-eecd276e.js","assets/Home.styled-ed2bcfa1.js"])),S=o.lazy(()=>r(()=>import("./ProfilePage-5af5ac1f.js"),["assets/ProfilePage-5af5ac1f.js","assets/index-c046307a.js","assets/index-9342956e.css","assets/TitlePage-3d670479.js","assets/index-48179d23.js","assets/index.esm-8d1bd3c9.js","assets/Datapicker-a3da7d32.js","assets/Datapicker-b861e09b.css"])),B=()=>{const t=x(),{isRefreshing:a}=c(),i=m();return o.useEffect(()=>{t(f()),window.localStorage.setItem("lastPath",i.pathname)},[t,i.pathname]),a?e.jsx(_,{}):e.jsx(e.Fragment,{children:e.jsx(v,{children:e.jsxs(n,{path:"/",element:e.jsx(T,{}),children:[e.jsx(n,{index:!0,element:e.jsx(A,{})}),e.jsx(n,{path:"/signup",element:e.jsx(d,{redirectTo:"/profile",component:e.jsx(D,{})})}),e.jsx(n,{path:"/signin",element:e.jsx(d,{redirectTo:"/profile",component:e.jsx(V,{})})}),e.jsx(n,{path:"/profile",element:e.jsx(w,{redirectTo:"/profile",component:e.jsx(S,{})})}),e.jsx(n,{path:"*",element:e.jsx(L,{to:"/error"})})]})})})};export{B as default};
