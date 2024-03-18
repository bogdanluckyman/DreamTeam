import{u as t,j as e,y as g,a as R,m as j,n as z,r as F,z as q,A as C,h as D,F as I,B as $,C as m,D as L,E as A,L as U}from"./index-efdd0fe0.js";import{T as B}from"./TitlePage-6372751b.js";import{c as O,a as P,b as v,d as V}from"./index.esm-2d318789.js";import{P as s}from"./index-5540b4bf.js";import{i as M,p as w}from"./react-datepicker-cssmodules-7bad96e2.js";const N=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 64px;
  }
`,T=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;
`,E=t.div`
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
`,H=t.img`
  border-radius: 100px;
`,G=t.div`
  cursor: pointer;
`,Y=t.svg`
  @media screen and (min-width: 768px) {
    width: 102px;
    height: 102px;
  }
`,J=t.svg`
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
`,K=t.p`
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
`,Q=t.p`
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
`,X=t.div`
 margin-top: 40px;
 margin-left: 260px;

 @media screen and (min-width: 768px)  {
  margin-left: 360px;
}
`,Z=t.div`
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
`,ee=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,te=t.svg`
  width: 16px;
  height: 16px;
  fill: var(--orange-color);
  stroke: var(--orange-color);
  margin-bottom: 10px;
`,ie=t.p`
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
`,re=t.p`

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
`,k=({text:n,value:r,iconId:l})=>e.jsxs(Z,{children:[e.jsxs(ee,{children:[e.jsx(te,{children:e.jsx("use",{href:`${g}#${l}`})}),e.jsx(ie,{children:n})]}),e.jsx(re,{children:r})]}),ae=t.div`
  display: flex;
  justify-content: center;
`,ne=t.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 440px;
  }
