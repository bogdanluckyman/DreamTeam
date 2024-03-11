import{u as h,m as s,r as D,j as t,s as v,n as de,o as et,a as ye,p as N,q as Ie,N as Pe,t as tt,v as be,w as nt,x as it,y as rt,L as st,e as ot}from"./index-66b0acc6.js";import{f as at,D as dt,B as ct}from"./Datapicker-e53c8517.js";import{T as ht}from"./TitlePage-8006ac39.js";const pt=h.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,lt=h.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;

  &:hover {
    > svg {
      fill: ${s.orange};
    }
  }
`,xt=h.p`
  font-size: 24px;
  line-height: 1.33;
  margin: 0;
  padding: 0;
  color: ${s.white};
  font-weight: 700;
  transition: color 0.3s ease;

  &:hover {
    color: ${s.orange};
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.1;
  }
`,ft=h.svg`
  width: 20px;
  height: 20px;
  stroke: ${s.orange};

  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,gt=h.button`
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
      stroke: ${s.orange};
    }
  }
`,wt=h.button`
  display: flex;
  margin: 0 6px 0 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;

  &:hover {
    > svg {
      fill: ${s.orange};
    }
  }
`,ut=h.svg`
  width: 100%;
  height: 100%;
  fill: ${s.white};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,mt=h.svg`
  width: 100%;
  height: 100%;
  fill: ${s.white};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`,yt=({currentDate:e,setCurrentDate:n,userDateRegistration:r})=>{const[i,o]=D.useState(e),[a,l]=D.useState(!1),[d,p]=D.useState(!1),[b,c]=D.useState(!1),w=m=>{const x=new Date(m),j=String(x.getDate()).padStart(2,"0"),A=String(x.getMonth()+1).padStart(2,"0"),H=x.getFullYear();return`${j}-${A}-${H}`},C=()=>{l(!a)},P=()=>{p(!0);const m=new Date(e);w(m)>r?(m.setDate(m.getDate()-1),n(m),o(m),p(!1)):(de.Notify.failure(`However, we don't have any data to show you. Selected date cannot be earlier than the registration date: ${r}.`,{theme:"dark"}),p(!0))},k=()=>{c(!0);const m=w(new Date),x=new Date(i);x.setDate(i.getDate()+1),x>new Date?(de.Notify.failure(`However, we don't have any data to show you. Selected date cannot be later than today's date: ${m}.`,{theme:"dark"}),c(!0)):(n(x),o(x),c(!1))},u=()=>{l(!1)};return t.jsxs(pt,{children:[t.jsxs(gt,{onClick:C,children:[t.jsx(xt,{children:at(i,"dd/MM/yyyy")}),t.jsx(ft,{children:t.jsx("use",{href:v+"#icon-calendar"})})]}),t.jsx(wt,{type:"button",onClick:P,children:t.jsx(ut,{className:d?"passivePrev":"",children:t.jsx("use",{href:v+"#icon-chevron-left"})})}),t.jsx(lt,{type:"button",onClick:k,children:t.jsx(mt,{className:b?"passiveNext":"",children:t.jsx("use",{href:v+"#icon-chevron-right"})})}),t.jsx(dt,{selectedDate:i,setSelectedDate:o,isOpen:a,onClose:u,setCurrentDate:n,userDateRegistration:r})]})};function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},ee.apply(this,arguments)}function bt(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}function jt(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),e.nonce!==void 0&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}var vt=function(){function e(r){var i=this;this._insertTag=function(o){var a;i.tags.length===0?i.insertionPoint?a=i.insertionPoint.nextSibling:i.prepend?a=i.container.firstChild:a=i.before:a=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(o,a),i.tags.push(o)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var n=e.prototype;return n.hydrate=function(i){i.forEach(this._insertTag)},n.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(jt(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var a=bt(o);try{a.insertRule(i,a.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(i));this.ctr++},n.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},e}(),T="-ms-",ce="-moz-",f="-webkit-",Ae="comm",je="rule",ve="decl",$t="@import",Le="@keyframes",kt="@layer",St=Math.abs,fe=String.fromCharCode,Dt=Object.assign;function Ct(e,n){return S(e,0)^45?(((n<<2^S(e,0))<<2^S(e,1))<<2^S(e,2))<<2^S(e,3):0}function Me(e){return e.trim()}function Tt(e,n){return(e=n.exec(e))?e[0]:e}function g(e,n,r){return e.replace(n,r)}function ue(e,n){return e.indexOf(n)}function S(e,n){return e.charCodeAt(n)|0}function te(e,n,r){return e.slice(n,r)}function O(e){return e.length}function $e(e){return e.length}function re(e,n){return n.push(e),e}function Et(e,n){return e.map(n).join("")}var ge=1,G=1,Oe=0,z=0,$=0,J="";function we(e,n,r,i,o,a,l){return{value:e,root:n,parent:r,type:i,props:o,children:a,line:ge,column:G,length:l,return:""}}function X(e,n){return Dt(we("",null,null,"",null,null,0),e,{length:-e.length},n)}function zt(){return $}function It(){return $=z>0?S(J,--z):0,G--,$===10&&(G=1,ge--),$}function I(){return $=z<Oe?S(J,z++):0,G++,$===10&&(G=1,ge++),$}function R(){return S(J,z)}function se(){return z}function ie(e,n){return te(J,e,n)}function ne(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Re(e){return ge=G=1,Oe=O(J=e),z=0,[]}function Ne(e){return J="",e}function oe(e){return Me(ie(z-1,me(e===91?e+2:e===40?e+1:e)))}function Pt(e){for(;($=R())&&$<33;)I();return ne(e)>2||ne($)>3?"":" "}function At(e,n){for(;--n&&I()&&!($<48||$>102||$>57&&$<65||$>70&&$<97););return ie(e,se()+(n<6&&R()==32&&I()==32))}function me(e){for(;I();)switch($){case e:return z;case 34:case 39:e!==34&&e!==39&&me($);break;case 40:e===41&&me(e);break;case 92:I();break}return z}function Lt(e,n){for(;I()&&e+$!==47+10;)if(e+$===42+42&&R()===47)break;return"/*"+ie(n,z-1)+"*"+fe(e===47?e:I())}function Mt(e){for(;!ne(R());)I();return ie(e,z)}function Ot(e){return Ne(ae("",null,null,null,[""],e=Re(e),0,[0],e))}function ae(e,n,r,i,o,a,l,d,p){for(var b=0,c=0,w=l,C=0,P=0,k=0,u=1,m=1,x=1,j=0,A="",H=o,B=a,M=i,y=A;m;)switch(k=j,j=I()){case 40:if(k!=108&&S(y,w-1)==58){ue(y+=g(oe(j),"&","&\f"),"&\f")!=-1&&(x=-1);break}case 34:case 39:case 91:y+=oe(j);break;case 9:case 10:case 13:case 32:y+=Pt(k);break;case 92:y+=At(se()-1,7);continue;case 47:switch(R()){case 42:case 47:re(Rt(Lt(I(),se()),n,r),p);break;default:y+="/"}break;case 123*u:d[b++]=O(y)*x;case 125*u:case 59:case 0:switch(j){case 0:case 125:m=0;case 59+c:x==-1&&(y=g(y,/\f/g,"")),P>0&&O(y)-w&&re(P>32?De(y+";",i,r,w-1):De(g(y," ","")+";",i,r,w-2),p);break;case 59:y+=";";default:if(re(M=Se(y,n,r,b,c,o,d,A,H=[],B=[],w),a),j===123)if(c===0)ae(y,n,M,M,H,a,w,d,B);else switch(C===99&&S(y,3)===110?100:C){case 100:case 108:case 109:case 115:ae(e,M,M,i&&re(Se(e,M,M,0,0,o,d,A,o,H=[],w),B),o,B,w,d,i?H:B);break;default:ae(y,M,M,M,[""],B,0,d,B)}}b=c=P=0,u=x=1,A=y="",w=l;break;case 58:w=1+O(y),P=k;default:if(u<1){if(j==123)--u;else if(j==125&&u++==0&&It()==125)continue}switch(y+=fe(j),j*u){case 38:x=c>0?1:(y+="\f",-1);break;case 44:d[b++]=(O(y)-1)*x,x=1;break;case 64:R()===45&&(y+=oe(I())),C=R(),c=w=O(A=y+=Mt(se())),j++;break;case 45:k===45&&O(y)==2&&(u=0)}}return a}function Se(e,n,r,i,o,a,l,d,p,b,c){for(var w=o-1,C=o===0?a:[""],P=$e(C),k=0,u=0,m=0;k<i;++k)for(var x=0,j=te(e,w+1,w=St(u=l[k])),A=e;x<P;++x)(A=Me(u>0?C[x]+" "+j:g(j,/&\f/g,C[x])))&&(p[m++]=A);return we(e,n,r,o===0?je:d,p,b,c)}function Rt(e,n,r){return we(e,n,r,Ae,fe(zt()),te(e,2,-2),0)}function De(e,n,r,i){return we(e,n,r,ve,te(e,0,i),te(e,i+1,-1),i)}function q(e,n){for(var r="",i=$e(e),o=0;o<i;o++)r+=n(e[o],o,e,n)||"";return r}function Nt(e,n,r,i){switch(e.type){case kt:if(e.children.length)break;case $t:case ve:return e.return=e.return||e.value;case Ae:return"";case Le:return e.return=e.value+"{"+q(e.children,i)+"}";case je:e.value=e.props.join(",")}return O(r=q(e.children,i))?e.return=e.value+"{"+r+"}":""}function Bt(e){var n=$e(e);return function(r,i,o,a){for(var l="",d=0;d<n;d++)l+=e[d](r,i,o,a)||"";return l}}function _t(e){return function(n){n.root||(n=n.return)&&e(n)}}var Wt=function(n,r,i){for(var o=0,a=0;o=a,a=R(),o===38&&a===12&&(r[i]=1),!ne(a);)I();return ie(n,z)},Ht=function(n,r){var i=-1,o=44;do switch(ne(o)){case 0:o===38&&R()===12&&(r[i]=1),n[i]+=Wt(z-1,r,i);break;case 2:n[i]+=oe(o);break;case 4:if(o===44){n[++i]=R()===58?"&\f":"",r[i]=n[i].length;break}default:n[i]+=fe(o)}while(o=I());return n},Ut=function(n,r){return Ne(Ht(Re(n),r))},Ce=new WeakMap,Yt=function(n){if(!(n.type!=="rule"||!n.parent||n.length<1)){for(var r=n.value,i=n.parent,o=n.column===i.column&&n.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(n.props.length===1&&r.charCodeAt(0)!==58&&!Ce.get(i))&&!o){Ce.set(n,!0);for(var a=[],l=Ut(r,a),d=i.props,p=0,b=0;p<l.length;p++)for(var c=0;c<d.length;c++,b++)n.props[b]=a[p]?l[p].replace(/&\f/g,d[c]):d[c]+" "+l[p]}}},Qt=function(n){if(n.type==="decl"){var r=n.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(n.return="",n.value="")}};function Be(e,n){switch(Ct(e,n)){case 5103:return f+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return f+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return f+e+ce+e+T+e+e;case 6828:case 4268:return f+e+T+e+e;case 6165:return f+e+T+"flex-"+e+e;case 5187:return f+e+g(e,/(\w+).+(:[^]+)/,f+"box-$1$2"+T+"flex-$1$2")+e;case 5443:return f+e+T+"flex-item-"+g(e,/flex-|-self/,"")+e;case 4675:return f+e+T+"flex-line-pack"+g(e,/align-content|flex-|-self/,"")+e;case 5548:return f+e+T+g(e,"shrink","negative")+e;case 5292:return f+e+T+g(e,"basis","preferred-size")+e;case 6060:return f+"box-"+g(e,"-grow","")+f+e+T+g(e,"grow","positive")+e;case 4554:return f+g(e,/([^-])(transform)/g,"$1"+f+"$2")+e;case 6187:return g(g(g(e,/(zoom-|grab)/,f+"$1"),/(image-set)/,f+"$1"),e,"")+e;case 5495:case 3959:return g(e,/(image-set\([^]*)/,f+"$1$`$1");case 4968:return g(g(e,/(.+:)(flex-)?(.*)/,f+"box-pack:$3"+T+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+f+e+e;case 4095:case 3583:case 4068:case 2532:return g(e,/(.+)-inline(.+)/,f+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(e)-1-n>6)switch(S(e,n+1)){case 109:if(S(e,n+4)!==45)break;case 102:return g(e,/(.+:)(.+)-([^]+)/,"$1"+f+"$2-$3$1"+ce+(S(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~ue(e,"stretch")?Be(g(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(S(e,n+1)!==115)break;case 6444:switch(S(e,O(e)-3-(~ue(e,"!important")&&10))){case 107:return g(e,":",":"+f)+e;case 101:return g(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+f+(S(e,14)===45?"inline-":"")+"box$3$1"+f+"$2$3$1"+T+"$2box$3")+e}break;case 5936:switch(S(e,n+11)){case 114:return f+e+T+g(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return f+e+T+g(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return f+e+T+g(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return f+e+T+e+e}return e}var Ft=function(n,r,i,o){if(n.length>-1&&!n.return)switch(n.type){case ve:n.return=Be(n.value,n.length);break;case Le:return q([X(n,{value:g(n.value,"@","@"+f)})],o);case je:if(n.length)return Et(n.props,function(a){switch(Tt(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return q([X(n,{props:[g(a,/:(read-\w+)/,":"+ce+"$1")]})],o);case"::placeholder":return q([X(n,{props:[g(a,/:(plac\w+)/,":"+f+"input-$1")]}),X(n,{props:[g(a,/:(plac\w+)/,":"+ce+"$1")]}),X(n,{props:[g(a,/:(plac\w+)/,T+"input-$1")]})],o)}return""})}},Kt=[Ft],Vt=function(n){var r=n.key;if(r==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(u){var m=u.getAttribute("data-emotion");m.indexOf(" ")!==-1&&(document.head.appendChild(u),u.setAttribute("data-s",""))})}var o=n.stylisPlugins||Kt,a={},l,d=[];l=n.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(u){for(var m=u.getAttribute("data-emotion").split(" "),x=1;x<m.length;x++)a[m[x]]=!0;d.push(u)});var p,b=[Yt,Qt];{var c,w=[Nt,_t(function(u){c.insert(u)})],C=Bt(b.concat(o,w)),P=function(m){return q(Ot(m),C)};p=function(m,x,j,A){c=j,P(m?m+"{"+x.styles+"}":x.styles),A&&(k.inserted[x.name]=!0)}}var k={key:r,sheet:new vt({key:r,container:l,nonce:n.nonce,speedy:n.speedy,prepend:n.prepend,insertionPoint:n.insertionPoint}),nonce:n.nonce,inserted:a,registered:{},insert:p};return k.sheet.hydrate(d),k},Zt=D.createContext(typeof HTMLElement<"u"?Vt({key:"css"}):null);Zt.Provider;var qt=D.createContext({});function Gt(e){return Object.keys(e).length===0}function Jt(e=null){const n=D.useContext(qt);return!n||Gt(n)?e:n}function _e(e,n){const r=ee({},n);return Object.keys(e).forEach(i=>{if(i.toString().match(/^(components|slots)$/))r[i]=ee({},e[i],r[i]);else if(i.toString().match(/^(componentsProps|slotProps)$/)){const o=e[i]||{},a=n[i];r[i]={},!a||!Object.keys(a)?r[i]=o:!o||!Object.keys(o)?r[i]=a:(r[i]=ee({},a),Object.keys(o).forEach(l=>{r[i][l]=_e(o[l],a[l])}))}else r[i]===void 0&&(r[i]=e[i])}),r}function Xt(e){const{theme:n,name:r,props:i}=e;return!n||!n.components||!n.components[r]||!n.components[r].defaultProps?i:_e(n.components[r].defaultProps,i)}const en=typeof window<"u"?D.useLayoutEffect:D.useEffect,tn=en;function nn(e,n,r,i,o){const[a,l]=D.useState(()=>o&&r?r(e).matches:i?i(e).matches:n);return tn(()=>{let d=!0;if(!r)return;const p=r(e),b=()=>{d&&l(p.matches)};return b(),p.addListener(b),()=>{d=!1,p.removeListener(b)}},[e,r]),a}const We=et["useSyncExternalStore"];function rn(e,n,r,i,o){const a=D.useCallback(()=>n,[n]),l=D.useMemo(()=>{if(o&&r)return()=>r(e).matches;if(i!==null){const{matches:c}=i(e);return()=>c}return a},[a,e,i,o,r]),[d,p]=D.useMemo(()=>{if(r===null)return[a,()=>()=>{}];const c=r(e);return[()=>c.matches,w=>(c.addListener(w),()=>{c.removeListener(w)})]},[a,r,e]);return We(p,d,l)}function He(e,n={}){const r=Jt(),i=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:o=!1,matchMedia:a=i?window.matchMedia:null,ssrMatchMedia:l=null,noSsr:d=!1}=Xt({name:"MuiUseMediaQuery",props:n,theme:r});let p=typeof e=="function"?e(r):e;return p=p.replace(/^@media( ?)/m,""),(We!==void 0?rn:nn)(p,o,a,l,d)}const Ue=h.div`
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
`,Ye=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Qe=h.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,Fe=h.div`
  &:hover span {
    color: ${s.orange};
  }
