import{u as l,i as a,r as k,j as n,s as I,k as xe,m as xt,b as Ie,n as H,o as We,N as He,p as ft,q as fe,t as ut,v as gt,w as wt,L as mt,e as yt}from"./index-67c9ab14.js";import{f as bt,D as jt}from"./Datapicker-a1cdb442.js";import{T as vt}from"./TitlePage-9d518307.js";const $t=l.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,kt=l.button`
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
`,Dt=l.p`
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
`,St=l.svg`
  width: 20px;
  height: 20px;
  stroke: ${a.orange};

  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,It=l.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 40px;
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
`,Ct=l.button`
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
`,Et=l.svg`
  width: 100%;
  height: 100%;
  fill: ${a.white};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,Tt=l.svg`
  width: 100%;
  height: 100%;
  fill: ${a.white};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`,zt=({currentDate:e,setCurrentDate:t,userDateRegistration:i})=>{const[r,s]=k.useState(e),[o,h]=k.useState(!1),[c,p]=k.useState(!1),[w,d]=k.useState(!1),x=b=>{const f=new Date(b),y=String(f.getDate()).padStart(2,"0"),z=String(f.getMonth()+1).padStart(2,"0"),W=f.getFullYear();return`${y}-${z}-${W}`},D=()=>{h(!o)},S=()=>{p(!0);const b=new Date(e);x(b)>i?(b.setDate(b.getDate()-1),t(b),s(b),p(!1)):(xe.Notify.failure(`However, we don't have any data to show you. Selected date cannot be earlier than the registration date: ${i}.`,{theme:"dark"}),p(!0))},j=()=>{d(!0);const b=x(new Date),f=new Date(r);f.setDate(r.getDate()+1),f>new Date?(xe.Notify.failure(`However, we don't have any data to show you. Selected date cannot be later than today's date: ${b}.`,{theme:"dark"}),d(!0)):(t(f),s(f),d(!1))},m=()=>{h(!1)};return n.jsxs($t,{children:[n.jsxs(It,{onClick:D,children:[n.jsx(Dt,{children:bt(r,"dd/MM/yyyy")}),n.jsx(St,{children:n.jsx("use",{href:I+"#icon-calendar"})})]}),n.jsx(Ct,{type:"button",onClick:S,children:n.jsx(Et,{className:c?"passivePrev":"",children:n.jsx("use",{href:I+"#icon-chevron-left"})})}),n.jsx(kt,{type:"button",onClick:j,children:n.jsx(Tt,{className:w?"passiveNext":"",children:n.jsx("use",{href:I+"#icon-chevron-right"})})}),n.jsx(jt,{selectedDate:r,setSelectedDate:s,isOpen:o,onClose:m,setCurrentDate:t,userDateRegistration:i})]})};function ne(){return ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},ne.apply(this,arguments)}function At(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Pt(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Lt=function(){function e(i){var r=this;this._insertTag=function(s){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(s,o),r.tags.push(s)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Pt(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var o=At(s);try{o.insertRule(r,o.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),T="-ms-",ue="-moz-",u="-webkit-",Ue="comm",Ce="rule",Ee="decl",Mt="@import",Qe="@keyframes",Ot="@layer",Nt=Math.abs,je=String.fromCharCode,Rt=Object.assign;function Bt(e,t){return E(e,0)^45?(((t<<2^E(e,0))<<2^E(e,1))<<2^E(e,2))<<2^E(e,3):0}function Ye(e){return e.trim()}function _t(e,t){return(e=t.exec(e))?e[0]:e}function g(e,t,i){return e.replace(t,i)}function ke(e,t){return e.indexOf(t)}function E(e,t){return e.charCodeAt(t)|0}function se(e,t,i){return e.slice(t,i)}function N(e){return e.length}function Te(e){return e.length}function ce(e,t){return t.push(e),e}function Wt(e,t){return e.map(t).join("")}var ve=1,X=1,Fe=0,P=0,C=0,ee="";function $e(e,t,i,r,s,o,h){return{value:e,root:t,parent:i,type:r,props:s,children:o,line:ve,column:X,length:h,return:""}}function te(e,t){return Rt($e("",null,null,"",null,null,0),e,{length:-e.length},t)}function Ht(){return C}function Ut(){return C=P>0?E(ee,--P):0,X--,C===10&&(X=1,ve--),C}function L(){return C=P<Fe?E(ee,P++):0,X++,C===10&&(X=1,ve++),C}function B(){return E(ee,P)}function he(){return P}function ae(e,t){return se(ee,e,t)}function oe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ke(e){return ve=X=1,Fe=N(ee=e),P=0,[]}function Ve(e){return ee="",e}function le(e){return Ye(ae(P-1,De(e===91?e+2:e===40?e+1:e)))}function Qt(e){for(;(C=B())&&C<33;)L();return oe(e)>2||oe(C)>3?"":" "}function Yt(e,t){for(;--t&&L()&&!(C<48||C>102||C>57&&C<65||C>70&&C<97););return ae(e,he()+(t<6&&B()==32&&L()==32))}function De(e){for(;L();)switch(C){case e:return P;case 34:case 39:e!==34&&e!==39&&De(C);break;case 40:e===41&&De(e);break;case 92:L();break}return P}function Ft(e,t){for(;L()&&e+C!==47+10;)if(e+C===42+42&&B()===47)break;return"/*"+ae(t,P-1)+"*"+je(e===47?e:L())}function Kt(e){for(;!oe(B());)L();return ae(e,P)}function Vt(e){return Ve(pe("",null,null,null,[""],e=Ke(e),0,[0],e))}function pe(e,t,i,r,s,o,h,c,p){for(var w=0,d=0,x=h,D=0,S=0,j=0,m=1,b=1,f=1,y=0,z="",W=s,_=o,O=r,v=z;b;)switch(j=y,y=L()){case 40:if(j!=108&&E(v,x-1)==58){ke(v+=g(le(y),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:v+=le(y);break;case 9:case 10:case 13:case 32:v+=Qt(j);break;case 92:v+=Yt(he()-1,7);continue;case 47:switch(B()){case 42:case 47:ce(Zt(Ft(L(),he()),t,i),p);break;default:v+="/"}break;case 123*m:c[w++]=N(v)*f;case 125*m:case 59:case 0:switch(y){case 0:case 125:b=0;case 59+d:f==-1&&(v=g(v,/\f/g,"")),S>0&&N(v)-x&&ce(S>32?Le(v+";",r,i,x-1):Le(g(v," ","")+";",r,i,x-2),p);break;case 59:v+=";";default:if(ce(O=Pe(v,t,i,w,d,s,c,z,W=[],_=[],x),o),y===123)if(d===0)pe(v,t,O,O,W,o,x,c,_);else switch(D===99&&E(v,3)===110?100:D){case 100:case 108:case 109:case 115:pe(e,O,O,r&&ce(Pe(e,O,O,0,0,s,c,z,s,W=[],x),_),s,_,x,c,r?W:_);break;default:pe(v,O,O,O,[""],_,0,c,_)}}w=d=S=0,m=f=1,z=v="",x=h;break;case 58:x=1+N(v),S=j;default:if(m<1){if(y==123)--m;else if(y==125&&m++==0&&Ut()==125)continue}switch(v+=je(y),y*m){case 38:f=d>0?1:(v+="\f",-1);break;case 44:c[w++]=(N(v)-1)*f,f=1;break;case 64:B()===45&&(v+=le(L())),D=B(),d=x=N(z=v+=Kt(he())),y++;break;case 45:j===45&&N(v)==2&&(m=0)}}return o}function Pe(e,t,i,r,s,o,h,c,p,w,d){for(var x=s-1,D=s===0?o:[""],S=Te(D),j=0,m=0,b=0;j<r;++j)for(var f=0,y=se(e,x+1,x=Nt(m=h[j])),z=e;f<S;++f)(z=Ye(m>0?D[f]+" "+y:g(y,/&\f/g,D[f])))&&(p[b++]=z);return $e(e,t,i,s===0?Ce:c,p,w,d)}function Zt(e,t,i){return $e(e,t,i,Ue,je(Ht()),se(e,2,-2),0)}function Le(e,t,i,r){return $e(e,t,i,Ee,se(e,0,r),se(e,r+1,-1),r)}function J(e,t){for(var i="",r=Te(e),s=0;s<r;s++)i+=t(e[s],s,e,t)||"";return i}function qt(e,t,i,r){switch(e.type){case Ot:if(e.children.length)break;case Mt:case Ee:return e.return=e.return||e.value;case Ue:return"";case Qe:return e.return=e.value+"{"+J(e.children,r)+"}";case Ce:e.value=e.props.join(",")}return N(i=J(e.children,r))?e.return=e.value+"{"+i+"}":""}function Gt(e){var t=Te(e);return function(i,r,s,o){for(var h="",c=0;c<t;c++)h+=e[c](i,r,s,o)||"";return h}}function Jt(e){return function(t){t.root||(t=t.return)&&e(t)}}var Xt=function(t,i,r){for(var s=0,o=0;s=o,o=B(),s===38&&o===12&&(i[r]=1),!oe(o);)L();return ae(t,P)},en=function(t,i){var r=-1,s=44;do switch(oe(s)){case 0:s===38&&B()===12&&(i[r]=1),t[r]+=Xt(P-1,i,r);break;case 2:t[r]+=le(s);break;case 4:if(s===44){t[++r]=B()===58?"&\f":"",i[r]=t[r].length;break}default:t[r]+=je(s)}while(s=L());return t},tn=function(t,i){return Ve(en(Ke(t),i))},Me=new WeakMap,nn=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var i=t.value,r=t.parent,s=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&i.charCodeAt(0)!==58&&!Me.get(r))&&!s){Me.set(t,!0);for(var o=[],h=tn(i,o),c=r.props,p=0,w=0;p<h.length;p++)for(var d=0;d<c.length;d++,w++)t.props[w]=o[p]?h[p].replace(/&\f/g,c[d]):c[d]+" "+h[p]}}},rn=function(t){if(t.type==="decl"){var i=t.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(t.return="",t.value="")}};function Ze(e,t){switch(Bt(e,t)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+ue+e+T+e+e;case 6828:case 4268:return u+e+T+e+e;case 6165:return u+e+T+"flex-"+e+e;case 5187:return u+e+g(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+T+"flex-$1$2")+e;case 5443:return u+e+T+"flex-item-"+g(e,/flex-|-self/,"")+e;case 4675:return u+e+T+"flex-line-pack"+g(e,/align-content|flex-|-self/,"")+e;case 5548:return u+e+T+g(e,"shrink","negative")+e;case 5292:return u+e+T+g(e,"basis","preferred-size")+e;case 6060:return u+"box-"+g(e,"-grow","")+u+e+T+g(e,"grow","positive")+e;case 4554:return u+g(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return g(g(g(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return g(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return g(g(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+T+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4095:case 3583:case 4068:case 2532:return g(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(N(e)-1-t>6)switch(E(e,t+1)){case 109:if(E(e,t+4)!==45)break;case 102:return g(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+ue+(E(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ke(e,"stretch")?Ze(g(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(E(e,t+1)!==115)break;case 6444:switch(E(e,N(e)-3-(~ke(e,"!important")&&10))){case 107:return g(e,":",":"+u)+e;case 101:return g(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+u+(E(e,14)===45?"inline-":"")+"box$3$1"+u+"$2$3$1"+T+"$2box$3")+e}break;case 5936:switch(E(e,t+11)){case 114:return u+e+T+g(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+T+g(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+T+g(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return u+e+T+e+e}return e}var sn=function(t,i,r,s){if(t.length>-1&&!t.return)switch(t.type){case Ee:t.return=Ze(t.value,t.length);break;case Qe:return J([te(t,{value:g(t.value,"@","@"+u)})],s);case Ce:if(t.length)return Wt(t.props,function(o){switch(_t(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return J([te(t,{props:[g(o,/:(read-\w+)/,":"+ue+"$1")]})],s);case"::placeholder":return J([te(t,{props:[g(o,/:(plac\w+)/,":"+u+"input-$1")]}),te(t,{props:[g(o,/:(plac\w+)/,":"+ue+"$1")]}),te(t,{props:[g(o,/:(plac\w+)/,T+"input-$1")]})],s)}return""})}},on=[sn],an=function(t){var i=t.key;if(i==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(m){var b=m.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var s=t.stylisPlugins||on,o={},h,c=[];h=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(m){for(var b=m.getAttribute("data-emotion").split(" "),f=1;f<b.length;f++)o[b[f]]=!0;c.push(m)});var p,w=[nn,rn];{var d,x=[qt,Jt(function(m){d.insert(m)})],D=Gt(w.concat(s,x)),S=function(b){return J(Vt(b),D)};p=function(b,f,y,z){d=y,S(b?b+"{"+f.styles+"}":f.styles),z&&(j.inserted[f.name]=!0)}}var j={key:i,sheet:new Lt({key:i,container:h,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:p};return j.sheet.hydrate(c),j},cn=k.createContext(typeof HTMLElement<"u"?an({key:"css"}):null);cn.Provider;var dn=k.createContext({});function hn(e){return Object.keys(e).length===0}function ln(e=null){const t=k.useContext(dn);return!t||hn(t)?e:t}function qe(e,t){const i=ne({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))i[r]=ne({},e[r],i[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const s=e[r]||{},o=t[r];i[r]={},!o||!Object.keys(o)?i[r]=s:!s||!Object.keys(s)?i[r]=o:(i[r]=ne({},o),Object.keys(s).forEach(h=>{i[r][h]=qe(s[h],o[h])}))}else i[r]===void 0&&(i[r]=e[r])}),i}function pn(e){const{theme:t,name:i,props:r}=e;return!t||!t.components||!t.components[i]||!t.components[i].defaultProps?r:qe(t.components[i].defaultProps,r)}const xn=typeof window<"u"?k.useLayoutEffect:k.useEffect,fn=xn;function un(e,t,i,r,s){const[o,h]=k.useState(()=>s&&i?i(e).matches:r?r(e).matches:t);return fn(()=>{let c=!0;if(!i)return;const p=i(e),w=()=>{c&&h(p.matches)};return w(),p.addListener(w),()=>{c=!1,p.removeListener(w)}},[e,i]),o}const Ge=xt["useSyncExternalStore"];function gn(e,t,i,r,s){const o=k.useCallback(()=>t,[t]),h=k.useMemo(()=>{if(s&&i)return()=>i(e).matches;if(r!==null){const{matches:d}=r(e);return()=>d}return o},[o,e,r,s,i]),[c,p]=k.useMemo(()=>{if(i===null)return[o,()=>()=>{}];const d=i(e);return[()=>d.matches,x=>(d.addListener(x),()=>{d.removeListener(x)})]},[o,i,e]);return Ge(p,c,h)}function Je(e,t={}){const i=ln(),r=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:s=!1,matchMedia:o=r?window.matchMedia:null,ssrMatchMedia:h=null,noSsr:c=!1}=pn({name:"MuiUseMediaQuery",props:t,theme:i});let p=typeof e=="function"?e(i):e;return p=p.replace(/^@media( ?)/m,""),(Ge!==void 0?gn:un)(p,s,o,h,c)}const Xe=l.div`
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
`,et=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,tt=l.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,nt=l.div`
  &:hover span {
    color: ${a.orange};
  }
