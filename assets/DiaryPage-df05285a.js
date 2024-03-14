import{u as d,h as a,r as b,j as t,s as k,i as et,a as ye,k as R,m as Te,n as tt,L as Ie,o as nt,p as ee,q as it,t as rt,v as st,w as ot,x as at}from"./index-a2e96977.js";import{f as ct,D as dt}from"./Datapicker-5deef67c.js";import{T as ht}from"./TitlePage-f74c1138.js";const pt=d.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,lt=d.button`
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
`,xt=d.p`
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
`,ft=d.svg`
  width: 20px;
  height: 20px;
  stroke: ${a.orange};

  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,gt=d.button`
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
`,ut=d.button`
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
`,wt=d.svg`
  width: 100%;
  height: 100%;
  fill: ${a.white};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,mt=d.svg`
  width: 100%;
  height: 100%;
  fill: ${a.white};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`,yt=({currentDate:e,setCurrentDate:n,userDateRegistration:r})=>{const[i,s]=b.useState(e),[o,p]=b.useState(!1),h=()=>{p(!o)},g=()=>{const l=new Date(i);l.setDate(l.getDate()-1),n(l),s(l)},c=()=>{const l=new Date(i);l.setDate(l.getDate()+1),n(l),s(l)},f=()=>{p(!1)};return t.jsxs(pt,{children:[t.jsxs(gt,{onClick:h,children:[t.jsx(xt,{children:ct(i,"dd/MM/yyyy")}),t.jsx(ft,{children:t.jsx("use",{href:`${k}#icon-calendar-orange`})})]}),t.jsx(ut,{type:"button",onClick:g,children:t.jsx(wt,{children:t.jsx("use",{href:`${k}#icon-chevron-left`})})}),t.jsx(lt,{type:"button",onClick:c,children:t.jsx(mt,{children:t.jsx("use",{href:`${k}#icon-chevron-right`})})}),t.jsx(dt,{selectedDate:i,setSelectedDate:s,isOpen:o,onClose:f,setCurrentDate:n,userDateRegistration:r})]})};function X(){return X=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},X.apply(this,arguments)}function bt(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}function jt(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),e.nonce!==void 0&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}var vt=function(){function e(r){var i=this;this._insertTag=function(s){var o;i.tags.length===0?i.insertionPoint?o=i.insertionPoint.nextSibling:i.prepend?o=i.container.firstChild:o=i.before:o=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(s,o),i.tags.push(s)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var n=e.prototype;return n.hydrate=function(i){i.forEach(this._insertTag)},n.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(jt(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var o=bt(s);try{o.insertRule(i,o.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(i));this.ctr++},n.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},e}(),A="-ms-",de="-moz-",w="-webkit-",Pe="comm",be="rule",je="decl",$t="@import",Le="@keyframes",kt="@layer",St=Math.abs,fe=String.fromCharCode,Dt=Object.assign;function Ct(e,n){return C(e,0)^45?(((n<<2^C(e,0))<<2^C(e,1))<<2^C(e,2))<<2^C(e,3):0}function Me(e){return e.trim()}function Et(e,n){return(e=n.exec(e))?e[0]:e}function m(e,n,r){return e.replace(n,r)}function we(e,n){return e.indexOf(n)}function C(e,n){return e.charCodeAt(n)|0}function te(e,n,r){return e.slice(n,r)}function O(e){return e.length}function ve(e){return e.length}function se(e,n){return n.push(e),e}function At(e,n){return e.map(n).join("")}var ge=1,Z=1,Oe=0,T=0,S=0,G="";function ue(e,n,r,i,s,o,p){return{value:e,root:n,parent:r,type:i,props:s,children:o,line:ge,column:Z,length:p,return:""}}function J(e,n){return Dt(ue("",null,null,"",null,null,0),e,{length:-e.length},n)}function zt(){return S}function Tt(){return S=T>0?C(G,--T):0,Z--,S===10&&(Z=1,ge--),S}function I(){return S=T<Oe?C(G,T++):0,Z++,S===10&&(Z=1,ge++),S}function B(){return C(G,T)}function oe(){return T}function ie(e,n){return te(G,e,n)}function ne(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Re(e){return ge=Z=1,Oe=O(G=e),T=0,[]}function Be(e){return G="",e}function ae(e){return Me(ie(T-1,me(e===91?e+2:e===40?e+1:e)))}function It(e){for(;(S=B())&&S<33;)I();return ne(e)>2||ne(S)>3?"":" "}function Pt(e,n){for(;--n&&I()&&!(S<48||S>102||S>57&&S<65||S>70&&S<97););return ie(e,oe()+(n<6&&B()==32&&I()==32))}function me(e){for(;I();)switch(S){case e:return T;case 34:case 39:e!==34&&e!==39&&me(S);break;case 40:e===41&&me(e);break;case 92:I();break}return T}function Lt(e,n){for(;I()&&e+S!==47+10;)if(e+S===42+42&&B()===47)break;return"/*"+ie(n,T-1)+"*"+fe(e===47?e:I())}function Mt(e){for(;!ne(B());)I();return ie(e,T)}function Ot(e){return Be(ce("",null,null,null,[""],e=Re(e),0,[0],e))}function ce(e,n,r,i,s,o,p,h,g){for(var c=0,f=0,l=p,D=0,x=0,j=0,u=1,$=1,v=1,E=0,L="",re=s,N=o,M=i,y=L;$;)switch(j=E,E=I()){case 40:if(j!=108&&C(y,l-1)==58){we(y+=m(ae(E),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:y+=ae(E);break;case 9:case 10:case 13:case 32:y+=It(j);break;case 92:y+=Pt(oe()-1,7);continue;case 47:switch(B()){case 42:case 47:se(Rt(Lt(I(),oe()),n,r),g);break;default:y+="/"}break;case 123*u:h[c++]=O(y)*v;case 125*u:case 59:case 0:switch(E){case 0:case 125:$=0;case 59+f:v==-1&&(y=m(y,/\f/g,"")),x>0&&O(y)-l&&se(x>32?Se(y+";",i,r,l-1):Se(m(y," ","")+";",i,r,l-2),g);break;case 59:y+=";";default:if(se(M=ke(y,n,r,c,f,s,h,L,re=[],N=[],l),o),E===123)if(f===0)ce(y,n,M,M,re,o,l,h,N);else switch(D===99&&C(y,3)===110?100:D){case 100:case 108:case 109:case 115:ce(e,M,M,i&&se(ke(e,M,M,0,0,s,h,L,s,re=[],l),N),s,N,l,h,i?re:N);break;default:ce(y,M,M,M,[""],N,0,h,N)}}c=f=x=0,u=v=1,L=y="",l=p;break;case 58:l=1+O(y),x=j;default:if(u<1){if(E==123)--u;else if(E==125&&u++==0&&Tt()==125)continue}switch(y+=fe(E),E*u){case 38:v=f>0?1:(y+="\f",-1);break;case 44:h[c++]=(O(y)-1)*v,v=1;break;case 64:B()===45&&(y+=ae(I())),D=B(),f=l=O(L=y+=Mt(oe())),E++;break;case 45:j===45&&O(y)==2&&(u=0)}}return o}function ke(e,n,r,i,s,o,p,h,g,c,f){for(var l=s-1,D=s===0?o:[""],x=ve(D),j=0,u=0,$=0;j<i;++j)for(var v=0,E=te(e,l+1,l=St(u=p[j])),L=e;v<x;++v)(L=Me(u>0?D[v]+" "+E:m(E,/&\f/g,D[v])))&&(g[$++]=L);return ue(e,n,r,s===0?be:h,g,c,f)}function Rt(e,n,r){return ue(e,n,r,Pe,fe(zt()),te(e,2,-2),0)}function Se(e,n,r,i){return ue(e,n,r,je,te(e,0,i),te(e,i+1,-1),i)}function V(e,n){for(var r="",i=ve(e),s=0;s<i;s++)r+=n(e[s],s,e,n)||"";return r}function Bt(e,n,r,i){switch(e.type){case kt:if(e.children.length)break;case $t:case je:return e.return=e.return||e.value;case Pe:return"";case Le:return e.return=e.value+"{"+V(e.children,i)+"}";case be:e.value=e.props.join(",")}return O(r=V(e.children,i))?e.return=e.value+"{"+r+"}":""}function Nt(e){var n=ve(e);return function(r,i,s,o){for(var p="",h=0;h<n;h++)p+=e[h](r,i,s,o)||"";return p}}function _t(e){return function(n){n.root||(n=n.return)&&e(n)}}var Wt=function(n,r,i){for(var s=0,o=0;s=o,o=B(),s===38&&o===12&&(r[i]=1),!ne(o);)I();return ie(n,T)},Ht=function(n,r){var i=-1,s=44;do switch(ne(s)){case 0:s===38&&B()===12&&(r[i]=1),n[i]+=Wt(T-1,r,i);break;case 2:n[i]+=ae(s);break;case 4:if(s===44){n[++i]=B()===58?"&\f":"",r[i]=n[i].length;break}default:n[i]+=fe(s)}while(s=I());return n},Ut=function(n,r){return Be(Ht(Re(n),r))},De=new WeakMap,Yt=function(n){if(!(n.type!=="rule"||!n.parent||n.length<1)){for(var r=n.value,i=n.parent,s=n.column===i.column&&n.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(n.props.length===1&&r.charCodeAt(0)!==58&&!De.get(i))&&!s){De.set(n,!0);for(var o=[],p=Ut(r,o),h=i.props,g=0,c=0;g<p.length;g++)for(var f=0;f<h.length;f++,c++)n.props[c]=o[g]?p[g].replace(/&\f/g,h[f]):h[f]+" "+p[g]}}},Qt=function(n){if(n.type==="decl"){var r=n.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(n.return="",n.value="")}};function Ne(e,n){switch(Ct(e,n)){case 5103:return w+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return w+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return w+e+de+e+A+e+e;case 6828:case 4268:return w+e+A+e+e;case 6165:return w+e+A+"flex-"+e+e;case 5187:return w+e+m(e,/(\w+).+(:[^]+)/,w+"box-$1$2"+A+"flex-$1$2")+e;case 5443:return w+e+A+"flex-item-"+m(e,/flex-|-self/,"")+e;case 4675:return w+e+A+"flex-line-pack"+m(e,/align-content|flex-|-self/,"")+e;case 5548:return w+e+A+m(e,"shrink","negative")+e;case 5292:return w+e+A+m(e,"basis","preferred-size")+e;case 6060:return w+"box-"+m(e,"-grow","")+w+e+A+m(e,"grow","positive")+e;case 4554:return w+m(e,/([^-])(transform)/g,"$1"+w+"$2")+e;case 6187:return m(m(m(e,/(zoom-|grab)/,w+"$1"),/(image-set)/,w+"$1"),e,"")+e;case 5495:case 3959:return m(e,/(image-set\([^]*)/,w+"$1$`$1");case 4968:return m(m(e,/(.+:)(flex-)?(.*)/,w+"box-pack:$3"+A+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+w+e+e;case 4095:case 3583:case 4068:case 2532:return m(e,/(.+)-inline(.+)/,w+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(e)-1-n>6)switch(C(e,n+1)){case 109:if(C(e,n+4)!==45)break;case 102:return m(e,/(.+:)(.+)-([^]+)/,"$1"+w+"$2-$3$1"+de+(C(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~we(e,"stretch")?Ne(m(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(C(e,n+1)!==115)break;case 6444:switch(C(e,O(e)-3-(~we(e,"!important")&&10))){case 107:return m(e,":",":"+w)+e;case 101:return m(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+w+(C(e,14)===45?"inline-":"")+"box$3$1"+w+"$2$3$1"+A+"$2box$3")+e}break;case 5936:switch(C(e,n+11)){case 114:return w+e+A+m(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return w+e+A+m(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return w+e+A+m(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return w+e+A+e+e}return e}var Ft=function(n,r,i,s){if(n.length>-1&&!n.return)switch(n.type){case je:n.return=Ne(n.value,n.length);break;case Le:return V([J(n,{value:m(n.value,"@","@"+w)})],s);case be:if(n.length)return At(n.props,function(o){switch(Et(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return V([J(n,{props:[m(o,/:(read-\w+)/,":"+de+"$1")]})],s);case"::placeholder":return V([J(n,{props:[m(o,/:(plac\w+)/,":"+w+"input-$1")]}),J(n,{props:[m(o,/:(plac\w+)/,":"+de+"$1")]}),J(n,{props:[m(o,/:(plac\w+)/,A+"input-$1")]})],s)}return""})}},qt=[Ft],Kt=function(n){var r=n.key;if(r==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(u){var $=u.getAttribute("data-emotion");$.indexOf(" ")!==-1&&(document.head.appendChild(u),u.setAttribute("data-s",""))})}var s=n.stylisPlugins||qt,o={},p,h=[];p=n.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(u){for(var $=u.getAttribute("data-emotion").split(" "),v=1;v<$.length;v++)o[$[v]]=!0;h.push(u)});var g,c=[Yt,Qt];{var f,l=[Bt,_t(function(u){f.insert(u)})],D=Nt(c.concat(s,l)),x=function($){return V(Ot($),D)};g=function($,v,E,L){f=E,x($?$+"{"+v.styles+"}":v.styles),L&&(j.inserted[v.name]=!0)}}var j={key:r,sheet:new vt({key:r,container:p,nonce:n.nonce,speedy:n.speedy,prepend:n.prepend,insertionPoint:n.insertionPoint}),nonce:n.nonce,inserted:o,registered:{},insert:g};return j.sheet.hydrate(h),j},Vt=b.createContext(typeof HTMLElement<"u"?Kt({key:"css"}):null);Vt.Provider;var Zt=b.createContext({});function Gt(e){return Object.keys(e).length===0}function Jt(e=null){const n=b.useContext(Zt);return!n||Gt(n)?e:n}function _e(e,n){const r=X({},n);return Object.keys(e).forEach(i=>{if(i.toString().match(/^(components|slots)$/))r[i]=X({},e[i],r[i]);else if(i.toString().match(/^(componentsProps|slotProps)$/)){const s=e[i]||{},o=n[i];r[i]={},!o||!Object.keys(o)?r[i]=s:!s||!Object.keys(s)?r[i]=o:(r[i]=X({},o),Object.keys(s).forEach(p=>{r[i][p]=_e(s[p],o[p])}))}else r[i]===void 0&&(r[i]=e[i])}),r}function Xt(e){const{theme:n,name:r,props:i}=e;return!n||!n.components||!n.components[r]||!n.components[r].defaultProps?i:_e(n.components[r].defaultProps,i)}const en=typeof window<"u"?b.useLayoutEffect:b.useEffect,tn=en;function nn(e,n,r,i,s){const[o,p]=b.useState(()=>s&&r?r(e).matches:i?i(e).matches:n);return tn(()=>{let h=!0;if(!r)return;const g=r(e),c=()=>{h&&p(g.matches)};return c(),g.addListener(c),()=>{h=!1,g.removeListener(c)}},[e,r]),o}const We=et["useSyncExternalStore"];function rn(e,n,r,i,s){const o=b.useCallback(()=>n,[n]),p=b.useMemo(()=>{if(s&&r)return()=>r(e).matches;if(i!==null){const{matches:f}=i(e);return()=>f}return o},[o,e,i,s,r]),[h,g]=b.useMemo(()=>{if(r===null)return[o,()=>()=>{}];const f=r(e);return[()=>f.matches,l=>(f.addListener(l),()=>{f.removeListener(l)})]},[o,r,e]);return We(g,h,p)}function He(e,n={}){const r=Jt(),i=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:s=!1,matchMedia:o=i?window.matchMedia:null,ssrMatchMedia:p=null,noSsr:h=!1}=Xt({name:"MuiUseMediaQuery",props:n,theme:r});let g=typeof e=="function"?e(r):e;return g=g.replace(/^@media( ?)/m,""),(We!==void 0?rn:nn)(g,s,o,p,h)}const Ue=d.div`
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
`,sn=d.ul`
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
`,on=e=>e.diary.isLoading,$e=e=>e.diary.error,an=({productsArray:e,date:n})=>{const r=ye(),s=R(Te).blood,o=R($e),p=He("(max-width:768px)"),[h,g]=b.useState([]),c=R(x=>x.diary.isLoading);b.useEffect(()=>{g(e)},[e]);const f=x=>typeof x!="string"||x.length===0?"":x[0].toUpperCase()+x.slice(1).toLowerCase();let l;const D=async x=>{try{if((await r(nt(x))).meta.requestStatus==="fulfilled"){const u=h.filter($=>$._id!==x);g(u)}ee.Notify.success("Product deleted successfully!",{theme:"light"})}catch(j){console.log(j),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return t.jsxs(Ue,{children:[t.jsxs(Ye,{children:[t.jsx(Qe,{children:"Products"}),t.jsx(Fe,{children:t.jsxs(tt,{to:{pathname:"/products",search:`?date=${n}`},style:{display:"flex",alignItems:"center"},children:[t.jsx(qe,{children:"Add product"}),t.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:a.orange},children:t.jsx("use",{href:k+"#icon-arrow-right"})})]})})]}),c?t.jsx(Ie,{}):h&&h.length>0&&!o?p?t.jsx(he,{children:t.jsx(pe,{children:h.map(x=>{var u,$;const j=x.productID.groupBloodNotAllowed[s]?"Yes":"No";return t.jsxs(Ce,{children:[t.jsx(P,{children:"Title"}),t.jsx(P,{children:f((u=x.productID)==null?void 0:u.title)}),t.jsx(P,{children:"Category"}),t.jsx(P,{children:f(($=x.productID)==null?void 0:$.category)}),t.jsxs(Ve,{children:[t.jsxs(Ze,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:"Calories"}),t.jsx(P,{children:x.calories})]}),t.jsxs(Ge,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:"Weight"}),t.jsx(P,{children:x.amount})]}),t.jsxs(Je,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:"Recommend"}),t.jsx(P,{children:t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[t.jsx("svg",{style:{width:"14px",height:"14px"},children:j==="Yes"?t.jsx("use",{href:k+"#icon-bubble",style:{fill:`${a.green}`,stroke:a.green}}):t.jsx("use",{href:k+"#icon-bubble",style:{fill:a.red,stroke:a.red}})}),t.jsx(Ee,{children:l})]})})]}),t.jsxs(Xe,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:""}),t.jsx(P,{children:t.jsx(le,{type:"button",onClick:()=>D(x._id),children:t.jsx(xe,{children:t.jsx("use",{href:k+"#icon-trash"})})})})]})]})]},x._id)})})}):t.jsxs(he,{children:[t.jsxs(sn,{children:[t.jsx(H,{children:"Title"}),t.jsx(H,{children:"Category"}),t.jsx(H,{children:"Calories"}),t.jsx(H,{children:"Weight"}),t.jsx(H,{children:"Recommend"}),t.jsx(H,{children:""})]}),t.jsx(pe,{children:h.map(x=>{var u,$,v;const j=(u=x.productID)!=null&&u.groupBloodNotAllowed[s]?l="Yes":l="No";return t.jsxs(Ce,{children:[t.jsx(U,{children:f(($=x.productID)==null?void 0:$.title)}),t.jsx(U,{children:f((v=x.productID)==null?void 0:v.category)}),t.jsx(U,{children:x.calories}),t.jsx(U,{children:x.amount}),t.jsx(U,{children:t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[t.jsx("svg",{style:{width:"14px",height:"14px"},children:j==="Yes"?t.jsx("use",{href:k+"#icon-bubble",style:{fill:a.green,stroke:a.green}}):t.jsx("use",{href:k+"#icon-bubble",style:{fill:a.red,stroke:a.red}})}),t.jsx(Ee,{children:l})]})}),t.jsx(U,{children:t.jsx(le,{type:"button",onClick:()=>D(x._id),children:t.jsx(xe,{children:t.jsx("use",{href:k+"#icon-trash"})})})})]},x._id)})})]}):t.jsx(Ke,{children:"Not found products"})]})},cn=d.ul`
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

`;const dn=({exercisesArray:e})=>{const n=He("(max-width:768px)"),r=R($e),i=ye(),[s,o]=b.useState([]),p=R(c=>c.diary.isLoading);b.useEffect(()=>{o(e)},[e]);const h=c=>c.charAt(0).toUpperCase()+c.slice(1).toLowerCase(),g=async c=>{try{if((await i(rt(c))).meta.requestStatus==="fulfilled"){const l=s.filter(D=>D._id!==c);o(l)}ee.Notify.success("Exercise deleted successfully!",{theme:"light"})}catch(f){console.log(f),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return t.jsxs(Ue,{children:[t.jsxs(Ye,{children:[t.jsx(Qe,{children:"Exercises"}),t.jsx(Fe,{children:t.jsxs(it,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[t.jsx(qe,{children:"Add exercises"}),t.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:a.orange},children:t.jsx("use",{href:k+"#icon-arrow-right"})})]})})]}),p?t.jsx(Ie,{}):s&&s.length>0&&!r?n?t.jsx(he,{children:t.jsx(pe,{children:s.map(c=>{var f,l,D,x;return t.jsxs(Ae,{children:[t.jsx(z,{children:"Body Part"}),t.jsx(z,{children:h((f=c.exerciseID)==null?void 0:f.bodyPart)}),t.jsx(z,{children:"Equipment"}),t.jsx(z,{children:h((l=c.exerciseID)==null?void 0:l.equipment)}),t.jsx(z,{children:"Name"}),t.jsx(z,{children:h((D=c.exerciseID)==null?void 0:D.name)}),t.jsxs(Ve,{children:[t.jsxs(Ze,{children:[t.jsx(z,{children:"Target"}),t.jsx(z,{children:h((x=c.exerciseID)==null?void 0:x.target)})]}),t.jsxs(Ge,{children:[t.jsx(z,{children:"Burned Calories"}),t.jsx(z,{children:c.calories})]}),t.jsxs(Je,{children:[t.jsx(z,{children:"Time"}),t.jsx(z,{children:c.time})]}),t.jsxs(Xe,{children:[t.jsx(z,{children:""}),t.jsx(z,{children:t.jsx(le,{type:"button",onClick:()=>g(c._id),children:t.jsx(xe,{children:t.jsx("use",{href:k+"#icon-trash"})})})})]})]})]},c._id)})})}):t.jsxs(he,{children:[t.jsxs(cn,{children:[t.jsx(_,{children:"Body Part"}),t.jsx(_,{children:"Equipment"}),t.jsx(_,{children:"Name"}),t.jsx(_,{children:"Target"}),t.jsx(_,{children:"Burned Calories"}),t.jsx(_,{children:"Time"}),t.jsx(_,{children:""})]}),t.jsx(pe,{children:s.map(c=>t.jsxs(Ae,{children:[t.jsx(W,{children:h(c.exerciseID.bodyPart)}),t.jsx(W,{children:h(c.exerciseID.equipment)}),t.jsx(W,{children:h(c.exerciseID.name)}),t.jsx(W,{children:h(c.exerciseID.target)}),t.jsx(W,{children:c.calories}),t.jsx(W,{children:c.time}),t.jsx(W,{children:t.jsx(le,{type:"button",onClick:()=>g(c._id),children:t.jsx(xe,{children:t.jsx("use",{href:k+"#icon-trash"})})})})]},c._id))})]}):t.jsx(Ke,{children:"Not found exercises"})]})},hn=d.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,pn=d.ul`
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
`,ln=d.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,xn=d.div`
  width: 24px;
  height: 24px;
  background-color: ${a.beige};
  border-radius: 50%;
`,K=d.svg`
  width: 20px;
  height: 20px;
  fill: ${a.orangeSecond};
`,fn=d.svg`
  width: 24px;
  height: 24px;
`,gn=d.p`
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
`,un=({userDiaryInformation:e,bmr:n})=>{const{burnedCalories:r,consumedCalories:i,remainingSports:s}=e,[o,p]=b.useState(!1),[h,g]=b.useState(!1),c=Math.round(i-r,0);return R($e),b.useEffect(()=>{p(c<0),g(s<0)},[c,s]),t.jsxs(hn,{children:[t.jsxs(pn,{children:[t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:`${k}#icon-fork-knife`})}),t.jsx(F,{children:"Daily calorie intake"})]}),t.jsx(q,{children:n||2200})]}),t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:k+"#icon-dumbbell"})}),t.jsx(F,{children:"Daily norm of sports"})]}),t.jsx(q,{children:"110 min"})]}),t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:k+"#icon-apple"})}),t.jsx(F,{children:"Calories consumed"})]}),t.jsx(q,{children:Math.round(i,0)||0})]}),t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:k+"#icon-fire"})}),t.jsx(F,{children:"Calories burned"})]}),t.jsx(q,{children:r||0})]}),t.jsxs(Y,{className:o?"greenBg":c<0?"redBg":"",children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:k+"#icon-bubble"})}),t.jsx(F,{children:"The rest of the calories"})]}),t.jsx(q,{children:c||n||0})]}),t.jsxs(Y,{className:h?"greenBg":"",children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:k+"#icon-running-figure"})}),t.jsx(F,{children:"The rest of sports"})]}),t.jsxs(q,{children:[s||110," min"]})]})]}),t.jsxs(ln,{children:[t.jsx(xn,{children:t.jsx(fn,{children:t.jsx("use",{href:k+"#icon-running-stick-figure-svgrepo-com-1"})})}),t.jsx(gn,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},wn=d.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,mn=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,yn=d.div`
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
`,bn=d.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,jn=d.div`
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
`,ze=e=>{const n=new Date(e),r=String(n.getDate()).padStart(2,"0"),i=String(n.getMonth()+1).padStart(2,"0"),s=n.getFullYear();return`${r}-${i}-${s}`},Sn=()=>{const[e,n]=b.useState(new Date),i=R(Te).createdAt,s=ye();R(on),R(st);const o=R(ot),p=b.useMemo(()=>ze(e),[e]),h=b.useMemo(()=>ze(i),[i]);b.useEffect(()=>{try{(async()=>{const u=await s(at(p));u.payload&&(c(u.payload),l(u.payload.products),x(u.payload.exercises))})()}catch(j){console.log(j),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}},[s,e,p]);const[g,c]=b.useState([]),[f,l]=b.useState([]),[D,x]=b.useState([]);return t.jsx(jn,{children:t.jsxs(wn,{children:[t.jsxs(mn,{children:[t.jsx(ht,{title:"Diary "}),t.jsx(yt,{currentDate:e,setCurrentDate:n,userDateRegistration:h})]}),t.jsxs(bn,{children:[t.jsx(un,{userDiaryInformation:g,bmr:o}),t.jsxs(yn,{children:[t.jsx(an,{productsArray:f,date:p}),t.jsx(dn,{exercisesArray:D,date:p})]})]})]})})};export{Sn as default};
