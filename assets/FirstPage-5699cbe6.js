import{u as t,N as x,j as e,s as d,a as p,b as h,l as g,c as l,r as o,O as u,_ as r,d as j,e as m,L as f,R as _,f as n,g as c,P as v,h as w}from"./index-3f20bd4a.js";import{I as L}from"./index-ced1cb41.js";const P=t(x)`
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
`,R=t.nav`
  margin-right: auto;
`,y=t.svg`
  width: 126px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 152px;
    height: 17px;
  }
`,E=()=>e.jsx(R,{children:e.jsx(P,{to:"/",children:e.jsx(y,{children:e.jsx("use",{href:`${d}#icon-logo`})})})}),b=t.button`
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
`;t.p`
  font-weight: 400;
  /* color: darkblue; */
  font-size: 20px;
`;const k=t.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,I=()=>{const s=p(),a=h(),i=()=>{s(g()),a("/")};return e.jsx(k,{children:e.jsxs(b,{type:"button",onClick:i,children:[e.jsx("span",{children:"Logout"}),e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${d}#icon-log-out`})})]})})},O=t.header`
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
`,z=()=>{const{isLoggedIn:s}=l();return e.jsxs(O,{children:[e.jsx(E,{}),s?e.jsx(I,{}):null]})},N=t.div`
  padding: 0 16px;
`,T=()=>e.jsxs(N,{children:[e.jsx(z,{}),e.jsx(o.Suspense,{fallback:null,children:e.jsx(u,{})}),e.jsx(L,{position:"top-right",reverseOrder:!1})]}),A=o.lazy(()=>r(()=>import("./Home-fa5a58ef.js"),["assets/Home-fa5a58ef.js","assets/index-3f20bd4a.js","assets/index-6812f6fa.css","assets/Home.styled-f9d31a46.js"])),D=o.lazy(()=>r(()=>import("./SignUp-67cd301e.js"),["assets/SignUp-67cd301e.js","assets/index-3f20bd4a.js","assets/index-6812f6fa.css","assets/SignUp.styled-f3982836.js","assets/index.esm-3207c961.js","assets/Home.styled-f9d31a46.js"])),V=o.lazy(()=>r(()=>import("./SignIn-eaf4451d.js"),["assets/SignIn-eaf4451d.js","assets/index-3f20bd4a.js","assets/index-6812f6fa.css","assets/SignUp.styled-f3982836.js","assets/Home.styled-f9d31a46.js"])),S=o.lazy(()=>r(()=>import("./ProfilePage-6e2e1921.js"),["assets/ProfilePage-6e2e1921.js","assets/index-3f20bd4a.js","assets/index-6812f6fa.css","assets/TitlePage-209b19bb.js","assets/index-9a5bfe90.js","assets/index.esm-3207c961.js","assets/Datapicker-eb51d105.js","assets/Datapicker-b861e09b.css"])),B=()=>{const s=p(),{isRefreshing:a}=l(),i=j();return o.useEffect(()=>{s(m()),window.localStorage.setItem("lastPath",i.pathname)},[s,i.pathname]),a?e.jsx(f,{}):e.jsx(e.Fragment,{children:e.jsx(_,{children:e.jsxs(n,{path:"/",element:e.jsx(T,{}),children:[e.jsx(n,{index:!0,element:e.jsx(A,{})}),e.jsx(n,{path:"/signup",element:e.jsx(c,{redirectTo:"/profile",component:e.jsx(D,{})})}),e.jsx(n,{path:"/signin",element:e.jsx(c,{redirectTo:"/profile",component:e.jsx(V,{})})}),e.jsx(n,{path:"/profile",element:e.jsx(v,{redirectTo:"/profile",component:e.jsx(S,{})})}),e.jsx(n,{path:"*",element:e.jsx(w,{to:"/error"})})]})})})};export{B as default};
