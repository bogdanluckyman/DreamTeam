import{u as t,y as U,z as k,b as _,j as e,W as K,H as Y,J as q,K as G,M as H,T as J,Q,S as X,U as Z,V as ee,X as te,Y as re,r as l,a as g,m as d,F as oe,Z as ie,$ as S,n as ne,i as se,a0 as v,a1 as M,a2 as T,a3 as x,a4 as ae}from"./index-ba41261f.js";import{T as de}from"./TitlePage-3376a416.js";import{c as ce,b as le}from"./index.esm-2a20c79a.js";import{s as c}from"./symbol-defs-cffd9f11.js";const pe=t.div`
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
`,he=t.div`
  @media screen and (min-width: 375px) {
    padding: 48px 24px;
  }
  @media screen and (min-width: 768px) {
    padding: 48px 32px;
  }
`,xe=t(U)`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
`,ge=t(k)`
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
`,me=t(k)`
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
`,ue=t.div`
  display: flex;
  gap: 16px;
  @media screen and (min-width: 375px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,fe=t.p`
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
`,be=t.button`
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
`,je=t.div`
  display: flex;
  gap: 14px;

  @media screen and (min-width: 375px) {
    margin-top: 24px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 74px;
  }
`,P=t.button`
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
`;const ve=t.label`
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
`,D=t.svg`
  background-color: transparent;
`,ke=({Calories:r,onClose:o,Background:i})=>{const n=_(),a=()=>{n("/diary")};return e.jsx(K,{onClick:i,children:e.jsxs(Y,{children:[e.jsx(q,{onClick:o,children:e.jsx(D,{width:"13",height:"13",children:e.jsx("use",{href:"/src/img/symbol-defs.svg#icon-close-white"})})}),e.jsxs(G,{children:[e.jsx(H,{}),e.jsx(J,{children:"Well done"}),e.jsxs(Q,{children:["Calories: ",e.jsx(X,{children:r})]}),e.jsx(Z,{onClick:o,children:"Next product"}),e.jsxs(ee,{onClick:a,children:[e.jsx(te,{children:" To the diary"}),e.jsx(re,{children:e.jsx("use",{href:"/src/img/symbol-defs.svg#icon-next",width:"25",height:"25"})})]})]})]})})},ye=({onClose:r,product:o,date:i})=>{const[n,a]=l.useState(!1),[m,u]=l.useState(!0),[f,N]=l.useState(0),$=g(),C=d(s=>s.diary.error),B=o._id,I=o.title,A=o.calories;document.addEventListener("keydown",function(s){s.key==="Escape"&&r()});const E=ce().shape({amount:le().min(1,"Amount must be at least 1").required("Amount is required")}),F=s=>{s.target===s.currentTarget&&(a(!1),u(!1),r())},L=s=>{const h=s.target.value.trim();if(!isNaN(h)&&h!==""){const w=parseFloat(s.target.value),p=parseFloat(A),V=w*p/100;return N(V.toFixed(2))}},O=async(s,{resetForm:h})=>{const w=s.amount;try{await E.validate(s,{abortEarly:!1});const p={date:i,products:{productID:B,amount:w,calories:f}};if(console.log(C),$(ie(p)),C!==null){S.Notify.failure("Sorry, something went wrong. Try again");return}S.Notify.success("Data added successfully"),a(!0),u(!1),h()}catch(p){console.error("Message:",p.errors[0])}},R=()=>{a(!1),u(!0)};return e.jsx(e.Fragment,{children:e.jsx(oe,{initialValues:{amount:""},onSubmit:O,children:e.jsxs(e.Fragment,{children:[m&&e.jsx(xe,{onClick:F,children:e.jsxs(pe,{children:[e.jsx(be,{onClick:r,children:e.jsx(D,{width:"13",height:"13",children:e.jsx("use",{href:"/src/img/symbol-defs.svg#icon-close-white"})})}),e.jsxs(he,{children:[e.jsxs(ue,{children:[e.jsx(ge,{id:"product",name:"product",placeholder:I,readOnly:!0}),e.jsx(ve,{children:"grams"}),e.jsx(k,{as:me,id:"amount",name:"amount",type:"number",onBlur:L})]}),e.jsxs(fe,{children:["Calories: ",e.jsx(we,{children:f})]}),e.jsxs(je,{children:[e.jsx(P,{type:"submit",children:"Add to diary"}),e.jsx(P,{onClick:r,children:"Cancel"})]})]})]})}),n&&e.jsx(ke,{Calories:f,onClose:r,toFormModal:R,Background:F})]})})})},Ce=t.li`
  width: 335px;
  height: 141px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  padding: 16px;
  margin-bottom: 20px;
  font-size: 12px;

  background-color: gba(239, 237, 232, 0.05);

  @media screen and (min-width: 768px) {
    margin: 0;
  }
  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,Fe=t.div`
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
`,Pe=t.div`
  width: 41px;
  height: 24px;
  padding: 5px 8px;

  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(239, 237, 232, 0.05);
`;t.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${r=>r.$status==="true"?"red":"green"};

  }};
`;const ze=t.div`
  display: flex;
  margin-bottom: 8px;
`,We=t.h3`
  font-size: 20px;
  margin-left: 16px;
  margin-bottom: 0;
  color: var(--white-color);
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  overflow-wrap: break-word;
`,Me=t.dl`
  display: flex;
  font-size: 12px;
