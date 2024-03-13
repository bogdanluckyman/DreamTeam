import{u as n,a as l,b as x,j as e,s as u,l as d,c as p,r as o,O as g,_ as a,d as h,e as j,L as m,R as f,f as s,g as c,P as _,N as v}from"./index-7d8569f1.js";import{H as P,N as R}from"./AppBar.styled-04fa1092.js";import{I as L}from"./index-57b538b5.js";const E=n.button`
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
`;n.p`
  font-weight: 400;
  /* color: darkblue; */
  font-size: 20px;
`;const y=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,I=()=>{const t=l(),i=x(),r=()=>{t(d()),i("/")};return e.jsx(y,{children:e.jsxs(E,{type:"button",onClick:r,children:[e.jsx("span",{children:"Logout"}),e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${u}#icon-log-out`})})]})})},O=()=>{const{isLoggedIn:t}=p();return e.jsxs(P,{children:[e.jsx(R,{}),t?e.jsx(I,{}):null]})},b=n.div`
  padding: 0 16px;
`,T=()=>e.jsxs(b,{children:[e.jsx(O,{}),e.jsx(o.Suspense,{fallback:null,children:e.jsx(g,{})}),e.jsx(L,{position:"top-right",reverseOrder:!1})]}),w=o.lazy(()=>a(()=>import("./Home-b30aa2e0.js"),["assets/Home-b30aa2e0.js","assets/index-7d8569f1.js","assets/index-9342956e.css","assets/Home.styled-46aaded4.js"])),z=o.lazy(()=>a(()=>import("./SignUp-961e558f.js"),["assets/SignUp-961e558f.js","assets/index-7d8569f1.js","assets/index-9342956e.css","assets/SignUp.styled-2c75d7af.js","assets/index.esm-96879639.js","assets/Home.styled-46aaded4.js","assets/AppBar.styled-04fa1092.js"])),A=o.lazy(()=>a(()=>import("./SignIn-3af4d99e.js"),["assets/SignIn-3af4d99e.js","assets/index-7d8569f1.js","assets/index-9342956e.css","assets/SignUp.styled-2c75d7af.js","assets/Home.styled-46aaded4.js","assets/AppBar.styled-04fa1092.js"])),k=o.lazy(()=>a(()=>import("./ProfilePage-968d4a11.js"),["assets/ProfilePage-968d4a11.js","assets/index-7d8569f1.js","assets/index-9342956e.css","assets/TitlePage-9b80d8ef.js","assets/index.esm-96879639.js","assets/Datapicker-87925373.js","assets/Datapicker-b861e09b.css","assets/index-9a277860.js"])),H=()=>{const t=l(),{isRefreshing:i}=p(),r=h();return o.useEffect(()=>{t(j()),window.localStorage.setItem("lastPath",r.pathname)},[t,r.pathname]),i?e.jsx(m,{}):e.jsx(e.Fragment,{children:e.jsx(f,{children:e.jsxs(s,{path:"/",element:e.jsx(T,{}),children:[e.jsx(s,{index:!0,element:e.jsx(w,{})}),e.jsx(s,{path:"/signup",element:e.jsx(c,{redirectTo:"/profile",component:e.jsx(z,{})})}),e.jsx(s,{path:"/signin",element:e.jsx(c,{redirectTo:"/profile",component:e.jsx(A,{})})}),e.jsx(s,{path:"/profile",element:e.jsx(_,{redirectTo:"/profile",component:e.jsx(k,{})})}),e.jsx(s,{path:"*",element:e.jsx(v,{to:"/error"})})]})})})};export{H as default};
