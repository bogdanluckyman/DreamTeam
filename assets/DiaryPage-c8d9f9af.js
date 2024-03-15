import{u as d,h as a,r as v,j as t,s as S,i as et,a as ye,k as B,m as Te,n as tt,L as Ie,o as it,p as ee,q as nt,t as rt,v as st,w as ot}from"./index-b32af529.js";import{D as at}from"./Datapicker-21ccc00e.js";import{T as ct}from"./TitlePage-7987a21d.js";const dt=d.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-bottom: 24px; */

  @media screen and (max-width: 768px) {
    margin-bottom: -10px;
  }
`,ht=d.button`
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
`;const pt=d.svg`
  width: 20px;
  height: 20px;
  stroke: ${a.orange};

  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,lt=d.div`
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
`,xt=d.button`
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
`,ft=d.svg`
  width: 100%;
  height: 100%;
  fill: ${a.white};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,gt=d.svg`
  width: 100%;
  height: 100%;
  fill: ${a.white};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`,ut=({currentDate:e,setCurrentDate:i,userDateRegistration:r})=>{const[n,s]=v.useState(e),[o,f]=v.useState(!1),h=()=>{const p=new Date(n);p.setDate(p.getDate()-1),i(p),s(p)},g=()=>{const p=new Date(n);p.setDate(p.getDate()+1),i(p),s(p)},c=()=>{f(!1)},l=p=>{s(p),i(p),f(!1)};return t.jsxs(dt,{children:[t.jsxs(lt,{children:[t.jsx(at,{selectedDate:n,setSelectedDate:l,isOpen:o,onClose:c,setCurrentDate:i,userDateRegistration:r}),t.jsx(pt,{children:t.jsx("use",{href:`${S}#icon-calendar-orange`})})]}),t.jsx(xt,{type:"button",onClick:h,children:t.jsx(ft,{children:t.jsx("use",{href:`${S}#icon-chevron-left`})})}),t.jsx(ht,{type:"button",onClick:g,children:t.jsx(gt,{children:t.jsx("use",{href:`${S}#icon-chevron-right`})})})]})};function X(){return X=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},X.apply(this,arguments)}function wt(e){if(e.sheet)return e.sheet;for(var i=0;i<document.styleSheets.length;i++)if(document.styleSheets[i].ownerNode===e)return document.styleSheets[i]}function mt(e){var i=document.createElement("style");return i.setAttribute("data-emotion",e.key),e.nonce!==void 0&&i.setAttribute("nonce",e.nonce),i.appendChild(document.createTextNode("")),i.setAttribute("data-s",""),i}var yt=function(){function e(r){var n=this;this._insertTag=function(s){var o;n.tags.length===0?n.insertionPoint?o=n.insertionPoint.nextSibling:n.prepend?o=n.container.firstChild:o=n.before:o=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(s,o),n.tags.push(s)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var i=e.prototype;return i.hydrate=function(n){n.forEach(this._insertTag)},i.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(mt(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var o=wt(s);try{o.insertRule(n,o.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(n));this.ctr++},i.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),A="-ms-",de="-moz-",w="-webkit-",Pe="comm",be="rule",je="decl",bt="@import",Le="@keyframes",jt="@layer",vt=Math.abs,fe=String.fromCharCode,$t=Object.assign;function kt(e,i){return C(e,0)^45?(((i<<2^C(e,0))<<2^C(e,1))<<2^C(e,2))<<2^C(e,3):0}function Me(e){return e.trim()}function St(e,i){return(e=i.exec(e))?e[0]:e}function m(e,i,r){return e.replace(i,r)}function we(e,i){return e.indexOf(i)}function C(e,i){return e.charCodeAt(i)|0}function te(e,i,r){return e.slice(i,r)}function O(e){return e.length}function ve(e){return e.length}function se(e,i){return i.push(e),e}function Dt(e,i){return e.map(i).join("")}var ge=1,Z=1,Oe=0,T=0,D=0,G="";function ue(e,i,r,n,s,o,f){return{value:e,root:i,parent:r,type:n,props:s,children:o,line:ge,column:Z,length:f,return:""}}function J(e,i){return $t(ue("",null,null,"",null,null,0),e,{length:-e.length},i)}function Ct(){return D}function Et(){return D=T>0?C(G,--T):0,Z--,D===10&&(Z=1,ge--),D}function I(){return D=T<Oe?C(G,T++):0,Z++,D===10&&(Z=1,ge++),D}function R(){return C(G,T)}function oe(){return T}function ne(e,i){return te(G,e,i)}function ie(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Re(e){return ge=Z=1,Oe=O(G=e),T=0,[]}function Be(e){return G="",e}function ae(e){return Me(ne(T-1,me(e===91?e+2:e===40?e+1:e)))}function At(e){for(;(D=R())&&D<33;)I();return ie(e)>2||ie(D)>3?"":" "}function zt(e,i){for(;--i&&I()&&!(D<48||D>102||D>57&&D<65||D>70&&D<97););return ne(e,oe()+(i<6&&R()==32&&I()==32))}function me(e){for(;I();)switch(D){case e:return T;case 34:case 39:e!==34&&e!==39&&me(D);break;case 40:e===41&&me(e);break;case 92:I();break}return T}function Tt(e,i){for(;I()&&e+D!==47+10;)if(e+D===42+42&&R()===47)break;return"/*"+ne(i,T-1)+"*"+fe(e===47?e:I())}function It(e){for(;!ie(R());)I();return ne(e,T)}function Pt(e){return Be(ce("",null,null,null,[""],e=Re(e),0,[0],e))}function ce(e,i,r,n,s,o,f,h,g){for(var c=0,l=0,p=f,k=0,x=0,$=0,u=1,b=1,y=1,E=0,L="",re=s,N=o,M=n,j=L;b;)switch($=E,E=I()){case 40:if($!=108&&C(j,p-1)==58){we(j+=m(ae(E),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:j+=ae(E);break;case 9:case 10:case 13:case 32:j+=At($);break;case 92:j+=zt(oe()-1,7);continue;case 47:switch(R()){case 42:case 47:se(Lt(Tt(I(),oe()),i,r),g);break;default:j+="/"}break;case 123*u:h[c++]=O(j)*y;case 125*u:case 59:case 0:switch(E){case 0:case 125:b=0;case 59+l:y==-1&&(j=m(j,/\f/g,"")),x>0&&O(j)-p&&se(x>32?Se(j+";",n,r,p-1):Se(m(j," ","")+";",n,r,p-2),g);break;case 59:j+=";";default:if(se(M=ke(j,i,r,c,l,s,h,L,re=[],N=[],p),o),E===123)if(l===0)ce(j,i,M,M,re,o,p,h,N);else switch(k===99&&C(j,3)===110?100:k){case 100:case 108:case 109:case 115:ce(e,M,M,n&&se(ke(e,M,M,0,0,s,h,L,s,re=[],p),N),s,N,p,h,n?re:N);break;default:ce(j,M,M,M,[""],N,0,h,N)}}c=l=x=0,u=y=1,L=j="",p=f;break;case 58:p=1+O(j),x=$;default:if(u<1){if(E==123)--u;else if(E==125&&u++==0&&Et()==125)continue}switch(j+=fe(E),E*u){case 38:y=l>0?1:(j+="\f",-1);break;case 44:h[c++]=(O(j)-1)*y,y=1;break;case 64:R()===45&&(j+=ae(I())),k=R(),l=p=O(L=j+=It(oe())),E++;break;case 45:$===45&&O(j)==2&&(u=0)}}return o}function ke(e,i,r,n,s,o,f,h,g,c,l){for(var p=s-1,k=s===0?o:[""],x=ve(k),$=0,u=0,b=0;$<n;++$)for(var y=0,E=te(e,p+1,p=vt(u=f[$])),L=e;y<x;++y)(L=Me(u>0?k[y]+" "+E:m(E,/&\f/g,k[y])))&&(g[b++]=L);return ue(e,i,r,s===0?be:h,g,c,l)}function Lt(e,i,r){return ue(e,i,r,Pe,fe(Ct()),te(e,2,-2),0)}function Se(e,i,r,n){return ue(e,i,r,je,te(e,0,n),te(e,n+1,-1),n)}function V(e,i){for(var r="",n=ve(e),s=0;s<n;s++)r+=i(e[s],s,e,i)||"";return r}function Mt(e,i,r,n){switch(e.type){case jt:if(e.children.length)break;case bt:case je:return e.return=e.return||e.value;case Pe:return"";case Le:return e.return=e.value+"{"+V(e.children,n)+"}";case be:e.value=e.props.join(",")}return O(r=V(e.children,n))?e.return=e.value+"{"+r+"}":""}function Ot(e){var i=ve(e);return function(r,n,s,o){for(var f="",h=0;h<i;h++)f+=e[h](r,n,s,o)||"";return f}}function Rt(e){return function(i){i.root||(i=i.return)&&e(i)}}var Bt=function(i,r,n){for(var s=0,o=0;s=o,o=R(),s===38&&o===12&&(r[n]=1),!ie(o);)I();return ne(i,T)},Nt=function(i,r){var n=-1,s=44;do switch(ie(s)){case 0:s===38&&R()===12&&(r[n]=1),i[n]+=Bt(T-1,r,n);break;case 2:i[n]+=ae(s);break;case 4:if(s===44){i[++n]=R()===58?"&\f":"",r[n]=i[n].length;break}default:i[n]+=fe(s)}while(s=I());return i},_t=function(i,r){return Be(Nt(Re(i),r))},De=new WeakMap,Wt=function(i){if(!(i.type!=="rule"||!i.parent||i.length<1)){for(var r=i.value,n=i.parent,s=i.column===n.column&&i.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(i.props.length===1&&r.charCodeAt(0)!==58&&!De.get(n))&&!s){De.set(i,!0);for(var o=[],f=_t(r,o),h=n.props,g=0,c=0;g<f.length;g++)for(var l=0;l<h.length;l++,c++)i.props[c]=o[g]?f[g].replace(/&\f/g,h[l]):h[l]+" "+f[g]}}},Ht=function(i){if(i.type==="decl"){var r=i.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(i.return="",i.value="")}};function Ne(e,i){switch(kt(e,i)){case 5103:return w+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return w+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return w+e+de+e+A+e+e;case 6828:case 4268:return w+e+A+e+e;case 6165:return w+e+A+"flex-"+e+e;case 5187:return w+e+m(e,/(\w+).+(:[^]+)/,w+"box-$1$2"+A+"flex-$1$2")+e;case 5443:return w+e+A+"flex-item-"+m(e,/flex-|-self/,"")+e;case 4675:return w+e+A+"flex-line-pack"+m(e,/align-content|flex-|-self/,"")+e;case 5548:return w+e+A+m(e,"shrink","negative")+e;case 5292:return w+e+A+m(e,"basis","preferred-size")+e;case 6060:return w+"box-"+m(e,"-grow","")+w+e+A+m(e,"grow","positive")+e;case 4554:return w+m(e,/([^-])(transform)/g,"$1"+w+"$2")+e;case 6187:return m(m(m(e,/(zoom-|grab)/,w+"$1"),/(image-set)/,w+"$1"),e,"")+e;case 5495:case 3959:return m(e,/(image-set\([^]*)/,w+"$1$`$1");case 4968:return m(m(e,/(.+:)(flex-)?(.*)/,w+"box-pack:$3"+A+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+w+e+e;case 4095:case 3583:case 4068:case 2532:return m(e,/(.+)-inline(.+)/,w+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(e)-1-i>6)switch(C(e,i+1)){case 109:if(C(e,i+4)!==45)break;case 102:return m(e,/(.+:)(.+)-([^]+)/,"$1"+w+"$2-$3$1"+de+(C(e,i+3)==108?"$3":"$2-$3"))+e;case 115:return~we(e,"stretch")?Ne(m(e,"stretch","fill-available"),i)+e:e}break;case 4949:if(C(e,i+1)!==115)break;case 6444:switch(C(e,O(e)-3-(~we(e,"!important")&&10))){case 107:return m(e,":",":"+w)+e;case 101:return m(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+w+(C(e,14)===45?"inline-":"")+"box$3$1"+w+"$2$3$1"+A+"$2box$3")+e}break;case 5936:switch(C(e,i+11)){case 114:return w+e+A+m(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return w+e+A+m(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return w+e+A+m(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return w+e+A+e+e}return e}var Ut=function(i,r,n,s){if(i.length>-1&&!i.return)switch(i.type){case je:i.return=Ne(i.value,i.length);break;case Le:return V([J(i,{value:m(i.value,"@","@"+w)})],s);case be:if(i.length)return Dt(i.props,function(o){switch(St(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return V([J(i,{props:[m(o,/:(read-\w+)/,":"+de+"$1")]})],s);case"::placeholder":return V([J(i,{props:[m(o,/:(plac\w+)/,":"+w+"input-$1")]}),J(i,{props:[m(o,/:(plac\w+)/,":"+de+"$1")]}),J(i,{props:[m(o,/:(plac\w+)/,A+"input-$1")]})],s)}return""})}},Yt=[Ut],Qt=function(i){var r=i.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(u){var b=u.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(u),u.setAttribute("data-s",""))})}var s=i.stylisPlugins||Yt,o={},f,h=[];f=i.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(u){for(var b=u.getAttribute("data-emotion").split(" "),y=1;y<b.length;y++)o[b[y]]=!0;h.push(u)});var g,c=[Wt,Ht];{var l,p=[Mt,Rt(function(u){l.insert(u)})],k=Ot(c.concat(s,p)),x=function(b){return V(Pt(b),k)};g=function(b,y,E,L){l=E,x(b?b+"{"+y.styles+"}":y.styles),L&&($.inserted[y.name]=!0)}}var $={key:r,sheet:new yt({key:r,container:f,nonce:i.nonce,speedy:i.speedy,prepend:i.prepend,insertionPoint:i.insertionPoint}),nonce:i.nonce,inserted:o,registered:{},insert:g};return $.sheet.hydrate(h),$},Ft=v.createContext(typeof HTMLElement<"u"?Qt({key:"css"}):null);Ft.Provider;var qt=v.createContext({});function Kt(e){return Object.keys(e).length===0}function Vt(e=null){const i=v.useContext(qt);return!i||Kt(i)?e:i}function _e(e,i){const r=X({},i);return Object.keys(e).forEach(n=>{if(n.toString().match(/^(components|slots)$/))r[n]=X({},e[n],r[n]);else if(n.toString().match(/^(componentsProps|slotProps)$/)){const s=e[n]||{},o=i[n];r[n]={},!o||!Object.keys(o)?r[n]=s:!s||!Object.keys(s)?r[n]=o:(r[n]=X({},o),Object.keys(s).forEach(f=>{r[n][f]=_e(s[f],o[f])}))}else r[n]===void 0&&(r[n]=e[n])}),r}function Zt(e){const{theme:i,name:r,props:n}=e;return!i||!i.components||!i.components[r]||!i.components[r].defaultProps?n:_e(i.components[r].defaultProps,n)}const Gt=typeof window<"u"?v.useLayoutEffect:v.useEffect,Jt=Gt;function Xt(e,i,r,n,s){const[o,f]=v.useState(()=>s&&r?r(e).matches:n?n(e).matches:i);return Jt(()=>{let h=!0;if(!r)return;const g=r(e),c=()=>{h&&f(g.matches)};return c(),g.addListener(c),()=>{h=!1,g.removeListener(c)}},[e,r]),o}const We=et["useSyncExternalStore"];function ei(e,i,r,n,s){const o=v.useCallback(()=>i,[i]),f=v.useMemo(()=>{if(s&&r)return()=>r(e).matches;if(n!==null){const{matches:l}=n(e);return()=>l}return o},[o,e,n,s,r]),[h,g]=v.useMemo(()=>{if(r===null)return[o,()=>()=>{}];const l=r(e);return[()=>l.matches,p=>(l.addListener(p),()=>{l.removeListener(p)})]},[o,r,e]);return We(g,h,f)}function He(e,i={}){const r=Vt(),n=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:s=!1,matchMedia:o=n?window.matchMedia:null,ssrMatchMedia:f=null,noSsr:h=!1}=Zt({name:"MuiUseMediaQuery",props:i,theme:r});let g=typeof e=="function"?e(r):e;return g=g.replace(/^@media( ?)/m,""),(We!==void 0?ei:Xt)(g,s,o,f,h)}const Ue=d.div`
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
`,Ye=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Qe=d.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,Fe=d.div`
  &:hover span {
    color: ${a.orange};
  }
