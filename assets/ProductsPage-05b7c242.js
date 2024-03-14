import{u as t,A as K,B as y,b as G,j as e,W as J,J as Q,K as X,x as l,M as Z,Q as H,T as ee,S as te,U as ie,V as oe,X as re,Y as ne,Z as ae,r as h,a as C,k as d,F as se,$ as de,p as S,m as ce,h as le,a0 as k,a1 as x,a2 as pe,a3 as he,a4 as xe,L as z}from"./index-e38bf760.js";import{T as ge}from"./TitlePage-f2d178d7.js";import{c as me,b as ue}from"./index.esm-b3f3cfd0.js";import fe from"./ErrorPage-7e460ce6.js";import"./index-dc10aa49.js";const we=t.div`
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
`,je=t(K)`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
`,ve=t(y)`
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
`,ke=t(y)`
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
`,ze=t.div`
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
`,I=t.svg`
  background-color: transparent;
`,We=({Calories:i,onClose:o,Background:r})=>{const a=G(),c=()=>{a("/diary")};return e.jsx(J,{onClick:r,children:e.jsxs(Q,{children:[e.jsx(X,{onClick:o,children:e.jsx(I,{width:"13",height:"13",children:e.jsx("use",{href:l+"#icon-close-white"})})}),e.jsxs(Z,{children:[e.jsx(H,{}),e.jsx(ee,{children:"Well done"}),e.jsxs(te,{children:["Calories: ",e.jsx(ie,{children:i})]}),e.jsx(oe,{onClick:o,children:"Next product"}),e.jsxs(re,{onClick:c,children:[e.jsx(ne,{children:" To the diary"}),e.jsx(ae,{children:e.jsx("use",{href:l+"#icon-next",width:"25",height:"25"})})]})]})]})})},Pe=({onClose:i,product:o})=>{const[r,a]=h.useState(!1),[c,n]=h.useState(!0),[u,$]=h.useState(0),N=C(),B=d(s=>s.diary.error),A=o._id,E=o.title,O=o.calories;document.addEventListener("keydown",function(s){s.key==="Escape"&&i()});const R=me().shape({amount:ue().min(1,"Amount must be at least 1").required("Amount is required")}),F=s=>{s.target===s.currentTarget&&(a(!1),n(!1),i())},V=s=>{const g=s.target.value.trim();if(!isNaN(g)&&g!==""){const f=parseFloat(s.target.value),w=parseFloat(O),b=f*w/100;return $(b.toFixed(2))}},U=async(s,{resetForm:g})=>{function f(){const p=new Date,j=String(p.getDate()).padStart(2,"0"),_=String(p.getMonth()+1).padStart(2,"0"),q=p.getFullYear();return`${j}-${_}-${q}`}const w=f(),b=s.amount;try{await R.validate(s,{abortEarly:!1});const j=await N(de({date:w,products:{productID:A,amount:b,calories:u}}));if(B!==null){S.Notify.failure("Sorry, something went wrong. Try again");return}j.meta.requestStatus==="fulfilled"&&(S.Notify.success("Data added successfully"),a(!0),n(!1),g())}catch(p){console.error("Message:",p.errors[0])}},Y=()=>{a(!1),n(!0)};return e.jsx(e.Fragment,{children:e.jsx(se,{initialValues:{amount:""},onSubmit:U,children:e.jsxs(e.Fragment,{children:[c&&e.jsx(je,{onClick:F,children:e.jsxs(we,{children:[e.jsx(Se,{onClick:i,children:e.jsx(I,{width:"13",height:"13",children:e.jsx("use",{href:l+"#icon-close-white"})})}),e.jsxs(be,{children:[e.jsxs(ye,{children:[e.jsx(ve,{id:"product",name:"product",placeholder:E,readOnly:!0}),e.jsx(De,{children:"grams"}),e.jsx(y,{as:ke,id:"amount",name:"amount",type:"number",onBlur:V})]}),e.jsxs(Ce,{children:["Calories: ",e.jsx(Fe,{children:u})]}),e.jsxs(ze,{children:[e.jsx(D,{type:"submit",children:"Add to diary"}),e.jsx(D,{onClick:i,children:"Cancel"})]})]})]})}),r&&e.jsx(We,{Calories:u,onClose:i,toFormModal:Y,Background:F})]})})})},Le=t.li`
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
`,Ie=t.div`
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
`,$e=t.div`
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
`,P=t.p`
  margin-left: 8px;
  line-height: 1.5;
`,Oe=({product:i})=>{const o=d(ce).blood,[r,a]=h.useState(!1),c=()=>{a(!0),document.body.classList.add("no-scroll")},n=()=>{a(!1),document.body.classList.remove("no-scroll")};return e.jsxs(e.Fragment,{children:[e.jsxs(Le,{children:[e.jsxs(Me,{children:[e.jsx(Ie,{children:e.jsx("p",{children:"diet"})}),e.jsxs(Te,{children:[i.groupBloodNotAllowed[o]?e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${l}#icon-circle-green`})}),e.jsx(P,{children:"Recommended"})]}):e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${l}#icon-circle-red`})}),e.jsx(P,{children:"Not recommended"})]}),e.jsxs(Ee,{type:"button",onClick:c,children:[e.jsx("p",{children:"Add"}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${l}#icon-next`,style:{stroke:le.orange},width:"16"})})]})]})]}),e.jsxs(e.Fragment,{children:[e.jsxs($e,{children:[e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${l}#icon-man-run`})}),e.jsx(Ne,{children:k(i.title)})]}),e.jsxs(Be,{children:[e.jsx(v,{children:"Calories:"}),e.jsx(W,{children:i.calories}),e.jsx(v,{children:"Category:"}),e.jsx(Ae,{children:k(i.category)}),e.jsx(v,{children:"Weight:"}),e.jsx(W,{children:i.weight})]})]})]}),r&&e.jsx(Pe,{onClose:n,product:i})]})},Re=t.div`
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
`,Ue=t.div`
  width: 335px;
  margin-top: 24px;
  font-size: 14px;
  color: var(--more-light-grey-color);

  @media screen and (min-width: 768px) {
    width: 580px;
    font-size: 16px;
    margin-top: 100px;
  }
`,L=t.span`
  color: var(--orange-color);
`,Ye=i=>i.products.items,m=i=>i.filters,_e=i=>i.categories.items,qe=i=>i.categories.isLoading,Ke=i=>i.products.isLoading,Ge=i=>i.products.error,Je=()=>{const i=d(Ye);return e.jsx(Re,{children:i.length===0?e.jsxs(Ue,{children:[e.jsxs("p",{children:[e.jsx(L,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),e.jsx(L,{children:"Try changing the search parameters."})]}):e.jsx(Ve,{children:i.map(o=>e.jsx(Oe,{product:o,id:o._id},o._id))})})},Qe=t.div`
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
`,Xe=t.div`
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
`,Ze=t.input`
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
`,He=t.button`
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
`,T=t.option`
  background-color: #1c1c1c;
  color: var(--white-color);
  &:hover,
  &:focus {
    background-color: #1c1c1c;
  }
`,et=t.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
`,tt=t.p`
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
`;let it=(i=21)=>crypto.getRandomValues(new Uint8Array(i)).reduce((o,r)=>(r&=63,r<36?o+=r.toString(36):r<62?o+=(r-26).toString(36).toUpperCase():r>62?o+="-":o+="_",o),"");const ot=()=>{const i=C(),o=d(_e),r=d(m).title,a=d(m).category,c=d(m).filter;return e.jsxs(Qe,{children:[e.jsxs(Xe,{children:[e.jsx(Ze,{type:"text",name:"title",value:r,placeholder:"Search",onChange:n=>{i(x({title:n.target.value.trim()}))}}),r.length>0&&e.jsx(He,{onClick:()=>{i(x({title:""}))},children:e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${l}#icon-close`})})}),e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${l}#icon-search`})})]}),e.jsxs(et,{children:[e.jsx(tt,{children:"Filters"}),e.jsxs(M,{name:"category",value:a,onChange:n=>{n.target.value==="Categories"?i(x({category:""})):i(x({category:n.target.value}))},children:[e.jsx(T,{defaultChecked:!0,children:"Categories"}),o.map(n=>e.jsx(T,{value:n,children:k(n)},it()))]}),e.jsxs(M,{name:"filter",value:c,onChange:n=>i(x({filter:n.target.value})),children:[e.jsx("option",{defaultChecked:!0,children:"All"}),e.jsx("option",{children:"Recomended"}),e.jsx("option",{children:"Not recomended"})]})]})]})},rt="/DreamTeam/assets/products-background-meal-a8b7a50b.jpg",nt="/DreamTeam/assets/products-background-meal.@2x-7c68c962.jpg",at=t.div`
  @media screen and (min-width: 1440px) {
    position: relative;
  }
`,st=t.div`
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
`,dt=t.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    background-size: 100%;
    background-image: url(${rt});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${nt});
    }

    width: 428px;
    height: 716px;
  }
`,ct=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    position: absolute;
    left: 96px;
    top: 68px;
    z-index: 2;
  }
`,lt=t.div`
  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 850px;
  }
`,ut=()=>{const i=d(pe),o=d(m),r=C();h.useEffect(()=>{r(he(i))},[r]),h.useEffect(()=>{r(xe({selectedFilters:o,TOKEN:i}))},[r,o]);const a=d(qe),c=d(Ke),n=d(Ge);return e.jsxs(at,{children:[a?e.jsx(z,{}):e.jsxs(st,{children:[e.jsxs(ct,{children:[e.jsx(ge,{title:"Products"}),e.jsx(ot,{})]}),c&&!n?e.jsx(lt,{children:e.jsx(z,{})}):e.jsx(Je,{})]}),n&&e.jsx(fe,{}),e.jsx(dt,{})]})};export{ut as default};
