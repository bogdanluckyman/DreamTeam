import{u as h,i as a,r as $,j as n,s as k,k as xt,b as Ce,m as W,n as We,N as He,o as ft,p as xe,q as fe,t as ut,v as gt,w as wt,L as mt,e as yt}from"./index-07ca0263.js";import{f as bt,D as jt}from"./Datapicker-200a9d69.js";import{T as vt}from"./TitlePage-81efeacb.js";const $t=h.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,kt=h.button`
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
`,Dt=h.p`
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
`,St=h.svg`
  width: 20px;
  height: 20px;
  stroke: ${a.orange};

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
      stroke: ${a.orange};
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
      fill: ${a.orange};
    }
  }
`,Et=h.svg`
  width: 100%;
  height: 100%;
  fill: ${a.white};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,Tt=h.svg`
  width: 100%;
  height: 100%;
  fill: ${a.white};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`,zt=({currentDate:e,setCurrentDate:t,userDateRegistration:i})=>{const[r,s]=$.useState(e),[o,l]=$.useState(!1),d=()=>{l(!o)},x=()=>{const p=new Date(r);p.setDate(p.getDate()-1),t(p),s(p)},f=()=>{const p=new Date(r);p.setDate(p.getDate()+1),t(p),s(p)},c=()=>{l(!1)};return n.jsxs($t,{children:[n.jsxs(Ct,{onClick:d,children:[n.jsx(Dt,{children:bt(r,"dd/MM/yyyy")}),n.jsx(St,{children:n.jsx("use",{href:`${k}#icon-calendar`})})]}),n.jsx(It,{type:"button",onClick:x,children:n.jsx(Et,{children:n.jsx("use",{href:`${k}#icon-chevron-left`})})}),n.jsx(kt,{type:"button",onClick:f,children:n.jsx(Tt,{children:n.jsx("use",{href:`${k}#icon-chevron-right`})})}),n.jsx(jt,{selectedDate:r,setSelectedDate:s,isOpen:o,onClose:c,setCurrentDate:t,userDateRegistration:i})]})};function ne(){return ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},ne.apply(this,arguments)}function At(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Pt(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Lt=function(){function e(i){var r=this;this._insertTag=function(s){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(s,o),r.tags.push(s)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Pt(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var o=At(s);try{o.insertRule(r,o.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),T="-ms-",ue="-moz-",u="-webkit-",Ue="comm",Ie="rule",Ee="decl",Ot="@import",Qe="@keyframes",Mt="@layer",Rt=Math.abs,je=String.fromCharCode,Bt=Object.assign;function Nt(e,t){return I(e,0)^45?(((t<<2^I(e,0))<<2^I(e,1))<<2^I(e,2))<<2^I(e,3):0}function Ye(e){return e.trim()}function _t(e,t){return(e=t.exec(e))?e[0]:e}function g(e,t,i){return e.replace(t,i)}function ke(e,t){return e.indexOf(t)}function I(e,t){return e.charCodeAt(t)|0}function se(e,t,i){return e.slice(t,i)}function R(e){return e.length}function Te(e){return e.length}function ce(e,t){return t.push(e),e}function Wt(e,t){return e.map(t).join("")}var ve=1,X=1,Fe=0,z=0,D=0,ee="";function $e(e,t,i,r,s,o,l){return{value:e,root:t,parent:i,type:r,props:s,children:o,line:ve,column:X,length:l,return:""}}function te(e,t){return Bt($e("",null,null,"",null,null,0),e,{length:-e.length},t)}function Ht(){return D}function Ut(){return D=z>0?I(ee,--z):0,X--,D===10&&(X=1,ve--),D}function P(){return D=z<Fe?I(ee,z++):0,X++,D===10&&(X=1,ve++),D}function N(){return I(ee,z)}function he(){return z}function ae(e,t){return se(ee,e,t)}function oe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ke(e){return ve=X=1,Fe=R(ee=e),z=0,[]}function Ve(e){return ee="",e}function le(e){return Ye(ae(z-1,De(e===91?e+2:e===40?e+1:e)))}function Qt(e){for(;(D=N())&&D<33;)P();return oe(e)>2||oe(D)>3?"":" "}function Yt(e,t){for(;--t&&P()&&!(D<48||D>102||D>57&&D<65||D>70&&D<97););return ae(e,he()+(t<6&&N()==32&&P()==32))}function De(e){for(;P();)switch(D){case e:return z;case 34:case 39:e!==34&&e!==39&&De(D);break;case 40:e===41&&De(e);break;case 92:P();break}return z}function Ft(e,t){for(;P()&&e+D!==47+10;)if(e+D===42+42&&N()===47)break;return"/*"+ae(t,z-1)+"*"+je(e===47?e:P())}function Kt(e){for(;!oe(N());)P();return ae(e,z)}function Vt(e){return Ve(pe("",null,null,null,[""],e=Ke(e),0,[0],e))}function pe(e,t,i,r,s,o,l,d,x){for(var f=0,c=0,p=l,S=0,C=0,v=0,w=1,E=1,b=1,m=0,L="",Q=s,_=o,M=r,y=L;E;)switch(v=m,m=P()){case 40:if(v!=108&&I(y,p-1)==58){ke(y+=g(le(m),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:y+=le(m);break;case 9:case 10:case 13:case 32:y+=Qt(v);break;case 92:y+=Yt(he()-1,7);continue;case 47:switch(N()){case 42:case 47:ce(Zt(Ft(P(),he()),t,i),x);break;default:y+="/"}break;case 123*w:d[f++]=R(y)*b;case 125*w:case 59:case 0:switch(m){case 0:case 125:E=0;case 59+c:b==-1&&(y=g(y,/\f/g,"")),C>0&&R(y)-p&&ce(C>32?Le(y+";",r,i,p-1):Le(g(y," ","")+";",r,i,p-2),x);break;case 59:y+=";";default:if(ce(M=Pe(y,t,i,f,c,s,d,L,Q=[],_=[],p),o),m===123)if(c===0)pe(y,t,M,M,Q,o,p,d,_);else switch(S===99&&I(y,3)===110?100:S){case 100:case 108:case 109:case 115:pe(e,M,M,r&&ce(Pe(e,M,M,0,0,s,d,L,s,Q=[],p),_),s,_,p,d,r?Q:_);break;default:pe(y,M,M,M,[""],_,0,d,_)}}f=c=C=0,w=b=1,L=y="",p=l;break;case 58:p=1+R(y),C=v;default:if(w<1){if(m==123)--w;else if(m==125&&w++==0&&Ut()==125)continue}switch(y+=je(m),m*w){case 38:b=c>0?1:(y+="\f",-1);break;case 44:d[f++]=(R(y)-1)*b,b=1;break;case 64:N()===45&&(y+=le(P())),S=N(),c=p=R(L=y+=Kt(he())),m++;break;case 45:v===45&&R(y)==2&&(w=0)}}return o}function Pe(e,t,i,r,s,o,l,d,x,f,c){for(var p=s-1,S=s===0?o:[""],C=Te(S),v=0,w=0,E=0;v<r;++v)for(var b=0,m=se(e,p+1,p=Rt(w=l[v])),L=e;b<C;++b)(L=Ye(w>0?S[b]+" "+m:g(m,/&\f/g,S[b])))&&(x[E++]=L);return $e(e,t,i,s===0?Ie:d,x,f,c)}function Zt(e,t,i){return $e(e,t,i,Ue,je(Ht()),se(e,2,-2),0)}function Le(e,t,i,r){return $e(e,t,i,Ee,se(e,0,r),se(e,r+1,-1),r)}function J(e,t){for(var i="",r=Te(e),s=0;s<r;s++)i+=t(e[s],s,e,t)||"";return i}function qt(e,t,i,r){switch(e.type){case Mt:if(e.children.length)break;case Ot:case Ee:return e.return=e.return||e.value;case Ue:return"";case Qe:return e.return=e.value+"{"+J(e.children,r)+"}";case Ie:e.value=e.props.join(",")}return R(i=J(e.children,r))?e.return=e.value+"{"+i+"}":""}function Gt(e){var t=Te(e);return function(i,r,s,o){for(var l="",d=0;d<t;d++)l+=e[d](i,r,s,o)||"";return l}}function Jt(e){return function(t){t.root||(t=t.return)&&e(t)}}var Xt=function(t,i,r){for(var s=0,o=0;s=o,o=N(),s===38&&o===12&&(i[r]=1),!oe(o);)P();return ae(t,z)},en=function(t,i){var r=-1,s=44;do switch(oe(s)){case 0:s===38&&N()===12&&(i[r]=1),t[r]+=Xt(z-1,i,r);break;case 2:t[r]+=le(s);break;case 4:if(s===44){t[++r]=N()===58?"&\f":"",i[r]=t[r].length;break}default:t[r]+=je(s)}while(s=P());return t},tn=function(t,i){return Ve(en(Ke(t),i))},Oe=new WeakMap,nn=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var i=t.value,r=t.parent,s=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&i.charCodeAt(0)!==58&&!Oe.get(r))&&!s){Oe.set(t,!0);for(var o=[],l=tn(i,o),d=r.props,x=0,f=0;x<l.length;x++)for(var c=0;c<d.length;c++,f++)t.props[f]=o[x]?l[x].replace(/&\f/g,d[c]):d[c]+" "+l[x]}}},rn=function(t){if(t.type==="decl"){var i=t.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(t.return="",t.value="")}};function Ze(e,t){switch(Nt(e,t)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+ue+e+T+e+e;case 6828:case 4268:return u+e+T+e+e;case 6165:return u+e+T+"flex-"+e+e;case 5187:return u+e+g(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+T+"flex-$1$2")+e;case 5443:return u+e+T+"flex-item-"+g(e,/flex-|-self/,"")+e;case 4675:return u+e+T+"flex-line-pack"+g(e,/align-content|flex-|-self/,"")+e;case 5548:return u+e+T+g(e,"shrink","negative")+e;case 5292:return u+e+T+g(e,"basis","preferred-size")+e;case 6060:return u+"box-"+g(e,"-grow","")+u+e+T+g(e,"grow","positive")+e;case 4554:return u+g(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return g(g(g(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return g(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return g(g(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+T+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4095:case 3583:case 4068:case 2532:return g(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(R(e)-1-t>6)switch(I(e,t+1)){case 109:if(I(e,t+4)!==45)break;case 102:return g(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+ue+(I(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ke(e,"stretch")?Ze(g(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(I(e,t+1)!==115)break;case 6444:switch(I(e,R(e)-3-(~ke(e,"!important")&&10))){case 107:return g(e,":",":"+u)+e;case 101:return g(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+u+(I(e,14)===45?"inline-":"")+"box$3$1"+u+"$2$3$1"+T+"$2box$3")+e}break;case 5936:switch(I(e,t+11)){case 114:return u+e+T+g(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+T+g(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+T+g(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return u+e+T+e+e}return e}var sn=function(t,i,r,s){if(t.length>-1&&!t.return)switch(t.type){case Ee:t.return=Ze(t.value,t.length);break;case Qe:return J([te(t,{value:g(t.value,"@","@"+u)})],s);case Ie:if(t.length)return Wt(t.props,function(o){switch(_t(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return J([te(t,{props:[g(o,/:(read-\w+)/,":"+ue+"$1")]})],s);case"::placeholder":return J([te(t,{props:[g(o,/:(plac\w+)/,":"+u+"input-$1")]}),te(t,{props:[g(o,/:(plac\w+)/,":"+ue+"$1")]}),te(t,{props:[g(o,/:(plac\w+)/,T+"input-$1")]})],s)}return""})}},on=[sn],an=function(t){var i=t.key;if(i==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(w){var E=w.getAttribute("data-emotion");E.indexOf(" ")!==-1&&(document.head.appendChild(w),w.setAttribute("data-s",""))})}var s=t.stylisPlugins||on,o={},l,d=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(w){for(var E=w.getAttribute("data-emotion").split(" "),b=1;b<E.length;b++)o[E[b]]=!0;d.push(w)});var x,f=[nn,rn];{var c,p=[qt,Jt(function(w){c.insert(w)})],S=Gt(f.concat(s,p)),C=function(E){return J(Vt(E),S)};x=function(E,b,m,L){c=m,C(E?E+"{"+b.styles+"}":b.styles),L&&(v.inserted[b.name]=!0)}}var v={key:i,sheet:new Lt({key:i,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:x};return v.sheet.hydrate(d),v},cn=$.createContext(typeof HTMLElement<"u"?an({key:"css"}):null);cn.Provider;var dn=$.createContext({});function hn(e){return Object.keys(e).length===0}function ln(e=null){const t=$.useContext(dn);return!t||hn(t)?e:t}function qe(e,t){const i=ne({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))i[r]=ne({},e[r],i[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const s=e[r]||{},o=t[r];i[r]={},!o||!Object.keys(o)?i[r]=s:!s||!Object.keys(s)?i[r]=o:(i[r]=ne({},o),Object.keys(s).forEach(l=>{i[r][l]=qe(s[l],o[l])}))}else i[r]===void 0&&(i[r]=e[r])}),i}function pn(e){const{theme:t,name:i,props:r}=e;return!t||!t.components||!t.components[i]||!t.components[i].defaultProps?r:qe(t.components[i].defaultProps,r)}const xn=typeof window<"u"?$.useLayoutEffect:$.useEffect,fn=xn;function un(e,t,i,r,s){const[o,l]=$.useState(()=>s&&i?i(e).matches:r?r(e).matches:t);return fn(()=>{let d=!0;if(!i)return;const x=i(e),f=()=>{d&&l(x.matches)};return f(),x.addListener(f),()=>{d=!1,x.removeListener(f)}},[e,i]),o}const Ge=xt["useSyncExternalStore"];function gn(e,t,i,r,s){const o=$.useCallback(()=>t,[t]),l=$.useMemo(()=>{if(s&&i)return()=>i(e).matches;if(r!==null){const{matches:c}=r(e);return()=>c}return o},[o,e,r,s,i]),[d,x]=$.useMemo(()=>{if(i===null)return[o,()=>()=>{}];const c=i(e);return[()=>c.matches,p=>(c.addListener(p),()=>{c.removeListener(p)})]},[o,i,e]);return Ge(x,d,l)}function Je(e,t={}){const i=ln(),r=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:s=!1,matchMedia:o=r?window.matchMedia:null,ssrMatchMedia:l=null,noSsr:d=!1}=pn({name:"MuiUseMediaQuery",props:t,theme:i});let x=typeof e=="function"?e(i):e;return x=x.replace(/^@media( ?)/m,""),(Ge!==void 0?gn:un)(x,s,o,l,d)}const Xe=h.div`
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
    color: ${a.orange};
  }
