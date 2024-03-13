import{u as n,a as l,b as x,j as e,s as u,l as d,c as p,r as o,O as g,_ as a,d as h,e as j,L as m,R as f,f as s,g as c,P as _,N as v}from"./index-867b2692.js";import{H as P,N as R}from"./AppBar.styled-9010ddba.js";import{I as L}from"./index-159e63ea.js";const E=n.button`
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
`,T=()=>e.jsxs(b,{children:[e.jsx(O,{}),e.jsx(o.Suspense,{fallback:null,children:e.jsx(g,{})}),e.jsx(L,{position:"top-right",reverseOrder:!1})]}),w=o.lazy(()=>a(()=>import("./Home-8dd40631.js"),["assets/Home-8dd40631.js","assets/index-867b2692.js","assets/index-9342956e.css","assets/Home.styled-fb23e639.js"])),z=o.lazy(()=>a(()=>import("./SignUp-3959f5db.js"),["assets/SignUp-3959f5db.js","assets/index-867b2692.js","assets/index-9342956e.css","assets/SignUp.styled-b533119e.js","assets/index.esm-50fe8e5f.js","assets/Home.styled-fb23e639.js","assets/AppBar.styled-9010ddba.js"])),A=o.lazy(()=>a(()=>import("./SignIn-8e1d4a8d.js"),["assets/SignIn-8e1d4a8d.js","assets/index-867b2692.js","assets/index-9342956e.css","assets/SignUp.styled-b533119e.js","assets/Home.styled-fb23e639.js","assets/AppBar.styled-9010ddba.js"])),k=o.lazy(()=>a(()=>import("./ProfilePage-9c0a981a.js"),["assets/ProfilePage-9c0a981a.js","assets/index-867b2692.js","assets/index-9342956e.css","assets/TitlePage-4189ee96.js","assets/index.esm-50fe8e5f.js","assets/Datapicker-a70863c2.js","assets/Datapicker-b861e09b.css","assets/index-d3105d39.js"])),H=()=>{const t=l(),{isRefreshing:i}=p(),r=h();return o.useEffect(()=>{t(j()),window.localStorage.setItem("lastPath",r.pathname)},[t,r.pathname]),i?e.jsx(m,{}):e.jsx(e.Fragment,{children:e.jsx(f,{children:e.jsxs(s,{path:"/",element:e.jsx(T,{}),children:[e.jsx(s,{index:!0,element:e.jsx(w,{})}),e.jsx(s,{path:"/signup",element:e.jsx(c,{redirectTo:"/profile",component:e.jsx(z,{})})}),e.jsx(s,{path:"/signin",element:e.jsx(c,{redirectTo:"/profile",component:e.jsx(A,{})})}),e.jsx(s,{path:"/profile",element:e.jsx(_,{redirectTo:"/profile",component:e.jsx(k,{})})}),e.jsx(s,{path:"*",element:e.jsx(v,{to:"/error"})})]})})})};export{H as default};
