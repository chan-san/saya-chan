(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8815:function(e,r,n){"use strict";function t(e,r,n,t,i,a,l){try{var s=e[a](l),c=s.value}catch(o){return void n(o)}s.done?r(c):Promise.resolve(c).then(t,i)}function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,i,a=[],l=!0,s=!1;try{for(n=n.call(e);!(l=(t=n.next()).done)&&(a.push(t.value),!r||a.length!==r);l=!0);}catch(c){s=!0,i=c}finally{try{l||null==n.return||n.return()}finally{if(s)throw i}}return a}}(e,r)||function(e,r){if(e){if("string"===typeof e)return i(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(r),n.d(r,{default:function(){return ye}});var l=n(7794),s=n.n(l),c=n(3256),o=n(9703),d=n(7294),u=n(4697);function m(){return m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},m.apply(this,arguments)}function p(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}var f=["htmlWidth","htmlHeight","alt"],h=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"],E=d.forwardRef((function(e,r){var n=e.htmlWidth,t=e.htmlHeight,i=e.alt,a=p(e,f);return d.createElement("img",m({width:n,height:t,ref:r,alt:i},a))})),x=(0,c.Gp)((function(e,r){var n=e.fallbackSrc,t=e.fallback,i=e.src,a=e.srcSet,l=e.align,s=e.fit,f=e.loading,x=e.ignoreFallback,v=e.crossOrigin,_=e.fallbackStrategy,g=void 0===_?"beforeLoadOrError":_,P=e.referrerPolicy,T=p(e,h),S=null!=f||x||!(void 0!==n||void 0!==t),j=function(e){var r=e.loading,n=e.src,t=e.srcSet,i=e.onLoad,a=e.onError,l=e.crossOrigin,s=e.sizes,c=e.ignoreFallback,o=(0,d.useState)("pending"),m=o[0],p=o[1];(0,d.useEffect)((function(){p(n?"loading":"pending")}),[n]);var f=(0,d.useRef)(),h=(0,d.useCallback)((function(){if(n){E();var e=new Image;e.src=n,l&&(e.crossOrigin=l),t&&(e.srcset=t),s&&(e.sizes=s),r&&(e.loading=r),e.onload=function(e){E(),p("loaded"),null==i||i(e)},e.onerror=function(e){E(),p("failed"),null==a||a(e)},f.current=e}}),[n,l,t,s,i,a,r]),E=function(){f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return(0,u.a)((function(){if(!c)return"loading"===m&&h(),function(){E()}}),[m,h,c]),c?"loaded":m}(m({},e,{ignoreFallback:S})),y=function(e,r){return"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r}(j,g),b=m({ref:r,objectFit:s,objectPosition:l},S?T:(0,o.CE)(T,["onError","onLoad"]));return y?t||d.createElement(c.m$.img,m({as:E,className:"chakra-image__placeholder",src:n},b)):d.createElement(c.m$.img,m({as:E,src:i,srcSet:a,crossOrigin:v,loading:f,referrerPolicy:P,className:"chakra-image"},b))}));o.Ts&&(x.displayName="Image");var v=n(7375),_=n(6450),g=n(894);function P(){return P=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},P.apply(this,arguments)}function T(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}var S=["id","isRequired","isInvalid","isDisabled","isReadOnly"],j=["getRootProps","htmlProps"],y=(0,_.kr)({strict:!1,name:"FormControlContext"}),b=y[0],H=y[1];var k=(0,c.Gp)((function(e,r){var n=(0,c.jC)("Form",e),t=function(e){var r=e.id,n=e.isRequired,t=e.isInvalid,i=e.isDisabled,a=e.isReadOnly,l=T(e,S),s=(0,v.Me)(),c=r||"field-"+s,u=c+"-label",m=c+"-feedback",p=c+"-helptext",f=d.useState(!1),h=f[0],E=f[1],x=d.useState(!1),g=x[0],j=x[1],y=(0,v.kt)(),b=y[0],H=y[1],k=d.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),P({id:p},e,{ref:(0,_.lq)(r,(function(e){e&&j(!0)}))})}),[p]),D=d.useCallback((function(e,r){var n,l;return void 0===e&&(e={}),void 0===r&&(r=null),P({},e,{ref:r,"data-focus":(0,o.PB)(b),"data-disabled":(0,o.PB)(i),"data-invalid":(0,o.PB)(t),"data-readonly":(0,o.PB)(a),id:null!=(n=e.id)?n:u,htmlFor:null!=(l=e.htmlFor)?l:c})}),[c,i,b,t,a,u]),U=d.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),P({id:m},e,{ref:(0,_.lq)(r,(function(e){e&&E(!0)})),"aria-live":"polite"})}),[m]),R=d.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),P({},e,l,{ref:r,role:"group"})}),[l]),N=d.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),P({},e,{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!t,isReadOnly:!!a,isDisabled:!!i,isFocused:!!b,onFocus:H.on,onBlur:H.off,hasFeedbackText:h,setHasFeedbackText:E,hasHelpText:g,setHasHelpText:j,id:c,labelId:u,feedbackId:m,helpTextId:p,htmlProps:l,getHelpTextProps:k,getErrorMessageProps:U,getRootProps:R,getLabelProps:D,getRequiredIndicatorProps:N}}((0,c.Lr)(e)),i=t.getRootProps;t.htmlProps;var a=T(t,j),l=(0,o.cx)("chakra-form-control",e.className);return d.createElement(b,{value:a},d.createElement(c.Fo,{value:n},d.createElement(c.m$.div,P({},i({},r),{className:l,__css:n.container}))))}));o.Ts&&(k.displayName="FormControl");var D=(0,c.Gp)((function(e,r){var n=H(),t=(0,c.yK)(),i=(0,o.cx)("chakra-form__helper-text",e.className);return d.createElement(c.m$.div,P({},null==n?void 0:n.getHelpTextProps(e,r),{__css:t.helperText,className:i}))}));o.Ts&&(D.displayName="FormHelperText");var U=["isDisabled","isInvalid","isReadOnly","isRequired"],R=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function N(e){var r=function(e){var r,n,t,i=H(),a=e.id,l=e.disabled,s=e.readOnly,c=e.required,d=e.isRequired,u=e.isInvalid,m=e.isReadOnly,p=e.isDisabled,f=e.onFocus,h=e.onBlur,E=T(e,R),x=e["aria-describedby"]?[e["aria-describedby"]]:[];null!=i&&i.hasFeedbackText&&null!=i&&i.isInvalid&&x.push(i.feedbackId);null!=i&&i.hasHelpText&&x.push(i.helpTextId);return P({},E,{"aria-describedby":x.join(" ")||void 0,id:null!=a?a:null==i?void 0:i.id,isDisabled:null!=(r=null!=l?l:p)?r:null==i?void 0:i.isDisabled,isReadOnly:null!=(n=null!=s?s:m)?n:null==i?void 0:i.isReadOnly,isRequired:null!=(t=null!=c?c:d)?t:null==i?void 0:i.isRequired,isInvalid:null!=u?u:null==i?void 0:i.isInvalid,onFocus:(0,o.v0)(null==i?void 0:i.onFocus,f),onBlur:(0,o.v0)(null==i?void 0:i.onBlur,h)})}(e),n=r.isDisabled,t=r.isInvalid,i=r.isReadOnly,a=r.isRequired;return P({},T(r,U),{disabled:n,readOnly:i,required:a,"aria-invalid":(0,o.Qm)(t),"aria-required":(0,o.Qm)(a),"aria-readonly":(0,o.Qm)(i)})}var I=(0,c.Gp)((function(e,r){var n=(0,c.jC)("FormError",e),t=(0,c.Lr)(e),i=H();return null!=i&&i.isInvalid?d.createElement(c.Fo,{value:n},d.createElement(c.m$.div,P({},null==i?void 0:i.getErrorMessageProps(t,r),{className:(0,o.cx)("chakra-form__error-message",e.className),__css:P({display:"flex",alignItems:"center"},n.text)}))):null}));o.Ts&&(I.displayName="FormErrorMessage");var O=(0,c.Gp)((function(e,r){var n=(0,c.yK)(),t=H();if(null==t||!t.isInvalid)return null;var i=(0,o.cx)("chakra-form__error-icon",e.className);return d.createElement(g.ZP,P({ref:r,"aria-hidden":!0},e,{__css:n.icon,className:i}),d.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));o.Ts&&(O.displayName="FormErrorIcon");var $=["className","children","requiredIndicator","optionalIndicator"],w=(0,c.Gp)((function(e,r){var n,t=(0,c.mq)("FormLabel",e),i=(0,c.Lr)(e);i.className;var a=i.children,l=i.requiredIndicator,s=void 0===l?d.createElement(F,null):l,u=i.optionalIndicator,m=void 0===u?null:u,p=T(i,$),f=H(),h=null!=(n=null==f?void 0:f.getLabelProps(p,r))?n:P({ref:r},p);return d.createElement(c.m$.label,P({},h,{className:(0,o.cx)("chakra-form__label",i.className),__css:P({display:"block",textAlign:"start"},t)}),a,null!=f&&f.isRequired?s:m)}));o.Ts&&(w.displayName="FormLabel");var F=(0,c.Gp)((function(e,r){var n=H(),t=(0,c.yK)();if(null==n||!n.isRequired)return null;var i=(0,o.cx)("chakra-form__required-indicator",e.className);return d.createElement(c.m$.span,P({},null==n?void 0:n.getRequiredIndicatorProps(e,r),{__css:t.requiredIndicator,className:i}))}));function C(){return C=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},C.apply(this,arguments)}function L(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}o.Ts&&(F.displayName="RequiredIndicator");var A=["htmlSize"],q=(0,c.Gp)((function(e,r){var n=e.htmlSize,t=L(e,A),i=(0,c.jC)("Input",t),a=N((0,c.Lr)(t)),l=(0,o.cx)("chakra-input",e.className);return d.createElement(c.m$.input,C({size:n},a,{__css:i.field,ref:r,className:l}))}));o.Ts&&(q.displayName="Input"),q.id="Input";var G=["placement"],z={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},B=(0,c.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),M=(0,c.Gp)((function(e,r){var n,t=e.placement,i=void 0===t?"left":t,a=L(e,G),l=null!=(n=z[i])?n:{},s=(0,c.yK)();return d.createElement(B,C({ref:r},a,{__css:C({},s.addon,l)}))}));o.Ts&&(M.displayName="InputAddon");var K=(0,c.Gp)((function(e,r){return d.createElement(M,C({ref:r,placement:"left"},e,{className:(0,o.cx)("chakra-input__left-addon",e.className)}))}));o.Ts&&(K.displayName="InputLeftAddon"),K.id="InputLeftAddon";var X=(0,c.Gp)((function(e,r){return d.createElement(M,C({ref:r,placement:"right"},e,{className:(0,o.cx)("chakra-input__right-addon",e.className)}))}));o.Ts&&(X.displayName="InputRightAddon"),X.id="InputRightAddon";var Z=["children","className"],Q=(0,c.Gp)((function(e,r){var n=(0,c.jC)("Input",e),t=(0,c.Lr)(e),i=t.children,a=t.className,l=L(t,Z),s=(0,o.cx)("chakra-input__group",a),u={},m=(0,_.WR)(i),p=n.field;m.forEach((function(e){if(n){var r,t;if(p&&"InputLeftElement"===e.type.id)u.paddingStart=null!=(r=p.height)?r:p.h;if(p&&"InputRightElement"===e.type.id)u.paddingEnd=null!=(t=p.height)?t:p.h;"InputRightAddon"===e.type.id&&(u.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(u.borderStartRadius=0)}}));var f=m.map((function(r){var n,t,i=(0,o.YU)({size:(null==(n=r.props)?void 0:n.size)||e.size,variant:(null==(t=r.props)?void 0:t.variant)||e.variant});return"Input"!==r.type.id?d.cloneElement(r,i):d.cloneElement(r,Object.assign(i,u,r.props))}));return d.createElement(c.m$.div,C({className:s,ref:r,__css:{width:"100%",display:"flex",position:"relative"}},l),d.createElement(c.Fo,{value:n},f))}));o.Ts&&(Q.displayName="InputGroup");var W=["placement"],V=["className"],Y=["className"],J=(0,c.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),ee=(0,c.Gp)((function(e,r){var n,t,i,a=e.placement,l=void 0===a?"left":a,s=L(e,W),o=(0,c.yK)(),u=o.field,m=C(((i={})["left"===l?"insetStart":"insetEnd"]="0",i.width=null!=(n=null==u?void 0:u.height)?n:null==u?void 0:u.h,i.height=null!=(t=null==u?void 0:u.height)?t:null==u?void 0:u.h,i.fontSize=null==u?void 0:u.fontSize,i),o.element);return d.createElement(J,C({ref:r,__css:m},s))}));ee.id="InputElement",o.Ts&&(ee.displayName="InputElement");var re=(0,c.Gp)((function(e,r){var n=e.className,t=L(e,V),i=(0,o.cx)("chakra-input__left-element",n);return d.createElement(ee,C({ref:r,placement:"left",className:i},t))}));re.id="InputLeftElement",o.Ts&&(re.displayName="InputLeftElement");var ne=(0,c.Gp)((function(e,r){var n=e.className,t=L(e,Y),i=(0,o.cx)("chakra-input__right-element",n);return d.createElement(ee,C({ref:r,placement:"right",className:i},t))}));ne.id="InputRightElement",o.Ts&&(ne.displayName="InputRightElement");var te=n(8527),ie=[{timestamp:1659876e6,markPrices:{ETHUSD_220930:1685.21,ETHUSD_221230:1657.74,ETHUSD_PERP:1695.48}},{timestamp:165991848e4,markPrices:{ETHUSD_220930:1701.12,ETHUSD_221230:1670.14,ETHUSD_PERP:1713.06}},{timestamp:165995814e4,markPrices:{ETHUSD_220930:1759.54,ETHUSD_221230:1725.68,ETHUSD_PERP:1770.68}},{timestamp:1660011359005,markPrices:{ETHUSD_220930:1749.55833019,ETHUSD_221230:1716.1359141,ETHUSD_PERP:1763.00310968}},{timestamp:1660015568e3,markPrices:{ETHUSD_220930:1767.02965781,ETHUSD_221230:1733.11187096,ETHUSD_PERP:1778.60633566}},{timestamp:1660023193e3,markPrices:{ETHUSD_220930:1765.61334977,ETHUSD_221230:1731.67510727,ETHUSD_PERP:1777.46}},{timestamp:1660030732e3,markPrices:{ETHUSD_220930:1766.23133355,ETHUSD_221230:1732.50568173,ETHUSD_PERP:1778.66134592}},{timestamp:1660033794011,markPrices:{ETHUSD_220930:1762.1691233,ETHUSD_221230:1729.53547366,ETHUSD_PERP:1775.01}},{timestamp:1660035110007,markPrices:{ETHUSD_220930:1759.99895697,ETHUSD_221230:1727.46384171,ETHUSD_PERP:1772.79841934}},{timestamp:1660041561e3,markPrices:{ETHUSD_220930:1701.97870154,ETHUSD_221230:1670.12141351,ETHUSD_PERP:1718.55}},{timestamp:166004274e4,markPrices:{ETHUSD_220930:1693.39409733,ETHUSD_221230:1662.34731488,ETHUSD_PERP:1714.46}},{timestamp:1660046882e3,markPrices:{ETHUSD_220930:1675.91510453,ETHUSD_221230:1644.30946564,ETHUSD_PERP:1700.53502268}},{timestamp:1660049921015,markPrices:{ETHUSD_220930:1683.45679473,ETHUSD_221230:1652.8187686,ETHUSD_PERP:1706.84512007}},{timestamp:1660051492012,markPrices:{ETHUSD_220930:1688.01662488,ETHUSD_221230:1657.00655455,ETHUSD_PERP:1711.3}},{timestamp:1660060330009,markPrices:{ETHUSD_220930:1661.17874813,ETHUSD_221230:1631.51887466,ETHUSD_PERP:1686.24031559}}],ae=n(9238);function le(){return le=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},le.apply(this,arguments)}function se(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}var ce=["className"],oe=["placement"],de=["isNumeric"],ue=["isNumeric"],me=(0,c.Gp)((function(e,r){var n=(0,c.jC)("Table",e),t=(0,c.Lr)(e),i=t.className,a=se(t,ce);return d.createElement(c.Fo,{value:n},d.createElement(c.m$.table,le({role:"table",ref:r,__css:n.table,className:(0,o.cx)("chakra-table",i)},a)))}));o.Ts&&(me.displayName="Table");var pe=(0,c.Gp)((function(e,r){var n=e.placement,t=void 0===n?"bottom":n,i=se(e,oe),a=(0,c.yK)();return d.createElement(c.m$.caption,le({},i,{ref:r,__css:le({},a.caption,{captionSide:t})}))}));o.Ts&&(pe.displayName="TableCaption");var fe=(0,c.Gp)((function(e,r){var n=(0,c.yK)();return d.createElement(c.m$.thead,le({},e,{ref:r,__css:n.thead}))})),he=(0,c.Gp)((function(e,r){var n=(0,c.yK)();return d.createElement(c.m$.tbody,le({},e,{ref:r,__css:n.tbody}))})),Ee=(0,c.Gp)((function(e,r){var n=e.isNumeric,t=se(e,de),i=(0,c.yK)();return d.createElement(c.m$.th,le({},t,{ref:r,__css:i.th,"data-is-numeric":n}))})),xe=(0,c.Gp)((function(e,r){var n=(0,c.yK)();return d.createElement(c.m$.tr,le({role:"row"},e,{ref:r,__css:n.tr}))})),ve=(0,c.Gp)((function(e,r){var n=e.isNumeric,t=se(e,ue),i=(0,c.yK)();return d.createElement(c.m$.td,le({role:"gridcell"},t,{ref:r,__css:i.td,"data-is-numeric":n}))})),_e=n(5893),ge=function(e){return(Math.round(100*e)/100).toLocaleString()},Pe=function(e){var r=e.ethUsdLog;return(0,_e.jsxs)(me,{children:[(0,_e.jsx)(pe,{mt:"0",children:new Date(r.timestamp).toLocaleString(void 0,{timeZoneName:"short"})}),(0,_e.jsx)(fe,{children:(0,_e.jsxs)(xe,{children:[(0,_e.jsx)(Ee,{children:"symbol"}),(0,_e.jsx)(Ee,{children:"mark price"}),(0,_e.jsx)(Ee,{children:"diff"}),(0,_e.jsx)(Ee,{children:"diff rate"})]})}),(0,_e.jsxs)(he,{children:[(0,_e.jsxs)(xe,{children:[(0,_e.jsx)(ve,{children:"ETHUSD_220930"}),(0,_e.jsxs)(ve,{children:["$",ge(r.markPrices.ETHUSD_220930)]}),(0,_e.jsxs)(ve,{children:["$",ge(r.markPrices.ETHUSD_PERP-r.markPrices.ETHUSD_220930)]}),(0,_e.jsxs)(ve,{children:[ge(100*(1-r.markPrices.ETHUSD_220930/r.markPrices.ETHUSD_PERP)),"%"]})]}),(0,_e.jsxs)(xe,{children:[(0,_e.jsx)(ve,{children:"ETHUSD_221230"}),(0,_e.jsxs)(ve,{children:["$",ge(r.markPrices.ETHUSD_220930)]}),(0,_e.jsxs)(ve,{children:["$",ge(r.markPrices.ETHUSD_PERP-r.markPrices.ETHUSD_221230)]}),(0,_e.jsxs)(ve,{children:[ge(100*(1-r.markPrices.ETHUSD_221230/r.markPrices.ETHUSD_PERP)),"%"]})]}),(0,_e.jsxs)(xe,{children:[(0,_e.jsx)(ve,{children:"ETHUSD_PERP"}),(0,_e.jsxs)(ve,{children:["$",ge(r.markPrices.ETHUSD_PERP)]}),(0,_e.jsx)(ve,{textAlign:"center",children:"-"}),(0,_e.jsx)(ve,{textAlign:"center",children:"-"})]})]})]})},Te=function(e){return(Math.round(100*e)/100).toLocaleString()},Se=function(e){var r=e.ethUsdLogs;return(0,_e.jsxs)(me,{children:[(0,_e.jsx)(fe,{children:(0,_e.jsxs)(xe,{children:[(0,_e.jsx)(Ee,{children:"ETHUSD_PERP"}),(0,_e.jsx)(Ee,{children:"ETHUSD_220930"}),(0,_e.jsx)(Ee,{children:"ETHUSD_221230"})]})}),(0,_e.jsx)(he,{children:r.sort((function(e,r){return r.timestamp-e.timestamp})).map((function(e,r){return(0,_e.jsxs)(d.Fragment,{children:[(0,_e.jsx)(xe,{children:(0,_e.jsx)(ve,{fontSize:"12px",border:"none",paddingBottom:"4px",colSpan:3,children:new Date(e.timestamp).toLocaleString(void 0,{timeZoneName:"short"})})}),(0,_e.jsxs)(xe,{children:[(0,_e.jsxs)(ve,{textAlign:"center",paddingTop:"0",children:["$",Te(e.markPrices.ETHUSD_PERP)]}),(0,_e.jsxs)(ve,{textAlign:"right",paddingTop:"0",lineHeight:"1.2em",children:["$",Te(e.markPrices.ETHUSD_220930),(0,_e.jsx)("br",{}),(0,_e.jsxs)("small",{children:["-$",Te(e.markPrices.ETHUSD_PERP-e.markPrices.ETHUSD_220930)]}),(0,_e.jsx)("br",{}),(0,_e.jsxs)("small",{children:[Te(100*(1-e.markPrices.ETHUSD_220930/e.markPrices.ETHUSD_PERP)),"%"]})]}),(0,_e.jsxs)(ve,{textAlign:"right",paddingTop:"0",lineHeight:"1.2em",children:["$",Te(e.markPrices.ETHUSD_221230),(0,_e.jsx)("br",{}),(0,_e.jsxs)("small",{children:["-$",Te(e.markPrices.ETHUSD_PERP-e.markPrices.ETHUSD_221230)]}),(0,_e.jsx)("br",{}),(0,_e.jsxs)("small",{children:[Te(100*(1-e.markPrices.ETHUSD_221230/e.markPrices.ETHUSD_PERP)),"%"]})]})]})]},"EthUsdLogsTable-Tr-".concat(r))}))})]})},je="/saya-chan//_next/static/media/ETH.012b71ad.png",ye=function(){var e,r=a((0,v.Tx)({defaultValue:null}),2),n=r[0],i=r[1],l=a((0,v.Tx)({defaultValue:!0}),2),c=l[0],o=l[1],u=function(){var r,n=(r=s().mark((function r(){return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:clearTimeout(e),fetch("https://dapi.binance.com/dapi/v1/premiumIndex").then((function(e){return e.json()})).then((function(e){var r=e.find((function(e){return"ETHUSD_220930"===e.symbol})),n=e.find((function(e){return"ETHUSD_221230"===e.symbol})),t=e.find((function(e){return"ETHUSD_PERP"===e.symbol}));i({timestamp:r.time,markPrices:{ETHUSD_220930:r.markPrice,ETHUSD_221230:n.markPrice,ETHUSD_PERP:t.markPrice}}),o(!1)})).finally((function(){e=setTimeout(u,1e4)}));case 2:case"end":return r.stop()}}),r)})),function(){var e=this,n=arguments;return new Promise((function(i,a){var l=r.apply(e,n);function s(e){t(l,i,a,s,c,"next",e)}function c(e){t(l,i,a,s,c,"throw",e)}s(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,d.useEffect)((function(){u()}),[]),(0,_e.jsx)(_e.Fragment,{children:(0,_e.jsxs)(te.gC,{spacing:"14",padding:"6",children:[(0,_e.jsxs)(te.X6,{as:"h1",children:[(0,_e.jsxs)(te.kC,{fontSize:"28px",alignItems:"center",children:[(0,_e.jsx)(x,{src:je,marginRight:".3em",alt:"ETH-logo",height:"28px"}),"Saya-chan"]}),(0,_e.jsx)(te.xv,{fontSize:"14px",color:"#888",children:"~poweth checker~"})]}),(0,_e.jsxs)(te.gC,{spacing:"4",children:[(0,_e.jsx)(te.X6,{as:"h2",fontSize:"24px",children:"Current mark price (Binance)"}),c||!n?(0,_e.jsx)(ae.$,{}):(0,_e.jsx)(Pe,{ethUsdLog:n})]}),(0,_e.jsxs)(te.gC,{spacing:"4",children:[(0,_e.jsx)(te.X6,{as:"h2",fontSize:"24px",children:"My position (entries)"}),(0,_e.jsxs)(te.Ug,{spacing:"4",children:[(0,_e.jsx)(te.xv,{width:"120px",flex:"none",textAlign:"left",fontSize:"14px",children:"ETHUSD_220930"}),(0,_e.jsxs)(Q,{children:[(0,_e.jsx)(K,{children:"price $"}),(0,_e.jsx)(q,{placeholder:"1702.20"})]}),(0,_e.jsxs)(Q,{children:[(0,_e.jsx)(q,{placeholder:"100"}),(0,_e.jsx)(X,{children:"ETH"})]})]}),(0,_e.jsxs)(te.Ug,{spacing:"4",children:[(0,_e.jsx)(te.xv,{width:"120px",flex:"none",textAlign:"left",fontSize:"14px",children:"ETHUSD_221230"}),(0,_e.jsxs)(Q,{children:[(0,_e.jsx)(K,{children:"price $"}),(0,_e.jsx)(q,{placeholder:"1692.20"})]}),(0,_e.jsxs)(Q,{children:[(0,_e.jsx)(q,{placeholder:"25"}),(0,_e.jsx)(X,{children:"ETH"})]})]}),(0,_e.jsxs)(te.Ug,{spacing:"4",children:[(0,_e.jsx)(te.xv,{width:"120px",flex:"none",textAlign:"left",fontSize:"14px",children:"ETHUSD_PERP"}),(0,_e.jsxs)(Q,{children:[(0,_e.jsx)(K,{children:"price $"}),(0,_e.jsx)(q,{placeholder:"1712.84"})]}),(0,_e.jsxs)(Q,{children:[(0,_e.jsx)(q,{placeholder:"100"}),(0,_e.jsx)(X,{children:"ETH"})]})]}),(0,_e.jsxs)(te.Ug,{spacing:"4",children:[(0,_e.jsx)(te.xv,{width:"120px",flex:"none",textAlign:"left",fontSize:"14px",children:"Deposit"}),(0,_e.jsxs)(Q,{children:[(0,_e.jsx)(K,{children:"price $"}),(0,_e.jsx)(q,{placeholder:"1712.84"})]}),(0,_e.jsxs)(Q,{children:[(0,_e.jsx)(q,{placeholder:"25"}),(0,_e.jsx)(X,{children:"ETH"})]})]}),(0,_e.jsx)(te.xv,{color:"#aa0000",fontSize:"16px",children:"You Get $xxx,xxx"})]}),(0,_e.jsxs)(te.gC,{spacing:"4",children:[(0,_e.jsx)(te.X6,{as:"h2",fontSize:"24px",children:"Mark price history (Binance)"}),(0,_e.jsx)(Se,{ethUsdLogs:ie})]})]})})}},8312:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8815)}])}},function(e){e.O(0,[774,888,179],(function(){return r=8312,e(e.s=r);var r}));var r=e.O();_N_E=r}]);