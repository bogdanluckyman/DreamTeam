import{u as i,h as S,a as j,j as e,l as z,n as k,o as q,r as D,y as L,F as $,z as C,A as g,B as A}from"./index-4de89ac5.js";import{T as I}from"./TitlePage-8e8df7cf.js";import{s as h}from"./symbol-defs-69a37fef.js";import{P as o}from"./index-98f472f6.js";import{c as U,a as O,b as f,d as T}from"./index.esm-e74ce186.js";import{p as w,D as V}from"./Datapicker-3e6f84aa.js";const B=i(S)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: var(--white-color);
  // margin-top: 40px;

  // @media screen and (min-width: 768px) and (max-width: 1440px;) {
  //   margin-right: 150px;
  // }
`,N=i.span`
  margin-right: 8px;
`,P=()=>{const n=j(),r=()=>{n(z())};return e.jsxs(B,{to:"/",onClick:r,children:[e.jsx(N,{children:"Logout"}),e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${h}#icon-log-out`})})]})},M=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 64px;
  }
`,E=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;
`,H=i.div`
  width: 90px;
  height: 90px;
  border-radius: 100px;
  border: 1px solid var(--orange-color);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,Y=i.img`
  border-radius: 100px;
`,G=i.div`
  cursor: pointer;
`,J=i.svg`
  @media screen and (min-width: 768px) {
    width: 102px;
    height: 102px;
  }
`,K=i.svg`
  width: 24px;
  height: 24px;
  position: relative;
  top: -13px;
  left: 0px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    top: -17.5px;
  }
`,Q=i.p`
  color: var(--white-color);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
`,X=i.p`
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px; 
  color: var(--light-grey-color);
  margin-top: 4px;

  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
`,Z=i.div`
 margin-top: 40px;
 margin-left: 260px;

 @media screen and (min-width: 768px)  {
  margin-left: 360px;
}
`,_=i.div`
// position: relative;
  display: flex;
  flex-direction: column;
  width: 165px;
  height: 96px;
  padding: 14px;
  align-items: flex-start;
  gap: 17px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: var(--orange-color);

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 209px;
    height: 108px;
    padding: 14px 18px;
    
    align-items: flex-start;
    // gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 214px;
    height: 108px;
    padding: 14px 18px;
    
    align-items: flex-start;
    // gap: 32px;
  }
`,ee=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,ie=i.svg`
  width: 16px;
  height: 16px;
  fill: var(--orange-color);
  stroke: var(--orange-color);
  margin-bottom: 10px;
`,te=i.p`
  color: rgba(239, 237, 232, 0.8);
  font-family: Roboto;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 1.33; 

font-feature-settings: 'clig' off, 'liga' off;



   @media screen and (min-width: 1440px) {
    
     line-height: 18px;
   }
`,re=i.p`

// position: absolute;
//     bottom: 0;
//     left: 18;
  color: var(--white-color);
  font-family: 'Roboto';
  // font-size: 24px;
  line-height: 1.3;
  margin-top: auto;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 18px;
  }
`,y=({text:n,value:r,iconId:l})=>e.jsxs(_,{children:[e.jsxs(ee,{children:[e.jsx(ie,{children:e.jsx("use",{href:`${h}#${l}`})}),e.jsx(te,{children:n})]}),e.jsx(re,{children:r})]});y.propTypes={color:o.string.isRequired,iconId:o.string.isRequired,text:o.string.isRequired,value:o.number.isRequired};const ae=i.div`
  display: flex;
  justify-content: center;
`,ne=i.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 440px;
  }
`,oe=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
   width: 24px;
   height: 24px;
  background-color: var(--beige-color);
`,le=i.p`
  color: var(--more-light-grey-color);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28; /* 128.571% */
  

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5; /* 150% */
  }

 
`,se=()=>e.jsx(ae,{children:e.jsxs(ne,{children:[e.jsx(oe,{children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${h}#icon-warning`})})}),e.jsx(le,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})}),de=()=>{const n=j(),r=k(q),[l,p]=D.useState(r.avatarURL),c=e.jsx(Y,{src:l,width:"100%",alt:"Avatar"}),x=e.jsx(J,{fill:"var(--light-grey-color)",width:"68",height:"68",children:e.jsx("use",{href:`${h}#icon-big-user`})}),u=v=>{const s=v.target.files[0];if(s){const a=new Blob([s]),t=URL.createObjectURL(a);p(t)}try{n(L(s)),console.log(s)}catch(a){console.error(a.message)}};return e.jsxs(M,{children:[e.jsx(H,{children:l?c:x}),e.jsxs("form",{id:"upload-form",children:[e.jsx("input",{type:"file",id:"file-input",name:"file",style:{display:"none"},onChange:u}),e.jsx("label",{htmlFor:"file-input",children:e.jsx(G,{children:e.jsx(K,{children:e.jsx("use",{href:`${h}#icon-plus`})})})})]}),e.jsx(Q,{children:r.name}),e.jsx(X,{children:"User"}),e.jsxs(E,{children:[e.jsx(y,{color:"var(--orange-color)",iconId:"icon-fork",text:"Daily calorie intake",value:r.bmr}),e.jsx(y,{color:"var(--orange-color)",iconId:"icon-dumbbell",text:"Daily physical activity",value:r.dailyActivity})]}),e.jsx(se,{}),e.jsx(Z,{children:e.jsx(P,{})})]})},pe=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 32px;
  }
