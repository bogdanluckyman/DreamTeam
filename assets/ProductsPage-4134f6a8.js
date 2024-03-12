import{u as t,A as _,B as C,c as K,j as e,W as G,J,K as Q,M as X,Q as Z,T as H,S as ee,U as te,V as ie,X as re,Y as oe,Z as ne,r as x,b as F,m as d,F as ae,$ as se,q as W,n as de,x as p,i as ce,a0 as y,a1 as h,a2 as le,a3 as pe,a4 as he,L as xe}from"./index-5be81b31.js";import{T as ge}from"./TitlePage-b218afb2.js";import{c as me,b as ue}from"./index.esm-ae36520e.js";import fe from"./ErrorPage-eb0967d1.js";import"./index-fb1f895a.js";const be=t.div`
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
`,we=t.div`
  @media screen and (min-width: 375px) {
    padding: 48px 24px;
  }
  @media screen and (min-width: 768px) {
    padding: 48px 32px;
  }
`,je=t(_)`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
`,ve=t(C)`
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
`,ke=t(C)`
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
`,ye=t.div`
  display: flex;
  gap: 16px;
  @media screen and (min-width: 375px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,Ce=t.p`
  font-weight: 400;
  font-size: 12px;
  color: rgba(239, 237, 232, 0.4);
  margin-top: 16px;
  margin-bottom: 0;
`,Fe=t.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #efede8;
`,Se=t.button`
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
`;const We=t.label`
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
`,$=t.svg`
  background-color: transparent;
`,ze=({Calories:i,onClose:r,Background:o})=>{const c=K(),s=()=>{c("/diary")};return e.jsx(G,{onClick:o,children:e.jsxs(J,{children:[e.jsx(Q,{onClick:r,children:e.jsx($,{width:"13",height:"13",children:e.jsx("use",{href:"/src/img/symbol-defs.svg#icon-close-white"})})}),e.jsxs(X,{children:[e.jsx(Z,{}),e.jsx(H,{children:"Well done"}),e.jsxs(ee,{children:["Calories: ",e.jsx(te,{children:i})]}),e.jsx(ie,{onClick:r,children:"Next product"}),e.jsxs(re,{onClick:s,children:[e.jsx(oe,{children:" To the diary"}),e.jsx(ne,{children:e.jsx("use",{href:"/src/img/symbol-defs.svg#icon-next",width:"25",height:"25"})})]})]})]})})},Pe=({onClose:i,product:r,date:o})=>{const[c,s]=x.useState(!1),[n,b]=x.useState(!0),[w,I]=x.useState(0),N=F(),S=d(a=>a.diary.error);d(a=>a.diary.isLoading);const B=r._id,A=r.title,E=r.calories;document.addEventListener("keydown",function(a){a.key==="Escape"&&i()});const R=me().shape({amount:ue().min(1,"Amount must be at least 1").required("Amount is required")}),D=a=>{a.target===a.currentTarget&&(s(!1),b(!1),i())},O=a=>{const g=a.target.value.trim();if(!isNaN(g)&&g!==""){const j=parseFloat(a.target.value),m=parseFloat(E),v=j*m/100;return I(v.toFixed(2))}},V=async(a,{resetForm:g})=>{function j(){const l=new Date,u=String(l.getDate()).padStart(2,"0"),U=String(l.getMonth()+1).padStart(2,"0"),Y=l.getFullYear();return`${u}-${U}-${Y}`}const m=j();console.log(m);const v=a.amount;try{await R.validate(a,{abortEarly:!1});const l={date:m,products:{productID:B,amount:v,calories:w}};console.log(S);const u=await N(se(l));if(console.log(u.meta.requestStatus),S!==null){W.Notify.failure("Sorry, something went wrong. Try again");return}u.meta.requestStatus==="fulfilled"&&(W.Notify.success("Data added successfully"),s(!0),b(!1),g())}catch(l){console.error("Message:",l.errors[0])}},q=()=>{s(!1),b(!0)};return e.jsx(e.Fragment,{children:e.jsx(ae,{initialValues:{amount:""},onSubmit:V,children:e.jsxs(e.Fragment,{children:[n&&e.jsx(je,{onClick:D,children:e.jsxs(be,{children:[e.jsx(Se,{onClick:i,children:e.jsx($,{width:"13",height:"13",children:e.jsx("use",{href:"/src/img/symbol-defs.svg#icon-close-white"})})}),e.jsxs(we,{children:[e.jsxs(ye,{children:[e.jsx(ve,{id:"product",name:"product",placeholder:A,readOnly:!0}),e.jsx(We,{children:"grams"}),e.jsx(C,{as:ke,id:"amount",name:"amount",type:"number",onBlur:O})]}),e.jsxs(Ce,{children:["Calories: ",e.jsx(Fe,{children:w})]}),e.jsxs(De,{children:[e.jsx(z,{type:"submit",children:"Add to diary"}),e.jsx(z,{onClick:i,children:"Cancel"})]})]})]})}),c&&e.jsx(ze,{Calories:w,onClose:i,toFormModal:q,Background:D})]})})})},Me=t.li`
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
`,Te=t.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
  }
`,Le=t.div`
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
`,Ne=t.h3`
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
`,Be=t.dl`
  display: flex;
  font-size: 12px;
`,k=t.dt`
  line-height: 1.5;

  color: rgba(239, 237, 232, 0.4);
  margin-right: 4px;
`,P=t.dd`
  color: var(--white-color);
  line-height: 1.5;

  &:not(:last-child) {
    margin-right: 16px;
  }
