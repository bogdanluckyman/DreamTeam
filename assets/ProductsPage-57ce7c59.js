import{u as t,B as G,C as F,b as Q,j as e,W as X,K as Z,M as H,y as l,Q as J,S as ee,T as te,U as oe,V as ie,X as re,Y as ne,Z as ae,$ as se,r as h,a as S,k as s,F as de,a0 as ce,p as D,m as le,d as pe,h as he,a1 as C,a2 as m,a3 as xe,a4 as ge,a5 as me,L}from"./index-a2e96977.js";import{T as ue}from"./TitlePage-f74c1138.js";import{c as fe,b as we}from"./index.esm-254a2bb6.js";import be from"./ErrorPage-2a891349.js";import"./index-82636733.js";const je=t.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: #10100f;
  margin: 15% auto;
  @media screen and (min-width: 375px) {
    width: 335px;
    height: 280px;
  }
  @media screen and (min-width: 768px) {
    width: 479px;
    height: 286px;
  }
`,ve=t.div`
  @media screen and (min-width: 375px) {
    padding: 48px 24px;
  }
  @media screen and (min-width: 768px) {
    padding: 48px 32px;
  }
`,ke=t(G)`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
`,ye=t(F)`
  border: 1px solid #e6533c;
  border-radius: 12px;
  padding: 8px 14px;
  background-color: #10100f;
  font-weight: 400;
  font-size: 14px;
  color: rgba(239, 237, 232, 0.3);
  @media screen and (min-width: 375px) {
    height: 34px;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 244px;
    height: 40px;
  }
`,Ce=t(F)`
  border: 1px solid #e6533c;
  border-radius: 12px;
  padding: 8px 14px;

  background: #10100f;
  font-weight: 400;
  font-size: 14px;
  color: rgba(239, 237, 232, 0.3);

  &:-webkit-autofill {
    background-color: #10100f !important;
    color: rgba(239, 237, 232, 0.3) !important;
  }
  @media screen and (min-width: 375px) {
    width: 100%;
    height: 34px;
  }
  @media screen and (min-width: 768px) {
    width: 155px;
    height: 40px;
  }