`,qe=d.span`
color: ${a.orange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Ke=d.p`
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
`,ti=d.ul`
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
`,P=d.li`
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
`,Ge=d.div`
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
      width: 74px;
    }
  }
`,Xe=d.div`
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

`,Ee=d.span`
  @media screen and (min-width: 320px) {
    color: ${a.white};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,$e=e=>e.diary.error,ii=({productsArray:e,date:i})=>{const r=ye(),s=B(Te).blood,o=B($e),f=He("(max-width:768px)"),[h,g]=v.useState([]),c=B(x=>x.diary.isLoading);v.useEffect(()=>{g(e)},[e]);const l=x=>typeof x!="string"||x.length===0?"":x[0].toUpperCase()+x.slice(1).toLowerCase();let p;const k=async x=>{try{if((await r(it(x))).meta.requestStatus==="fulfilled"){const u=h.filter(b=>b._id!==x);g(u)}ee.Notify.success("Product deleted successfully!",{theme:"light"})}catch($){console.log($),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return t.jsxs(Ue,{children:[t.jsxs(Ye,{children:[t.jsx(Qe,{children:"Products"}),t.jsx(Fe,{children:t.jsxs(tt,{to:{pathname:"/products",search:`?date=${i}`},style:{display:"flex",alignItems:"center"},children:[t.jsx(qe,{children:"Add product"}),t.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:a.orange},children:t.jsx("use",{href:S+"#icon-arrow-right"})})]})})]}),c?t.jsx(Ie,{}):h&&h.length>0&&!o?f?t.jsx(he,{children:t.jsx(pe,{children:h.map(x=>{var u,b;const $=x.productID.groupBloodNotAllowed[s]?"Yes":"No";return t.jsxs(Ce,{children:[t.jsx(P,{children:"Title"}),t.jsx(P,{children:l((u=x.productID)==null?void 0:u.title)}),t.jsx(P,{children:"Category"}),t.jsx(P,{children:l((b=x.productID)==null?void 0:b.category)}),t.jsxs(Ve,{children:[t.jsxs(Ze,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:"Calories"}),t.jsx(P,{children:x.calories})]}),t.jsxs(Ge,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:"Weight"}),t.jsx(P,{children:x.amount})]}),t.jsxs(Je,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:"Recommend"}),t.jsx(P,{children:t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[t.jsx("svg",{style:{width:"14px",height:"14px"},children:$==="Yes"?t.jsx("use",{href:S+"#icon-bubble",style:{fill:`${a.green}`,stroke:a.green}}):t.jsx("use",{href:S+"#icon-bubble",style:{fill:a.red,stroke:a.red}})}),t.jsx(Ee,{children:p})]})})]}),t.jsxs(Xe,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:""}),t.jsx(P,{children:t.jsx(le,{type:"button",onClick:()=>k(x._id),children:t.jsx(xe,{children:t.jsx("use",{href:S+"#icon-trash"})})})})]})]})]},x._id)})})}):t.jsxs(he,{children:[t.jsxs(ti,{children:[t.jsx(H,{children:"Title"}),t.jsx(H,{children:"Category"}),t.jsx(H,{children:"Calories"}),t.jsx(H,{children:"Weight"}),t.jsx(H,{children:"Recommend"}),t.jsx(H,{children:""})]}),t.jsx(pe,{children:h.map(x=>{var u,b,y;const $=(u=x.productID)!=null&&u.groupBloodNotAllowed[s]?p="Yes":p="No";return t.jsxs(Ce,{children:[t.jsx(U,{children:l((b=x.productID)==null?void 0:b.title)}),t.jsx(U,{children:l((y=x.productID)==null?void 0:y.category)}),t.jsx(U,{children:x.calories}),t.jsx(U,{children:x.amount}),t.jsx(U,{children:t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[t.jsx("svg",{style:{width:"14px",height:"14px"},children:$==="Yes"?t.jsx("use",{href:S+"#icon-bubble",style:{fill:a.green,stroke:a.green}}):t.jsx("use",{href:S+"#icon-bubble",style:{fill:a.red,stroke:a.red}})}),t.jsx(Ee,{children:p})]})}),t.jsx(U,{children:t.jsx(le,{type:"button",onClick:()=>k(x._id),children:t.jsx(xe,{children:t.jsx("use",{href:S+"#icon-trash"})})})})]},x._id)})})]}):t.jsx(Ke,{children:"Not found products"})]})},ni=d.ul`
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
`,_=d.li`
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
`,Ae=d.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,z=d.li`
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

`;const ri=({exercisesArray:e})=>{const i=He("(max-width:768px)"),r=B($e),n=ye(),[s,o]=v.useState([]),f=B(c=>c.diary.isLoading);v.useEffect(()=>{o(e)},[e]);const h=c=>c.charAt(0).toUpperCase()+c.slice(1).toLowerCase(),g=async c=>{try{if((await n(rt(c))).meta.requestStatus==="fulfilled"){const p=s.filter(k=>k._id!==c);o(p)}ee.Notify.success("Exercise deleted successfully!",{theme:"light"})}catch(l){console.log(l),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return t.jsxs(Ue,{children:[t.jsxs(Ye,{children:[t.jsx(Qe,{children:"Exercises"}),t.jsx(Fe,{children:t.jsxs(nt,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[t.jsx(qe,{children:"Add exercises"}),t.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:a.orange},children:t.jsx("use",{href:S+"#icon-arrow-right"})})]})})]}),f?t.jsx(Ie,{}):s&&s.length>0&&!r?i?t.jsx(he,{children:t.jsx(pe,{children:s.map(c=>{var l,p,k,x;return t.jsxs(Ae,{children:[t.jsx(z,{children:"Body Part"}),t.jsx(z,{children:h((l=c.exerciseID)==null?void 0:l.bodyPart)}),t.jsx(z,{children:"Equipment"}),t.jsx(z,{children:h((p=c.exerciseID)==null?void 0:p.equipment)}),t.jsx(z,{children:"Name"}),t.jsx(z,{children:h((k=c.exerciseID)==null?void 0:k.name)}),t.jsxs(Ve,{children:[t.jsxs(Ze,{children:[t.jsx(z,{children:"Target"}),t.jsx(z,{children:h((x=c.exerciseID)==null?void 0:x.target)})]}),t.jsxs(Ge,{children:[t.jsx(z,{children:"Burned Calories"}),t.jsx(z,{children:c.calories})]}),t.jsxs(Je,{children:[t.jsx(z,{children:"Time"}),t.jsx(z,{children:c.time})]}),t.jsxs(Xe,{children:[t.jsx(z,{children:""}),t.jsx(z,{children:t.jsx(le,{type:"button",onClick:()=>g(c._id),children:t.jsx(xe,{children:t.jsx("use",{href:S+"#icon-trash"})})})})]})]})]},c._id)})})}):t.jsxs(he,{children:[t.jsxs(ni,{children:[t.jsx(_,{children:"Body Part"}),t.jsx(_,{children:"Equipment"}),t.jsx(_,{children:"Name"}),t.jsx(_,{children:"Target"}),t.jsx(_,{children:"Burned Calories"}),t.jsx(_,{children:"Time"}),t.jsx(_,{children:""})]}),t.jsx(pe,{children:s.map(c=>t.jsxs(Ae,{children:[t.jsx(W,{children:h(c.exerciseID.bodyPart)}),t.jsx(W,{children:h(c.exerciseID.equipment)}),t.jsx(W,{children:h(c.exerciseID.name)}),t.jsx(W,{children:h(c.exerciseID.target)}),t.jsx(W,{children:c.calories}),t.jsx(W,{children:c.time}),t.jsx(W,{children:t.jsx(le,{type:"button",onClick:()=>g(c._id),children:t.jsx(xe,{children:t.jsx("use",{href:S+"#icon-trash"})})})})]},c._id))})]}):t.jsx(Ke,{children:"Not found exercises"})]})},si=d.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,oi=d.ul`
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
`,Q=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,F=d.h2`
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
`,ai=d.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,ci=d.div`
  width: 24px;
  height: 24px;
  background-color: ${a.beige};
  border-radius: 50%;
`,K=d.svg`
  width: 20px;
  height: 20px;
  fill: ${a.orangeSecond};
`,di=d.svg`
  width: 24px;
  height: 24px;
`,hi=d.p`
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
`,pi=({userDiaryInformation:e,bmr:i})=>{const{burnedCalories:r,consumedCalories:n,remainingSports:s}=e,[o,f]=v.useState(!1),[h,g]=v.useState(!1),c=Math.round(n-r,0);return B($e),v.useEffect(()=>{f(c<0),g(s<0)},[c,s]),t.jsxs(si,{children:[t.jsxs(oi,{children:[t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:`${S}#icon-fork-knife`})}),t.jsx(F,{children:"Daily calorie intake"})]}),t.jsx(q,{children:i||2200})]}),t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:S+"#icon-dumbbell"})}),t.jsx(F,{children:"Daily norm of sports"})]}),t.jsx(q,{children:"110 min"})]}),t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:S+"#icon-apple"})}),t.jsx(F,{children:"Calories consumed"})]}),t.jsx(q,{children:Math.round(n,0)||0})]}),t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:S+"#icon-fire"})}),t.jsx(F,{children:"Calories burned"})]}),t.jsx(q,{children:r||0})]}),t.jsxs(Y,{className:o?"greenBg":c<0?"redBg":"",children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:S+"#icon-bubble"})}),t.jsx(F,{children:"The rest of the calories"})]}),t.jsx(q,{children:c||i||0})]}),t.jsxs(Y,{className:h?"greenBg":"",children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:S+"#icon-running-figure"})}),t.jsx(F,{children:"The rest of sports"})]}),t.jsxs(q,{children:[s||110," min"]})]})]}),t.jsxs(ai,{children:[t.jsx(ci,{children:t.jsx(di,{children:t.jsx("use",{href:S+"#icon-running-stick-figure-svgrepo-com-1"})})}),t.jsx(hi,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},li=d.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,xi=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,fi=d.div`
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
`,gi=d.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,ui=d.div`
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
`,ze=e=>{const i=new Date(e),r=String(i.getDate()).padStart(2,"0"),n=String(i.getMonth()+1).padStart(2,"0"),s=i.getFullYear();return`${r}-${n}-${s}`},bi=()=>{const[e,i]=v.useState(new Date),n=B(Te).createdAt,[s,o]=v.useState([]),[f,h]=v.useState([]),[g,c]=v.useState([]),l=ye(),p=B(st),k=v.useMemo(()=>ze(e),[e]),x=v.useMemo(()=>ze(n),[n]);return v.useEffect(()=>{try{(async()=>{var b,y;const u=await l(ot(k));u.payload===null&&(h([]),c([])),u.payload&&(o(u.payload),h((b=u.payload)==null?void 0:b.products),c((y=u.payload)==null?void 0:y.exercises))})()}catch($){console.log($),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}},[l,e,k]),t.jsx(ui,{children:t.jsxs(li,{children:[t.jsxs(xi,{children:[t.jsx(ct,{title:"Diary "}),t.jsx(ut,{currentDate:e,setCurrentDate:i,userDateRegistration:x})]}),t.jsxs(gi,{children:[t.jsx(pi,{userDiaryInformation:s,bmr:p}),t.jsxs(fi,{children:[t.jsx(ii,{productsArray:f,date:k}),t.jsx(ri,{exercisesArray:g,date:k})]})]})]})})};export{bi as default};