`,oe=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
   width: 24px;
   height: 24px;
  background-color: var(--beige-color);
`,le=t.p`
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

 
`,se=()=>e.jsx(ae,{children:e.jsxs(ne,{children:[e.jsx(oe,{children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${g}#icon-warning`})})}),e.jsx(le,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})}),de=()=>{const n=R(),r=j(z),[l,o]=F.useState(r.avatarURL),p=e.jsx(H,{src:l,width:"100%",alt:"Avatar"}),c=e.jsx(Y,{fill:"var(--light-grey-color)",width:"68",height:"68",children:e.jsx("use",{href:`${g}#icon-big-user`})}),f=b=>{const x=b.target.files[0];if(x){const h=new Blob([x]),a=URL.createObjectURL(h);o(a)}try{n(C(x))}catch(h){console.error(h.message)}};return e.jsxs(N,{children:[e.jsx(E,{children:l?p:c}),e.jsxs("form",{id:"upload-form",children:[e.jsx("input",{type:"file",id:"file-input",name:"file",style:{display:"none"},onChange:f}),e.jsx("label",{htmlFor:"file-input",children:e.jsx(G,{children:e.jsx(J,{children:e.jsx("use",{href:`${g}#icon-plus`})})})})]}),e.jsx(K,{children:r.name}),e.jsx(Q,{children:"User"}),e.jsxs(T,{children:[e.jsx(k,{color:"var(--orange-color)",iconId:"icon-fork",text:"Daily calorie intake",value:r.bmr}),e.jsx(k,{color:"var(--orange-color)",iconId:"icon-dumbbell",text:"Daily physical activity",value:r.dailyActivity})]}),e.jsx(se,{}),e.jsx(X,{children:e.jsx(q,{})})]})},pe=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 32px;
  }
`,ce=t.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 700px;
    text-align: center;
  }
`,_=t.input`
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
`,W=t.div`
  display: flex;
  align-items: flex-end;
  gap: 14px;
`,xe=t.div`
  @media screen and (min-width: 768px) {
    display: inline-flex;
    align-items: flex-end;
    gap: 14px;
  }
`,y=t.input`
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
`,d=t.div`
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
`,he=t.div`
position: relative;

`,ge=t.label`
  position: absolute;
  font-size: 14px;
  bottom: 55px;
  left: 1px;

  pointer-events: none;
  color: var(--light-grey-color);
`,me=t.label`
  position: absolute;
  font-size: 14px;
  bottom: 30px;
  left: 1px;

  pointer-events: none;
  color: var(--light-grey-color);


  // @media screen and (min-width: 375px) {
  //   bottom: 30px;
  // }
`;t.label`
  color: --light-grey-color;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;const ue=t.div`
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
`,fe=t.button`
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
`,be=t.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`,u=({id:n,name:r,value:l,checked:o,label:p,onChange:c})=>e.jsxs("div",{className:"radio",children:[e.jsx("input",{className:"radio-input",type:"radio",id:n,name:r,value:l,checked:o,onChange:c}),e.jsx("label",{className:"radio-label",htmlFor:n,children:p})]});u.propTypes={id:s.string.isRequired,name:s.string.isRequired,value:s.string.isRequired,checked:s.bool.isRequired,label:s.string.isRequired,onChange:s.func.isRequired};t.div`
  position: absolute;
  left: -50%;
  top: 90%;
  transform: translate(0%, 0%);
  z-index: 999;
`;const ve=t.svg`
  position: absolute;
  top: 14px;
  right: 14px;
`,ye=t.input`
  width: 165px;
  padding: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;
  color: #efede8;
`;t.button`
  width: 195px;
  color: #ffffff;
  background: inherit;
  border-radius: 8px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  padding: 8px 12px;
  font-size: 16px;
  justify-content: space-around;
  align-items: center;
`;const je=D`
 .react-datepicker__wrapper {
    position: relative;
    
  }
  .react-datepicker {
    position: absolute;
    left: -105px;
    top: 50%;
    transform: translate(-15%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;    
    padding: 14px;
    background-color: #ef8964;
    font-family: 'Roboto', sans-serif;
    border-radius: 8px;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 14px;
    margin-bottom: 8px;
    border-top: 1px solid rgba(239, 237, 232, 0.2);
  }
  .react-datepicker__header {
    position: relative;
    background-color: #ef8964;    
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day
    react-datepicker__day--018.react-datepicker__day--selected
    react-datepicker__day--today {
    outline: none;
    border: none;
  }
  .react-datepicker__current-month {
    color: #efede8;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 14px;
  }
  .react-datepicker__day-name {
    margin: 0;
    color: rgba(239, 237, 232, 0.5);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .react-datepicker__day--disabled {
    opacity: 25%;
  }
  .react-datepicker__navigation {
    margin-top: 14px;
    color: white;
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin: 0;
    border-radius: 50%;
    color: #efede8;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    width: 24px;
    height: 24px;
  }
  .react-datepicker__month {
    display: flex;
    gap: 5px;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color: #040404;
    color: #efede8;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: white;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: white;
    color: #ef8964;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: white;
    color: #ef8964;
  }
  .react-datepicker__day--outside-month {
    opacity: 50%;
  }
  .react-datepicker__triangle {
    display: none;
  }
`,we=({selectedDate:n,setSelectedDate:r})=>{const l=o=>{r(o)};return e.jsx(e.Fragment,{children:e.jsxs("div",{style:{position:"relative"},children:[e.jsx(ve,{width:"18",height:"18",children:e.jsx("use",{href:`${g}#icon-calendar-white`})}),e.jsx(M,{selected:n,onChange:o=>{l(o)},customInput:e.jsx(ye,{style:{cursor:"pointer"}}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:o=>o.substr(0,2)}),e.jsx(je,{})]})})},ke=()=>{const n=R(),r=j(z),[l]=F.useState(r.email),o=[{id:"1",value:"1",label:"1"},{id:"2",value:"2",label:"2"},{id:"3",value:"3",label:"3"},{id:"4",value:"4",label:"4"}],p=[{id:"Male",value:"male",label:"Male"},{id:"Female",value:"female",label:"Female"}],c=[{id:"level-1",value:"1",label:"Sedentary lifestyle (little or no physical activity)"},{id:"level-2",value:"2",label:"Light activity (light exercises/sports 1-3 days per week)"},{id:"level-3",value:"3",label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{id:"level-4",value:"4",label:"Very active (intense exercises/sports 6-7 days per week)"},{id:"level-5",value:"5",label:"Extremely active (very strenuous exercises/sports and physical work)"}],f=r.birthday?w(r.birthday):"2006-01-01",b={name:r.name||"Name",height:r.height||"150",currentWeight:r.currentWeight||"35",desiredWeight:r.desiredWeight||"35",birthday:f||"2006-01-01",blood:(r.blood??"1").toString()||"1",sex:r.sex||"male",levelActivity:(r.levelActivity??"1").toString()||"1"},x=O({name:P().required("Name is required"),height:v().positive("Height must be positive").required("Height is required"),currentWeight:v().positive("Weight must be positive").required("Current weight is required"),desiredWeight:v().positive("Weight must be positive").required("Desired weight is required"),birthday:V().required("Birthday is required")}),h=a=>{const i={...a};n(L(i))};return e.jsx(pe,{children:e.jsx(I,{initialValues:b,validationSchema:x,onSubmit:h,children:a=>e.jsxs($,{children:[e.jsxs(ce,{children:[e.jsxs(d,{children:[e.jsx(m,{name:"name",type:"text",id:"name",placeholder:"Your name",as:_}),e.jsx("label",{htmlFor:"name",children:"Name"})]}),e.jsxs(d,{children:[e.jsx(_,{type:"text",name:"email",id:"email",defaultValue:l,style:{color:"rgba(239, 237, 232, 0.60)"},readOnly:!0}),e.jsx("label",{htmlFor:"email",children:"Email"})]})]}),e.jsxs(xe,{children:[e.jsxs(W,{children:[e.jsxs(d,{children:[e.jsx(m,{type:"number",name:"height",id:"height",placeholder:"",as:y}),e.jsx("label",{htmlFor:"height",children:"Height"})]}),e.jsxs(d,{children:[e.jsx(m,{type:"number",name:"currentWeight",id:"currentWeight",placeholder:"",as:y}),e.jsx("label",{htmlFor:"currentWeight",children:"Current Weight"})]})]}),e.jsxs(W,{children:[e.jsxs(d,{children:[e.jsx(m,{type:"number",name:"desiredWeight",id:"desiredWeight",placeholder:"",as:y}),e.jsx("label",{htmlFor:"desiredWeight",children:"Desired Weight"})]}),e.jsxs(d,{children:[e.jsx(ge,{children:"Date of birth"}),e.jsx(we,{selectedDate:a.values.birthday,setSelectedDate:i=>{const S=w(i.toISOString());a.setFieldValue("birthday",S)}})]})]})]}),e.jsxs(ue,{children:[e.jsxs("div",{style:{display:"flex",marginRight:"20px"},children:[e.jsxs(he,{children:[e.jsx(me,{children:"Blood"}),e.jsx("div",{style:{display:"flex"},children:o.map(i=>e.jsx(u,{id:i.id,name:"blood",value:i.value,checked:a.values.blood===i.value,label:i.label,onChange:()=>a.setFieldValue("blood",i.value)},i.id))})]}),e.jsx("div",{style:{display:"flex"},children:p.map(i=>e.jsx(u,{id:i.id,name:"sex",value:i.value,checked:a.values.sex===i.value,label:i.label,onChange:()=>a.setFieldValue("sex",i.value)},i.id))})]}),e.jsx(be,{children:c.map(i=>e.jsx(u,{id:i.id,name:"levelActivity",value:i.value,checked:a.values.levelActivity===i.value,label:i.label,onChange:()=>a.setFieldValue("levelActivity",i.value)},i.id))})]}),e.jsx(fe,{type:"submit",children:"Save"})]})})})},_e=t.div`
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
`,We=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;
`;const Re=t.div`
  @media screen and (min-width: 1440px) {
    border-right: 1px solid rgba(239, 237, 232, 0.2);
    padding-right: 64px;

  }
`,De=()=>j(A)?e.jsx(U,{}):e.jsxs(_e,{children:[e.jsx(B,{title:"Profile Settings"}),e.jsxs(We,{children:[e.jsx("div",{children:e.jsx(de,{})}),e.jsx(Re,{children:e.jsx(ke,{})})]})]});export{De as default};
