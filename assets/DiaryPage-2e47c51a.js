import{u as h,h as c,r as k,j as n,s as D,i as xt,a as Ce,k as W,m as We,n as He,o as ft,p as xe,q as fe,t as ut,v as gt,w as wt,L as mt,e as yt}from"./index-867b2692.js";import{f as bt,D as jt}from"./Datapicker-a70863c2.js";import{T as vt}from"./TitlePage-4189ee96.js";const kt=h.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,$t=h.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;

  &:hover {
    > svg {
      fill: ${c.orange};
    }
  }
`,Dt=h.p`
  font-size: 24px;
  line-height: 1.33;
  margin: 0;
  padding: 0;
  color: ${c.white};
  font-weight: 700;
  transition: color 0.3s ease;

  &:hover {
    color: ${c.orange};
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.1;
  }
`,St=h.svg`
  width: 20px;
  height: 20px;
  stroke: ${c.orange};

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
      stroke: ${c.orange};
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
      fill: ${c.orange};
    }
  }
`,Et=h.svg`
  width: 100%;
  height: 100%;
  fill: ${c.white};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,Tt=h.svg`
  width: 100%;
  height: 100%;
  fill: ${c.white};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`,zt=({currentDate:e,setCurrentDate:t,userDateRegistration:r})=>{const[i,s]=k.useState(e),[o,p]=k.useState(!1),a=()=>{p(!o)},l=()=>{const x=new Date(i);x.setDate(x.getDate()-1),t(x),s(x)},f=()=>{const x=new Date(i);x.setDate(x.getDate()+1),t(x),s(x)},d=()=>{p(!1)};return n.jsxs(kt,{children:[n.jsxs(Ct,{onClick:a,children:[n.jsx(Dt,{children:bt(i,"dd/MM/yyyy")}),n.jsx(St,{children:n.jsx("use",{href:`${D}#icon-calendar-orange`})})]}),n.jsx(It,{type:"button",onClick:l,children:n.jsx(Et,{children:n.jsx("use",{href:`${D}#icon-chevron-left`})})}),n.jsx($t,{type:"button",onClick:f,children:n.jsx(Tt,{children:n.jsx("use",{href:`${D}#icon-chevron-right`})})}),n.jsx(jt,{selectedDate:i,setSelectedDate:s,isOpen:o,onClose:d,setCurrentDate:t,userDateRegistration:r})]})};function ne(){return ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},ne.apply(this,arguments)}function At(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Pt(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Lt=function(){function e(r){var i=this;this._insertTag=function(s){var o;i.tags.length===0?i.insertionPoint?o=i.insertionPoint.nextSibling:i.prepend?o=i.container.firstChild:o=i.before:o=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(s,o),i.tags.push(s)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(i){i.forEach(this._insertTag)},t.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Pt(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var o=At(s);try{o.insertRule(i,o.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(i));this.ctr++},t.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},e}(),z="-ms-",ue="-moz-",u="-webkit-",Ue="comm",Ie="rule",Ee="decl",Mt="@import",Qe="@keyframes",Ot="@layer",Rt=Math.abs,je=String.fromCharCode,Bt=Object.assign;function Nt(e,t){return E(e,0)^45?(((t<<2^E(e,0))<<2^E(e,1))<<2^E(e,2))<<2^E(e,3):0}function Ye(e){return e.trim()}function _t(e,t){return(e=t.exec(e))?e[0]:e}function g(e,t,r){return e.replace(t,r)}function $e(e,t){return e.indexOf(t)}function E(e,t){return e.charCodeAt(t)|0}function se(e,t,r){return e.slice(t,r)}function R(e){return e.length}function Te(e){return e.length}function ce(e,t){return t.push(e),e}function Wt(e,t){return e.map(t).join("")}var ve=1,X=1,Fe=0,P=0,S=0,ee="";function ke(e,t,r,i,s,o,p){return{value:e,root:t,parent:r,type:i,props:s,children:o,line:ve,column:X,length:p,return:""}}function te(e,t){return Bt(ke("",null,null,"",null,null,0),e,{length:-e.length},t)}function Ht(){return S}function Ut(){return S=P>0?E(ee,--P):0,X--,S===10&&(X=1,ve--),S}function L(){return S=P<Fe?E(ee,P++):0,X++,S===10&&(X=1,ve++),S}function N(){return E(ee,P)}function he(){return P}function ae(e,t){return se(ee,e,t)}function oe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ke(e){return ve=X=1,Fe=R(ee=e),P=0,[]}function Ve(e){return ee="",e}function pe(e){return Ye(ae(P-1,De(e===91?e+2:e===40?e+1:e)))}function Qt(e){for(;(S=N())&&S<33;)L();return oe(e)>2||oe(S)>3?"":" "}function Yt(e,t){for(;--t&&L()&&!(S<48||S>102||S>57&&S<65||S>70&&S<97););return ae(e,he()+(t<6&&N()==32&&L()==32))}function De(e){for(;L();)switch(S){case e:return P;case 34:case 39:e!==34&&e!==39&&De(S);break;case 40:e===41&&De(e);break;case 92:L();break}return P}function Ft(e,t){for(;L()&&e+S!==47+10;)if(e+S===42+42&&N()===47)break;return"/*"+ae(t,P-1)+"*"+je(e===47?e:L())}function Kt(e){for(;!oe(N());)L();return ae(e,P)}function Vt(e){return Ve(le("",null,null,null,[""],e=Ke(e),0,[0],e))}function le(e,t,r,i,s,o,p,a,l){for(var f=0,d=0,x=p,$=0,C=0,v=0,w=1,T=1,m=1,j=0,I="",Q=s,_=o,O=i,y=I;T;)switch(v=j,j=L()){case 40:if(v!=108&&E(y,x-1)==58){$e(y+=g(pe(j),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:y+=pe(j);break;case 9:case 10:case 13:case 32:y+=Qt(v);break;case 92:y+=Yt(he()-1,7);continue;case 47:switch(N()){case 42:case 47:ce(Zt(Ft(L(),he()),t,r),l);break;default:y+="/"}break;case 123*w:a[f++]=R(y)*m;case 125*w:case 59:case 0:switch(j){case 0:case 125:T=0;case 59+d:m==-1&&(y=g(y,/\f/g,"")),C>0&&R(y)-x&&ce(C>32?Le(y+";",i,r,x-1):Le(g(y," ","")+";",i,r,x-2),l);break;case 59:y+=";";default:if(ce(O=Pe(y,t,r,f,d,s,a,I,Q=[],_=[],x),o),j===123)if(d===0)le(y,t,O,O,Q,o,x,a,_);else switch($===99&&E(y,3)===110?100:$){case 100:case 108:case 109:case 115:le(e,O,O,i&&ce(Pe(e,O,O,0,0,s,a,I,s,Q=[],x),_),s,_,x,a,i?Q:_);break;default:le(y,O,O,O,[""],_,0,a,_)}}f=d=C=0,w=m=1,I=y="",x=p;break;case 58:x=1+R(y),C=v;default:if(w<1){if(j==123)--w;else if(j==125&&w++==0&&Ut()==125)continue}switch(y+=je(j),j*w){case 38:m=d>0?1:(y+="\f",-1);break;case 44:a[f++]=(R(y)-1)*m,m=1;break;case 64:N()===45&&(y+=pe(L())),$=N(),d=x=R(I=y+=Kt(he())),j++;break;case 45:v===45&&R(y)==2&&(w=0)}}return o}function Pe(e,t,r,i,s,o,p,a,l,f,d){for(var x=s-1,$=s===0?o:[""],C=Te($),v=0,w=0,T=0;v<i;++v)for(var m=0,j=se(e,x+1,x=Rt(w=p[v])),I=e;m<C;++m)(I=Ye(w>0?$[m]+" "+j:g(j,/&\f/g,$[m])))&&(l[T++]=I);return ke(e,t,r,s===0?Ie:a,l,f,d)}function Zt(e,t,r){return ke(e,t,r,Ue,je(Ht()),se(e,2,-2),0)}function Le(e,t,r,i){return ke(e,t,r,Ee,se(e,0,i),se(e,i+1,-1),i)}function J(e,t){for(var r="",i=Te(e),s=0;s<i;s++)r+=t(e[s],s,e,t)||"";return r}function qt(e,t,r,i){switch(e.type){case Ot:if(e.children.length)break;case Mt:case Ee:return e.return=e.return||e.value;case Ue:return"";case Qe:return e.return=e.value+"{"+J(e.children,i)+"}";case Ie:e.value=e.props.join(",")}return R(r=J(e.children,i))?e.return=e.value+"{"+r+"}":""}function Gt(e){var t=Te(e);return function(r,i,s,o){for(var p="",a=0;a<t;a++)p+=e[a](r,i,s,o)||"";return p}}function Jt(e){return function(t){t.root||(t=t.return)&&e(t)}}var Xt=function(t,r,i){for(var s=0,o=0;s=o,o=N(),s===38&&o===12&&(r[i]=1),!oe(o);)L();return ae(t,P)},en=function(t,r){var i=-1,s=44;do switch(oe(s)){case 0:s===38&&N()===12&&(r[i]=1),t[i]+=Xt(P-1,r,i);break;case 2:t[i]+=pe(s);break;case 4:if(s===44){t[++i]=N()===58?"&\f":"",r[i]=t[i].length;break}default:t[i]+=je(s)}while(s=L());return t},tn=function(t,r){return Ve(en(Ke(t),r))},Me=new WeakMap,nn=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,i=t.parent,s=t.column===i.column&&t.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!Me.get(i))&&!s){Me.set(t,!0);for(var o=[],p=tn(r,o),a=i.props,l=0,f=0;l<p.length;l++)for(var d=0;d<a.length;d++,f++)t.props[f]=o[l]?p[l].replace(/&\f/g,a[d]):a[d]+" "+p[l]}}},rn=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function Ze(e,t){switch(Nt(e,t)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+ue+e+z+e+e;case 6828:case 4268:return u+e+z+e+e;case 6165:return u+e+z+"flex-"+e+e;case 5187:return u+e+g(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+z+"flex-$1$2")+e;case 5443:return u+e+z+"flex-item-"+g(e,/flex-|-self/,"")+e;case 4675:return u+e+z+"flex-line-pack"+g(e,/align-content|flex-|-self/,"")+e;case 5548:return u+e+z+g(e,"shrink","negative")+e;case 5292:return u+e+z+g(e,"basis","preferred-size")+e;case 6060:return u+"box-"+g(e,"-grow","")+u+e+z+g(e,"grow","positive")+e;case 4554:return u+g(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return g(g(g(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return g(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return g(g(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4095:case 3583:case 4068:case 2532:return g(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(R(e)-1-t>6)switch(E(e,t+1)){case 109:if(E(e,t+4)!==45)break;case 102:return g(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+ue+(E(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~$e(e,"stretch")?Ze(g(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(E(e,t+1)!==115)break;case 6444:switch(E(e,R(e)-3-(~$e(e,"!important")&&10))){case 107:return g(e,":",":"+u)+e;case 101:return g(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+u+(E(e,14)===45?"inline-":"")+"box$3$1"+u+"$2$3$1"+z+"$2box$3")+e}break;case 5936:switch(E(e,t+11)){case 114:return u+e+z+g(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+z+g(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+z+g(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return u+e+z+e+e}return e}var sn=function(t,r,i,s){if(t.length>-1&&!t.return)switch(t.type){case Ee:t.return=Ze(t.value,t.length);break;case Qe:return J([te(t,{value:g(t.value,"@","@"+u)})],s);case Ie:if(t.length)return Wt(t.props,function(o){switch(_t(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return J([te(t,{props:[g(o,/:(read-\w+)/,":"+ue+"$1")]})],s);case"::placeholder":return J([te(t,{props:[g(o,/:(plac\w+)/,":"+u+"input-$1")]}),te(t,{props:[g(o,/:(plac\w+)/,":"+ue+"$1")]}),te(t,{props:[g(o,/:(plac\w+)/,z+"input-$1")]})],s)}return""})}},on=[sn],an=function(t){var r=t.key;if(r==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(w){var T=w.getAttribute("data-emotion");T.indexOf(" ")!==-1&&(document.head.appendChild(w),w.setAttribute("data-s",""))})}var s=t.stylisPlugins||on,o={},p,a=[];p=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(w){for(var T=w.getAttribute("data-emotion").split(" "),m=1;m<T.length;m++)o[T[m]]=!0;a.push(w)});var l,f=[nn,rn];{var d,x=[qt,Jt(function(w){d.insert(w)})],$=Gt(f.concat(s,x)),C=function(T){return J(Vt(T),$)};l=function(T,m,j,I){d=j,C(T?T+"{"+m.styles+"}":m.styles),I&&(v.inserted[m.name]=!0)}}var v={key:r,sheet:new Lt({key:r,container:p,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return v.sheet.hydrate(a),v},cn=k.createContext(typeof HTMLElement<"u"?an({key:"css"}):null);cn.Provider;var dn=k.createContext({});function hn(e){return Object.keys(e).length===0}function pn(e=null){const t=k.useContext(dn);return!t||hn(t)?e:t}function qe(e,t){const r=ne({},t);return Object.keys(e).forEach(i=>{if(i.toString().match(/^(components|slots)$/))r[i]=ne({},e[i],r[i]);else if(i.toString().match(/^(componentsProps|slotProps)$/)){const s=e[i]||{},o=t[i];r[i]={},!o||!Object.keys(o)?r[i]=s:!s||!Object.keys(s)?r[i]=o:(r[i]=ne({},o),Object.keys(s).forEach(p=>{r[i][p]=qe(s[p],o[p])}))}else r[i]===void 0&&(r[i]=e[i])}),r}function ln(e){const{theme:t,name:r,props:i}=e;return!t||!t.components||!t.components[r]||!t.components[r].defaultProps?i:qe(t.components[r].defaultProps,i)}const xn=typeof window<"u"?k.useLayoutEffect:k.useEffect,fn=xn;function un(e,t,r,i,s){const[o,p]=k.useState(()=>s&&r?r(e).matches:i?i(e).matches:t);return fn(()=>{let a=!0;if(!r)return;const l=r(e),f=()=>{a&&p(l.matches)};return f(),l.addListener(f),()=>{a=!1,l.removeListener(f)}},[e,r]),o}const Ge=xt["useSyncExternalStore"];function gn(e,t,r,i,s){const o=k.useCallback(()=>t,[t]),p=k.useMemo(()=>{if(s&&r)return()=>r(e).matches;if(i!==null){const{matches:d}=i(e);return()=>d}return o},[o,e,i,s,r]),[a,l]=k.useMemo(()=>{if(r===null)return[o,()=>()=>{}];const d=r(e);return[()=>d.matches,x=>(d.addListener(x),()=>{d.removeListener(x)})]},[o,r,e]);return Ge(l,a,p)}function Je(e,t={}){const r=pn(),i=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:s=!1,matchMedia:o=i?window.matchMedia:null,ssrMatchMedia:p=null,noSsr:a=!1}=ln({name:"MuiUseMediaQuery",props:t,theme:r});let l=typeof e=="function"?e(r):e;return l=l.replace(/^@media( ?)/m,""),(Ge!==void 0?gn:un)(l,s,o,p,a)}const Xe=h.div`
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
    color: ${c.orange};
  }
`,it=h.span`
color: ${c.orange};
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
    color: ${c.orange};

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
`,Oe=h.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,M=h.li`
  @media screen and (max-width: 375px) {
    width: 100%;

    &:first-of-type {
        color: ${c.orange};

      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      color: ${c.white};
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
        color: ${c.orange};

      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(4) {
        color: ${c.white};
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
        color: ${c.orange};

      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
        color: ${c.white};
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
        color: ${c.orange};

      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(4) {
        color: ${c.white};
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
    color: ${c.white};
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
        color: ${c.orange};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${c.white};
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
        color: ${c.orange};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${c.white};
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
        color: ${c.orange};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${c.white};
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
        color: ${c.orange};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        margin-top: 18px;
      }
    }
  }
`,me=h.button`
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0;
  position: relative;

  &:hover {
    > svg {
      stroke: ${c.orange};
    }
  }
`,ye=h.svg`
  stroke: ${c.orange};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;

`,Re=h.span`
  @media screen and (min-width: 320px) {
    color: ${c.white};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,mn=e=>e.diary.isLoading,ze=e=>e.diary.error,yn=({productsArray:e,date:t})=>{const r=Ce(),s=W(We).blood,o=W(ze),p=Je("(max-width:768px)"),a=d=>typeof d!="string"||d.length===0?"":d[0].toUpperCase()+d.slice(1).toLowerCase();let l;const f=async d=>{try{await r(ft(d)),await r(xe(t)),fe.Notify.success("Product deleted successfully!",{theme:"light"})}catch(x){console.log(x),fe.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return n.jsxs(Xe,{children:[n.jsxs(et,{children:[n.jsx(tt,{children:"Products"}),n.jsx(nt,{children:n.jsxs(He,{to:"/products",style:{display:"flex",alignItems:"center"},children:[n.jsx(it,{children:"Add product"}),n.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:c.orange},children:n.jsx("use",{href:D+"#icon-arrow-right"})})]})})]}),e&&e.length>0&&!o?p?n.jsx(ge,{children:n.jsx(we,{children:e.map(d=>{var $,C;const x=d.productID.groupBloodNotAllowed[s]?"Yes":"No";return n.jsxs(Oe,{children:[n.jsx(M,{children:"Title"}),n.jsx(M,{children:a(($=d.productID)==null?void 0:$.title)}),n.jsx(M,{children:"Category"}),n.jsx(M,{children:a((C=d.productID)==null?void 0:C.category)}),n.jsxs(st,{children:[n.jsxs(ot,{style:{display:"flex",flexDirection:"column"},children:[n.jsx(M,{children:"Calories"}),n.jsx(M,{children:d.calories})]}),n.jsxs(at,{style:{display:"flex",flexDirection:"column"},children:[n.jsx(M,{children:"Weight"}),n.jsx(M,{children:d.amount})]}),n.jsxs(ct,{style:{display:"flex",flexDirection:"column"},children:[n.jsx(M,{children:"Recommend"}),n.jsx(M,{children:n.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[n.jsx("svg",{style:{width:"14px",height:"14px"},children:x==="Yes"?n.jsx("use",{href:D+"#icon-bubble",style:{fill:`${c.green}`,stroke:c.green}}):n.jsx("use",{href:D+"#icon-bubble",style:{fill:c.red,stroke:c.red}})}),n.jsx(Re,{children:l})]})})]}),n.jsxs(dt,{style:{display:"flex",flexDirection:"column"},children:[n.jsx(M,{children:""}),n.jsx(M,{children:n.jsx(me,{type:"button",onClick:()=>f(d._id),children:n.jsx(ye,{children:n.jsx("use",{href:D+"#icon-trash"})})})})]})]})]},d._id)})})}):n.jsxs(ge,{children:[n.jsxs(wn,{children:[n.jsx(Y,{children:"Title"}),n.jsx(Y,{children:"Category"}),n.jsx(Y,{children:"Calories"}),n.jsx(Y,{children:"Weight"}),n.jsx(Y,{children:"Recommend"}),n.jsx(Y,{children:""})]}),n.jsx(we,{children:e.map(d=>{var $,C,v;const x=($=d.productID)!=null&&$.groupBloodNotAllowed[s]?l="Yes":l="No";return n.jsxs(Oe,{children:[n.jsx(F,{children:a((C=d.productID)==null?void 0:C.title)}),n.jsx(F,{children:a((v=d.productID)==null?void 0:v.category)}),n.jsx(F,{children:d.calories}),n.jsx(F,{children:d.amount}),n.jsx(F,{children:n.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[n.jsx("svg",{style:{width:"14px",height:"14px"},children:x==="Yes"?n.jsx("use",{href:D+"#icon-bubble",style:{fill:c.green,stroke:c.green}}):n.jsx("use",{href:D+"#icon-bubble",style:{fill:c.red,stroke:c.red}})}),n.jsx(Re,{children:l})]})}),n.jsx(F,{children:n.jsx(me,{type:"button",onClick:()=>f(d._id),children:n.jsx(ye,{children:n.jsx("use",{href:D+"#icon-trash"})})})})]},d._id)})})]}):n.jsx(rt,{children:"Not found products"})]})},bn=h.ul`
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
  color: ${c.orange};
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
      color: ${c.orange};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(2) {
      color: ${c.white};
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
      color: ${c.orange};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(4) {
      color: ${c.white};
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
      color: ${c.orange};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(6) {
      color: ${c.white};
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
      color: ${c.orange};
      font-size: 12px;
      line-height: 1.5;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      color: ${c.white};
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
      color: ${c.orange};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(4) {
        color: ${c.white};
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
      color: ${c.orange};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(6) {
        color: ${c.white};
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
    color: ${c.white};
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
  stroke: ${c.orange};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;

`;const jn=({exercisesArray:e,date:t})=>{const r=Je("(max-width:768px)"),i=W(ze),s=Ce(),o=a=>a.charAt(0).toUpperCase()+a.slice(1).toLowerCase(),p=async a=>{try{await s(ut(a)),await s(xe(t)),fe.Notify.success("Exercise deleted successfully!",{theme:"light"})}catch(l){console.log(l),fe.Notify.failure("Sorry, something went wrong, please try again",{theme:"dark"})}};return n.jsxs(Xe,{children:[n.jsxs(et,{children:[n.jsx(tt,{children:"Exercises"}),n.jsx(nt,{children:n.jsxs(He,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[n.jsx(it,{children:"Add exercises"}),n.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:c.orange},children:n.jsx("use",{href:D+"#icon-arrow-right"})})]})})]}),e&&e.length>0&&!i?r?n.jsx(ge,{children:n.jsx(we,{children:e.map(a=>{var l,f,d,x;return n.jsxs(Be,{children:[n.jsx(A,{children:"Body Part"}),n.jsx(A,{children:o((l=a.exerciseID)==null?void 0:l.bodyPart)}),n.jsx(A,{children:"Equipment"}),n.jsx(A,{children:o((f=a.exerciseID)==null?void 0:f.equipment)}),n.jsx(A,{children:"Name"}),n.jsx(A,{children:o((d=a.exerciseID)==null?void 0:d.name)}),n.jsxs(st,{children:[n.jsxs(ot,{children:[n.jsx(A,{children:"Target"}),n.jsx(A,{children:o((x=a.exerciseID)==null?void 0:x.target)})]}),n.jsxs(at,{children:[n.jsx(A,{children:"Burned Calories"}),n.jsx(A,{children:a.calories})]}),n.jsxs(ct,{children:[n.jsx(A,{children:"Time"}),n.jsx(A,{children:a.time})]}),n.jsxs(dt,{children:[n.jsx(A,{children:""}),n.jsx(A,{children:n.jsx(me,{type:"button",onClick:()=>p(a._id),children:n.jsx(ye,{children:n.jsx("use",{href:D+"#icon-trash"})})})})]})]})]},a._id)})})}):n.jsxs(ge,{children:[n.jsxs(bn,{children:[n.jsx(H,{children:"Body Part"}),n.jsx(H,{children:"Equipment"}),n.jsx(H,{children:"Name"}),n.jsx(H,{children:"Target"}),n.jsx(H,{children:"Burned Calories"}),n.jsx(H,{children:"Time"}),n.jsx(H,{children:""})]}),n.jsx(we,{children:e.map(a=>n.jsxs(Be,{children:[n.jsx(U,{children:o(a.exerciseID.bodyPart)}),n.jsx(U,{children:o(a.exerciseID.equipment)}),n.jsx(U,{children:o(a.exerciseID.name)}),n.jsx(U,{children:o(a.exerciseID.target)}),n.jsx(U,{children:a.calories}),n.jsx(U,{children:a.time}),n.jsx(U,{children:n.jsx(me,{type:"button",onClick:()=>p(a._id),children:n.jsx(ye,{children:n.jsx("use",{href:D+"#icon-trash"})})})})]},a._id))})]}):n.jsx(rt,{children:"Not found exercises"})]})},vn=h.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,kn=h.ul`
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
      background-color: ${c.orange};
    }

    &:nth-child(2) {
      background-color: ${c.orange};
    }
  }
`,K=h.li`
  display: block;
  width: 157px;
  padding: 14px;
  background-color: ${c.black};
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
`,V=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,Z=h.h2`
  font-size: 12px;
  line-height: 16px;
  color: ${c.white};

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 18px;
  }
`,q=h.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: ${c.white};


  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,$n=h.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Dn=h.div`
  width: 24px;
  height: 24px;
  background-color: ${c.beige};
  border-radius: 50%;
`,G=h.svg`
  width: 20px;
  height: 20px;
  fill: ${c.orangeSecond};
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
`,In=({userDiaryInformation:e,bmr:t})=>{const{burnedCalories:r,consumedCalories:i,remainingSports:s}=e,[o,p]=k.useState(!1),[a,l]=k.useState(!1),f=Math.round(i-r,0);return W(ze),k.useEffect(()=>{p(f<0),l(s<0)},[f,s]),n.jsxs(vn,{children:[n.jsxs(kn,{children:[n.jsxs(K,{children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:`${D}#icon-fork-knife`})}),n.jsx(Z,{children:"Daily calorie intake"})]}),n.jsx(q,{children:t||2200})]}),n.jsxs(K,{children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:D+"#icon-dumbbell"})}),n.jsx(Z,{children:"Daily norm of sports"})]}),n.jsx(q,{children:"110 min"})]}),n.jsxs(K,{children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:D+"#icon-apple"})}),n.jsx(Z,{children:"Calories consumed"})]}),n.jsx(q,{children:Math.round(i,0)||0})]}),n.jsxs(K,{children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:D+"#icon-fire"})}),n.jsx(Z,{children:"Calories burned"})]}),n.jsx(q,{children:r||0})]}),n.jsxs(K,{className:o?"greenBg":f<0?"redBg":"",children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:D+"#icon-bubble"})}),n.jsx(Z,{children:"The rest of the calories"})]}),n.jsx(q,{children:f||t||0})]}),n.jsxs(K,{className:a?"greenBg":"",children:[n.jsxs(V,{children:[n.jsx(G,{children:n.jsx("use",{href:D+"#icon-running-figure"})}),n.jsx(Z,{children:"The rest of sports"})]}),n.jsxs(q,{children:[s||110," min"]})]})]}),n.jsxs($n,{children:[n.jsx(Dn,{children:n.jsx(Sn,{children:n.jsx("use",{href:D+"#icon-running-stick-figure-svgrepo-com-1"})})}),n.jsx(Cn,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},En=h.div`
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
`,Ae=e=>typeof e=="number"&&!isNaN(e),ie=e=>typeof e=="string",ht=e=>typeof e=="function",Ln=e=>k.isValidElement(e)||ie(e)||ht(e)||Ae(e),B=new Map;let Se=[];const Ne=new Set,pt=()=>B.size>0;function Mn(e,t){var r;if(t)return!((r=B.get(t))==null||!r.isToastActive(e));let i=!1;return B.forEach(s=>{s.isToastActive(e)&&(i=!0)}),i}function On(e,t){Ln(e)&&(pt()||Se.push({content:e,options:t}),B.forEach(r=>{r.buildToast(e,t)}))}function _e(e,t){B.forEach(r=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===r.id&&r.toggle(e,t==null?void 0:t.id):r.toggle(e,t==null?void 0:t.id)})}let Rn=1;const lt=()=>""+Rn++;function Bn(e){return e&&(ie(e.toastId)||Ae(e.toastId))?e.toastId:lt()}function re(e,t){return On(e,t),t.toastId}function be(e,t){return{...t,type:t&&t.type||e,toastId:Bn(t)}}function de(e){return(t,r)=>re(t,be(e,r))}function b(e,t){return re(e,be("default",t))}b.loading=(e,t)=>re(e,be("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),b.promise=function(e,t,r){let i,{pending:s,error:o,success:p}=t;s&&(i=ie(s)?b.loading(s,r):b.loading(s.render,{...r,...s}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(d,x,$)=>{if(x==null)return void b.dismiss(i);const C={type:d,...a,...r,data:$},v=ie(x)?{render:x}:x;return i?b.update(i,{...C,...v}):b(v.render,{...C,...v}),$},f=ht(e)?e():e;return f.then(d=>l("success",p,d)).catch(d=>l("error",o,d)),f},b.success=de("success"),b.info=de("info"),b.error=de("error"),b.warning=de("warning"),b.warn=b.warning,b.dark=(e,t)=>re(e,be("default",{theme:"dark",...t})),b.dismiss=function(e){(function(t){var r;if(pt()){if(t==null||ie(r=t)||Ae(r))B.forEach(s=>{s.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){var i;(i=B.get(t.containerId))!=null&&i.removeToast(t.id)||B.forEach(s=>{s.removeToast(t.id)})}}else Se=Se.filter(s=>t!=null&&s.options.toastId!==t)})(e)},b.clearWaitingQueue=function(e){e===void 0&&(e={}),B.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},b.isActive=Mn,b.update=function(e,t){t===void 0&&(t={});const r=((i,s)=>{var o;let{containerId:p}=s;return(o=B.get(p||1))==null?void 0:o.toasts.get(i)})(e,t);if(r){const{props:i,content:s}=r,o={delay:100,...i,...t,toastId:t.toastId||e,updateId:lt()};o.toastId!==e&&(o.staleId=e);const p=o.render||s;delete o.render,re(p,o)}},b.done=e=>{b.update(e,{progress:1})},b.onChange=function(e){return Ne.add(e),()=>{Ne.delete(e)}},b.play=e=>_e(!0,e),b.pause=e=>_e(!1,e);const Hn=()=>{const[e,t]=k.useState(new Date),i=W(We).createdAt,s=Ce(),o=W(mn),p=W(gt),a=W(wt);k.useEffect(()=>{const m=async()=>{try{await s(yt()),await s(xe(j))}catch{b.error("Sorry! Something went wrong, try latter!",{theme:"dark"})}},j=l(e);m()},[s,e]),k.useEffect(()=>{(async()=>{const I=await s(xe("06-03-2024"));I.payload&&(d(I.payload),$(I.payload.products),v(I.payload.exercises))})()},[s]);const l=m=>{const j=new Date(m),I=String(j.getDate()).padStart(2,"0"),Q=String(j.getMonth()+1).padStart(2,"0"),_=j.getFullYear();return`${I}-${Q}-${_}`},[f,d]=k.useState([]),[x,$]=k.useState([]),[C,v]=k.useState([]),w=l(e),T=l(i);return n.jsx(Pn,{children:o||p?n.jsx(mt,{}):n.jsxs(En,{children:[n.jsxs(Tn,{children:[n.jsx(vt,{title:"Diary "}),n.jsx(zt,{currentDate:e,setCurrentDate:t,userDateRegistration:T})]}),n.jsxs(An,{children:[n.jsx(In,{userDiaryInformation:f,bmr:a}),n.jsxs(zn,{children:[n.jsx(yn,{productsArray:x,date:w}),n.jsx(jn,{exercisesArray:C,date:w})]})]})]})})};export{Hn as default};
