(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8692:function(e,r,n){"use strict";function t(e,r,n,t,a,i,l){try{var s=e[i](l),c=s.value}catch(o){return void n(o)}s.done?r(c):Promise.resolve(c).then(t,a)}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function i(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,i=[],l=!0,s=!1;try{for(n=n.call(e);!(l=(t=n.next()).done)&&(i.push(t.value),!r||i.length!==r);l=!0);}catch(c){s=!0,a=c}finally{try{l||null==n.return||n.return()}finally{if(s)throw a}}return i}}(e,r)||function(e,r){if(e){if("string"===typeof e)return a(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(r),n.d(r,{default:function(){return Re}});var l=n(7794),s=n.n(l),c=n(3256),o=n(9703),d=n(7294),u=n(4697);function m(){return m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},m.apply(this,arguments)}function p(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}var h=["htmlWidth","htmlHeight","alt"],f=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"],E=d.forwardRef((function(e,r){var n=e.htmlWidth,t=e.htmlHeight,a=e.alt,i=p(e,h);return d.createElement("img",m({width:n,height:t,ref:r,alt:a},i))})),v=(0,c.Gp)((function(e,r){var n=e.fallbackSrc,t=e.fallback,a=e.src,i=e.srcSet,l=e.align,s=e.fit,h=e.loading,v=e.ignoreFallback,x=e.crossOrigin,_=e.fallbackStrategy,g=void 0===_?"beforeLoadOrError":_,P=e.referrerPolicy,T=p(e,f),S=null!=h||v||!(void 0!==n||void 0!==t),b=function(e){var r=e.loading,n=e.src,t=e.srcSet,a=e.onLoad,i=e.onError,l=e.crossOrigin,s=e.sizes,c=e.ignoreFallback,o=(0,d.useState)("pending"),m=o[0],p=o[1];(0,d.useEffect)((function(){p(n?"loading":"pending")}),[n]);var h=(0,d.useRef)(),f=(0,d.useCallback)((function(){if(n){E();var e=new Image;e.src=n,l&&(e.crossOrigin=l),t&&(e.srcset=t),s&&(e.sizes=s),r&&(e.loading=r),e.onload=function(e){E(),p("loaded"),null==a||a(e)},e.onerror=function(e){E(),p("failed"),null==i||i(e)},h.current=e}}),[n,l,t,s,a,i,r]),E=function(){h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return(0,u.a)((function(){if(!c)return"loading"===m&&f(),function(){E()}}),[m,f,c]),c?"loaded":m}(m({},e,{ignoreFallback:S})),j=function(e,r){return"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r}(b,g),y=m({ref:r,objectFit:s,objectPosition:l},S?T:(0,o.CE)(T,["onError","onLoad"]));return j?t||d.createElement(c.m$.img,m({as:E,className:"chakra-image__placeholder",src:n},y)):d.createElement(c.m$.img,m({as:E,src:a,srcSet:i,crossOrigin:x,loading:h,referrerPolicy:P,className:"chakra-image"},y))}));o.Ts&&(v.displayName="Image");var x=n(7375),_=n(8527),g=[{timestamp:1659876e6,markPrices:{ETHUSD_220930:1685.21,ETHUSD_221230:1657.74,ETHUSD_PERP:1695.48}},{timestamp:165991848e4,markPrices:{ETHUSD_220930:1701.12,ETHUSD_221230:1670.14,ETHUSD_PERP:1713.06}},{timestamp:165995814e4,markPrices:{ETHUSD_220930:1759.54,ETHUSD_221230:1725.68,ETHUSD_PERP:1770.68}},{timestamp:1660011359005,markPrices:{ETHUSD_220930:1749.55833019,ETHUSD_221230:1716.1359141,ETHUSD_PERP:1763.00310968}},{timestamp:1660015568e3,markPrices:{ETHUSD_220930:1767.02965781,ETHUSD_221230:1733.11187096,ETHUSD_PERP:1778.60633566}},{timestamp:1660023193e3,markPrices:{ETHUSD_220930:1765.61334977,ETHUSD_221230:1731.67510727,ETHUSD_PERP:1777.46}},{timestamp:1660030732e3,markPrices:{ETHUSD_220930:1766.23133355,ETHUSD_221230:1732.50568173,ETHUSD_PERP:1778.66134592}},{timestamp:1660033794011,markPrices:{ETHUSD_220930:1762.1691233,ETHUSD_221230:1729.53547366,ETHUSD_PERP:1775.01}},{timestamp:1660035110007,markPrices:{ETHUSD_220930:1759.99895697,ETHUSD_221230:1727.46384171,ETHUSD_PERP:1772.79841934}},{timestamp:1660041561e3,markPrices:{ETHUSD_220930:1701.97870154,ETHUSD_221230:1670.12141351,ETHUSD_PERP:1718.55}},{timestamp:166004274e4,markPrices:{ETHUSD_220930:1693.39409733,ETHUSD_221230:1662.34731488,ETHUSD_PERP:1714.46}},{timestamp:1660046882e3,markPrices:{ETHUSD_220930:1675.91510453,ETHUSD_221230:1644.30946564,ETHUSD_PERP:1700.53502268}},{timestamp:1660049921015,markPrices:{ETHUSD_220930:1683.45679473,ETHUSD_221230:1652.8187686,ETHUSD_PERP:1706.84512007}},{timestamp:1660051492012,markPrices:{ETHUSD_220930:1688.01662488,ETHUSD_221230:1657.00655455,ETHUSD_PERP:1711.3}},{timestamp:1660060330009,markPrices:{ETHUSD_220930:1661.17874813,ETHUSD_221230:1631.51887466,ETHUSD_PERP:1686.24031559}}],P=n(9238);function T(){return T=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},T.apply(this,arguments)}function S(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}var b=["className"],j=["placement"],y=["isNumeric"],H=["isNumeric"],U=(0,c.Gp)((function(e,r){var n=(0,c.jC)("Table",e),t=(0,c.Lr)(e),a=t.className,i=S(t,b);return d.createElement(c.Fo,{value:n},d.createElement(c.m$.table,T({role:"table",ref:r,__css:n.table,className:(0,o.cx)("chakra-table",a)},i)))}));o.Ts&&(U.displayName="Table");var k=(0,c.Gp)((function(e,r){var n=e.placement,t=void 0===n?"bottom":n,a=S(e,j),i=(0,c.yK)();return d.createElement(c.m$.caption,T({},a,{ref:r,__css:T({},i.caption,{captionSide:t})}))}));o.Ts&&(k.displayName="TableCaption");var D=(0,c.Gp)((function(e,r){var n=(0,c.yK)();return d.createElement(c.m$.thead,T({},e,{ref:r,__css:n.thead}))})),N=(0,c.Gp)((function(e,r){var n=(0,c.yK)();return d.createElement(c.m$.tbody,T({},e,{ref:r,__css:n.tbody}))})),R=(0,c.Gp)((function(e,r){var n=e.isNumeric,t=S(e,y),a=(0,c.yK)();return d.createElement(c.m$.th,T({},t,{ref:r,__css:a.th,"data-is-numeric":n}))})),I=(0,c.Gp)((function(e,r){var n=(0,c.yK)();return d.createElement(c.m$.tr,T({role:"row"},e,{ref:r,__css:n.tr}))})),O=(0,c.Gp)((function(e,r){var n=e.isNumeric,t=S(e,H),a=(0,c.yK)();return d.createElement(c.m$.td,T({role:"gridcell"},t,{ref:r,__css:a.td,"data-is-numeric":n}))})),C=n(7203),$=n.n(C),w=n(5893),F=function(e){return(Math.round(100*e)/100).toLocaleString()},G=function(e){var r=e.ethUsdLog;return(0,w.jsxs)(U,{className:$().tableContainer,children:[(0,w.jsx)(k,{children:new Date(r.timestamp).toLocaleString(void 0,{timeZoneName:"short"})}),(0,w.jsx)(D,{children:(0,w.jsxs)(I,{children:[(0,w.jsx)(R,{children:"symbol"}),(0,w.jsx)(R,{children:"mark price"}),(0,w.jsx)(R,{children:"diff"}),(0,w.jsx)(R,{children:"diff rate"})]})}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(I,{children:[(0,w.jsx)(O,{children:"ETHUSD_220930"}),(0,w.jsxs)(O,{children:["$",F(r.markPrices.ETHUSD_220930)]}),(0,w.jsxs)(O,{children:["$",F(r.markPrices.ETHUSD_PERP-r.markPrices.ETHUSD_220930)]}),(0,w.jsxs)(O,{children:[F(100*(1-r.markPrices.ETHUSD_220930/r.markPrices.ETHUSD_PERP)),"%"]})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)(O,{children:"ETHUSD_221230"}),(0,w.jsxs)(O,{children:["$",F(r.markPrices.ETHUSD_220930)]}),(0,w.jsxs)(O,{children:["$",F(r.markPrices.ETHUSD_PERP-r.markPrices.ETHUSD_221230)]}),(0,w.jsxs)(O,{children:[F(100*(1-r.markPrices.ETHUSD_221230/r.markPrices.ETHUSD_PERP)),"%"]})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)(O,{children:"ETHUSD_PERP"}),(0,w.jsxs)(O,{children:["$",F(r.markPrices.ETHUSD_PERP)]}),(0,w.jsx)(O,{textAlign:"center",children:"-"}),(0,w.jsx)(O,{textAlign:"center",children:"-"})]})]})]})},L=n(6309),q=n.n(L),A=function(e){return(Math.round(100*e)/100).toLocaleString()},z=function(e){var r=e.ethUsdLogs;return(0,w.jsxs)(U,{className:q().tableContainer,children:[(0,w.jsx)(D,{children:(0,w.jsxs)(I,{children:[(0,w.jsx)(R,{children:"ETHUSD_PERP"}),(0,w.jsx)(R,{children:"ETHUSD_220930"}),(0,w.jsx)(R,{children:"ETHUSD_221230"})]})}),(0,w.jsx)(N,{children:r.sort((function(e,r){return r.timestamp-e.timestamp})).map((function(e,r){return(0,w.jsxs)(d.Fragment,{children:[(0,w.jsx)(I,{children:(0,w.jsx)(O,{className:q().time,colSpan:3,children:new Date(e.timestamp).toLocaleString(void 0,{timeZoneName:"short"})})}),(0,w.jsxs)(I,{children:[(0,w.jsxs)(O,{textAlign:"center",paddingTop:"0",children:["$",A(e.markPrices.ETHUSD_PERP)]}),(0,w.jsxs)(O,{textAlign:"right",paddingTop:"0",lineHeight:"1.2em",children:["$",A(e.markPrices.ETHUSD_220930),(0,w.jsx)("br",{}),(0,w.jsxs)("small",{children:["-$",A(e.markPrices.ETHUSD_PERP-e.markPrices.ETHUSD_220930)]}),(0,w.jsx)("br",{}),(0,w.jsxs)("small",{children:[A(100*(1-e.markPrices.ETHUSD_220930/e.markPrices.ETHUSD_PERP)),"%"]})]}),(0,w.jsxs)(O,{textAlign:"right",paddingTop:"0",lineHeight:"1.2em",children:["$",A(e.markPrices.ETHUSD_221230),(0,w.jsx)("br",{}),(0,w.jsxs)("small",{children:["-$",A(e.markPrices.ETHUSD_PERP-e.markPrices.ETHUSD_221230)]}),(0,w.jsx)("br",{}),(0,w.jsxs)("small",{children:[A(100*(1-e.markPrices.ETHUSD_221230/e.markPrices.ETHUSD_PERP)),"%"]})]})]})]},"EthUsdLogsTable-Tr-".concat(r))}))})]})};var B=n(6450),M=n(894);function K(){return K=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},K.apply(this,arguments)}function Z(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}var X=["id","isRequired","isInvalid","isDisabled","isReadOnly"],Q=["getRootProps","htmlProps"],W=(0,B.kr)({strict:!1,name:"FormControlContext"}),V=W[0],J=W[1];var Y=(0,c.Gp)((function(e,r){var n=(0,c.jC)("Form",e),t=function(e){var r=e.id,n=e.isRequired,t=e.isInvalid,a=e.isDisabled,i=e.isReadOnly,l=Z(e,X),s=(0,x.Me)(),c=r||"field-"+s,u=c+"-label",m=c+"-feedback",p=c+"-helptext",h=d.useState(!1),f=h[0],E=h[1],v=d.useState(!1),_=v[0],g=v[1],P=(0,x.kt)(),T=P[0],S=P[1],b=d.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),K({id:p},e,{ref:(0,B.lq)(r,(function(e){e&&g(!0)}))})}),[p]),j=d.useCallback((function(e,r){var n,l;return void 0===e&&(e={}),void 0===r&&(r=null),K({},e,{ref:r,"data-focus":(0,o.PB)(T),"data-disabled":(0,o.PB)(a),"data-invalid":(0,o.PB)(t),"data-readonly":(0,o.PB)(i),id:null!=(n=e.id)?n:u,htmlFor:null!=(l=e.htmlFor)?l:c})}),[c,a,T,t,i,u]),y=d.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),K({id:m},e,{ref:(0,B.lq)(r,(function(e){e&&E(!0)})),"aria-live":"polite"})}),[m]),H=d.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),K({},e,l,{ref:r,role:"group"})}),[l]),U=d.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),K({},e,{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!t,isReadOnly:!!i,isDisabled:!!a,isFocused:!!T,onFocus:S.on,onBlur:S.off,hasFeedbackText:f,setHasFeedbackText:E,hasHelpText:_,setHasHelpText:g,id:c,labelId:u,feedbackId:m,helpTextId:p,htmlProps:l,getHelpTextProps:b,getErrorMessageProps:y,getRootProps:H,getLabelProps:j,getRequiredIndicatorProps:U}}((0,c.Lr)(e)),a=t.getRootProps;t.htmlProps;var i=Z(t,Q),l=(0,o.cx)("chakra-form-control",e.className);return d.createElement(V,{value:i},d.createElement(c.Fo,{value:n},d.createElement(c.m$.div,K({},a({},r),{className:l,__css:n.container}))))}));o.Ts&&(Y.displayName="FormControl");var ee=(0,c.Gp)((function(e,r){var n=J(),t=(0,c.yK)(),a=(0,o.cx)("chakra-form__helper-text",e.className);return d.createElement(c.m$.div,K({},null==n?void 0:n.getHelpTextProps(e,r),{__css:t.helperText,className:a}))}));o.Ts&&(ee.displayName="FormHelperText");var re=["isDisabled","isInvalid","isReadOnly","isRequired"],ne=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function te(e){var r=function(e){var r,n,t,a=J(),i=e.id,l=e.disabled,s=e.readOnly,c=e.required,d=e.isRequired,u=e.isInvalid,m=e.isReadOnly,p=e.isDisabled,h=e.onFocus,f=e.onBlur,E=Z(e,ne),v=e["aria-describedby"]?[e["aria-describedby"]]:[];null!=a&&a.hasFeedbackText&&null!=a&&a.isInvalid&&v.push(a.feedbackId);null!=a&&a.hasHelpText&&v.push(a.helpTextId);return K({},E,{"aria-describedby":v.join(" ")||void 0,id:null!=i?i:null==a?void 0:a.id,isDisabled:null!=(r=null!=l?l:p)?r:null==a?void 0:a.isDisabled,isReadOnly:null!=(n=null!=s?s:m)?n:null==a?void 0:a.isReadOnly,isRequired:null!=(t=null!=c?c:d)?t:null==a?void 0:a.isRequired,isInvalid:null!=u?u:null==a?void 0:a.isInvalid,onFocus:(0,o.v0)(null==a?void 0:a.onFocus,h),onBlur:(0,o.v0)(null==a?void 0:a.onBlur,f)})}(e),n=r.isDisabled,t=r.isInvalid,a=r.isReadOnly,i=r.isRequired;return K({},Z(r,re),{disabled:n,readOnly:a,required:i,"aria-invalid":(0,o.Qm)(t),"aria-required":(0,o.Qm)(i),"aria-readonly":(0,o.Qm)(a)})}var ae=(0,c.Gp)((function(e,r){var n=(0,c.jC)("FormError",e),t=(0,c.Lr)(e),a=J();return null!=a&&a.isInvalid?d.createElement(c.Fo,{value:n},d.createElement(c.m$.div,K({},null==a?void 0:a.getErrorMessageProps(t,r),{className:(0,o.cx)("chakra-form__error-message",e.className),__css:K({display:"flex",alignItems:"center"},n.text)}))):null}));o.Ts&&(ae.displayName="FormErrorMessage");var ie=(0,c.Gp)((function(e,r){var n=(0,c.yK)(),t=J();if(null==t||!t.isInvalid)return null;var a=(0,o.cx)("chakra-form__error-icon",e.className);return d.createElement(M.ZP,K({ref:r,"aria-hidden":!0},e,{__css:n.icon,className:a}),d.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));o.Ts&&(ie.displayName="FormErrorIcon");var le=["className","children","requiredIndicator","optionalIndicator"],se=(0,c.Gp)((function(e,r){var n,t=(0,c.mq)("FormLabel",e),a=(0,c.Lr)(e);a.className;var i=a.children,l=a.requiredIndicator,s=void 0===l?d.createElement(ce,null):l,u=a.optionalIndicator,m=void 0===u?null:u,p=Z(a,le),h=J(),f=null!=(n=null==h?void 0:h.getLabelProps(p,r))?n:K({ref:r},p);return d.createElement(c.m$.label,K({},f,{className:(0,o.cx)("chakra-form__label",a.className),__css:K({display:"block",textAlign:"start"},t)}),i,null!=h&&h.isRequired?s:m)}));o.Ts&&(se.displayName="FormLabel");var ce=(0,c.Gp)((function(e,r){var n=J(),t=(0,c.yK)();if(null==n||!n.isRequired)return null;var a=(0,o.cx)("chakra-form__required-indicator",e.className);return d.createElement(c.m$.span,K({},null==n?void 0:n.getRequiredIndicatorProps(e,r),{__css:t.requiredIndicator,className:a}))}));function oe(){return oe=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},oe.apply(this,arguments)}function de(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}o.Ts&&(ce.displayName="RequiredIndicator");var ue=["htmlSize"],me=(0,c.Gp)((function(e,r){var n=e.htmlSize,t=de(e,ue),a=(0,c.jC)("Input",t),i=te((0,c.Lr)(t)),l=(0,o.cx)("chakra-input",e.className);return d.createElement(c.m$.input,oe({size:n},i,{__css:a.field,ref:r,className:l}))}));o.Ts&&(me.displayName="Input"),me.id="Input";var pe=["placement"],he={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},fe=(0,c.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),Ee=(0,c.Gp)((function(e,r){var n,t=e.placement,a=void 0===t?"left":t,i=de(e,pe),l=null!=(n=he[a])?n:{},s=(0,c.yK)();return d.createElement(fe,oe({ref:r},i,{__css:oe({},s.addon,l)}))}));o.Ts&&(Ee.displayName="InputAddon");var ve=(0,c.Gp)((function(e,r){return d.createElement(Ee,oe({ref:r,placement:"left"},e,{className:(0,o.cx)("chakra-input__left-addon",e.className)}))}));o.Ts&&(ve.displayName="InputLeftAddon"),ve.id="InputLeftAddon";var xe=(0,c.Gp)((function(e,r){return d.createElement(Ee,oe({ref:r,placement:"right"},e,{className:(0,o.cx)("chakra-input__right-addon",e.className)}))}));o.Ts&&(xe.displayName="InputRightAddon"),xe.id="InputRightAddon";var _e=["children","className"],ge=(0,c.Gp)((function(e,r){var n=(0,c.jC)("Input",e),t=(0,c.Lr)(e),a=t.children,i=t.className,l=de(t,_e),s=(0,o.cx)("chakra-input__group",i),u={},m=(0,B.WR)(a),p=n.field;m.forEach((function(e){if(n){var r,t;if(p&&"InputLeftElement"===e.type.id)u.paddingStart=null!=(r=p.height)?r:p.h;if(p&&"InputRightElement"===e.type.id)u.paddingEnd=null!=(t=p.height)?t:p.h;"InputRightAddon"===e.type.id&&(u.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(u.borderStartRadius=0)}}));var h=m.map((function(r){var n,t,a=(0,o.YU)({size:(null==(n=r.props)?void 0:n.size)||e.size,variant:(null==(t=r.props)?void 0:t.variant)||e.variant});return"Input"!==r.type.id?d.cloneElement(r,a):d.cloneElement(r,Object.assign(a,u,r.props))}));return d.createElement(c.m$.div,oe({className:s,ref:r,__css:{width:"100%",display:"flex",position:"relative"}},l),d.createElement(c.Fo,{value:n},h))}));o.Ts&&(ge.displayName="InputGroup");var Pe=["placement"],Te=["className"],Se=["className"],be=(0,c.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),je=(0,c.Gp)((function(e,r){var n,t,a,i=e.placement,l=void 0===i?"left":i,s=de(e,Pe),o=(0,c.yK)(),u=o.field,m=oe(((a={})["left"===l?"insetStart":"insetEnd"]="0",a.width=null!=(n=null==u?void 0:u.height)?n:null==u?void 0:u.h,a.height=null!=(t=null==u?void 0:u.height)?t:null==u?void 0:u.h,a.fontSize=null==u?void 0:u.fontSize,a),o.element);return d.createElement(be,oe({ref:r,__css:m},s))}));je.id="InputElement",o.Ts&&(je.displayName="InputElement");var ye=(0,c.Gp)((function(e,r){var n=e.className,t=de(e,Te),a=(0,o.cx)("chakra-input__left-element",n);return d.createElement(je,oe({ref:r,placement:"left",className:a},t))}));ye.id="InputLeftElement",o.Ts&&(ye.displayName="InputLeftElement");var He=(0,c.Gp)((function(e,r){var n=e.className,t=de(e,Se),a=(0,o.cx)("chakra-input__right-element",n);return d.createElement(je,oe({ref:r,placement:"right",className:a},t))}));He.id="InputRightElement",o.Ts&&(He.displayName="InputRightElement");var Ue=n(5004),ke=n.n(Ue),De=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),(0,w.jsxs)(_.gC,{spacing:"4",className:ke().container,children:[(0,w.jsx)(_.xv,{color:"#aa0000",fontSize:"16px",children:"Win $xxx,xxx"}),(0,w.jsxs)(_.Ug,{spacing:"4",children:[(0,w.jsx)(_.xv,{className:ke().label,children:"ETHUSD_220930"}),(0,w.jsxs)(ge,{className:ke().inputGroup,children:[(0,w.jsx)(ve,{children:"price $"}),(0,w.jsx)(me,{placeholder:"1702.20",className:ke().entryPrice})]}),(0,w.jsxs)(ge,{className:ke().inputGroup,children:[(0,w.jsx)(me,{placeholder:"100"}),(0,w.jsx)(xe,{children:"ETH"})]})]}),(0,w.jsxs)(_.Ug,{spacing:"4",children:[(0,w.jsx)(_.xv,{className:ke().label,children:"ETHUSD_221230"}),(0,w.jsxs)(ge,{className:ke().inputGroup,children:[(0,w.jsx)(ve,{children:"price $"}),(0,w.jsx)(me,{placeholder:"1692.20",className:ke().entryPrice})]}),(0,w.jsxs)(ge,{className:ke().inputGroup,children:[(0,w.jsx)(me,{placeholder:"25"}),(0,w.jsx)(xe,{children:"ETH"})]})]}),(0,w.jsxs)(_.Ug,{spacing:"4",children:[(0,w.jsx)(_.xv,{className:ke().label,children:"ETHUSD_PERP"}),(0,w.jsxs)(ge,{className:ke().inputGroup,children:[(0,w.jsx)(ve,{children:"price $"}),(0,w.jsx)(me,{placeholder:"1712.84",className:ke().entryPrice})]}),(0,w.jsxs)(ge,{className:ke().inputGroup,children:[(0,w.jsx)(me,{placeholder:"100"}),(0,w.jsx)(xe,{children:"ETH"})]})]}),(0,w.jsxs)(_.Ug,{spacing:"4",children:[(0,w.jsx)(_.xv,{className:ke().label,children:"Deposit"}),(0,w.jsxs)(ge,{className:ke().inputGroup,children:[(0,w.jsx)(ve,{children:"price $"}),(0,w.jsx)(me,{placeholder:"1712.84",className:ke().entryPrice})]}),(0,w.jsxs)(ge,{className:ke().inputGroup,children:[(0,w.jsx)(me,{placeholder:"25"}),(0,w.jsx)(xe,{children:"ETH"})]})]})]})},Ne="/saya-chan//_next/static/media/ETH.012b71ad.png",Re=function(){var e,r=i((0,x.Tx)({defaultValue:null}),2),n=r[0],a=r[1],l=i((0,x.Tx)({defaultValue:!0}),2),c=l[0],o=l[1],u=function(){var r,n=(r=s().mark((function r(){return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:clearTimeout(e),fetch("https://dapi.binance.com/dapi/v1/premiumIndex").then((function(e){return e.json()})).then((function(e){var r=e.find((function(e){return"ETHUSD_220930"===e.symbol})),n=e.find((function(e){return"ETHUSD_221230"===e.symbol})),t=e.find((function(e){return"ETHUSD_PERP"===e.symbol}));a({timestamp:r.time,markPrices:{ETHUSD_220930:r.markPrice,ETHUSD_221230:n.markPrice,ETHUSD_PERP:t.markPrice}}),o(!1)})).finally((function(){e=setTimeout(u,1e4)}));case 2:case"end":return r.stop()}}),r)})),function(){var e=this,n=arguments;return new Promise((function(a,i){var l=r.apply(e,n);function s(e){t(l,a,i,s,c,"next",e)}function c(e){t(l,a,i,s,c,"throw",e)}s(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,d.useEffect)((function(){u()}),[]),(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(_.gC,{spacing:"10",children:[(0,w.jsxs)(_.X6,{as:"h1",mt:"10",children:[(0,w.jsxs)(_.kC,{fontSize:"28px",alignItems:"center",children:[(0,w.jsx)(v,{src:Ne,marginRight:".3em",alt:"ETH-logo",height:"28px"}),"Saya-chan"]}),(0,w.jsx)(_.xv,{fontSize:"14px",color:"#888",children:"~poweth checker~"})]}),(0,w.jsxs)(_.gC,{spacing:"4",children:[(0,w.jsx)(_.X6,{as:"h2",fontSize:"20px",children:"Current mark price (Binance)"}),c||!n?(0,w.jsx)(P.$,{}):(0,w.jsx)(G,{ethUsdLog:n})]}),(0,w.jsxs)(_.gC,{spacing:"4",maxWidth:"350px",children:[(0,w.jsx)(_.X6,{as:"h2",fontSize:"20px",children:"My position (entries)"}),(0,w.jsx)(De,{})]}),(0,w.jsxs)(_.gC,{spacing:"4",children:[(0,w.jsx)(_.X6,{as:"h2",fontSize:"24px",children:"Mark price history (Binance)"}),(0,w.jsx)(z,{ethUsdLogs:g})]})]})})}},8312:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8692)}])},5004:function(e){e.exports={container:"Entries_container__gsvJw",label:"Entries_label__nZyHE",inputGroup:"Entries_inputGroup__Z8FlB",entryPrice:"Entries_entryPrice__QjQAm"}},7203:function(e){e.exports={tableContainer:"EthUsdLogTable_tableContainer__E4E87"}},6309:function(e){e.exports={tableContainer:"EthUsdLogsTable_tableContainer__FzvC2",time:"EthUsdLogsTable_time__O4U5A"}}},function(e){e.O(0,[774,888,179],(function(){return r=8312,e(e.s=r);var r}));var r=e.O();_N_E=r}]);