import{u as t,B as _,C as v,c as q,j as e,W as Y,M as K,Q as G,S as Q,T as X,U as Z,V as H,X as J,Y as ee,Z as te,$ as ie,a0 as re,r as l,b as g,p as d,F as ne,a1 as oe,n as F,q as ae,k as c,m as se,a2 as j,a3 as D,a4 as M,a5 as x,a6 as de}from"./index-ba9ec7f3.js";import{T as ce}from"./TitlePage-17aaf4b6.js";import{c as le,b as pe}from"./index.esm-e485f405.js";const he=t.div`
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
`,xe=t.div`
  @media screen and (min-width: 375px) {
    padding: 48px 24px;
  }
  @media screen and (min-width: 768px) {
    padding: 48px 32px;
  }
`,ge=t(_)`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
`,me=t(v)`
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
`,ue=t(v)`
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
`,fe=t.div`
  display: flex;
  gap: 16px;
  @media screen and (min-width: 375px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,be=t.p`
  font-weight: 400;
  font-size: 12px;
  color: rgba(239, 237, 232, 0.4);
  margin-top: 16px;
  margin-bottom: 0;
`,we=t.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #efede8;
`,je=t.button`
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
`,ve=t.div`
  display: flex;
  gap: 14px;

  @media screen and (min-width: 375px) {
    margin-top: 24px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 74px;
  }
`,z=t.button`
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
`;const ke=t.label`
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
`,N=t.svg`
  background-color: transparent;
`,ye=({Calories:i,onClose:r,Background:n})=>{const o=q(),s=()=>{o("/diary")};return e.jsx(Y,{onClick:n,children:e.jsxs(K,{children:[e.jsx(G,{onClick:r,children:e.jsx(N,{width:"13",height:"13",children:e.jsx("use",{href:"/src/img/symbol-defs.svg#icon-close-white"})})}),e.jsxs(Q,{children:[e.jsx(X,{}),e.jsx(Z,{children:"Well done"}),e.jsxs(H,{children:["Calories: ",e.jsx(J,{children:i})]}),e.jsx(ee,{onClick:r,children:"Next product"}),e.jsxs(te,{onClick:s,children:[e.jsx(ie,{children:" To the diary"}),e.jsx(re,{children:e.jsx("use",{href:"/src/img/symbol-defs.svg#icon-next",width:"25",height:"25"})})]})]})]})})},Ce=({onClose:i,product:r,date:n})=>{const[o,s]=l.useState(!1),[m,u]=l.useState(!0),[f,B]=l.useState(0),I=g(),y=d(a=>a.diary.error),$=r._id,A=r.title,E=r.calories;document.addEventListener("keydown",function(a){a.key==="Escape"&&i()});const L=le().shape({amount:pe().min(1,"Amount must be at least 1").required("Amount is required")}),C=a=>{a.target===a.currentTarget&&(s(!1),u(!1),i())},O=a=>{const h=a.target.value.trim();if(!isNaN(h)&&h!==""){const b=parseFloat(a.target.value),p=parseFloat(E),U=b*p/100;return B(U.toFixed(2))}},R=async(a,{resetForm:h})=>{const b=a.amount;try{await L.validate(a,{abortEarly:!1});const p={date:n,products:{productID:$,amount:b,calories:f}};if(console.log(y),I(oe(p)),y!==null){F.Notify.failure("Sorry, something went wrong. Try again");return}F.Notify.success("Data added successfully"),s(!0),u(!1),h()}catch(p){console.error("Message:",p.errors[0])}},V=()=>{s(!1),u(!0)};return e.jsx(e.Fragment,{children:e.jsx(ne,{initialValues:{amount:""},onSubmit:R,children:e.jsxs(e.Fragment,{children:[m&&e.jsx(ge,{onClick:C,children:e.jsxs(he,{children:[e.jsx(je,{onClick:i,children:e.jsx(N,{width:"13",height:"13",children:e.jsx("use",{href:"/src/img/symbol-defs.svg#icon-close-white"})})}),e.jsxs(xe,{children:[e.jsxs(fe,{children:[e.jsx(me,{id:"product",name:"product",placeholder:A,readOnly:!0}),e.jsx(ke,{children:"grams"}),e.jsx(v,{as:ue,id:"amount",name:"amount",type:"number",onBlur:O})]}),e.jsxs(be,{children:["Calories: ",e.jsx(we,{children:f})]}),e.jsxs(ve,{children:[e.jsx(z,{type:"submit",children:"Add to diary"}),e.jsx(z,{onClick:i,children:"Cancel"})]})]})]})}),o&&e.jsx(ye,{Calories:f,onClose:i,toFormModal:V,Background:C})]})})})},Fe=t.li`
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
`,Se=t.div`
  display: flex;
  align-items: center;
`,We=t.div`
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
`,Pe=t.div`
  display: flex;
  margin-bottom: 8px;
`,Te=t.h3`
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
`,De=t.dl`
  display: flex;
  font-size: 12px;
`,w=t.dt`
  line-height: 1.5;

  color: rgba(239, 237, 232, 0.4);
  margin-right: 4px;
`,S=t.dd`
  color: var(--white-color);
  line-height: 1.5;

  &:not(:last-child) {
    margin-right: 16px;
  }
`,Me=t.dd`
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
`,W=t.p`
  margin-left: 8px;
  line-height: 1.5;
`,Be=({product:i})=>{const r=d(ae).blood,[n,o]=l.useState(!1),s=()=>{o(!0)},m=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Fe,{children:[e.jsxs(ze,{children:[e.jsx(We,{children:e.jsx("p",{children:"diet"})}),e.jsxs(Se,{children:[i.groupBloodNotAllowed[r]?e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${c}#icon-circle-green`})}),e.jsx(W,{children:"Recommended"})]}):e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${c}#icon-circle-red`})}),e.jsx(W,{children:"Not recommended"})]}),e.jsxs(Ne,{type:"button",onClick:s,children:[e.jsx("p",{children:"Add"}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${c}#icon-next`,style:{stroke:se.orange},width:"16"})})]})]})]}),e.jsxs(e.Fragment,{children:[e.jsxs(Pe,{children:[e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${c}#icon-man-run`})}),e.jsx(Te,{children:j(i.title)})]}),e.jsxs(De,{children:[e.jsx(w,{children:"Calories:"}),e.jsx(S,{children:i.calories}),e.jsx(w,{children:"Category:"}),e.jsx(Me,{children:j(i.category)}),e.jsx(w,{children:"Weight:"}),e.jsx(S,{children:i.weight})]})]})]}),n&&e.jsx(Ce,{onClose:m,date:"06-03-2024",product:i})]})},Ie=t.div`
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
`,$e=t.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
  }
`,Ae=t.div`
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
`,Ee=i=>i.products.items,k=i=>i.filters,Le=i=>i.categories.items,Oe=()=>{const i=d(D),r=g(),n=d(k);l.useEffect(()=>{r(M({selectedFilters:n,TOKEN:i}))},[n]);const o=d(Ee);return e.jsx(Ie,{children:o.length===0?e.jsxs(Ae,{children:[e.jsxs("p",{children:[e.jsx(P,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),e.jsx(P,{children:"Try changing the search parameters."})]}):e.jsx($e,{children:o.map(s=>e.jsx(Be,{product:s,id:s._id},s._id))})})},Re=t.div`
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
`,Ve=t.div`
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
`,Ue=t.input`
  font-size: 14px;
  color: var(--white-color);
  background-color: inherit;
  border: none;
  padding: 0;

  &:hover,
  &:focus {
    outline: 0;
  }
`,_e=t.button`
  padding: 0;
  margin-right: 8px;
  margin-left: auto;
  background-color: var(--black-color);
  border: none;
`,T=t.select`
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
`,qe=t.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
`;let Ye=(i=21)=>crypto.getRandomValues(new Uint8Array(i)).reduce((r,n)=>(n&=63,n<36?r+=n.toString(36):n<62?r+=(n-26).toString(36).toUpperCase():n>62?r+="-":r+="_",r),"");const Ke=()=>{const i=g(),r=d(Le),n=d(k).title;return e.jsxs(Re,{children:[e.jsxs(Ve,{children:[e.jsx(Ue,{type:"text",name:"title",placeholder:"Search",onChange:o=>{i(x({title:o.target.value.trim()}))}}),n.length>0&&e.jsx(_e,{onClick:o=>{i(x({title:""}))},children:e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${c}#icon-close`})})}),e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${c}#icon-search`})})]}),e.jsxs(qe,{children:[e.jsxs(T,{name:"category",onChange:o=>i(x({category:o.target.value})),children:[e.jsx("option",{defaultChecked:!0,children:"Categories"}),r.map(o=>e.jsx("option",{children:j(o)},Ye()))]}),e.jsxs(T,{name:"filter",onChange:o=>i(x({filter:o.target.value})),children:[e.jsx("option",{defaultChecked:!0,children:"All"}),e.jsx("option",{children:"Recomended"}),e.jsx("option",{children:"Not recomended"})]})]})]})},Ge="/DreamTeam/assets/products-background-meal-a8b7a50b.jpg",Qe="/DreamTeam/assets/products-background-meal.@2x-7c68c962.jpg",Xe=t.div`
  @media screen and (min-width: 1440px) {
    position: relative;
  }
`,Ze=t.div`
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
`,He=t.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    background-size: 100%;
    background-image: url(${Ge});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Qe});
    }

    width: 428px;
    height: 716px;
  }
`,Je=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    position: absolute;
    left: 96px;
    top: 68px;
    z-index: 2;
  }
`,rt=()=>{const i=d(D),r=d(k),n=g();return l.useEffect(()=>{n(de(i)),n(M({selectedFilters:r,TOKEN:i}))},[n,r]),e.jsxs(Xe,{children:[e.jsxs(Ze,{children:[e.jsxs(Je,{children:[e.jsx(ce,{title:"Products"}),e.jsx(Ke,{})]}),e.jsx(Oe,{})]}),e.jsx(He,{})]})};export{rt as default};