`,Fe=t.div`
  display: flex;
  gap: 16px;
  @media screen and (min-width: 375px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,Se=t.p`
  font-weight: 400;
  font-size: 12px;
  color: rgba(239, 237, 232, 0.4);
  margin-top: 16px;
  margin-bottom: 0;
`,Pe=t.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #efede8;
`,ze=t.button`
  background: none;
  border: transparent;
  position: absolute;
  padding: 0;
  width: 22px;
  height: 22px;
  @media screen and (min-width: 375px) {
    margin-left: 298px;
    margin-top: 14px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 438px;
    margin-top: 16px;
  }
`,De=t.div`
  display: flex;
  gap: 14px;

  @media screen and (min-width: 375px) {
    margin-top: 24px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 74px;
  }
`,W=t.button`
  padding: 12px 32px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-weight: 500;
  font-size: 16px;
  color: #efede8;
  background: #10100f;
  &:hover {
    background: #e6533c;
  }
`;t.span`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: rgba(239, 237, 232, 0.3);
  transition: all 0.3s ease;
`;const Le=t.label`
  position: absolute;
  font-weight: 400;

  @media screen and (min-width: 375px) {
    margin-top: 58px;
    margin-left: 232px;
    color: rgba(239, 237, 232, 0.3);
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 12px;
    margin-left: 365px;
    font-size: 12px;
    color: rgba(239, 237, 232, 0.4);
  }
`,B=t.svg`
  background-color: transparent;
`,We=({Calories:o,onClose:i,Background:r})=>{const c=Q(),d=()=>{c("/diary")};return e.jsx(X,{onClick:r,children:e.jsxs(Z,{children:[e.jsx(H,{onClick:i,children:e.jsx(B,{width:"13",height:"13",children:e.jsx("use",{href:l+"#icon-close-white"})})}),e.jsxs(J,{children:[e.jsx(ee,{}),e.jsx(te,{children:"Well done"}),e.jsxs(oe,{children:["Calories: ",e.jsx(ie,{children:o})]}),e.jsx(re,{onClick:i,children:"Next product"}),e.jsxs(ne,{onClick:d,children:[e.jsx(ae,{children:" To the diary"}),e.jsx(se,{children:e.jsx("use",{href:l+"#icon-next",width:"25",height:"25"})})]})]})]})})},Me=({onClose:o,product:i,data:r})=>{const[c,d]=h.useState(!1),[n,x]=h.useState(!0),[g,w]=h.useState(0),E=S(),P=s(a=>a.diary.error),A=i._id,O=i.title,R=i.calories;document.addEventListener("keydown",function(a){a.key==="Escape"&&o()});const V=fe().shape({amount:we().min(1,"Amount must be at least 1").required("Amount is required")}),z=a=>{a.target===a.currentTarget&&(d(!1),x(!1),o())},U=a=>{const u=a.target.value.trim();if(!isNaN(u)&&u!==""){const b=parseFloat(a.target.value),j=parseFloat(R),v=b*j/100;return w(v.toFixed(2))}},Y=async(a,{resetForm:u})=>{function b(){const p=new Date,k=String(p.getDate()).padStart(2,"0"),q=String(p.getMonth()+1).padStart(2,"0"),K=p.getFullYear();return`${k}-${q}-${K}`}const j=b(),v=a.amount;try{await V.validate(a,{abortEarly:!1});const k=await E(ce({date:r||j,products:{productID:A,amount:v,calories:g}}));if(console.log(P),P!==null){D.Notify.failure("Sorry, something went wrong. Try again");return}k.meta.requestStatus==="fulfilled"&&(D.Notify.success("Data added successfully"),d(!0),x(!1),u())}catch(p){console.error("Message:",p.errors[0])}},_=()=>{d(!1),x(!0)};return e.jsx(e.Fragment,{children:e.jsx(de,{initialValues:{amount:""},onSubmit:Y,children:e.jsxs(e.Fragment,{children:[n&&e.jsx(ke,{onClick:z,children:e.jsxs(je,{children:[e.jsx(ze,{onClick:o,children:e.jsx(B,{width:"13",height:"13",children:e.jsx("use",{href:l+"#icon-close-white"})})}),e.jsxs(ve,{children:[e.jsxs(Fe,{children:[e.jsx(ye,{id:"product",name:"product",placeholder:O,readOnly:!0}),e.jsx(Le,{children:"grams"}),e.jsx(F,{as:Ce,id:"amount",name:"amount",type:"number",onBlur:U})]}),e.jsxs(Se,{children:["Calories: ",e.jsx(Pe,{children:g})]}),e.jsxs(De,{children:[e.jsx(W,{type:"submit",children:"Add to diary"}),e.jsx(W,{onClick:o,children:"Cancel"})]})]})]})}),c&&e.jsx(We,{Calories:g,onClose:o,toFormModal:_,Background:z})]})})})},Te=t.li`
  width: 335px;
  height: 141px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  padding: 16px;
  margin-bottom: 20px;
  font-size: 12px;

  background-color: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 768px) {
    margin: 0;
  }
  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,Ie=t.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
  }
`,$e=t.div`
  display: flex;
  align-items: center;
`,Ne=t.div`
  width: 41px;
  height: 24px;
  padding: 5px 8px;

  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.17;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(239, 237, 232, 0.05);
`,Be=t.div`
  display: flex;
  margin-bottom: 8px;
`,Ee=t.h3`
  font-size: 20px;
  line-height: 1.33;
  margin-left: 16px;
  margin-bottom: 0;
  color: var(--white-color);
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  overflow-wrap: break-word;
`,Ae=t.dl`
  display: flex;
  font-size: 12px;
`,y=t.dt`
  line-height: 1.5;

  color: rgba(239, 237, 232, 0.4);
  margin-right: 4px;
`,M=t.dd`
  color: var(--white-color);
  line-height: 1.5;

  &:not(:last-child) {
    margin-right: 16px;
  }
`,Oe=t.dd`
  color: var(--white-color);
  line-height: 1.5;

  &:not(:last-child) {
    margin-right: 16px;
  }
  max-width: 76px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  overflow-wrap: break-word;
