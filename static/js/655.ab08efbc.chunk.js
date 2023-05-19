"use strict";(self.webpackChunkreact_hw_08_phonebook=self.webpackChunkreact_hw_08_phonebook||[]).push([[655],{4655:function(e,n,i){i.r(n),i.d(n,{default:function(){return _}});var t=i(4942),r=i(7581),o=i(5431),a=i(1580),l=i(7762),s=i(2791),c=i(4077),f=Object.defineProperty,d=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,g=function(e,n,i){return n in e?f(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i},y=function(e,n){for(var i in n||(n={}))p.call(n,i)&&g(e,i,n[i]);if(m){var t,r=(0,l.Z)(m(n));try{for(r.s();!(t=r.n()).done;){i=t.value;u.call(n,i)&&g(e,i,n[i])}}catch(o){r.e(o)}finally{r.f()}}return e};function b(e,n,i){return"undefined"!==typeof e?e in i.headings.sizes?i.headings.sizes[e].fontSize:(0,o.h)(e):i.headings.sizes[n].fontSize}function x(e,n,i){return"undefined"!==typeof e&&e in i.headings.sizes?i.headings.sizes[e].lineHeight:i.headings.sizes[n].lineHeight}var v=(0,r.k)((function(e,n,i){var t,r,o=n.element,a=n.weight,l=n.inline,s=i.size;return{root:(t=y({},e.fn.fontStyles()),r={fontFamily:e.headings.fontFamily,fontWeight:a||e.headings.sizes[o].fontWeight||e.headings.fontWeight,fontSize:b(s,o,e),lineHeight:l?1:x(s,o,e),margin:0},d(t,h(r)))}})),z=i(9982),j=Object.defineProperty,w=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,k=function(e,n,i){return n in e?j(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i},N={order:1},T=(0,s.forwardRef)((function(e,n){var i=(0,c.N4)("Title",N,e),t=i.className,r=i.order,o=i.children,a=i.unstyled,f=i.size,d=i.weight,h=i.inline,m=i.variant,p=function(e,n){var i={};for(var t in e)O.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(null!=e&&w){var r,o=(0,l.Z)(w(e));try{for(o.s();!(r=o.n()).done;)t=r.value,n.indexOf(t)<0&&S.call(e,t)&&(i[t]=e[t])}catch(a){o.e(a)}finally{o.f()}}return i}(i,["className","order","children","unstyled","size","weight","inline","variant"]),u=v({element:"h".concat(r),weight:d,inline:h},{name:"Title",unstyled:a,variant:m,size:f}),g=u.classes,y=u.cx;return[1,2,3,4,5,6].includes(r)?s.createElement(z.x,function(e,n){for(var i in n||(n={}))O.call(n,i)&&k(e,i,n[i]);if(w){var t,r=(0,l.Z)(w(n));try{for(r.s();!(t=r.n()).done;)i=t.value,S.call(n,i)&&k(e,i,n[i])}catch(o){r.e(o)}finally{r.f()}}return e}({variant:m,component:"h".concat(r),ref:n,className:y(g.root,t)},p),o):null}));T.displayName="@mantine/core/Title";var P=i(8296),Z=i(4270),F=i(3329),W=(0,r.k)((function(e){return{wrapper:(0,t.Z)({position:"relative",paddingTop:(0,o.h)(120),paddingBottom:(0,o.h)(80)},e.fn.smallerThan("sm"),{paddingTop:(0,o.h)(80),paddingBottom:(0,o.h)(60)}),inner:{position:"relative",zIndex:1},dots:(0,t.Z)({position:"absolute",color:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[1]},e.fn.smallerThan("sm"),{display:"none"}),dotsLeft:{left:0,top:0},title:(0,t.Z)({textAlign:"center",fontWeight:800,fontSize:(0,o.h)(40),letterSpacing:-1,color:"dark"===e.colorScheme?e.white:e.black,marginBottom:e.spacing.xs,fontFamily:"Greycliff CF, ".concat(e.fontFamily)},e.fn.smallerThan("xs"),{fontSize:(0,o.h)(28),textAlign:"left"}),highlight:{color:e.colors[e.primaryColor]["dark"===e.colorScheme?4:6]},description:(0,t.Z)({textAlign:"center"},e.fn.smallerThan("xs"),{textAlign:"left",fontSize:e.fontSizes.md}),controls:(0,t.Z)({marginTop:e.spacing.lg,display:"flex",justifyContent:"center"},e.fn.smallerThan("xs"),{flexDirection:"column"}),control:(0,t.Z)({"&:not(:first-of-type)":{marginLeft:e.spacing.md}},e.fn.smallerThan("xs"),{height:(0,o.h)(42),fontSize:e.fontSizes.md,"&:not(:first-of-type)":{marginTop:e.spacing.md,marginLeft:0}})}}));function _(){var e=W().classes;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Z.q,{children:(0,F.jsx)("title",{children:"Login"})}),(0,F.jsx)(a.W,{className:e.wrapper,size:1400,children:(0,F.jsxs)("div",{className:e.inner,children:[(0,F.jsxs)(T,{className:e.title,children:["Home Page of"," ",(0,F.jsx)(z.x,{component:"span",className:e.highlight,inherit:!0,children:"Phonebook"})," ","app"]}),(0,F.jsx)(a.W,{p:0,size:600,children:(0,F.jsx)(z.x,{size:"lg",color:"dimmed",className:e.description,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac iaculis eros. Vestibulum blandit massa eu leo sagittis, vel bibendum nibh interdum. Nulla sit amet enim et libero elementum dapibus."})}),(0,F.jsxs)("div",{className:e.controls,children:[(0,F.jsx)(P.z,{className:e.control,size:"lg",variant:"default",color:"gray",children:"Book a demo"}),(0,F.jsx)(P.z,{className:e.control,size:"lg",children:"Purchase a license"})]})]})})]})}}}]);
//# sourceMappingURL=655.ab08efbc.chunk.js.map