`,Ae=t.dd`
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
`,Ee=t.button`
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
`,M=t.p`
  margin-left: 8px;
  line-height: 1.5;
`,Re=({product:i})=>{const r=d(de).blood,[o,c]=x.useState(!1),s=()=>{c(!0)},n=()=>{c(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Me,{children:[e.jsxs(Te,{children:[e.jsx($e,{children:e.jsx("p",{children:"diet"})}),e.jsxs(Le,{children:[i.groupBloodNotAllowed[r]?e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${p}#icon-circle-green`})}),e.jsx(M,{children:"Recommended"})]}):e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${p}#icon-circle-red`})}),e.jsx(M,{children:"Not recommended"})]}),e.jsxs(Ee,{type:"button",onClick:s,children:[e.jsx("p",{children:"Add"}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${p}#icon-next`,style:{stroke:ce.orange},width:"16"})})]})]})]}),e.jsxs(e.Fragment,{children:[e.jsxs(Ie,{children:[e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${p}#icon-man-run`})}),e.jsx(Ne,{children:y(i.title)})]}),e.jsxs(Be,{children:[e.jsx(k,{children:"Calories:"}),e.jsx(P,{children:i.calories}),e.jsx(k,{children:"Category:"}),e.jsx(Ae,{children:y(i.category)}),e.jsx(k,{children:"Weight:"}),e.jsx(P,{children:i.weight})]})]})]}),o&&e.jsx(Pe,{onClose:n,date:"06-03-2024",product:i})]})},Oe=t.div`
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
`,Ve=t.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
  }
`,qe=t.div`
  width: 335px;
  margin-top: 24px;
  font-size: 14px;
  color: var(--more-light-grey-color);

  @media screen and (min-width: 768px) {
    width: 580px;
    font-size: 16px;
    margin-top: 100px;
  }
`,T=t.span`
  color: var(--orange-color);
`,Ue=i=>i.products.items,f=i=>i.filters,Ye=i=>i.categories.items,_e=i=>i.products.isLoading,Ke=i=>i.products.error,Ge=()=>{const i=d(Ue);return e.jsx(Oe,{children:i.length===0?e.jsxs(qe,{children:[e.jsxs("p",{children:[e.jsx(T,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),e.jsx(T,{children:"Try changing the search parameters."})]}):e.jsx(Ve,{children:i.map(r=>e.jsx(Re,{product:r,id:r._id},r._id))})})},Je=t.div`
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
`,Qe=t.div`
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
`,Xe=t.input`
  font-size: 14px;
  color: var(--white-color);
  background-color: inherit;
  border: none;
  padding: 0;

  &:hover,
  &:focus {
    outline: 0;
  }
`,Ze=t.button`
  padding: 0;
  margin-right: 8px;
  margin-left: auto;
  background-color: var(--black-color);
  border: none;
`,L=t.select`
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
`,He=t.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
`;let et=(i=21)=>crypto.getRandomValues(new Uint8Array(i)).reduce((r,o)=>(o&=63,o<36?r+=o.toString(36):o<62?r+=(o-26).toString(36).toUpperCase():o>62?r+="-":r+="_",r),"");const tt=()=>{const i=F(),r=d(Ye),o=d(f).title,c=d(f).category,s=d(f).filter;return e.jsxs(Je,{children:[e.jsxs(Qe,{children:[e.jsx(Xe,{type:"text",name:"title",defaultValue:o,placeholder:"Search",onChange:n=>{i(h({title:n.target.value.trim()}))}}),o.length>0&&e.jsx(Ze,{onClick:n=>{i(h({title:""}))},children:e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${p}#icon-close`})})}),e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${p}#icon-search`})})]}),e.jsxs(He,{children:[e.jsxs(L,{name:"category",value:c,onChange:n=>{n.target.value==="Categories"?i(h({category:""})):i(h({category:n.target.value}))},children:[e.jsx("option",{defaultChecked:!0,children:"Categories"}),r.map(n=>e.jsx("option",{value:n,children:y(n)},et()))]}),e.jsxs(L,{name:"filter",value:s,onChange:n=>i(h({filter:n.target.value})),children:[e.jsx("option",{defaultChecked:!0,children:"All"}),e.jsx("option",{children:"Recomended"}),e.jsx("option",{children:"Not recomended"})]})]})]})},it="/DreamTeam/assets/products-background-meal-a8b7a50b.jpg",rt="/DreamTeam/assets/products-background-meal.@2x-7c68c962.jpg",ot=t.div`
  @media screen and (min-width: 1440px) {
    position: relative;
  }
`,nt=t.div`
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
`,at=t.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    background-size: 100%;
    background-image: url(${it});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${rt});
    }

    width: 428px;
    height: 716px;
  }
`,st=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    position: absolute;
    left: 96px;
    top: 68px;
    z-index: 2;
  }
`,dt=t.div`
  margin-right: auto;
  margin-left: auto;
`,gt=()=>{const i=d(le),r=d(f),o=F();x.useEffect(()=>{o(pe(i)),o(he({selectedFilters:r,TOKEN:i}))},[o,r]);const c=d(_e),s=d(Ke);return e.jsxs(ot,{children:[e.jsxs(nt,{children:[e.jsxs(st,{children:[e.jsx(ge,{title:"Products"}),e.jsx(tt,{})]}),c&&!s?e.jsx(dt,{children:e.jsx(xe,{})}):e.jsx(Ge,{})]}),s&&e.jsx(fe,{}),e.jsx(at,{})]})};export{gt as default};
