import{a as h,r as j,j as s,s as e,ad as u}from"./index-13970d38.js";import{k as m,l as p,m as t,n as g,B as o,d as l,e as f,f as S,g as C,h as I,i as T,j as y}from"./SignUp.styled-de7b36ab.js";import{C as b,R as v,B as w,V,I as R,S as k,a as B,b as P,c as $,d as F,e as D,T as E,f as L}from"./Home.styled-ad2c210b.js";import{H as U,N as H}from"./AppBar.styled-81e18d39.js";const N=()=>{const c=h(),[n,d]=j.useState(!1),a=()=>{d(!n)},x=r=>{r.preventDefault();const i=r.currentTarget;c(u({email:i.elements.email.value,password:i.elements.password.value})),i.reset()};return s.jsxs(m,{onSubmit:x,autoComplete:"off",children:[s.jsxs(p,{children:[s.jsx(t,{type:"email",name:"email",placeholder:"Email"}),s.jsxs(g,{children:[s.jsx(t,{type:n?"text":"password",name:"password",placeholder:"Password"}),n?s.jsx(o,{type:"button",onClick:a,children:s.jsx(l,{children:s.jsx("use",{href:`${e}#icon-eye`})})}):s.jsx(o,{type:"button",onClick:a,children:s.jsx(l,{children:s.jsx("use",{href:`${e}#icon-eye-off`})})})]})]}),s.jsx(f,{type:"submit",children:"Sign In"}),s.jsxs(S,{children:["Don’t have an account?",s.jsx(C,{to:"/signup",children:" Sign Up"})]})]})},A=()=>s.jsxs(s.Fragment,{children:[s.jsx(U,{children:s.jsx(H,{})}),s.jsxs(b,{children:[s.jsxs(I,{children:[s.jsx(T,{children:"Sign In"}),s.jsx(y,{children:"Welcome! Please enter your credentials to login to the platform:"}),s.jsx(N,{})]}),s.jsx(v,{children:s.jsxs(w,{children:[s.jsxs(V,{children:[s.jsx(R,{children:s.jsx(k,{children:s.jsx("use",{href:`${e}#icon-Polygon-1`})})}),s.jsxs(B,{children:["350+ ",s.jsx(P,{children:"Video tutorial"})]})]}),s.jsxs($,{children:[s.jsx(F,{children:s.jsx(D,{children:s.jsx("use",{href:`${e}#icon-running-stick-figure`})})}),s.jsxs(E,{children:["500 ",s.jsx(L,{children:"cal"})]})]})]})})]})]});export{A as default};