`,b=t.dt`
  color: rgba(239, 237, 232, 0.4);
  margin-right: 4px;
`,j=t.dd`
  color: var(--white-color);
  &:not(:last-child) {
    margin-right: 16px;
  }
  max-width: 76px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  overflow-wrap: break-word;
`,Te=t.button`
  display: flex;
  width: 48px;
  height: 18px;
  margin-left: 16px;
  padding: 0;
  font-size: 14px;
  color: var(--orange-color);
  background-color: var(--black-color);
  border: none;
`;t.p`
  margin-left: 8px;
`;const De=({product:r})=>{const o=d(ne).blood,[i,n]=l.useState(!1),a=()=>{n(!0)},m=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ce,{children:[e.jsxs(Fe,{children:[e.jsx(Pe,{children:e.jsx("p",{children:"diet"})}),e.jsxs(Se,{children:[r.groupBloodNotAllowed[o]?e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${c}#icon-circle-green`})}),e.jsx("p",{children:"Recommended"})]}):e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${c}#icon-circle-red`})}),e.jsx("p",{children:"Not recommended"})]}),e.jsxs(Te,{type:"button",onClick:a,children:[e.jsx("p",{children:"Add"}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${c}#icon-next`,style:{stroke:se.orange},width:"16"})})]})]})]}),e.jsxs(e.Fragment,{children:[e.jsxs(ze,{children:[e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${c}#icon-man-run`})}),e.jsx(We,{children:v(r.title)})]}),e.jsxs(Me,{children:[e.jsx(b,{children:"Calories:"}),e.jsx(j,{children:r.calories}),e.jsx(b,{children:"Category:"}),e.jsx(j,{children:v(r.category)}),e.jsx(b,{children:"Weight:"}),e.jsx(j,{children:r.weight})]})]})]}),i&&e.jsx(ye,{onClose:m,date:"06-03-2024",product:r})]})},Ne=t.div`
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
  }

`,$e=t.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
  }
`,Be=t.div`
  width: 335px;
  margin-top: 24px;
  font-size: 14px;
  color: var(--more-light-grey-color);

  @media screen and (min-width: 768px) {
    width: 580px;
    font-size: 16px;
    margin-top: 100px;
  }
`,z=t.span`
  color: var(--orange-color);
`,Ie=r=>r.products.items,y=r=>r.filters,Ae=r=>r.categories.items,Ee=()=>{const r=d(M),o=g(),i=d(y);l.useEffect(()=>{o(T({selectedFilters:i,TOKEN:r}))},[i]);const n=d(Ie);return e.jsx(Ne,{children:n.length===0?e.jsxs(Be,{children:[e.jsxs("p",{children:[e.jsx(z,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),e.jsx(z,{children:"Try changing the search parameters."})]}):e.jsx($e,{children:n.map(a=>e.jsx(De,{product:a,id:a._id},a._id))})})},Le=t.div`
  width: 335px;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 664px;

    display: flex;
    margin-bottom: 32px;
  }
`,Oe=t.div`
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
`,Re=t.input`
  font-size: 14px;
  color: var(--white-color);
  background-color: inherit;
  border: none;
  padding: 0;

  &:hover,
  &:focus {
    outline: 0;
  }
`,Ve=t.button`
  padding: 0;
  margin-right: 8px;
  margin-left: auto;
  background-color: var(--black-color);
  border: none;
`,W=t.select`
  color: var(--white-color);
  background-color: var(--black-color);
  padding: 14px;
  font-size: 14px;
  border: 1px solid var(--more-light-grey-color);
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 16px;
    }
  }

  &:hover,
  &:focus {
    outline: 0;
  }
`,Ue=t.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
`;let _e=(r=21)=>crypto.getRandomValues(new Uint8Array(r)).reduce((o,i)=>(i&=63,i<36?o+=i.toString(36):i<62?o+=(i-26).toString(36).toUpperCase():i>62?o+="-":o+="_",o),"");const Ke=()=>{const r=g(),o=d(Ae),i=d(y).title;return e.jsxs(Le,{children:[e.jsxs(Oe,{children:[e.jsx(Re,{type:"text",name:"title",placeholder:"Search",onChange:n=>{r(x({title:n.target.value.trim()}))}}),i.length>0&&e.jsx(Ve,{onClick:n=>{r(x({title:""}))},children:e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${c}#icon-close`})})}),e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${c}#icon-search`})})]}),e.jsxs(Ue,{children:[e.jsxs(W,{name:"category",onChange:n=>r(x({category:n.target.value})),children:[e.jsx("option",{defaultChecked:!0,children:"Categories"}),o.map(n=>e.jsx("option",{children:v(n)},_e()))]}),e.jsxs(W,{name:"filter",onChange:n=>r(x({filter:n.target.value})),children:[e.jsx("option",{defaultChecked:!0,children:"All"}),e.jsx("option",{children:"Recomended"}),e.jsx("option",{children:"Not recomended"})]})]})]})},Je=()=>{const r=d(M),o=d(y),i=g();return l.useEffect(()=>{i(ae(r)),i(T({selectedFilters:o,TOKEN:r}))},[i,o]),e.jsxs(e.Fragment,{children:[e.jsx(de,{title:"Products"}),e.jsx(Ke,{}),e.jsx(Ee,{})]})};export{Je as default};
