import{u as i,j as e,i as m,a as R,o as k,p as q,r as S,z,A as D,F as C,B as $,C as h,D as A}from"./index-5a4a36f5.js";import{T as I}from"./TitlePage-cbe38f5b.js";import{P as n}from"./index-80b28384.js";import{c as U,a as L,b,d as O}from"./index.esm-9756c9fb.js";import{p as j,D as T}from"./Datapicker-c4e9f55a.js";const V=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 64px;
  }
`,B=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;
`,N=i.div`
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
`,P=i.img`
  border-radius: 100px;
`,M=i.div`
  cursor: pointer;
`,E=i.svg`
  @media screen and (min-width: 768px) {
    width: 102px;
    height: 102px;
  }
`,H=i.svg`
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
`,Y=i.p`
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
`,G=i.p`
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
`,J=i.div`
 margin-top: 40px;
 margin-left: 260px;

 @media screen and (min-width: 768px)  {
  margin-left: 360px;
}
`,K=i.div`
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
`,Q=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,X=i.svg`
  width: 16px;
  height: 16px;
  fill: var(--orange-color);
  stroke: var(--orange-color);
  margin-bottom: 10px;
`,Z=i.p`
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
`,_=i.p`

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
`,y=({text:o,value:r,iconId:l})=>e.jsxs(K,{children:[e.jsxs(Q,{children:[e.jsx(X,{children:e.jsx("use",{href:`${m}#${l}`})}),e.jsx(Z,{children:o})]}),e.jsx(_,{children:r})]});y.propTypes={color:n.string.isRequired,iconId:n.string.isRequired,text:n.string.isRequired,value:n.number.isRequired};const ee=i.div`
  display: flex;
  justify-content: center;
`,ie=i.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 440px;
  }