`,Ke=h.span`
color: ${s.orange};
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
`,sn=h.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`,U=h.li`
    color: ${s.orange};

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
`,L=h.li`
  @media screen and (max-width: 375px) {
    width: 100%;

    &:first-of-type {
        color: ${s.orange};

      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      color: ${s.white};
      border-radius: 12px;
      border: 1px solid ${s.green};
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
        color: ${s.orange};

      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(4) {
        color: ${s.white};
      border-radius: 12px;
      border: 1px solid ${s.green};
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
        color: ${s.orange};

      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
        color: ${s.white};
      border-radius: 12px;
      border: 1px solid ${s.green};
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
        color: ${s.orange};

      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(4) {
        color: ${s.white};
      border-radius: 12px;
      border: 1px solid ${s.green};
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
`,Y=h.li`
  @media screen and (min-width: 768px) {
    color: ${s.white};
      border-radius: 12px;
      border: 1px solid ${s.green};
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
`,qe=h.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        color: ${s.orange};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${s.white};
      border-radius: 12px;
      border: 1px solid ${s.green};
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
`,Ge=h.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        color: ${s.orange};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${s.white};
      border-radius: 12px;
      border: 1px solid ${s.green};
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
`,Je=h.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        color: ${s.orange};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${s.white};
      border-radius: 12px;
      border: 1px solid ${s.green};
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
`,Xe=h.div`
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
        color: ${s.orange};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        margin-top: 18px;
      }
    }
  }
