import{u as h,i as d,r as k,j as n,s as $,k as xt,b as Ce,m as W,n as We,N as He,o as ft,p as xe,q as fe,t as ut,v as gt,w as wt,L as mt,e as yt}from"./index-bb0c9209.js";import{f as bt,D as jt}from"./Datapicker-fc67da19.js";import{T as vt}from"./TitlePage-68e7394f.js";const kt=h.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,$t=h.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;

  &:hover {
    > svg {
      fill: ${d.orange};
    }
  }
`,Dt=h.p`
  font-size: 24px;
  line-height: 1.33;
  margin: 0;
  padding: 0;
  color: ${d.white};
  font-weight: 700;
  transition: color 0.3s ease;

  &:hover {
    color: ${d.orange};
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.1;
  }
`,St=h.svg`
  width: 20px;
  height: 20px;
  stroke: ${d.orange};

  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,Ct=h.button`
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
      stroke: ${d.orange};
    }
  }
`,It=h.button`
  display: flex;
  margin: 0 6px 0 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;

  &:hover {
    > svg {
      fill: ${d.orange};
    }
  }
`,Et=h.svg`
  width: 100%;
  height: 100%;
  fill: ${d.white};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,Tt=h.svg`
  width: 100%;
  height: 100%;
  fill: ${d.white};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`,zt=({currentDate:e,setCurrentDate:t,userDateRegistration:i})=>{const[r,s]=k.useState(e),[o,l]=k.useState(!1),c=()=>{l(!o)},x=()=>{const p=new Date(r);p.setDate(p.getDate()-1),t(p),s(p)},f=()=>{const p=new Date(r);p.setDate(p.getDate()+1),t(p),s(p)},a=()=>{l(!1)};return n.jsxs(kt,{children:[n.jsxs(Ct,{onClick:c,children:[n.jsx(Dt,{children:bt(r,"dd/MM/yyyy")}),n.jsx(St,{children:n.jsx("use",{href:`${$}#icon-calendar`})})]}),n.jsx(It,{type:"button",onClick:x,children:n.jsx(Et,{children:n.jsx("use",{href:`${$}#icon-chevron-left`})})}),n.jsx($t,{type:"button",onClick:f,children:n.jsx(Tt,{children:n.jsx("use",{href:`${$}#icon-chevron-right`})})}),n.jsx(jt,{selectedDate:r,setSelectedDate:s,isOpen:o,onClose:a,setCurrentDate:t,userDateRegistration:i})]})};function ne(){return ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},ne.apply(this,arguments)}function At(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Pt(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Lt=function(){function e(i){var r=this;this._insertTag=function(s){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(s,o),r.tags.push(s)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Pt(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var o=At(s);try{o.insertRule(r,o.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),T="-ms-",ue="-moz-",u="-webkit-",Ue="comm",Ie="rule",Ee="decl",Ot="@import",Qe="@keyframes",Mt="@layer",Rt=Math.abs,je=String.fromCharCode,Bt=Object.assign;function Nt(e,t){return I(e,0)^45?(((t<<2^I(e,0))<<2^I(e,1))<<2^I(e,2))<<2^I(e,3):0}function Ye(e){return e.trim()}function _t(e,t){return(e=t.exec(e))?e[0]:e}function g(e,t,i){return e.replace(t,i)}function $e(e,t){return e.indexOf(t)}function I(e,t){return e.charCodeAt(t)|0}function se(e,t,i){return e.slice(t,i)}function R(e){return e.length}function Te(e){return e.length}function ce(e,t){return t.push(e),e}function Wt(e,t){return e.map(t).join("")}var ve=1,X=1,Fe=0,A=0,D=0,ee="";function ke(e,t,i,r,s,o,l){return{value:e,root:t,parent:i,type:r,props:s,children:o,line:ve,column:X,length:l,return:""}}function te(e,t){return Bt(ke("",null,null,"",null,null,0),e,{length:-e.length},t)}function Ht(){return D}function Ut(){return D=A>0?I(ee,--A):0,X--,D===10&&(X=1,ve--),D}function P(){return D=A<Fe?I(ee,A++):0,X++,D===10&&(X=1,ve++),D}function N(){return I(ee,A)}function he(){return A}function ae(e,t){return se(ee,e,t)}function oe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ke(e){return ve=X=1,Fe=R(ee=e),A=0,[]}function Ve(e){return ee="",e}function le(e){return Ye(ae(A-1,De(e===91?e+2:e===40?e+1:e)))}function Qt(e){for(;(D=N())&&D<33;)P();return oe(e)>2||oe(D)>3?"":" "}function Yt(e,t){for(;--t&&P()&&!(D<48||D>102||D>57&&D<65||D>70&&D<97););return ae(e,he()+(t<6&&N()==32&&P()==32))}function De(e){for(;P();)switch(D){case e:return A;case 34:case 39:e!==34&&e!==39&&De(D);break;case 40:e===41&&De(e);break;case 92:P();break}return A}function Ft(e,t){for(;P()&&e+D!==47+10;)if(e+D===42+42&&N()===47)break;return"/*"+ae(t,A-1)+"*"+je(e===47?e:P())}function Kt(e){for(;!oe(N());)P();return ae(e,A)}function Vt(e){return Ve(pe("",null,null,null,[""],e=Ke(e),0,[0],e))}function pe(e,t,i,r,s,o,l,c,x){for(var f=0,a=0,p=l,S=0,C=0,v=0,w=1,E=1,b=1,m=0,L="",Q=s,_=o,M=r,y=L;E;)switch(v=m,m=P()){case 40:if(v!=108&&I(y,p-1)==58){$e(y+=g(le(m),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:y+=le(m);break;case 9:case 10:case 13:case 32:y+=Qt(v);break;case 92:y+=Yt(he()-1,7);continue;case 47:switch(N()){case 42:case 47:ce(Zt(Ft(P(),he()),t,i),x);break;default:y+="/"}break;case 123*w:c[f++]=R(y)*b;case 125*w:case 59:case 0:switch(m){case 0:case 125:E=0;case 59+a:b==-1&&(y=g(y,/\f/g,"")),C>0&&R(y)-p&&ce(C>32?Le(y+";",r,i,p-1):Le(g(y," ","")+";",r,i,p-2),x);break;case 59:y+=";";default:if(ce(M=Pe(y,t,i,f,a,s,c,L,Q=[],_=[],p),o),m===123)if(a===0)pe(y,t,M,M,Q,o,p,c,_);else switch(S===99&&I(y,3)===110?100:S){case 100:case 108:case 109:case 115:pe(e,M,M,r&&ce(Pe(e,M,M,0,0,s,c,L,s,Q=[],p),_),s,_,p,c,r?Q:_);break;default:pe(y,M,M,M,[""],_,0,c,_)}}f=a=C=0,w=b=1,L=y="",p=l;break;case 58:p=1+R(y),C=v;default:if(w<1){if(m==123)--w;else if(m==125&&w++==0&&Ut()==125)continue}switch(y+=je(m),m*w){case 38:b=a>0?1:(y+="\f",-1);break;case 44:c[f++]=(R(y)-1)*b,b=1;break;case 64:N()===45&&(y+=le(P())),S=N(),a=p=R(L=y+=Kt(he())),m++;break;case 45:v===45&&R(y)==2&&(w=0)}}return o}function Pe(e,t,i,r,s,o,l,c,x,f,a){for(var p=s-1,S=s===0?o:[""],C=Te(S),v=0,w=0,E=0;v<r;++v)for(var b=0,m=se(e,p+1,p=Rt(w=l[v])),L=e;b<C;++b)(L=Ye(w>0?S[b]+" "+m:g(m,/&\f/g,S[b])))&&(x[E++]=L);return ke(e,t,i,s===0?Ie:c,x,f,a)}function Zt(e,t,i){return ke(e,t,i,Ue,je(Ht()),se(e,2,-2),0)}function Le(e,t,i,r){return ke(e,t,i,Ee,se(e,0,r),se(e,r+1,-1),r)}function J(e,t){for(var i="",r=Te(e),s=0;s<r;s++)i+=t(e[s],s,e,t)||"";return i}function qt(e,t,i,r){switch(e.type){case Mt:if(e.children.length)break;case Ot:case Ee:return e.return=e.return||e.value;case Ue:return"";case Qe:return e.return=e.value+"{"+J(e.children,r)+"}";case Ie:e.value=e.props.join(",")}return R(i=J(e.children,r))?e.return=e.value+"{"+i+"}":""}function Gt(e){var t=Te(e);return function(i,r,s,o){for(var l="",c=0;c<t;c++)l+=e[c](i,r,s,o)||"";return l}}function Jt(e){return function(t){t.root||(t=t.return)&&e(t)}}var Xt=function(t,i,r){for(var s=0,o=0;s=o,o=N(),s===38&&o===12&&(i[r]=1),!oe(o);)P();return ae(t,A)},en=function(t,i){var r=-1,s=44;do switch(oe(s)){case 0:s===38&&N()===12&&(i[r]=1),t[r]+=Xt(A-1,i,r);break;case 2:t[r]+=le(s);break;case 4:if(s===44){t[++r]=N()===58?"&\f":"",i[r]=t[r].length;break}default:t[r]+=je(s)}while(s=P());return t},tn=function(t,i){return Ve(en(Ke(t),i))},Oe=new WeakMap,nn=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var i=t.value,r=t.parent,s=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&i.charCodeAt(0)!==58&&!Oe.get(r))&&!s){Oe.set(t,!0);for(var o=[],l=tn(i,o),c=r.props,x=0,f=0;x<l.length;x++)for(var a=0;a<c.length;a++,f++)t.props[f]=o[x]?l[x].replace(/&\f/g,c[a]):c[a]+" "+l[x]}}},rn=function(t){if(t.type==="decl"){var i=t.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(t.return="",t.value="")}};function Ze(e,t){switch(Nt(e,t)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+ue+e+T+e+e;case 6828:case 4268:return u+e+T+e+e;case 6165:return u+e+T+"flex-"+e+e;case 5187:return u+e+g(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+T+"flex-$1$2")+e;case 5443:return u+e+T+"flex-item-"+g(e,/flex-|-self/,"")+e;case 4675:return u+e+T+"flex-line-pack"+g(e,/align-content|flex-|-self/,"")+e;case 5548:return u+e+T+g(e,"shrink","negative")+e;case 5292:return u+e+T+g(e,"basis","preferred-size")+e;case 6060:return u+"box-"+g(e,"-grow","")+u+e+T+g(e,"grow","positive")+e;case 4554:return u+g(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return g(g(g(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return g(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return g(g(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+T+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4095:case 3583:case 4068:case 2532:return g(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(R(e)-1-t>6)switch(I(e,t+1)){case 109:if(I(e,t+4)!==45)break;case 102:return g(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+ue+(I(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~$e(e,"stretch")?Ze(g(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(I(e,t+1)!==115)break;case 6444:switch(I(e,R(e)-3-(~$e(e,"!important")&&10))){case 107:return g(e,":",":"+u)+e;case 101:return g(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+u+(I(e,14)===45?"inline-":"")+"box$3$1"+u+"$2$3$1"+T+"$2box$3")+e}break;case 5936:switch(I(e,t+11)){case 114:return u+e+T+g(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+T+g(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+T+g(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return u+e+T+e+e}return e}var sn=function(t,i,r,s){if(t.length>-1&&!t.return)switch(t.type){case Ee:t.return=Ze(t.value,t.length);break;case Qe:return J([te(t,{value:g(t.value,"@","@"+u)})],s);case Ie:if(t.length)return Wt(t.props,function(o){switch(_t(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return J([te(t,{props:[g(o,/:(read-\w+)/,":"+ue+"$1")]})],s);case"::placeholder":return J([te(t,{props:[g(o,/:(plac\w+)/,":"+u+"input-$1")]}),te(t,{props:[g(o,/:(plac\w+)/,":"+ue+"$1")]}),te(t,{props:[g(o,/:(plac\w+)/,T+"input-$1")]})],s)}return""})}},on=[sn],an=function(t){var i=t.key;if(i==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(w){var E=w.getAttribute("data-emotion");E.indexOf(" ")!==-1&&(document.head.appendChild(w),w.setAttribute("data-s",""))})}var s=t.stylisPlugins||on,o={},l,c=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(w){for(var E=w.getAttribute("data-emotion").split(" "),b=1;b<E.length;b++)o[E[b]]=!0;c.push(w)});var x,f=[nn,rn];{var a,p=[qt,Jt(function(w){a.insert(w)})],S=Gt(f.concat(s,p)),C=function(E){return J(Vt(E),S)};x=function(E,b,m,L){a=m,C(E?E+"{"+b.styles+"}":b.styles),L&&(v.inserted[b.name]=!0)}}var v={key:i,sheet:new Lt({key:i,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:x};return v.sheet.hydrate(c),v},cn=k.createContext(typeof HTMLElement<"u"?an({key:"css"}):null);cn.Provider;var dn=k.createContext({});function hn(e){return Object.keys(e).length===0}function ln(e=null){const t=k.useContext(dn);return!t||hn(t)?e:t}function qe(e,t){const i=ne({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))i[r]=ne({},e[r],i[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const s=e[r]||{},o=t[r];i[r]={},!o||!Object.keys(o)?i[r]=s:!s||!Object.keys(s)?i[r]=o:(i[r]=ne({},o),Object.keys(s).forEach(l=>{i[r][l]=qe(s[l],o[l])}))}else i[r]===void 0&&(i[r]=e[r])}),i}function pn(e){const{theme:t,name:i,props:r}=e;return!t||!t.components||!t.components[i]||!t.components[i].defaultProps?r:qe(t.components[i].defaultProps,r)}const xn=typeof window<"u"?k.useLayoutEffect:k.useEffect,fn=xn;function un(e,t,i,r,s){const[o,l]=k.useState(()=>s&&i?i(e).matches:r?r(e).matches:t);return fn(()=>{let c=!0;if(!i)return;const x=i(e),f=()=>{c&&l(x.matches)};return f(),x.addListener(f),()=>{c=!1,x.removeListener(f)}},[e,i]),o}const Ge=xt["useSyncExternalStore"];function gn(e,t,i,r,s){const o=k.useCallback(()=>t,[t]),l=k.useMemo(()=>{if(s&&i)return()=>i(e).matches;if(r!==null){const{matches:a}=r(e);return()=>a}return o},[o,e,r,s,i]),[c,x]=k.useMemo(()=>{if(i===null)return[o,()=>()=>{}];const a=i(e);return[()=>a.matches,p=>(a.addListener(p),()=>{a.removeListener(p)})]},[o,i,e]);return Ge(x,c,l)}function Je(e,t={}){const i=ln(),r=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:s=!1,matchMedia:o=r?window.matchMedia:null,ssrMatchMedia:l=null,noSsr:c=!1}=pn({name:"MuiUseMediaQuery",props:t,theme:i});let x=typeof e=="function"?e(i):e;return x=x.replace(/^@media( ?)/m,""),(Ge!==void 0?gn:un)(x,s,o,l,c)}const Xe=h.div`
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
`,et=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,tt=h.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,nt=h.div`
  &:hover span {
    color: ${d.orange};
  }