`,ce=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 700px;
    text-align: center;
  }
`,W=i.input`
  width: 335px;
  padding: 14px;
  // margin-bottom: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;
  color: #efede8;
  font-size: 14;
  &:hover,
  &:focus {
    border-color: var(--orange-color);
    outline: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 341px;
  }
`,R=i.div`
  display: flex;
  align-items: flex-end;
  gap: 14px;
`,xe=i.div`
  @media screen and (min-width: 768px) {
    display: inline-flex;
    align-items: flex-end;
    gap: 14px;
  }
`,b=i.input`
  width: 165px;
  padding: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;
  color: var(--white-color);

  &:hover,
  &:focus {
    border-color: var(--orange-color);
    outline: 0;
  }
 
`,d=i.div`
  position: relative;
  margin-top: 40px;

  label {
    position: absolute;
    font-size: 14px;
    bottom: 55px;
    left: 1px;

    pointer-events: none;
    transition:
      top 0.2s,
      left 0.2s,
      transform 0.2s;
    color: var(--light-grey-color);
    
  }

  // span {
  //   position: absolute;
  //   font-size: 14px;
  //   bottom: 55px;
  //   left: 1px;

  //   pointer-events: none;
  //   color: var(--light-grey-color);
  // }
`,he=i.label`
position: absolute;
font-size: 14px;
bottom: 55px;
left: 1px;

pointer-events: none;
color: var(--light-grey-color);
`;i.label`
  color: --light-grey-color;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;const ge=i.div`
  margin-top: 30px;
  // display: flex;
  // flex-wrap: wrap;

  @media screen and (min-width: 1440px) {
    display: block;
  }

  .radio {
    position: relative;
  }

  .radio-input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .radio-label {
    padding-left: 25px;
    cursor: pointer;
    font-family: 'Roboto';
    font-size: 14px;
    line-height: 1.71em;
    letter-spacing: -0.28px;
    color: #efede8;
    margin-right: 9px;

    @media screen and (min-width: 768px) and (max-width: 1439px) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  .radio-label::before {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    border: 2px solid #636366;
    background-color: transparent;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 0;
  }

  .radio-label::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border: 2px solid var(--orange-light-color);
    background-color: var(--orange-light-color);
    border-radius: 50%;
    opacity: 0;
    position: absolute;
    top: 7px;
    left: 4px;
    z-index: 2;
  }

  .radio-input:checked + .radio-label::before {
    border-color: var(--orange-light-color);
  }

  .radio-input:checked + .radio-label::after {
    opacity: 1;
  }
`,me=i.button`
  margin: 40px 0px 80px 20px;
  padding: 12px 40px;
  border-radius: 12px;
  border-color: var(--orange-color);
  background: var(--orange-color);
  color: rgba(239, 237, 232, 0.6);

  @media screen and (min-width: 768px) {
    margin: 40px 0px 64px 0;
    padding: 16px 50px;
  }
