import{u as t,N as l,j as e,s as d,a as c,b as g,l as h,c as p,r as i,O as u,I as j,_ as o,d as m,L as f,R as _,e as n,f as a,P as v,g as w}from"./index-ba41261f.js";const R=t(l)`
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
`,N=()=>e.jsxs(I,{children:[e.jsx(z,{}),e.jsx(i.Suspense,{fallback:null,children:e.jsx(u,{})}),e.jsx(j,{position:"top-right",reverseOrder:!1})]}),T=i.lazy(()=>o(()=>import("./Home-4b62132b.js"),["assets/Home-4b62132b.js","assets/index-ba41261f.js","assets/index-6812f6fa.css","assets/Home.styled-6c973397.js"])),A=i.lazy(()=>o(()=>import("./SignUp-4b131d7f.js"),["assets/SignUp-4b131d7f.js","assets/index-ba41261f.js","assets/index-6812f6fa.css","assets/SignUp.styled-2f569e6b.js","assets/index.esm-2a20c79a.js","assets/Home.styled-6c973397.js"])),D=i.lazy(()=>o(()=>import("./SignIn-7c69ed3b.js"),["assets/SignIn-7c69ed3b.js","assets/index-ba41261f.js","assets/index-6812f6fa.css","assets/SignUp.styled-2f569e6b.js","assets/Home.styled-6c973397.js"])),V=i.lazy(()=>o(()=>import("./ProfilePage-a9b7f1d1.js"),["assets/ProfilePage-a9b7f1d1.js","assets/index-ba41261f.js","assets/index-6812f6fa.css","assets/TitlePage-3376a416.js","assets/symbol-defs-cffd9f11.js","assets/index-24a24549.js","assets/index.esm-2a20c79a.js","assets/Datapicker-0f898eb4.js","assets/Datapicker-b861e09b.css"])),$=()=>{const s=c(),{isRefreshing:r}=p();return i.useEffect(()=>{s(m())},[s]),r?e.jsx(f,{children:"Refreshing..."}):e.jsx(e.Fragment,{children:e.jsx(_,{children:e.jsxs(n,{path:"/",element:e.jsx(N,{}),children:[e.jsx(n,{index:!0,element:e.jsx(T,{})}),e.jsx(n,{path:"/signup",element:e.jsx(a,{redirectTo:"/profile",component:e.jsx(A,{})})}),e.jsx(n,{path:"/signin",element:e.jsx(a,{redirectTo:"/profile",component:e.jsx(D,{})})}),e.jsx(n,{path:"/profile",element:e.jsx(v,{redirectTo:"/profile",component:e.jsx(V,{})})}),e.jsx(n,{path:"*",element:e.jsx(w,{to:"/error"})})]})})})};export{$ as default};