`,te=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
   width: 24px;
   height: 24px;
  background-color: var(--beige-color);
`,re=i.p`
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

 
`,ae=()=>e.jsx(ee,{children:e.jsxs(ie,{children:[e.jsx(te,{children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${m}#icon-warning`})})}),e.jsx(re,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})}),ne=()=>{const o=R(),r=k(q),[l,p]=S.useState(r.avatarURL),c=e.jsx(P,{src:l,width:"100%",alt:"Avatar"}),x=e.jsx(E,{fill:"var(--light-grey-color)",width:"68",height:"68",children:e.jsx("use",{href:`${m}#icon-big-user`})}),u=v=>{const s=v.target.files[0];if(s){const a=new Blob([s]),t=URL.createObjectURL(a);p(t)}try{o(D(s)),console.log(s)}catch(a){console.error(a.message)}};return e.jsxs(V,{children:[e.jsx(N,{children:l?c:x}),e.jsxs("form",{id:"upload-form",children:[e.jsx("input",{type:"file",id:"file-input",name:"file",style:{display:"none"},onChange:u}),e.jsx("label",{htmlFor:"file-input",children:e.jsx(M,{children:e.jsx(H,{children:e.jsx("use",{href:`${m}#icon-plus`})})})})]}),e.jsx(Y,{children:r.name}),e.jsx(G,{children:"User"}),e.jsxs(B,{children:[e.jsx(y,{color:"var(--orange-color)",iconId:"icon-fork",text:"Daily calorie intake",value:r.bmr}),e.jsx(y,{color:"var(--orange-color)",iconId:"icon-dumbbell",text:"Daily physical activity",value:r.dailyActivity})]}),e.jsx(ae,{}),e.jsx(J,{children:e.jsx(z,{})})]})},oe=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 32px;
  }
`,le=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 700px;
    text-align: center;
  }
`,w=i.input`
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
`,W=i.div`
  display: flex;
  align-items: flex-end;
  gap: 14px;
`,se=i.div`
  @media screen and (min-width: 768px) {
    display: inline-flex;
    align-items: flex-end;
    gap: 14px;
  }
`,f=i.input`
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
`,de=i.label`
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
`;const pe=i.div`
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
`,ce=i.button`
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
`,xe=i.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`,g=({id:o,name:r,value:l,checked:p,label:c,onChange:x})=>e.jsxs("div",{className:"radio",children:[e.jsx("input",{className:"radio-input",type:"radio",id:o,name:r,value:l,checked:p,onChange:x}),e.jsx("label",{className:"radio-label",htmlFor:o,children:c})]});g.propTypes={id:n.string.isRequired,name:n.string.isRequired,value:n.string.isRequired,checked:n.bool.isRequired,label:n.string.isRequired,onChange:n.func.isRequired};const he=()=>{const o=R(),r=k(q),l=[{id:"1",value:"1",label:"1"},{id:"2",value:"2",label:"2"},{id:"3",value:"3",label:"3"},{id:"4",value:"4",label:"4"}],p=[{id:"Male",value:"male",label:"Male"},{id:"Female",value:"female",label:"Female"}],c=[{id:"level-1",value:"1",label:"Sedentary lifestyle (little or no physical activity)"},{id:"level-2",value:"2",label:"Light activity (light exercises/sports 1-3 days per week)"},{id:"level-3",value:"3",label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{id:"level-4",value:"4",label:"Very active (intense exercises/sports 6-7 days per week)"},{id:"level-5",value:"5",label:"Extremely active (very strenuous exercises/sports and physical work)"}],x=r.birthday?j(r.birthday):new Date,u={name:r.name||"Name",height:r.height||"150",currentWeight:r.currentWeight||"35",desiredWeight:r.desiredWeight||"35",birthday:x||"2006-01-01",blood:(r.blood??"1").toString()||"1",sex:r.sex||"male",levelActivity:(r.levelActivity??"1").toString()||"1"},v=U({name:L().required("Name is required"),height:b().positive("Height must be positive").required("Height is required"),currentWeight:b().positive("Weight must be positive").required("Current weight is required"),desiredWeight:b().positive("Weight must be positive").required("Desired weight is required"),birthday:O().required("Birthday is required")}),s=a=>{const t={...a};o(A(t))};return e.jsx(oe,{children:e.jsx(C,{initialValues:u,validationSchema:v,onSubmit:s,children:a=>e.jsxs($,{children:[e.jsxs(le,{children:[e.jsxs(d,{children:[e.jsx(h,{name:"name",type:"text",id:"name",placeholder:"Your name",as:w}),e.jsx("label",{htmlFor:"name",children:"Name"})]}),e.jsxs(d,{children:[e.jsx(w,{type:"text",name:"email",id:"email",defaultValue:r.email,style:{color:"rgba(239, 237, 232, 0.60)"},readOnly:!0,disabled:!0}),e.jsx("label",{htmlFor:"email",children:"Email"})]})]}),e.jsxs(se,{children:[e.jsxs(W,{children:[e.jsxs(d,{children:[e.jsx(h,{type:"number",name:"height",id:"height",placeholder:"",as:f}),e.jsx("label",{htmlFor:"height",children:"Height"})]}),e.jsxs(d,{children:[e.jsx(h,{type:"number",name:"currentWeight",id:"currentWeight",placeholder:"",as:f}),e.jsx("label",{htmlFor:"currentWeight",children:"Current Weight"})]})]}),e.jsxs(W,{children:[e.jsxs(d,{children:[e.jsx(h,{type:"number",name:"desiredWeight",id:"desiredWeight",placeholder:"",as:f}),e.jsx("label",{htmlFor:"desiredWeight",children:"Desired Weight"})]}),e.jsxs(d,{children:[e.jsx(de,{children:"Date of birth"}),e.jsx(T,{selectedDate:a.values.birthday,setSelectedDate:t=>{const F=j(t.toISOString());a.setFieldValue("birthday",F)}})]})]})]}),e.jsxs(pe,{children:[e.jsxs("div",{style:{display:"flex",marginRight:"20px"},children:[e.jsx("div",{style:{display:"flex",marginRight:"20px"},children:l.map(t=>e.jsx(g,{id:t.id,name:"blood",value:t.value,checked:a.values.blood===t.value,label:t.label,onChange:()=>a.setFieldValue("blood",t.value)},t.id))}),e.jsx("div",{style:{display:"flex"},children:p.map(t=>e.jsx(g,{id:t.id,name:"sex",value:t.value,checked:a.values.sex===t.value,label:t.label,onChange:()=>a.setFieldValue("sex",t.value)},t.id))})]}),e.jsx(xe,{children:c.map(t=>e.jsx(g,{id:t.id,name:"levelActivity",value:t.value,checked:a.values.levelActivity===t.value,label:t.label,onChange:()=>a.setFieldValue("levelActivity",t.value)},t.id))})]}),e.jsx(ce,{type:"submit",children:"Save"})]})})})},ge=i.div`
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
`,me=i.div`
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
`;const ue=i.div`
  @media screen and (min-width: 1440px) {
    border-right: 1px solid rgba(239, 237, 232, 0.2);
    padding-right: 64px;

  }
`,we=()=>e.jsxs(ge,{children:[e.jsx(I,{title:"Profile Settings"}),e.jsxs(me,{children:[e.jsx("div",{children:e.jsx(ne,{})}),e.jsx(ue,{children:e.jsx(he,{})})]})]});export{we as default};
