import{u as t,A as V,B as k,c as q,j as e,W as U,J as _,K as Y,M as K,Q as G,T as J,S as Q,U as X,V as Z,X as H,Y as ee,Z as te,r as x,b as y,n as d,F as ie,$ as re,k as S,o as oe,x as l,i as ne,a0 as v,a1 as h,a2 as ae,a3 as se,a4 as de,L as ce}from"./index-a2e1aabe.js";import{T as le}from"./TitlePage-a5eb9a0d.js";import{c as pe,b as he}from"./index.esm-f8cfb816.js";import xe from"./ErrorPage-09f37ae3.js";import"./index-c6b74050.js";const ge=t.div`
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
`,me=t.div`
  @media screen and (min-width: 375px) {
    padding: 48px 24px;
  }
  @media screen and (min-width: 768px) {
    padding: 48px 32px;
  }
`,ue=t(V)`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
`,fe=t(k)`
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
`,be=t(k)`
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
`,we=t.div`
  display: flex;
  gap: 16px;
  @media screen and (min-width: 375px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,je=t.p`
  font-weight: 400;
  font-size: 12px;
  color: rgba(239, 237, 232, 0.4);
  margin-top: 16px;
  margin-bottom: 0;
`,ve=t.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #efede8;
`,ke=t.button`
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
`,ye=t.div`
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
`;const Ce=t.label`
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
`,M=t.svg`
  background-color: transparent;
`,Fe=({Calories:i,onClose:r,Background:o})=>{const c=q(),s=()=>{c("/diary")};return e.jsx(U,{onClick:o,children:e.jsxs(_,{children:[e.jsx(Y,{onClick:r,children:e.jsx(M,{width:"13",height:"13",children:e.jsx("use",{href:"/src/img/symbol-defs.svg#icon-close-white"})})}),e.jsxs(K,{children:[e.jsx(G,{}),e.jsx(J,{children:"Well done"}),e.jsxs(Q,{children:["Calories: ",e.jsx(X,{children:i})]}),e.jsx(Z,{onClick:r,children:"Next product"}),e.jsxs(H,{onClick:s,children:[e.jsx(ee,{children:" To the diary"}),e.jsx(te,{children:e.jsx("use",{href:"/src/img/symbol-defs.svg#icon-next",width:"25",height:"25"})})]})]})]})})},Se=({onClose:i,product:r,date:o})=>{const[c,s]=x.useState(!1),[n,f]=x.useState(!0),[b,L]=x.useState(0),I=y(),C=d(a=>a.diary.error);d(a=>a.diary.isLoading);const N=r._id,B=r.title,$=r.calories;document.addEventListener("keydown",function(a){a.key==="Escape"&&i()});const A=pe().shape({amount:he().min(1,"Amount must be at least 1").required("Amount is required")}),F=a=>{a.target===a.currentTarget&&(s(!1),f(!1),i())},E=a=>{const g=a.target.value.trim();if(!isNaN(g)&&g!==""){const w=parseFloat(a.target.value),p=parseFloat($),m=w*p/100;return L(m.toFixed(2))}},R=async(a,{resetForm:g})=>{const w=a.amount;try{await A.validate(a,{abortEarly:!1});const p={date:o,products:{productID:N,amount:w,calories:b}};console.log(C);const m=await I(re(p));if(console.log(m.meta.requestStatus),C!==null){S.Notify.failure("Sorry, something went wrong. Try again");return}m.meta.requestStatus==="fulfilled"&&(S.Notify.success("Data added successfully"),s(!0),f(!1),g())}catch(p){console.error("Message:",p.errors[0])}},O=()=>{s(!1),f(!0)};return e.jsx(e.Fragment,{children:e.jsx(ie,{initialValues:{amount:""},onSubmit:R,children:e.jsxs(e.Fragment,{children:[n&&e.jsx(ue,{onClick:F,children:e.jsxs(ge,{children:[e.jsx(ke,{onClick:i,children:e.jsx(M,{width:"13",height:"13",children:e.jsx("use",{href:"/src/img/symbol-defs.svg#icon-close-white"})})}),e.jsxs(me,{children:[e.jsxs(we,{children:[e.jsx(fe,{id:"product",name:"product",placeholder:B,readOnly:!0}),e.jsx(Ce,{children:"grams"}),e.jsx(k,{as:be,id:"amount",name:"amount",type:"number",onBlur:E})]}),e.jsxs(je,{children:["Calories: ",e.jsx(ve,{children:b})]}),e.jsxs(ye,{children:[e.jsx(W,{type:"submit",children:"Add to diary"}),e.jsx(W,{onClick:i,children:"Cancel"})]})]})]})}),c&&e.jsx(Fe,{Calories:b,onClose:i,toFormModal:O,Background:F})]})})})},We=t.li`
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
`,ze=t.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
  }
`,Pe=t.div`
  display: flex;
  align-items: center;
`,De=t.div`
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
`,Te=t.div`
  display: flex;
  margin-bottom: 8px;
`,Me=t.h3`
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
`,Le=t.dl`
  display: flex;
  font-size: 12px;
`,j=t.dt`
  line-height: 1.5;

  color: rgba(239, 237, 232, 0.4);
  margin-right: 4px;
`,z=t.dd`
  color: var(--white-color);
  line-height: 1.5;

  &:not(:last-child) {
    margin-right: 16px;
  }
`,Ie=t.dd`
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
`,Ne=t.button`
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
`,P=t.p`
  margin-left: 8px;
  line-height: 1.5;
