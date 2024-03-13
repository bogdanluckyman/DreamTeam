import{u as h,h as a,r as j,j as t,s as v,i as tt,a as be,k as B,m as Ae,n as Pe,o as nt,p as je,q as ee,t as it,v as rt,w as st,L as ot}from"./index-7d8569f1.js";import{f as at,D as ct}from"./Datapicker-87925373.js";import{T as dt}from"./TitlePage-9b80d8ef.js";const ht=h.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,pt=h.button`
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
`,lt=h.p`
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
`,xt=h.svg`
  width: 20px;
  height: 20px;
  stroke: ${a.orange};

  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,ft=h.button`
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
`,gt=h.button`
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
`,wt=h.svg`
  width: 100%;
  height: 100%;
  fill: ${a.white};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,ut=h.svg`
  width: 100%;
  height: 100%;
  fill: ${a.white};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`,mt=({currentDate:e,setCurrentDate:n,userDateRegistration:r})=>{const[i,s]=j.useState(e),[o,x]=j.useState(!1),c=()=>{x(!o)},p=()=>{const l=new Date(i);l.setDate(l.getDate()-1),n(l),s(l)},f=()=>{const l=new Date(i);l.setDate(l.getDate()+1),n(l),s(l)},d=()=>{x(!1)};return t.jsxs(ht,{children:[t.jsxs(ft,{onClick:c,children:[t.jsx(lt,{children:at(i,"dd/MM/yyyy")}),t.jsx(xt,{children:t.jsx("use",{href:`${v}#icon-calendar-orange`})})]}),t.jsx(gt,{type:"button",onClick:p,children:t.jsx(wt,{children:t.jsx("use",{href:`${v}#icon-chevron-left`})})}),t.jsx(pt,{type:"button",onClick:f,children:t.jsx(ut,{children:t.jsx("use",{href:`${v}#icon-chevron-right`})})}),t.jsx(ct,{selectedDate:i,setSelectedDate:s,isOpen:o,onClose:d,setCurrentDate:n,userDateRegistration:r})]})};function X(){return X=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},X.apply(this,arguments)}function yt(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}function bt(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),e.nonce!==void 0&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}var jt=function(){function e(r){var i=this;this._insertTag=function(s){var o;i.tags.length===0?i.insertionPoint?o=i.insertionPoint.nextSibling:i.prepend?o=i.container.firstChild:o=i.before:o=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(s,o),i.tags.push(s)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var n=e.prototype;return n.hydrate=function(i){i.forEach(this._insertTag)},n.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(bt(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var o=yt(s);try{o.insertRule(i,o.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(i));this.ctr++},n.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},e}(),E="-ms-",de="-moz-",g="-webkit-",Le="comm",ve="rule",$e="decl",vt="@import",Me="@keyframes",$t="@layer",kt=Math.abs,fe=String.fromCharCode,Dt=Object.assign;function St(e,n){return C(e,0)^45?(((n<<2^C(e,0))<<2^C(e,1))<<2^C(e,2))<<2^C(e,3):0}function Oe(e){return e.trim()}function Ct(e,n){return(e=n.exec(e))?e[0]:e}function w(e,n,r){return e.replace(n,r)}function me(e,n){return e.indexOf(n)}function C(e,n){return e.charCodeAt(n)|0}function te(e,n,r){return e.slice(n,r)}function O(e){return e.length}function ke(e){return e.length}function se(e,n){return n.push(e),e}function zt(e,n){return e.map(n).join("")}var ge=1,q=1,Re=0,I=0,$=0,G="";function we(e,n,r,i,s,o,x){return{value:e,root:n,parent:r,type:i,props:s,children:o,line:ge,column:q,length:x,return:""}}function J(e,n){return Dt(we("",null,null,"",null,null,0),e,{length:-e.length},n)}function Et(){return $}function Tt(){return $=I>0?C(G,--I):0,q--,$===10&&(q=1,ge--),$}function A(){return $=I<Re?C(G,I++):0,q++,$===10&&(q=1,ge++),$}function R(){return C(G,I)}function oe(){return I}function ie(e,n){return te(G,e,n)}function ne(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Be(e){return ge=q=1,Re=O(G=e),I=0,[]}function Ne(e){return G="",e}function ae(e){return Oe(ie(I-1,ye(e===91?e+2:e===40?e+1:e)))}function It(e){for(;($=R())&&$<33;)A();return ne(e)>2||ne($)>3?"":" "}function At(e,n){for(;--n&&A()&&!($<48||$>102||$>57&&$<65||$>70&&$<97););return ie(e,oe()+(n<6&&R()==32&&A()==32))}function ye(e){for(;A();)switch($){case e:return I;case 34:case 39:e!==34&&e!==39&&ye($);break;case 40:e===41&&ye(e);break;case 92:A();break}return I}function Pt(e,n){for(;A()&&e+$!==47+10;)if(e+$===42+42&&R()===47)break;return"/*"+ie(n,I-1)+"*"+fe(e===47?e:A())}function Lt(e){for(;!ne(R());)A();return ie(e,I)}function Mt(e){return Ne(ce("",null,null,null,[""],e=Be(e),0,[0],e))}function ce(e,n,r,i,s,o,x,c,p){for(var f=0,d=0,l=x,D=0,z=0,k=0,m=1,S=1,y=1,b=0,L="",re=s,N=o,M=i,u=L;S;)switch(k=b,b=A()){case 40:if(k!=108&&C(u,l-1)==58){me(u+=w(ae(b),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:u+=ae(b);break;case 9:case 10:case 13:case 32:u+=It(k);break;case 92:u+=At(oe()-1,7);continue;case 47:switch(R()){case 42:case 47:se(Ot(Pt(A(),oe()),n,r),p);break;default:u+="/"}break;case 123*m:c[f++]=O(u)*y;case 125*m:case 59:case 0:switch(b){case 0:case 125:S=0;case 59+d:y==-1&&(u=w(u,/\f/g,"")),z>0&&O(u)-l&&se(z>32?Ce(u+";",i,r,l-1):Ce(w(u," ","")+";",i,r,l-2),p);break;case 59:u+=";";default:if(se(M=Se(u,n,r,f,d,s,c,L,re=[],N=[],l),o),b===123)if(d===0)ce(u,n,M,M,re,o,l,c,N);else switch(D===99&&C(u,3)===110?100:D){case 100:case 108:case 109:case 115:ce(e,M,M,i&&se(Se(e,M,M,0,0,s,c,L,s,re=[],l),N),s,N,l,c,i?re:N);break;default:ce(u,M,M,M,[""],N,0,c,N)}}f=d=z=0,m=y=1,L=u="",l=x;break;case 58:l=1+O(u),z=k;default:if(m<1){if(b==123)--m;else if(b==125&&m++==0&&Tt()==125)continue}switch(u+=fe(b),b*m){case 38:y=d>0?1:(u+="\f",-1);break;case 44:c[f++]=(O(u)-1)*y,y=1;break;case 64:R()===45&&(u+=ae(A())),D=R(),d=l=O(L=u+=Lt(oe())),b++;break;case 45:k===45&&O(u)==2&&(m=0)}}return o}function Se(e,n,r,i,s,o,x,c,p,f,d){for(var l=s-1,D=s===0?o:[""],z=ke(D),k=0,m=0,S=0;k<i;++k)for(var y=0,b=te(e,l+1,l=kt(m=x[k])),L=e;y<z;++y)(L=Oe(m>0?D[y]+" "+b:w(b,/&\f/g,D[y])))&&(p[S++]=L);return we(e,n,r,s===0?ve:c,p,f,d)}function Ot(e,n,r){return we(e,n,r,Le,fe(Et()),te(e,2,-2),0)}function Ce(e,n,r,i){return we(e,n,r,$e,te(e,0,i),te(e,i+1,-1),i)}function Z(e,n){for(var r="",i=ke(e),s=0;s<i;s++)r+=n(e[s],s,e,n)||"";return r}function Rt(e,n,r,i){switch(e.type){case $t:if(e.children.length)break;case vt:case $e:return e.return=e.return||e.value;case Le:return"";case Me:return e.return=e.value+"{"+Z(e.children,i)+"}";case ve:e.value=e.props.join(",")}return O(r=Z(e.children,i))?e.return=e.value+"{"+r+"}":""}function Bt(e){var n=ke(e);return function(r,i,s,o){for(var x="",c=0;c<n;c++)x+=e[c](r,i,s,o)||"";return x}}function Nt(e){return function(n){n.root||(n=n.return)&&e(n)}}var _t=function(n,r,i){for(var s=0,o=0;s=o,o=R(),s===38&&o===12&&(r[i]=1),!ne(o);)A();return ie(n,I)},Wt=function(n,r){var i=-1,s=44;do switch(ne(s)){case 0:s===38&&R()===12&&(r[i]=1),n[i]+=_t(I-1,r,i);break;case 2:n[i]+=ae(s);break;case 4:if(s===44){n[++i]=R()===58?"&\f":"",r[i]=n[i].length;break}default:n[i]+=fe(s)}while(s=A());return n},Ht=function(n,r){return Ne(Wt(Be(n),r))},ze=new WeakMap,Ut=function(n){if(!(n.type!=="rule"||!n.parent||n.length<1)){for(var r=n.value,i=n.parent,s=n.column===i.column&&n.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(n.props.length===1&&r.charCodeAt(0)!==58&&!ze.get(i))&&!s){ze.set(n,!0);for(var o=[],x=Ht(r,o),c=i.props,p=0,f=0;p<x.length;p++)for(var d=0;d<c.length;d++,f++)n.props[f]=o[p]?x[p].replace(/&\f/g,c[d]):c[d]+" "+x[p]}}},Yt=function(n){if(n.type==="decl"){var r=n.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(n.return="",n.value="")}};function _e(e,n){switch(St(e,n)){case 5103:return g+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return g+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return g+e+de+e+E+e+e;case 6828:case 4268:return g+e+E+e+e;case 6165:return g+e+E+"flex-"+e+e;case 5187:return g+e+w(e,/(\w+).+(:[^]+)/,g+"box-$1$2"+E+"flex-$1$2")+e;case 5443:return g+e+E+"flex-item-"+w(e,/flex-|-self/,"")+e;case 4675:return g+e+E+"flex-line-pack"+w(e,/align-content|flex-|-self/,"")+e;case 5548:return g+e+E+w(e,"shrink","negative")+e;case 5292:return g+e+E+w(e,"basis","preferred-size")+e;case 6060:return g+"box-"+w(e,"-grow","")+g+e+E+w(e,"grow","positive")+e;case 4554:return g+w(e,/([^-])(transform)/g,"$1"+g+"$2")+e;case 6187:return w(w(w(e,/(zoom-|grab)/,g+"$1"),/(image-set)/,g+"$1"),e,"")+e;case 5495:case 3959:return w(e,/(image-set\([^]*)/,g+"$1$`$1");case 4968:return w(w(e,/(.+:)(flex-)?(.*)/,g+"box-pack:$3"+E+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+g+e+e;case 4095:case 3583:case 4068:case 2532:return w(e,/(.+)-inline(.+)/,g+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(e)-1-n>6)switch(C(e,n+1)){case 109:if(C(e,n+4)!==45)break;case 102:return w(e,/(.+:)(.+)-([^]+)/,"$1"+g+"$2-$3$1"+de+(C(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~me(e,"stretch")?_e(w(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(C(e,n+1)!==115)break;case 6444:switch(C(e,O(e)-3-(~me(e,"!important")&&10))){case 107:return w(e,":",":"+g)+e;case 101:return w(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+g+(C(e,14)===45?"inline-":"")+"box$3$1"+g+"$2$3$1"+E+"$2box$3")+e}break;case 5936:switch(C(e,n+11)){case 114:return g+e+E+w(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return g+e+E+w(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return g+e+E+w(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return g+e+E+e+e}return e}var Qt=function(n,r,i,s){if(n.length>-1&&!n.return)switch(n.type){case $e:n.return=_e(n.value,n.length);break;case Me:return Z([J(n,{value:w(n.value,"@","@"+g)})],s);case ve:if(n.length)return zt(n.props,function(o){switch(Ct(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Z([J(n,{props:[w(o,/:(read-\w+)/,":"+de+"$1")]})],s);case"::placeholder":return Z([J(n,{props:[w(o,/:(plac\w+)/,":"+g+"input-$1")]}),J(n,{props:[w(o,/:(plac\w+)/,":"+de+"$1")]}),J(n,{props:[w(o,/:(plac\w+)/,E+"input-$1")]})],s)}return""})}},Ft=[Qt],Kt=function(n){var r=n.key;if(r==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(m){var S=m.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var s=n.stylisPlugins||Ft,o={},x,c=[];x=n.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(m){for(var S=m.getAttribute("data-emotion").split(" "),y=1;y<S.length;y++)o[S[y]]=!0;c.push(m)});var p,f=[Ut,Yt];{var d,l=[Rt,Nt(function(m){d.insert(m)})],D=Bt(f.concat(s,l)),z=function(S){return Z(Mt(S),D)};p=function(S,y,b,L){d=b,z(S?S+"{"+y.styles+"}":y.styles),L&&(k.inserted[y.name]=!0)}}var k={key:r,sheet:new jt({key:r,container:x,nonce:n.nonce,speedy:n.speedy,prepend:n.prepend,insertionPoint:n.insertionPoint}),nonce:n.nonce,inserted:o,registered:{},insert:p};return k.sheet.hydrate(c),k},Vt=j.createContext(typeof HTMLElement<"u"?Kt({key:"css"}):null);Vt.Provider;var Zt=j.createContext({});function qt(e){return Object.keys(e).length===0}function Gt(e=null){const n=j.useContext(Zt);return!n||qt(n)?e:n}function We(e,n){const r=X({},n);return Object.keys(e).forEach(i=>{if(i.toString().match(/^(components|slots)$/))r[i]=X({},e[i],r[i]);else if(i.toString().match(/^(componentsProps|slotProps)$/)){const s=e[i]||{},o=n[i];r[i]={},!o||!Object.keys(o)?r[i]=s:!s||!Object.keys(s)?r[i]=o:(r[i]=X({},o),Object.keys(s).forEach(x=>{r[i][x]=We(s[x],o[x])}))}else r[i]===void 0&&(r[i]=e[i])}),r}function Jt(e){const{theme:n,name:r,props:i}=e;return!n||!n.components||!n.components[r]||!n.components[r].defaultProps?i:We(n.components[r].defaultProps,i)}const Xt=typeof window<"u"?j.useLayoutEffect:j.useEffect,en=Xt;function tn(e,n,r,i,s){const[o,x]=j.useState(()=>s&&r?r(e).matches:i?i(e).matches:n);return en(()=>{let c=!0;if(!r)return;const p=r(e),f=()=>{c&&x(p.matches)};return f(),p.addListener(f),()=>{c=!1,p.removeListener(f)}},[e,r]),o}const He=tt["useSyncExternalStore"];function nn(e,n,r,i,s){const o=j.useCallback(()=>n,[n]),x=j.useMemo(()=>{if(s&&r)return()=>r(e).matches;if(i!==null){const{matches:d}=i(e);return()=>d}return o},[o,e,i,s,r]),[c,p]=j.useMemo(()=>{if(r===null)return[o,()=>()=>{}];const d=r(e);return[()=>d.matches,l=>(d.addListener(l),()=>{d.removeListener(l)})]},[o,r,e]);return He(p,c,x)}function Ue(e,n={}){const r=Gt(),i=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:s=!1,matchMedia:o=i?window.matchMedia:null,ssrMatchMedia:x=null,noSsr:c=!1}=Jt({name:"MuiUseMediaQuery",props:n,theme:r});let p=typeof e=="function"?e(r):e;return p=p.replace(/^@media( ?)/m,""),(He!==void 0?nn:tn)(p,s,o,x,c)}const Ye=h.div`
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
`,Qe=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Fe=h.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,Ke=h.div`
  &:hover span {
    color: ${a.orange};
  }
`,Ve=h.span`
color: ${a.orange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Ze=h.p`
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
`,he=h.div`
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
`,pe=h.div`
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
`,rn=h.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`,H=h.li`
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
`,Ee=h.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,P=h.li`
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
`,U=h.li`
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
`,qe=h.div`
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`,Ge=h.div`
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
`,Je=h.div`
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
`,Xe=h.div`
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
`,et=h.div`
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
`,le=h.button`
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
`,xe=h.svg`
  stroke: ${a.orange};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;

`,Te=h.span`
  @media screen and (min-width: 320px) {
    color: ${a.white};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,sn=e=>e.diary.isLoading,De=e=>e.diary.error,on=({productsArray:e,date:n})=>{const r=be(),s=B(Ae).blood,o=B(De),x=Ue("(max-width:768px)"),c=d=>typeof d!="string"||d.length===0?"":d[0].toUpperCase()+d.slice(1).toLowerCase();let p;const f=async d=>{try{await r(nt(d)),await r(je(n)),ee.Notify.success("Product deleted successfully!",{theme:"light"})}catch(l){console.log(l),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return t.jsxs(Ye,{children:[t.jsxs(Qe,{children:[t.jsx(Fe,{children:"Products"}),t.jsx(Ke,{children:t.jsxs(Pe,{to:"/products",style:{display:"flex",alignItems:"center"},children:[t.jsx(Ve,{children:"Add product"}),t.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:a.orange},children:t.jsx("use",{href:v+"#icon-arrow-right"})})]})})]}),e&&e.length>0&&!o?x?t.jsx(he,{children:t.jsx(pe,{children:e.map(d=>{var D,z;const l=d.productID.groupBloodNotAllowed[s]?"Yes":"No";return t.jsxs(Ee,{children:[t.jsx(P,{children:"Title"}),t.jsx(P,{children:c((D=d.productID)==null?void 0:D.title)}),t.jsx(P,{children:"Category"}),t.jsx(P,{children:c((z=d.productID)==null?void 0:z.category)}),t.jsxs(qe,{children:[t.jsxs(Ge,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:"Calories"}),t.jsx(P,{children:d.calories})]}),t.jsxs(Je,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:"Weight"}),t.jsx(P,{children:d.amount})]}),t.jsxs(Xe,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:"Recommend"}),t.jsx(P,{children:t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[t.jsx("svg",{style:{width:"14px",height:"14px"},children:l==="Yes"?t.jsx("use",{href:v+"#icon-bubble",style:{fill:`${a.green}`,stroke:a.green}}):t.jsx("use",{href:v+"#icon-bubble",style:{fill:a.red,stroke:a.red}})}),t.jsx(Te,{children:p})]})})]}),t.jsxs(et,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:""}),t.jsx(P,{children:t.jsx(le,{type:"button",onClick:()=>f(d._id),children:t.jsx(xe,{children:t.jsx("use",{href:v+"#icon-trash"})})})})]})]})]},d._id)})})}):t.jsxs(he,{children:[t.jsxs(rn,{children:[t.jsx(H,{children:"Title"}),t.jsx(H,{children:"Category"}),t.jsx(H,{children:"Calories"}),t.jsx(H,{children:"Weight"}),t.jsx(H,{children:"Recommend"}),t.jsx(H,{children:""})]}),t.jsx(pe,{children:e.map(d=>{var D,z,k;const l=(D=d.productID)!=null&&D.groupBloodNotAllowed[s]?p="Yes":p="No";return t.jsxs(Ee,{children:[t.jsx(U,{children:c((z=d.productID)==null?void 0:z.title)}),t.jsx(U,{children:c((k=d.productID)==null?void 0:k.category)}),t.jsx(U,{children:d.calories}),t.jsx(U,{children:d.amount}),t.jsx(U,{children:t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[t.jsx("svg",{style:{width:"14px",height:"14px"},children:l==="Yes"?t.jsx("use",{href:v+"#icon-bubble",style:{fill:a.green,stroke:a.green}}):t.jsx("use",{href:v+"#icon-bubble",style:{fill:a.red,stroke:a.red}})}),t.jsx(Te,{children:p})]})}),t.jsx(U,{children:t.jsx(le,{type:"button",onClick:()=>f(d._id),children:t.jsx(xe,{children:t.jsx("use",{href:v+"#icon-trash"})})})})]},d._id)})})]}):t.jsx(Ze,{children:"Not found products"})]})},an=h.ul`
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
`,_=h.li`
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
`,Ie=h.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,T=h.li`
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
`,W=h.li`
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
`;h.svg`
  stroke: ${a.orange};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;

`;const cn=({exercisesArray:e,date:n})=>{const r=Ue("(max-width:768px)"),i=B(De),s=be(),o=c=>c.charAt(0).toUpperCase()+c.slice(1).toLowerCase(),x=async c=>{try{await s(it(c)),await s(je(n)),ee.Notify.success("Exercise deleted successfully!",{theme:"light"})}catch(p){console.log(p),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return t.jsxs(Ye,{children:[t.jsxs(Qe,{children:[t.jsx(Fe,{children:"Exercises"}),t.jsx(Ke,{children:t.jsxs(Pe,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[t.jsx(Ve,{children:"Add exercises"}),t.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:a.orange},children:t.jsx("use",{href:v+"#icon-arrow-right"})})]})})]}),e&&e.length>0&&!i?r?t.jsx(he,{children:t.jsx(pe,{children:e.map(c=>{var p,f,d,l;return t.jsxs(Ie,{children:[t.jsx(T,{children:"Body Part"}),t.jsx(T,{children:o((p=c.exerciseID)==null?void 0:p.bodyPart)}),t.jsx(T,{children:"Equipment"}),t.jsx(T,{children:o((f=c.exerciseID)==null?void 0:f.equipment)}),t.jsx(T,{children:"Name"}),t.jsx(T,{children:o((d=c.exerciseID)==null?void 0:d.name)}),t.jsxs(qe,{children:[t.jsxs(Ge,{children:[t.jsx(T,{children:"Target"}),t.jsx(T,{children:o((l=c.exerciseID)==null?void 0:l.target)})]}),t.jsxs(Je,{children:[t.jsx(T,{children:"Burned Calories"}),t.jsx(T,{children:c.calories})]}),t.jsxs(Xe,{children:[t.jsx(T,{children:"Time"}),t.jsx(T,{children:c.time})]}),t.jsxs(et,{children:[t.jsx(T,{children:""}),t.jsx(T,{children:t.jsx(le,{type:"button",onClick:()=>x(c._id),children:t.jsx(xe,{children:t.jsx("use",{href:v+"#icon-trash"})})})})]})]})]},c._id)})})}):t.jsxs(he,{children:[t.jsxs(an,{children:[t.jsx(_,{children:"Body Part"}),t.jsx(_,{children:"Equipment"}),t.jsx(_,{children:"Name"}),t.jsx(_,{children:"Target"}),t.jsx(_,{children:"Burned Calories"}),t.jsx(_,{children:"Time"}),t.jsx(_,{children:""})]}),t.jsx(pe,{children:e.map(c=>t.jsxs(Ie,{children:[t.jsx(W,{children:o(c.exerciseID.bodyPart)}),t.jsx(W,{children:o(c.exerciseID.equipment)}),t.jsx(W,{children:o(c.exerciseID.name)}),t.jsx(W,{children:o(c.exerciseID.target)}),t.jsx(W,{children:c.calories}),t.jsx(W,{children:c.time}),t.jsx(W,{children:t.jsx(le,{type:"button",onClick:()=>x(c._id),children:t.jsx(xe,{children:t.jsx("use",{href:v+"#icon-trash"})})})})]},c._id))})]}):t.jsx(Ze,{children:"Not found exercises"})]})},dn=h.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,hn=h.ul`
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
`,Y=h.li`
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
`,Q=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,F=h.h2`
  font-size: 12px;
  line-height: 16px;
  color: ${a.white};

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 18px;
  }
`,K=h.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: ${a.white};


  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,pn=h.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,ln=h.div`
  width: 24px;
  height: 24px;
  background-color: ${a.beige};
  border-radius: 50%;
`,V=h.svg`
  width: 20px;
  height: 20px;
  fill: ${a.orangeSecond};
`,xn=h.svg`
  width: 24px;
  height: 24px;
`,fn=h.p`
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
`,gn=({userDiaryInformation:e,bmr:n})=>{const{burnedCalories:r,consumedCalories:i,remainingSports:s}=e,[o,x]=j.useState(!1),[c,p]=j.useState(!1),f=Math.round(i-r,0);return B(De),j.useEffect(()=>{x(f<0),p(s<0)},[f,s]),t.jsxs(dn,{children:[t.jsxs(hn,{children:[t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(V,{children:t.jsx("use",{href:`${v}#icon-fork-knife`})}),t.jsx(F,{children:"Daily calorie intake"})]}),t.jsx(K,{children:n||2200})]}),t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(V,{children:t.jsx("use",{href:v+"#icon-dumbbell"})}),t.jsx(F,{children:"Daily norm of sports"})]}),t.jsx(K,{children:"110 min"})]}),t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(V,{children:t.jsx("use",{href:v+"#icon-apple"})}),t.jsx(F,{children:"Calories consumed"})]}),t.jsx(K,{children:Math.round(i,0)||0})]}),t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(V,{children:t.jsx("use",{href:v+"#icon-fire"})}),t.jsx(F,{children:"Calories burned"})]}),t.jsx(K,{children:r||0})]}),t.jsxs(Y,{className:o?"greenBg":f<0?"redBg":"",children:[t.jsxs(Q,{children:[t.jsx(V,{children:t.jsx("use",{href:v+"#icon-bubble"})}),t.jsx(F,{children:"The rest of the calories"})]}),t.jsx(K,{children:f||n||0})]}),t.jsxs(Y,{className:c?"greenBg":"",children:[t.jsxs(Q,{children:[t.jsx(V,{children:t.jsx("use",{href:v+"#icon-running-figure"})}),t.jsx(F,{children:"The rest of sports"})]}),t.jsxs(K,{children:[s||110," min"]})]})]}),t.jsxs(pn,{children:[t.jsx(ln,{children:t.jsx(xn,{children:t.jsx("use",{href:v+"#icon-running-stick-figure-svgrepo-com-1"})})}),t.jsx(fn,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},wn=h.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,un=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,mn=h.div`
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
`,yn=h.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,bn=h.div`
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
`,ue=e=>{const n=new Date(e),r=String(n.getDate()).padStart(2,"0"),i=String(n.getMonth()+1).padStart(2,"0"),s=n.getFullYear();return`${r}-${i}-${s}`},kn=()=>{const[e,n]=j.useState(new Date),i=B(Ae).createdAt,s=be(),o=B(sn),x=B(rt),c=B(st);j.useEffect(()=>{try{(async()=>{const y=ue(e),b=await s(je(y));b.payload&&(l(b.payload),z(b.payload.products),m(b.payload.exercises))})()}catch(S){console.log(S),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}},[s,e]);const p=j.useMemo(()=>ue(e),[e]),f=j.useMemo(()=>ue(i),[i]),[d,l]=j.useState([]),[D,z]=j.useState([]),[k,m]=j.useState([]);return t.jsx(bn,{children:o||x?t.jsx(ot,{}):t.jsxs(wn,{children:[t.jsxs(un,{children:[t.jsx(dt,{title:"Diary "}),t.jsx(mt,{currentDate:e,setCurrentDate:n,userDateRegistration:f})]}),t.jsxs(yn,{children:[t.jsx(gn,{userDiaryInformation:d,bmr:c}),t.jsxs(mn,{children:[t.jsx(on,{productsArray:D,date:p}),t.jsx(cn,{exercisesArray:k,date:p})]})]})]})})};export{kn as default};