`,Re=t.button`
  display: flex;
  align-items: center;
  width: 48px;
  height: 18px;
  margin-left: 16px;
  padding: 0;
  font-size: 14px;
  line-height: 1.5;
  color: var(--orange-color);
  background-color: inherit;
  border: none;
`,T=t.p`
  margin-left: 8px;
  line-height: 1.5;
`,Ve=({product:o})=>{const i=s(le).blood,[r,c]=h.useState(!1),d=pe(),x=new URLSearchParams(d.search).get("date"),g=()=>{c(!0),document.body.classList.add("no-scroll")},w=()=>{c(!1),document.body.classList.remove("no-scroll")};return e.jsxs(e.Fragment,{children:[e.jsxs(Te,{children:[e.jsxs(Ie,{children:[e.jsx(Ne,{children:e.jsx("p",{children:"diet"})}),e.jsxs($e,{children:[o.groupBloodNotAllowed[i]?e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${l}#icon-circle-green`})}),e.jsx(T,{children:"Recommended"})]}):e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${l}#icon-circle-red`})}),e.jsx(T,{children:"Not recommended"})]}),e.jsxs(Re,{type:"button",onClick:g,children:[e.jsx("p",{children:"Add"}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${l}#icon-next`,style:{stroke:he.orange},width:"16"})})]})]})]}),e.jsxs(e.Fragment,{children:[e.jsxs(Be,{children:[e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${l}#icon-man-run`})}),e.jsx(Ee,{children:C(o.title)})]}),e.jsxs(Ae,{children:[e.jsx(y,{children:"Calories:"}),e.jsx(M,{children:o.calories}),e.jsx(y,{children:"Category:"}),e.jsx(Oe,{children:C(o.category)}),e.jsx(y,{children:"Weight:"}),e.jsx(M,{children:o.weight})]})]})]}),r&&e.jsx(Me,{onClose:w,product:o,data:x})]})},Ue=t.div`
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 660px;
    overflow: auto;
    margin-bottom: 80px;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(239, 237, 232, 0.1);
    }

    &::-webkit-scrollbar-thumb {
      background: var(--orange-light-color);
      height: 152px;
      border-radius: 12px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 850px;
    height: 488px;
    margin-bottom: 0;
  }
