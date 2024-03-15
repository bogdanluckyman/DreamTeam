import{u as r,B as G,C as F,b as Q,j as e,W as X,K as Z,M as H,y as l,Q as J,S as ee,T as te,U as re,V as oe,X as ie,Y as ne,Z as ae,$ as se,r as h,a as S,k as s,F as de,a0 as ce,p as D,m as le,d as pe,a1 as he,a2 as xe,a3 as ge,a4 as me,a5 as L,a6 as ue,h as fe,a7 as we,a8 as je,a9 as C,aa as be,ab as y,ac as W,ad as ve,ae as m,af as ke,ag as ye,ah as Ce,L as M}from"./index-2bc3f09e.js";import{T as Fe}from"./TitlePage-b6db729e.js";import{c as Se,b as Pe}from"./index.esm-ecf41004.js";import De from"./ErrorPage-a22cbd71.js";import"./index-f1b09696.js";const Le=r.div`
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
`,We=r.div`
  @media screen and (min-width: 375px) {
    padding: 48px 24px;
  }
  @media screen and (min-width: 768px) {
    padding: 48px 32px;
  }
`,Me=r(G)`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
`,Te=r(F)`
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
`,ze=r(F)`
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
`,Ie=r.div`
  display: flex;
  gap: 16px;
  @media screen and (min-width: 375px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  &:focus-visible {
    outline: 0;
  }
`,$e=r.p`
  font-weight: 400;
  font-size: 12px;
  color: rgba(239, 237, 232, 0.4);
  margin-top: 16px;
  margin-bottom: 0;
`,Ne=r.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #efede8;
`,Be=r.button`
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
`,Ee=r.div`
  display: flex;
  gap: 14px;

  @media screen and (min-width: 375px) {
    margin-top: 24px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 74px;
  }
`,T=r.button`
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
`;r.span`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: rgba(239, 237, 232, 0.3);
  transition: all 0.3s ease;
`;const Ae=r.label`
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
`,N=r.svg`
  background-color: transparent;
