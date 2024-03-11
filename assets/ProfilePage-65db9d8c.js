import{u as t,j as e,x as m,b as R,n as F,o as q,r as D,y as C,z as $,F as I,A as k,B as x,C as A}from"./index-9c9c40a9.js";import{T as L}from"./TitlePage-e0d00e18.js";import{P as s}from"./index-17db0396.js";import{c as U,a as z,b as f,d as B}from"./index.esm-849048fb.js";import{p as y,W as O,F as T,a as o,I as w,b as V,c as W,d as b,L as N,D as P,e as M,g as E,B as H}from"./Datapicker-d41e4565.js";const Y=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 64px;
  }
`,G=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;
`,J=t.div`
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
`,K=t.img`
  border-radius: 100px;
`,Q=t.div`
  cursor: pointer;
`,X=t.svg`
  @media screen and (min-width: 768px) {
    width: 102px;
    height: 102px;
  }
`,Z=t.svg`
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
`,_=t.p`
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
`,ee=t.p`
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
`,ie=t.div`
 margin-top: 40px;
 margin-left: 260px;

 @media screen and (min-width: 768px)  {
  margin-left: 360px;
}
`,te=t.div`
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
`,ae=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,re=t.svg`
  width: 16px;
  height: 16px;
  fill: var(--orange-color);
  stroke: var(--orange-color);
  margin-bottom: 10px;
`,se=t.p`
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
`,ne=t.p`

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
`,j=({text:n,value:a,iconId:l})=>e.jsxs(te,{children:[e.jsxs(ae,{children:[e.jsx(re,{children:e.jsx("use",{href:`${m}#${l}`})}),e.jsx(se,{children:n})]}),e.jsx(ne,{children:a})]});j.propTypes={color:s.string.isRequired,iconId:s.string.isRequired,text:s.string.isRequired,value:s.number.isRequired};const le=t.div`
  display: flex;
  justify-content: center;
`,de=t.div`
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
`,ce=t.p`
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

 
`,pe=()=>e.jsx(le,{children:e.jsxs(de,{children:[e.jsx(oe,{children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${m}#icon-warning`})})}),e.jsx(ce,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})}),he=()=>{const n=R(),a=F(q),[l,c]=D.useState(a.avatarURL),p=e.jsx(K,{src:l,width:"100%",alt:"Avatar"}),h=e.jsx(X,{fill:"var(--light-grey-color)",width:"68",height:"68",children:e.jsx("use",{href:`${m}#icon-big-user`})}),u=v=>{const d=v.target.files[0];if(d){const r=new Blob([d]),i=URL.createObjectURL(r);c(i)}try{n($(d)),console.log(d)}catch(r){console.error(r.message)}};return e.jsxs(Y,{children:[e.jsx(J,{children:l?p:h}),e.jsxs("form",{id:"upload-form",children:[e.jsx("input",{type:"file",id:"file-input",name:"file",style:{display:"none"},onChange:u}),e.jsx("label",{htmlFor:"file-input",children:e.jsx(Q,{children:e.jsx(Z,{children:e.jsx("use",{href:`${m}#icon-plus`})})})})]}),e.jsx(_,{children:a.name}),e.jsx(ee,{children:"User"}),e.jsxs(G,{children:[e.jsx(j,{color:"var(--orange-color)",iconId:"icon-fork",text:"Daily calorie intake",value:a.bmr}),e.jsx(j,{color:"var(--orange-color)",iconId:"icon-dumbbell",text:"Daily physical activity",value:a.dailyActivity})]}),e.jsx(pe,{}),e.jsx(ie,{children:e.jsx(C,{})})]})},g=({id:n,name:a,value:l,checked:c,label:p,onChange:h})=>e.jsxs("div",{className:"radio",children:[e.jsx("input",{className:"radio-input",type:"radio",id:n,name:a,value:l,checked:c,onChange:h}),e.jsx("label",{className:"radio-label",htmlFor:n,children:p})]});g.propTypes={id:s.string.isRequired,name:s.string.isRequired,value:s.string.isRequired,checked:s.bool.isRequired,label:s.string.isRequired,onChange:s.func.isRequired};const xe=()=>{const n=R(),a=F(q);console.log(a);const l=[{id:"1",value:"1",label:"1"},{id:"2",value:"2",label:"2"},{id:"3",value:"3",label:"3"},{id:"4",value:"4",label:"4"}],c=[{id:"Male",value:"male",label:"Male"},{id:"Female",value:"female",label:"Female"}],p=[{id:"level-1",value:"1",label:"Sedentary lifestyle (little or no physical activity)"},{id:"level-2",value:"2",label:"Light activity (light exercises/sports 1-3 days per week)"},{id:"level-3",value:"3",label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{id:"level-4",value:"4",label:"Very active (intense exercises/sports 6-7 days per week)"},{id:"level-5",value:"5",label:"Extremely active (very strenuous exercises/sports and physical work)"}],h=a.birthday?y(a.birthday):new Date,u={name:a.name||"Name",height:a.height||"150",currentWeight:a.currentWeight||"35",desiredWeight:a.desiredWeight||"35",birthday:h||"2006-01-01",blood:(a.blood??"1").toString()||"1",sex:a.sex||"male",levelActivity:(a.levelActivity??"1").toString()||"1"},v=U({name:z().required("Name is required"),height:f().positive("Height must be positive").required("Height is required"),currentWeight:f().positive("Weight must be positive").required("Current weight is required"),desiredWeight:f().positive("Weight must be positive").required("Desired weight is required"),birthday:B().required("Birthday is required")}),d=r=>{console.log(r);const i={...r};n(A(i))};return e.jsx(O,{children:e.jsx(I,{initialValues:u,validationSchema:v,onSubmit:d,children:r=>e.jsxs(k,{children:[e.jsxs(T,{children:[e.jsxs(o,{children:[e.jsx(x,{name:"name",type:"text",id:"name",placeholder:"Your name",as:w}),e.jsx("label",{htmlFor:"name",children:"Name"})]}),e.jsxs(o,{children:[e.jsx(w,{type:"text",name:"email",id:"email",defaultValue:a.email,style:{color:"rgba(239, 237, 232, 0.60)"},readOnly:!0,disabled:!0}),e.jsx("label",{htmlFor:"email",children:"Email"})]})]}),e.jsxs(V,{children:[e.jsxs(W,{children:[e.jsxs(o,{children:[e.jsx(x,{type:"number",name:"height",id:"height",placeholder:"",as:b}),e.jsx("label",{htmlFor:"height",children:"Height"})]}),e.jsxs(o,{children:[e.jsx(x,{type:"number",name:"currentWeight",id:"currentWeight",placeholder:"",as:b}),e.jsx("label",{htmlFor:"currentWeight",children:"Current Weight"})]})]}),e.jsxs(W,{children:[e.jsxs(o,{children:[e.jsx(x,{type:"number",name:"desiredWeight",id:"desiredWeight",placeholder:"",as:b}),e.jsx("label",{htmlFor:"desiredWeight",children:"Desired Weight"})]}),e.jsxs(o,{children:[e.jsx(N,{children:"Date of birth"}),e.jsx(P,{selectedDate:r.values.birthday,setSelectedDate:i=>{const S=y(i.toISOString());r.setFieldValue("birthday",S)}})]})]})]}),e.jsxs(M,{children:[e.jsxs("div",{style:{display:"flex",marginRight:"20px"},children:[e.jsx("div",{style:{display:"flex",marginRight:"20px"},children:l.map(i=>e.jsx(g,{id:i.id,name:"blood",value:i.value,checked:r.values.blood===i.value,label:i.label,onChange:()=>r.setFieldValue("blood",i.value)},i.id))}),e.jsx("div",{style:{display:"flex"},children:c.map(i=>e.jsx(g,{id:i.id,name:"sex",value:i.value,checked:r.values.sex===i.value,label:i.label,onChange:()=>r.setFieldValue("sex",i.value)},i.id))})]}),e.jsx(E,{children:p.map(i=>e.jsx(g,{id:i.id,name:"levelActivity",value:i.value,checked:r.values.levelActivity===i.value,label:i.label,onChange:()=>r.setFieldValue("levelActivity",i.value)},i.id))})]}),"if  (!values.name ===  user.name) ",e.jsx(H,{type:"submit",children:"Save"})]})})})},ge=t.div`
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
`,me=t.div`
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
`;const ue=t.div`
  @media screen and (min-width: 1440px) {
    border-right: 1px solid rgba(239, 237, 232, 0.2);
    padding-right: 64px;

  }
`,we=()=>e.jsxs(ge,{children:[e.jsx(L,{title:"Profile Settings"}),e.jsxs(me,{children:[e.jsx("div",{children:e.jsx(he,{})}),e.jsx(ue,{children:e.jsx(xe,{})})]})]});export{we as default};