`,le=h.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0;
  position: relative;

  &:hover {
    > svg {
      stroke: ${s.orange};
    }
  }
`,xe=h.svg`
  stroke: ${s.orange};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;
`,Ee=h.span`
  @media screen and (min-width: 320px) {
    color: ${s.white};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,on=e=>e.diary.allDiaryInformation,an=e=>e.diary.isLoading,ke=e=>e.diary.error,dn=({productsArray:e,date:n})=>{const r=ye(),o=N(Ie).blood,a=N(ke),l=He("(max-width:768px)"),d=c=>c[0].toUpperCase()+c.slice(1).toLowerCase();let p;const b=async c=>{try{await r(tt(c)),await r(be(n))}catch{de.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return t.jsxs(Ue,{children:[t.jsxs(Ye,{children:[t.jsx(Qe,{children:"Products"}),t.jsx(Fe,{children:t.jsxs(Pe,{to:"/products",style:{display:"flex",alignItems:"center"},children:[t.jsx(Ke,{children:"Add product"}),t.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:s.orange},children:t.jsx("use",{href:v+"#icon-arrow"})})]})})]}),e&&e.length>0&&!a?l?t.jsx(he,{children:t.jsx(pe,{children:e.map(c=>{const w=c.productId.groupBloodNotAllowed[o]?p="Yes":p="No";return t.jsxs(Te,{children:[t.jsx(L,{children:"Title"}),t.jsx(L,{children:d(c.productId.title)}),t.jsx(L,{children:"Category"}),t.jsx(L,{children:d(c.productId.category)}),t.jsxs(Ze,{children:[t.jsxs(qe,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(L,{children:"Calories"}),t.jsx(L,{children:c.calories})]}),t.jsxs(Ge,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(L,{children:"Weight"}),t.jsx(L,{children:c.amount})]}),t.jsxs(Je,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(L,{children:"Recommend"}),t.jsx(L,{children:t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[t.jsx("svg",{style:{width:"14px",height:"14px"},children:w==="Yes"?t.jsx("use",{href:v+"#icon-Ellipse-82",style:{fill:s.green,stroke:s.green}}):t.jsx("use",{href:v+"#icon-Ellipse-82",style:{fill:s.red,stroke:s.red}})}),t.jsx(Ee,{children:p})]})})]}),t.jsxs(Xe,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(L,{children:""}),t.jsx(L,{children:t.jsx(le,{type:"button",onClick:()=>b(c._id),children:t.jsx(xe,{children:t.jsx("use",{href:v+"#icon-trash-03"})})})})]})]})]},c._id)})})}):t.jsxs(he,{children:[t.jsxs(sn,{children:[t.jsx(U,{children:"Title"}),t.jsx(U,{children:"Category"}),t.jsx(U,{children:"Calories"}),t.jsx(U,{children:"Weight"}),t.jsx(U,{children:"Recommend"}),t.jsx(U,{children:""})]}),t.jsx(pe,{children:e.map(c=>{const w=c.productId.groupBloodNotAllowed[o]?p="Yes":p="No";return t.jsxs(Te,{children:[t.jsx(Y,{children:d(c.productId.title)}),t.jsx(Y,{children:d(c.productId.category)}),t.jsx(Y,{children:c.calories}),t.jsx(Y,{children:c.amount}),t.jsx(Y,{children:t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[t.jsx("svg",{style:{width:"14px",height:"14px"},children:w==="Yes"?t.jsx("use",{href:v+"#icon-Ellipse-82",style:{fill:s.green,stroke:s.green}}):t.jsx("use",{href:v+"#icon-Ellipse-82",style:{fill:s.red,stroke:s.red}})}),t.jsx(Ee,{children:p})]})}),t.jsx(Y,{children:t.jsx(le,{type:"button",onClick:()=>b(c._id),children:t.jsx(xe,{children:t.jsx("use",{href:v+"#icon-trash-03"})})})})]},c._id)})})]}):t.jsx(Ve,{children:"Not found products"})]})},cn=h.ul`
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
  color: ${s.orange};
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
`,ze=h.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,E=h.li`
  @media screen and (max-width: 375px) {
    width: 100%;
    margin-bottom: 8px;

    &:first-of-type {
      color: ${s.orange};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(2) {
      color: ${s.white};
      border-radius: 12px;
      border: 1px solid ${s.green};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(3) {
      color: ${s.orange};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(4) {
      color: ${s.white};
      border-radius: 12px;
      border: 1px solid ${s.green};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(5) {
      color: ${s.orange};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(6) {
      color: ${s.white};
      border-radius: 12px;
      border: 1px solid ${s.green};
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
      color: ${s.orange};
      font-size: 12px;
      line-height: 1.5;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      color: ${s.white};
      border-radius: 12px;
      border: 1px solid ${s.green};
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
      color: ${s.orange};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(4) {
        color: ${s.white};
      border-radius: 12px;
      border: 1px solid ${s.green};
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
      color: ${s.orange};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(6) {
        color: ${s.white};
      border-radius: 12px;
      border: 1px solid ${s.green};
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
    color: ${s.white};
      border-radius: 12px;
      border: 1px solid ${s.green};
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
`,hn=({exercisesArray:e,date:n})=>{const r=He("(max-width:768px)"),i=N(ke),o=ye(),a=d=>d[0].toUpperCase()+d.slice(1).toLowerCase(),l=async d=>{try{await o(nt(d)),await o(be(n))}catch(p){console.log(p),de.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return t.jsxs(Ue,{children:[t.jsxs(Ye,{children:[t.jsx(Qe,{children:"Exercises"}),t.jsx(Fe,{children:t.jsxs(Pe,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[t.jsx(Ke,{children:"Add exercises"}),t.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:s.orange},children:t.jsx("use",{href:v+"#icon-arrow"})})]})})]}),e&&e.length>0&&!i?r?t.jsx(he,{children:t.jsx(pe,{children:e.map(d=>t.jsxs(ze,{children:[t.jsx(E,{children:"Body Part"}),t.jsx(E,{children:a(d.exerciseId.bodyPart)}),t.jsx(E,{children:"Equipment"}),t.jsx(E,{children:a(d.exerciseId.equipment)}),t.jsx(E,{children:"Name"}),t.jsx(E,{children:a(d.exerciseId.name)}),t.jsxs(Ze,{children:[t.jsxs(qe,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(E,{children:"Target"}),t.jsx(E,{children:a(d.exerciseId.target)})]}),t.jsxs(Ge,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(E,{children:"Burned Calories"}),t.jsx(E,{children:d.calories})]}),t.jsxs(Je,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(E,{children:"Time"}),t.jsx(E,{children:d.time})]}),t.jsxs(Xe,{style:{display:"flex",flexDirection:"column"},children:[t.jsx(E,{children:""}),t.jsx(E,{children:t.jsx(le,{type:"button",onClick:()=>l(d._id),children:t.jsx(xe,{children:t.jsx("use",{href:v+"#icon-trash-03"})})})})]})]})]},d._id))})}):t.jsxs(he,{children:[t.jsxs(cn,{children:[t.jsx(_,{children:"Body Part"}),t.jsx(_,{children:"Equipment"}),t.jsx(_,{children:"Name"}),t.jsx(_,{children:"Target"}),t.jsx(_,{children:"Burned Calories"}),t.jsx(_,{children:"Time"}),t.jsx(_,{children:""})]}),t.jsx(pe,{children:e.map(d=>t.jsxs(ze,{children:[t.jsx(W,{children:a(d.exerciseId.bodyPart)}),t.jsx(W,{children:a(d.exerciseId.equipment)}),t.jsx(W,{children:a(d.exerciseId.name)}),t.jsx(W,{children:a(d.exerciseId.target)}),t.jsx(W,{children:d.calories}),t.jsx(W,{children:d.time}),t.jsx(W,{children:t.jsx(le,{type:"button",onClick:()=>l(d._id),children:t.jsx(xe,{children:t.jsx("use",{href:v+"#icon-trash-03"})})})})]},d._id))})]}):t.jsx(Ve,{children:"Not found exercises"})]})},pn=h.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,ln=h.ul`
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
      background-color: ${s.orange};
    }

    &:nth-child(2) {
      background-color: ${s.orange};
    }
  }
`,Q=h.li`
  display: block;
  width: 157px;
  padding: 14px;
  background-color: ${s.beige};
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
`,F=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,K=h.h2`
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 18px;
  }
`,V=h.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,xn=h.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,fn=h.div`
  width: 24px;
  height: 24px;
  background-color: ${s.beige};
  border-radius: 50%;
`,Z=h.svg`
  width: 20px;
  height: 20px;
  fill: ${s.orangeSecond};
`,gn=h.svg`
  width: 24px;
  height: 24px;
`,wn=h.p`
  font-size: 14px;
  line-height: 18px;
  color: ${s.green};

  @media screen and (max-width: 374px) {
    max-width: calc(100% - 72px);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,un=({userDiaryInformation:e,bmr:n})=>{const{burnedCalories:r,consumedCalories:i,remainingCalories:o,remainingSports:a}=e,[l,d]=D.useState(!1),p=N(ke);return D.useEffect(()=>{o<0&&d(!0)},[o]),t.jsxs(pn,{children:[t.jsxs(ln,{children:[t.jsxs(Q,{children:[t.jsxs(F,{children:[t.jsx(Z,{children:t.jsx("use",{href:v+"#icon-fluent_food-24-filled"})}),t.jsx(K,{children:"Daily calory intake"})]}),t.jsx(V,{children:n&&n!==null&&n!==0?n:2200})]}),t.jsxs(Q,{children:[t.jsxs(F,{children:[t.jsx(Z,{children:t.jsx("use",{href:v+"#icon-dumbbell"})}),t.jsx(K,{children:"Daily norm of sports"})]}),t.jsx(V,{children:"110 min"})]}),t.jsxs(Q,{children:[t.jsxs(F,{children:[t.jsx(Z,{children:t.jsx("use",{href:v+"#icon-fluent_food-apple-20-filled"})}),t.jsx(K,{children:"Calories consumed"})]}),t.jsx(V,{children:i&&!p?i:0})]}),t.jsxs(Q,{children:[t.jsxs(F,{children:[t.jsx(Z,{children:t.jsx("use",{href:v+"#icon-calories-1"})}),t.jsx(K,{children:"Calories burned"})]}),t.jsx(V,{children:r&&!p?r:0})]}),t.jsxs(Q,{className:l?"redBg":"",children:[t.jsxs(F,{children:[t.jsx(Z,{children:t.jsx("use",{href:v+"#icon-bubble"})}),t.jsx(K,{children:"The rest of the calories"})]}),t.jsx(V,{children:o&&!p?o:n||0})]}),t.jsxs(Q,{className:l?"greenBg":"",children:[t.jsxs(F,{children:[t.jsx(Z,{children:t.jsx("use",{href:v+"#icon-running-figure"})}),t.jsx(K,{children:"The rest of sports"})]}),t.jsxs(V,{children:[a&&!p?a:110," min"]})]})]}),t.jsxs(xn,{children:[t.jsx(fn,{children:t.jsx(gn,{children:t.jsx("use",{href:v+"#icon-running-stick-figure-svgrepo-com-1"})})}),t.jsx(wn,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},mn=h.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,yn=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,bn=h.div`
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
`,jn=h.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,vn=h.div`
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
`,Dn=()=>{const e=ye(),n=N(on),r=N(an),i=N(it),o=N(rt),{addProducts:a,addExercises:l}=n,[d,p]=D.useState(new Date),c=N(Ie).createdAt,w=k=>{const u=new Date(k),m=String(u.getDate()).padStart(2,"0"),x=String(u.getMonth()+1).padStart(2,"0"),j=u.getFullYear();return`${m}-${x}-${j}`},C=w(d),P=w(c);return D.useEffect(()=>{(async()=>{try{await e(ot()),await e(be(C))}catch{ct.error("Sorry, something went wrong, please try again",{theme:"dark"})}})()},[e,C,d]),t.jsx(vn,{children:r||i?t.jsx(st,{}):t.jsxs(mn,{children:[t.jsxs(yn,{children:[t.jsx(ht,{title:"Diary"}),t.jsx(yt,{currentDate:d,setCurrentDate:p,userDateRegistration:P})]}),t.jsxs(jn,{children:[t.jsx(un,{userDiaryInformation:n,bmr:o}),t.jsxs(bn,{children:[t.jsx(dn,{productsArray:a,date:C}),t.jsx(hn,{exercisesArray:l,date:C})]})]})]})})};export{Dn as default};