`,Ye=t.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
  }
`,_e=t.div`
  width: 335px;
  margin-top: 24px;
  font-size: 14px;
  color: var(--more-light-grey-color);

  @media screen and (min-width: 768px) {
    width: 580px;
    font-size: 16px;
    margin-top: 100px;
  }
`,I=t.span`
  color: var(--orange-color);
`,qe=o=>o.products.items,f=o=>o.filters,Ke=o=>o.categories.items,Ge=o=>o.categories.isLoading,Qe=o=>o.products.isLoading,Xe=o=>o.products.error,Ze=()=>{const o=s(qe);return e.jsx(Ue,{children:o.length===0?e.jsxs(_e,{children:[e.jsxs("p",{children:[e.jsx(I,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),e.jsx(I,{children:"Try changing the search parameters."})]}):e.jsx(Ye,{children:o.map(i=>e.jsx(Ve,{product:i,id:i._id},i._id))})})},He=t.div`
  margin-bottom: 40px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    width: 664px;

    display: flex;
    margin-bottom: 32px;
    margin-top: 32px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 454px;
    margin-bottom: 0;
    margin-top: 0;
  }
`,Je=t.div`
  display: flex;
  justify-content: space-between;
  width: inherit;
  padding: 14px;

  border: 1px solid var(--more-light-grey-color);
  border-radius: 12px;
  background-color: var(--black-color);
  margin-bottom: 16px;

  &:hover,
  &:focus {
    border-color: var(--orange-color);
  }

  @media screen and (min-width: 768px) {
    margin-right: 16px;
    margin-bottom: 0;
  }
`,et=t.input`
  font-size: 14px;
  color: var(--white-color);
  background-color: inherit;
  border: none;
  padding: 0;
  width: 140px;
  &:hover,
  &:focus {
    outline: 0;
  }
`,tt=t.button`
  padding: 0;
  margin-right: 8px;
  margin-left: auto;
  background-color: var(--black-color);
  border: none;
`,$=t.select`
  width: 100%;
  color: var(--white-color);
  background-color: var(--black-color);
  padding: 14px;
  font-size: 14px;
  border: 1px solid var(--more-light-grey-color);
  border-radius: 12px;
  &:not(:last-child) {
    margin-right: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: auto;
  }

  @media screen and (min-width: 1440px) {
    background-color: rgba(0, 0, 0, 0);
  }

  &:last-child {
    width: max-content;
  }

  &:hover,
  &:focus {
    outline: 0;
  }

  option {
    background-color: #1c1c1c;
    color: var(--white-color);
  }
`,N=t.option`
  background-color: #1c1c1c;
  color: var(--white-color);
  &:hover,
  &:focus {
    background-color: #1c1c1c;
  }
`,ot=t.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
`,it=t.p`
  display: none;
  font-size: 14px;
  ine-height: 0.78;
  color: var(--light-grey-color);
  position: absolute;
  right: 0;
  top: -26px;
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;let rt=(o=21)=>crypto.getRandomValues(new Uint8Array(o)).reduce((i,r)=>(r&=63,r<36?i+=r.toString(36):r<62?i+=(r-26).toString(36).toUpperCase():r>62?i+="-":i+="_",i),"");const nt=()=>{const o=S(),i=s(Ke),r=s(f).title,c=s(f).category,d=s(f).filter;return e.jsxs(He,{children:[e.jsxs(Je,{children:[e.jsx(et,{type:"text",name:"title",value:r,placeholder:"Search",onChange:n=>{o(m({title:n.target.value.trim()}))}}),r.length>0&&e.jsx(tt,{onClick:()=>{o(m({title:""}))},children:e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${l}#icon-close`})})}),e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${l}#icon-search`})})]}),e.jsxs(ot,{children:[e.jsx(it,{children:"Filters"}),e.jsxs($,{name:"category",value:c,onChange:n=>{n.target.value==="Categories"?o(m({category:""})):o(m({category:n.target.value}))},children:[e.jsx(N,{defaultChecked:!0,children:"Categories"}),i.map(n=>e.jsx(N,{value:n,children:C(n)},rt()))]}),e.jsxs($,{name:"filter",value:d,onChange:n=>o(m({filter:n.target.value})),children:[e.jsx("option",{defaultChecked:!0,children:"All"}),e.jsx("option",{children:"Recomended"}),e.jsx("option",{children:"Not recomended"})]})]})]})},at="/DreamTeam/assets/products-background-meal-a8b7a50b.jpg",st="/DreamTeam/assets/products-background-meal.@2x-7c68c962.jpg",dt=t.div`
  @media screen and (min-width: 1440px) {
    position: relative;
  }
`,ct=t.div`
  width: 375px;
  padding: 40px 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    position: relative;
    padding: 148px 0 81px 96px;
    width: 1440px;
    height: 716px;
  }
`,lt=t.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    background-size: 100%;
    background-image: url(${at});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${st});
    }

    width: 428px;
    height: 716px;
  }
`,pt=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    position: absolute;
    left: 96px;
    top: 68px;
    z-index: 2;
  }
`,ht=t.div`
  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 850px;
  }
`,wt=()=>{const o=s(xe),i=s(f),r=S();h.useEffect(()=>{r(ge(o))},[r]),h.useEffect(()=>{r(me({selectedFilters:i,TOKEN:o}))},[r,i]);const c=s(Ge),d=s(Qe),n=s(Xe);return e.jsxs(dt,{children:[c?e.jsx(L,{}):e.jsxs(ct,{children:[e.jsxs(pt,{children:[e.jsx(ue,{title:"Products"}),e.jsx(nt,{})]}),d&&!n?e.jsx(ht,{children:e.jsx(L,{})}):e.jsx(Ze,{})]}),n&&e.jsx(be,{}),e.jsx(lt,{})]})};export{wt as default};