`,ue=i.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`,m=({id:n,name:r,value:l,checked:p,label:c,onChange:x})=>e.jsxs("div",{className:"radio",children:[e.jsx("input",{className:"radio-input",type:"radio",id:n,name:r,value:l,checked:p,onChange:x}),e.jsx("label",{className:"radio-label",htmlFor:n,children:c})]});m.propTypes={id:o.string.isRequired,name:o.string.isRequired,value:o.string.isRequired,checked:o.bool.isRequired,label:o.string.isRequired,onChange:o.func.isRequired};const ve=()=>{const n=j(),r=k(q),l=[{id:"1",value:"1",label:"1"},{id:"2",value:"2",label:"2"},{id:"3",value:"3",label:"3"},{id:"4",value:"4",label:"4"}],p=[{id:"Male",value:"male",label:"Male"},{id:"Female",value:"female",label:"Female"}],c=[{id:"level-1",value:"1",label:"Sedentary lifestyle (little or no physical activity)"},{id:"level-2",value:"2",label:"Light activity (light exercises/sports 1-3 days per week)"},{id:"level-3",value:"3",label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{id:"level-4",value:"4",label:"Very active (intense exercises/sports 6-7 days per week)"},{id:"level-5",value:"5",label:"Extremely active (very strenuous exercises/sports and physical work)"}],x=r.birthday?w(r.birthday):new Date,u={name:r.name||"Name",height:r.height||"150",currentWeight:r.currentWeight||"35",desiredWeight:r.desiredWeight||"35",birthday:x||"2006-01-01",blood:(r.blood??"1").toString()||"1",sex:r.sex||"male",levelActivity:(r.levelActivity??"1").toString()||"1"},v=U({name:O().required("Name is required"),height:f().positive("Height must be positive").required("Height is required"),currentWeight:f().positive("Weight must be positive").required("Current weight is required"),desiredWeight:f().positive("Weight must be positive").required("Desired weight is required"),birthday:T().required("Birthday is required")}),s=a=>{const t={...a};n(A(t))};return e.jsx(pe,{children:e.jsx($,{initialValues:u,validationSchema:v,onSubmit:s,children:a=>e.jsxs(C,{children:[e.jsxs(ce,{children:[e.jsxs(d,{children:[e.jsx(g,{name:"name",type:"text",id:"name",placeholder:"Your name",as:W}),e.jsx("label",{htmlFor:"name",children:"Name"})]}),e.jsxs(d,{children:[e.jsx(W,{type:"text",name:"email",id:"email",defaultValue:r.email,style:{color:"rgba(239, 237, 232, 0.60)"},readOnly:!0,disabled:!0}),e.jsx("label",{htmlFor:"email",children:"Email"})]})]}),e.jsxs(xe,{children:[e.jsxs(R,{children:[e.jsxs(d,{children:[e.jsx(g,{type:"number",name:"height",id:"height",placeholder:"",as:b}),e.jsx("label",{htmlFor:"height",children:"Height"})]}),e.jsxs(d,{children:[e.jsx(g,{type:"number",name:"currentWeight",id:"currentWeight",placeholder:"",as:b}),e.jsx("label",{htmlFor:"currentWeight",children:"Current Weight"})]})]}),e.jsxs(R,{children:[e.jsxs(d,{children:[e.jsx(g,{type:"number",name:"desiredWeight",id:"desiredWeight",placeholder:"",as:b}),e.jsx("label",{htmlFor:"desiredWeight",children:"Desired Weight"})]}),e.jsxs(d,{children:[e.jsx(he,{children:"Date of birth"}),e.jsx(V,{selectedDate:a.values.birthday,setSelectedDate:t=>{const F=w(t.toISOString());a.setFieldValue("birthday",F)}})]})]})]}),e.jsxs(ge,{children:[e.jsxs("div",{style:{display:"flex",marginRight:"20px"},children:[e.jsx("div",{style:{display:"flex",marginRight:"20px"},children:l.map(t=>e.jsx(m,{id:t.id,name:"blood",value:t.value,checked:a.values.blood===t.value,label:t.label,onChange:()=>a.setFieldValue("blood",t.value)},t.id))}),e.jsx("div",{style:{display:"flex"},children:p.map(t=>e.jsx(m,{id:t.id,name:"sex",value:t.value,checked:a.values.sex===t.value,label:t.label,onChange:()=>a.setFieldValue("sex",t.value)},t.id))})]}),e.jsx(ue,{children:c.map(t=>e.jsx(m,{id:t.id,name:"levelActivity",value:t.value,checked:a.values.levelActivity===t.value,label:t.label,onChange:()=>a.setFieldValue("levelActivity",t.value)},t.id))})]}),e.jsx(me,{type:"submit",children:"Save"})]})})})},fe=i.div`
background-color:  var(--black-color);
padding-top: 40px;
  margin-left: 20px;
  margin-right: 20px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-left: 32px;
    margin-right: 32px;
    padding-top: 72px;
   
  }

  @media screen and (min-width: 1440px) {
    margin-left: 96px;
    margin-right: 96px;
    padding-bottom: 40px;
  }
`,be=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;
`;const ye=i.div`
  @media screen and (min-width: 1440px) {
    border-right: 1px solid rgba(239, 237, 232, 0.2);
    padding-right: 64px;

  }
`,Fe=()=>e.jsxs(fe,{children:[e.jsx(I,{title:"Profile Settings"}),e.jsxs(be,{children:[e.jsx("div",{children:e.jsx(de,{})}),e.jsx(ye,{children:e.jsx(ve,{})})]})]});export{Fe as default};
