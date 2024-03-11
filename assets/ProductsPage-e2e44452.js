import{u as t,A as V,B as v,c as U,j as e,W as _,J as Y,K as q,M as K,Q as G,T as J,S as Q,U as X,V as Z,X as H,Y as ee,Z as te,r as x,b as k,n as d,F as ie,$ as re,k as F,o as oe,x as l,i as ne,a0 as j,a1 as h,a2 as ae,a3 as se,a4 as de,L as ce}from"./index-e990c433.js";import{T as le}from"./TitlePage-94e513e1.js";import{c as pe,b as he}from"./index.esm-62d5eb26.js";import xe from"./ErrorPage-d54d84e3.js";import"./index-1967d42b.js";const ge=t.div`
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
`,fe=t(v)`
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
`,be=t(v)`
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
`,T=t.svg`
  background-color: transparent;
`,Fe=({Calories:i,onClose:r,Background:o})=>{const c=U(),a=()=>{c("/diary")};return e.jsx(_,{onClick:o,children:e.jsxs(Y,{children:[e.jsx(q,{onClick:r,children:e.jsx(T,{width:"13",height:"13",children:e.jsx("use",{href:"/src/img/symbol-defs.svg#icon-close-white"})})}),e.jsxs(K,{children:[e.jsx(G,{}),e.jsx(J,{children:"Well done"}),e.jsxs(Q,{children:["Calories: ",e.jsx(X,{children:i})]}),e.jsx(Z,{onClick:r,children:"Next product"}),e.jsxs(H,{onClick:a,children:[e.jsx(ee,{children:" To the diary"}),e.jsx(te,{children:e.jsx("use",{href:"/src/img/symbol-defs.svg#icon-next",width:"25",height:"25"})})]})]})]})})},We=({onClose:i,product:r,date:o})=>{const[c,a]=x.useState(!1),[n,u]=x.useState(!0),[f,M]=x.useState(0),I=k(),y=d(s=>s.diary.error),L=r._id,N=r.title,B=r.calories;document.addEventListener("keydown",function(s){s.key==="Escape"&&i()});const $=pe().shape({amount:he().min(1,"Amount must be at least 1").required("Amount is required")}),C=s=>{s.target===s.currentTarget&&(a(!1),u(!1),i())},A=s=>{const g=s.target.value.trim();if(!isNaN(g)&&g!==""){const b=parseFloat(s.target.value),p=parseFloat(B),O=b*p/100;return M(O.toFixed(2))}},E=async(s,{resetForm:g})=>{const b=s.amount;try{await $.validate(s,{abortEarly:!1});const p={date:o,products:{productID:L,amount:b,calories:f}};if(console.log(y),I(re(p)),y!==null){F.Notify.failure("Sorry, something went wrong. Try again");return}F.Notify.success("Data added successfully"),a(!0),u(!1),g()}catch(p){console.error("Message:",p.errors[0])}},R=()=>{a(!1),u(!0)};return e.jsx(e.Fragment,{children:e.jsx(ie,{initialValues:{amount:""},onSubmit:E,children:e.jsxs(e.Fragment,{children:[n&&e.jsx(ue,{onClick:C,children:e.jsxs(ge,{children:[e.jsx(ke,{onClick:i,children:e.jsx(T,{width:"13",height:"13",children:e.jsx("use",{href:"/src/img/symbol-defs.svg#icon-close-white"})})}),e.jsxs(me,{children:[e.jsxs(we,{children:[e.jsx(fe,{id:"product",name:"product",placeholder:N,readOnly:!0}),e.jsx(Ce,{children:"grams"}),e.jsx(v,{as:be,id:"amount",name:"amount",type:"number",onBlur:A})]}),e.jsxs(je,{children:["Calories: ",e.jsx(ve,{children:f})]}),e.jsxs(ye,{children:[e.jsx(W,{type:"submit",children:"Add to diary"}),e.jsx(W,{onClick:i,children:"Cancel"})]})]})]})}),c&&e.jsx(Fe,{Calories:f,onClose:i,toFormModal:R,Background:C})]})})})},ze=t.li`
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
`,Pe=t.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
  }
`,Se=t.div`
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
`,Ie=t.dl`
  display: flex;
  font-size: 12px;
`,w=t.dt`
  line-height: 1.5;

  color: rgba(239, 237, 232, 0.4);
  margin-right: 4px;
`,z=t.dd`
  color: var(--white-color);
  line-height: 1.5;

  &:not(:last-child) {
    margin-right: 16px;
  }
