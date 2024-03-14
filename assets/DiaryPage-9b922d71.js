import{u as d,h as a,r as v,j as t,s as k,i as tt,a as be,k as R,m as Te,n as Ie,L as Pe,o as rt,p as ee,q as nt,t as it,v as st,w as ot}from"./index-178afb3d.js";import{f as at,D as ct}from"./Datapicker-0a114f51.js";import{T as dt}from"./TitlePage-9e32ad7f.js";const ht=d.div`
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
`,mt=({currentDate:e,setCurrentDate:r,userDateRegistration:i})=>{const[n,s]=v.useState(e),[o,f]=v.useState(!1),l=()=>{f(!o)},h=()=>{const p=new Date(n);p.setDate(p.getDate()-1),r(p),s(p)},u=()=>{const p=new Date(n);p.setDate(p.getDate()+1),r(p),s(p)},c=()=>{f(!1)};return t.jsxs(ht,{children:[t.jsxs(ft,{onClick:l,children:[t.jsx(lt,{children:at(n,"dd/MM/yyyy")}),t.jsx(xt,{children:t.jsx("use",{href:`${k}#icon-calendar-orange`})})]}),t.jsx(gt,{type:"button",onClick:h,children:t.jsx(ut,{children:t.jsx("use",{href:`${k}#icon-chevron-left`})})}),t.jsx(pt,{type:"button",onClick:u,children:t.jsx(wt,{children:t.jsx("use",{href:`${k}#icon-chevron-right`})})}),t.jsx(ct,{selectedDate:n,setSelectedDate:s,isOpen:o,onClose:c,setCurrentDate:r,userDateRegistration:i})]})};function X(){return X=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},X.apply(this,arguments)}function yt(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function bt(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var jt=function(){function e(i){var n=this;this._insertTag=function(s){var o;n.tags.length===0?n.insertionPoint?o=n.insertionPoint.nextSibling:n.prepend?o=n.container.firstChild:o=n.before:o=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(s,o),n.tags.push(s)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(bt(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var o=yt(s);try{o.insertRule(n,o.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),A="-ms-",de="-moz-",w="-webkit-",Le="comm",je="rule",ve="decl",vt="@import",Me="@keyframes",$t="@layer",kt=Math.abs,fe=String.fromCharCode,St=Object.assign;function Dt(e,r){return C(e,0)^45?(((r<<2^C(e,0))<<2^C(e,1))<<2^C(e,2))<<2^C(e,3):0}function Oe(e){return e.trim()}function Ct(e,r){return(e=r.exec(e))?e[0]:e}function m(e,r,i){return e.replace(r,i)}function me(e,r){return e.indexOf(r)}function C(e,r){return e.charCodeAt(r)|0}function te(e,r,i){return e.slice(r,i)}function O(e){return e.length}function $e(e){return e.length}function se(e,r){return r.push(e),e}function Et(e,r){return e.map(r).join("")}var ge=1,Z=1,Re=0,T=0,S=0,G="";function ue(e,r,i,n,s,o,f){return{value:e,root:r,parent:i,type:n,props:s,children:o,line:ge,column:Z,length:f,return:""}}function J(e,r){return St(ue("",null,null,"",null,null,0),e,{length:-e.length},r)}function At(){return S}function zt(){return S=T>0?C(G,--T):0,Z--,S===10&&(Z=1,ge--),S}function I(){return S=T<Re?C(G,T++):0,Z++,S===10&&(Z=1,ge++),S}function B(){return C(G,T)}function oe(){return T}function ne(e,r){return te(G,e,r)}function re(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Be(e){return ge=Z=1,Re=O(G=e),T=0,[]}function Ne(e){return G="",e}function ae(e){return Oe(ne(T-1,ye(e===91?e+2:e===40?e+1:e)))}function Tt(e){for(;(S=B())&&S<33;)I();return re(e)>2||re(S)>3?"":" "}function It(e,r){for(;--r&&I()&&!(S<48||S>102||S>57&&S<65||S>70&&S<97););return ne(e,oe()+(r<6&&B()==32&&I()==32))}function ye(e){for(;I();)switch(S){case e:return T;case 34:case 39:e!==34&&e!==39&&ye(S);break;case 40:e===41&&ye(e);break;case 92:I();break}return T}function Pt(e,r){for(;I()&&e+S!==47+10;)if(e+S===42+42&&B()===47)break;return"/*"+ne(r,T-1)+"*"+fe(e===47?e:I())}function Lt(e){for(;!re(B());)I();return ne(e,T)}function Mt(e){return Ne(ce("",null,null,null,[""],e=Be(e),0,[0],e))}function ce(e,r,i,n,s,o,f,l,h){for(var u=0,c=0,p=f,D=0,x=0,b=0,g=1,y=1,$=1,E=0,L="",ie=s,N=o,M=n,j=L;y;)switch(b=E,E=I()){case 40:if(b!=108&&C(j,p-1)==58){me(j+=m(ae(E),"&","&\f"),"&\f")!=-1&&($=-1);break}case 34:case 39:case 91:j+=ae(E);break;case 9:case 10:case 13:case 32:j+=Tt(b);break;case 92:j+=It(oe()-1,7);continue;case 47:switch(B()){case 42:case 47:se(Ot(Pt(I(),oe()),r,i),h);break;default:j+="/"}break;case 123*g:l[u++]=O(j)*$;case 125*g:case 59:case 0:switch(E){case 0:case 125:y=0;case 59+c:$==-1&&(j=m(j,/\f/g,"")),x>0&&O(j)-p&&se(x>32?De(j+";",n,i,p-1):De(m(j," ","")+";",n,i,p-2),h);break;case 59:j+=";";default:if(se(M=Se(j,r,i,u,c,s,l,L,ie=[],N=[],p),o),E===123)if(c===0)ce(j,r,M,M,ie,o,p,l,N);else switch(D===99&&C(j,3)===110?100:D){case 100:case 108:case 109:case 115:ce(e,M,M,n&&se(Se(e,M,M,0,0,s,l,L,s,ie=[],p),N),s,N,p,l,n?ie:N);break;default:ce(j,M,M,M,[""],N,0,l,N)}}u=c=x=0,g=$=1,L=j="",p=f;break;case 58:p=1+O(j),x=b;default:if(g<1){if(E==123)--g;else if(E==125&&g++==0&&zt()==125)continue}switch(j+=fe(E),E*g){case 38:$=c>0?1:(j+="\f",-1);break;case 44:l[u++]=(O(j)-1)*$,$=1;break;case 64:B()===45&&(j+=ae(I())),D=B(),c=p=O(L=j+=Lt(oe())),E++;break;case 45:b===45&&O(j)==2&&(g=0)}}return o}function Se(e,r,i,n,s,o,f,l,h,u,c){for(var p=s-1,D=s===0?o:[""],x=$e(D),b=0,g=0,y=0;b<n;++b)for(var $=0,E=te(e,p+1,p=kt(g=f[b])),L=e;$<x;++$)(L=Oe(g>0?D[$]+" "+E:m(E,/&\f/g,D[$])))&&(h[y++]=L);return ue(e,r,i,s===0?je:l,h,u,c)}function Ot(e,r,i){return ue(e,r,i,Le,fe(At()),te(e,2,-2),0)}function De(e,r,i,n){return ue(e,r,i,ve,te(e,0,n),te(e,n+1,-1),n)}function V(e,r){for(var i="",n=$e(e),s=0;s<n;s++)i+=r(e[s],s,e,r)||"";return i}function Rt(e,r,i,n){switch(e.type){case $t:if(e.children.length)break;case vt:case ve:return e.return=e.return||e.value;case Le:return"";case Me:return e.return=e.value+"{"+V(e.children,n)+"}";case je:e.value=e.props.join(",")}return O(i=V(e.children,n))?e.return=e.value+"{"+i+"}":""}function Bt(e){var r=$e(e);return function(i,n,s,o){for(var f="",l=0;l<r;l++)f+=e[l](i,n,s,o)||"";return f}}function Nt(e){return function(r){r.root||(r=r.return)&&e(r)}}var _t=function(r,i,n){for(var s=0,o=0;s=o,o=B(),s===38&&o===12&&(i[n]=1),!re(o);)I();return ne(r,T)},Wt=function(r,i){var n=-1,s=44;do switch(re(s)){case 0:s===38&&B()===12&&(i[n]=1),r[n]+=_t(T-1,i,n);break;case 2:r[n]+=ae(s);break;case 4:if(s===44){r[++n]=B()===58?"&\f":"",i[n]=r[n].length;break}default:r[n]+=fe(s)}while(s=I());return r},Ht=function(r,i){return Ne(Wt(Be(r),i))},Ce=new WeakMap,Ut=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var i=r.value,n=r.parent,s=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&i.charCodeAt(0)!==58&&!Ce.get(n))&&!s){Ce.set(r,!0);for(var o=[],f=Ht(i,o),l=n.props,h=0,u=0;h<f.length;h++)for(var c=0;c<l.length;c++,u++)r.props[u]=o[h]?f[h].replace(/&\f/g,l[c]):l[c]+" "+f[h]}}},Yt=function(r){if(r.type==="decl"){var i=r.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(r.return="",r.value="")}};function _e(e,r){switch(Dt(e,r)){case 5103:return w+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return w+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return w+e+de+e+A+e+e;case 6828:case 4268:return w+e+A+e+e;case 6165:return w+e+A+"flex-"+e+e;case 5187:return w+e+m(e,/(\w+).+(:[^]+)/,w+"box-$1$2"+A+"flex-$1$2")+e;case 5443:return w+e+A+"flex-item-"+m(e,/flex-|-self/,"")+e;case 4675:return w+e+A+"flex-line-pack"+m(e,/align-content|flex-|-self/,"")+e;case 5548:return w+e+A+m(e,"shrink","negative")+e;case 5292:return w+e+A+m(e,"basis","preferred-size")+e;case 6060:return w+"box-"+m(e,"-grow","")+w+e+A+m(e,"grow","positive")+e;case 4554:return w+m(e,/([^-])(transform)/g,"$1"+w+"$2")+e;case 6187:return m(m(m(e,/(zoom-|grab)/,w+"$1"),/(image-set)/,w+"$1"),e,"")+e;case 5495:case 3959:return m(e,/(image-set\([^]*)/,w+"$1$`$1");case 4968:return m(m(e,/(.+:)(flex-)?(.*)/,w+"box-pack:$3"+A+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+w+e+e;case 4095:case 3583:case 4068:case 2532:return m(e,/(.+)-inline(.+)/,w+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(e)-1-r>6)switch(C(e,r+1)){case 109:if(C(e,r+4)!==45)break;case 102:return m(e,/(.+:)(.+)-([^]+)/,"$1"+w+"$2-$3$1"+de+(C(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~me(e,"stretch")?_e(m(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(C(e,r+1)!==115)break;case 6444:switch(C(e,O(e)-3-(~me(e,"!important")&&10))){case 107:return m(e,":",":"+w)+e;case 101:return m(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+w+(C(e,14)===45?"inline-":"")+"box$3$1"+w+"$2$3$1"+A+"$2box$3")+e}break;case 5936:switch(C(e,r+11)){case 114:return w+e+A+m(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return w+e+A+m(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return w+e+A+m(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return w+e+A+e+e}return e}var Qt=function(r,i,n,s){if(r.length>-1&&!r.return)switch(r.type){case ve:r.return=_e(r.value,r.length);break;case Me:return V([J(r,{value:m(r.value,"@","@"+w)})],s);case je:if(r.length)return Et(r.props,function(o){switch(Ct(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return V([J(r,{props:[m(o,/:(read-\w+)/,":"+de+"$1")]})],s);case"::placeholder":return V([J(r,{props:[m(o,/:(plac\w+)/,":"+w+"input-$1")]}),J(r,{props:[m(o,/:(plac\w+)/,":"+de+"$1")]}),J(r,{props:[m(o,/:(plac\w+)/,A+"input-$1")]})],s)}return""})}},Ft=[Qt],qt=function(r){var i=r.key;if(i==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(g){var y=g.getAttribute("data-emotion");y.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var s=r.stylisPlugins||Ft,o={},f,l=[];f=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(g){for(var y=g.getAttribute("data-emotion").split(" "),$=1;$<y.length;$++)o[y[$]]=!0;l.push(g)});var h,u=[Ut,Yt];{var c,p=[Rt,Nt(function(g){c.insert(g)})],D=Bt(u.concat(s,p)),x=function(y){return V(Mt(y),D)};h=function(y,$,E,L){c=E,x(y?y+"{"+$.styles+"}":$.styles),L&&(b.inserted[$.name]=!0)}}var b={key:i,sheet:new jt({key:i,container:f,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:o,registered:{},insert:h};return b.sheet.hydrate(l),b},Kt=v.createContext(typeof HTMLElement<"u"?qt({key:"css"}):null);Kt.Provider;var Vt=v.createContext({});function Zt(e){return Object.keys(e).length===0}function Gt(e=null){const r=v.useContext(Vt);return!r||Zt(r)?e:r}function We(e,r){const i=X({},r);return Object.keys(e).forEach(n=>{if(n.toString().match(/^(components|slots)$/))i[n]=X({},e[n],i[n]);else if(n.toString().match(/^(componentsProps|slotProps)$/)){const s=e[n]||{},o=r[n];i[n]={},!o||!Object.keys(o)?i[n]=s:!s||!Object.keys(s)?i[n]=o:(i[n]=X({},o),Object.keys(s).forEach(f=>{i[n][f]=We(s[f],o[f])}))}else i[n]===void 0&&(i[n]=e[n])}),i}function Jt(e){const{theme:r,name:i,props:n}=e;return!r||!r.components||!r.components[i]||!r.components[i].defaultProps?n:We(r.components[i].defaultProps,n)}const Xt=typeof window<"u"?v.useLayoutEffect:v.useEffect,er=Xt;function tr(e,r,i,n,s){const[o,f]=v.useState(()=>s&&i?i(e).matches:n?n(e).matches:r);return er(()=>{let l=!0;if(!i)return;const h=i(e),u=()=>{l&&f(h.matches)};return u(),h.addListener(u),()=>{l=!1,h.removeListener(u)}},[e,i]),o}const He=tt["useSyncExternalStore"];function rr(e,r,i,n,s){const o=v.useCallback(()=>r,[r]),f=v.useMemo(()=>{if(s&&i)return()=>i(e).matches;if(n!==null){const{matches:c}=n(e);return()=>c}return o},[o,e,n,s,i]),[l,h]=v.useMemo(()=>{if(i===null)return[o,()=>()=>{}];const c=i(e);return[()=>c.matches,p=>(c.addListener(p),()=>{c.removeListener(p)})]},[o,i,e]);return He(h,l,f)}function Ue(e,r={}){const i=Gt(),n=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:s=!1,matchMedia:o=n?window.matchMedia:null,ssrMatchMedia:f=null,noSsr:l=!1}=Jt({name:"MuiUseMediaQuery",props:r,theme:i});let h=typeof e=="function"?e(i):e;return h=h.replace(/^@media( ?)/m,""),(He!==void 0?rr:tr)(h,s,o,f,l)}const Ye=d.div`
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
`,Ve=d.p`
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
`,nr=d.ul`
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
`,Ze=d.div`
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

`,Ae=d.span`
  @media screen and (min-width: 320px) {
    color: ${a.white};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,ir=e=>e.diary.isLoading,ke=e=>e.diary.error,sr=({productsArray:e,date:r})=>{const i=be(),s=R(Te).blood,o=R(ke),f=Ue("(max-width:768px)"),[l,h]=v.useState([]),u=R(x=>x.diary.isLoading);v.useEffect(()=>{h(e)},[e]);const c=x=>typeof x!="string"||x.length===0?"":x[0].toUpperCase()+x.slice(1).toLowerCase();let p;const D=async x=>{try{if((await i(rt(x))).meta.requestStatus==="fulfilled"){const g=l.filter(y=>y._id!==x);h(g)}ee.Notify.success("Product deleted successfully!",{theme:"light"})}catch(b){console.log(b),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return t.jsxs(Ye,{children:[t.jsxs(Qe,{children:[t.jsx(Fe,{children:"Products"}),t.jsx(qe,{children:t.jsxs(Ie,{to:"/products",style:{display:"flex",alignItems:"center"},children:[t.jsx(Ke,{children:"Add product"}),t.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:a.orange},children:t.jsx("use",{href:k+"#icon-arrow-right"})})]})})]}),u?t.jsx(Pe,{}):l&&l.length>0&&!o?f?t.jsx(he,{children:t.jsx(pe,{children:l.map(x=>{var g,y;const b=x.productID.groupBloodNotAllowed[s]?"Yes":"No";return t.jsxs(Ee,{children:[t.jsx(P,{children:"Title"}),t.jsx(P,{children:c((g=x.productID)==null?void 0:g.title)}),t.jsx(P,{children:"Category"}),t.jsx(P,{children:c((y=x.productID)==null?void 0:y.category)}),t.jsxs(Ze,{children:[t.jsxs(Ge,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:"Calories"}),t.jsx(P,{children:x.calories})]}),t.jsxs(Je,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:"Weight"}),t.jsx(P,{children:x.amount})]}),t.jsxs(Xe,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:"Recommend"}),t.jsx(P,{children:t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[t.jsx("svg",{style:{width:"14px",height:"14px"},children:b==="Yes"?t.jsx("use",{href:k+"#icon-bubble",style:{fill:`${a.green}`,stroke:a.green}}):t.jsx("use",{href:k+"#icon-bubble",style:{fill:a.red,stroke:a.red}})}),t.jsx(Ae,{children:p})]})})]}),t.jsxs(et,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:""}),t.jsx(P,{children:t.jsx(le,{type:"button",onClick:()=>D(x._id),children:t.jsx(xe,{children:t.jsx("use",{href:k+"#icon-trash"})})})})]})]})]},x._id)})})}):t.jsxs(he,{children:[t.jsxs(nr,{children:[t.jsx(H,{children:"Title"}),t.jsx(H,{children:"Category"}),t.jsx(H,{children:"Calories"}),t.jsx(H,{children:"Weight"}),t.jsx(H,{children:"Recommend"}),t.jsx(H,{children:""})]}),t.jsx(pe,{children:l.map(x=>{var g,y,$;const b=(g=x.productID)!=null&&g.groupBloodNotAllowed[s]?p="Yes":p="No";return t.jsxs(Ee,{children:[t.jsx(U,{children:c((y=x.productID)==null?void 0:y.title)}),t.jsx(U,{children:c(($=x.productID)==null?void 0:$.category)}),t.jsx(U,{children:x.calories}),t.jsx(U,{children:x.amount}),t.jsx(U,{children:t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[t.jsx("svg",{style:{width:"14px",height:"14px"},children:b==="Yes"?t.jsx("use",{href:k+"#icon-bubble",style:{fill:a.green,stroke:a.green}}):t.jsx("use",{href:k+"#icon-bubble",style:{fill:a.red,stroke:a.red}})}),t.jsx(Ae,{children:p})]})}),t.jsx(U,{children:t.jsx(le,{type:"button",onClick:()=>D(x._id),children:t.jsx(xe,{children:t.jsx("use",{href:k+"#icon-trash"})})})})]},x._id)})})]}):t.jsx(Ve,{children:"Not found products"})]})},or=d.ul`
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

`;const ar=({exercisesArray:e,date:r})=>{const i=Ue("(max-width:768px)"),n=R(ke),s=be(),[o,f]=v.useState([]),l=R(c=>c.diary.isLoading);v.useEffect(()=>{f(e)},[e]);const h=c=>c.charAt(0).toUpperCase()+c.slice(1).toLowerCase(),u=async c=>{try{if((await s(nt(c))).meta.requestStatus==="fulfilled"){const D=o.filter(x=>x._id!==c);f(D)}ee.Notify.success("Exercise deleted successfully!",{theme:"light"})}catch(p){console.log(p),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return t.jsxs(Ye,{children:[t.jsxs(Qe,{children:[t.jsx(Fe,{children:"Exercises"}),t.jsx(qe,{children:t.jsxs(Ie,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[t.jsx(Ke,{children:"Add exercises"}),t.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:a.orange},children:t.jsx("use",{href:k+"#icon-arrow-right"})})]})})]}),l?t.jsx(Pe,{}):o&&o.length>0&&!n?i?t.jsx(he,{children:t.jsx(pe,{children:o.map(c=>{var p,D,x,b;return t.jsxs(ze,{children:[t.jsx(z,{children:"Body Part"}),t.jsx(z,{children:h((p=c.exerciseID)==null?void 0:p.bodyPart)}),t.jsx(z,{children:"Equipment"}),t.jsx(z,{children:h((D=c.exerciseID)==null?void 0:D.equipment)}),t.jsx(z,{children:"Name"}),t.jsx(z,{children:h((x=c.exerciseID)==null?void 0:x.name)}),t.jsxs(Ze,{children:[t.jsxs(Ge,{children:[t.jsx(z,{children:"Target"}),t.jsx(z,{children:h((b=c.exerciseID)==null?void 0:b.target)})]}),t.jsxs(Je,{children:[t.jsx(z,{children:"Burned Calories"}),t.jsx(z,{children:c.calories})]}),t.jsxs(Xe,{children:[t.jsx(z,{children:"Time"}),t.jsx(z,{children:c.time})]}),t.jsxs(et,{children:[t.jsx(z,{children:""}),t.jsx(z,{children:t.jsx(le,{type:"button",onClick:()=>u(c._id),children:t.jsx(xe,{children:t.jsx("use",{href:k+"#icon-trash"})})})})]})]})]},c._id)})})}):t.jsxs(he,{children:[t.jsxs(or,{children:[t.jsx(_,{children:"Body Part"}),t.jsx(_,{children:"Equipment"}),t.jsx(_,{children:"Name"}),t.jsx(_,{children:"Target"}),t.jsx(_,{children:"Burned Calories"}),t.jsx(_,{children:"Time"}),t.jsx(_,{children:""})]}),t.jsx(pe,{children:o.map(c=>t.jsxs(ze,{children:[t.jsx(W,{children:h(c.exerciseID.bodyPart)}),t.jsx(W,{children:h(c.exerciseID.equipment)}),t.jsx(W,{children:h(c.exerciseID.name)}),t.jsx(W,{children:h(c.exerciseID.target)}),t.jsx(W,{children:c.calories}),t.jsx(W,{children:c.time}),t.jsx(W,{children:t.jsx(le,{type:"button",onClick:()=>u(c._id),children:t.jsx(xe,{children:t.jsx("use",{href:k+"#icon-trash"})})})})]},c._id))})]}):t.jsx(Ve,{children:"Not found exercises"})]})},cr=d.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,dr=d.ul`
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
`,hr=d.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,pr=d.div`
  width: 24px;
  height: 24px;
  background-color: ${a.beige};
  border-radius: 50%;
`,K=d.svg`
  width: 20px;
  height: 20px;
  fill: ${a.orangeSecond};
`,lr=d.svg`
  width: 24px;
  height: 24px;
`,xr=d.p`
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
`,fr=({userDiaryInformation:e,bmr:r})=>{const{burnedCalories:i,consumedCalories:n,remainingSports:s}=e,[o,f]=v.useState(!1),[l,h]=v.useState(!1),u=Math.round(n-i,0);return R(ke),v.useEffect(()=>{f(u<0),h(s<0)},[u,s]),t.jsxs(cr,{children:[t.jsxs(dr,{children:[t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:`${k}#icon-fork-knife`})}),t.jsx(F,{children:"Daily calorie intake"})]}),t.jsx(q,{children:r||2200})]}),t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:k+"#icon-dumbbell"})}),t.jsx(F,{children:"Daily norm of sports"})]}),t.jsx(q,{children:"110 min"})]}),t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:k+"#icon-apple"})}),t.jsx(F,{children:"Calories consumed"})]}),t.jsx(q,{children:Math.round(n,0)||0})]}),t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:k+"#icon-fire"})}),t.jsx(F,{children:"Calories burned"})]}),t.jsx(q,{children:i||0})]}),t.jsxs(Y,{className:o?"greenBg":u<0?"redBg":"",children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:k+"#icon-bubble"})}),t.jsx(F,{children:"The rest of the calories"})]}),t.jsx(q,{children:u||r||0})]}),t.jsxs(Y,{className:l?"greenBg":"",children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:k+"#icon-running-figure"})}),t.jsx(F,{children:"The rest of sports"})]}),t.jsxs(q,{children:[s||110," min"]})]})]}),t.jsxs(hr,{children:[t.jsx(pr,{children:t.jsx(lr,{children:t.jsx("use",{href:k+"#icon-running-stick-figure-svgrepo-com-1"})})}),t.jsx(xr,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},gr=d.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,ur=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,wr=d.div`
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
`,mr=d.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,yr=d.div`
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
`,we=e=>{const r=new Date(e),i=String(r.getDate()).padStart(2,"0"),n=String(r.getMonth()+1).padStart(2,"0"),s=r.getFullYear();return`${i}-${n}-${s}`},$r=()=>{const[e,r]=v.useState(new Date),n=R(Te).createdAt,s=be();R(ir),R(it);const o=R(st);v.useEffect(()=>{try{(async()=>{const g=we(e),y=await s(ot(g));y.payload&&(u(y.payload),p(y.payload.products),x(y.payload.exercises))})()}catch(b){console.log(b),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}},[s,e]);const f=v.useMemo(()=>we(e),[e]),l=v.useMemo(()=>we(n),[n]),[h,u]=v.useState([]),[c,p]=v.useState([]),[D,x]=v.useState([]);return t.jsx(yr,{children:t.jsxs(gr,{children:[t.jsxs(ur,{children:[t.jsx(dt,{title:"Diary "}),t.jsx(mt,{currentDate:e,setCurrentDate:r,userDateRegistration:l})]}),t.jsxs(mr,{children:[t.jsx(fr,{userDiaryInformation:h,bmr:o}),t.jsxs(wr,{children:[t.jsx(sr,{productsArray:c,date:f}),t.jsx(ar,{exercisesArray:D,date:f})]})]})]})})};export{$r as default};