`,it=h.span`
color: ${a.orange};
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
`,F=h.li`
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
`,at=h.div`
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
`,ct=h.div`
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
        color: ${a.orange};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        margin-top: 18px;
      }
    }
  }
`,me=h.button`
  /* width: 100%; */
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
`,ye=h.svg`
  stroke: ${a.orange};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;

`,Re=h.span`
  @media screen and (min-width: 320px) {
    color: ${a.white};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,mn=e=>e.diary.isLoading,ze=e=>e.diary.error,yn=({productsArray:e,date:t})=>{console.log(e);const i=Ce(),s=W(We).blood,o=W(ze),l=Je("(max-width:768px)"),d=c=>typeof c!="string"||c.length===0?"":c[0].toUpperCase()+c.slice(1).toLowerCase();let x;const f=async c=>{try{await i(ft(c)),await i(xe(t)),fe.Notify.success("Product deleted successfully!",{theme:"light"})}catch(p){console.log(p),fe.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return n.jsxs(Xe,{children:[n.jsxs(et,{children:[n.jsx(tt,{children:"Products"}),n.jsx(nt,{children:n.jsxs(He,{to:"/products",style:{display:"flex",alignItems:"center"},children:[n.jsx(it,{children:"Add product"}),n.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:a.orange},children:n.jsx("use",{href:k+"#icon-arrow-right"})})]})})]}),e&&e.length>0&&!o?l?n.jsx(ge,{children:n.jsx(we,{children:e.map(c=>{var S,C;const p=c.productID.groupBloodNotAllowed[s]?"Yes":"No";return n.jsxs(Me,{children:[n.jsx(O,{children:"Title"}),n.jsx(O,{children:d((S=c.productID)==null?void 0:S.title)}),n.jsx(O,{children:"Category"}),n.jsx(O,{children:d((C=c.productID)==null?void 0:C.category)}),n.jsxs(st,{children:[n.jsxs(ot,{style:{display:"flex",flexDirection:"column"},children:[n.jsx(O,{children:"Calories"}),n.jsx(O,{children:c.calories})]}),n.jsxs(at,{style:{display:"flex",flexDirection:"column"},children:[n.jsx(O,{children:"Weight"}),n.jsx(O,{children:c.amount})]}),n.jsxs(ct,{style:{display:"flex",flexDirection:"column"},children:[n.jsx(O,{children:"Recommend"}),n.jsx(O,{children:n.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[n.jsx("svg",{style:{width:"14px",height:"14px"},children:p==="Yes"?n.jsx("use",{href:k+"#icon-bubble",style:{fill:`${a.green}`,stroke:a.green}}):n.jsx("use",{href:k+"#icon-bubble",style:{fill:a.red,stroke:a.red}})}),n.jsx(Re,{children:x})]})})]}),n.jsxs(dt,{style:{display:"flex",flexDirection:"column"},children:[n.jsx(O,{children:""}),n.jsx(O,{children:n.jsx(me,{type:"button",onClick:()=>f(c._id),children:n.jsx(ye,{children:n.jsx("use",{href:k+"#icon-trash"})})})})]})]})]},c._id)})})}):n.jsxs(ge,{children:[n.jsxs(wn,{children:[n.jsx(Y,{children:"Title"}),n.jsx(Y,{children:"Category"}),n.jsx(Y,{children:"Calories"}),n.jsx(Y,{children:"Weight"}),n.jsx(Y,{children:"Recommend"}),n.jsx(Y,{children:""})]}),n.jsx(we,{children:e.map(c=>{var S,C,v;const p=(S=c.productID)!=null&&S.groupBloodNotAllowed[s]?x="Yes":x="No";return n.jsxs(Me,{children:[n.jsx(F,{children:d((C=c.productID)==null?void 0:C.title)}),n.jsx(F,{children:d((v=c.productID)==null?void 0:v.category)}),n.jsx(F,{children:c.calories}),n.jsx(F,{children:c.amount}),n.jsx(F,{children:n.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[n.jsx("svg",{style:{width:"14px",height:"14px"},children:p==="Yes"?n.jsx("use",{href:k+"#icon-bubble",style:{fill:a.green,stroke:a.green}}):n.jsx("use",{href:k+"#icon-bubble",style:{fill:a.red,stroke:a.red}})}),n.jsx(Re,{children:x})]})}),n.jsx(F,{children:n.jsx(me,{type:"button",onClick:()=>f(c._id),children:n.jsx(ye,{children:n.jsx("use",{href:k+"#icon-trash"})})})})]},c._id)})})]}):n.jsx(rt,{children:"Not found products"})]})},bn=h.ul`
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
`,A=h.li`
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
      border: 1px solid ${a.green};
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
      border: 1px solid ${a.green};
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
      border: 1px solid ${a.green};
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
      border: 1px solid ${a.green};
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
      border: 1px solid ${a.green};
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
      border: 1px solid ${a.green};
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
    color: ${a.white};
      border-radius: 12px;
      border: 1px solid ${a.green};
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
`,jn=({exercisesArray:e,date:t})=>{const i=Je("(max-width:768px)"),r=W(ze),s=Ce(),o=d=>d.charAt(0).toUpperCase()+d.slice(1).toLowerCase(),l=async d=>{try{await s(ut(d)),await s(xe(t)),fe.Notify.success("Exercise deleted successfully!",{theme:"light"})}catch(x){console.log(x),fe.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return n.jsxs(Xe,{children:[n.jsxs(et,{children:[n.jsx(tt,{children:"Exercises"}),n.jsx(nt,{children:n.jsxs(He,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[n.jsx(it,{children:"Add exercises"}),n.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:a.orange},children:n.jsx("use",{href:k+"#icon-arrow-right"})})]})})]}),e&&e.length>0&&!r?i?n.jsx(ge,{children:n.jsx(we,{children:e.map(d=>{var x,f,c,p;return n.jsxs(Be,{children:[n.jsx(A,{children:"Body Part"}),n.jsx(A,{children:o((x=d.exerciseID)==null?void 0:x.bodyPart)}),n.jsx(A,{children:"Equipment"}),n.jsx(A,{children:o((f=d.exerciseID)==null?void 0:f.equipment)}),n.jsx(A,{children:"Name"}),n.jsx(A,{children:o((c=d.exerciseID)==null?void 0:c.name)}),n.jsxs(st,{children:[n.jsxs(ot,{children:[n.jsx(A,{children:"Target"}),n.jsx(A,{children:o((p=d.exerciseID)==null?void 0:p.target)})]}),n.jsxs(at,{children:[n.jsx(A,{children:"Burned Calories"}),n.jsx(A,{children:d.calories})]}),n.jsxs(ct,{children:[n.jsx(A,{children:"Time"}),n.jsx(A,{children:d.time})]}),n.jsxs(dt,{children:[n.jsx(A,{children:""}),n.jsx(me,{type:"button",onClick:()=>l(d._id),children:n.jsx(ye,{children:n.jsx("use",{href:k+"#icon-trash-03"})})})]})]})]},d._id)})})}):n.jsxs(ge,{children:[n.jsxs(bn,{children:[n.jsx(H,{children:"Body Part"}),n.jsx(H,{children:"Equipment"}),n.jsx(H,{children:"Name"}),n.jsx(H,{children:"Target"}),n.jsx(H,{children:"Burned Calories"}),n.jsx(H,{children:"Time"}),n.jsx(H,{children:""})]}),n.jsx(we,{children:e.map(d=>n.jsxs(Be,{children:[n.jsx(U,{children:o(d.exerciseID.bodyPart)}),n.jsx(U,{children:o(d.exerciseID.equipment)}),n.jsx(U,{children:o(d.exerciseID.name)}),n.jsx(U,{children:o(d.exerciseID.target)}),n.jsx(U,{children:d.calories}),n.jsx(U,{children:d.time}),n.jsx(U,{children:n.jsx(me,{type:"button",onClick:()=>l(d._id),children:n.jsx(ye,{children:n.jsx("use",{href:k+"#icon-trash-03"})})})})]},d._id))})]}):n.jsx(rt,{children:"Not found exercises"})]})},vn=h.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,$n=h.ul`
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
`,K=h.li`
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
  }
`,V=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,Z=h.h2`
  font-size: 12px;
  line-height: 16px;
  color: ${a.white};

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 18px;
  }
`,q=h.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: ${a.white};


  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,kn=h.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Dn=h.div`
  width: 24px;
  height: 24px;
  background-color: ${a.beige};
  border-radius: 50%;
`,G=h.svg`
  width: 20px;
  height: 20px;
  fill: ${a.orangeSecond};
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
`,In=({userDiaryInformation:e,bmr:t})=>{const{burnedCalories:i,consumedCalories:r,remainingCalories:s,remainingSports:o}=e,[l,d]=$.useState(!1),[x,f]=$.useState(!1),c=W(ze);return $.useEffect(()=>{s<0?d(!0):d(!1),o<0?f(!0):f(!1)},[s,o]),n.jsxs(vn,{children:[n.jsxs($n,{children:[n.jsxs(K,{children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:`${k}#icon-fork-knife`})}),n.jsx(Z,{children:"Daily calorie intake"})]}),n.jsx(q,{children:t&&t!==null&&t!==0?t:2200})]}),n.jsxs(K,{children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:k+"#icon-dumbbell"})}),n.jsx(Z,{children:"Daily norm of sports"})]}),n.jsx(q,{children:"110 min"})]}),n.jsxs(K,{children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:k+"#icon-apple"})}),n.jsx(Z,{children:"Calories consumed"})]}),n.jsx(q,{children:r&&!c?r:0})]}),n.jsxs(K,{children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:k+"#icon-fire"})}),n.jsx(Z,{children:"Calories burned"})]}),n.jsx(q,{children:i&&!c?i:0})]}),n.jsxs(K,{className:l?"redBg":"",children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:k+"#icon-bubble"})}),n.jsx(Z,{children:"The rest of the calories"})]}),n.jsx(q,{children:s&&!c?s:t||0})]}),n.jsxs(K,{className:x?"greenBg":"",children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:k+"#icon-running-figure"})}),n.jsx(Z,{children:"The rest of sports"})]}),n.jsxs(q,{children:[o&&!c?o:110," min"]})]})]}),n.jsxs(kn,{children:[n.jsx(Dn,{children:n.jsx(Sn,{children:n.jsx("use",{href:k+"#icon-running-stick-figure-svgrepo-com-1"})})}),n.jsx(Cn,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},En=h.div`
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
`,Ae=e=>typeof e=="number"&&!isNaN(e),ie=e=>typeof e=="string",ht=e=>typeof e=="function",Ln=e=>$.isValidElement(e)||ie(e)||ht(e)||Ae(e),B=new Map;let Se=[];const Ne=new Set,lt=()=>B.size>0;function On(e,t){var i;if(t)return!((i=B.get(t))==null||!i.isToastActive(e));let r=!1;return B.forEach(s=>{s.isToastActive(e)&&(r=!0)}),r}function Mn(e,t){Ln(e)&&(lt()||Se.push({content:e,options:t}),B.forEach(i=>{i.buildToast(e,t)}))}function _e(e,t){B.forEach(i=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===i.id&&i.toggle(e,t==null?void 0:t.id):i.toggle(e,t==null?void 0:t.id)})}let Rn=1;const pt=()=>""+Rn++;function Bn(e){return e&&(ie(e.toastId)||Ae(e.toastId))?e.toastId:pt()}function re(e,t){return Mn(e,t),t.toastId}function be(e,t){return{...t,type:t&&t.type||e,toastId:Bn(t)}}function de(e){return(t,i)=>re(t,be(e,i))}function j(e,t){return re(e,be("default",t))}j.loading=(e,t)=>re(e,be("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),j.promise=function(e,t,i){let r,{pending:s,error:o,success:l}=t;s&&(r=ie(s)?j.loading(s,i):j.loading(s.render,{...i,...s}));const d={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},x=(c,p,S)=>{if(p==null)return void j.dismiss(r);const C={type:c,...d,...i,data:S},v=ie(p)?{render:p}:p;return r?j.update(r,{...C,...v}):j(v.render,{...C,...v}),S},f=ht(e)?e():e;return f.then(c=>x("success",l,c)).catch(c=>x("error",o,c)),f},j.success=de("success"),j.info=de("info"),j.error=de("error"),j.warning=de("warning"),j.warn=j.warning,j.dark=(e,t)=>re(e,be("default",{theme:"dark",...t})),j.dismiss=function(e){(function(t){var i;if(lt()){if(t==null||ie(i=t)||Ae(i))B.forEach(s=>{s.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){var r;(r=B.get(t.containerId))!=null&&r.removeToast(t.id)||B.forEach(s=>{s.removeToast(t.id)})}}else Se=Se.filter(s=>t!=null&&s.options.toastId!==t)})(e)},j.clearWaitingQueue=function(e){e===void 0&&(e={}),B.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},j.isActive=On,j.update=function(e,t){t===void 0&&(t={});const i=((r,s)=>{var o;let{containerId:l}=s;return(o=B.get(l||1))==null?void 0:o.toasts.get(r)})(e,t);if(i){const{props:r,content:s}=i,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:pt()};o.toastId!==e&&(o.staleId=e);const l=o.render||s;delete o.render,re(l,o)}},j.done=e=>{j.update(e,{progress:1})},j.onChange=function(e){return Ne.add(e),()=>{Ne.delete(e)}},j.play=e=>_e(!0,e),j.pause=e=>_e(!1,e);const Hn=()=>{const[e,t]=$.useState([]),[i,r]=$.useState([]),[s,o]=$.useState([]),l=Ce(),d=W(mn),x=W(gt),f=W(wt),[c,p]=$.useState(new Date),C=W(We).createdAt,v=b=>{const m=new Date(b),L=String(m.getDate()).padStart(2,"0"),Q=String(m.getMonth()+1).padStart(2,"0"),_=m.getFullYear();return`${L}-${Q}-${_}`},w=v(c),E=v(C);return $.useEffect(()=>{(async()=>{try{await l(yt()),await l(xe(w))}catch{j.error("Sorry, something went wrong, please try again",{theme:"dark"})}})()},[l,w,c]),$.useEffect(()=>{(async()=>{const m=await l(xe("06-03-2024"));t(m.payload),r(m.payload.products),o(m.payload.exercises)})()},[l]),n.jsx(Pn,{children:d||x?n.jsx(mt,{}):n.jsxs(En,{children:[n.jsxs(Tn,{children:[n.jsx(vt,{title:"Diary"}),n.jsx(zt,{currentDate:c,setCurrentDate:p,userDateRegistration:E})]}),n.jsxs(An,{children:[n.jsx(In,{userDiaryInformation:e,bmr:f}),n.jsxs(zn,{children:[n.jsx(yn,{productsArray:i,date:w}),n.jsx(jn,{exercisesArray:s,date:w})]})]})]})})};export{Hn as default};