`,Be=({product:i})=>{const r=d(oe).blood,[o,c]=x.useState(!1),s=()=>{c(!0)},n=()=>{c(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(We,{children:[e.jsxs(ze,{children:[e.jsx(De,{children:e.jsx("p",{children:"diet"})}),e.jsxs(Pe,{children:[i.groupBloodNotAllowed[r]?e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${l}#icon-circle-green`})}),e.jsx(P,{children:"Recommended"})]}):e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${l}#icon-circle-red`})}),e.jsx(P,{children:"Not recommended"})]}),e.jsxs(Ne,{type:"button",onClick:s,children:[e.jsx("p",{children:"Add"}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${l}#icon-next`,style:{stroke:ne.orange},width:"16"})})]})]})]}),e.jsxs(e.Fragment,{children:[e.jsxs(Te,{children:[e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${l}#icon-man-run`})}),e.jsx(Me,{children:v(i.title)})]}),e.jsxs(Le,{children:[e.jsx(j,{children:"Calories:"}),e.jsx(z,{children:i.calories}),e.jsx(j,{children:"Category:"}),e.jsx(Ie,{children:v(i.category)}),e.jsx(j,{children:"Weight:"}),e.jsx(z,{children:i.weight})]})]})]}),o&&e.jsx(Se,{onClose:n,date:"06-03-2024",product:i})]})},$e=t.div`
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
`,Ae=t.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
  }
`,Ee=t.div`
  width: 335px;
  margin-top: 24px;
  font-size: 14px;
  color: var(--more-light-grey-color);

  @media screen and (min-width: 768px) {
    width: 580px;
    font-size: 16px;
    margin-top: 100px;
  }
`,D=t.span`
  color: var(--orange-color);
`,Re=i=>i.products.items,u=i=>i.filters,Oe=i=>i.categories.items,Ve=i=>i.products.isLoading,qe=i=>i.products.error,Ue=()=>{const i=d(Re);return e.jsx($e,{children:i.length===0?e.jsxs(Ee,{children:[e.jsxs("p",{children:[e.jsx(D,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),e.jsx(D,{children:"Try changing the search parameters."})]}):e.jsx(Ae,{children:i.map(r=>e.jsx(Be,{product:r,id:r._id},r._id))})})},_e=t.div`
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
`,Ye=t.div`
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
`,Ke=t.input`
  font-size: 14px;
  color: var(--white-color);
  background-color: inherit;
  border: none;
  padding: 0;

  &:hover,
  &:focus {
    outline: 0;
  }
`,Ge=t.button`
  padding: 0;
  margin-right: 8px;
  margin-left: auto;
  background-color: var(--black-color);
  border: none;
`,T=t.select`
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
`,Je=t.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
`;let Qe=(i=21)=>crypto.getRandomValues(new Uint8Array(i)).reduce((r,o)=>(o&=63,o<36?r+=o.toString(36):o<62?r+=(o-26).toString(36).toUpperCase():o>62?r+="-":r+="_",r),"");const Xe=()=>{const i=y(),r=d(Oe),o=d(u).title,c=d(u).category,s=d(u).filter;return e.jsxs(_e,{children:[e.jsxs(Ye,{children:[e.jsx(Ke,{type:"text",name:"title",defaultValue:o,placeholder:"Search",onChange:n=>{i(h({title:n.target.value.trim()}))}}),o.length>0&&e.jsx(Ge,{onClick:n=>{i(h({title:""}))},children:e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${l}#icon-close`})})}),e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${l}#icon-search`})})]}),e.jsxs(Je,{children:[e.jsxs(T,{name:"category",value:c,onChange:n=>{n.target.value==="Categories"?i(h({category:""})):i(h({category:n.target.value}))},children:[e.jsx("option",{defaultChecked:!0,children:"Categories"}),r.map(n=>e.jsx("option",{value:n,children:v(n)},Qe()))]}),e.jsxs(T,{name:"filter",value:s,onChange:n=>i(h({filter:n.target.value})),children:[e.jsx("option",{defaultChecked:!0,children:"All"}),e.jsx("option",{children:"Recomended"}),e.jsx("option",{children:"Not recomended"})]})]})]})},Ze="/DreamTeam/assets/products-background-meal-a8b7a50b.jpg",He="/DreamTeam/assets/products-background-meal.@2x-7c68c962.jpg",et=t.div`
  @media screen and (min-width: 1440px) {
    position: relative;
  }
`,tt=t.div`
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
`,it=t.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    background-size: 100%;
    background-image: url(${Ze});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${He});
    }

    width: 428px;
    height: 716px;
  }
`,rt=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    position: absolute;
    left: 96px;
    top: 68px;
    z-index: 2;
  }
`,ot=t.div`
  margin-right: auto;
  margin-left: auto;
`,lt=()=>{const i=d(ae),r=d(u),o=y();x.useEffect(()=>{o(se(i)),o(de({selectedFilters:r,TOKEN:i}))},[o,r]);const c=d(Ve),s=d(qe);return e.jsxs(et,{children:[e.jsxs(tt,{children:[e.jsxs(rt,{children:[e.jsx(le,{title:"Products"}),e.jsx(Xe,{})]}),c&&!s?e.jsx(ot,{children:e.jsx(ce,{})}):e.jsx(Ue,{})]}),s&&e.jsx(xe,{}),e.jsx(it,{})]})};export{lt as default};
