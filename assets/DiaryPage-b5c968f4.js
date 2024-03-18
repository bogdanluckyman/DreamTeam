import{u as d,h as tt,j as t,i as a,r as k,s as S,k as rt,a as ye,m as O,n as Te,o as it,L as Ie,p as nt,q as be,t as ee,v as st,w as ot,x as at}from"./index-efdd0fe0.js";import{i as ct}from"./react-datepicker-cssmodules-7bad96e2.js";import{T as dt}from"./TitlePage-6372751b.js";d.div`
  position: absolute;
  left: -50%;
  top: 90%;
  transform: translate(0%, 0%);
  z-index: 999;
`;d.svg`
  position: absolute;
  top: 14px;
  right: 14px;
`;const ht=d.input`
  width: 128px;
  padding: 14px;
  align-items: center;
  border: none;
  background-color: transparent;
  font-size: 24px;
  line-height: 1.33;
  margin: 0;
  padding: 0;
  color: #efede8;
  font-weight: 700;
  transition: color 0.3s ease;

  @media screen and (max-width: 767px) {
    padding-top: 5px;
    width: 100px;
    font-size: 18px;
    line-height: 1.1;
  }
`;d.button`
  width: 195px;
  color: #ffffff;
  background: inherit;
  border-radius: 8px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  padding: 8px 12px;
  font-size: 16px;
  justify-content: space-around;
  align-items: center;
`;const pt=tt`
 .react-datepicker__wrapper {
    position: relative;
    
  }
  .react-datepicker {
    position: absolute;
    left: -105px;
    top: 50%;
    transform: translate(-15%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;    
    padding: 14px;
    background-color: #ef8964;
    font-family: 'Roboto', sans-serif;
    border-radius: 8px;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 14px;
    margin-bottom: 8px;
    border-top: 1px solid rgba(239, 237, 232, 0.2);
  }
  .react-datepicker__header {
    position: relative;
    background-color: #ef8964;    
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day
    react-datepicker__day--018.react-datepicker__day--selected
    react-datepicker__day--today {
    outline: none;
    border: none;
  }
  .react-datepicker__current-month {
    color: #efede8;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 14px;
  }
  .react-datepicker__day-name {
    margin: 0;
    color: rgba(239, 237, 232, 0.5);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .react-datepicker__day--disabled {
    opacity: 25%;
  }
  .react-datepicker__navigation {
    margin-top: 14px;
    color: white;
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin: 0;
    border-radius: 50%;
    color: #efede8;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    width: 24px;
    height: 24px;
  }
  .react-datepicker__month {
    display: flex;
    gap: 5px;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color: #040404;
    color: #efede8;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: white;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: white;
    color: #ef8964;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: white;
    color: #ef8964;
  }
  .react-datepicker__day--outside-month {
    opacity: 50%;
  }
  .react-datepicker__triangle {
    display: none;
  }
`,lt=({selectedDate:e,setSelectedDate:r})=>{const n=i=>{r(i)};return t.jsx(t.Fragment,{children:t.jsxs("div",{style:{position:"relative"},children:[t.jsx(ct,{selected:e,onChange:i=>{n(i)},customInput:t.jsx(ht,{style:{cursor:"pointer"}}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:i=>i.substr(0,2)}),t.jsx(pt,{})]})})},xt=d.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-bottom: 24px; */

  @media screen and (max-width: 768px) {
    margin-bottom: -10px;
  }
`,ft=d.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;

  &:hover {
    > svg {
      fill: ${a.orange};
    }
  }
`;d.p`
  font-size: 24px;
  line-height: 1.33;
  margin: 0;
  padding: 0;
  color: ${a.white};
  font-weight: 700;
  transition: color 0.3s ease;

  &:hover {
    color: ${a.orange};
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.1;
  }
`;const gt=d.svg`
  width: 20px;
  height: 20px;
  stroke: ${a.orange};

  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,ut=d.div`
  display: flex;
  align-items: center;
  padding: 0;
  /* margin-right: 40px; */
  background-color: transparent;
  gap: 8px;
  border: none;

  @media screen and (max-width: 767px) {
    margin-right: 20px;
    gap: 6px;
  }

  &:hover {
    > svg {
      stroke: ${a.orange};
    }
  }
`,wt=d.button`
  display: flex;
  margin: 0 6px 0 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;

  &:hover {
    > svg {
      fill: ${a.orange};
    }
  }
`,mt=d.svg`
  width: 100%;
  height: 100%;
  fill: ${a.white};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,yt=d.svg`
  width: 100%;
  height: 100%;
  fill: ${a.white};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`,bt=({currentDate:e,setCurrentDate:r,userDateRegistration:n})=>{const[i,s]=k.useState(e),[o,f]=k.useState(!1),p=()=>{const h=new Date(i);h.setDate(h.getDate()-1),r(h),s(h)},l=()=>{const h=new Date(i);h.setDate(h.getDate()+1),r(h),s(h)},u=()=>{f(!1)},c=h=>{s(h),r(h),f(!1)};return t.jsxs(xt,{children:[t.jsxs(ut,{children:[t.jsx(lt,{selectedDate:i,setSelectedDate:c,isOpen:o,onClose:u,setCurrentDate:r,userDateRegistration:n}),t.jsx(gt,{children:t.jsx("use",{href:`${S}#icon-calendar-orange`})})]}),t.jsx(wt,{type:"button",onClick:p,children:t.jsx(mt,{children:t.jsx("use",{href:`${S}#icon-chevron-left`})})}),t.jsx(ft,{type:"button",onClick:l,children:t.jsx(yt,{children:t.jsx("use",{href:`${S}#icon-chevron-right`})})})]})};function X(){return X=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},X.apply(this,arguments)}function jt(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function vt(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var kt=function(){function e(n){var i=this;this._insertTag=function(s){var o;i.tags.length===0?i.insertionPoint?o=i.insertionPoint.nextSibling:i.prepend?o=i.container.firstChild:o=i.before:o=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(s,o),i.tags.push(s)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(i){i.forEach(this._insertTag)},r.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(vt(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var o=jt(s);try{o.insertRule(i,o.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(i));this.ctr++},r.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},e}(),z="-ms-",de="-moz-",w="-webkit-",Pe="comm",je="rule",ve="decl",$t="@import",Le="@keyframes",St="@layer",Dt=Math.abs,fe=String.fromCharCode,_t=Object.assign;function Ct(e,r){return _(e,0)^45?(((r<<2^_(e,0))<<2^_(e,1))<<2^_(e,2))<<2^_(e,3):0}function Me(e){return e.trim()}function zt(e,r){return(e=r.exec(e))?e[0]:e}function m(e,r,n){return e.replace(r,n)}function we(e,r){return e.indexOf(r)}function _(e,r){return e.charCodeAt(r)|0}function te(e,r,n){return e.slice(r,n)}function M(e){return e.length}function ke(e){return e.length}function se(e,r){return r.push(e),e}function Et(e,r){return e.map(r).join("")}var ge=1,V=1,Re=0,A=0,D=0,Z="";function ue(e,r,n,i,s,o,f){return{value:e,root:r,parent:n,type:i,props:s,children:o,line:ge,column:V,length:f,return:""}}function J(e,r){return _t(ue("",null,null,"",null,null,0),e,{length:-e.length},r)}function At(){return D}function Tt(){return D=A>0?_(Z,--A):0,V--,D===10&&(V=1,ge--),D}function T(){return D=A<Re?_(Z,A++):0,V++,D===10&&(V=1,ge++),D}function R(){return _(Z,A)}function oe(){return A}function ie(e,r){return te(Z,e,r)}function re(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Oe(e){return ge=V=1,Re=M(Z=e),A=0,[]}function Be(e){return Z="",e}function ae(e){return Me(ie(A-1,me(e===91?e+2:e===40?e+1:e)))}function It(e){for(;(D=R())&&D<33;)T();return re(e)>2||re(D)>3?"":" "}function Pt(e,r){for(;--r&&T()&&!(D<48||D>102||D>57&&D<65||D>70&&D<97););return ie(e,oe()+(r<6&&R()==32&&T()==32))}function me(e){for(;T();)switch(D){case e:return A;case 34:case 39:e!==34&&e!==39&&me(D);break;case 40:e===41&&me(e);break;case 92:T();break}return A}function Lt(e,r){for(;T()&&e+D!==47+10;)if(e+D===42+42&&R()===47)break;return"/*"+ie(r,A-1)+"*"+fe(e===47?e:T())}function Mt(e){for(;!re(R());)T();return ie(e,A)}function Rt(e){return Be(ce("",null,null,null,[""],e=Oe(e),0,[0],e))}function ce(e,r,n,i,s,o,f,p,l){for(var u=0,c=0,h=f,$=0,x=0,y=0,g=1,j=1,b=1,C=0,P="",ne=s,B=o,L=i,v=P;j;)switch(y=C,C=T()){case 40:if(y!=108&&_(v,h-1)==58){we(v+=m(ae(C),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:v+=ae(C);break;case 9:case 10:case 13:case 32:v+=It(y);break;case 92:v+=Pt(oe()-1,7);continue;case 47:switch(R()){case 42:case 47:se(Ot(Lt(T(),oe()),r,n),l);break;default:v+="/"}break;case 123*g:p[u++]=M(v)*b;case 125*g:case 59:case 0:switch(C){case 0:case 125:j=0;case 59+c:b==-1&&(v=m(v,/\f/g,"")),x>0&&M(v)-h&&se(x>32?De(v+";",i,n,h-1):De(m(v," ","")+";",i,n,h-2),l);break;case 59:v+=";";default:if(se(L=Se(v,r,n,u,c,s,p,P,ne=[],B=[],h),o),C===123)if(c===0)ce(v,r,L,L,ne,o,h,p,B);else switch($===99&&_(v,3)===110?100:$){case 100:case 108:case 109:case 115:ce(e,L,L,i&&se(Se(e,L,L,0,0,s,p,P,s,ne=[],h),B),s,B,h,p,i?ne:B);break;default:ce(v,L,L,L,[""],B,0,p,B)}}u=c=x=0,g=b=1,P=v="",h=f;break;case 58:h=1+M(v),x=y;default:if(g<1){if(C==123)--g;else if(C==125&&g++==0&&Tt()==125)continue}switch(v+=fe(C),C*g){case 38:b=c>0?1:(v+="\f",-1);break;case 44:p[u++]=(M(v)-1)*b,b=1;break;case 64:R()===45&&(v+=ae(T())),$=R(),c=h=M(P=v+=Mt(oe())),C++;break;case 45:y===45&&M(v)==2&&(g=0)}}return o}function Se(e,r,n,i,s,o,f,p,l,u,c){for(var h=s-1,$=s===0?o:[""],x=ke($),y=0,g=0,j=0;y<i;++y)for(var b=0,C=te(e,h+1,h=Dt(g=f[y])),P=e;b<x;++b)(P=Me(g>0?$[b]+" "+C:m(C,/&\f/g,$[b])))&&(l[j++]=P);return ue(e,r,n,s===0?je:p,l,u,c)}function Ot(e,r,n){return ue(e,r,n,Pe,fe(At()),te(e,2,-2),0)}function De(e,r,n,i){return ue(e,r,n,ve,te(e,0,i),te(e,i+1,-1),i)}function G(e,r){for(var n="",i=ke(e),s=0;s<i;s++)n+=r(e[s],s,e,r)||"";return n}function Bt(e,r,n,i){switch(e.type){case St:if(e.children.length)break;case $t:case ve:return e.return=e.return||e.value;case Pe:return"";case Le:return e.return=e.value+"{"+G(e.children,i)+"}";case je:e.value=e.props.join(",")}return M(n=G(e.children,i))?e.return=e.value+"{"+n+"}":""}function Nt(e){var r=ke(e);return function(n,i,s,o){for(var f="",p=0;p<r;p++)f+=e[p](n,i,s,o)||"";return f}}function Wt(e){return function(r){r.root||(r=r.return)&&e(r)}}var Ht=function(r,n,i){for(var s=0,o=0;s=o,o=R(),s===38&&o===12&&(n[i]=1),!re(o);)T();return ie(r,A)},Ut=function(r,n){var i=-1,s=44;do switch(re(s)){case 0:s===38&&R()===12&&(n[i]=1),r[i]+=Ht(A-1,n,i);break;case 2:r[i]+=ae(s);break;case 4:if(s===44){r[++i]=R()===58?"&\f":"",n[i]=r[i].length;break}default:r[i]+=fe(s)}while(s=T());return r},Yt=function(r,n){return Be(Ut(Oe(r),n))},_e=new WeakMap,Ft=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var n=r.value,i=r.parent,s=r.column===i.column&&r.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(r.props.length===1&&n.charCodeAt(0)!==58&&!_e.get(i))&&!s){_e.set(r,!0);for(var o=[],f=Yt(n,o),p=i.props,l=0,u=0;l<f.length;l++)for(var c=0;c<p.length;c++,u++)r.props[u]=o[l]?f[l].replace(/&\f/g,p[c]):p[c]+" "+f[l]}}},Qt=function(r){if(r.type==="decl"){var n=r.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(r.return="",r.value="")}};function Ne(e,r){switch(Ct(e,r)){case 5103:return w+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return w+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return w+e+de+e+z+e+e;case 6828:case 4268:return w+e+z+e+e;case 6165:return w+e+z+"flex-"+e+e;case 5187:return w+e+m(e,/(\w+).+(:[^]+)/,w+"box-$1$2"+z+"flex-$1$2")+e;case 5443:return w+e+z+"flex-item-"+m(e,/flex-|-self/,"")+e;case 4675:return w+e+z+"flex-line-pack"+m(e,/align-content|flex-|-self/,"")+e;case 5548:return w+e+z+m(e,"shrink","negative")+e;case 5292:return w+e+z+m(e,"basis","preferred-size")+e;case 6060:return w+"box-"+m(e,"-grow","")+w+e+z+m(e,"grow","positive")+e;case 4554:return w+m(e,/([^-])(transform)/g,"$1"+w+"$2")+e;case 6187:return m(m(m(e,/(zoom-|grab)/,w+"$1"),/(image-set)/,w+"$1"),e,"")+e;case 5495:case 3959:return m(e,/(image-set\([^]*)/,w+"$1$`$1");case 4968:return m(m(e,/(.+:)(flex-)?(.*)/,w+"box-pack:$3"+z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+w+e+e;case 4095:case 3583:case 4068:case 2532:return m(e,/(.+)-inline(.+)/,w+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(M(e)-1-r>6)switch(_(e,r+1)){case 109:if(_(e,r+4)!==45)break;case 102:return m(e,/(.+:)(.+)-([^]+)/,"$1"+w+"$2-$3$1"+de+(_(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~we(e,"stretch")?Ne(m(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(_(e,r+1)!==115)break;case 6444:switch(_(e,M(e)-3-(~we(e,"!important")&&10))){case 107:return m(e,":",":"+w)+e;case 101:return m(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+w+(_(e,14)===45?"inline-":"")+"box$3$1"+w+"$2$3$1"+z+"$2box$3")+e}break;case 5936:switch(_(e,r+11)){case 114:return w+e+z+m(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return w+e+z+m(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return w+e+z+m(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return w+e+z+e+e}return e}var qt=function(r,n,i,s){if(r.length>-1&&!r.return)switch(r.type){case ve:r.return=Ne(r.value,r.length);break;case Le:return G([J(r,{value:m(r.value,"@","@"+w)})],s);case je:if(r.length)return Et(r.props,function(o){switch(zt(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return G([J(r,{props:[m(o,/:(read-\w+)/,":"+de+"$1")]})],s);case"::placeholder":return G([J(r,{props:[m(o,/:(plac\w+)/,":"+w+"input-$1")]}),J(r,{props:[m(o,/:(plac\w+)/,":"+de+"$1")]}),J(r,{props:[m(o,/:(plac\w+)/,z+"input-$1")]})],s)}return""})}},Kt=[qt],Gt=function(r){var n=r.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(g){var j=g.getAttribute("data-emotion");j.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var s=r.stylisPlugins||Kt,o={},f,p=[];f=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var j=g.getAttribute("data-emotion").split(" "),b=1;b<j.length;b++)o[j[b]]=!0;p.push(g)});var l,u=[Ft,Qt];{var c,h=[Bt,Wt(function(g){c.insert(g)})],$=Nt(u.concat(s,h)),x=function(j){return G(Rt(j),$)};l=function(j,b,C,P){c=C,x(j?j+"{"+b.styles+"}":b.styles),P&&(y.inserted[b.name]=!0)}}var y={key:n,sheet:new kt({key:n,container:f,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:o,registered:{},insert:l};return y.sheet.hydrate(p),y},Vt=k.createContext(typeof HTMLElement<"u"?Gt({key:"css"}):null);Vt.Provider;var Zt=k.createContext({});function Jt(e){return Object.keys(e).length===0}function Xt(e=null){const r=k.useContext(Zt);return!r||Jt(r)?e:r}function We(e,r){const n=X({},r);return Object.keys(e).forEach(i=>{if(i.toString().match(/^(components|slots)$/))n[i]=X({},e[i],n[i]);else if(i.toString().match(/^(componentsProps|slotProps)$/)){const s=e[i]||{},o=r[i];n[i]={},!o||!Object.keys(o)?n[i]=s:!s||!Object.keys(s)?n[i]=o:(n[i]=X({},o),Object.keys(s).forEach(f=>{n[i][f]=We(s[f],o[f])}))}else n[i]===void 0&&(n[i]=e[i])}),n}function er(e){const{theme:r,name:n,props:i}=e;return!r||!r.components||!r.components[n]||!r.components[n].defaultProps?i:We(r.components[n].defaultProps,i)}const tr=typeof window<"u"?k.useLayoutEffect:k.useEffect,rr=tr;function ir(e,r,n,i,s){const[o,f]=k.useState(()=>s&&n?n(e).matches:i?i(e).matches:r);return rr(()=>{let p=!0;if(!n)return;const l=n(e),u=()=>{p&&f(l.matches)};return u(),l.addListener(u),()=>{p=!1,l.removeListener(u)}},[e,n]),o}const He=rt["useSyncExternalStore"];function nr(e,r,n,i,s){const o=k.useCallback(()=>r,[r]),f=k.useMemo(()=>{if(s&&n)return()=>n(e).matches;if(i!==null){const{matches:c}=i(e);return()=>c}return o},[o,e,i,s,n]),[p,l]=k.useMemo(()=>{if(n===null)return[o,()=>()=>{}];const c=n(e);return[()=>c.matches,h=>(c.addListener(h),()=>{c.removeListener(h)})]},[o,n,e]);return He(l,p,f)}function Ue(e,r={}){const n=Xt(),i=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:s=!1,matchMedia:o=i?window.matchMedia:null,ssrMatchMedia:f=null,noSsr:p=!1}=er({name:"MuiUseMediaQuery",props:r,theme:n});let l=typeof e=="function"?e(n):e;return l=l.replace(/^@media( ?)/m,""),(He!==void 0?nr:ir)(l,s,o,f,p)}const Ye=d.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 16px;
  height: 335px;
  width: 100%;
  border: 1px solid #efede820;
  border-radius: 12px;
  background-color: #efede80d;

  @media (min-width: 768px) {
    gap: 16px;
    height: 236px;
    width: 704px;
  }

  @media (min-width: 1440px) {
    width: 826px;
  }

  @media screen and (max-width: 768px) {
    max-height: 335px;
  }
`,Fe=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Qe=d.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,qe=d.div`
  &:hover span {
    color: ${a.orange};
  }
`,Ke=d.span`
color: ${a.orange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Ge=d.p`
  color: #efede84d;
  font-size: 14px;
  line-height: 1.2857;
  text-align: center;
  margin-top: 125px;

  @media (min-width: 768px) {
    margin-top: 65px;
    font-size: 16px;
    line-height: 1.5;
  }
`,he=d.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;

  @media screen and (min-width: 375px) {
    width: 297px;
  }

  @media screen and (min-width: 768px) {
    width: 656px;
    height: 234px;
  }

  @media screen and (min-width: 1440px) {
    width: 762px;
  }
`,pe=d.div`
  overflow: auto;

  @media screen and (min-width: 768px) {
    height: 138px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: rgba(239, 237, 232, 0.1);
  }

  @media screen and (max-width: 768px) {
    height: 285px;
  }
`,sr=d.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`,H=d.li`
    color: ${a.orange};

  font-size: 12px;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    &:first-of-type {
      width: 204px;
    }

    &:nth-of-type(2) {
      width: 128px;
    }

    &:nth-of-type(3) {
      width: 90px;
    }

    &:nth-of-type(4) {
      width: 90px;
    }

    &:nth-of-type(5) {
      width: 80px;
    }

    &:nth-of-type(6) {
      width: 20px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:first-of-type {
      width: 212px;
    }

    &:nth-of-type(2) {
      width: 166px;
    }

    &:nth-of-type(3) {
      width: 105px;
    }

    &:nth-of-type(4) {
      width: 105px;
    }

    &:nth-of-type(5) {
      width: 110px;
    }

    &:nth-of-type(6) {
      width: 20px;
    }
  }
`,Ce=d.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,I=d.li`
  @media screen and (max-width: 375px) {
    width: 100%;

    &:first-of-type {
        color: ${a.orange};

      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      color: ${a.white};
      border-radius: 12px;
      border: 1px solid rgba(239, 237, 232, 0.3);
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }

    &:nth-of-type(3) {
        color: ${a.orange};

      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(4) {
        color: ${a.white};
      border-radius: 12px;
      border: 1px solid rgba(239, 237, 232, 0.3);
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }
  }

  @media screen and (min-width: 375px) {
    width: 290px;

    &:first-of-type {
        color: ${a.orange};

      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
        color: ${a.white};
      border-radius: 12px;
      border: 1 px solid rgba(239, 237, 232, 0.3);
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }

    &:nth-of-type(3) {
        color: ${a.orange};

      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(4) {
        color: ${a.white};
      border-radius: 12px;
      border: 1px solid rgba(239, 237, 232, 0.3);
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }
  }
`,U=d.li`
  @media screen and (min-width: 768px) {
    color: ${a.white};
      border-radius: 12px;
      border: 1px solid rgba(239, 237, 232, 0.3);
    padding: 8px 14px;
    height: 38px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-size: 16px;
    line-height: 1.5;

    &:first-of-type {
      width: 204px;
    }

    &:nth-of-type(2) {
      width: 128px;
    }

    &:nth-of-type(3) {
      width: 90px;
    }

    &:nth-of-type(4) {
      width: 90px;
    }

    &:nth-of-type(5) {
      width: 80px;
    }

    &:nth-of-type(6) {
      width: 20px;
      border: none;
      padding: 0;
    }
  }

  @media screen and (min-width: 1440px) {
    &:first-of-type {
      width: 212px;
    }

    &:nth-of-type(2) {
      width: 166px;
    }

    &:nth-of-type(3) {
      width: 105px;
    }

    &:nth-of-type(4) {
      width: 105px;
    }

    &:nth-of-type(5) {
      width: 110px;
    }

    &:nth-of-type(6) {
      width: 20px;
    }
  }
`,Ve=d.div`
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`,Ze=d.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        color: ${a.orange};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${a.white};
      border-radius: 12px;
      border: 1px solid rgba(239, 237, 232, 0.3);
        font-size: 14px;
        line-height: 1.2857;
        padding: 8px 14px;
        height: 38px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    @media screen and (min-width: 375px) {
      width: 79px;

      &:nth-of-type(2) {
        margin-bottom: 40px;
      }
    }
  }
`,Je=d.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        color: ${a.orange};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${a.white};
      border-radius: 12px;
      border: 1px solid rgba(239, 237, 232, 0.3);
        font-size: 14px;
        line-height: 1.2857;
        padding: 8px 14px;
        height: 38px;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    @media screen and (min-width: 375px) {
      width: 78px;
    }
  }
`,Xe=d.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        color: ${a.orange};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${a.white};
      border-radius: 12px;
      border: 1px solid rgba(239, 237, 232, 0.3);
        font-size: 14px;
        line-height: 1.2857;
        padding: 8px 14px;
        height: 38px;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    @media screen and (min-width: 375px) {
      width: 74px;
    }
  }
`,et=d.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        display: none;
      }

      &:nth-of-type(2) {
        height: 38px;
        border: none;
        padding: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    @media screen and (min-width: 375px) {
      width: 20px;

      &:nth-of-type(1) {
        display: block;
        color: ${a.orange};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        margin-top: 18px;
      }
    }
  }
`,le=d.button`
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0;
  position: relative;

  &:hover {
    > svg {
      stroke: ${a.orange};
    }
  }
`,xe=d.svg`
  stroke: ${a.orange};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;

`,ze=d.span`
  @media screen and (min-width: 320px) {
    color: ${a.white};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,$e=e=>e.diary.error,or=({productsArray:e,date:r})=>{const n=ye(),s=O(Te).blood,o=O($e),f=Ue("(max-width:768px)"),[p,l]=k.useState([]),u=O(x=>x.diary.isLoading);k.useEffect(()=>{l(e)},[e]);const c=x=>typeof x!="string"||x.length===0?"":x[0].toUpperCase()+x.slice(1).toLowerCase();let h;const $=async x=>{try{if((await n(nt(x))).meta.requestStatus==="fulfilled"){const g=p.filter(j=>j._id!==x);l(g),await n(be(r))}ee.Notify.success("Product deleted successfully!",{theme:"light"})}catch(y){console.log(y),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return t.jsxs(Ye,{children:[t.jsxs(Fe,{children:[t.jsx(Qe,{children:"Products"}),t.jsx(qe,{children:t.jsxs(it,{to:{pathname:"/products",search:`?date=${r}`},style:{display:"flex",alignItems:"center"},children:[t.jsx(Ke,{children:"Add product"}),t.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:a.orange},children:t.jsx("use",{href:S+"#icon-arrow-right"})})]})})]}),u?t.jsx(Ie,{}):p&&p.length>0&&!o?f?t.jsx(he,{children:t.jsx(pe,{children:p.map(x=>{var g,j;const y=x.productID.groupBloodNotAllowed[s]?"Yes":"No";return t.jsxs(Ce,{children:[t.jsx(I,{children:"Title"}),t.jsx(I,{children:c((g=x.productID)==null?void 0:g.title)}),t.jsx(I,{children:"Category"}),t.jsx(I,{children:c((j=x.productID)==null?void 0:j.category)}),t.jsxs(Ve,{children:[t.jsxs(Ze,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(I,{children:"Calories"}),t.jsx(I,{children:x.calories})]}),t.jsxs(Je,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(I,{children:"Weight"}),t.jsx(I,{children:x.amount})]}),t.jsxs(Xe,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(I,{children:"Recommend"}),t.jsx(I,{children:t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[t.jsx("svg",{style:{width:"14px",height:"14px"},children:y==="Yes"?t.jsx("use",{href:S+"#icon-bubble",style:{fill:`${a.green}`,stroke:a.green}}):t.jsx("use",{href:S+"#icon-bubble",style:{fill:a.red,stroke:a.red}})}),t.jsx(ze,{children:h})]})})]}),t.jsxs(et,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(I,{children:""}),t.jsx(I,{children:t.jsx(le,{type:"button",onClick:()=>$(x._id),children:t.jsx(xe,{children:t.jsx("use",{href:S+"#icon-trash"})})})})]})]})]},x._id)})})}):t.jsxs(he,{children:[t.jsxs(sr,{children:[t.jsx(H,{children:"Title"}),t.jsx(H,{children:"Category"}),t.jsx(H,{children:"Calories"}),t.jsx(H,{children:"Weight"}),t.jsx(H,{children:"Recommend"}),t.jsx(H,{children:""})]}),t.jsx(pe,{children:p.map(x=>{var g,j,b;const y=(g=x.productID)!=null&&g.groupBloodNotAllowed[s]?h="Yes":h="No";return t.jsxs(Ce,{children:[t.jsx(U,{children:c((j=x.productID)==null?void 0:j.title)}),t.jsx(U,{children:c((b=x.productID)==null?void 0:b.category)}),t.jsx(U,{children:x.calories}),t.jsx(U,{children:x.amount}),t.jsx(U,{children:t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[t.jsx("svg",{style:{width:"14px",height:"14px"},children:y==="Yes"?t.jsx("use",{href:S+"#icon-bubble",style:{fill:a.green,stroke:a.green}}):t.jsx("use",{href:S+"#icon-bubble",style:{fill:a.red,stroke:a.red}})}),t.jsx(ze,{children:h})]})}),t.jsx(U,{children:t.jsx(le,{type:"button",onClick:()=>$(x._id),children:t.jsx(xe,{children:t.jsx("use",{href:S+"#icon-trash"})})})})]},x._id)})})]}):t.jsx(Ge,{children:"Not found products"})]})},ar=d.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
    justify-content: start;
  }
`,N=d.li`
  color: ${a.orange};
  font-size: 12px;
  line-height: 1.5;
  display: block;

  @media screen and (min-width: 768px) {
    &:first-of-type {
      width: 90px;
    }

    &:nth-of-type(2) {
      width: 132px;
    }

    &:nth-of-type(3) {
      width: 128px;
    }

    &:nth-of-type(4) {
      width: 84px;
    }

    &:nth-of-type(5) {
      width: 78px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(6) {
      width: 32px;
    }

    &:nth-of-type(7) {
      width: 20px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:first-of-type {
      width: 115px;
    }

    &:nth-of-type(2) {
      width: 157px;
    }

    &:nth-of-type(3) {
      width: 131px;
    }

    &:nth-of-type(4) {
      width: 106px;
    }

    &:nth-of-type(5) {
      width: 91px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(6) {
      width: 82px;
    }

    &:nth-of-type(7) {
      width: 20px;
    }
  }
`,Ee=d.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,E=d.li`
  @media screen and (max-width: 375px) {
    width: 100%;
    margin-bottom: 8px;

    &:first-of-type {
      color: ${a.orange};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(2) {
      color: ${a.white};
      border-radius: 12px;
      border: 1px solid rgba(239, 237, 232, 0.3);
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(3) {
      color: ${a.orange};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(4) {
      color: ${a.white};
      border-radius: 12px;
      border: 1px solid rgba(239, 237, 232, 0.3);
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(5) {
      color: ${a.orange};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(6) {
      color: ${a.white};
      border-radius: 12px;
      border: 1px solid rgba(239, 237, 232, 0.3);
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  @media screen and (min-width: 375px) {
    width: 290px;

    &:first-of-type {
      color: ${a.orange};
      font-size: 12px;
      line-height: 1.5;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      color: ${a.white};
      border-radius: 12px;
      border: 1px solid rgba(239, 237, 232, 0.3);
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }

    &:nth-of-type(3) {
      color: ${a.orange};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(4) {
        color: ${a.white};
      border-radius: 12px;
      border: 1px solid rgba(239, 237, 232, 0.3);
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }

    &:nth-of-type(5) {
      color: ${a.orange};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(6) {
        color: ${a.white};
      border-radius: 12px;
      border: 1px solid rgba(239, 237, 232, 0.3);
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }
  }
`,W=d.li`
  @media screen and (min-width: 768px) {
    color: ${a.white};
      border-radius: 12px;
      border: 1px solid rgba(239, 237, 232, 0.3);
    padding: 8px 14px;
    height: 38px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-size: 16px;
    line-height: 1.5;

    &:first-of-type {
      width: 90px;
    }

    &:nth-of-type(2) {
      width: 132px;
    }

    &:nth-of-type(3) {
      width: 128px;
    }

    &:nth-of-type(4) {
      width: 84px;
    }

    &:nth-of-type(5) {
      width: 78px;
    }

    &:nth-of-type(6) {
      width: 72px;
    }

    &:nth-of-type(7) {
      width: 20px;
      border: none;
      padding: 0;
    }
  }

  @media screen and (min-width: 1440px) {
    &:first-of-type {
      width: 115px;
    }

    &:nth-of-type(2) {
      width: 157px;
    }

    &:nth-of-type(3) {
      width: 131px;
    }

    &:nth-of-type(4) {
      width: 106px;
    }

    &:nth-of-type(5) {
      width: 91px;
    }

    &:nth-of-type(6) {
      width: 82px;
    }

    &:nth-of-type(7) {
      width: 20px;
    }
  }
`;d.svg`
  stroke: ${a.orange};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;

`;const cr=({exercisesArray:e,date:r})=>{const n=Ue("(max-width:768px)"),i=O($e),s=ye(),[o,f]=k.useState([]),p=O(c=>c.diary.isLoading);k.useEffect(()=>{f(e)},[e]);const l=c=>c.charAt(0).toUpperCase()+c.slice(1).toLowerCase(),u=async c=>{try{if((await s(ot(c))).meta.requestStatus==="fulfilled"){const $=o.filter(x=>x._id!==c);f($),await s(be(r))}ee.Notify.success("Exercise deleted successfully!",{theme:"light"})}catch(h){console.log(h),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return t.jsxs(Ye,{children:[t.jsxs(Fe,{children:[t.jsx(Qe,{children:"Exercises"}),t.jsx(qe,{children:t.jsxs(st,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[t.jsx(Ke,{children:"Add exercises"}),t.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:a.orange},children:t.jsx("use",{href:S+"#icon-arrow-right"})})]})})]}),p?t.jsx(Ie,{}):o&&o.length>0&&!i?n?t.jsx(he,{children:t.jsx(pe,{children:o.map(c=>{var h,$,x,y;return t.jsxs(Ee,{children:[t.jsx(E,{children:"Body Part"}),t.jsx(E,{children:l((h=c.exerciseID)==null?void 0:h.bodyPart)}),t.jsx(E,{children:"Equipment"}),t.jsx(E,{children:l(($=c.exerciseID)==null?void 0:$.equipment)}),t.jsx(E,{children:"Name"}),t.jsx(E,{children:l((x=c.exerciseID)==null?void 0:x.name)}),t.jsxs(Ve,{children:[t.jsxs(Ze,{children:[t.jsx(E,{children:"Target"}),t.jsx(E,{children:l((y=c.exerciseID)==null?void 0:y.target)})]}),t.jsxs(Je,{children:[t.jsx(E,{children:"Burned Calories"}),t.jsx(E,{children:c.calories})]}),t.jsxs(Xe,{children:[t.jsx(E,{children:"Time"}),t.jsx(E,{children:c.time})]}),t.jsxs(et,{children:[t.jsx(E,{children:""}),t.jsx(E,{children:t.jsx(le,{type:"button",onClick:()=>u(c._id),children:t.jsx(xe,{children:t.jsx("use",{href:S+"#icon-trash"})})})})]})]})]},c._id)})})}):t.jsxs(he,{children:[t.jsxs(ar,{children:[t.jsx(N,{children:"Body Part"}),t.jsx(N,{children:"Equipment"}),t.jsx(N,{children:"Name"}),t.jsx(N,{children:"Target"}),t.jsx(N,{children:"Burned Calories"}),t.jsx(N,{children:"Time"}),t.jsx(N,{children:""})]}),t.jsx(pe,{children:o.map(c=>t.jsxs(Ee,{children:[t.jsx(W,{children:l(c.exerciseID.bodyPart)}),t.jsx(W,{children:l(c.exerciseID.equipment)}),t.jsx(W,{children:l(c.exerciseID.name)}),t.jsx(W,{children:l(c.exerciseID.target)}),t.jsx(W,{children:c.calories}),t.jsx(W,{children:c.time}),t.jsx(W,{children:t.jsx(le,{type:"button",onClick:()=>u(c._id),children:t.jsx(xe,{children:t.jsx("use",{href:S+"#icon-trash"})})})})]},c._id))})]}):t.jsx(Ge,{children:"Not found exercises"})]})},dr=d.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,hr=d.ul`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 13px;
  row-gap: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    gap: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 252px;
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 48px;
  }

  > li {
    &:nth-child(1) {
      background-color: ${a.orange};
    }

    &:nth-child(2) {
      background-color: ${a.orange};
    }
  }
`,Y=d.li`
  display: block;
  width: 157px;
  padding: 14px;
  background-color: ${a.black};
  border-radius: 12px;
  border: 1px solid #efede833;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
    height: 96px;
    :not(:last-of-type) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
    padding: 18px;
  }

  &.redBg {
    border: 1px solid #e9101d;
  }

  &.greenBg {
    border: 1px solid #3cbf61;
    background-color: #3cbf80;
  }
`,F=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,Q=d.h2`
  font-size: 12px;
  line-height: 16px;
  color: ${a.white};

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 18px;
  }
`,q=d.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: ${a.white};


  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,pr=d.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,lr=d.div`
  width: 24px;
  height: 24px;
  background-color: ${a.beige};
  border-radius: 50%;
`,K=d.svg`
  width: 20px;
  height: 20px;
  fill: ${a.orangeSecond};
`,xr=d.svg`
  width: 24px;
  height: 24px;
`,fr=d.p`
  font-size: 14px;
  line-height: 18px;
  color: rgba(239, 237, 232, 0.3);

  @media screen and (max-width: 374px) {
    max-width: calc(100% - 72px);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,gr=({bmr:e})=>{const r=O(h=>h.diary.allDiaryInformation),{burnedCalories:n,consumedCalories:i,sportTime:s}=r||0,[o,f]=k.useState(!1),[p,l]=k.useState(!1),u=Math.round(i-n,0);O($e);function c(){const h=2200-i;return console.log(i),h>2200?2200-h:h}return k.useEffect(()=>{f(u<0),l(s<0)},[u,s]),t.jsxs(dr,{children:[t.jsxs(hr,{children:[t.jsxs(Y,{children:[t.jsxs(F,{children:[t.jsx(K,{children:t.jsx("use",{href:`${S}#icon-fork-knife`})}),t.jsx(Q,{children:"Daily calorie intake"})]}),t.jsx(q,{children:e||2200})]}),t.jsxs(Y,{children:[t.jsxs(F,{children:[t.jsx(K,{children:t.jsx("use",{href:S+"#icon-dumbbell"})}),t.jsx(Q,{children:"Daily norm of sports"})]}),t.jsx(q,{children:"110 min"})]}),t.jsxs(Y,{children:[t.jsxs(F,{children:[t.jsx(K,{children:t.jsx("use",{href:S+"#icon-apple"})}),t.jsx(Q,{children:"Calories consumed"})]}),t.jsx(q,{children:Math.round(i,0)||0})]}),t.jsxs(Y,{children:[t.jsxs(F,{children:[t.jsx(K,{children:t.jsx("use",{href:S+"#icon-fire"})}),t.jsx(Q,{children:"Calories burned"})]}),t.jsx(q,{children:n||0})]}),t.jsxs(Y,{className:o?"greenBg":u<0?"redBg":"",children:[t.jsxs(F,{children:[t.jsx(K,{children:t.jsx("use",{href:S+"#icon-bubble"})}),t.jsx(Q,{children:"The rest of the calories"})]}),t.jsx(q,{children:c()||0})]}),t.jsxs(Y,{className:p?"greenBg":"",children:[t.jsxs(F,{children:[t.jsx(K,{children:t.jsx("use",{href:S+"#icon-running-figure"})}),t.jsx(Q,{children:"The rest of sports"})]}),t.jsxs(q,{children:[110-Math.round(s*100)/100||110," min"]})]})]}),t.jsxs(pr,{children:[t.jsx(lr,{children:t.jsx(xr,{children:t.jsx("use",{href:S+"#icon-running-stick-figure-svgrepo-com-1"})})}),t.jsx(fr,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},ur=d.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,wr=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,mr=d.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
    width: 826px;
  }
`,yr=d.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,br=d.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
  }

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 96px;
  }
`,Ae=e=>{const r=new Date(e),n=String(r.getDate()).padStart(2,"0"),i=String(r.getMonth()+1).padStart(2,"0"),s=r.getFullYear();return`${n}-${i}-${s}`},$r=()=>{const[e,r]=k.useState(new Date),i=O(Te).createdAt,[s,o]=k.useState([]),[f,p]=k.useState([]),[l,u]=k.useState([]),c=ye(),h=O(at),$=k.useMemo(()=>Ae(e),[e]),x=k.useMemo(()=>Ae(i),[i]);return k.useEffect(()=>{try{(async()=>{var j,b;const g=await c(be($));g.payload===null&&(p([]),u([])),g.payload&&(o(g.payload),p((j=g.payload)==null?void 0:j.products),u((b=g.payload)==null?void 0:b.exercises))})()}catch(y){console.log(y),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}},[c,e,$]),t.jsx(br,{children:t.jsxs(ur,{children:[t.jsxs(wr,{children:[t.jsx(dt,{title:"Diary "}),t.jsx(bt,{currentDate:e,setCurrentDate:r,userDateRegistration:x})]}),t.jsxs(yr,{children:[t.jsx(gr,{userDiaryInformation:s,bmr:h}),t.jsxs(mr,{children:[t.jsx(or,{productsArray:f,date:$}),t.jsx(cr,{exercisesArray:l,date:$})]})]})]})})};export{$r as default};
