import{u as t,N as l,j as e,s as d,a as c,b as g,l as h,c as p,r as i,O as u,_ as o,d as j,L as m,R as f,e as n,f as a,P as _,g as v}from"./index-4de89ac5.js";import{I as w}from"./index-c99446aa.js";const R=t(l)`
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
`,L=t.nav`
  margin-right: auto;
`,P=t.svg`
  width: 126px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 152px;
    height: 17px;
  }
`,y=()=>e.jsx(L,{children:e.jsx(R,{to:"/",children:e.jsx(P,{children:e.jsx("use",{href:`${d}#icon-logo`})})})}),E=t.button`
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
`;const b=t.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,k=()=>{const s=c(),r=g(),x=()=>{s(h()),r("/")};return e.jsx(b,{children:e.jsxs(E,{type:"button",onClick:x,children:[e.jsx("span",{children:"Logout"}),e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${d}#icon-log-out`})})]})})},O=t.header`
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
`,z=()=>{const{isLoggedIn:s}=p();return e.jsxs(O,{children:[e.jsx(y,{}),s?e.jsx(k,{}):null]})},I=t.div`
  padding: 0 16px;
`,N=()=>e.jsxs(I,{children:[e.jsx(z,{}),e.jsx(i.Suspense,{fallback:null,children:e.jsx(u,{})}),e.jsx(w,{position:"top-right",reverseOrder:!1})]}),T=i.lazy(()=>o(()=>import("./Home-aa870b90.js"),["assets/Home-aa870b90.js","assets/index-4de89ac5.js","assets/index-6812f6fa.css","assets/Home.styled-2ad0308b.js"])),A=i.lazy(()=>o(()=>import("./SignUp-635acf21.js"),["assets/SignUp-635acf21.js","assets/index-4de89ac5.js","assets/index-6812f6fa.css","assets/SignUp.styled-45ebe108.js","assets/index.esm-e74ce186.js","assets/Home.styled-2ad0308b.js"])),D=i.lazy(()=>o(()=>import("./SignIn-74754cb7.js"),["assets/SignIn-74754cb7.js","assets/index-4de89ac5.js","assets/index-6812f6fa.css","assets/SignUp.styled-45ebe108.js","assets/Home.styled-2ad0308b.js"])),V=i.lazy(()=>o(()=>import("./ProfilePage-3a8e30a2.js"),["assets/ProfilePage-3a8e30a2.js","assets/index-4de89ac5.js","assets/index-6812f6fa.css","assets/TitlePage-8e8df7cf.js","assets/symbol-defs-69a37fef.js","assets/index-98f472f6.js","assets/index.esm-e74ce186.js","assets/Datapicker-3e6f84aa.js","assets/Datapicker-b861e09b.css"])),B=()=>{const s=c(),{isRefreshing:r}=p();return i.useEffect(()=>{s(j())},[s]),r?e.jsx(m,{children:"Refreshing..."}):e.jsx(e.Fragment,{children:e.jsx(f,{children:e.jsxs(n,{path:"/",element:e.jsx(N,{}),children:[e.jsx(n,{index:!0,element:e.jsx(T,{})}),e.jsx(n,{path:"/signup",element:e.jsx(a,{redirectTo:"/profile",component:e.jsx(A,{})})}),e.jsx(n,{path:"/signin",element:e.jsx(a,{redirectTo:"/profile",component:e.jsx(D,{})})}),e.jsx(n,{path:"/profile",element:e.jsx(_,{redirectTo:"/profile",component:e.jsx(V,{})})}),e.jsx(n,{path:"*",element:e.jsx(v,{to:"/error"})})]})})})};export{B as default};
