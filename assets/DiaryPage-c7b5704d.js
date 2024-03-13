import{u as d,h as a,r as j,j as t,s as S,i as tt,a as be,k as B,m as Ae,n as Pe,o as nt,p as je,q as ee,t as it,v as rt,w as st,L as ot}from"./index-748f6732.js";import{f as at,D as ct}from"./Datapicker-4b6a2a1d.js";import{T as dt}from"./TitlePage-2526d244.js";const ht=d.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,pt=d.button`
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
`,lt=d.p`
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
`,xt=d.svg`
  width: 20px;
  height: 20px;
  stroke: ${a.orange};

  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,ft=d.button`
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
`,gt=d.button`
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
`,ut=d.svg`
  width: 100%;
  height: 100%;
  fill: ${a.white};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,wt=d.svg`
  width: 100%;
  height: 100%;
  fill: ${a.white};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`,mt=({currentDate:e,setCurrentDate:n,userDateRegistration:r})=>{const[i,s]=j.useState(e),[o,h]=j.useState(!1),c=()=>{h(!o)},p=()=>{const l=new Date(i);l.setDate(l.getDate()-1),n(l),s(l)},g=()=>{const l=new Date(i);l.setDate(l.getDate()+1),n(l),s(l)},x=()=>{h(!1)};return t.jsxs(ht,{children:[t.jsxs(ft,{onClick:c,children:[t.jsx(lt,{children:at(i,"dd/MM/yyyy")}),t.jsx(xt,{children:t.jsx("use",{href:`${S}#icon-calendar-orange`})})]}),t.jsx(gt,{type:"button",onClick:p,children:t.jsx(ut,{children:t.jsx("use",{href:`${S}#icon-chevron-left`})})}),t.jsx(pt,{type:"button",onClick:g,children:t.jsx(wt,{children:t.jsx("use",{href:`${S}#icon-chevron-right`})})}),t.jsx(ct,{selectedDate:i,setSelectedDate:s,isOpen:o,onClose:x,setCurrentDate:n,userDateRegistration:r})]})};function X(){return X=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},X.apply(this,arguments)}function yt(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}function bt(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),e.nonce!==void 0&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}var jt=function(){function e(r){var i=this;this._insertTag=function(s){var o;i.tags.length===0?i.insertionPoint?o=i.insertionPoint.nextSibling:i.prepend?o=i.container.firstChild:o=i.before:o=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(s,o),i.tags.push(s)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var n=e.prototype;return n.hydrate=function(i){i.forEach(this._insertTag)},n.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(bt(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var o=yt(s);try{o.insertRule(i,o.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(i));this.ctr++},n.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},e}(),z="-ms-",de="-moz-",u="-webkit-",Le="comm",ve="rule",$e="decl",vt="@import",Me="@keyframes",$t="@layer",kt=Math.abs,fe=String.fromCharCode,St=Object.assign;function Dt(e,n){return E(e,0)^45?(((n<<2^E(e,0))<<2^E(e,1))<<2^E(e,2))<<2^E(e,3):0}function Oe(e){return e.trim()}function Ct(e,n){return(e=n.exec(e))?e[0]:e}function w(e,n,r){return e.replace(n,r)}function me(e,n){return e.indexOf(n)}function E(e,n){return e.charCodeAt(n)|0}function te(e,n,r){return e.slice(n,r)}function O(e){return e.length}function ke(e){return e.length}function se(e,n){return n.push(e),e}function Et(e,n){return e.map(n).join("")}var ge=1,q=1,Re=0,I=0,D=0,G="";function ue(e,n,r,i,s,o,h){return{value:e,root:n,parent:r,type:i,props:s,children:o,line:ge,column:q,length:h,return:""}}function J(e,n){return St(ue("",null,null,"",null,null,0),e,{length:-e.length},n)}function zt(){return D}function Tt(){return D=I>0?E(G,--I):0,q--,D===10&&(q=1,ge--),D}function A(){return D=I<Re?E(G,I++):0,q++,D===10&&(q=1,ge++),D}function R(){return E(G,I)}function oe(){return I}function ie(e,n){return te(G,e,n)}function ne(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Be(e){return ge=q=1,Re=O(G=e),I=0,[]}function Ne(e){return G="",e}function ae(e){return Oe(ie(I-1,ye(e===91?e+2:e===40?e+1:e)))}function It(e){for(;(D=R())&&D<33;)A();return ne(e)>2||ne(D)>3?"":" "}function At(e,n){for(;--n&&A()&&!(D<48||D>102||D>57&&D<65||D>70&&D<97););return ie(e,oe()+(n<6&&R()==32&&A()==32))}function ye(e){for(;A();)switch(D){case e:return I;case 34:case 39:e!==34&&e!==39&&ye(D);break;case 40:e===41&&ye(e);break;case 92:A();break}return I}function Pt(e,n){for(;A()&&e+D!==47+10;)if(e+D===42+42&&R()===47)break;return"/*"+ie(n,I-1)+"*"+fe(e===47?e:A())}function Lt(e){for(;!ne(R());)A();return ie(e,I)}function Mt(e){return Ne(ce("",null,null,null,[""],e=Be(e),0,[0],e))}function ce(e,n,r,i,s,o,h,c,p){for(var g=0,x=0,l=h,f=0,C=0,b=0,m=1,k=1,v=1,$=0,L="",re=s,N=o,M=i,y=L;k;)switch(b=$,$=A()){case 40:if(b!=108&&E(y,l-1)==58){me(y+=w(ae($),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:y+=ae($);break;case 9:case 10:case 13:case 32:y+=It(b);break;case 92:y+=At(oe()-1,7);continue;case 47:switch(R()){case 42:case 47:se(Ot(Pt(A(),oe()),n,r),p);break;default:y+="/"}break;case 123*m:c[g++]=O(y)*v;case 125*m:case 59:case 0:switch($){case 0:case 125:k=0;case 59+x:v==-1&&(y=w(y,/\f/g,"")),C>0&&O(y)-l&&se(C>32?Ce(y+";",i,r,l-1):Ce(w(y," ","")+";",i,r,l-2),p);break;case 59:y+=";";default:if(se(M=De(y,n,r,g,x,s,c,L,re=[],N=[],l),o),$===123)if(x===0)ce(y,n,M,M,re,o,l,c,N);else switch(f===99&&E(y,3)===110?100:f){case 100:case 108:case 109:case 115:ce(e,M,M,i&&se(De(e,M,M,0,0,s,c,L,s,re=[],l),N),s,N,l,c,i?re:N);break;default:ce(y,M,M,M,[""],N,0,c,N)}}g=x=C=0,m=v=1,L=y="",l=h;break;case 58:l=1+O(y),C=b;default:if(m<1){if($==123)--m;else if($==125&&m++==0&&Tt()==125)continue}switch(y+=fe($),$*m){case 38:v=x>0?1:(y+="\f",-1);break;case 44:c[g++]=(O(y)-1)*v,v=1;break;case 64:R()===45&&(y+=ae(A())),f=R(),x=l=O(L=y+=Lt(oe())),$++;break;case 45:b===45&&O(y)==2&&(m=0)}}return o}function De(e,n,r,i,s,o,h,c,p,g,x){for(var l=s-1,f=s===0?o:[""],C=ke(f),b=0,m=0,k=0;b<i;++b)for(var v=0,$=te(e,l+1,l=kt(m=h[b])),L=e;v<C;++v)(L=Oe(m>0?f[v]+" "+$:w($,/&\f/g,f[v])))&&(p[k++]=L);return ue(e,n,r,s===0?ve:c,p,g,x)}function Ot(e,n,r){return ue(e,n,r,Le,fe(zt()),te(e,2,-2),0)}function Ce(e,n,r,i){return ue(e,n,r,$e,te(e,0,i),te(e,i+1,-1),i)}function Z(e,n){for(var r="",i=ke(e),s=0;s<i;s++)r+=n(e[s],s,e,n)||"";return r}function Rt(e,n,r,i){switch(e.type){case $t:if(e.children.length)break;case vt:case $e:return e.return=e.return||e.value;case Le:return"";case Me:return e.return=e.value+"{"+Z(e.children,i)+"}";case ve:e.value=e.props.join(",")}return O(r=Z(e.children,i))?e.return=e.value+"{"+r+"}":""}function Bt(e){var n=ke(e);return function(r,i,s,o){for(var h="",c=0;c<n;c++)h+=e[c](r,i,s,o)||"";return h}}function Nt(e){return function(n){n.root||(n=n.return)&&e(n)}}var _t=function(n,r,i){for(var s=0,o=0;s=o,o=R(),s===38&&o===12&&(r[i]=1),!ne(o);)A();return ie(n,I)},Wt=function(n,r){var i=-1,s=44;do switch(ne(s)){case 0:s===38&&R()===12&&(r[i]=1),n[i]+=_t(I-1,r,i);break;case 2:n[i]+=ae(s);break;case 4:if(s===44){n[++i]=R()===58?"&\f":"",r[i]=n[i].length;break}default:n[i]+=fe(s)}while(s=A());return n},Ht=function(n,r){return Ne(Wt(Be(n),r))},Ee=new WeakMap,Ut=function(n){if(!(n.type!=="rule"||!n.parent||n.length<1)){for(var r=n.value,i=n.parent,s=n.column===i.column&&n.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(n.props.length===1&&r.charCodeAt(0)!==58&&!Ee.get(i))&&!s){Ee.set(n,!0);for(var o=[],h=Ht(r,o),c=i.props,p=0,g=0;p<h.length;p++)for(var x=0;x<c.length;x++,g++)n.props[g]=o[p]?h[p].replace(/&\f/g,c[x]):c[x]+" "+h[p]}}},Yt=function(n){if(n.type==="decl"){var r=n.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(n.return="",n.value="")}};function _e(e,n){switch(Dt(e,n)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+de+e+z+e+e;case 6828:case 4268:return u+e+z+e+e;case 6165:return u+e+z+"flex-"+e+e;case 5187:return u+e+w(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+z+"flex-$1$2")+e;case 5443:return u+e+z+"flex-item-"+w(e,/flex-|-self/,"")+e;case 4675:return u+e+z+"flex-line-pack"+w(e,/align-content|flex-|-self/,"")+e;case 5548:return u+e+z+w(e,"shrink","negative")+e;case 5292:return u+e+z+w(e,"basis","preferred-size")+e;case 6060:return u+"box-"+w(e,"-grow","")+u+e+z+w(e,"grow","positive")+e;case 4554:return u+w(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return w(w(w(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return w(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return w(w(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4095:case 3583:case 4068:case 2532:return w(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(e)-1-n>6)switch(E(e,n+1)){case 109:if(E(e,n+4)!==45)break;case 102:return w(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+de+(E(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~me(e,"stretch")?_e(w(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(E(e,n+1)!==115)break;case 6444:switch(E(e,O(e)-3-(~me(e,"!important")&&10))){case 107:return w(e,":",":"+u)+e;case 101:return w(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+u+(E(e,14)===45?"inline-":"")+"box$3$1"+u+"$2$3$1"+z+"$2box$3")+e}break;case 5936:switch(E(e,n+11)){case 114:return u+e+z+w(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+z+w(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+z+w(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return u+e+z+e+e}return e}var Qt=function(n,r,i,s){if(n.length>-1&&!n.return)switch(n.type){case $e:n.return=_e(n.value,n.length);break;case Me:return Z([J(n,{value:w(n.value,"@","@"+u)})],s);case ve:if(n.length)return Et(n.props,function(o){switch(Ct(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Z([J(n,{props:[w(o,/:(read-\w+)/,":"+de+"$1")]})],s);case"::placeholder":return Z([J(n,{props:[w(o,/:(plac\w+)/,":"+u+"input-$1")]}),J(n,{props:[w(o,/:(plac\w+)/,":"+de+"$1")]}),J(n,{props:[w(o,/:(plac\w+)/,z+"input-$1")]})],s)}return""})}},Ft=[Qt],Kt=function(n){var r=n.key;if(r==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(m){var k=m.getAttribute("data-emotion");k.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var s=n.stylisPlugins||Ft,o={},h,c=[];h=n.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(m){for(var k=m.getAttribute("data-emotion").split(" "),v=1;v<k.length;v++)o[k[v]]=!0;c.push(m)});var p,g=[Ut,Yt];{var x,l=[Rt,Nt(function(m){x.insert(m)})],f=Bt(g.concat(s,l)),C=function(k){return Z(Mt(k),f)};p=function(k,v,$,L){x=$,C(k?k+"{"+v.styles+"}":v.styles),L&&(b.inserted[v.name]=!0)}}var b={key:r,sheet:new jt({key:r,container:h,nonce:n.nonce,speedy:n.speedy,prepend:n.prepend,insertionPoint:n.insertionPoint}),nonce:n.nonce,inserted:o,registered:{},insert:p};return b.sheet.hydrate(c),b},Vt=j.createContext(typeof HTMLElement<"u"?Kt({key:"css"}):null);Vt.Provider;var Zt=j.createContext({});function qt(e){return Object.keys(e).length===0}function Gt(e=null){const n=j.useContext(Zt);return!n||qt(n)?e:n}function We(e,n){const r=X({},n);return Object.keys(e).forEach(i=>{if(i.toString().match(/^(components|slots)$/))r[i]=X({},e[i],r[i]);else if(i.toString().match(/^(componentsProps|slotProps)$/)){const s=e[i]||{},o=n[i];r[i]={},!o||!Object.keys(o)?r[i]=s:!s||!Object.keys(s)?r[i]=o:(r[i]=X({},o),Object.keys(s).forEach(h=>{r[i][h]=We(s[h],o[h])}))}else r[i]===void 0&&(r[i]=e[i])}),r}function Jt(e){const{theme:n,name:r,props:i}=e;return!n||!n.components||!n.components[r]||!n.components[r].defaultProps?i:We(n.components[r].defaultProps,i)}const Xt=typeof window<"u"?j.useLayoutEffect:j.useEffect,en=Xt;function tn(e,n,r,i,s){const[o,h]=j.useState(()=>s&&r?r(e).matches:i?i(e).matches:n);return en(()=>{let c=!0;if(!r)return;const p=r(e),g=()=>{c&&h(p.matches)};return g(),p.addListener(g),()=>{c=!1,p.removeListener(g)}},[e,r]),o}const He=tt["useSyncExternalStore"];function nn(e,n,r,i,s){const o=j.useCallback(()=>n,[n]),h=j.useMemo(()=>{if(s&&r)return()=>r(e).matches;if(i!==null){const{matches:x}=i(e);return()=>x}return o},[o,e,i,s,r]),[c,p]=j.useMemo(()=>{if(r===null)return[o,()=>()=>{}];const x=r(e);return[()=>x.matches,l=>(x.addListener(l),()=>{x.removeListener(l)})]},[o,r,e]);return He(p,c,h)}function Ue(e,n={}){const r=Gt(),i=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:s=!1,matchMedia:o=i?window.matchMedia:null,ssrMatchMedia:h=null,noSsr:c=!1}=Jt({name:"MuiUseMediaQuery",props:n,theme:r});let p=typeof e=="function"?e(r):e;return p=p.replace(/^@media( ?)/m,""),(He!==void 0?nn:tn)(p,s,o,h,c)}const Ye=d.div`
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
`,Qe=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Fe=d.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,Ke=d.div`
  &:hover span {
    color: ${a.orange};
  }
`,Ve=d.span`
color: ${a.orange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Ze=d.p`
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
`,rn=d.ul`
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
`,ze=d.ul`
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
`,qe=d.div`
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
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

`,Te=d.span`
  @media screen and (min-width: 320px) {
    color: ${a.white};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,sn=e=>e.diary.isLoading,Se=e=>e.diary.error,on=({productsArray:e,date:n})=>{const[r,i]=j.useState([]);j.useEffect(()=>{e&&i(e)},[e]);const s=be(),h=B(Ae).blood,c=B(Se),p=Ue("(max-width:768px)"),g=f=>typeof f!="string"||f.length===0?"":f[0].toUpperCase()+f.slice(1).toLowerCase();let x;const l=async f=>{try{await s(nt(f));const C=r.filter(b=>b._id!==f);i(C),await s(je(n)),ee.Notify.success("Product deleted successfully!",{theme:"light"})}catch(C){console.log(C),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return t.jsxs(Ye,{children:[t.jsxs(Qe,{children:[t.jsx(Fe,{children:"Products"}),t.jsx(Ke,{children:t.jsxs(Pe,{to:"/products",style:{display:"flex",alignItems:"center"},children:[t.jsx(Ve,{children:"Add product"}),t.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:a.orange},children:t.jsx("use",{href:S+"#icon-arrow-right"})})]})})]}),r&&r.length>0&&!c?p?t.jsx(he,{children:t.jsx(pe,{children:r.map(f=>{var b,m;const C=f.productID.groupBloodNotAllowed[h]?"Yes":"No";return t.jsxs(ze,{children:[t.jsx(P,{children:"Title"}),t.jsx(P,{children:g((b=f.productID)==null?void 0:b.title)}),t.jsx(P,{children:"Category"}),t.jsx(P,{children:g((m=f.productID)==null?void 0:m.category)}),t.jsxs(qe,{children:[t.jsxs(Ge,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:"Calories"}),t.jsx(P,{children:f.calories})]}),t.jsxs(Je,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:"Weight"}),t.jsx(P,{children:f.amount})]}),t.jsxs(Xe,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:"Recommend"}),t.jsx(P,{children:t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[t.jsx("svg",{style:{width:"14px",height:"14px"},children:C==="Yes"?t.jsx("use",{href:S+"#icon-bubble",style:{fill:`${a.green}`,stroke:a.green}}):t.jsx("use",{href:S+"#icon-bubble",style:{fill:a.red,stroke:a.red}})}),t.jsx(Te,{children:x})]})})]}),t.jsxs(et,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:""}),t.jsx(P,{children:t.jsx(le,{type:"button",onClick:()=>l(f._id),children:t.jsx(xe,{children:t.jsx("use",{href:S+"#icon-trash"})})})})]})]})]},f._id)})})}):t.jsxs(he,{children:[t.jsxs(rn,{children:[t.jsx(H,{children:"Title"}),t.jsx(H,{children:"Category"}),t.jsx(H,{children:"Calories"}),t.jsx(H,{children:"Weight"}),t.jsx(H,{children:"Recommend"}),t.jsx(H,{children:""})]}),t.jsx(pe,{children:e.map(f=>{var b,m,k;const C=(b=f.productID)!=null&&b.groupBloodNotAllowed[h]?x="Yes":x="No";return t.jsxs(ze,{children:[t.jsx(U,{children:g((m=f.productID)==null?void 0:m.title)}),t.jsx(U,{children:g((k=f.productID)==null?void 0:k.category)}),t.jsx(U,{children:f.calories}),t.jsx(U,{children:f.amount}),t.jsx(U,{children:t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[t.jsx("svg",{style:{width:"14px",height:"14px"},children:C==="Yes"?t.jsx("use",{href:S+"#icon-bubble",style:{fill:a.green,stroke:a.green}}):t.jsx("use",{href:S+"#icon-bubble",style:{fill:a.red,stroke:a.red}})}),t.jsx(Te,{children:x})]})}),t.jsx(U,{children:t.jsx(le,{type:"button",onClick:()=>l(f._id),children:t.jsx(xe,{children:t.jsx("use",{href:S+"#icon-trash"})})})})]},f._id)})})]}):t.jsx(Ze,{children:"Not found products"})]})},an=d.ul`
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
`,Ie=d.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,T=d.li`
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

`;const cn=({exercisesArray:e,date:n})=>{const r=Ue("(max-width:768px)"),i=B(Se),s=be(),o=c=>c.charAt(0).toUpperCase()+c.slice(1).toLowerCase(),h=async c=>{try{await s(it(c)),await s(je(n)),ee.Notify.success("Exercise deleted successfully!",{theme:"light"})}catch(p){console.log(p),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return t.jsxs(Ye,{children:[t.jsxs(Qe,{children:[t.jsx(Fe,{children:"Exercises"}),t.jsx(Ke,{children:t.jsxs(Pe,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[t.jsx(Ve,{children:"Add exercises"}),t.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:a.orange},children:t.jsx("use",{href:S+"#icon-arrow-right"})})]})})]}),e&&e.length>0&&!i?r?t.jsx(he,{children:t.jsx(pe,{children:e.map(c=>{var p,g,x,l;return t.jsxs(Ie,{children:[t.jsx(T,{children:"Body Part"}),t.jsx(T,{children:o((p=c.exerciseID)==null?void 0:p.bodyPart)}),t.jsx(T,{children:"Equipment"}),t.jsx(T,{children:o((g=c.exerciseID)==null?void 0:g.equipment)}),t.jsx(T,{children:"Name"}),t.jsx(T,{children:o((x=c.exerciseID)==null?void 0:x.name)}),t.jsxs(qe,{children:[t.jsxs(Ge,{children:[t.jsx(T,{children:"Target"}),t.jsx(T,{children:o((l=c.exerciseID)==null?void 0:l.target)})]}),t.jsxs(Je,{children:[t.jsx(T,{children:"Burned Calories"}),t.jsx(T,{children:c.calories})]}),t.jsxs(Xe,{children:[t.jsx(T,{children:"Time"}),t.jsx(T,{children:c.time})]}),t.jsxs(et,{children:[t.jsx(T,{children:""}),t.jsx(T,{children:t.jsx(le,{type:"button",onClick:()=>h(c._id),children:t.jsx(xe,{children:t.jsx("use",{href:S+"#icon-trash"})})})})]})]})]},c._id)})})}):t.jsxs(he,{children:[t.jsxs(an,{children:[t.jsx(_,{children:"Body Part"}),t.jsx(_,{children:"Equipment"}),t.jsx(_,{children:"Name"}),t.jsx(_,{children:"Target"}),t.jsx(_,{children:"Burned Calories"}),t.jsx(_,{children:"Time"}),t.jsx(_,{children:""})]}),t.jsx(pe,{children:e.map(c=>t.jsxs(Ie,{children:[t.jsx(W,{children:o(c.exerciseID.bodyPart)}),t.jsx(W,{children:o(c.exerciseID.equipment)}),t.jsx(W,{children:o(c.exerciseID.name)}),t.jsx(W,{children:o(c.exerciseID.target)}),t.jsx(W,{children:c.calories}),t.jsx(W,{children:c.time}),t.jsx(W,{children:t.jsx(le,{type:"button",onClick:()=>h(c._id),children:t.jsx(xe,{children:t.jsx("use",{href:S+"#icon-trash"})})})})]},c._id))})]}):t.jsx(Ze,{children:"Not found exercises"})]})},dn=d.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,hn=d.ul`
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
`,K=d.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: ${a.white};


  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,pn=d.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,ln=d.div`
  width: 24px;
  height: 24px;
  background-color: ${a.beige};
  border-radius: 50%;
`,V=d.svg`
  width: 20px;
  height: 20px;
  fill: ${a.orangeSecond};
`,xn=d.svg`
  width: 24px;
  height: 24px;
`,fn=d.p`
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
`,gn=({userDiaryInformation:e,bmr:n})=>{const{burnedCalories:r,consumedCalories:i,remainingSports:s}=e,[o,h]=j.useState(!1),[c,p]=j.useState(!1),g=Math.round(i-r,0);return B(Se),j.useEffect(()=>{h(g<0),p(s<0)},[g,s]),t.jsxs(dn,{children:[t.jsxs(hn,{children:[t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(V,{children:t.jsx("use",{href:`${S}#icon-fork-knife`})}),t.jsx(F,{children:"Daily calorie intake"})]}),t.jsx(K,{children:n||2200})]}),t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(V,{children:t.jsx("use",{href:S+"#icon-dumbbell"})}),t.jsx(F,{children:"Daily norm of sports"})]}),t.jsx(K,{children:"110 min"})]}),t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(V,{children:t.jsx("use",{href:S+"#icon-apple"})}),t.jsx(F,{children:"Calories consumed"})]}),t.jsx(K,{children:Math.round(i,0)||0})]}),t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(V,{children:t.jsx("use",{href:S+"#icon-fire"})}),t.jsx(F,{children:"Calories burned"})]}),t.jsx(K,{children:r||0})]}),t.jsxs(Y,{className:o?"greenBg":g<0?"redBg":"",children:[t.jsxs(Q,{children:[t.jsx(V,{children:t.jsx("use",{href:S+"#icon-bubble"})}),t.jsx(F,{children:"The rest of the calories"})]}),t.jsx(K,{children:g||n||0})]}),t.jsxs(Y,{className:c?"greenBg":"",children:[t.jsxs(Q,{children:[t.jsx(V,{children:t.jsx("use",{href:S+"#icon-running-figure"})}),t.jsx(F,{children:"The rest of sports"})]}),t.jsxs(K,{children:[s||110," min"]})]})]}),t.jsxs(pn,{children:[t.jsx(ln,{children:t.jsx(xn,{children:t.jsx("use",{href:S+"#icon-running-stick-figure-svgrepo-com-1"})})}),t.jsx(fn,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},un=d.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,wn=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,mn=d.div`
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
`,yn=d.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,bn=d.div`
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
`,we=e=>{const n=new Date(e),r=String(n.getDate()).padStart(2,"0"),i=String(n.getMonth()+1).padStart(2,"0"),s=n.getFullYear();return`${r}-${i}-${s}`},kn=()=>{const[e,n]=j.useState(new Date),i=B(Ae).createdAt,s=be(),o=B(sn),h=B(rt),c=B(st);j.useEffect(()=>{try{(async()=>{const v=we(e),$=await s(je(v));$.payload&&(l($.payload),C($.payload.products),m($.payload.exercises))})()}catch(k){console.log(k),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}},[s,e]);const p=j.useMemo(()=>we(e),[e]),g=j.useMemo(()=>we(i),[i]),[x,l]=j.useState([]),[f,C]=j.useState([]),[b,m]=j.useState([]);return t.jsx(bn,{children:o||h?t.jsx(ot,{}):t.jsxs(un,{children:[t.jsxs(wn,{children:[t.jsx(dt,{title:"Diary "}),t.jsx(mt,{currentDate:e,setCurrentDate:n,userDateRegistration:g})]}),t.jsxs(yn,{children:[t.jsx(gn,{userDiaryInformation:x,bmr:c}),t.jsxs(mn,{children:[t.jsx(on,{productsArray:f,date:p}),t.jsx(cn,{exercisesArray:b,date:p})]})]})]})})};export{kn as default};
