import{b as x,r as u,j as s,s as e,l as j}from"./index-6d6d44cc.js";import{i as p,j as r,B as o,b as l,c as m,d as g,e as f,f as S,g as b,h as y}from"./SignUp.styled-f80ae73b.js";import{C as I,R as T,B as C,V as w,I as V,b as v,c as R,d as P,e as k,f as B,g as $,h as D,i as E}from"./Home.styled-10f9b2fb.js";const F=()=>{const c=x(),[n,d]=u.useState(!1),t=()=>{d(!n)},h=a=>{a.preventDefault();const i=a.currentTarget;c(j({email:i.elements.email.value,password:i.elements.password.value})),i.reset()};return s.jsxs(p,{onSubmit:h,autoComplete:"off",children:[s.jsx(r,{type:"email",name:"email",placeholder:"Email"}),s.jsx(r,{type:n?"text":"password",name:"password",placeholder:"Password"}),n?s.jsx(o,{type:"button",onClick:t,children:s.jsx(l,{children:s.jsx("use",{href:`${e}#icon-eye`})})}):s.jsx(o,{type:"button",onClick:t,children:s.jsx(l,{children:s.jsx("use",{href:`${e}#icon-eye-off`})})}),s.jsx(m,{type:"submit",children:"Sign In"}),s.jsxs(g,{children:["Don’t have an account?",s.jsx(f,{to:"/signup",children:" Sign Up"})]})]})};function W(){return s.jsxs(I,{children:[s.jsxs(S,{children:[s.jsx(b,{children:"Sign In"}),s.jsx(y,{children:"Welcome! Please enter your credentials to login to the platform:"}),s.jsx(F,{})]}),s.jsx(T,{children:s.jsxs(C,{children:[s.jsxs(w,{children:[s.jsx(V,{children:s.jsx(v,{children:s.jsx("use",{href:`${e}#icon-Polygon-1`})})}),s.jsxs(R,{children:["350+ ",s.jsx(P,{children:"Video tutorial"})]})]}),s.jsxs(k,{children:[s.jsx(B,{children:s.jsx($,{children:s.jsx("use",{href:`${e}#icon-running-stick-figure`})})}),s.jsxs(D,{children:["500 ",s.jsx(E,{children:"cal"})]})]})]})})]})}export{W as default};
