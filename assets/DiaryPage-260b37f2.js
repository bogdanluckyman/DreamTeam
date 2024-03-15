import{u as h,h as a,r as $,j as t,s as S,i as tt,a as ye,k as B,m as Ie,n as nt,L as Pe,o as rt,p as be,q as ee,t as it,v as st,w as ot}from"./index-b03e6dcd.js";import{D as at}from"./Datapicker-4d0ab89c.js";import{T as ct}from"./TitlePage-3d56373a.js";const dt=h.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-bottom: 24px; */

  @media screen and (max-width: 768px) {
    margin-bottom: -10px;
  }
`,ht=h.button`
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
`;h.p`
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
`;const pt=h.svg`
  width: 20px;
  height: 20px;
  stroke: ${a.orange};

  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,lt=h.div`
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
`,xt=h.button`
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
`,ft=h.svg`
  width: 100%;
  height: 100%;
  fill: ${a.white};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,gt=h.svg`
  width: 100%;
  height: 100%;
  fill: ${a.white};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`,ut=({currentDate:e,setCurrentDate:n,userDateRegistration:i})=>{const[r,s]=$.useState(e),[o,f]=$.useState(!1),p=()=>{const d=new Date(r);d.setDate(d.getDate()-1),n(d),s(d)},l=()=>{const d=new Date(r);d.setDate(d.getDate()+1),n(d),s(d)},u=()=>{f(!1)},c=d=>{s(d),n(d),f(!1)};return t.jsxs(dt,{children:[t.jsxs(lt,{children:[t.jsx(at,{selectedDate:r,setSelectedDate:c,isOpen:o,onClose:u,setCurrentDate:n,userDateRegistration:i}),t.jsx(pt,{children:t.jsx("use",{href:`${S}#icon-calendar-orange`})})]}),t.jsx(xt,{type:"button",onClick:p,children:t.jsx(ft,{children:t.jsx("use",{href:`${S}#icon-chevron-left`})})}),t.jsx(ht,{type:"button",onClick:l,children:t.jsx(gt,{children:t.jsx("use",{href:`${S}#icon-chevron-right`})})})]})};function X(){return X=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},X.apply(this,arguments)}function wt(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}function mt(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),e.nonce!==void 0&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}var yt=function(){function e(i){var r=this;this._insertTag=function(s){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(s,o),r.tags.push(s)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var n=e.prototype;return n.hydrate=function(r){r.forEach(this._insertTag)},n.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(mt(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var o=wt(s);try{o.insertRule(r,o.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(r));this.ctr++},n.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),A="-ms-",de="-moz-",w="-webkit-",Le="comm",je="rule",ve="decl",bt="@import",Me="@keyframes",jt="@layer",vt=Math.abs,fe=String.fromCharCode,$t=Object.assign;function kt(e,n){return C(e,0)^45?(((n<<2^C(e,0))<<2^C(e,1))<<2^C(e,2))<<2^C(e,3):0}function Oe(e){return e.trim()}function St(e,n){return(e=n.exec(e))?e[0]:e}function m(e,n,i){return e.replace(n,i)}function we(e,n){return e.indexOf(n)}function C(e,n){return e.charCodeAt(n)|0}function te(e,n,i){return e.slice(n,i)}function O(e){return e.length}function $e(e){return e.length}function se(e,n){return n.push(e),e}function Dt(e,n){return e.map(n).join("")}var ge=1,Z=1,Re=0,z=0,D=0,G="";function ue(e,n,i,r,s,o,f){return{value:e,root:n,parent:i,type:r,props:s,children:o,line:ge,column:Z,length:f,return:""}}function J(e,n){return $t(ue("",null,null,"",null,null,0),e,{length:-e.length},n)}function Ct(){return D}function Et(){return D=z>0?C(G,--z):0,Z--,D===10&&(Z=1,ge--),D}function I(){return D=z<Re?C(G,z++):0,Z++,D===10&&(Z=1,ge++),D}function R(){return C(G,z)}function oe(){return z}function re(e,n){return te(G,e,n)}function ne(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Be(e){return ge=Z=1,Re=O(G=e),z=0,[]}function Ne(e){return G="",e}function ae(e){return Oe(re(z-1,me(e===91?e+2:e===40?e+1:e)))}function At(e){for(;(D=R())&&D<33;)I();return ne(e)>2||ne(D)>3?"":" "}function Tt(e,n){for(;--n&&I()&&!(D<48||D>102||D>57&&D<65||D>70&&D<97););return re(e,oe()+(n<6&&R()==32&&I()==32))}function me(e){for(;I();)switch(D){case e:return z;case 34:case 39:e!==34&&e!==39&&me(D);break;case 40:e===41&&me(e);break;case 92:I();break}return z}function zt(e,n){for(;I()&&e+D!==47+10;)if(e+D===42+42&&R()===47)break;return"/*"+re(n,z-1)+"*"+fe(e===47?e:I())}function It(e){for(;!ne(R());)I();return re(e,z)}function Pt(e){return Ne(ce("",null,null,null,[""],e=Be(e),0,[0],e))}function ce(e,n,i,r,s,o,f,p,l){for(var u=0,c=0,d=f,k=0,x=0,y=0,g=1,j=1,b=1,E=0,L="",ie=s,N=o,M=r,v=L;j;)switch(y=E,E=I()){case 40:if(y!=108&&C(v,d-1)==58){we(v+=m(ae(E),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:v+=ae(E);break;case 9:case 10:case 13:case 32:v+=At(y);break;case 92:v+=Tt(oe()-1,7);continue;case 47:switch(R()){case 42:case 47:se(Lt(zt(I(),oe()),n,i),l);break;default:v+="/"}break;case 123*g:p[u++]=O(v)*b;case 125*g:case 59:case 0:switch(E){case 0:case 125:j=0;case 59+c:b==-1&&(v=m(v,/\f/g,"")),x>0&&O(v)-d&&se(x>32?De(v+";",r,i,d-1):De(m(v," ","")+";",r,i,d-2),l);break;case 59:v+=";";default:if(se(M=Se(v,n,i,u,c,s,p,L,ie=[],N=[],d),o),E===123)if(c===0)ce(v,n,M,M,ie,o,d,p,N);else switch(k===99&&C(v,3)===110?100:k){case 100:case 108:case 109:case 115:ce(e,M,M,r&&se(Se(e,M,M,0,0,s,p,L,s,ie=[],d),N),s,N,d,p,r?ie:N);break;default:ce(v,M,M,M,[""],N,0,p,N)}}u=c=x=0,g=b=1,L=v="",d=f;break;case 58:d=1+O(v),x=y;default:if(g<1){if(E==123)--g;else if(E==125&&g++==0&&Et()==125)continue}switch(v+=fe(E),E*g){case 38:b=c>0?1:(v+="\f",-1);break;case 44:p[u++]=(O(v)-1)*b,b=1;break;case 64:R()===45&&(v+=ae(I())),k=R(),c=d=O(L=v+=It(oe())),E++;break;case 45:y===45&&O(v)==2&&(g=0)}}return o}function Se(e,n,i,r,s,o,f,p,l,u,c){for(var d=s-1,k=s===0?o:[""],x=$e(k),y=0,g=0,j=0;y<r;++y)for(var b=0,E=te(e,d+1,d=vt(g=f[y])),L=e;b<x;++b)(L=Oe(g>0?k[b]+" "+E:m(E,/&\f/g,k[b])))&&(l[j++]=L);return ue(e,n,i,s===0?je:p,l,u,c)}function Lt(e,n,i){return ue(e,n,i,Le,fe(Ct()),te(e,2,-2),0)}function De(e,n,i,r){return ue(e,n,i,ve,te(e,0,r),te(e,r+1,-1),r)}function V(e,n){for(var i="",r=$e(e),s=0;s<r;s++)i+=n(e[s],s,e,n)||"";return i}function Mt(e,n,i,r){switch(e.type){case jt:if(e.children.length)break;case bt:case ve:return e.return=e.return||e.value;case Le:return"";case Me:return e.return=e.value+"{"+V(e.children,r)+"}";case je:e.value=e.props.join(",")}return O(i=V(e.children,r))?e.return=e.value+"{"+i+"}":""}function Ot(e){var n=$e(e);return function(i,r,s,o){for(var f="",p=0;p<n;p++)f+=e[p](i,r,s,o)||"";return f}}function Rt(e){return function(n){n.root||(n=n.return)&&e(n)}}var Bt=function(n,i,r){for(var s=0,o=0;s=o,o=R(),s===38&&o===12&&(i[r]=1),!ne(o);)I();return re(n,z)},Nt=function(n,i){var r=-1,s=44;do switch(ne(s)){case 0:s===38&&R()===12&&(i[r]=1),n[r]+=Bt(z-1,i,r);break;case 2:n[r]+=ae(s);break;case 4:if(s===44){n[++r]=R()===58?"&\f":"",i[r]=n[r].length;break}default:n[r]+=fe(s)}while(s=I());return n},_t=function(n,i){return Ne(Nt(Be(n),i))},Ce=new WeakMap,Wt=function(n){if(!(n.type!=="rule"||!n.parent||n.length<1)){for(var i=n.value,r=n.parent,s=n.column===r.column&&n.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(n.props.length===1&&i.charCodeAt(0)!==58&&!Ce.get(r))&&!s){Ce.set(n,!0);for(var o=[],f=_t(i,o),p=r.props,l=0,u=0;l<f.length;l++)for(var c=0;c<p.length;c++,u++)n.props[u]=o[l]?f[l].replace(/&\f/g,p[c]):p[c]+" "+f[l]}}},Ht=function(n){if(n.type==="decl"){var i=n.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(n.return="",n.value="")}};function _e(e,n){switch(kt(e,n)){case 5103:return w+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return w+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return w+e+de+e+A+e+e;case 6828:case 4268:return w+e+A+e+e;case 6165:return w+e+A+"flex-"+e+e;case 5187:return w+e+m(e,/(\w+).+(:[^]+)/,w+"box-$1$2"+A+"flex-$1$2")+e;case 5443:return w+e+A+"flex-item-"+m(e,/flex-|-self/,"")+e;case 4675:return w+e+A+"flex-line-pack"+m(e,/align-content|flex-|-self/,"")+e;case 5548:return w+e+A+m(e,"shrink","negative")+e;case 5292:return w+e+A+m(e,"basis","preferred-size")+e;case 6060:return w+"box-"+m(e,"-grow","")+w+e+A+m(e,"grow","positive")+e;case 4554:return w+m(e,/([^-])(transform)/g,"$1"+w+"$2")+e;case 6187:return m(m(m(e,/(zoom-|grab)/,w+"$1"),/(image-set)/,w+"$1"),e,"")+e;case 5495:case 3959:return m(e,/(image-set\([^]*)/,w+"$1$`$1");case 4968:return m(m(e,/(.+:)(flex-)?(.*)/,w+"box-pack:$3"+A+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+w+e+e;case 4095:case 3583:case 4068:case 2532:return m(e,/(.+)-inline(.+)/,w+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(e)-1-n>6)switch(C(e,n+1)){case 109:if(C(e,n+4)!==45)break;case 102:return m(e,/(.+:)(.+)-([^]+)/,"$1"+w+"$2-$3$1"+de+(C(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~we(e,"stretch")?_e(m(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(C(e,n+1)!==115)break;case 6444:switch(C(e,O(e)-3-(~we(e,"!important")&&10))){case 107:return m(e,":",":"+w)+e;case 101:return m(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+w+(C(e,14)===45?"inline-":"")+"box$3$1"+w+"$2$3$1"+A+"$2box$3")+e}break;case 5936:switch(C(e,n+11)){case 114:return w+e+A+m(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return w+e+A+m(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return w+e+A+m(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return w+e+A+e+e}return e}var Ut=function(n,i,r,s){if(n.length>-1&&!n.return)switch(n.type){case ve:n.return=_e(n.value,n.length);break;case Me:return V([J(n,{value:m(n.value,"@","@"+w)})],s);case je:if(n.length)return Dt(n.props,function(o){switch(St(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return V([J(n,{props:[m(o,/:(read-\w+)/,":"+de+"$1")]})],s);case"::placeholder":return V([J(n,{props:[m(o,/:(plac\w+)/,":"+w+"input-$1")]}),J(n,{props:[m(o,/:(plac\w+)/,":"+de+"$1")]}),J(n,{props:[m(o,/:(plac\w+)/,A+"input-$1")]})],s)}return""})}},Yt=[Ut],Qt=function(n){var i=n.key;if(i==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var j=g.getAttribute("data-emotion");j.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var s=n.stylisPlugins||Yt,o={},f,p=[];f=n.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(g){for(var j=g.getAttribute("data-emotion").split(" "),b=1;b<j.length;b++)o[j[b]]=!0;p.push(g)});var l,u=[Wt,Ht];{var c,d=[Mt,Rt(function(g){c.insert(g)})],k=Ot(u.concat(s,d)),x=function(j){return V(Pt(j),k)};l=function(j,b,E,L){c=E,x(j?j+"{"+b.styles+"}":b.styles),L&&(y.inserted[b.name]=!0)}}var y={key:i,sheet:new yt({key:i,container:f,nonce:n.nonce,speedy:n.speedy,prepend:n.prepend,insertionPoint:n.insertionPoint}),nonce:n.nonce,inserted:o,registered:{},insert:l};return y.sheet.hydrate(p),y},Ft=$.createContext(typeof HTMLElement<"u"?Qt({key:"css"}):null);Ft.Provider;var qt=$.createContext({});function Kt(e){return Object.keys(e).length===0}function Vt(e=null){const n=$.useContext(qt);return!n||Kt(n)?e:n}function We(e,n){const i=X({},n);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))i[r]=X({},e[r],i[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const s=e[r]||{},o=n[r];i[r]={},!o||!Object.keys(o)?i[r]=s:!s||!Object.keys(s)?i[r]=o:(i[r]=X({},o),Object.keys(s).forEach(f=>{i[r][f]=We(s[f],o[f])}))}else i[r]===void 0&&(i[r]=e[r])}),i}function Zt(e){const{theme:n,name:i,props:r}=e;return!n||!n.components||!n.components[i]||!n.components[i].defaultProps?r:We(n.components[i].defaultProps,r)}const Gt=typeof window<"u"?$.useLayoutEffect:$.useEffect,Jt=Gt;function Xt(e,n,i,r,s){const[o,f]=$.useState(()=>s&&i?i(e).matches:r?r(e).matches:n);return Jt(()=>{let p=!0;if(!i)return;const l=i(e),u=()=>{p&&f(l.matches)};return u(),l.addListener(u),()=>{p=!1,l.removeListener(u)}},[e,i]),o}const He=tt["useSyncExternalStore"];function en(e,n,i,r,s){const o=$.useCallback(()=>n,[n]),f=$.useMemo(()=>{if(s&&i)return()=>i(e).matches;if(r!==null){const{matches:c}=r(e);return()=>c}return o},[o,e,r,s,i]),[p,l]=$.useMemo(()=>{if(i===null)return[o,()=>()=>{}];const c=i(e);return[()=>c.matches,d=>(c.addListener(d),()=>{c.removeListener(d)})]},[o,i,e]);return He(l,p,f)}function Ue(e,n={}){const i=Vt(),r=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:s=!1,matchMedia:o=r?window.matchMedia:null,ssrMatchMedia:f=null,noSsr:p=!1}=Zt({name:"MuiUseMediaQuery",props:n,theme:i});let l=typeof e=="function"?e(i):e;return l=l.replace(/^@media( ?)/m,""),(He!==void 0?en:Xt)(l,s,o,f,p)}const Ye=h.div`
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
`,qe=h.div`
  &:hover span {
    color: ${a.orange};
  }
