import{u as d,h as a,r as b,j as t,s as $,i as et,a as be,k as B,m as Ae,n as Ie,o as tt,p as ee,q as nt,t as rt,v as it,w as st}from"./index-616b4b89.js";import{f as ot,D as at}from"./Datapicker-730c5d18.js";import{T as ct}from"./TitlePage-22027f7a.js";const dt=d.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
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
`,pt=d.p`
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
`,lt=d.svg`
  width: 20px;
  height: 20px;
  stroke: ${a.orange};

  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,xt=d.button`
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
`,ft=d.button`
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
`,gt=d.svg`
  width: 100%;
  height: 100%;
  fill: ${a.white};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,ut=d.svg`
  width: 100%;
  height: 100%;
  fill: ${a.white};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`,wt=({currentDate:e,setCurrentDate:n,userDateRegistration:i})=>{const[r,s]=b.useState(e),[o,p]=b.useState(!1),h=()=>{p(!o)},g=()=>{const l=new Date(r);l.setDate(l.getDate()-1),n(l),s(l)},c=()=>{const l=new Date(r);l.setDate(l.getDate()+1),n(l),s(l)},f=()=>{p(!1)};return t.jsxs(dt,{children:[t.jsxs(xt,{onClick:h,children:[t.jsx(pt,{children:ot(r,"dd/MM/yyyy")}),t.jsx(lt,{children:t.jsx("use",{href:`${$}#icon-calendar-orange`})})]}),t.jsx(ft,{type:"button",onClick:g,children:t.jsx(gt,{children:t.jsx("use",{href:`${$}#icon-chevron-left`})})}),t.jsx(ht,{type:"button",onClick:c,children:t.jsx(ut,{children:t.jsx("use",{href:`${$}#icon-chevron-right`})})}),t.jsx(at,{selectedDate:r,setSelectedDate:s,isOpen:o,onClose:f,setCurrentDate:n,userDateRegistration:i})]})};function X(){return X=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},X.apply(this,arguments)}function mt(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}function yt(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),e.nonce!==void 0&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}var bt=function(){function e(i){var r=this;this._insertTag=function(s){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(s,o),r.tags.push(s)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var n=e.prototype;return n.hydrate=function(r){r.forEach(this._insertTag)},n.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(yt(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var o=mt(s);try{o.insertRule(r,o.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(r));this.ctr++},n.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),z="-ms-",de="-moz-",w="-webkit-",Pe="comm",je="rule",ve="decl",jt="@import",Le="@keyframes",vt="@layer",$t=Math.abs,fe=String.fromCharCode,kt=Object.assign;function St(e,n){return C(e,0)^45?(((n<<2^C(e,0))<<2^C(e,1))<<2^C(e,2))<<2^C(e,3):0}function Me(e){return e.trim()}function Dt(e,n){return(e=n.exec(e))?e[0]:e}function m(e,n,i){return e.replace(n,i)}function me(e,n){return e.indexOf(n)}function C(e,n){return e.charCodeAt(n)|0}function te(e,n,i){return e.slice(n,i)}function O(e){return e.length}function $e(e){return e.length}function se(e,n){return n.push(e),e}function Ct(e,n){return e.map(n).join("")}var ge=1,q=1,Oe=0,A=0,k=0,G="";function ue(e,n,i,r,s,o,p){return{value:e,root:n,parent:i,type:r,props:s,children:o,line:ge,column:q,length:p,return:""}}function J(e,n){return kt(ue("",null,null,"",null,null,0),e,{length:-e.length},n)}function Et(){return k}function zt(){return k=A>0?C(G,--A):0,q--,k===10&&(q=1,ge--),k}function I(){return k=A<Oe?C(G,A++):0,q++,k===10&&(q=1,ge++),k}function R(){return C(G,A)}function oe(){return A}function re(e,n){return te(G,e,n)}function ne(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Re(e){return ge=q=1,Oe=O(G=e),A=0,[]}function Be(e){return G="",e}function ae(e){return Me(re(A-1,ye(e===91?e+2:e===40?e+1:e)))}function Tt(e){for(;(k=R())&&k<33;)I();return ne(e)>2||ne(k)>3?"":" "}function At(e,n){for(;--n&&I()&&!(k<48||k>102||k>57&&k<65||k>70&&k<97););return re(e,oe()+(n<6&&R()==32&&I()==32))}function ye(e){for(;I();)switch(k){case e:return A;case 34:case 39:e!==34&&e!==39&&ye(k);break;case 40:e===41&&ye(e);break;case 92:I();break}return A}function It(e,n){for(;I()&&e+k!==47+10;)if(e+k===42+42&&R()===47)break;return"/*"+re(n,A-1)+"*"+fe(e===47?e:I())}function Pt(e){for(;!ne(R());)I();return re(e,A)}function Lt(e){return Be(ce("",null,null,null,[""],e=Re(e),0,[0],e))}function ce(e,n,i,r,s,o,p,h,g){for(var c=0,f=0,l=p,S=0,E=0,x=0,u=1,y=1,j=1,D=0,L="",ie=s,N=o,M=r,v=L;y;)switch(x=D,D=I()){case 40:if(x!=108&&C(v,l-1)==58){me(v+=m(ae(D),"&","&\f"),"&\f")!=-1&&(j=-1);break}case 34:case 39:case 91:v+=ae(D);break;case 9:case 10:case 13:case 32:v+=Tt(x);break;case 92:v+=At(oe()-1,7);continue;case 47:switch(R()){case 42:case 47:se(Mt(It(I(),oe()),n,i),g);break;default:v+="/"}break;case 123*u:h[c++]=O(v)*j;case 125*u:case 59:case 0:switch(D){case 0:case 125:y=0;case 59+f:j==-1&&(v=m(v,/\f/g,"")),E>0&&O(v)-l&&se(E>32?De(v+";",r,i,l-1):De(m(v," ","")+";",r,i,l-2),g);break;case 59:v+=";";default:if(se(M=Se(v,n,i,c,f,s,h,L,ie=[],N=[],l),o),D===123)if(f===0)ce(v,n,M,M,ie,o,l,h,N);else switch(S===99&&C(v,3)===110?100:S){case 100:case 108:case 109:case 115:ce(e,M,M,r&&se(Se(e,M,M,0,0,s,h,L,s,ie=[],l),N),s,N,l,h,r?ie:N);break;default:ce(v,M,M,M,[""],N,0,h,N)}}c=f=E=0,u=j=1,L=v="",l=p;break;case 58:l=1+O(v),E=x;default:if(u<1){if(D==123)--u;else if(D==125&&u++==0&&zt()==125)continue}switch(v+=fe(D),D*u){case 38:j=f>0?1:(v+="\f",-1);break;case 44:h[c++]=(O(v)-1)*j,j=1;break;case 64:R()===45&&(v+=ae(I())),S=R(),f=l=O(L=v+=Pt(oe())),D++;break;case 45:x===45&&O(v)==2&&(u=0)}}return o}function Se(e,n,i,r,s,o,p,h,g,c,f){for(var l=s-1,S=s===0?o:[""],E=$e(S),x=0,u=0,y=0;x<r;++x)for(var j=0,D=te(e,l+1,l=$t(u=p[x])),L=e;j<E;++j)(L=Me(u>0?S[j]+" "+D:m(D,/&\f/g,S[j])))&&(g[y++]=L);return ue(e,n,i,s===0?je:h,g,c,f)}function Mt(e,n,i){return ue(e,n,i,Pe,fe(Et()),te(e,2,-2),0)}function De(e,n,i,r){return ue(e,n,i,ve,te(e,0,r),te(e,r+1,-1),r)}function Z(e,n){for(var i="",r=$e(e),s=0;s<r;s++)i+=n(e[s],s,e,n)||"";return i}function Ot(e,n,i,r){switch(e.type){case vt:if(e.children.length)break;case jt:case ve:return e.return=e.return||e.value;case Pe:return"";case Le:return e.return=e.value+"{"+Z(e.children,r)+"}";case je:e.value=e.props.join(",")}return O(i=Z(e.children,r))?e.return=e.value+"{"+i+"}":""}function Rt(e){var n=$e(e);return function(i,r,s,o){for(var p="",h=0;h<n;h++)p+=e[h](i,r,s,o)||"";return p}}function Bt(e){return function(n){n.root||(n=n.return)&&e(n)}}var Nt=function(n,i,r){for(var s=0,o=0;s=o,o=R(),s===38&&o===12&&(i[r]=1),!ne(o);)I();return re(n,A)},_t=function(n,i){var r=-1,s=44;do switch(ne(s)){case 0:s===38&&R()===12&&(i[r]=1),n[r]+=Nt(A-1,i,r);break;case 2:n[r]+=ae(s);break;case 4:if(s===44){n[++r]=R()===58?"&\f":"",i[r]=n[r].length;break}default:n[r]+=fe(s)}while(s=I());return n},Wt=function(n,i){return Be(_t(Re(n),i))},Ce=new WeakMap,Ht=function(n){if(!(n.type!=="rule"||!n.parent||n.length<1)){for(var i=n.value,r=n.parent,s=n.column===r.column&&n.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(n.props.length===1&&i.charCodeAt(0)!==58&&!Ce.get(r))&&!s){Ce.set(n,!0);for(var o=[],p=Wt(i,o),h=r.props,g=0,c=0;g<p.length;g++)for(var f=0;f<h.length;f++,c++)n.props[c]=o[g]?p[g].replace(/&\f/g,h[f]):h[f]+" "+p[g]}}},Ut=function(n){if(n.type==="decl"){var i=n.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(n.return="",n.value="")}};function Ne(e,n){switch(St(e,n)){case 5103:return w+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return w+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return w+e+de+e+z+e+e;case 6828:case 4268:return w+e+z+e+e;case 6165:return w+e+z+"flex-"+e+e;case 5187:return w+e+m(e,/(\w+).+(:[^]+)/,w+"box-$1$2"+z+"flex-$1$2")+e;case 5443:return w+e+z+"flex-item-"+m(e,/flex-|-self/,"")+e;case 4675:return w+e+z+"flex-line-pack"+m(e,/align-content|flex-|-self/,"")+e;case 5548:return w+e+z+m(e,"shrink","negative")+e;case 5292:return w+e+z+m(e,"basis","preferred-size")+e;case 6060:return w+"box-"+m(e,"-grow","")+w+e+z+m(e,"grow","positive")+e;case 4554:return w+m(e,/([^-])(transform)/g,"$1"+w+"$2")+e;case 6187:return m(m(m(e,/(zoom-|grab)/,w+"$1"),/(image-set)/,w+"$1"),e,"")+e;case 5495:case 3959:return m(e,/(image-set\([^]*)/,w+"$1$`$1");case 4968:return m(m(e,/(.+:)(flex-)?(.*)/,w+"box-pack:$3"+z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+w+e+e;case 4095:case 3583:case 4068:case 2532:return m(e,/(.+)-inline(.+)/,w+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(e)-1-n>6)switch(C(e,n+1)){case 109:if(C(e,n+4)!==45)break;case 102:return m(e,/(.+:)(.+)-([^]+)/,"$1"+w+"$2-$3$1"+de+(C(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~me(e,"stretch")?Ne(m(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(C(e,n+1)!==115)break;case 6444:switch(C(e,O(e)-3-(~me(e,"!important")&&10))){case 107:return m(e,":",":"+w)+e;case 101:return m(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+w+(C(e,14)===45?"inline-":"")+"box$3$1"+w+"$2$3$1"+z+"$2box$3")+e}break;case 5936:switch(C(e,n+11)){case 114:return w+e+z+m(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return w+e+z+m(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return w+e+z+m(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return w+e+z+e+e}return e}var Yt=function(n,i,r,s){if(n.length>-1&&!n.return)switch(n.type){case ve:n.return=Ne(n.value,n.length);break;case Le:return Z([J(n,{value:m(n.value,"@","@"+w)})],s);case je:if(n.length)return Ct(n.props,function(o){switch(Dt(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Z([J(n,{props:[m(o,/:(read-\w+)/,":"+de+"$1")]})],s);case"::placeholder":return Z([J(n,{props:[m(o,/:(plac\w+)/,":"+w+"input-$1")]}),J(n,{props:[m(o,/:(plac\w+)/,":"+de+"$1")]}),J(n,{props:[m(o,/:(plac\w+)/,z+"input-$1")]})],s)}return""})}},Qt=[Yt],Ft=function(n){var i=n.key;if(i==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(u){var y=u.getAttribute("data-emotion");y.indexOf(" ")!==-1&&(document.head.appendChild(u),u.setAttribute("data-s",""))})}var s=n.stylisPlugins||Qt,o={},p,h=[];p=n.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(u){for(var y=u.getAttribute("data-emotion").split(" "),j=1;j<y.length;j++)o[y[j]]=!0;h.push(u)});var g,c=[Ht,Ut];{var f,l=[Ot,Bt(function(u){f.insert(u)})],S=Rt(c.concat(s,l)),E=function(y){return Z(Lt(y),S)};g=function(y,j,D,L){f=D,E(y?y+"{"+j.styles+"}":j.styles),L&&(x.inserted[j.name]=!0)}}var x={key:i,sheet:new bt({key:i,container:p,nonce:n.nonce,speedy:n.speedy,prepend:n.prepend,insertionPoint:n.insertionPoint}),nonce:n.nonce,inserted:o,registered:{},insert:g};return x.sheet.hydrate(h),x},Kt=b.createContext(typeof HTMLElement<"u"?Ft({key:"css"}):null);Kt.Provider;var Vt=b.createContext({});function Zt(e){return Object.keys(e).length===0}function qt(e=null){const n=b.useContext(Vt);return!n||Zt(n)?e:n}function _e(e,n){const i=X({},n);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))i[r]=X({},e[r],i[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const s=e[r]||{},o=n[r];i[r]={},!o||!Object.keys(o)?i[r]=s:!s||!Object.keys(s)?i[r]=o:(i[r]=X({},o),Object.keys(s).forEach(p=>{i[r][p]=_e(s[p],o[p])}))}else i[r]===void 0&&(i[r]=e[r])}),i}function Gt(e){const{theme:n,name:i,props:r}=e;return!n||!n.components||!n.components[i]||!n.components[i].defaultProps?r:_e(n.components[i].defaultProps,r)}const Jt=typeof window<"u"?b.useLayoutEffect:b.useEffect,Xt=Jt;function en(e,n,i,r,s){const[o,p]=b.useState(()=>s&&i?i(e).matches:r?r(e).matches:n);return Xt(()=>{let h=!0;if(!i)return;const g=i(e),c=()=>{h&&p(g.matches)};return c(),g.addListener(c),()=>{h=!1,g.removeListener(c)}},[e,i]),o}const We=et["useSyncExternalStore"];function tn(e,n,i,r,s){const o=b.useCallback(()=>n,[n]),p=b.useMemo(()=>{if(s&&i)return()=>i(e).matches;if(r!==null){const{matches:f}=r(e);return()=>f}return o},[o,e,r,s,i]),[h,g]=b.useMemo(()=>{if(i===null)return[o,()=>()=>{}];const f=i(e);return[()=>f.matches,l=>(f.addListener(l),()=>{f.removeListener(l)})]},[o,i,e]);return We(g,h,p)}function He(e,n={}){const i=qt(),r=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:s=!1,matchMedia:o=r?window.matchMedia:null,ssrMatchMedia:p=null,noSsr:h=!1}=Gt({name:"MuiUseMediaQuery",props:n,theme:i});let g=typeof e=="function"?e(i):e;return g=g.replace(/^@media( ?)/m,""),(We!==void 0?tn:en)(g,s,o,p,h)}const Ue=d.div`
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
`,nn=d.ul`
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
`,qe=d.div`
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

