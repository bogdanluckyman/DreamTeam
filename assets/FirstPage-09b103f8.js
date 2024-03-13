import{u as n,a as l,b as x,j as e,s as u,l as d,c as p,r as o,O as g,_ as a,d as h,e as j,L as m,R as f,f as s,g as c,P as _,N as v}from"./index-d4fc82e4.js";import{H as P,N as R}from"./AppBar.styled-5fd53631.js";import{I as L}from"./index-0433343a.js";const E=n.button`
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
`,T=()=>e.jsxs(b,{children:[e.jsx(O,{}),e.jsx(o.Suspense,{fallback:null,children:e.jsx(g,{})}),e.jsx(L,{position:"top-right",reverseOrder:!1})]}),w=o.lazy(()=>a(()=>import("./Home-cbf94fc8.js"),["assets/Home-cbf94fc8.js","assets/index-d4fc82e4.js","assets/index-9342956e.css","assets/Home.styled-b304aafa.js"])),z=o.lazy(()=>a(()=>import("./SignUp-200550d4.js"),["assets/SignUp-200550d4.js","assets/index-d4fc82e4.js","assets/index-9342956e.css","assets/SignUp.styled-a06bbfad.js","assets/index.esm-03f4c3ea.js","assets/Home.styled-b304aafa.js","assets/AppBar.styled-5fd53631.js"])),A=o.lazy(()=>a(()=>import("./SignIn-5c013019.js"),["assets/SignIn-5c013019.js","assets/index-d4fc82e4.js","assets/index-9342956e.css","assets/SignUp.styled-a06bbfad.js","assets/Home.styled-b304aafa.js","assets/AppBar.styled-5fd53631.js"])),k=o.lazy(()=>a(()=>import("./ProfilePage-27e765ce.js"),["assets/ProfilePage-27e765ce.js","assets/index-d4fc82e4.js","assets/index-9342956e.css","assets/TitlePage-1e37b65c.js","assets/index.esm-03f4c3ea.js","assets/Datapicker-addad384.js","assets/Datapicker-b861e09b.css","assets/index-f539a845.js"])),H=()=>{const t=l(),{isRefreshing:i}=p(),r=h();return o.useEffect(()=>{t(j()),window.localStorage.setItem("lastPath",r.pathname)},[t,r.pathname]),i?e.jsx(m,{}):e.jsx(e.Fragment,{children:e.jsx(f,{children:e.jsxs(s,{path:"/",element:e.jsx(T,{}),children:[e.jsx(s,{index:!0,element:e.jsx(w,{})}),e.jsx(s,{path:"/signup",element:e.jsx(c,{redirectTo:"/profile",component:e.jsx(z,{})})}),e.jsx(s,{path:"/signin",element:e.jsx(c,{redirectTo:"/profile",component:e.jsx(A,{})})}),e.jsx(s,{path:"/profile",element:e.jsx(_,{redirectTo:"/profile",component:e.jsx(k,{})})}),e.jsx(s,{path:"*",element:e.jsx(v,{to:"/error"})})]})})})};export{H as default};
