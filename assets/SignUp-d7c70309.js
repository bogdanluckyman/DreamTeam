import{b as v,r as R,j as e,F as T,s as i,ab as t,ac as C}from"./index-671d384a.js";import{F as I,I as d,G as m,S as x,E as h,a as j,B as g,b as S,c as V,d as k,e as P,f as E,g as F,h as N}from"./SignUp.styled-de9610a0.js";import{c as q,a as u}from"./index.esm-bd2d75b3.js";import{C as B,R as U,B as M,V as G,I as z,S as A,a as D,b as L,c as H,d as J,e as K,T as O,f as Q}from"./Home.styled-cd73ac2c.js";const W=q().shape({name:u().required("Required").min(2,"Name must be at least 2 characters").max(16,"Name must be no more than 16 characters"),email:u().email("Invalid email address").required("Required"),password:u().min(6,"Password must be at least 6 characters").max(16,"Password must be no more than 16 characters").matches(/^(?=.*[a-z])/,"Please create a stronger password").required("Required")}),X={name:"",email:"",password:""},Y=()=>{const w=v(),[c,$]=R.useState(!1),p=()=>{$(!c)},b=({name:s,email:a,password:n},{resetForm:r})=>{w(C({name:s,email:a,password:n})),r()},f=(s,a)=>!s[a];return e.jsx(T,{initialValues:X,onSubmit:b,validationSchema:W,children:({errors:s,touched:a,values:n,handleChange:r,handleBlur:o,handleSubmit:y})=>e.jsxs(I,{autoComplete:"off",onSubmit:y,children:[e.jsx(d,{type:"text",name:"name",placeholder:"Name",className:`defoult
                    ${a.name&&!s.name&&"success"}
                    ${a.name&&s.name&&"error"}`,value:n.name,onChange:r,onBlur:o}),a.name&&f(s,"name"),a.name&&!s.name?e.jsxs(m,{children:[e.jsx(x,{children:e.jsx("use",{href:`${i}#icon-checkbox-circle-fill`})}),"Name is secure"]}):e.jsx(h,{children:e.jsx(t,{name:"name",children:l=>e.jsxs("div",{children:[e.jsx(j,{children:e.jsx("use",{href:`${i}#icon-red`})}),l]})})}),e.jsx(d,{type:"email",name:"email",placeholder:"Email",className:`defoult
                    ${a.email&&!s.email&&"success"}
                    ${a.email&&s.email&&"error"}`,value:n.email,onChange:r,onBlur:o}),a.email&&f(s,"email"),a.email&&!s.email?e.jsxs(m,{children:[e.jsx(x,{children:e.jsx("use",{href:`${i}#icon-checkbox-circle-fill`})}),"Email is secure"]}):e.jsx(h,{children:e.jsx(t,{name:"email",children:l=>e.jsxs("div",{children:[e.jsx(j,{children:e.jsx("use",{href:`${i}#icon-red`})}),l]})})}),e.jsx(d,{type:c?"text":"password",name:"password",placeholder:"Password",className:`defoult
                    ${a.password&&!s.password&&"success"}
                    ${a.password&&s.password&&"error"}`,value:n.password,onChange:r,onBlur:o}),a.password&&!s.password?e.jsxs(m,{children:[e.jsx(x,{children:e.jsx("use",{href:`${i}#icon-checkbox-circle-fill`})}),"Password is secure"]}):e.jsx(h,{children:e.jsx(t,{name:"password",children:l=>e.jsxs("div",{children:[e.jsx(j,{children:e.jsx("use",{href:`${i}#icon-red`})}),l]})})}),c?e.jsx(g,{type:"button",onClick:p,children:e.jsx(S,{children:e.jsx("use",{href:`${i}#icon-eye`})})}):e.jsx(g,{type:"button",onClick:p,children:e.jsx(S,{children:e.jsx("use",{href:`${i}#icon-eye-off`})})}),e.jsx(V,{type:"submit",children:"Sign Up"}),e.jsxs(k,{children:["Already have an account?",e.jsx(P,{to:"/signin",children:" Sign In"})]})]})})},ae=()=>e.jsxs(B,{children:[e.jsxs(E,{children:[e.jsx(F,{children:"Sign Up"}),e.jsx(N,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsx(Y,{})]}),e.jsx(U,{children:e.jsxs(M,{children:[e.jsxs(G,{children:[e.jsx(z,{children:e.jsx(A,{children:e.jsx("use",{href:`${i}#icon-Polygon-1`})})}),e.jsxs(D,{children:["350+ ",e.jsx(L,{children:"Video tutorial"})]})]}),e.jsxs(H,{children:[e.jsx(J,{children:e.jsx(K,{children:e.jsx("use",{href:`${i}#icon-running-stick-figure`})})}),e.jsxs(O,{children:["500 ",e.jsx(Q,{children:"cal"})]})]})]})})]});export{ae as default};