`,Oe=({Calories:t,onClose:o,Background:i})=>{const c=Q(),d=()=>{c("/diary")};return e.jsx(X,{onClick:i,children:e.jsxs(Z,{children:[e.jsx(H,{onClick:o,children:e.jsx(N,{width:"13",height:"13",children:e.jsx("use",{href:l+"#icon-close-white"})})}),e.jsxs(J,{children:[e.jsx(ee,{}),e.jsx(te,{children:"Well done"}),e.jsxs(re,{children:["Calories: ",e.jsx(oe,{children:t})]}),e.jsx(ie,{onClick:o,children:"Next product"}),e.jsxs(ne,{onClick:d,children:[e.jsx(ae,{children:" To the diary"}),e.jsx(se,{children:e.jsx("use",{href:l+"#icon-next",width:"25",height:"25"})})]})]})]})})},Re=({onClose:t,product:o,data:i})=>{const[c,d]=h.useState(!1),[n,x]=h.useState(!0),[g,w]=h.useState(0),B=S(),E=s(a=>a.diary.error),A=o._id,O=o.title,R=o.calories;document.addEventListener("keydown",function(a){a.key==="Escape"&&t()});const V=Se().shape({amount:Pe().min(1,"Amount must be at least 1").required("Amount is required")}),P=a=>{a.target===a.currentTarget&&(d(!1),x(!1),t())},U=a=>{const u=a.target.value.trim();if(!isNaN(u)&&u!==""){const j=parseFloat(a.target.value),b=parseFloat(R),v=j*b/100;return w(v.toFixed(2))}},Y=async(a,{resetForm:u})=>{function j(){const p=new Date,k=String(p.getDate()).padStart(2,"0"),q=String(p.getMonth()+1).padStart(2,"0"),K=p.getFullYear();return`${k}-${q}-${K}`}const b=j(),v=a.amount;try{await V.validate(a,{abortEarly:!1});const k=await B(ce({date:i||b,products:{productID:A,amount:v,calories:g}}));if(E!==null){D.Notify.failure("Sorry, something went wrong. Try again");return}k.meta.requestStatus==="fulfilled"&&(D.Notify.success("Data added successfully"),d(!0),x(!1),u())}catch(p){console.error("Message:",p.errors[0])}},_=()=>{d(!1),x(!0)};return e.jsx(e.Fragment,{children:e.jsx(de,{initialValues:{amount:""},onSubmit:Y,children:e.jsxs(e.Fragment,{children:[n&&e.jsx(Me,{onClick:P,children:e.jsxs(Le,{children:[e.jsx(Be,{onClick:t,children:e.jsx(N,{width:"13",height:"13",children:e.jsx("use",{href:l+"#icon-close-white"})})}),e.jsxs(We,{children:[e.jsxs(Ie,{children:[e.jsx(Te,{id:"product",name:"product",placeholder:O,readOnly:!0}),e.jsx(Ae,{children:"grams"}),e.jsx(F,{as:ze,id:"amount",name:"amount",type:"number",onBlur:U})]}),e.jsxs($e,{children:["Calories: ",e.jsx(Ne,{children:g})]}),e.jsxs(Ee,{children:[e.jsx(T,{type:"submit",children:"Add to diary"}),e.jsx(T,{onClick:t,children:"Cancel"})]})]})]})}),c&&e.jsx(Oe,{Calories:g,onClose:t,toFormModal:_,Background:P})]})})})},Ve=({product:t})=>{const o=s(le).blood,[i,c]=h.useState(!1),d=pe(),x=new URLSearchParams(d.search).get("date"),g=()=>{c(!0),document.body.classList.add("no-scroll")},w=()=>{c(!1),document.body.classList.remove("no-scroll")};return e.jsxs(e.Fragment,{children:[e.jsxs(he,{children:[e.jsxs(xe,{children:[e.jsx(ge,{children:e.jsx("p",{children:"diet"})}),e.jsxs(me,{children:[t.groupBloodNotAllowed[o]?e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${l}#icon-circle-green`})}),e.jsx(L,{children:"Recommended"})]}):e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${l}#icon-circle-red`})}),e.jsx(L,{children:"Not recommended"})]}),e.jsxs(ue,{type:"button",onClick:g,children:[e.jsx("p",{children:"Add"}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${l}#icon-next`,style:{stroke:fe.orange},width:"16"})})]})]})]}),e.jsxs(e.Fragment,{children:[e.jsxs(we,{children:[e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${l}#icon-man-run`})}),e.jsx(je,{children:C(t.title)})]}),e.jsxs(be,{children:[e.jsx(y,{children:"Calories:"}),e.jsx(W,{children:t.calories}),e.jsx(y,{children:"Category:"}),e.jsx(ve,{children:C(t.category)}),e.jsx(y,{children:"Weight:"}),e.jsx(W,{children:t.weight})]})]})]}),i&&e.jsx(Re,{onClose:w,product:t,data:x})]})},Ue=r.div`
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
`,Ye=r.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
  }
`,_e=r.div`
  width: 335px;
  margin-top: 24px;
  font-size: 14px;
  color: var(--more-light-grey-color);

  @media screen and (min-width: 768px) {
    width: 580px;
    font-size: 16px;
    margin-top: 100px;
  }
`,z=r.span`
  color: var(--orange-color);
`,qe=t=>t.products.items,f=t=>t.filters,Ke=t=>t.categories.items,Ge=t=>t.categories.isLoading,Qe=t=>t.products.isLoading,Xe=t=>t.products.error,Ze=()=>{const t=s(qe);return e.jsx(Ue,{children:t.length===0?e.jsxs(_e,{children:[e.jsxs("p",{children:[e.jsx(z,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),e.jsx(z,{children:"Try changing the search parameters."})]}):e.jsx(Ye,{children:t.map(o=>e.jsx(Ve,{product:o,id:o._id},o._id))})})},He=r.div`
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
`,Je=r.div`
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
`,et=r.input`
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
`,tt=r.button`
  padding: 0;
  margin-right: 8px;
  margin-left: auto;
  background-color: var(--black-color);
  border: none;
`,I=r.select`
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
`,$=r.option`
  background-color: #1c1c1c;
  color: var(--white-color);
  &:hover,
  &:focus {
    background-color: #1c1c1c;
  }
`,rt=r.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
`,ot=r.p`
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
`;let it=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((o,i)=>(i&=63,i<36?o+=i.toString(36):i<62?o+=(i-26).toString(36).toUpperCase():i>62?o+="-":o+="_",o),"");const nt=()=>{const t=S(),o=s(Ke),i=s(f).title,c=s(f).category,d=s(f).filter;return e.jsxs(He,{children:[e.jsxs(Je,{children:[e.jsx(et,{type:"text",name:"title",value:i,placeholder:"Search",onChange:n=>{t(m({title:n.target.value.trim()}))}}),i.length>0&&e.jsx(tt,{onClick:()=>{t(m({title:""}))},children:e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${l}#icon-close`})})}),e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${l}#icon-search`})})]}),e.jsxs(rt,{children:[e.jsx(ot,{children:"Filters"}),e.jsxs(I,{name:"category",value:c,onChange:n=>{n.target.value==="Categories"?t(m({category:""})):t(m({category:n.target.value}))},children:[e.jsx($,{defaultChecked:!0,children:"Categories"}),o.map(n=>e.jsx($,{value:n,children:C(n)},it()))]}),e.jsxs(I,{name:"filter",value:d,onChange:n=>t(m({filter:n.target.value})),children:[e.jsx("option",{defaultChecked:!0,children:"All"}),e.jsx("option",{children:"Recomended"}),e.jsx("option",{children:"Not recomended"})]})]})]})},at="/DreamTeam/assets/products-background-meal-a8b7a50b.jpg",st="/DreamTeam/assets/products-background-meal.@2x-7c68c962.jpg",dt=r.div`
  @media screen and (min-width: 1440px) {
    position: relative;
  }
`,ct=r.div`
  width: 375px;
  padding: 40px 20px;
  margin-left: auto;
  margin-right: auto;
  position: relative;

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
`,lt=r.div`
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
`,pt=r.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    position: absolute;
    left: 96px;
    top: 68px;
    z-index: 2;
  }
`,ht=r.div`
  position: absolute;
  top: 0;
  width: 335px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`,wt=()=>{const t=s(ke),o=s(f),i=S();h.useEffect(()=>{i(ye(t))},[i]),h.useEffect(()=>{i(Ce({selectedFilters:o,TOKEN:t}))},[i,o]);const c=s(Ge),d=s(Qe),n=s(Xe);return e.jsxs(dt,{children:[c?e.jsx(M,{}):e.jsxs(ct,{children:[e.jsxs(pt,{children:[e.jsx(Fe,{title:"Products"}),e.jsx(nt,{})]}),d&&!n?e.jsx(ht,{children:e.jsx(M,{})}):e.jsx(Ze,{})]}),n&&e.jsx(De,{}),e.jsx(lt,{})]})};export{wt as default};