`,it=h.span`
color: ${d.orange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,rt=h.p`
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
`,ge=h.div`
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
`,we=h.div`
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
`,wn=h.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`,Y=h.li`
    color: ${d.orange};

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
`,Me=h.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,O=h.li`
  @media screen and (max-width: 375px) {
    width: 100%;

    &:first-of-type {
        color: ${d.orange};

      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      color: ${d.white};
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
        color: ${d.orange};

      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(4) {
        color: ${d.white};
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
        color: ${d.orange};

      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
        color: ${d.white};
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
        color: ${d.orange};

      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(4) {
        color: ${d.white};
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
`,F=h.li`
  @media screen and (min-width: 768px) {
    color: ${d.white};
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
`,st=h.div`
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`,ot=h.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        color: ${d.orange};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${d.white};
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
`,at=h.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        color: ${d.orange};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${d.white};
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
`,ct=h.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        color: ${d.orange};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${d.white};
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
`,dt=h.div`
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
        color: ${d.orange};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        margin-top: 18px;
      }
    }
  }
`,me=h.button`
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0;
  position: relative;

  &:hover {
    > svg {
      stroke: ${d.orange};
    }
  }
`,ye=h.svg`
  stroke: ${d.orange};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;

`,Re=h.span`
  @media screen and (min-width: 320px) {
    color: ${d.white};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,mn=e=>e.diary.isLoading,ze=e=>e.diary.error,yn=({productsArray:e,date:t})=>{const i=Ce(),s=W(We).blood,o=W(ze),l=Je("(max-width:768px)"),c=a=>typeof a!="string"||a.length===0?"":a[0].toUpperCase()+a.slice(1).toLowerCase();let x;const f=async a=>{try{await i(ft(a)),await i(xe(t)),fe.Notify.success("Product deleted successfully!",{theme:"light"})}catch(p){console.log(p),fe.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return n.jsxs(Xe,{children:[n.jsxs(et,{children:[n.jsx(tt,{children:"Products"}),n.jsx(nt,{children:n.jsxs(He,{to:"/products",style:{display:"flex",alignItems:"center"},children:[n.jsx(it,{children:"Add product"}),n.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:d.orange},children:n.jsx("use",{href:$+"#icon-arrow-right"})})]})})]}),e&&e.length>0&&!o?l?n.jsx(ge,{children:n.jsx(we,{children:e.map(a=>{var S,C;const p=a.productID.groupBloodNotAllowed[s]?"Yes":"No";return n.jsxs(Me,{children:[n.jsx(O,{children:"Title"}),n.jsx(O,{children:c((S=a.productID)==null?void 0:S.title)}),n.jsx(O,{children:"Category"}),n.jsx(O,{children:c((C=a.productID)==null?void 0:C.category)}),n.jsxs(st,{children:[n.jsxs(ot,{style:{display:"flex",flexDirection:"column"},children:[n.jsx(O,{children:"Calories"}),n.jsx(O,{children:a.calories})]}),n.jsxs(at,{style:{display:"flex",flexDirection:"column"},children:[n.jsx(O,{children:"Weight"}),n.jsx(O,{children:a.amount})]}),n.jsxs(ct,{style:{display:"flex",flexDirection:"column"},children:[n.jsx(O,{children:"Recommend"}),n.jsx(O,{children:n.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[n.jsx("svg",{style:{width:"14px",height:"14px"},children:p==="Yes"?n.jsx("use",{href:$+"#icon-bubble",style:{fill:`${d.green}`,stroke:d.green}}):n.jsx("use",{href:$+"#icon-bubble",style:{fill:d.red,stroke:d.red}})}),n.jsx(Re,{children:x})]})})]}),n.jsxs(dt,{style:{display:"flex",flexDirection:"column"},children:[n.jsx(O,{children:""}),n.jsx(O,{children:n.jsx(me,{type:"button",onClick:()=>f(a._id),children:n.jsx(ye,{children:n.jsx("use",{href:$+"#icon-trash"})})})})]})]})]},a._id)})})}):n.jsxs(ge,{children:[n.jsxs(wn,{children:[n.jsx(Y,{children:"Title"}),n.jsx(Y,{children:"Category"}),n.jsx(Y,{children:"Calories"}),n.jsx(Y,{children:"Weight"}),n.jsx(Y,{children:"Recommend"}),n.jsx(Y,{children:""})]}),n.jsx(we,{children:e.map(a=>{var S,C,v;const p=(S=a.productID)!=null&&S.groupBloodNotAllowed[s]?x="Yes":x="No";return n.jsxs(Me,{children:[n.jsx(F,{children:c((C=a.productID)==null?void 0:C.title)}),n.jsx(F,{children:c((v=a.productID)==null?void 0:v.category)}),n.jsx(F,{children:a.calories}),n.jsx(F,{children:a.amount}),n.jsx(F,{children:n.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[n.jsx("svg",{style:{width:"14px",height:"14px"},children:p==="Yes"?n.jsx("use",{href:$+"#icon-bubble",style:{fill:d.green,stroke:d.green}}):n.jsx("use",{href:$+"#icon-bubble",style:{fill:d.red,stroke:d.red}})}),n.jsx(Re,{children:x})]})}),n.jsx(F,{children:n.jsx(me,{type:"button",onClick:()=>f(a._id),children:n.jsx(ye,{children:n.jsx("use",{href:$+"#icon-trash"})})})})]},a._id)})})]}):n.jsx(rt,{children:"Not found products"})]})},bn=h.ul`
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
`,H=h.li`
  color: ${d.orange};
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
`,Be=h.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,z=h.li`
  @media screen and (max-width: 375px) {
    width: 100%;
    margin-bottom: 8px;

    &:first-of-type {
      color: ${d.orange};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(2) {
      color: ${d.white};
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
      color: ${d.orange};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(4) {
      color: ${d.white};
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
      color: ${d.orange};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(6) {
      color: ${d.white};
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
      color: ${d.orange};
      font-size: 12px;
      line-height: 1.5;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      color: ${d.white};
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
      color: ${d.orange};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(4) {
        color: ${d.white};
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
      color: ${d.orange};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(6) {
        color: ${d.white};
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
`,U=h.li`
  @media screen and (min-width: 768px) {
    color: ${d.white};
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
`;h.svg`
  stroke: ${d.orange};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;

`;const jn=({exercisesArray:e,date:t})=>{const i=Je("(max-width:768px)"),r=W(ze),s=Ce(),o=c=>c.charAt(0).toUpperCase()+c.slice(1).toLowerCase(),l=async c=>{try{await s(ut(c)),await s(xe(t)),fe.Notify.success("Exercise deleted successfully!",{theme:"light"})}catch(x){console.log(x),fe.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return n.jsxs(Xe,{children:[n.jsxs(et,{children:[n.jsx(tt,{children:"Exercises"}),n.jsx(nt,{children:n.jsxs(He,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[n.jsx(it,{children:"Add exercises"}),n.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:d.orange},children:n.jsx("use",{href:$+"#icon-arrow-right"})})]})})]}),e&&e.length>0&&!r?i?n.jsx(ge,{children:n.jsx(we,{children:e.map(c=>{var x,f,a,p;return n.jsxs(Be,{children:[n.jsx(z,{children:"Body Part"}),n.jsx(z,{children:o((x=c.exerciseID)==null?void 0:x.bodyPart)}),n.jsx(z,{children:"Equipment"}),n.jsx(z,{children:o((f=c.exerciseID)==null?void 0:f.equipment)}),n.jsx(z,{children:"Name"}),n.jsx(z,{children:o((a=c.exerciseID)==null?void 0:a.name)}),n.jsxs(st,{children:[n.jsxs(ot,{children:[n.jsx(z,{children:"Target"}),n.jsx(z,{children:o((p=c.exerciseID)==null?void 0:p.target)})]}),n.jsxs(at,{children:[n.jsx(z,{children:"Burned Calories"}),n.jsx(z,{children:c.calories})]}),n.jsxs(ct,{children:[n.jsx(z,{children:"Time"}),n.jsx(z,{children:c.time})]}),n.jsxs(dt,{children:[n.jsx(z,{children:""}),n.jsx(z,{children:n.jsx(me,{type:"button",onClick:()=>l(c._id),children:n.jsx(ye,{children:n.jsx("use",{href:$+"#icon-trash"})})})})]})]})]},c._id)})})}):n.jsxs(ge,{children:[n.jsxs(bn,{children:[n.jsx(H,{children:"Body Part"}),n.jsx(H,{children:"Equipment"}),n.jsx(H,{children:"Name"}),n.jsx(H,{children:"Target"}),n.jsx(H,{children:"Burned Calories"}),n.jsx(H,{children:"Time"}),n.jsx(H,{children:""})]}),n.jsx(we,{children:e.map(c=>n.jsxs(Be,{children:[n.jsx(U,{children:o(c.exerciseID.bodyPart)}),n.jsx(U,{children:o(c.exerciseID.equipment)}),n.jsx(U,{children:o(c.exerciseID.name)}),n.jsx(U,{children:o(c.exerciseID.target)}),n.jsx(U,{children:c.calories}),n.jsx(U,{children:c.time}),n.jsx(U,{children:n.jsx(me,{type:"button",onClick:()=>l(c._id),children:n.jsx(ye,{children:n.jsx("use",{href:$+"#icon-trash"})})})})]},c._id))})]}):n.jsx(rt,{children:"Not found exercises"})]})},vn=h.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,kn=h.ul`
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
      background-color: ${d.orange};
    }

    &:nth-child(2) {
      background-color: ${d.orange};
    }
  }
`,K=h.li`
  display: block;
  width: 157px;
  padding: 14px;
  background-color: ${d.black};
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
`,V=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,Z=h.h2`
  font-size: 12px;
  line-height: 16px;
  color: ${d.white};

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 18px;
  }
`,q=h.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: ${d.white};


  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,$n=h.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Dn=h.div`
  width: 24px;
  height: 24px;
  background-color: ${d.beige};
  border-radius: 50%;
`,G=h.svg`
  width: 20px;
  height: 20px;
  fill: ${d.orangeSecond};
`,Sn=h.svg`
  width: 24px;
  height: 24px;
`,Cn=h.p`
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
`,In=({userDiaryInformation:e,bmr:t})=>{const{burnedCalories:i,consumedCalories:r,remainingSports:s}=e,[o,l]=k.useState(!1),[c,x]=k.useState(!1),f=Math.round(r-i,0),a=W(ze);return k.useEffect(()=>{f<0?l(!0):l(!1),s<0?x(!0):x(!1)},[f,s]),n.jsxs(vn,{children:[n.jsxs(kn,{children:[n.jsxs(K,{children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:`${$}#icon-fork-knife`})}),n.jsx(Z,{children:"Daily calorie intake"})]}),n.jsx(q,{children:t&&t!==null&&t!==0?t:2200})]}),n.jsxs(K,{children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:$+"#icon-dumbbell"})}),n.jsx(Z,{children:"Daily norm of sports"})]}),n.jsx(q,{children:"110 min"})]}),n.jsxs(K,{children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:$+"#icon-apple"})}),n.jsx(Z,{children:"Calories consumed"})]}),n.jsx(q,{children:r&&!a?r:0})]}),n.jsxs(K,{children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:$+"#icon-fire"})}),n.jsx(Z,{children:"Calories burned"})]}),n.jsx(q,{children:i&&!a?i:0})]}),n.jsxs(K,{className:o?"greenBg":f<0?"redBg":"",children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:$+"#icon-bubble"})}),n.jsx(Z,{children:"The rest of the calories"})]}),n.jsx(q,{children:f&&!a?f:t||0})]}),n.jsxs(K,{className:c?"greenBg":"",children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:$+"#icon-running-figure"})}),n.jsx(Z,{children:"The rest of sports"})]}),n.jsxs(q,{children:[s&&!a?s:110," min"]})]})]}),n.jsxs($n,{children:[n.jsx(Dn,{children:n.jsx(Sn,{children:n.jsx("use",{href:$+"#icon-running-stick-figure-svgrepo-com-1"})})}),n.jsx(Cn,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},En=h.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,Tn=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,zn=h.div`
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
`,An=h.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Pn=h.div`
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
`,Ae=e=>typeof e=="number"&&!isNaN(e),ie=e=>typeof e=="string",ht=e=>typeof e=="function",Ln=e=>k.isValidElement(e)||ie(e)||ht(e)||Ae(e),B=new Map;let Se=[];const Ne=new Set,lt=()=>B.size>0;function On(e,t){var i;if(t)return!((i=B.get(t))==null||!i.isToastActive(e));let r=!1;return B.forEach(s=>{s.isToastActive(e)&&(r=!0)}),r}function Mn(e,t){Ln(e)&&(lt()||Se.push({content:e,options:t}),B.forEach(i=>{i.buildToast(e,t)}))}function _e(e,t){B.forEach(i=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===i.id&&i.toggle(e,t==null?void 0:t.id):i.toggle(e,t==null?void 0:t.id)})}let Rn=1;const pt=()=>""+Rn++;function Bn(e){return e&&(ie(e.toastId)||Ae(e.toastId))?e.toastId:pt()}function re(e,t){return Mn(e,t),t.toastId}function be(e,t){return{...t,type:t&&t.type||e,toastId:Bn(t)}}function de(e){return(t,i)=>re(t,be(e,i))}function j(e,t){return re(e,be("default",t))}j.loading=(e,t)=>re(e,be("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),j.promise=function(e,t,i){let r,{pending:s,error:o,success:l}=t;s&&(r=ie(s)?j.loading(s,i):j.loading(s.render,{...i,...s}));const c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},x=(a,p,S)=>{if(p==null)return void j.dismiss(r);const C={type:a,...c,...i,data:S},v=ie(p)?{render:p}:p;return r?j.update(r,{...C,...v}):j(v.render,{...C,...v}),S},f=ht(e)?e():e;return f.then(a=>x("success",l,a)).catch(a=>x("error",o,a)),f},j.success=de("success"),j.info=de("info"),j.error=de("error"),j.warning=de("warning"),j.warn=j.warning,j.dark=(e,t)=>re(e,be("default",{theme:"dark",...t})),j.dismiss=function(e){(function(t){var i;if(lt()){if(t==null||ie(i=t)||Ae(i))B.forEach(s=>{s.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){var r;(r=B.get(t.containerId))!=null&&r.removeToast(t.id)||B.forEach(s=>{s.removeToast(t.id)})}}else Se=Se.filter(s=>t!=null&&s.options.toastId!==t)})(e)},j.clearWaitingQueue=function(e){e===void 0&&(e={}),B.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},j.isActive=On,j.update=function(e,t){t===void 0&&(t={});const i=((r,s)=>{var o;let{containerId:l}=s;return(o=B.get(l||1))==null?void 0:o.toasts.get(r)})(e,t);if(i){const{props:r,content:s}=i,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:pt()};o.toastId!==e&&(o.staleId=e);const l=o.render||s;delete o.render,re(l,o)}},j.done=e=>{j.update(e,{progress:1})},j.onChange=function(e){return Ne.add(e),()=>{Ne.delete(e)}},j.play=e=>_e(!0,e),j.pause=e=>_e(!1,e);const Hn=()=>{const[e,t]=k.useState([]),[i,r]=k.useState([]),[s,o]=k.useState([]),l=Ce(),c=W(mn),x=W(gt),f=W(wt),[a,p]=k.useState(new Date),C=W(We).createdAt,v=b=>{const m=new Date(b),L=String(m.getDate()).padStart(2,"0"),Q=String(m.getMonth()+1).padStart(2,"0"),_=m.getFullYear();return`${L}-${Q}-${_}`},w=v(a),E=v(C);return k.useEffect(()=>{(async()=>{try{await l(yt()),await l(xe(w))}catch{j.error("Sorry, something went wrong, please try again",{theme:"dark"})}})()},[l,w,a]),k.useEffect(()=>{(async()=>{const m=await l(xe("06-03-2024"));t(m.payload),r(m.payload.products),o(m.payload.exercises)})()},[l]),n.jsx(Pn,{children:c||x?n.jsx(mt,{}):n.jsxs(En,{children:[n.jsxs(Tn,{children:[n.jsx(vt,{title:"Diary "}),n.jsx(zt,{currentDate:a,setCurrentDate:p,userDateRegistration:E})]}),n.jsxs(An,{children:[n.jsx(In,{userDiaryInformation:e,bmr:f}),n.jsxs(zn,{children:[n.jsx(yn,{productsArray:i,date:w}),n.jsx(jn,{exercisesArray:s,date:w})]})]})]})})};export{Hn as default};