`,Le=t.dd`
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
`,Be=({product:i})=>{const r=d(oe).blood,[o,c]=x.useState(!1),a=()=>{c(!0)},n=()=>{c(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(ze,{children:[e.jsxs(Pe,{children:[e.jsx(De,{children:e.jsx("p",{children:"diet"})}),e.jsxs(Se,{children:[i.groupBloodNotAllowed[r]?e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${l}#icon-circle-green`})}),e.jsx(P,{children:"Recommended"})]}):e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${l}#icon-circle-red`})}),e.jsx(P,{children:"Not recommended"})]}),e.jsxs(Ne,{type:"button",onClick:a,children:[e.jsx("p",{children:"Add"}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${l}#icon-next`,style:{stroke:ne.orange},width:"16"})})]})]})]}),e.jsxs(e.Fragment,{children:[e.jsxs(Te,{children:[e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${l}#icon-man-run`})}),e.jsx(Me,{children:j(i.title)})]}),e.jsxs(Ie,{children:[e.jsx(w,{children:"Calories:"}),e.jsx(z,{children:i.calories}),e.jsx(w,{children:"Category:"}),e.jsx(Le,{children:j(i.category)}),e.jsx(w,{children:"Weight:"}),e.jsx(z,{children:i.weight})]})]})]}),o&&e.jsx(We,{onClose:n,date:"06-03-2024",product:i})]})},$e=t.div`
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
`,S=t.span`
  color: var(--orange-color);
`,Re=i=>i.products.items,m=i=>i.filters,Oe=i=>i.categories.items,Ve=i=>i.products.isLoading,Ue=i=>i.products.error,_e=()=>{const i=d(Re);return e.jsx($e,{children:i.length===0?e.jsxs(Ee,{children:[e.jsxs("p",{children:[e.jsx(S,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),e.jsx(S,{children:"Try changing the search parameters."})]}):e.jsx(Ae,{children:i.map(r=>e.jsx(Be,{product:r,id:r._id},r._id))})})},Ye=t.div`
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
`,qe=t.div`
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
`,D=t.select`
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
`,Je=t.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
`;let Qe=(i=21)=>crypto.getRandomValues(new Uint8Array(i)).reduce((r,o)=>(o&=63,o<36?r+=o.toString(36):o<62?r+=(o-26).toString(36).toUpperCase():o>62?r+="-":r+="_",r),"");const Xe=()=>{const i=k(),r=d(Oe),o=d(m).title,c=d(m).category,a=d(m).filter;return e.jsxs(Ye,{children:[e.jsxs(qe,{children:[e.jsx(Ke,{type:"text",name:"title",defaultValue:o,placeholder:"Search",onChange:n=>{i(h({title:n.target.value.trim()}))}}),o.length>0&&e.jsx(Ge,{onClick:n=>{i(h({title:""}))},children:e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${l}#icon-close`})})}),e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${l}#icon-search`})})]}),e.jsxs(Je,{children:[e.jsxs(D,{name:"category",value:c,onChange:n=>{n.target.value==="Categories"?i(h({category:""})):i(h({category:n.target.value}))},children:[e.jsx("option",{defaultChecked:!0,children:"Categories"}),r.map(n=>e.jsx("option",{value:n,children:j(n)},Qe()))]}),e.jsxs(D,{name:"filter",value:a,onChange:n=>i(h({filter:n.target.value})),children:[e.jsx("option",{defaultChecked:!0,children:"All"}),e.jsx("option",{children:"Recomended"}),e.jsx("option",{children:"Not recomended"})]})]})]})},Ze="/DreamTeam/assets/products-background-meal-a8b7a50b.jpg",He="/DreamTeam/assets/products-background-meal.@2x-7c68c962.jpg",et=t.div`
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
`,lt=()=>{const i=d(ae),r=d(m),o=k();x.useEffect(()=>{o(se(i)),o(de({selectedFilters:r,TOKEN:i}))},[o,r]);const c=d(Ve),a=d(Ue);return e.jsxs(et,{children:[e.jsxs(tt,{children:[e.jsxs(rt,{children:[e.jsx(le,{title:"Products"}),e.jsx(Xe,{})]}),c&&!a?e.jsx(ot,{children:e.jsx(ce,{})}):e.jsx(_e,{})]}),a&&e.jsx(xe,{}),e.jsx(it,{})]})};export{lt as default};
