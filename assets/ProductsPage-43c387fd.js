import{u as t,A as Y,B as y,c as _,j as e,W as K,J as G,K as J,M as Q,Q as X,T as Z,S as H,U as ee,V as te,X as ie,Y as re,Z as oe,r as x,b as C,m as d,F as ne,$ as ae,q as S,n as se,x as p,i as de,a0 as k,a1 as h,a2 as ce,a3 as le,a4 as pe,L as he}from"./index-0a71a8e3.js";import{T as xe}from"./TitlePage-e68c478c.js";import{c as ge,b as me}from"./index.esm-df611064.js";import ue from"./ErrorPage-7b41bc84.js";import"./index-1c7f1f62.js";const fe=t.div`
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
`,be=t.div`
  @media screen and (min-width: 375px) {
    padding: 48px 24px;
  }
  @media screen and (min-width: 768px) {
    padding: 48px 32px;
  }
`,we=t(Y)`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
`,je=t(y)`
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
`,ve=t(y)`
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
`,ke=t.div`
  display: flex;
  gap: 16px;
  @media screen and (min-width: 375px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,ye=t.p`
  font-weight: 400;
  font-size: 12px;
  color: rgba(239, 237, 232, 0.4);
  margin-top: 16px;
  margin-bottom: 0;
`,Ce=t.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #efede8;
`,Fe=t.button`
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
`,Se=t.div`
  display: flex;
  gap: 14px;

  @media screen and (min-width: 375px) {
    margin-top: 24px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 74px;
  }
`,D=t.button`
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
`;const De=t.label`
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
`,T=t.svg`
  background-color: transparent;
`,We=({Calories:i,onClose:r,Background:o})=>{const a=_(),c=()=>{a("/diary")};return e.jsx(K,{onClick:o,children:e.jsxs(G,{children:[e.jsx(J,{onClick:r,children:e.jsx(T,{width:"13",height:"13",children:e.jsx("use",{href:"/src/img/symbol-defs.svg#icon-close-white"})})}),e.jsxs(Q,{children:[e.jsx(X,{}),e.jsx(Z,{children:"Well done"}),e.jsxs(H,{children:["Calories: ",e.jsx(ee,{children:i})]}),e.jsx(te,{onClick:r,children:"Next product"}),e.jsxs(ie,{onClick:c,children:[e.jsx(re,{children:" To the diary"}),e.jsx(oe,{children:e.jsx("use",{href:"/src/img/symbol-defs.svg#icon-next",width:"25",height:"25"})})]})]})]})})},ze=({onClose:i,product:r})=>{const[o,a]=x.useState(!1),[c,n]=x.useState(!0),[u,$]=x.useState(0),I=C(),L=d(s=>s.diary.error),N=r._id,B=r.title,A=r.calories;document.addEventListener("keydown",function(s){s.key==="Escape"&&i()});const E=ge().shape({amount:me().min(1,"Amount must be at least 1").required("Amount is required")}),F=s=>{s.target===s.currentTarget&&(a(!1),n(!1),i())},O=s=>{const g=s.target.value.trim();if(!isNaN(g)&&g!==""){const f=parseFloat(s.target.value),b=parseFloat(A),w=f*b/100;return $(w.toFixed(2))}},R=async(s,{resetForm:g})=>{function f(){const l=new Date,j=String(l.getDate()).padStart(2,"0"),q=String(l.getMonth()+1).padStart(2,"0"),U=l.getFullYear();return`${j}-${q}-${U}`}const b=f(),w=s.amount;try{await E.validate(s,{abortEarly:!1});const j=await I(ae({date:b,products:{productID:N,amount:w,calories:u}}));if(L!==null){S.Notify.failure("Sorry, something went wrong. Try again");return}j.meta.requestStatus==="fulfilled"&&(S.Notify.success("Data added successfully"),a(!0),n(!1),g())}catch(l){console.error("Message:",l.errors[0])}},V=()=>{a(!1),n(!0)};return e.jsx(e.Fragment,{children:e.jsx(ne,{initialValues:{amount:""},onSubmit:R,children:e.jsxs(e.Fragment,{children:[c&&e.jsx(we,{onClick:F,children:e.jsxs(fe,{children:[e.jsx(Fe,{onClick:i,children:e.jsx(T,{width:"13",height:"13",children:e.jsx("use",{href:"/src/img/symbol-defs.svg#icon-close-white"})})}),e.jsxs(be,{children:[e.jsxs(ke,{children:[e.jsx(je,{id:"product",name:"product",placeholder:B,readOnly:!0}),e.jsx(De,{children:"grams"}),e.jsx(y,{as:ve,id:"amount",name:"amount",type:"number",onBlur:O})]}),e.jsxs(ye,{children:["Calories: ",e.jsx(Ce,{children:u})]}),e.jsxs(Se,{children:[e.jsx(D,{type:"submit",children:"Add to diary"}),e.jsx(D,{onClick:i,children:"Cancel"})]})]})]})}),o&&e.jsx(We,{Calories:u,onClose:i,toFormModal:V,Background:F})]})})})},Pe=t.li`
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
`,Me=t.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
  }
`,Te=t.div`
  display: flex;
  align-items: center;
`,$e=t.div`
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
`,Ie=t.div`
  display: flex;
  margin-bottom: 8px;
`,Le=t.h3`
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
`,Ne=t.dl`
  display: flex;
  font-size: 12px;
`,v=t.dt`
  line-height: 1.5;

  color: rgba(239, 237, 232, 0.4);
  margin-right: 4px;
`,W=t.dd`
  color: var(--white-color);
  line-height: 1.5;

  &:not(:last-child) {
    margin-right: 16px;
  }