`,ze=d.span`
  @media screen and (min-width: 320px) {
    color: ${a.white};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,rn=e=>e.diary.isLoading,ke=e=>e.diary.error,sn=({productsArray:e,date:n})=>{const[i,r]=b.useState([]);b.useEffect(()=>{e&&r(e)},[e]);const s=be(),p=B(Ae).blood,h=B(ke),g=He("(max-width:768px)"),[c,f]=b.useState([]);b.useEffect(()=>{f(e)},[e]);const l=x=>typeof x!="string"||x.length===0?"":x[0].toUpperCase()+x.slice(1).toLowerCase();let S;const E=async x=>{try{await s(tt(x));const u=c.filter(y=>y._id!==x);f(u),ee.Notify.success("Product deleted successfully!",{theme:"light"})}catch(u){console.log(u),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return t.jsxs(Ue,{children:[t.jsxs(Ye,{children:[t.jsx(Qe,{children:"Products"}),t.jsx(Fe,{children:t.jsxs(Ie,{to:"/products",style:{display:"flex",alignItems:"center"},children:[t.jsx(Ke,{children:"Add product"}),t.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:a.orange},children:t.jsx("use",{href:$+"#icon-arrow-right"})})]})})]}),i&&i.length>0&&!h?g?t.jsx(he,{children:t.jsx(pe,{children:c.map(x=>{var y,j;const u=x.productID.groupBloodNotAllowed[p]?"Yes":"No";return t.jsxs(Ee,{children:[t.jsx(P,{children:"Title"}),t.jsx(P,{children:l((y=x.productID)==null?void 0:y.title)}),t.jsx(P,{children:"Category"}),t.jsx(P,{children:l((j=x.productID)==null?void 0:j.category)}),t.jsxs(Ze,{children:[t.jsxs(qe,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:"Calories"}),t.jsx(P,{children:x.calories})]}),t.jsxs(Ge,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:"Weight"}),t.jsx(P,{children:x.amount})]}),t.jsxs(Je,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:"Recommend"}),t.jsx(P,{children:t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[t.jsx("svg",{style:{width:"14px",height:"14px"},children:u==="Yes"?t.jsx("use",{href:$+"#icon-bubble",style:{fill:`${a.green}`,stroke:a.green}}):t.jsx("use",{href:$+"#icon-bubble",style:{fill:a.red,stroke:a.red}})}),t.jsx(ze,{children:S})]})})]}),t.jsxs(Xe,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(P,{children:""}),t.jsx(P,{children:t.jsx(le,{type:"button",onClick:()=>E(x._id),children:t.jsx(xe,{children:t.jsx("use",{href:$+"#icon-trash"})})})})]})]})]},x._id)})})}):t.jsxs(he,{children:[t.jsxs(nn,{children:[t.jsx(H,{children:"Title"}),t.jsx(H,{children:"Category"}),t.jsx(H,{children:"Calories"}),t.jsx(H,{children:"Weight"}),t.jsx(H,{children:"Recommend"}),t.jsx(H,{children:""})]}),t.jsx(pe,{children:c.map(x=>{var y,j,D;const u=(y=x.productID)!=null&&y.groupBloodNotAllowed[p]?S="Yes":S="No";return t.jsxs(Ee,{children:[t.jsx(U,{children:l((j=x.productID)==null?void 0:j.title)}),t.jsx(U,{children:l((D=x.productID)==null?void 0:D.category)}),t.jsx(U,{children:x.calories}),t.jsx(U,{children:x.amount}),t.jsx(U,{children:t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[t.jsx("svg",{style:{width:"14px",height:"14px"},children:u==="Yes"?t.jsx("use",{href:$+"#icon-bubble",style:{fill:a.green,stroke:a.green}}):t.jsx("use",{href:$+"#icon-bubble",style:{fill:a.red,stroke:a.red}})}),t.jsx(ze,{children:S})]})}),t.jsx(U,{children:t.jsx(le,{type:"button",onClick:()=>E(x._id),children:t.jsx(xe,{children:t.jsx("use",{href:$+"#icon-trash"})})})})]},x._id)})})]}):t.jsx(Ve,{children:"Not found products"})]})},on=d.ul`
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
`,Te=d.ul`
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

`;const an=({exercisesArray:e,date:n})=>{const i=He("(max-width:768px)"),r=B(ke),s=be(),[o,p]=b.useState([]);b.useEffect(()=>{p(e)},[e]);const h=c=>c.charAt(0).toUpperCase()+c.slice(1).toLowerCase(),g=async c=>{try{await s(nt(c));const f=o.filter(l=>l._id!==c);p(f),ee.Notify.success("Exercise deleted successfully!",{theme:"light"})}catch(f){console.log(f),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return t.jsxs(Ue,{children:[t.jsxs(Ye,{children:[t.jsx(Qe,{children:"Exercises"}),t.jsx(Fe,{children:t.jsxs(Ie,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[t.jsx(Ke,{children:"Add exercises"}),t.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:a.orange},children:t.jsx("use",{href:$+"#icon-arrow-right"})})]})})]}),e&&e.length>0&&!r?i?t.jsx(he,{children:t.jsx(pe,{children:o.map(c=>{var f,l,S,E;return t.jsxs(Te,{children:[t.jsx(T,{children:"Body Part"}),t.jsx(T,{children:h((f=c.exerciseID)==null?void 0:f.bodyPart)}),t.jsx(T,{children:"Equipment"}),t.jsx(T,{children:h((l=c.exerciseID)==null?void 0:l.equipment)}),t.jsx(T,{children:"Name"}),t.jsx(T,{children:h((S=c.exerciseID)==null?void 0:S.name)}),t.jsxs(Ze,{children:[t.jsxs(qe,{children:[t.jsx(T,{children:"Target"}),t.jsx(T,{children:h((E=c.exerciseID)==null?void 0:E.target)})]}),t.jsxs(Ge,{children:[t.jsx(T,{children:"Burned Calories"}),t.jsx(T,{children:c.calories})]}),t.jsxs(Je,{children:[t.jsx(T,{children:"Time"}),t.jsx(T,{children:c.time})]}),t.jsxs(Xe,{children:[t.jsx(T,{children:""}),t.jsx(T,{children:t.jsx(le,{type:"button",onClick:()=>g(c._id),children:t.jsx(xe,{children:t.jsx("use",{href:$+"#icon-trash"})})})})]})]})]},c._id)})})}):t.jsxs(he,{children:[t.jsxs(on,{children:[t.jsx(_,{children:"Body Part"}),t.jsx(_,{children:"Equipment"}),t.jsx(_,{children:"Name"}),t.jsx(_,{children:"Target"}),t.jsx(_,{children:"Burned Calories"}),t.jsx(_,{children:"Time"}),t.jsx(_,{children:""})]}),t.jsx(pe,{children:o.map(c=>t.jsxs(Te,{children:[t.jsx(W,{children:h(c.exerciseID.bodyPart)}),t.jsx(W,{children:h(c.exerciseID.equipment)}),t.jsx(W,{children:h(c.exerciseID.name)}),t.jsx(W,{children:h(c.exerciseID.target)}),t.jsx(W,{children:c.calories}),t.jsx(W,{children:c.time}),t.jsx(W,{children:t.jsx(le,{type:"button",onClick:()=>g(c._id),children:t.jsx(xe,{children:t.jsx("use",{href:$+"#icon-trash"})})})})]},c._id))})]}):t.jsx(Ve,{children:"Not found exercises"})]})},cn=d.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,dn=d.ul`
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
`,hn=d.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,pn=d.div`
  width: 24px;
  height: 24px;
  background-color: ${a.beige};
  border-radius: 50%;
`,V=d.svg`
  width: 20px;
  height: 20px;
  fill: ${a.orangeSecond};
`,ln=d.svg`
  width: 24px;
  height: 24px;
`,xn=d.p`
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
`,fn=({userDiaryInformation:e,bmr:n})=>{const{burnedCalories:i,consumedCalories:r,remainingSports:s}=e,[o,p]=b.useState(!1),[h,g]=b.useState(!1),c=Math.round(r-i,0);return B(ke),b.useEffect(()=>{p(c<0),g(s<0)},[c,s]),t.jsxs(cn,{children:[t.jsxs(dn,{children:[t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(V,{children:t.jsx("use",{href:`${$}#icon-fork-knife`})}),t.jsx(F,{children:"Daily calorie intake"})]}),t.jsx(K,{children:n||2200})]}),t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(V,{children:t.jsx("use",{href:$+"#icon-dumbbell"})}),t.jsx(F,{children:"Daily norm of sports"})]}),t.jsx(K,{children:"110 min"})]}),t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(V,{children:t.jsx("use",{href:$+"#icon-apple"})}),t.jsx(F,{children:"Calories consumed"})]}),t.jsx(K,{children:Math.round(r,0)||0})]}),t.jsxs(Y,{children:[t.jsxs(Q,{children:[t.jsx(V,{children:t.jsx("use",{href:$+"#icon-fire"})}),t.jsx(F,{children:"Calories burned"})]}),t.jsx(K,{children:i||0})]}),t.jsxs(Y,{className:o?"greenBg":c<0?"redBg":"",children:[t.jsxs(Q,{children:[t.jsx(V,{children:t.jsx("use",{href:$+"#icon-bubble"})}),t.jsx(F,{children:"The rest of the calories"})]}),t.jsx(K,{children:c||n||0})]}),t.jsxs(Y,{className:h?"greenBg":"",children:[t.jsxs(Q,{children:[t.jsx(V,{children:t.jsx("use",{href:$+"#icon-running-figure"})}),t.jsx(F,{children:"The rest of sports"})]}),t.jsxs(K,{children:[s||110," min"]})]})]}),t.jsxs(hn,{children:[t.jsx(pn,{children:t.jsx(ln,{children:t.jsx("use",{href:$+"#icon-running-stick-figure-svgrepo-com-1"})})}),t.jsx(xn,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},gn=d.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,un=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,wn=d.div`
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
`,mn=d.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,yn=d.div`
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
`,we=e=>{const n=new Date(e),i=String(n.getDate()).padStart(2,"0"),r=String(n.getMonth()+1).padStart(2,"0"),s=n.getFullYear();return`${i}-${r}-${s}`},$n=()=>{const[e,n]=b.useState(new Date),r=B(Ae).createdAt,s=be();B(rn),B(rt);const o=B(it);b.useEffect(()=>{try{(async()=>{const u=we(e),y=await s(st(u));y.payload&&(c(y.payload),l(y.payload.products),E(y.payload.exercises))})()}catch(x){console.log(x),ee.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}},[s,e]);const p=b.useMemo(()=>we(e),[e]),h=b.useMemo(()=>we(r),[r]),[g,c]=b.useState([]),[f,l]=b.useState([]),[S,E]=b.useState([]);return t.jsx(yn,{children:t.jsxs(gn,{children:[t.jsxs(un,{children:[t.jsx(ct,{title:"Diary "}),t.jsx(wt,{currentDate:e,setCurrentDate:n,userDateRegistration:h})]}),t.jsxs(mn,{children:[t.jsx(fn,{userDiaryInformation:g,bmr:o}),t.jsxs(wn,{children:[t.jsx(sn,{productsArray:f,date:p}),t.jsx(an,{exercisesArray:S,date:p})]})]})]})})};export{$n as default};
