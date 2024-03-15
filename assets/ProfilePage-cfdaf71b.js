import{u as i,j as e,x as m,a as k,k as y,m as F,r as S,y as z,z as D,F as C,A as $,B as h,C as L,D as A,L as I}from"./index-78fb462c.js";import{T as U}from"./TitlePage-60f5e64e.js";import{c as O,a as V,b as f,d as B}from"./index.esm-cd7adfd8.js";import{P as l}from"./index-9cb55e12.js";import{p as j,D as N}from"./Datapicker-4df0cf2d.js";const P=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 64px;
  }
`,T=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;
`,M=i.div`
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
`,E=i.img`
  border-radius: 100px;
`,H=i.div`
  cursor: pointer;
`,Y=i.svg`
  @media screen and (min-width: 768px) {
    width: 102px;
    height: 102px;
  }
`,G=i.svg`
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
`,J=i.p`
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
`,K=i.p`
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
`,Q=i.div`
 margin-top: 40px;
 margin-left: 260px;

 @media screen and (min-width: 768px)  {
  margin-left: 360px;
}
`,X=i.div`
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
`,Z=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,_=i.svg`
  width: 16px;
  height: 16px;
  fill: var(--orange-color);
  stroke: var(--orange-color);
  margin-bottom: 10px;
`,ee=i.p`
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
`,ie=i.p`

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
`,w=({text:n,value:r,iconId:o})=>e.jsxs(X,{children:[e.jsxs(Z,{children:[e.jsx(_,{children:e.jsx("use",{href:`${m}#${o}`})}),e.jsx(ee,{children:n})]}),e.jsx(ie,{children:r})]}),te=i.div`
  display: flex;
  justify-content: center;
`,re=i.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 440px;
  }