`,Ke=h.span`
color: ${a.orange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Ve=h.p`
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
`,tn=h.ul`
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
`,Ze=h.div`
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

`,Ae=h.span`
  @media screen and (min-width: 320px) {
    color: ${a.white};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,ke=e=>e.diary.error,nn=({productsArray:e,date:n})=>{const i=ye(),s=B(Ie).blood,o=B(ke),f=Ue("(max-width:768px)"),[p,l]=$.useState([]),u=B(x=>x.diary.isLoading);$.useEffect(()=>{l(e)},[e]);const c=x=>typeof x!="string"||x.length===0?"":x[0].toUpperCase()+x.slice(1).toLowerCase();let d;const k=async x=>{try{if((await i(rt(x))).meta.requestStatus==="fulfilled"){const g=p.filter(j=>j._id!==x);l(g),await i(be(n))}ee.Notify.success("Product deleted successfully!",{theme:"light"})}catch(y){console.log(y),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return t.jsxs(Ye,{children:[t.jsxs(Qe,{children:[t.jsx(Fe,{children:"Products"}),t.jsx(qe,{children:t.jsxs(nt,{to:{pathname:"/products",search:`?date=${n}`},style:{display:"flex",alignItems:"center"},children:[t.jsx(Ke,{children:"Add product"}),t.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:a.orange},children:t.jsx("use",{href:S+"#icon-arrow-right"})})]})})]}),u?t.jsx(Pe,{}):p&&p.length>0&&!o?f?t.jsx(he,{children:t.jsx(pe,{children:p.map(x=>{var g,j;const y=x.productID.groupBloodNotAllowed[s]?"Yes":"No";return t.jsxs(Ee,{children:[t.jsx(P,{children:"Title"}),t.jsx(P,{children:c((g=x.productID)==null?void 0:g.title)}),t.jsx(P,{children:"Category"}),t.jsx(P,{children:c((j=x.productID)==null?void 0:j.category)}),t.jsxs(Ze,{children:[t.jsxs(Ge,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:"Calories"}),t.jsx(P,{children:x.calories})]}),t.jsxs(Je,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:"Weight"}),t.jsx(P,{children:x.amount})]}),t.jsxs(Xe,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:"Recommend"}),t.jsx(P,{children:t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[t.jsx("svg",{style:{width:"14px",height:"14px"},children:y==="Yes"?t.jsx("use",{href:S+"#icon-bubble",style:{fill:`${a.green}`,stroke:a.green}}):t.jsx("use",{href:S+"#icon-bubble",style:{fill:a.red,stroke:a.red}})}),t.jsx(Ae,{children:d})]})})]}),t.jsxs(et,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:""}),t.jsx(P,{children:t.jsx(le,{type:"button",onClick:()=>k(x._id),children:t.jsx(xe,{children:t.jsx("use",{href:S+"#icon-trash"})})})})]})]})]},x._id)})})}):t.jsxs(he,{children:[t.jsxs(tn,{children:[t.jsx(H,{children:"Title"}),t.jsx(H,{children:"Category"}),t.jsx(H,{children:"Calories"}),t.jsx(H,{children:"Weight"}),t.jsx(H,{children:"Recommend"}),t.jsx(H,{children:""})]}),t.jsx(pe,{children:p.map(x=>{var g,j,b;const y=(g=x.productID)!=null&&g.groupBloodNotAllowed[s]?d="Yes":d="No";return t.jsxs(Ee,{children:[t.jsx(U,{children:c((j=x.productID)==null?void 0:j.title)}),t.jsx(U,{children:c((b=x.productID)==null?void 0:b.category)}),t.jsx(U,{children:x.calories}),t.jsx(U,{children:x.amount}),t.jsx(U,{children:t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[t.jsx("svg",{style:{width:"14px",height:"14px"},children:y==="Yes"?t.jsx("use",{href:S+"#icon-bubble",style:{fill:a.green,stroke:a.green}}):t.jsx("use",{href:S+"#icon-bubble",style:{fill:a.red,stroke:a.red}})}),t.jsx(Ae,{children:d})]})}),t.jsx(U,{children:t.jsx(le,{type:"button",onClick:()=>k(x._id),children:t.jsx(xe,{children:t.jsx("use",{href:S+"#icon-trash"})})})})]},x._id)})})]}):t.jsx(Ve,{children:"Not found products"})]})},rn=h.ul`
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
`,Te=h.ul`
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

`;const sn=({exercisesArray:e,date:n})=>{const i=Ue("(max-width:768px)"),r=B(ke),s=ye(),[o,f]=$.useState([]),p=B(c=>c.diary.isLoading);$.useEffect(()=>{f(e)},[e]);const l=c=>c.charAt(0).toUpperCase()+c.slice(1).toLowerCase(),u=async c=>{try{if((await s(st(c))).meta.requestStatus==="fulfilled"){const k=o.filter(x=>x._id!==c);f(k),await s(be(n))}ee.Notify.success("Exercise deleted successfully!",{theme:"light"})}catch(d){console.log(d),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return t.jsxs(Ye,{children:[t.jsxs(Qe,{children:[t.jsx(Fe,{children:"Exercises"}),t.jsx(qe,{children:t.jsxs(it,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[t.jsx(Ke,{children:"Add exercises"}),t.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:a.orange},children:t.jsx("use",{href:S+"#icon-arrow-right"})})]})})]}),p?t.jsx(Pe,{}):o&&o.length>0&&!r?i?t.jsx(he,{children:t.jsx(pe,{children:o.map(c=>{var d,k,x,y;return t.jsxs(Te,{children:[t.jsx(T,{children:"Body Part"}),t.jsx(T,{children:l((d=c.exerciseID)==null?void 0:d.bodyPart)}),t.jsx(T,{children:"Equipment"}),t.jsx(T,{children:l((k=c.exerciseID)==null?void 0:k.equipment)}),t.jsx(T,{children:"Name"}),t.jsx(T,{children:l((x=c.exerciseID)==null?void 0:x.name)}),t.jsxs(Ze,{children:[t.jsxs(Ge,{children:[t.jsx(T,{children:"Target"}),t.jsx(T,{children:l((y=c.exerciseID)==null?void 0:y.target)})]}),t.jsxs(Je,{children:[t.jsx(T,{children:"Burned Calories"}),t.jsx(T,{children:c.calories})]}),t.jsxs(Xe,{children:[t.jsx(T,{children:"Time"}),t.jsx(T,{children:c.time})]}),t.jsxs(et,{children:[t.jsx(T,{children:""}),t.jsx(T,{children:t.jsx(le,{type:"button",onClick:()=>u(c._id),children:t.jsx(xe,{children:t.jsx("use",{href:S+"#icon-trash"})})})})]})]})]},c._id)})})}):t.jsxs(he,{children:[t.jsxs(rn,{children:[t.jsx(_,{children:"Body Part"}),t.jsx(_,{children:"Equipment"}),t.jsx(_,{children:"Name"}),t.jsx(_,{children:"Target"}),t.jsx(_,{children:"Burned Calories"}),t.jsx(_,{children:"Time"}),t.jsx(_,{children:""})]}),t.jsx(pe,{children:o.map(c=>t.jsxs(Te,{children:[t.jsx(W,{children:l(c.exerciseID.bodyPart)}),t.jsx(W,{children:l(c.exerciseID.equipment)}),t.jsx(W,{children:l(c.exerciseID.name)}),t.jsx(W,{children:l(c.exerciseID.target)}),t.jsx(W,{children:c.calories}),t.jsx(W,{children:c.time}),t.jsx(W,{children:t.jsx(le,{type:"button",onClick:()=>u(c._id),children:t.jsx(xe,{children:t.jsx("use",{href:S+"#icon-trash"})})})})]},c._id))})]}):t.jsx(Ve,{children:"Not found exercises"})]})},on=h.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,an=h.ul`
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
`,q=h.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: ${a.white};


  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,cn=h.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,dn=h.div`
  width: 24px;
  height: 24px;
  background-color: ${a.beige};
  border-radius: 50%;
`,K=h.svg`
  width: 20px;
  height: 20px;
  fill: ${a.orangeSecond};
`,hn=h.svg`
  width: 24px;
  height: 24px;
`,pn=h.p`
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
`,ln=({bmr:e})=>{const n=B(d=>d.diary.allDiaryInformation),{burnedCalories:i,consumedCalories:r,sportTime:s}=n||0,[o,f]=$.useState(!1),[p,l]=$.useState(!1),u=Math.round(r-i,0);B(ke);function c(){const d=2200-r;return console.log(r),d>2200?2200-d:d}return $.useEffect(()=>{f(u<0),l(s<0)},[u,s]),t.jsxs(on,{children:[t.jsxs(an,{children:[t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:`${S}#icon-fork-knife`})}),t.jsx(F,{children:"Daily calorie intake"})]}),t.jsx(q,{children:e||2200})]}),t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:S+"#icon-dumbbell"})}),t.jsx(F,{children:"Daily norm of sports"})]}),t.jsx(q,{children:"110 min"})]}),t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:S+"#icon-apple"})}),t.jsx(F,{children:"Calories consumed"})]}),t.jsx(q,{children:Math.round(r,0)||0})]}),t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:S+"#icon-fire"})}),t.jsx(F,{children:"Calories burned"})]}),t.jsx(q,{children:i||0})]}),t.jsxs(Y,{className:o?"greenBg":u<0?"redBg":"",children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:S+"#icon-bubble"})}),t.jsx(F,{children:"The rest of the calories"})]}),t.jsx(q,{children:c()||0})]}),t.jsxs(Y,{className:p?"greenBg":"",children:[t.jsxs(Q,{children:[t.jsx(K,{children:t.jsx("use",{href:S+"#icon-running-figure"})}),t.jsx(F,{children:"The rest of sports"})]}),t.jsxs(q,{children:[110-Math.round(s*100)/100||110," min"]})]})]}),t.jsxs(cn,{children:[t.jsx(dn,{children:t.jsx(hn,{children:t.jsx("use",{href:S+"#icon-running-stick-figure-svgrepo-com-1"})})}),t.jsx(pn,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},xn=h.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,fn=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,gn=h.div`
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
`,un=h.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,wn=h.div`
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
`,ze=e=>{const n=new Date(e),i=String(n.getDate()).padStart(2,"0"),r=String(n.getMonth()+1).padStart(2,"0"),s=n.getFullYear();return`${i}-${r}-${s}`},jn=()=>{const[e,n]=$.useState(new Date),r=B(Ie).createdAt,[s,o]=$.useState([]),[f,p]=$.useState([]),[l,u]=$.useState([]),c=ye(),d=B(ot),k=$.useMemo(()=>ze(e),[e]),x=$.useMemo(()=>ze(r),[r]);return $.useEffect(()=>{try{(async()=>{var j,b;const g=await c(be(k));g.payload===null&&(p([]),u([])),g.payload&&(o(g.payload),p((j=g.payload)==null?void 0:j.products),u((b=g.payload)==null?void 0:b.exercises))})()}catch(y){console.log(y),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}},[c,e,k]),t.jsx(wn,{children:t.jsxs(xn,{children:[t.jsxs(fn,{children:[t.jsx(ct,{title:"Diary "}),t.jsx(ut,{currentDate:e,setCurrentDate:n,userDateRegistration:x})]}),t.jsxs(un,{children:[t.jsx(ln,{userDiaryInformation:s,bmr:d}),t.jsxs(gn,{children:[t.jsx(nn,{productsArray:f,date:k}),t.jsx(sn,{exercisesArray:l,date:k})]})]})]})})};export{jn as default};