`,Be=t.dd`
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
`,Ae=t.button`
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
`,z=t.p`
  margin-left: 8px;
  line-height: 1.5;
`,Ee=({product:i})=>{const r=d(se).blood,[o,a]=x.useState(!1),c=()=>{a(!0)},n=()=>{a(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Pe,{children:[e.jsxs(Me,{children:[e.jsx($e,{children:e.jsx("p",{children:"diet"})}),e.jsxs(Te,{children:[i.groupBloodNotAllowed[r]?e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${p}#icon-circle-green`})}),e.jsx(z,{children:"Recommended"})]}):e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${p}#icon-circle-red`})}),e.jsx(z,{children:"Not recommended"})]}),e.jsxs(Ae,{type:"button",onClick:c,children:[e.jsx("p",{children:"Add"}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${p}#icon-next`,style:{stroke:de.orange},width:"16"})})]})]})]}),e.jsxs(e.Fragment,{children:[e.jsxs(Ie,{children:[e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${p}#icon-man-run`})}),e.jsx(Le,{children:k(i.title)})]}),e.jsxs(Ne,{children:[e.jsx(v,{children:"Calories:"}),e.jsx(W,{children:i.calories}),e.jsx(v,{children:"Category:"}),e.jsx(Be,{children:k(i.category)}),e.jsx(v,{children:"Weight:"}),e.jsx(W,{children:i.weight})]})]})]}),o&&e.jsx(ze,{onClose:n,product:i})]})},Oe=t.div`
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
`,Re=t.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
  }
`,Ve=t.div`
  width: 335px;
  margin-top: 24px;
  font-size: 14px;
  color: var(--more-light-grey-color);

  @media screen and (min-width: 768px) {
    width: 580px;
    font-size: 16px;
    margin-top: 100px;
  }
`,P=t.span`
  color: var(--orange-color);
`,qe=i=>i.products.items,m=i=>i.filters,Ue=i=>i.categories.items,Ye=i=>i.products.isLoading,_e=i=>i.products.error,Ke=()=>{const i=d(qe);return e.jsx(Oe,{children:i.length===0?e.jsxs(Ve,{children:[e.jsxs("p",{children:[e.jsx(P,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),e.jsx(P,{children:"Try changing the search parameters."})]}):e.jsx(Re,{children:i.map(r=>e.jsx(Ee,{product:r,id:r._id},r._id))})})},Ge=t.div`
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
`,Qe=t.input`
  font-size: 14px;
  color: var(--white-color);
  background-color: inherit;
  border: none;
  padding: 0;

  &:hover,
  &:focus {
    outline: 0;
  }
`,Xe=t.button`
  padding: 0;
  margin-right: 8px;
  margin-left: auto;
  background-color: var(--black-color);
  border: none;
`,M=t.select`
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
  @media screen and (min-width: 1440px) {
    background-color: rgba(0, 0, 0, 0);
  }

  &:hover,
  &:focus {
    outline: 0;
  }

  option {
    background-color: #1c1c1c;
  }
`,Ze=t.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
`;let He=(i=21)=>crypto.getRandomValues(new Uint8Array(i)).reduce((r,o)=>(o&=63,o<36?r+=o.toString(36):o<62?r+=(o-26).toString(36).toUpperCase():o>62?r+="-":r+="_",r),"");const et=()=>{const i=C(),r=d(Ue),o=d(m).title,a=d(m).category,c=d(m).filter;return e.jsxs(Ge,{children:[e.jsxs(Je,{children:[e.jsx(Qe,{type:"text",name:"title",defaultValue:o,placeholder:"Search",onChange:n=>{i(h({title:n.target.value.trim()}))}}),o.length>0&&e.jsx(Xe,{onClick:n=>{i(h({title:""}))},children:e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${p}#icon-close`})})}),e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${p}#icon-search`})})]}),e.jsxs(Ze,{children:[e.jsxs(M,{name:"category",value:a,onChange:n=>{n.target.value==="Categories"?i(h({category:""})):i(h({category:n.target.value}))},children:[e.jsx("option",{defaultChecked:!0,children:"Categories"}),r.map(n=>e.jsx("option",{value:n,children:k(n)},He()))]}),e.jsxs(M,{name:"filter",value:c,onChange:n=>i(h({filter:n.target.value})),children:[e.jsx("option",{defaultChecked:!0,children:"All"}),e.jsx("option",{children:"Recomended"}),e.jsx("option",{children:"Not recomended"})]})]})]})},tt="/DreamTeam/assets/products-background-meal-a8b7a50b.jpg",it="/DreamTeam/assets/products-background-meal.@2x-7c68c962.jpg",rt=t.div`
  @media screen and (min-width: 1440px) {
    position: relative;
  }
`,ot=t.div`
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
`,nt=t.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    background-size: 100%;
    background-image: url(${tt});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${it});
    }

    width: 428px;
    height: 716px;
  }
`,at=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    position: absolute;
    left: 96px;
    top: 68px;
    z-index: 2;
  }
`,st=t.div`
  margin-right: auto;
  margin-left: auto;
`,xt=()=>{const i=d(ce),r=d(m),o=C();x.useEffect(()=>{o(le(i)),o(pe({selectedFilters:r,TOKEN:i}))},[o,r]);const a=d(Ye),c=d(_e);return e.jsxs(rt,{children:[e.jsxs(ot,{children:[e.jsxs(at,{children:[e.jsx(xe,{title:"Products"}),e.jsx(et,{})]}),a&&!c?e.jsx(st,{children:e.jsx(he,{})}):e.jsx(Ke,{})]}),c&&e.jsx(ue,{}),e.jsx(nt,{})]})};export{xt as default};