`,ae=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
   width: 24px;
   height: 24px;
  background-color: var(--beige-color);
`,ne=i.p`
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

 
`,oe=()=>e.jsx(te,{children:e.jsxs(re,{children:[e.jsx(ae,{children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${m}#icon-warning`})})}),e.jsx(ne,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})}),le=()=>{const n=k(),r=y(F),[o,d]=S.useState(r.avatarURL),p=e.jsx(E,{src:o,width:"100%",alt:"Avatar"}),c=e.jsx(Y,{fill:"var(--light-grey-color)",width:"68",height:"68",children:e.jsx("use",{href:`${m}#icon-big-user`})}),u=v=>{const x=v.target.files[0];if(x){const a=new Blob([x]),t=URL.createObjectURL(a);d(t)}try{n(D(x))}catch(a){console.error(a.message)}};return e.jsxs(P,{children:[e.jsx(M,{children:o?p:c}),e.jsxs("form",{id:"upload-form",children:[e.jsx("input",{type:"file",id:"file-input",name:"file",style:{display:"none"},onChange:u}),e.jsx("label",{htmlFor:"file-input",children:e.jsx(H,{children:e.jsx(G,{children:e.jsx("use",{href:`${m}#icon-plus`})})})})]}),e.jsx(J,{children:r.name}),e.jsx(K,{children:"User"}),e.jsxs(T,{children:[e.jsx(w,{color:"var(--orange-color)",iconId:"icon-fork",text:"Daily calorie intake",value:r.bmr}),e.jsx(w,{color:"var(--orange-color)",iconId:"icon-dumbbell",text:"Daily physical activity",value:r.dailyActivity})]}),e.jsx(oe,{}),e.jsx(Q,{children:e.jsx(z,{})})]})},se=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 32px;
  }
`,de=i.div`
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
`,pe=i.div`
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
`,s=i.div`
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
`,ce=i.label`
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
`;const xe=i.div`
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
`,he=i.button`
  margin: 40px 0px 80px 20px;
  padding: 12px 40px;
  border-radius: 12px;
  border-color: var(--orange-color);
  background: var(--orange-color);
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    margin: 40px 0px 64px 0;
    padding: 16px 50px;
  }
`,ge=i.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`,g=({id:n,name:r,value:o,checked:d,label:p,onChange:c})=>e.jsxs("div",{className:"radio",children:[e.jsx("input",{className:"radio-input",type:"radio",id:n,name:r,value:o,checked:d,onChange:c}),e.jsx("label",{className:"radio-label",htmlFor:n,children:p})]});g.propTypes={id:l.string.isRequired,name:l.string.isRequired,value:l.string.isRequired,checked:l.bool.isRequired,label:l.string.isRequired,onChange:l.func.isRequired};const me=()=>{const n=k(),r=y(F),o=[{id:"1",value:"1",label:"1"},{id:"2",value:"2",label:"2"},{id:"3",value:"3",label:"3"},{id:"4",value:"4",label:"4"}],d=[{id:"Male",value:"male",label:"Male"},{id:"Female",value:"female",label:"Female"}],p=[{id:"level-1",value:"1",label:"Sedentary lifestyle (little or no physical activity)"},{id:"level-2",value:"2",label:"Light activity (light exercises/sports 1-3 days per week)"},{id:"level-3",value:"3",label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{id:"level-4",value:"4",label:"Very active (intense exercises/sports 6-7 days per week)"},{id:"level-5",value:"5",label:"Extremely active (very strenuous exercises/sports and physical work)"}],c=r.birthday?j(r.birthday):new Date,u={name:r.name||"Name",height:r.height||"150",currentWeight:r.currentWeight||"35",desiredWeight:r.desiredWeight||"35",birthday:c||"2006-01-01",blood:(r.blood??"1").toString()||"1",sex:r.sex||"male",levelActivity:(r.levelActivity??"1").toString()||"1"},v=O({name:V().required("Name is required"),height:f().positive("Height must be positive").required("Height is required"),currentWeight:f().positive("Weight must be positive").required("Current weight is required"),desiredWeight:f().positive("Weight must be positive").required("Desired weight is required"),birthday:B().required("Birthday is required")}),x=a=>{const t={...a};n(L(t))};return e.jsx(se,{children:e.jsx(C,{initialValues:u,validationSchema:v,onSubmit:x,children:a=>e.jsxs($,{children:[e.jsxs(de,{children:[e.jsxs(s,{children:[e.jsx(h,{name:"name",type:"text",id:"name",placeholder:"Your name",as:W}),e.jsx("label",{htmlFor:"name",children:"Name"})]}),e.jsxs(s,{children:[e.jsx(W,{type:"text",name:"email",id:"email",defaultValue:r.email,style:{color:"rgba(239, 237, 232, 0.60)"},readOnly:!0}),e.jsx("label",{htmlFor:"email",children:"Email"})]})]}),e.jsxs(pe,{children:[e.jsxs(R,{children:[e.jsxs(s,{children:[e.jsx(h,{type:"number",name:"height",id:"height",placeholder:"",as:b}),e.jsx("label",{htmlFor:"height",children:"Height"})]}),e.jsxs(s,{children:[e.jsx(h,{type:"number",name:"currentWeight",id:"currentWeight",placeholder:"",as:b}),e.jsx("label",{htmlFor:"currentWeight",children:"Current Weight"})]})]}),e.jsxs(R,{children:[e.jsxs(s,{children:[e.jsx(h,{type:"number",name:"desiredWeight",id:"desiredWeight",placeholder:"",as:b}),e.jsx("label",{htmlFor:"desiredWeight",children:"Desired Weight"})]}),e.jsxs(s,{children:[e.jsx(ce,{children:"Date of birth"}),e.jsx(N,{selectedDate:a.values.birthday,setSelectedDate:t=>{const q=j(t.toISOString());a.setFieldValue("birthday",q)}})]})]})]}),e.jsxs(xe,{children:[e.jsxs("div",{style:{display:"flex",marginRight:"20px"},children:[e.jsx("div",{style:{display:"flex",marginRight:"20px"},children:o.map(t=>e.jsx(g,{id:t.id,name:"blood",value:t.value,checked:a.values.blood===t.value,label:t.label,onChange:()=>a.setFieldValue("blood",t.value)},t.id))}),e.jsx("div",{style:{display:"flex"},children:d.map(t=>e.jsx(g,{id:t.id,name:"sex",value:t.value,checked:a.values.sex===t.value,label:t.label,onChange:()=>a.setFieldValue("sex",t.value)},t.id))})]}),e.jsx(ge,{children:p.map(t=>e.jsx(g,{id:t.id,name:"levelActivity",value:t.value,checked:a.values.levelActivity===t.value,label:t.label,onChange:()=>a.setFieldValue("levelActivity",t.value)},t.id))})]}),e.jsx(he,{type:"submit",children:"Save"})]})})})},ue=i.div`
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
`,ve=i.div`
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
`;const fe=i.div`
  @media screen and (min-width: 1440px) {
    border-right: 1px solid rgba(239, 237, 232, 0.2);
    padding-right: 64px;

  }
`,Re=()=>y(A)?e.jsx(I,{}):e.jsxs(ue,{children:[e.jsx(U,{title:"Profile Settings"}),e.jsxs(ve,{children:[e.jsx("div",{children:e.jsx(le,{})}),e.jsx(fe,{children:e.jsx(me,{})})]})]});export{Re as default};