`,it=l.span`
color: ${a.orange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,rt=l.p`
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
`,ge=l.div`
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
`,we=l.div`
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
`,wn=l.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`,Y=l.li`
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
`,Oe=l.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,M=l.li`
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
  }
`,F=l.li`
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
`,st=l.div`
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`,ot=l.div`
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
      width: 79px;

      &:nth-of-type(2) {
        margin-bottom: 40px;
      }
    }
  }
`,at=l.div`
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
      width: 78px;
    }
  }
`,ct=l.div`
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
      width: 74px;
    }
  }
`,dt=l.div`
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
`,me=l.button`
  width: 100%;
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
`,ye=l.svg`
  stroke: ${a.orange};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;
`,Ne=l.span`
  @media screen and (min-width: 320px) {
    color: ${a.white};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,mn=e=>e.diary.isLoading,ze=e=>e.diary.error,yn=({productsArray:e,date:t})=>{console.log(e);const i=Ie(),s=H(We).blood,o=H(ze),h=Je("(max-width:768px)"),c=d=>typeof d!="string"||d.length===0?"":d[0].toUpperCase()+d.slice(1).toLowerCase();let p;const w=async d=>{try{await i(ft(d)),await i(fe(t))}catch{xe.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return n.jsxs(Xe,{children:[n.jsxs(et,{children:[n.jsx(tt,{children:"Products"}),n.jsx(nt,{children:n.jsxs(He,{to:"/products",style:{display:"flex",alignItems:"center"},children:[n.jsx(it,{children:"Add product"}),n.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:a.orange},children:n.jsx("use",{href:I+"#icon-arrow"})})]})})]}),e&&e.length>0&&!o?h?n.jsx(ge,{children:n.jsx(we,{children:e.map(d=>{var D,S;const x=d.productID.groupBloodNotAllowed[s]?"Yes":"No";return n.jsxs(Oe,{children:[n.jsx(M,{children:"Title"}),n.jsx(M,{children:c((D=d.productID)==null?void 0:D.title)}),n.jsx(M,{children:"Category"}),n.jsx(M,{children:c((S=d.productID)==null?void 0:S.category)}),n.jsxs(st,{children:[n.jsxs(ot,{style:{display:"flex",flexDirection:"column"},children:[n.jsx(M,{children:"Calories"}),n.jsx(M,{children:d.calories})]}),n.jsxs(at,{style:{display:"flex",flexDirection:"column"},children:[n.jsx(M,{children:"Weight"}),n.jsx(M,{children:d.amount})]}),n.jsxs(ct,{style:{display:"flex",flexDirection:"column"},children:[n.jsx(M,{children:"Recommend"}),n.jsx(M,{children:n.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[n.jsx("svg",{style:{width:"14px",height:"14px"},children:x==="Yes"?n.jsx("use",{href:I+"#icon-Ellipse-82",style:{fill:a.green,stroke:a.green}}):n.jsx("use",{href:I+"#icon-Ellipse-82",style:{fill:a.red,stroke:a.red}})}),n.jsx(Ne,{children:p})]})})]}),n.jsxs(dt,{style:{display:"flex",flexDirection:"column"},children:[n.jsx(M,{children:""}),n.jsx(M,{children:n.jsx(me,{type:"button",onClick:()=>w(d._id),children:n.jsx(ye,{children:n.jsx("use",{href:I+"#icon-trash-03"})})})})]})]})]},d._id)})})}):n.jsxs(ge,{children:[n.jsxs(wn,{children:[n.jsx(Y,{children:"Title"}),n.jsx(Y,{children:"Category"}),n.jsx(Y,{children:"Calories"}),n.jsx(Y,{children:"Weight"}),n.jsx(Y,{children:"Recommend"}),n.jsx(Y,{children:""})]}),n.jsx(we,{children:e.map(d=>{var D,S,j;const x=(D=d.productID)!=null&&D.groupBloodNotAllowed[s]?p="Yes":p="No";return n.jsxs(Oe,{children:[n.jsx(F,{children:c((S=d.productID)==null?void 0:S.title)}),n.jsx(F,{children:c((j=d.productID)==null?void 0:j.category)}),n.jsx(F,{children:d.calories}),n.jsx(F,{children:d.amount}),n.jsx(F,{children:n.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[n.jsx("svg",{style:{width:"14px",height:"14px"},children:x==="Yes"?n.jsx("use",{href:I+"#icon-Ellipse-82",style:{fill:a.green,stroke:a.green}}):n.jsx("use",{href:I+"#icon-Ellipse-82",style:{fill:a.red,stroke:a.red}})}),n.jsx(Ne,{children:p})]})}),n.jsx(F,{children:n.jsx(me,{type:"button",onClick:()=>w(d._id),children:n.jsx(ye,{children:n.jsx("use",{href:I+"#icon-trash-03"})})})})]},d._id)})})]}):n.jsx(rt,{children:"Not found products"})]})},bn=l.ul`
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
`,U=l.li`
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
`,Re=l.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,A=l.li`
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
`,Q=l.li`
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
`,jn=({exercisesArray:e,date:t})=>{console.log(e);const i=Je("(max-width:768px)"),r=H(ze),s=Ie(),o=c=>c[0].toUpperCase()+c.slice(1).toLowerCase(),h=async c=>{try{await s(ut(c)),await s(fe(t))}catch(p){console.log(p),xe.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return n.jsxs(Xe,{children:[n.jsxs(et,{children:[n.jsx(tt,{children:"Exercises"}),n.jsx(nt,{children:n.jsxs(He,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[n.jsx(it,{children:"Add exercises"}),n.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:a.orange},children:n.jsx("use",{href:I+"#icon-arrow"})})]})})]}),e&&e.length>0&&!r?i?n.jsx(ge,{children:n.jsx(we,{children:e.map(c=>{var p,w,d,x;return n.jsxs(Re,{children:[n.jsx(A,{children:"Body Part"}),n.jsx(A,{children:o((p=c.exerciseID)==null?void 0:p.bodyPart)}),n.jsx(A,{children:"Equipment"}),n.jsx(A,{children:o((w=c.exerciseID)==null?void 0:w.equipment)}),n.jsx(A,{children:"Name"}),n.jsx(A,{children:o((d=c.exerciseID)==null?void 0:d.name)}),n.jsxs(st,{children:[n.jsxs(ot,{style:{display:"flex",flexDirection:"column"},children:[n.jsx(A,{children:"Target"}),n.jsx(A,{children:o((x=c.exerciseID)==null?void 0:x.target)})]}),n.jsxs(at,{style:{display:"flex",flexDirection:"column"},children:[n.jsx(A,{children:"Burned Calories"}),n.jsx(A,{children:c.calories})]}),n.jsxs(ct,{style:{display:"flex",flexDirection:"column"},children:[n.jsx(A,{children:"Time"}),n.jsx(A,{children:c.time})]}),n.jsxs(dt,{style:{display:"flex",flexDirection:"column"},children:[n.jsx(A,{children:""}),n.jsx(A,{children:n.jsx(me,{type:"button",onClick:()=>h(c._id),children:n.jsx(ye,{children:n.jsx("use",{href:I+"#icon-trash-03"})})})})]})]})]},c._id)})})}):n.jsxs(ge,{children:[n.jsxs(bn,{children:[n.jsx(U,{children:"Body Part"}),n.jsx(U,{children:"Equipment"}),n.jsx(U,{children:"Name"}),n.jsx(U,{children:"Target"}),n.jsx(U,{children:"Burned Calories"}),n.jsx(U,{children:"Time"}),n.jsx(U,{children:""})]}),n.jsx(we,{children:e.map(c=>n.jsxs(Re,{children:[n.jsx(Q,{children:o(c.exerciseID.bodyPart)}),n.jsx(Q,{children:o(c.exerciseID.equipment)}),n.jsx(Q,{children:o(c.exerciseID.name)}),n.jsx(Q,{children:o(c.exerciseID.target)}),n.jsx(Q,{children:c.calories}),n.jsx(Q,{children:c.time}),n.jsx(Q,{children:n.jsx(me,{type:"button",onClick:()=>h(c._id),children:n.jsx(ye,{children:n.jsx("use",{href:I+"#icon-trash-03"})})})})]},c._id))})]}):n.jsx(rt,{children:"Not found exercises"})]})},vn=l.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,$n=l.ul`
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
`,K=l.li`
  display: block;
  width: 157px;
  padding: 14px;
  background-color: ${a.beige};
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
`,V=l.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,Z=l.h2`
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 18px;
  }
`,q=l.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,kn=l.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Dn=l.div`
  width: 24px;
  height: 24px;
  background-color: ${a.beige};
  border-radius: 50%;
`,G=l.svg`
  width: 20px;
  height: 20px;
  fill: ${a.orangeSecond};
`,Sn=l.svg`
  width: 24px;
  height: 24px;
`,In=l.p`
  font-size: 14px;
  line-height: 18px;
  color: ${a.green};

  @media screen and (max-width: 374px) {
    max-width: calc(100% - 72px);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Cn=({userDiaryInformation:e,bmr:t})=>{const{burnedCalories:i,consumedCalories:r,remainingCalories:s,remainingSports:o}=e,[h,c]=k.useState(!1),p=H(ze);return k.useEffect(()=>{s<0&&c(!0)},[s]),n.jsxs(vn,{children:[n.jsxs($n,{children:[n.jsxs(K,{children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:I+"#icon-fluent_food-24-filled"})}),n.jsx(Z,{children:"Daily calory intake"})]}),n.jsx(q,{children:t&&t!==null&&t!==0?t:2200})]}),n.jsxs(K,{children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:I+"#icon-dumbbell"})}),n.jsx(Z,{children:"Daily norm of sports"})]}),n.jsx(q,{children:"110 min"})]}),n.jsxs(K,{children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:I+"#icon-fluent_food-apple-20-filled"})}),n.jsx(Z,{children:"Calories consumed"})]}),n.jsx(q,{children:r&&!p?r:0})]}),n.jsxs(K,{children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:I+"#icon-calories-1"})}),n.jsx(Z,{children:"Calories burned"})]}),n.jsx(q,{children:i&&!p?i:0})]}),n.jsxs(K,{className:h?"redBg":"",children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:I+"#icon-bubble"})}),n.jsx(Z,{children:"The rest of the calories"})]}),n.jsx(q,{children:s&&!p?s:t||0})]}),n.jsxs(K,{className:h?"greenBg":"",children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:I+"#icon-running-figure"})}),n.jsx(Z,{children:"The rest of sports"})]}),n.jsxs(q,{children:[o&&!p?o:110," min"]})]})]}),n.jsxs(kn,{children:[n.jsx(Dn,{children:n.jsx(Sn,{children:n.jsx("use",{href:I+"#icon-running-stick-figure-svgrepo-com-1"})})}),n.jsx(In,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},En=l.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,Tn=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,zn=l.div`
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
`,An=l.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Pn=l.div`
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
`,Ae=e=>typeof e=="number"&&!isNaN(e),ie=e=>typeof e=="string",ht=e=>typeof e=="function",Ln=e=>k.isValidElement(e)||ie(e)||ht(e)||Ae(e),R=new Map;let Se=[];const Be=new Set,lt=()=>R.size>0;function Mn(e,t){var i;if(t)return!((i=R.get(t))==null||!i.isToastActive(e));let r=!1;return R.forEach(s=>{s.isToastActive(e)&&(r=!0)}),r}function On(e,t){Ln(e)&&(lt()||Se.push({content:e,options:t}),R.forEach(i=>{i.buildToast(e,t)}))}function _e(e,t){R.forEach(i=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===i.id&&i.toggle(e,t==null?void 0:t.id):i.toggle(e,t==null?void 0:t.id)})}let Nn=1;const pt=()=>""+Nn++;function Rn(e){return e&&(ie(e.toastId)||Ae(e.toastId))?e.toastId:pt()}function re(e,t){return On(e,t),t.toastId}function be(e,t){return{...t,type:t&&t.type||e,toastId:Rn(t)}}function de(e){return(t,i)=>re(t,be(e,i))}function $(e,t){return re(e,be("default",t))}$.loading=(e,t)=>re(e,be("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),$.promise=function(e,t,i){let r,{pending:s,error:o,success:h}=t;s&&(r=ie(s)?$.loading(s,i):$.loading(s.render,{...i,...s}));const c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},p=(d,x,D)=>{if(x==null)return void $.dismiss(r);const S={type:d,...c,...i,data:D},j=ie(x)?{render:x}:x;return r?$.update(r,{...S,...j}):$(j.render,{...S,...j}),D},w=ht(e)?e():e;return w.then(d=>p("success",h,d)).catch(d=>p("error",o,d)),w},$.success=de("success"),$.info=de("info"),$.error=de("error"),$.warning=de("warning"),$.warn=$.warning,$.dark=(e,t)=>re(e,be("default",{theme:"dark",...t})),$.dismiss=function(e){(function(t){var i;if(lt()){if(t==null||ie(i=t)||Ae(i))R.forEach(s=>{s.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){var r;(r=R.get(t.containerId))!=null&&r.removeToast(t.id)||R.forEach(s=>{s.removeToast(t.id)})}}else Se=Se.filter(s=>t!=null&&s.options.toastId!==t)})(e)},$.clearWaitingQueue=function(e){e===void 0&&(e={}),R.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},$.isActive=Mn,$.update=function(e,t){t===void 0&&(t={});const i=((r,s)=>{var o;let{containerId:h}=s;return(o=R.get(h||1))==null?void 0:o.toasts.get(r)})(e,t);if(i){const{props:r,content:s}=i,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:pt()};o.toastId!==e&&(o.staleId=e);const h=o.render||s;delete o.render,re(h,o)}},$.done=e=>{$.update(e,{progress:1})},$.onChange=function(e){return Be.add(e),()=>{Be.delete(e)}},$.play=e=>_e(!0,e),$.pause=e=>_e(!1,e);const Hn=()=>{const[e,t]=k.useState([]),[i,r]=k.useState([]),[s,o]=k.useState([]),h=Ie(),c=H(mn),p=H(gt),w=H(wt),[d,x]=k.useState(new Date),S=H(We).createdAt,j=f=>{const y=new Date(f),z=String(y.getDate()).padStart(2,"0"),W=String(y.getMonth()+1).padStart(2,"0"),_=y.getFullYear();return`${z}-${W}-${_}`},m=j(d),b=j(S);return k.useEffect(()=>{(async()=>{try{await h(yt()),await h(fe(m))}catch{$.error("Sorry, something went wrong, please try again",{theme:"dark"})}})()},[h,m,d]),k.useEffect(()=>{(async()=>{const y=await h(fe("06-03-2024"));t(y.payload),r(y.payload.products),o(y.payload.exercises)})()},[h]),n.jsx(Pn,{children:c||p?n.jsx(mt,{}):n.jsxs(En,{children:[n.jsxs(Tn,{children:[n.jsx(vt,{title:"Diary"}),n.jsx(zt,{currentDate:d,setCurrentDate:x,userDateRegistration:b})]}),n.jsxs(An,{children:[n.jsx(Cn,{userDiaryInformation:e,bmr:w}),n.jsxs(zn,{children:[n.jsx(yn,{productsArray:i,date:m}),n.jsx(jn,{exercisesArray:s,date:m})]})]})]})})};export{Hn as default};
