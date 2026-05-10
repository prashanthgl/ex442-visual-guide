import{r as f,a as Q,u as X,N as Y,O as Z,L as k,H as J,b as ee,d as p,R as se}from"./react-vendor-DASZQDMD.js";import{h as te}from"./syntax-highlighter-DX4rPWPR.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const i of c)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function r(c){const i={};return c.integrity&&(i.integrity=c.integrity),c.referrerPolicy&&(i.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?i.credentials="include":c.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(c){if(c.ep)return;c.ep=!0;const i=r(c);fetch(c.href,i)}})();var E={exports:{}},j={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae=f,re=Symbol.for("react.element"),le=Symbol.for("react.fragment"),ce=Object.prototype.hasOwnProperty,ie=ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ne={key:!0,ref:!0,__self:!0,__source:!0};function O(t,s,r){var a,c={},i=null,d=null;r!==void 0&&(i=""+r),s.key!==void 0&&(i=""+s.key),s.ref!==void 0&&(d=s.ref);for(a in s)ce.call(s,a)&&!ne.hasOwnProperty(a)&&(c[a]=s[a]);if(t&&t.defaultProps)for(a in s=t.defaultProps,s)c[a]===void 0&&(c[a]=s[a]);return{$$typeof:re,type:t,key:i,ref:d,props:c,_owner:ie.current}}j.Fragment=le;j.jsx=O;j.jsxs=O;E.exports=j;var e=E.exports,P={},I=Q;P.createRoot=I.createRoot,P.hydrateRoot=I.hydrateRoot;/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var oe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=(t,s)=>{const r=f.forwardRef(({color:a="currentColor",size:c=24,strokeWidth:i=2,absoluteStrokeWidth:d,className:h="",children:w,...G},K)=>f.createElement("svg",{ref:K,...oe,width:c,height:c,stroke:a,strokeWidth:d?Number(i)*24/Number(c):i,className:["lucide",`lucide-${de(t)}`,h].join(" "),...G},[...s.map(([$,W])=>f.createElement($,W)),...Array.isArray(w)?w:[w]]));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=o("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=o("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=o("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=o("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=o("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=o("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=o("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=o("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=o("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=o("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=o("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=o("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=o("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=o("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=o("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=o("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=o("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=o("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=o("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=o("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=o("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=o("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=o("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=o("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=o("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=o("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=o("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=o("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=o("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),B=[{title:"Overview",items:[{to:"/",label:"Home & Dashboard",icon:e.jsx(he,{size:16})}]},{title:"Monitoring & Analysis",items:[{to:"/system-analysis",label:"System Analysis Tools",icon:e.jsx(C,{size:16}),shortLabel:"System Analysis"},{to:"/pcp",label:"Performance Co-Pilot",icon:e.jsx(M,{size:16}),shortLabel:"PCP"},{to:"/hardware-profiling",label:"Hardware Profiling",icon:e.jsx(A,{size:16}),shortLabel:"Hardware"}]},{title:"Kernel & OS",items:[{to:"/kernel-behavior",label:"Kernel Behavior",icon:e.jsx(y,{size:16}),shortLabel:"Kernel"}]},{title:"Performance Analysis",items:[{to:"/app-performance",label:"App Performance",icon:e.jsx(N,{size:16}),shortLabel:"App Perf"}]},{title:"Tuning",items:[{to:"/tuning-running",label:"Tuning Running Systems",icon:e.jsx(D,{size:16}),shortLabel:"Running Systems"},{to:"/memory-tuning",label:"Memory Tuning",icon:e.jsx(S,{size:16}),shortLabel:"Memory"},{to:"/disk-filesystems",label:"Disk & File Systems",icon:e.jsx(_,{size:16}),shortLabel:"Disk & FS"},{to:"/network-performance",label:"Network Performance",icon:e.jsx(T,{size:16}),shortLabel:"Network"}]},{title:"Reference",items:[{to:"/quick-reference",label:"Quick Reference",icon:e.jsx(v,{size:16}),shortLabel:"Quick Ref"}]}];function Ne(){var a;const[t,s]=f.useState(!1),r=X();return e.jsxs("div",{className:"min-h-screen bg-slate-950 flex",children:[t&&e.jsx("div",{className:"fixed inset-0 bg-black/60 z-20 lg:hidden",onClick:()=>s(!1)}),e.jsxs("aside",{className:`fixed top-0 left-0 h-full w-64 bg-slate-950 border-r border-slate-800 z-30
          flex flex-col transform transition-transform duration-300
          ${t?"translate-x-0":"-translate-x-full"} lg:translate-x-0`,children:[e.jsxs("div",{className:"flex items-center gap-3 px-4 py-4 border-b border-slate-800",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center flex-shrink-0",children:e.jsx(V,{size:16,className:"text-white"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("div",{className:"text-sm font-bold text-white leading-tight",children:"EX442 Guide"}),e.jsx("div",{className:"text-xs text-slate-500 truncate",children:"Performance Tuning"})]}),e.jsx("button",{onClick:()=>s(!1),className:"ml-auto lg:hidden text-slate-500 hover:text-white",children:e.jsx(ve,{size:18})})]}),e.jsx("nav",{className:"flex-1 overflow-y-auto py-4 px-3",children:B.map(c=>e.jsxs("div",{className:"mb-5",children:[e.jsx("div",{className:"text-xs font-semibold text-slate-600 uppercase tracking-wider px-3 mb-2",children:c.title}),e.jsx("ul",{className:"space-y-0.5",children:c.items.map(i=>e.jsx("li",{children:e.jsxs(Y,{to:i.to,end:i.to==="/",onClick:()=>s(!1),className:({isActive:d})=>`sidebar-link ${d?"active":""}`,children:[e.jsx("span",{className:"flex-shrink-0",children:i.icon}),e.jsx("span",{className:"truncate",children:i.shortLabel||i.label}),r.pathname===i.to&&e.jsx(L,{size:14,className:"ml-auto text-cyan-500 flex-shrink-0"})]})},i.to))})]},c.title))}),e.jsxs("div",{className:"px-4 py-3 border-t border-slate-800",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-600",children:[e.jsx(g,{size:12}),e.jsx("span",{children:"Based on official exam objectives"})]}),e.jsxs("div",{className:"flex items-center gap-2 mt-1 text-xs text-slate-600",children:[e.jsx(ge,{size:12}),e.jsx("span",{children:"RHEL 9 / Kernel 5.14+"})]})]})]}),e.jsxs("div",{className:"flex-1 flex flex-col min-h-screen lg:ml-64",children:[e.jsx("header",{className:"sticky top-0 z-10 bg-slate-950/80 backdrop-blur-md border-b border-slate-800",children:e.jsxs("div",{className:"flex items-center gap-4 px-4 py-3",children:[e.jsx("button",{onClick:()=>s(!0),className:"lg:hidden text-slate-400 hover:text-white p-1 rounded",children:e.jsx(be,{size:20})}),e.jsxs("div",{className:"hidden sm:flex items-center gap-2 text-sm text-slate-500 min-w-0",children:[e.jsx(F,{size:14,className:"text-cyan-500 flex-shrink-0"}),e.jsx("span",{className:"text-slate-400 truncate",children:((a=B.flatMap(c=>c.items).find(c=>c.to===r.pathname||c.to==="/"&&r.pathname==="/"))==null?void 0:a.label)||"EX442 Performance Tuning"})]}),e.jsxs("div",{className:"ml-auto flex items-center gap-3",children:[e.jsxs("span",{className:"hidden md:flex items-center gap-2 text-xs text-slate-500 bg-slate-900 border border-slate-800 rounded-full px-3 py-1",children:[e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),"RHEL 9 · EX442"]}),e.jsx("a",{href:"https://github.com/prashanthgl/ex442-visual-guide",target:"_blank",rel:"noopener noreferrer",className:"text-slate-500 hover:text-white text-xs border border-slate-800 rounded px-2 py-1 hidden sm:block hover:border-slate-600",children:"GitHub"})]})]})}),e.jsx("main",{className:"flex-1 p-4 md:p-6 lg:p-8 animate-fade-in",children:e.jsx(Z,{})}),e.jsx("footer",{className:"border-t border-slate-800 px-6 py-4 text-center text-xs text-slate-600",children:"EX442 Visual Guide · Built for exam prep · Not affiliated with Red Hat"})]})]})}const we=[{to:"/system-analysis",icon:e.jsx(C,{size:22,className:"text-cyan-400"}),title:"System Analysis Tools",desc:"vmstat, iostat, mpstat, sar, top, powertop, perf — the complete toolkit for reading system vitals.",tags:["vmstat","iostat","sar","perf"],color:"from-cyan-500/20 to-cyan-500/5 border-cyan-500/30",accent:"text-cyan-400"},{to:"/pcp",icon:e.jsx(M,{size:22,className:"text-violet-400"}),title:"Performance Co-Pilot",desc:"PCP architecture, pmcd, pmlogger, pmstat — enterprise-grade performance monitoring framework.",tags:["pmcd","pmstat","pmrep","pmlogger"],color:"from-violet-500/20 to-violet-500/5 border-violet-500/30",accent:"text-violet-400"},{to:"/hardware-profiling",icon:e.jsx(A,{size:22,className:"text-sky-400"}),title:"Hardware Profiling",desc:"dmesg ring buffer internals, dmidecode SMBIOS tables, sosreport — know your hardware.",tags:["dmesg","dmidecode","sosreport","lscpu"],color:"from-sky-500/20 to-sky-500/5 border-sky-500/30",accent:"text-sky-400"},{to:"/kernel-behavior",icon:e.jsx(y,{size:22,className:"text-indigo-400"}),title:"Kernel Behavior",desc:"/proc/sys, sysctl, /sys filesystem internals, module parameters — control the kernel.",tags:["sysctl","/proc/sys","/sys","modprobe"],color:"from-indigo-500/20 to-indigo-500/5 border-indigo-500/30",accent:"text-indigo-400"},{to:"/app-performance",icon:e.jsx(N,{size:22,className:"text-amber-400"}),title:"App Performance",desc:"Valgrind suite, SystemTap scripting, eBPF/bpftrace tools — deep application introspection.",tags:["Valgrind","SystemTap","eBPF","bpftrace"],color:"from-amber-500/20 to-amber-500/5 border-amber-500/30",accent:"text-amber-400"},{to:"/tuning-running",icon:e.jsx(D,{size:22,className:"text-orange-400"}),title:"Tuning Running Systems",desc:"Process priorities, tuned profiles, cgroups v2, systemd resource constraints — runtime control.",tags:["nice","tuned","cgroups","systemd"],color:"from-orange-500/20 to-orange-500/5 border-orange-500/30",accent:"text-orange-400"},{to:"/memory-tuning",icon:e.jsx(S,{size:22,className:"text-emerald-400"}),title:"Memory Tuning",desc:"Huge pages, overcommit, swappiness, NUMA topology, SYSV shared memory — master virtual memory.",tags:["HugePages","NUMA","swappiness","overcommit"],color:"from-emerald-500/20 to-emerald-500/5 border-emerald-500/30",accent:"text-emerald-400"},{to:"/disk-filesystems",icon:e.jsx(_,{size:22,className:"text-teal-400"}),title:"Disk & File Systems",desc:"I/O schedulers (mq-deadline, bfq, kyber), dirty page writeback, filesystem tuning.",tags:["mq-deadline","bfq","dirty_ratio","noatime"],color:"from-teal-500/20 to-teal-500/5 border-teal-500/30",accent:"text-teal-400"},{to:"/network-performance",icon:e.jsx(T,{size:22,className:"text-rose-400"}),title:"Network Performance",desc:"BDP calculation, TCP/UDP buffer sizing, congestion control — optimize the network stack.",tags:["BDP","tcp_rmem","udp buffers","BBR"],color:"from-rose-500/20 to-rose-500/5 border-rose-500/30",accent:"text-rose-400"},{to:"/quick-reference",icon:e.jsx(v,{size:22,className:"text-slate-400"}),title:"Quick Reference",desc:"Cheat sheet of all sysctl params, commands, and persistence methods for exam day.",tags:["sysctl.d","udev rules","tuned-adm","persistence"],color:"from-slate-500/20 to-slate-500/5 border-slate-500/30",accent:"text-slate-400"}],ke=[{label:"Exam Objectives",value:"8",icon:e.jsx(m,{size:18,className:"text-emerald-400"})},{label:"Tools Covered",value:"40+",icon:e.jsx(N,{size:18,className:"text-cyan-400"})},{label:"Kernel Params",value:"60+",icon:e.jsx(y,{size:18,className:"text-violet-400"})},{label:"Practical Examples",value:"100+",icon:e.jsx(V,{size:18,className:"text-amber-400"})}];function Pe(){const t=[{label:"Applications",sublabel:"Your workloads",tools:["Valgrind","SystemTap","bpftrace"],color:"#8b5cf6",bg:"rgba(139,92,246,0.12)"},{label:"System Call Interface",sublabel:"Kernel entry point",tools:["strace","ltrace","syscount"],color:"#06b6d4",bg:"rgba(6,182,212,0.10)"},{label:"Virtual File System (VFS)",sublabel:"Abstraction over all filesystems",tools:["iostat","iotop","blktrace"],color:"#10b981",bg:"rgba(16,185,129,0.10)"},{label:"Scheduler · Memory · Network",sublabel:"Core kernel subsystems",tools:["top","vmstat","ss","numastat"],color:"#f59e0b",bg:"rgba(245,158,11,0.10)"},{label:"Hardware Abstraction",sublabel:"Device drivers, IRQ handling",tools:["perf","powertop","mpstat"],color:"#f97316",bg:"rgba(249,115,22,0.10)"},{label:"Physical Hardware",sublabel:"CPU, RAM, NIC, Storage",tools:["dmidecode","lscpu","dmesg"],color:"#6b7280",bg:"rgba(107,114,128,0.10)"}];return e.jsx("div",{className:"w-full space-y-1",children:t.map((s,r)=>e.jsxs("div",{className:"rounded-lg border flex items-center px-4 py-2.5 gap-4",style:{background:s.bg,borderColor:s.color+"33"},children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"font-semibold text-sm",style:{color:s.color},children:s.label}),e.jsx("div",{className:"text-xs text-slate-500 mt-0.5",children:s.sublabel})]}),e.jsx("div",{className:"hidden sm:flex items-center gap-1.5 flex-wrap justify-end",children:s.tools.map(a=>e.jsx("span",{className:"text-xs font-mono px-2 py-0.5 rounded border",style:{color:s.color,borderColor:s.color+"40",background:s.color+"10"},children:a},a))})]},r))})}function Ce(){return e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"mb-10 pt-2",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("span",{className:"badge bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",children:"EX442"}),e.jsx("span",{className:"badge bg-violet-500/10 text-violet-400 border border-violet-500/20",children:"RHEL 9"}),e.jsx("span",{className:"badge bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:"Performance Tuning"})]}),e.jsxs("h1",{className:"text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight",children:["Master Linux"," ",e.jsx("span",{className:"bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent",children:"Performance Tuning"})]}),e.jsxs("p",{className:"text-lg text-slate-400 max-w-2xl mb-6 leading-relaxed",children:["A deep-dive visual guide for the"," ",e.jsx("strong",{className:"text-slate-200",children:"Red Hat Certified Specialist in Performance Tuning (EX442)"}),". Go beyond the exam — understand Linux internals and become a performance engineering expert."]}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsxs(k,{to:"/system-analysis",className:"flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-5 py-2.5 rounded-lg transition-all",children:["Start Learning ",e.jsx(R,{size:16})]}),e.jsxs(k,{to:"/quick-reference",className:"flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-medium px-5 py-2.5 rounded-lg transition-all",children:["Quick Reference ",e.jsx(v,{size:16})]})]})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10",children:ke.map(t=>e.jsxs("div",{className:"card flex items-center gap-3",children:[t.icon,e.jsxs("div",{children:[e.jsx("div",{className:"text-2xl font-bold text-white",children:t.value}),e.jsx("div",{className:"text-xs text-slate-500",children:t.label})]})]},t.label))}),e.jsxs("div",{className:"card mb-10",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/30 to-violet-500/30 flex items-center justify-center",children:e.jsx(y,{size:16,className:"text-cyan-400"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-bold text-white",children:"Linux Performance Stack"}),e.jsx("p",{className:"text-xs text-slate-500",children:"Where each tool operates in the kernel hierarchy"})]})]}),e.jsx(Pe,{}),e.jsx("p",{className:"mt-3 text-xs text-slate-600",children:"Understanding which layer a tool observes tells you what problem it can diagnose. eBPF probes span all layers."})]}),e.jsxs("div",{className:"flex items-start gap-3 rounded-xl border border-amber-400/30 bg-amber-400/5 p-4 mb-8",children:[e.jsx(ye,{size:18,className:"text-amber-400 flex-shrink-0 mt-0.5"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-amber-300 text-sm mb-1",children:"Golden Rule: Persistence After Reboot"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["All EX442 exam configurations ",e.jsx("strong",{className:"text-white",children:"must persist after reboot without intervention"}),". A change that only works until the next reboot is worth ",e.jsx("strong",{className:"text-rose-400",children:"zero marks"}),". Look for the ",e.jsx("span",{className:"persist-badge ml-1",children:"Persist"})," badge throughout this guide for the correct method."]})]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-1",children:"All Topics"}),e.jsx("p",{className:"text-sm text-slate-500 mb-5",children:"Click any topic to dive deep into Linux internals and exam-focused content."}),e.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:we.map(t=>e.jsxs(k,{to:t.to,className:`group rounded-xl border p-5 bg-gradient-to-br ${t.color}
                hover:scale-[1.02] transition-all duration-200 flex flex-col gap-3`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-9 h-9 rounded-lg bg-slate-900/60 flex items-center justify-center flex-shrink-0",children:t.icon}),e.jsx("h3",{className:"font-semibold text-white text-sm leading-tight",children:t.title}),e.jsx(R,{size:14,className:`ml-auto ${t.accent} opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0`})]}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:t.desc}),e.jsx("div",{className:"flex flex-wrap gap-1.5 mt-auto",children:t.tags.map(s=>e.jsx("span",{className:"text-xs font-mono text-slate-500 bg-slate-900/50 px-2 py-0.5 rounded border border-slate-800",children:s},s))})]},t.to))})]}),e.jsxs("div",{className:"card mt-8",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx(pe,{size:16,className:"text-slate-500"}),e.jsx("h3",{className:"font-semibold text-white",children:"How to Use This Guide"})]}),e.jsxs("div",{className:"grid sm:grid-cols-3 gap-4 text-sm",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{className:"text-cyan-400 font-medium",children:"1. Learn the Concepts"}),e.jsxs("p",{className:"text-slate-400 text-xs leading-relaxed",children:["Start from System Analysis and work through each section. Understand ",e.jsx("em",{children:"why"})," each tool exists and what kernel subsystem it taps into."]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{className:"text-violet-400 font-medium",children:"2. Practice the Commands"}),e.jsx("p",{className:"text-slate-400 text-xs leading-relaxed",children:"Every code block is copy-ready. Run commands on a RHEL 9 VM. The exam is hands-on — muscle memory matters."})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{className:"text-amber-400 font-medium",children:"3. Check Persistence"}),e.jsxs("p",{className:"text-slate-400 text-xs leading-relaxed",children:["For every change you make, check the ",e.jsx("span",{className:"persist-badge",children:"Persist"})," sections. Reboot your VM and verify changes survived."]})]})]})]})]})}const Me={'pre[class*="language-"]':{color:"#d4d4d4",fontSize:"13px",textShadow:"none",fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",background:"#1e1e1e"},'code[class*="language-"]':{color:"#d4d4d4",fontSize:"13px",textShadow:"none",fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#264F78"},'code[class*="language-"]::selection':{textShadow:"none",background:"#264F78"},'pre[class*="language-"] *::selection':{textShadow:"none",background:"#264F78"},'code[class*="language-"] *::selection':{textShadow:"none",background:"#264F78"},':not(pre) > code[class*="language-"]':{padding:".1em .3em",borderRadius:".3em",color:"#db4c69",background:"#1e1e1e"},".namespace":{Opacity:".7"},"doctype.doctype-tag":{color:"#569CD6"},"doctype.name":{color:"#9cdcfe"},comment:{color:"#6a9955"},prolog:{color:"#6a9955"},punctuation:{color:"#d4d4d4"},".language-html .language-css .token.punctuation":{color:"#d4d4d4"},".language-html .language-javascript .token.punctuation":{color:"#d4d4d4"},property:{color:"#9cdcfe"},tag:{color:"#569cd6"},boolean:{color:"#569cd6"},number:{color:"#b5cea8"},constant:{color:"#9cdcfe"},symbol:{color:"#b5cea8"},inserted:{color:"#b5cea8"},unit:{color:"#b5cea8"},selector:{color:"#d7ba7d"},"attr-name":{color:"#9cdcfe"},string:{color:"#ce9178"},char:{color:"#ce9178"},builtin:{color:"#ce9178"},deleted:{color:"#ce9178"},".language-css .token.string.url":{textDecoration:"underline"},operator:{color:"#d4d4d4"},entity:{color:"#569cd6"},"operator.arrow":{color:"#569CD6"},atrule:{color:"#ce9178"},"atrule.rule":{color:"#c586c0"},"atrule.url":{color:"#9cdcfe"},"atrule.url.function":{color:"#dcdcaa"},"atrule.url.punctuation":{color:"#d4d4d4"},keyword:{color:"#569CD6"},"keyword.module":{color:"#c586c0"},"keyword.control-flow":{color:"#c586c0"},function:{color:"#dcdcaa"},"function.maybe-class-name":{color:"#dcdcaa"},regex:{color:"#d16969"},important:{color:"#569cd6"},italic:{fontStyle:"italic"},"class-name":{color:"#4ec9b0"},"maybe-class-name":{color:"#4ec9b0"},console:{color:"#9cdcfe"},parameter:{color:"#9cdcfe"},interpolation:{color:"#9cdcfe"},"punctuation.interpolation-punctuation":{color:"#569cd6"},variable:{color:"#9cdcfe"},"imports.maybe-class-name":{color:"#9cdcfe"},"exports.maybe-class-name":{color:"#9cdcfe"},escape:{color:"#d7ba7d"},"tag.punctuation":{color:"#808080"},cdata:{color:"#808080"},"attr-value":{color:"#ce9178"},"attr-value.punctuation":{color:"#ce9178"},"attr-value.punctuation.attr-equals":{color:"#d4d4d4"},namespace:{color:"#4ec9b0"},'pre[class*="language-javascript"]':{color:"#9cdcfe"},'code[class*="language-javascript"]':{color:"#9cdcfe"},'pre[class*="language-jsx"]':{color:"#9cdcfe"},'code[class*="language-jsx"]':{color:"#9cdcfe"},'pre[class*="language-typescript"]':{color:"#9cdcfe"},'code[class*="language-typescript"]':{color:"#9cdcfe"},'pre[class*="language-tsx"]':{color:"#9cdcfe"},'code[class*="language-tsx"]':{color:"#9cdcfe"},'pre[class*="language-css"]':{color:"#ce9178"},'code[class*="language-css"]':{color:"#ce9178"},'pre[class*="language-html"]':{color:"#d4d4d4"},'code[class*="language-html"]':{color:"#d4d4d4"},".language-regex .token.anchor":{color:"#dcdcaa"},".language-html .token.punctuation":{color:"#808080"},'pre[class*="language-"] > code[class*="language-"]':{position:"relative",zIndex:"1"},".line-highlight.line-highlight":{background:"#f7ebc6",boxShadow:"inset 5px 0 0 #f7d87c",zIndex:"0"}};function l({code:t,language:s="bash",filename:r,showLineNumbers:a=!1}){const[c,i]=f.useState(!1),d=()=>{navigator.clipboard.writeText(t.trim()),i(!0),setTimeout(()=>i(!1),2e3)},h={bash:"text-amber-400",shell:"text-amber-400",python:"text-blue-400",c:"text-violet-400",text:"text-slate-400",ini:"text-emerald-400",systemd:"text-emerald-400"};return e.jsxs("div",{className:"my-4 rounded-xl overflow-hidden border border-slate-800 bg-[#1e1e1e]",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(F,{size:13,className:"text-slate-500"}),r?e.jsx("span",{className:`text-xs font-mono ${h[s]||"text-slate-400"}`,children:r}):e.jsx("span",{className:`text-xs font-medium ${h[s]||"text-slate-400"}`,children:s})]}),e.jsx("button",{onClick:d,className:`flex items-center gap-1.5 text-xs text-slate-500 hover:text-white\r
                     bg-slate-800 hover:bg-slate-700 rounded px-2 py-1 transition-all`,title:"Copy to clipboard",children:c?e.jsxs(e.Fragment,{children:[e.jsx(q,{size:12,className:"text-emerald-400"}),e.jsx("span",{className:"text-emerald-400",children:"Copied"})]}):e.jsxs(e.Fragment,{children:[e.jsx(H,{size:12}),e.jsx("span",{children:"Copy"})]})})]}),e.jsx(te,{language:s,style:Me,showLineNumbers:a,customStyle:{margin:0,borderRadius:0,background:"#1e1e1e",fontSize:"0.82rem",lineHeight:"1.6",padding:"1rem"},codeTagProps:{style:{fontFamily:"'JetBrains Mono', 'Fira Code', Consolas, monospace"}},children:t.trim()})]})}function u({title:t="Terminal",children:s}){return e.jsxs("div",{className:"my-4 rounded-xl overflow-hidden border border-slate-700 shadow-xl",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-2.5 bg-slate-800 border-b border-slate-700",children:[e.jsxs("div",{className:"flex gap-1.5",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-rose-500/70"}),e.jsx("div",{className:"w-3 h-3 rounded-full bg-amber-500/70"}),e.jsx("div",{className:"w-3 h-3 rounded-full bg-emerald-500/70"})]}),e.jsx("span",{className:"text-xs text-slate-400 ml-2 font-mono",children:t})]}),e.jsx("div",{className:"bg-slate-950 p-4 font-mono text-sm text-slate-300 leading-relaxed overflow-x-auto",children:typeof s=="string"?e.jsx("pre",{className:"whitespace-pre text-slate-300 text-xs leading-6",children:s}):s})]})}const Se={info:{icon:e.jsx(ue,{size:16}),borderColor:"border-cyan-500/30",bgColor:"bg-cyan-500/5",titleColor:"text-cyan-400",iconColor:"text-cyan-400"},warning:{icon:e.jsx(je,{size:16}),borderColor:"border-amber-500/30",bgColor:"bg-amber-500/5",titleColor:"text-amber-400",iconColor:"text-amber-400"},tip:{icon:e.jsx(fe,{size:16}),borderColor:"border-violet-500/30",bgColor:"bg-violet-500/5",titleColor:"text-violet-400",iconColor:"text-violet-400"},danger:{icon:e.jsx(xe,{size:16}),borderColor:"border-rose-500/30",bgColor:"bg-rose-500/5",titleColor:"text-rose-400",iconColor:"text-rose-400"},success:{icon:e.jsx(m,{size:16}),borderColor:"border-emerald-500/30",bgColor:"bg-emerald-500/5",titleColor:"text-emerald-400",iconColor:"text-emerald-400"},exam:{icon:e.jsx(m,{size:16}),borderColor:"border-amber-400/40",bgColor:"bg-amber-400/5",titleColor:"text-amber-300",iconColor:"text-amber-400"}};function x({type:t="info",title:s,children:r}){const a=Se[t],c={info:"Note",warning:"Warning",tip:"Pro Tip",danger:"Danger",success:"Success",exam:"Exam Focus"};return e.jsx("div",{className:`my-4 rounded-lg border ${a.borderColor} ${a.bgColor} p-4`,children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:`${a.iconColor} mt-0.5 flex-shrink-0`,children:a.icon}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("div",{className:`text-sm font-semibold ${a.titleColor} mb-1`,children:s||c[t]}),e.jsx("div",{className:"text-sm text-slate-300 leading-relaxed",children:r})]})]})})}function b({title:t,children:s,defaultOpen:r=!1}){const[a,c]=f.useState(r);return e.jsxs("div",{className:"border border-slate-800 rounded-xl overflow-hidden mb-4",children:[e.jsxs("button",{onClick:()=>c(!a),className:"w-full flex items-center gap-3 px-5 py-4 bg-slate-900 hover:bg-slate-800/80 transition-colors text-left",children:[a?e.jsx(me,{size:16,className:"text-cyan-400 flex-shrink-0"}):e.jsx(L,{size:16,className:"text-slate-500 flex-shrink-0"}),e.jsx("span",{className:"font-semibold text-white",children:t})]}),a&&e.jsx("div",{className:"px-5 py-5 bg-slate-950 space-y-4",children:s})]})}function n({name:t,desc:s,note:r}){return e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 font-mono text-cyan-400 text-sm whitespace-nowrap align-top border-b border-slate-800/60",children:t}),e.jsx("td",{className:"py-2 pr-4 text-slate-300 text-sm align-top border-b border-slate-800/60",children:s}),r&&e.jsx("td",{className:"py-2 text-slate-500 text-xs align-top border-b border-slate-800/60 italic",children:r})]})}function _e(){return e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center",children:e.jsx(C,{size:20,className:"text-cyan-400"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-white",children:"System Analysis Tools"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"vmstat · iostat · mpstat · sar · top · powertop · perf"})]})]}),e.jsxs("p",{className:"text-slate-400 leading-relaxed max-w-3xl",children:["Before you can tune a system, you must ",e.jsx("em",{className:"text-slate-200",children:"measure"})," it. These tools all read from the kernel's virtual filesystems (",e.jsx("code",{className:"text-cyan-400 bg-slate-900 px-1 rounded",children:"/proc"})," and"," ",e.jsx("code",{className:"text-cyan-400 bg-slate-900 px-1 rounded",children:"/sys"}),"), which expose live kernel data structures as pseudo-files. Understanding where data comes from makes you a better diagnostician."]})]}),e.jsxs(b,{title:"/proc — The Kernel's Window to Userspace",defaultOpen:!0,children:[e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("code",{className:"text-cyan-400",children:"/proc"})," is a ",e.jsx("strong",{className:"text-white",children:"virtual filesystem"})," (procfs) — no disk I/O occurs when reading it. The kernel populates each file on-demand by executing special read handlers registered during boot. This means reading ",e.jsx("code",{className:"text-cyan-400",children:"/proc/meminfo"})," triggers kernel functions that interrogate the memory allocator in real time."]}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-3",children:[{file:"/proc/meminfo",desc:"Memory statistics: MemTotal, MemFree, Cached, Buffers, SwapUsed…"},{file:"/proc/vmstat",desc:"VM events: pgpgin, pgpgout, pswpin, pswpout, nr_dirty…"},{file:"/proc/diskstats",desc:"Per-disk I/O stats: reads, writes, sectors, time in queue"},{file:"/proc/net/dev",desc:"Per-interface network statistics: bytes, packets, errors, drops"},{file:"/proc/cpuinfo",desc:"CPU model, flags, cache sizes, NUMA topology"},{file:"/proc/interrupts",desc:"IRQ counts per CPU — spot interrupt imbalance"},{file:"/proc/softirqs",desc:"Soft interrupt counts — NET_RX, NET_TX, TIMER…"},{file:"/proc/[PID]/status",desc:"Per-process: VmRSS, VmSwap, Threads, voluntary_ctxt_switches"}].map(({file:t,desc:s})=>e.jsxs("div",{className:"bg-slate-900 rounded-lg p-3 border border-slate-800",children:[e.jsx("code",{className:"text-cyan-400 text-xs font-mono",children:t}),e.jsx("p",{className:"text-slate-400 text-xs mt-1 leading-relaxed",children:s})]},t))}),e.jsx(l,{language:"bash",filename:"Explore /proc in real time",code:`# Watch memory counters update every second
watch -n1 cat /proc/meminfo

# See raw VM events (counters since boot)
cat /proc/vmstat | grep -E 'pgpg|pswp|nr_dirty'

# Per-process memory breakdown
cat /proc/$$/status | grep -E 'Vm|ctxt'

# CPU frequency and NUMA info
cat /proc/cpuinfo | grep -E 'MHz|NUMA|cache'`})]}),e.jsxs(b,{title:"vmstat — Virtual Memory Statistics",defaultOpen:!0,children:[e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("code",{className:"text-cyan-400",children:"vmstat"})," reads from ",e.jsx("code",{className:"text-cyan-400",children:"/proc/vmstat"})," and",e.jsx("code",{className:"text-cyan-400 ml-1",children:"/proc/meminfo"}),". Each line in interval mode shows the ",e.jsx("em",{children:"delta"})," since the last sample (except the first line which shows totals since boot — ignore it)."]}),e.jsx(u,{title:"vmstat 2 5 — Sample Output",children:`procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 2  0      0 1234567  45678 987654    0    0    12    34  456  789  5  2 92  1  0
 1  0      0 1233456  45679 987891    0    0     0    48  512  823  8  3 89  0  0
 0  0      0 1234123  45680 987923    0    0     0     8  389  701  2  1 97  0  0
 0  0      0 1234200  45680 987943    0    0     0     0  342  654  1  1 98  0  0`}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"metric-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Column"}),e.jsx("th",{children:"Meaning"}),e.jsx("th",{children:"Concern"})]})}),e.jsxs("tbody",{children:[e.jsx(n,{name:"r",desc:"Run queue — processes waiting for CPU",note:"r > nCPUs sustained = CPU bottleneck"}),e.jsx(n,{name:"b",desc:"Blocked — processes waiting for I/O or resources",note:"> 0 intermittently = normal; sustained = problem"}),e.jsx(n,{name:"swpd",desc:"Virtual memory used (kB) — currently swapped out pages",note:"Any value here means swapping has occurred"}),e.jsx(n,{name:"free",desc:"Idle memory (kB) — not including reclaimable cache",note:"Low is OK if buff+cache is high"}),e.jsx(n,{name:"buff",desc:"Buffer cache — kernel block device buffers",note:"Metadata/superblocks for filesystems"}),e.jsx(n,{name:"cache",desc:"Page cache — file data cached in RAM",note:"High = good, OS using RAM effectively"}),e.jsx(n,{name:"si",desc:"Swap in (kB/s) — pages read from swap disk",note:"Non-zero = active swapping = RAM pressure"}),e.jsx(n,{name:"so",desc:"Swap out (kB/s) — pages written to swap disk",note:"Non-zero = system is swapping out pages"}),e.jsx(n,{name:"bi",desc:"Block in (blocks/s) — reads from block devices",note:"Includes page cache misses (file reads)"}),e.jsx(n,{name:"bo",desc:"Block out (blocks/s) — writes to block devices",note:"Includes dirty page writeback"}),e.jsx(n,{name:"in",desc:"Interrupts per second",note:"High = busy I/O or network"}),e.jsx(n,{name:"cs",desc:"Context switches per second",note:"High = many threads competing or I/O waits"}),e.jsx(n,{name:"us",desc:"User CPU time %",note:"Application CPU usage"}),e.jsx(n,{name:"sy",desc:"System (kernel) CPU time %",note:"High = excessive syscalls, lock contention"}),e.jsx(n,{name:"wa",desc:"I/O wait CPU time %",note:"CPU idle waiting for I/O — I/O bottleneck signal"}),e.jsx(n,{name:"st",desc:"Steal time %",note:"VM hypervisor taking CPU cycles — only in VMs"})]})]})}),e.jsx(l,{language:"bash",code:`# Run every 2 seconds, 10 samples
vmstat 2 10

# Show active/inactive memory detail
vmstat -a 2 5

# Show disk statistics (like iostat)
vmstat -d 2

# Show slab info — kernel memory allocator
vmstat -m

# Show event counters (cumulative)
vmstat -s`}),e.jsxs(x,{type:"tip",title:"Reading vmstat Like a Pro",children:["The key diagnostic pattern: ",e.jsx("strong",{children:"si/so > 0"})," means the system is actively swapping — RAM is exhausted.",e.jsx("strong",{children:" wa > 20%"})," means CPUs are stalled waiting for I/O. ",e.jsx("strong",{children:"r > number of CPUs"})," means a CPU bottleneck."]})]}),e.jsxs(b,{title:"iostat — I/O Statistics",children:[e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("code",{className:"text-cyan-400",children:"iostat"})," (part of ",e.jsx("code",{className:"text-slate-300",children:"sysstat"}),") reads from ",e.jsx("code",{className:"text-cyan-400",children:"/proc/diskstats"}),". The kernel updates these counters in the block layer — every time a request completes, its latency is added to the running totals. ",e.jsx("code",{children:"iostat -x"})," calculates derived metrics from these deltas."]}),e.jsx(u,{title:"iostat -xz 2 3",children:`Linux 5.14.0-427.el9.x86_64   05/10/2026   _x86_64_   (4 CPU)

Device     r/s     rkB/s   rrqm/s  %rrqm r_await rareq-sz    w/s    wkB/s   wrqm/s  %wrqm w_await wareq-sz  aqu-sz  %util
sda       12.50   456.00     0.50   3.85    2.34    36.48   8.20   128.00     1.20  12.77    4.21    15.61    0.08   2.13
nvme0n1  234.00  8976.00     0.00   0.00    0.18    38.36  89.00  2048.00     0.00   0.00    0.22    23.01    0.07   4.21`}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"metric-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Column"}),e.jsx("th",{children:"Meaning"}),e.jsx("th",{children:"Threshold"})]})}),e.jsxs("tbody",{children:[e.jsx(n,{name:"r/s, w/s",desc:"Read/write requests per second (IOPS)",note:"Depends on device type"}),e.jsx(n,{name:"rkB/s, wkB/s",desc:"Read/write throughput in kB/s",note:"Compare to device spec"}),e.jsx(n,{name:"rrqm/s, wrqm/s",desc:"Read/write requests merged per second",note:"High merges = sequential workload"}),e.jsx(n,{name:"r_await, w_await",desc:"Average request service time (ms) including queue wait",note:"HDD: <20ms, SSD: <1ms, NVMe: <0.1ms"}),e.jsx(n,{name:"aqu-sz",desc:"Average queue depth — requests waiting + being served",note:"> 1 = device has a queue backlog"}),e.jsx(n,{name:"%util",desc:"% of time device was busy (saturated)",note:"> 80% = potential bottleneck; 100% = saturated"})]})]})}),e.jsxs(x,{type:"warning",title:"%util is Misleading for SSDs",children:["On NVMe SSDs with internal parallelism, ",e.jsx("code",{children:"%util"})," can hit 100% even with plenty of headroom because the device can handle thousands of parallel requests. Use ",e.jsx("code",{children:"aqu-sz"})," (queue depth) as a better saturation indicator. High ",e.jsx("code",{children:"r_await"})," with high ",e.jsx("code",{children:"aqu-sz"})," is the true sign of I/O saturation."]}),e.jsx(l,{language:"bash",code:`# Extended stats, skip zero-activity devices, 2 sec interval
iostat -xz 2

# Show only specific device
iostat -x nvme0n1 2 5

# JSON output for scripting
iostat -o JSON -x 1 3

# Show CPU stats too
iostat -c -x 2`})]}),e.jsxs(b,{title:"mpstat — Multiprocessor Statistics",children:[e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("code",{className:"text-cyan-400",children:"mpstat"})," reads from ",e.jsx("code",{className:"text-cyan-400",children:"/proc/stat"}),". The kernel maintains per-CPU jiffy counters for each CPU state. mpstat calculates percentages from these counters. The key insight: ",e.jsx("code",{className:"text-cyan-400",children:"%iowait"})," is a CPU metric — it counts CPU cycles where the CPU was idle ",e.jsx("em",{children:"and"})," at least one I/O was outstanding. It does ",e.jsx("strong",{children:"not"}),' mean "I/O is slow."']}),e.jsx(u,{title:"mpstat -P ALL 2 3",children:`Linux 5.14.0-427.el9.x86_64   05/10/2026   _x86_64_   (4 CPU)

08:15:23     CPU    %usr   %nice    %sys %iowait    %irq   %soft  %steal  %guest  %gnice   %idle
08:15:25     all    8.25    0.00    2.31    1.25    0.25    0.37    0.00    0.00    0.00   87.57
08:15:25       0   12.50    0.00    3.50    0.50    0.50    1.00    0.00    0.00    0.00   82.00
08:15:25       1    6.00    0.00    1.50    2.00    0.00    0.00    0.00    0.00    0.00   90.50
08:15:25       2    8.00    0.00    2.00    1.00    0.00    0.00    0.00    0.00    0.00   89.00
08:15:25       3    6.50    0.00    2.25    1.50    0.50    0.50    0.00    0.00    0.00   88.75`}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"metric-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Column"}),e.jsx("th",{children:"Meaning"}),e.jsx("th",{children:"Linux Internals"})]})}),e.jsxs("tbody",{children:[e.jsx(n,{name:"%usr",desc:"User space CPU time (non-nice)",note:"Comes from /proc/stat user counter"}),e.jsx(n,{name:"%nice",desc:"CPU time for nicely-adjusted user processes",note:"Processes with nice > 0"}),e.jsx(n,{name:"%sys",desc:"Kernel CPU time (system calls, kernel threads)",note:"High = lock contention, syscall overhead"}),e.jsx(n,{name:"%iowait",desc:"CPU was idle AND at least one I/O pending on CPU",note:"Per-CPU metric, not a global I/O metric"}),e.jsx(n,{name:"%irq",desc:"Hardware interrupt handling time",note:"High = hardware interrupts not load-balanced"}),e.jsx(n,{name:"%soft",desc:"Software interrupt (softirq) handling time",note:"NET_RX dominating = network rx bottleneck"}),e.jsx(n,{name:"%steal",desc:"Hypervisor 'stealing' CPU cycles from this VM",note:"Only relevant in virtual machines"}),e.jsx(n,{name:"%idle",desc:"CPU truly idle (no runnable tasks, no I/O waits)",note:"Target: as much as your workload allows"})]})]})}),e.jsx(l,{language:"bash",code:`# Per-CPU stats every 2 seconds
mpstat -P ALL 2 5

# Show interrupt stats per CPU
mpstat -I ALL 2 3

# Only CPU 0 and CPU 2
mpstat -P 0,2 2 5`}),e.jsxs(x,{type:"info",title:"Uneven CPU Load",children:["If one CPU is at 100% while others are idle, you have an ",e.jsx("strong",{children:"IRQ affinity"})," problem or a single-threaded bottleneck. Use ",e.jsx("code",{children:"cat /proc/interrupts"})," to see interrupt distribution. Fix with",e.jsx("code",{children:" irqbalance"})," or manual ",e.jsx("code",{children:"/proc/irq/N/smp_affinity"})," tuning."]})]}),e.jsxs(b,{title:"sar — System Activity Reporter",children:[e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("code",{className:"text-cyan-400",children:"sar"})," is the ",e.jsx("em",{children:"historical"})," view — unlike vmstat and iostat which only show current activity, sar records data to ",e.jsx("code",{className:"text-cyan-400",children:"/var/log/sa/saXX"})," (where XX is the day of month) via the ",e.jsx("code",{className:"text-cyan-400",children:"sadc"})," data collector cron job. This lets you investigate what happened yesterday at 3am without needing to be awake."]}),e.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 border border-slate-800 text-sm",children:[e.jsx("div",{className:"font-semibold text-white mb-3 text-xs uppercase tracking-wider",children:"sar Data Flow"}),e.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:["Kernel /proc","→","sadc (collector)","→","/var/log/sa/saDD","→","sar (reader)","→","Human output"].map((t,s)=>e.jsx("span",{className:t==="→"?"text-slate-600":"bg-slate-800 border border-slate-700 rounded px-2 py-1 text-xs font-mono "+(t.startsWith("/")?"text-cyan-400":t.includes("sadc")?"text-violet-400":"text-slate-300"),children:t},s))})]}),e.jsx(l,{language:"bash",code:`# Install sysstat (enables sadc collection)
dnf install sysstat -y
systemctl enable --now sysstat

# Current CPU activity (like top, but periodic)
sar -u 2 5

# Memory stats
sar -r 2 5

# I/O stats (like iostat)
sar -b 2 5

# Network stats for interface eth0
sar -n DEV 2 5 | grep eth0

# Load average and run queue
sar -q 2 5

# Swap usage
sar -S 2 5

# View yesterday's data (from /var/log/sa)
sar -u -f /var/log/sa/sa09

# View from specific time to time
sar -u -s 09:00:00 -e 10:00:00 -f /var/log/sa/sa09`}),e.jsxs(x,{type:"exam",title:"sar for Exam",children:["The exam may ask you to set up monitoring or analyze historical performance. Know how to enable sysstat, where data is stored (",e.jsx("code",{children:"/var/log/sa/"}),"), and the key flags: ",e.jsx("code",{children:"-u"})," (CPU), ",e.jsx("code",{children:"-r"})," (mem),",e.jsx("code",{children:"-b"})," (I/O), ",e.jsx("code",{children:"-n DEV"})," (network), ",e.jsx("code",{children:"-q"})," (load)."]})]}),e.jsxs(b,{title:"top — Interactive Process Monitor",children:[e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("code",{className:"text-cyan-400",children:"top"})," reads from ",e.jsx("code",{children:"/proc/[PID]/stat"})," for each process and",e.jsx("code",{className:"text-cyan-400 ml-1",children:"/proc/meminfo"})," for system memory. It polls at the configured delay (default 3s). Understanding the header is crucial for rapid diagnosis."]}),e.jsx(u,{title:"top — Annotated Header",children:`top - 08:23:11 up 5 days, 14:22,  2 users,  load average: 0.52, 0.68, 0.71
Tasks: 284 total,   1 running, 283 sleeping,   0 stopped,   0 zombie
%Cpu(s):  5.2 us,  1.3 sy,  0.0 ni, 92.8 id,  0.4 wa,  0.1 hi,  0.2 si,  0.0 st
MiB Mem :  15892.4 total,   2341.2 free,   8921.4 used,   4629.8 buff/cache
MiB Swap:   4096.0 total,   4096.0 free,      0.0 used.   6548.3 avail Mem

    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
   1234 root      20   0  567123  45678  23456 R  45.2   0.3   5:23.45 myapp
   5678 mysql     20   0 2345678 456789  12345 S  12.3   2.8  45:12.33 mysqld`}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 mt-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold text-slate-400 uppercase mb-2",children:"Header Fields"}),e.jsxs("div",{className:"space-y-1 text-xs",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-cyan-400 font-mono",children:"load average:"}),e.jsx("span",{className:"text-slate-300 ml-2",children:"Avg runnable+uninterruptible tasks over 1/5/15 min. >nCPU = overloaded"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-cyan-400 font-mono",children:"wa (I/O wait):"}),e.jsx("span",{className:"text-slate-300 ml-2",children:"CPUs idle waiting for I/O. Root cause is I/O, not CPU"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-cyan-400 font-mono",children:"buff/cache:"}),e.jsx("span",{className:"text-slate-300 ml-2",children:"Reclaimable memory. OS will give it up under memory pressure"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-cyan-400 font-mono",children:"avail Mem:"}),e.jsx("span",{className:"text-slate-300 ml-2",children:"Estimated available without swap: free + reclaimable cache"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold text-slate-400 uppercase mb-2",children:"Process Fields"}),e.jsxs("div",{className:"space-y-1 text-xs",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-cyan-400 font-mono",children:"PR/NI:"}),e.jsx("span",{className:"text-slate-300 ml-2",children:"Priority / Nice value. PR=20+NI for normal processes"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-cyan-400 font-mono",children:"VIRT:"}),e.jsx("span",{className:"text-slate-300 ml-2",children:"Virtual address space size (doesn't mean that much RAM is used)"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-cyan-400 font-mono",children:"RES:"}),e.jsx("span",{className:"text-slate-300 ml-2",children:"Resident Set Size — actual physical RAM in use (the real cost)"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-cyan-400 font-mono",children:"SHR:"}),e.jsx("span",{className:"text-slate-300 ml-2",children:"Shared memory (mmap'd libs, shared segments). Part of RES"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-cyan-400 font-mono",children:"S:"}),e.jsx("span",{className:"text-slate-300 ml-2",children:"State: R=Running, S=Sleeping, D=Uninterruptible, Z=Zombie"})]})]})]})]}),e.jsx(l,{language:"bash",code:`# Interactive top shortcuts:
# 1     — toggle per-CPU vs aggregate view
# H     — toggle per-thread view (shows individual threads)
# V     — forest view (parent/child process tree)
# M     — sort by memory (RES)
# P     — sort by CPU
# z     — color mode
# i     — hide idle processes
# u     — filter by user

# Non-interactive: run 3 iterations, batch mode
top -b -n 3 | head -50

# Sort by memory, batch
top -b -n 1 -o %MEM | head -20`})]}),e.jsxs(b,{title:"powertop — Power Consumption Analysis",children:[e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("code",{className:"text-cyan-400",children:"powertop"})," uses perf events and kernel tracepoints to measure power consumption and identify what's preventing the CPU from entering deep idle states. It's critical for laptop/edge workloads and also reveals unexpected wakeup sources."]}),e.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-400 mb-3 font-semibold uppercase",children:"CPU Power States"}),e.jsxs("div",{className:"flex gap-4 flex-wrap text-xs",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"text-violet-400 font-semibold",children:"P-states (Performance)"}),e.jsx("div",{className:"text-slate-400",children:"Processor frequency/voltage pairs"}),e.jsx("div",{className:"text-slate-400",children:"P0 = highest, Pn = lowest freq"}),e.jsx("div",{className:"text-slate-400",children:"Controlled by cpufreq governor"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"text-cyan-400 font-semibold",children:"C-states (Idle)"}),e.jsx("div",{className:"text-slate-400",children:"C0 = active, C1 = halt, C3 = sleep"}),e.jsx("div",{className:"text-slate-400",children:"Deeper = less power, longer wake latency"}),e.jsx("div",{className:"text-slate-400",children:"C6/C7 = core fully powered down"})]})]})]}),e.jsx(l,{language:"bash",code:`# Interactive mode (requires root)
powertop

# Generate HTML report
powertop --html=/tmp/power-report.html

# Auto-apply all recommended tunables
powertop --auto-tune

# Calibrate first for better accuracy
powertop --calibrate`}),e.jsxs(x,{type:"info",title:"--auto-tune vs Permanent Changes",children:[e.jsx("code",{children:"powertop --auto-tune"})," applies optimizations at runtime but they don't persist. To persist powertop settings, create a systemd service that runs ",e.jsx("code",{children:"powertop --auto-tune"})," at boot, or use ",e.jsx("code",{children:"tuned"})," with the ",e.jsx("code",{children:"powersave"})," profile."]})]}),e.jsxs(b,{title:"perf — Hardware Performance Counters",children:[e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("code",{className:"text-cyan-400",children:"perf"})," interfaces with the kernel's ",e.jsx("strong",{children:"Performance Monitoring Units (PMU)"}),"— hardware registers inside the CPU that count low-level events like cache misses, branch mispredictions, and instruction completions. This gives you insight impossible to get from /proc alone."]}),e.jsx("div",{className:"grid sm:grid-cols-3 gap-3",children:[{title:"Hardware Events",items:["cache-misses","cache-references","branch-misses","cycles","instructions","LLC-load-misses"],color:"text-cyan-400"},{title:"Software Events",items:["page-faults","context-switches","cpu-migrations","minor-faults","major-faults"],color:"text-violet-400"},{title:"Tracepoint Events",items:["syscalls:sys_enter_read","sched:sched_switch","block:block_rq_issue","net:net_dev_xmit"],color:"text-amber-400"}].map(({title:t,items:s,color:r})=>e.jsxs("div",{className:"bg-slate-900 rounded-lg p-3 border border-slate-800",children:[e.jsx("div",{className:`text-xs font-semibold mb-2 ${r}`,children:t}),s.map(a=>e.jsx("div",{className:"text-xs font-mono text-slate-400 py-0.5",children:a},a))]},t))}),e.jsx(l,{language:"bash",code:`# Quick system-wide stats for 5 seconds
perf stat -a sleep 5

# Count cache misses for a specific program
perf stat -e cache-misses,cache-references,instructions ./myprogram

# IPC = instructions per cycle (1.0+ is good, <0.5 = likely memory-bound)
perf stat -e cycles,instructions ./myprogram

# Record call graph (flamegraph data)
perf record -g -p $(pgrep myapp) sleep 10
perf report --stdio

# Real-time top-like view
perf top -e cache-misses

# Count system calls
perf stat -e 'syscalls:sys_enter_*' -a sleep 5 2>&1 | sort -k1 -rn | head -20`}),e.jsxs(x,{type:"tip",title:"IPC — Instructions Per Cycle",children:["The IPC ratio from ",e.jsx("code",{children:"perf stat"})," is one of the most useful single metrics. A well-optimized CPU-bound program achieves 2–4 IPC on modern CPUs. An IPC of 0.3 means the CPU is spending 70% of its time ",e.jsx("em",{children:"stalled waiting for memory"})," — no amount of CPU tuning will help; you need to fix memory access patterns."]})]}),e.jsxs("div",{className:"rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 mt-6",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(g,{size:16,className:"text-amber-400"}),e.jsx("h3",{className:"font-semibold text-amber-300",children:"Exam Key Takeaways"})]}),e.jsxs("ul",{className:"space-y-1.5 text-sm text-slate-300",children:[e.jsxs("li",{children:["• All metrics ultimately come from ",e.jsx("code",{className:"text-cyan-400",children:"/proc"})," — there's no magic."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"vmstat si/so > 0"})," = active swapping = RAM pressure — tune with swappiness or add RAM."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"iostat %util → 100%"})," + high ",e.jsx("code",{children:"aqu-sz"})," = I/O saturated — switch scheduler or add storage."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"%iowait"})," is a CPU state, not an I/O measurement — high wa means CPUs are idle waiting for I/O."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"sar"})," requires ",e.jsx("code",{children:"sysstat"})," service enabled to collect historical data in ",e.jsx("code",{children:"/var/log/sa/"}),"."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"perf stat"})," IPC < 0.5 = memory-bound workload — consider huge pages or NUMA pinning."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"load average > nCPUs"})," sustained = CPU bottleneck — check run queue with ",e.jsx("code",{children:"vmstat r"}),"."]})]})]})]})}function Te(){const t=[{label:"PCP Tools (pmstat, pmrep, pmatop, Grafana)",color:"#8b5cf6",items:["pmstat","pmrep","pmatop","pmchart","Grafana/PCP"]},{label:"PMAPI — Performance Metrics API",color:"#06b6d4",items:["libpcp","pmlookup","pmfetch","pmstore"]},{label:"pmcd — Performance Metrics Collection Daemon",color:"#10b981",items:["TCP :44321","Agent multiplexer","PMNS resolver"]},{label:"PMDAs — Performance Metrics Domain Agents",color:"#f59e0b",items:["linux PMDA","proc PMDA","xfs PMDA","Custom PMDAs"]},{label:"Kernel / Hardware",color:"#6b7280",items:["/proc","/sys","hardware counters","perf events"]}];return e.jsx("div",{className:"space-y-1 my-4",children:t.map((s,r)=>e.jsxs("div",{className:"rounded-lg border p-3 flex items-center gap-3",style:{borderColor:s.color+"30",background:s.color+"08"},children:[e.jsx("div",{className:"font-medium text-sm",style:{color:s.color},children:s.label}),e.jsx("div",{className:"ml-auto hidden sm:flex gap-1.5 flex-wrap justify-end",children:s.items.map(a=>e.jsx("span",{className:"text-xs font-mono px-1.5 py-0.5 rounded border",style:{color:s.color,borderColor:s.color+"30",background:s.color+"10"},children:a},a))})]},r))})}function Ae(){return e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center",children:e.jsx(M,{size:20,className:"text-violet-400"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-white",children:"Performance Co-Pilot (PCP)"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"pmcd · pmlogger · pmstat · pmrep · pmatop · custom metrics"})]})]}),e.jsxs("p",{className:"text-slate-400 leading-relaxed max-w-3xl",children:["PCP is Red Hat's enterprise performance monitoring framework. Unlike ad-hoc tools, PCP provides a",e.jsx("strong",{className:"text-slate-200",children:" unified namespace"})," for thousands of metrics, a persistent logging infrastructure, and a query API that works the same way live or on archived data."]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-1",children:"PCP Architecture"}),e.jsx("p",{className:"text-sm text-slate-400 mb-2",children:"PCP separates collection, storage, and visualization into distinct components."}),e.jsx(Te,{}),e.jsx("div",{className:"grid sm:grid-cols-3 gap-3 mt-4",children:[{name:"pmcd",port:":44321",desc:"Central broker daemon. All tools connect here. Multiplexes requests to the right PMDA."},{name:"pmlogger",port:"Logging daemon",desc:"Records metric values to PCP archive files. Replays are indistinguishable from live data."},{name:"pmie",port:"Inference Engine",desc:"Rule-based alerting engine. Evaluates metric expressions and triggers actions."}].map(({name:t,port:s,desc:r})=>e.jsxs("div",{className:"bg-slate-900 rounded-lg p-3 border border-slate-800",children:[e.jsx("div",{className:"font-mono text-violet-400 font-semibold text-sm",children:t}),e.jsx("div",{className:"text-xs text-slate-500 mb-1",children:s}),e.jsx("div",{className:"text-xs text-slate-400 leading-relaxed",children:r})]},t))})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-3",children:"Installation & Quick Start"}),e.jsx(l,{language:"bash",code:`# Install core PCP and tools
dnf install pcp pcp-system-tools pcp-zeroconf -y

# pcp-zeroconf auto-configures pmlogger for common metrics
# Start the collection daemon
systemctl enable --now pmcd pmlogger

# Verify PCP is running
pcp           # shows version and enabled PMDAs
pminfo        # list ALL available metrics
pminfo -d kernel.all.load  # describe a specific metric

# Install additional PMDAs (e.g., for containers, databases)
dnf install pcp-pmda-podman pcp-pmda-postgresql`}),e.jsxs(x,{type:"exam",title:"pcp-zeroconf",children:["Installing ",e.jsx("code",{children:"pcp-zeroconf"})," and enabling ",e.jsx("code",{children:"pmcd"})," + ",e.jsx("code",{children:"pmlogger"})," is all you need for basic PCP monitoring. The exam may ask you to configure PCP — this three-step process covers it."]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Performance Metrics Name Space (PMNS)"}),e.jsx("p",{className:"text-sm text-slate-400 mb-3",children:"PCP organizes metrics in a hierarchical namespace similar to DNS. Every metric has a unique dotted name."}),e.jsx(u,{title:"pminfo — Explore the PMNS",children:`# List metrics in the kernel.cpu domain
$ pminfo kernel.cpu
kernel.cpu.user
kernel.cpu.sys
kernel.cpu.idle
kernel.cpu.wait.total
kernel.cpu.intr

# Get description and current value
$ pminfo -dfF kernel.cpu.user
kernel.cpu.user
    Data Type: 64-bit unsigned int  InDom: 60.0 0x3c000000
    Semantics: counter  Units: millisec
    inst [0 or "cpu0"] value 245678
    inst [1 or "cpu1"] value 198234

# Fetch current values
$ pmval -s 3 kernel.all.load
metric:    kernel.all.load
host:      localhost
semantics: instantaneous value
units:     none
samples:   3; interval: 1.00 sec
              1 min   5 min  15 min
              0.520   0.680   0.710`})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-3",children:"Key PCP Commands"}),e.jsx(l,{language:"bash",code:`# pmstat — like vmstat but via PCP
pmstat -s 5 -t 2sec

# pmrep — flexible reporter, CSV or column output
pmrep -s 10 -t 2s kernel.all.cpu.user disk.all.read_bytes
pmrep -o csv -s 100 -t 1s kernel.all.load > load.csv

# pmatop — like top but driven by PCP metrics
pmatop

# pmrep with a predefined config (from /etc/pcp/pmrep/)
pmrep :sar-u           # like 'sar -u'
pmrep :sar-d           # like 'sar -d'
pmrep :vmstat          # like 'vmstat'

# Query historical data from an archive
pmval -a /var/log/pcp/pmlogger/hostname/20260510 kernel.all.load

# Chart with pmchart (GUI)
pmchart -a /var/log/pcp/pmlogger/hostname/20260510`})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Creating Custom PMDAs"}),e.jsx("p",{className:"text-sm text-slate-400 mb-3",children:"You can expose any metric to PCP using a custom PMDA (Performance Metrics Domain Agent). PCP ships a simple shell PMDA for quick custom metrics."}),e.jsx(l,{language:"bash",code:`# Use the simple PMDA for shell-based custom metrics
# Metrics defined in /var/lib/pcp/pmdas/simple/simple.conf

# Example: Create a PMDA that exposes a custom counter
cd /var/lib/pcp/pmdas/simple
./Install

# Or use mmv (Memory Mapped Values) for application-level metrics
# Applications write to /var/tmp/mmv/<name>
# PCP reads them instantly via mmap — zero overhead`})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"pmlogger — Persistent Recording"}),e.jsx(l,{language:"bash",code:`# pmlogger config is in /etc/pcp/pmlogger/control
# Default archive location: /var/log/pcp/pmlogger/<hostname>/

# Manually record specific metrics to a file
pmlogger -c /dev/stdin -l /tmp/mylog.log /tmp/myarchive <<EOF
log mandatory on every 2 seconds {
    kernel.all.cpu.user
    kernel.all.cpu.sys
    mem.util.used
    disk.all.read_bytes
    disk.all.write_bytes
}
EOF

# Check archive contents
pmdumplog -l /tmp/myarchive
pmdumplog -a /tmp/myarchive | head -50

# Replay archive through any PCP tool
pmval -a /tmp/myarchive kernel.all.cpu.user`})]}),e.jsxs("div",{className:"rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 mt-6",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(g,{size:16,className:"text-amber-400"}),e.jsx("h3",{className:"font-semibold text-amber-300",children:"Exam Key Takeaways"})]}),e.jsxs("ul",{className:"space-y-1.5 text-sm text-slate-300",children:[e.jsxs("li",{children:["• Install ",e.jsx("code",{className:"text-cyan-400",children:"pcp pcp-system-tools pcp-zeroconf"})," then enable ",e.jsx("code",{className:"text-cyan-400",children:"pmcd"})," and ",e.jsx("code",{className:"text-cyan-400",children:"pmlogger"}),"."]}),e.jsxs("li",{children:["• PCP metrics use a dotted namespace: ",e.jsx("code",{className:"text-cyan-400",children:"kernel.all.load"}),", ",e.jsx("code",{className:"text-cyan-400",children:"disk.all.read_bytes"}),"."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"pmstat"})," is PCP's vmstat equivalent; ",e.jsx("code",{className:"text-cyan-400",children:"pmrep"})," offers flexible output."]}),e.jsxs("li",{children:["• Archives are stored in ",e.jsx("code",{className:"text-cyan-400",children:"/var/log/pcp/pmlogger/<hostname>/"})," and can be replayed with any PCP tool."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"pminfo -d <metric>"})," describes a metric including units, semantics, and instances."]})]})]})]})}function De(){return e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center",children:e.jsx(A,{size:20,className:"text-sky-400"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-white",children:"Hardware Profiling"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"dmesg · dmidecode · sosreport · lscpu · lspci"})]})]}),e.jsxs("p",{className:"text-slate-400 leading-relaxed max-w-3xl",children:["Before tuning, you must understand what hardware you're running on. A NUMA-unaware tuning on a 4-socket server can make performance ",e.jsx("em",{children:"worse"}),". These tools decode BIOS tables and kernel logs to reveal your hardware topology."]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"dmesg — Kernel Ring Buffer"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-3",children:["The kernel maintains a circular ring buffer in memory where it logs messages from boot time onwards. Each message has a ",e.jsx("strong",{className:"text-slate-200",children:"facility"})," (subsystem) and",e.jsx("strong",{className:"text-slate-200",children:" level"})," (severity). The buffer has a fixed size (default 512KB, configurable via ",e.jsx("code",{className:"text-cyan-400",children:"CONFIG_LOG_BUF_SHIFT"}),"). When full, old messages are overwritten."]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold text-slate-400 uppercase mb-2",children:"Log Levels"}),e.jsx("div",{className:"space-y-1 text-xs",children:[{level:"0 EMERG",color:"text-rose-400",desc:"System is unusable"},{level:"1 ALERT",color:"text-rose-400",desc:"Action must be taken immediately"},{level:"2 CRIT",color:"text-orange-400",desc:"Critical conditions"},{level:"3 ERR",color:"text-orange-400",desc:"Error conditions"},{level:"4 WARNING",color:"text-amber-400",desc:"Warning conditions"},{level:"5 NOTICE",color:"text-cyan-400",desc:"Normal but significant"},{level:"6 INFO",color:"text-slate-300",desc:"Informational messages"},{level:"7 DEBUG",color:"text-slate-500",desc:"Debug-level messages"}].map(({level:t,color:s,desc:r})=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:`font-mono ${s} w-24 flex-shrink-0`,children:t}),e.jsx("span",{className:"text-slate-400",children:r})]},t))})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold text-slate-400 uppercase mb-2",children:"Key Facilities"}),e.jsxs("div",{className:"space-y-1 text-xs font-mono text-slate-400",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-cyan-400",children:"kern"})," — kernel messages"]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-cyan-400",children:"user"})," — user-level messages"]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-cyan-400",children:"daemon"})," — system daemon messages"]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-cyan-400",children:"syslog"})," — messages from syslogd"]})]})]})]}),e.jsx(l,{language:"bash",code:`# Human-readable timestamps
dmesg -T

# Follow in real-time (like tail -f)
dmesg -w

# Filter by log level (show errors and above)
dmesg -l err,crit,alert,emerg

# Filter by facility
dmesg -f kern

# Filter errors with timestamps
dmesg -T -l err,warn

# Search for hardware-related messages
dmesg | grep -E 'MCE|ECC|EDAC|Hardware Error'

# Find memory errors
dmesg | grep -i 'memory|DIMM|ECC'

# Kernel messages since last boot
journalctl -k -b

# See why the system rebooted
journalctl -k -b -1 | tail -50  # last boot's kernel messages`}),e.jsx(u,{title:"dmesg -T — Hardware Boot Messages",children:`[May10 08:00:01] BIOS-provided physical RAM map:
[  +0.000000] ACPI: IRQ0 used by override.
[  +0.003241] NUMA: Node 0 [mem 0x0000000000-0x3fffffffff] + [mem 0x100000000-0x3fffffffff] -> [mem 0x0000000000-0x3fffffffff]
[  +0.004123] NODE_DATA(0) allocated [mem 0x3ffd5000-0x3fffffff]
[  +0.021456] ACPI: PCI Interrupt Link [LNKA] (IRQs 3 4 5 6 7 9 10 *11)
[  +0.034512] nvme nvme0: pci function 0000:03:00.0
[  +0.045678] nvme nvme0: 8/0/0 default/read/poll queues
[  +0.056789] EXT4-fs (sda1): mounted filesystem with ordered data mode`}),e.jsxs(x,{type:"info",title:"MCE — Machine Check Exceptions",children:["MCE errors in dmesg indicate hardware faults (CPU, memory, PCI). Commands like",e.jsx("code",{children:" mcelog"})," or ",e.jsx("code",{children:"rasdaemon"})," decode them. Seeing MCE in dmesg is a serious hardware health warning — it's not a software bug."]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"dmidecode — SMBIOS/DMI Table Decoder"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-3",children:["The BIOS stores hardware information in ",e.jsx("strong",{className:"text-slate-200",children:"SMBIOS"})," (System Management BIOS) tables at a fixed physical address. ",e.jsx("code",{className:"text-cyan-400",children:"dmidecode"})," reads",e.jsx("code",{className:"text-cyan-400 ml-1",children:"/sys/firmware/dmi/tables/"})," (kernel exposes SMBIOS tables here) and parses the binary structures. Each entry has a numeric ",e.jsx("strong",{children:"type"}),":"]}),e.jsx("div",{className:"grid sm:grid-cols-3 gap-2 mb-4",children:[{type:"Type 0",name:"BIOS",desc:"Vendor, version, release date"},{type:"Type 1",name:"System",desc:"Manufacturer, model, UUID, serial"},{type:"Type 4",name:"Processor",desc:"CPU socket, family, speed, cores"},{type:"Type 7",name:"Cache",desc:"L1/L2/L3 cache sizes and types"},{type:"Type 17",name:"Memory Device",desc:"Each DIMM slot: size, speed, type"},{type:"Type 19",name:"Memory Array",desc:"Physical memory array details"}].map(({type:t,name:s,desc:r})=>e.jsxs("div",{className:"bg-slate-900 rounded p-2.5 border border-slate-800",children:[e.jsx("div",{className:"font-mono text-sky-400 text-xs",children:t}),e.jsx("div",{className:"text-white text-xs font-medium",children:s}),e.jsx("div",{className:"text-slate-500 text-xs",children:r})]},t))}),e.jsx(l,{language:"bash",code:`# Show everything (verbose)
dmidecode

# CPU information
dmidecode -t processor

# Memory modules — see each DIMM slot
dmidecode -t memory

# BIOS version
dmidecode -t bios | grep -E 'Version|Release'

# System serial and model (useful for hardware identification)
dmidecode -t system | grep -E 'Manufacturer|Product Name|Serial'

# Check maximum memory capacity and current DIMMs
dmidecode -t 16,17 | grep -E 'Maximum Capacity|Size|Speed|Type'

# Quick one-liner for memory layout
dmidecode -t 17 | awk '/Memory Device/{slot++} /Size:/{print "Slot " slot ": " $0}'`}),e.jsx(u,{title:"dmidecode -t 17 — Sample DIMM Output",children:`Handle 0x0020, DMI type 17, 84 bytes
Memory Device
        Array Handle: 0x0010
        Error Information Handle: 0x0011
        Total Width: 72 bits
        Data Width: 64 bits
        Size: 16 GB
        Form Factor: DIMM
        Set: None
        Locator: DIMM_A1
        Bank Locator: NODE 0
        Type: DDR4
        Type Detail: Synchronous Registered (Buffered)
        Speed: 3200 MT/s
        Manufacturer: Samsung
        Serial Number: [REDACTED]
        Part Number: M393A2K43DB3-CWE
        Rank: 2
        Configured Memory Speed: 3200 MT/s
        Minimum Voltage: 1.14 V`})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"sosreport — Support Data Collection"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-3",children:[e.jsx("code",{className:"text-cyan-400",children:"sosreport"})," (now ",e.jsx("code",{className:"text-cyan-400",children:"sos report"})," in RHEL 9) collects a comprehensive snapshot of system state including configuration files, command outputs, kernel parameters, logs, and hardware information. It's used when opening Red Hat support cases."]}),e.jsx(l,{language:"bash",code:`# Generate a full sosreport (RHEL 9)
sos report

# Quick report with fewer plugins
sos report --batch --all-logs

# Only collect specific plugins
sos report -o hardware,kernel,memory,networking

# List available plugins
sos report -l

# Collect without sensitive data (customer name, hostname redacted)
sos report --clean

# Output to specific directory
sos report -o /tmp/sosdata/`}),e.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 border border-slate-800 mt-3",children:[e.jsx("div",{className:"text-xs font-semibold text-slate-400 uppercase mb-2",children:"What sosreport Collects"}),e.jsx("div",{className:"grid sm:grid-cols-3 gap-2 text-xs text-slate-400",children:["All /proc and /sys relevant files","Network configuration (ip, ss, netstat)","Installed packages (rpm -qa)","systemd journal logs","SELinux status and policy","Storage layout (lsblk, fdisk, pvs)","Memory details (dmidecode, free)","CPU info (lscpu, numactl)","Tuned profile and sysctl values","Performance data (sar archives)","dmesg output","Hardware error logs (mcelog)"].map(t=>e.jsxs("div",{className:"flex items-start gap-1",children:[e.jsx("span",{className:"text-sky-500 mt-0.5",children:"•"}),e.jsx("span",{children:t})]},t))})]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"lscpu — CPU Topology"}),e.jsx(l,{language:"bash",code:`# Full CPU info including NUMA topology
lscpu

# Key NUMA fields to look for:
# NUMA node(s): 2            <- number of NUMA nodes
# NUMA node0 CPU(s): 0-11   <- CPUs on node 0
# NUMA node1 CPU(s): 12-23  <- CPUs on node 1

# Machine-parseable output
lscpu -J  # JSON
lscpu -p  # CSV per-CPU

# Show CPU vulnerability mitigations (Spectre/Meltdown impact on performance)
lscpu | grep Vulnerability

# Display cache hierarchy
lscpu --caches`}),e.jsx(u,{title:"lscpu — NUMA Topology Example",children:`Architecture:        x86_64
CPU op-mode(s):      32-bit, 64-bit
Byte Order:          Little Endian
CPU(s):              48
On-line CPU(s) list: 0-47
Thread(s) per core:  2
Core(s) per socket:  12
Socket(s):           2
NUMA node(s):        2
Vendor ID:           GenuineIntel
Model name:          Intel Xeon Gold 6336Y
CPU MHz:             3600.000
CPU max MHz:         4200.0000
CPU min MHz:         800.0000
L1d cache:           32K
L1i cache:           32K
L2 cache:            1024K
L3 cache:            36608K
NUMA node0 CPU(s):   0-11,24-35
NUMA node1 CPU(s):   12-23,36-47`}),e.jsxs(x,{type:"warning",title:"NUMA Topology Matters for Tuning",children:["On multi-socket servers, memory access to a remote NUMA node is 2-4x slower than local. Always check ",e.jsx("code",{children:"lscpu"})," and ",e.jsx("code",{children:"numactl --hardware"})," before tuning. CPU pinning without NUMA awareness can cause performance regressions."]})]}),e.jsxs("div",{className:"rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 mt-6",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(g,{size:16,className:"text-amber-400"}),e.jsx("h3",{className:"font-semibold text-amber-300",children:"Exam Key Takeaways"})]}),e.jsxs("ul",{className:"space-y-1.5 text-sm text-slate-300",children:[e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"dmesg -T -l err,warn"})," — check for hardware errors at boot or runtime."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"dmidecode -t memory"})," — see DIMM slots, speed, and type for memory planning."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"dmidecode -t processor"})," — verify CPU features and socket count for NUMA awareness."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"sos report"})," (RHEL 9) — comprehensive system snapshot used for Red Hat support."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"lscpu"})," — reveals NUMA topology; look for NUMA node lines to understand memory layout."]}),e.jsx("li",{children:"• MCE errors in dmesg indicate actual hardware failures — escalate, don't ignore."})]})]})]})}function Ie(){const t=[{path:"/proc/sys/",color:"text-cyan-400",children:[{path:"kernel/",desc:"Process scheduling, NUMA, shmem, core dumps",children:["pid_max","shmmax","shmall","numa_balancing","core_pattern","ngroups_max"]},{path:"vm/",desc:"Virtual memory — the most performance-critical namespace",children:["swappiness","dirty_ratio","overcommit_memory","nr_hugepages","vfs_cache_pressure","zone_reclaim_mode"]},{path:"net/",desc:"Network stack — TCP, UDP, IPv4, IPv6, interfaces",children:["ipv4/tcp_rmem","ipv4/tcp_wmem","core/rmem_max","ipv4/tcp_congestion_control"]},{path:"fs/",desc:"Filesystem limits — file descriptors, inotify, pipes",children:["file-max","nr_open","inotify/max_user_watches","aio-max-nr"]},{path:"dev/",desc:"Device-specific settings",children:["cdrom/","raid/"]}]}];return e.jsx("div",{className:"bg-slate-900 rounded-lg p-4 border border-slate-800 my-4",children:t[0].children.map(({path:s,desc:r,children:a})=>e.jsxs("div",{className:"mb-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-cyan-400 font-mono text-sm",children:["/proc/sys/",s]}),e.jsxs("span",{className:"text-slate-500 text-xs",children:["— ",r]})]}),e.jsx("div",{className:"flex flex-wrap gap-1.5 mt-1 ml-4",children:a.map(c=>e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700",children:c},c))})]},s))})}function Re(){return e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center",children:e.jsx(y,{size:20,className:"text-indigo-400"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-white",children:"Kernel Behavior"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"/proc/sys · sysctl · /sys filesystem · module parameters"})]})]}),e.jsxs("p",{className:"text-slate-400 leading-relaxed max-w-3xl",children:["The Linux kernel exposes its internal state and configuration through two virtual filesystems:",e.jsx("code",{className:"text-cyan-400 mx-1",children:"/proc"})," (procfs) and",e.jsx("code",{className:"text-cyan-400 mx-1",children:"/sys"})," (sysfs). Understanding how to read and modify these, and critically — how to make changes ",e.jsx("strong",{className:"text-white",children:"persistent"})," — is the heart of EX442."]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"/proc/sys — Runtime Kernel Parameters"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-2",children:["The kernel exports hundreds of tunable parameters as files under ",e.jsx("code",{className:"text-cyan-400",children:"/proc/sys/"}),". Each file corresponds to a kernel variable. Writing to a file changes the kernel's behavior ",e.jsx("em",{children:"immediately"})," — no restart required. Reading a file shows the current value."]}),e.jsx(Ie,{}),e.jsx(l,{language:"bash",code:`# Read a parameter (two equivalent methods)
cat /proc/sys/vm/swappiness
sysctl vm.swappiness

# Write a parameter (immediately, not persistent)
echo 10 > /proc/sys/vm/swappiness
sysctl -w vm.swappiness=10

# The dot notation in sysctl maps to / in /proc/sys:
# vm.swappiness  <->  /proc/sys/vm/swappiness
# net.ipv4.tcp_rmem  <->  /proc/sys/net/ipv4/tcp_rmem

# Show ALL current sysctl values
sysctl -a

# Search for a parameter
sysctl -a | grep swappiness
sysctl -a | grep -E 'hugepage|numa'`}),e.jsxs("div",{className:"bg-amber-400/5 border border-amber-400/20 rounded-lg p-4 mt-3",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(m,{size:14,className:"text-amber-400"}),e.jsx("span",{className:"text-amber-300 font-semibold text-sm",children:"Making sysctl Changes Persistent"})]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-3",children:["Direct writes to ",e.jsx("code",{children:"/proc/sys"})," are lost on reboot. Use one of these persistent methods:"]}),e.jsx(l,{language:"bash",code:`# METHOD 1: /etc/sysctl.conf (system-wide, lower priority)
echo "vm.swappiness = 10" >> /etc/sysctl.conf

# METHOD 2 (PREFERRED): Drop-in file in /etc/sysctl.d/
# Files are processed in alphabetical order; later files override earlier
cat > /etc/sysctl.d/99-performance.conf << 'EOF'
vm.swappiness = 10
vm.dirty_ratio = 15
net.core.rmem_max = 134217728
EOF

# Apply immediately without rebooting
sysctl -p /etc/sysctl.d/99-performance.conf

# Or apply all files
sysctl --system

# Verify
sysctl vm.swappiness`}),e.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[e.jsxs("span",{className:"persist-badge",children:[e.jsx(m,{size:10})," Persists across reboots"]}),e.jsx("span",{className:"text-xs text-slate-500",children:"via /etc/sysctl.d/ drop-in files"})]})]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"/sys — The sysfs Filesystem"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-3",children:["While ",e.jsx("code",{className:"text-cyan-400",children:"/proc/sys"})," exposes kernel variables, ",e.jsx("code",{className:"text-cyan-400",children:"/sys"}),"(sysfs) exposes the ",e.jsx("strong",{className:"text-slate-200",children:"kernel object model"}),". Every device, driver, module, and bus is represented as a directory. Attributes (files) represent properties of those objects. This is how ",e.jsx("code",{children:"udev"}),", ",e.jsx("code",{children:"lspci"}),", and device management tools work."]}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-3 mb-4",children:[{path:"/sys/block/sda/queue/",desc:"Block device I/O scheduler, queue depth, read-ahead"},{path:"/sys/devices/system/cpu/",desc:"Per-CPU frequency, C-states, online/offline control"},{path:"/sys/devices/system/node/",desc:"NUMA node topology and memory statistics"},{path:"/sys/kernel/mm/hugepages/",desc:"Huge page configuration and allocation stats"},{path:"/sys/kernel/mm/transparent_hugepage/",desc:"THP enabled/disabled, defrag behavior"},{path:"/sys/bus/pci/devices/",desc:"PCI device attributes (driver, power management)"}].map(({path:t,desc:s})=>e.jsxs("div",{className:"bg-slate-900 rounded p-3 border border-slate-800",children:[e.jsx("code",{className:"text-cyan-400 text-xs font-mono",children:t}),e.jsx("p",{className:"text-slate-400 text-xs mt-1",children:s})]},t))}),e.jsx(l,{language:"bash",code:`# Check and change I/O scheduler for nvme0n1
cat /sys/block/nvme0n1/queue/scheduler
echo mq-deadline > /sys/block/nvme0n1/queue/scheduler

# CPU frequency governor (scaling)
cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor
echo performance > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor

# Set all CPUs at once
for cpu in /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor; do
    echo performance > $cpu
done

# Transparent Huge Pages
cat /sys/kernel/mm/transparent_hugepage/enabled
echo madvise > /sys/kernel/mm/transparent_hugepage/enabled

# NUMA memory stats
cat /sys/devices/system/node/node0/meminfo`}),e.jsxs(x,{type:"warning",title:"Persisting /sys Changes",children:["Writes to ",e.jsx("code",{children:"/sys"})," are ",e.jsx("em",{children:"not"})," persistent. Use ",e.jsx("strong",{children:"udev rules"})," for device-specific settings (like I/O scheduler per device) and ",e.jsx("strong",{children:"tuned profiles"})," or systemd units for CPU/system settings."]}),e.jsx(l,{language:"bash",filename:"/etc/udev/rules.d/60-ioscheduler.rules",code:`# Set mq-deadline for all SATA SSDs, none for NVMe
ACTION=="add|change", KERNEL=="sd[a-z]", ATTR{queue/rotational}=="0", ATTR{queue/scheduler}="mq-deadline"
ACTION=="add|change", KERNEL=="nvme[0-9]*", ATTR{queue/scheduler}="none"`}),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsxs("span",{className:"persist-badge",children:[e.jsx(m,{size:10})," Persists across reboots"]}),e.jsx("span",{className:"text-xs text-slate-500",children:"via udev rules — applied at device discovery"})]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Kernel Module Parameters"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-3",children:["Kernel modules can expose parameters that control their behavior. Parameters can be set at module load time or modified at runtime via ",e.jsx("code",{className:"text-cyan-400",children:"/sys/module/<name>/parameters/"}),"."]}),e.jsx(l,{language:"bash",code:`# List all parameters for a module
modinfo -p <module_name>
modinfo -p iwlwifi   # WiFi driver parameters
modinfo -p tcp_bbr   # BBR congestion control parameters

# Load a module with a parameter
modprobe tcp_bbr
modprobe nf_conntrack hashsize=65536

# View current parameter values at runtime
ls /sys/module/nf_conntrack/parameters/
cat /sys/module/nf_conntrack/parameters/hashsize

# Change a runtime-modifiable parameter
echo 131072 > /sys/module/nf_conntrack/parameters/hashsize`}),e.jsx(l,{language:"bash",filename:"/etc/modprobe.d/99-performance.conf",code:`# Set module parameters persistently (applied at next module load)
# Format: options <module_name> <param>=<value>

# Increase conntrack hash table size
options nf_conntrack hashsize=131072

# Enable BBR congestion control with high buffer sizes
options tcp_bbr bw_rtprop_win_rtts=10

# Intel NVMe performance settings
options nvme_core io_timeout=4294967295`}),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsxs("span",{className:"persist-badge",children:[e.jsx(m,{size:10})," Persists across reboots"]}),e.jsx("span",{className:"text-xs text-slate-500",children:"via /etc/modprobe.d/ — applied at module load"})]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-3",children:"Key Kernel Performance Parameters"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"metric-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description & Tuning Direction"})]})}),e.jsx("tbody",{children:[{param:"vm.swappiness",default:"60",desc:"Tendency to swap anonymous pages (0=prefer RAM, 100=aggressive swap, 200=RHEL9 max)"},{param:"vm.dirty_ratio",default:"20",desc:"Max % of RAM for dirty pages before writes block. Lower = less write bursting"},{param:"vm.dirty_background_ratio",default:"10",desc:"% RAM dirty pages trigger background writeback. Lower = smoother I/O"},{param:"vm.overcommit_memory",default:"0",desc:"0=heuristic, 1=always allow, 2=never overcommit beyond ratio"},{param:"vm.nr_hugepages",default:"0",desc:"Static huge pages (2MB each). Must be allocated at boot for best results"},{param:"vm.vfs_cache_pressure",default:"100",desc:"Pressure to reclaim inode/dentry cache. <100 = retain more, 0 = never reclaim"},{param:"kernel.shmmax",default:"4GB",desc:"Max size of single SYSV shared memory segment"},{param:"kernel.shmall",default:"varies",desc:"Total pages for SYSV shared memory across all segments"},{param:"kernel.numa_balancing",default:"1",desc:"Auto NUMA balancing — may cause page migrations. Disable on pinned workloads"},{param:"net.core.rmem_max",default:"212992",desc:"Max socket receive buffer — must be >= tcp_rmem[2]"},{param:"net.core.wmem_max",default:"212992",desc:"Max socket send buffer — must be >= tcp_wmem[2]"},{param:"net.ipv4.tcp_rmem",default:"4096 131072 6291456",desc:"Min/default/max TCP receive buffer per socket"}].map(({param:t,default:s,desc:r})=>e.jsxs("tr",{children:[e.jsx("td",{className:"font-mono text-cyan-400 text-xs",children:t}),e.jsx("td",{className:"font-mono text-slate-400 text-xs whitespace-nowrap",children:s}),e.jsx("td",{className:"text-slate-300 text-xs",children:r})]},t))})]})})]}),e.jsxs("div",{className:"rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 mt-6",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(g,{size:16,className:"text-amber-400"}),e.jsx("h3",{className:"font-semibold text-amber-300",children:"Exam Key Takeaways"})]}),e.jsxs("ul",{className:"space-y-1.5 text-sm text-slate-300",children:[e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"sysctl -w"})," changes are ",e.jsx("strong",{className:"text-rose-400",children:"not persistent"})," — use ",e.jsx("code",{className:"text-cyan-400",children:"/etc/sysctl.d/"})," drop-in files."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"/sys"})," writes are ",e.jsx("strong",{className:"text-rose-400",children:"not persistent"})," — use udev rules for devices, tuned profiles for system settings."]}),e.jsxs("li",{children:["• Module parameter files go in ",e.jsx("code",{className:"text-cyan-400",children:"/etc/modprobe.d/*.conf"})," using ",e.jsx("code",{children:"options module_name param=value"})," syntax."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"sysctl --system"})," applies all files in /etc/sysctl.d/, /run/sysctl.d/, /usr/lib/sysctl.d/ in order."]}),e.jsxs("li",{children:["• Dot notation in sysctl maps directly to ",e.jsx("code",{className:"text-cyan-400",children:"/proc/sys/"})," with dots replaced by slashes."]})]})]})]})}function Be(){return e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center",children:e.jsx(N,{size:20,className:"text-amber-400"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-white",children:"Application Performance"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"ps · Valgrind · SystemTap · eBPF · bpftrace"})]})]}),e.jsxs("p",{className:"text-slate-400 leading-relaxed max-w-3xl",children:["System tools show aggregate metrics; these tools let you ",e.jsx("em",{children:"interrogate individual processes"})," with surgical precision. eBPF in particular has revolutionized Linux observability — it lets you run safe custom programs inside the kernel without loading kernel modules."]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"ps — Process Status Deep Dive"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-3",children:[e.jsx("code",{className:"text-cyan-400",children:"ps"})," reads from the ",e.jsx("code",{className:"text-cyan-400",children:"/proc/[PID]/"}),"directory structure. Every process has its own directory containing dozens of pseudo-files:",e.jsx("code",{className:"text-cyan-400 ml-1",children:"stat"}),", ",e.jsx("code",{className:"text-cyan-400",children:"status"}),",",e.jsx("code",{className:"text-cyan-400 ml-1",children:"maps"}),", ",e.jsx("code",{className:"text-cyan-400",children:"fd/"}),",",e.jsx("code",{className:"text-cyan-400 ml-1",children:"io"}),", and more."]}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-3 mb-4",children:[{file:"/proc/[PID]/stat",desc:"One-line process state: PID, name, state (S/R/D/Z), PPID, CPU times, priority, nice, num_threads, virtual memory size, RSS"},{file:"/proc/[PID]/status",desc:"Human-readable: VmRSS, VmSwap, Threads, voluntary/involuntary context switches, CapPrm"},{file:"/proc/[PID]/maps",desc:"Virtual memory map: all mmap regions, file-backed, anonymous, shared libraries"},{file:"/proc/[PID]/io",desc:"I/O counters: rchar, wchar, syscr, syscw, read_bytes, write_bytes, cancelled_write_bytes"},{file:"/proc/[PID]/fd/",desc:"Symlinks to all open file descriptors — detect file descriptor leaks"},{file:"/proc/[PID]/smaps",desc:"Detailed memory map with PSS (Proportional Set Size) — true memory cost per process"}].map(({file:t,desc:s})=>e.jsxs("div",{className:"bg-slate-900 rounded-lg p-3 border border-slate-800",children:[e.jsx("code",{className:"text-amber-400 text-xs font-mono",children:t}),e.jsx("p",{className:"text-slate-400 text-xs mt-1 leading-relaxed",children:s})]},t))}),e.jsx(l,{language:"bash",code:`# BSD style — all processes
ps aux

# System V style — all processes with full info
ps -ef

# Forest view — show parent/child relationships
ps -ef --forest

# Custom columns — the real power of ps
ps -eo pid,ppid,stat,pri,ni,pcpu,pmem,rss,vsz,comm

# Monitor thread count per process
ps -eo pid,nlwp,comm | sort -k2 -rn | head

# Find top memory users (RSS in kB)
ps -eo pid,comm,rss --sort=-rss | head -15

# Processes in D state (uninterruptible sleep = waiting for I/O)
ps -eo pid,stat,comm | awk '$2 ~ /^D/ {print}'

# Process I/O stats (needs /proc/[PID]/io)
ps -eo pid,comm -o "rchar,wchar,read_bytes,write_bytes" 2>/dev/null | head`}),e.jsx("div",{className:"overflow-x-auto mt-3",children:e.jsxs("table",{className:"metric-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"State"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Meaning"}),e.jsx("th",{children:"Concern"})]})}),e.jsx("tbody",{children:[{state:"R",name:"Running",meaning:"On CPU or in run queue",concern:"Normal for active processes"},{state:"S",name:"Sleeping",meaning:"Interruptible sleep (waiting for event)",concern:"Normal — waiting on I/O, socket, sleep()"},{state:"D",name:"Disk sleep",meaning:"Uninterruptible sleep — cannot be killed",concern:"Waiting for kernel I/O — D state flood = storage problem"},{state:"Z",name:"Zombie",meaning:"Terminated, parent hasn't called wait()",concern:"Parent has a bug; zombies waste no resources but count against PID limit"},{state:"T",name:"Stopped",meaning:"Stopped via SIGSTOP or traced (ptrace)",concern:"Check if debugging session or job control"},{state:"I",name:"Idle",meaning:"Idle kernel thread (Linux 4.14+)",concern:"Not a zombie — kernel threads that are deliberately idle"}].map(({state:t,name:s,meaning:r,concern:a})=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("span",{className:"font-mono text-amber-400 font-bold",children:t})}),e.jsx("td",{className:"text-white text-sm",children:s}),e.jsx("td",{className:"text-slate-300 text-sm",children:r}),e.jsx("td",{className:"text-slate-400 text-xs italic",children:a})]},t))})]})})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Valgrind — Dynamic Analysis Suite"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-3",children:["Valgrind works by running your program on a synthetic CPU (called the Valgrind core / VEX IR). Every instruction is translated and instrumented. This means ",e.jsx("strong",{className:"text-slate-200",children:"no recompilation needed"}),', but programs run 20-100x slower. Each "tool" within Valgrind is a plugin that instruments differently.']}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-4 mb-4",children:[{tool:"memcheck",flag:"--tool=memcheck (default)",desc:"Detects memory errors: use-after-free, buffer overflow, uninitialized reads, memory leaks",color:"text-rose-400"},{tool:"callgrind",flag:"--tool=callgrind",desc:"Call graph profiler: counts instructions, cache hits/misses per function. Visualize with KCachegrind",color:"text-cyan-400"},{tool:"cachegrind",flag:"--tool=cachegrind",desc:"Cache profiler: simulates L1/L2/L3 cache. Shows miss rates per source line",color:"text-violet-400"},{tool:"massif",flag:"--tool=massif",desc:"Heap profiler: tracks heap allocations over time. Produces snapshots for ms_print",color:"text-emerald-400"},{tool:"helgrind",flag:"--tool=helgrind",desc:"Thread error detector: data races, lock order violations, POSIX pthreads misuse",color:"text-amber-400"},{tool:"drd",flag:"--tool=drd",desc:"Data Race Detector: alternative to helgrind, lower memory use, finds more race types",color:"text-sky-400"}].map(({tool:t,flag:s,desc:r,color:a})=>e.jsxs("div",{className:"bg-slate-900 rounded-lg p-3 border border-slate-800",children:[e.jsx("div",{className:`font-mono font-semibold text-sm ${a}`,children:t}),e.jsx("div",{className:"text-xs text-slate-500 font-mono mb-1",children:s}),e.jsx("div",{className:"text-xs text-slate-400 leading-relaxed",children:r})]},t))}),e.jsx(l,{language:"bash",code:`# Memory leak detection
valgrind --leak-check=full --show-leak-kinds=all --track-origins=yes ./myapp

# CPU profiling with callgrind
valgrind --tool=callgrind ./myapp
callgrind_annotate callgrind.out.<PID>   # text report
kcachegrind callgrind.out.<PID>          # GUI (requires X)

# Cache analysis
valgrind --tool=cachegrind ./myapp
cg_annotate cachegrind.out.<PID>

# Heap memory growth over time
valgrind --tool=massif --pages-as-heap=yes ./myapp
ms_print massif.out.<PID>

# Thread races (run multiple iterations for best coverage)
valgrind --tool=helgrind --history-level=full ./myapp_threaded`})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"SystemTap — Kernel Scripting"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-3",children:["SystemTap compiles scripts into kernel modules that hook into kernel probes (kprobes, uprobes, tracepoints). It's more powerful than eBPF for complex logic, but requires kernel debug symbols and root access. Requires ",e.jsx("code",{className:"text-cyan-400",children:"kernel-devel"})," and ",e.jsx("code",{className:"text-cyan-400",children:"kernel-debuginfo"}),"."]}),e.jsx(l,{language:"bash",code:`# Install SystemTap
dnf install systemtap systemtap-runtime kernel-devel-$(uname -r)

# For full function names, install debuginfo (large download)
dnf debuginfo-install kernel-$(uname -r)

# Run a simple script — count syscalls per second
stap -ve '
global count
probe syscall.* { count[execname()]++ }
probe timer.s(1) {
    foreach (name in count-)
        printf("%-20s %d
", name, count[name])
    delete count
}
'

# Trace all writes to a specific file
stap -ve '
probe kernel.function("vfs_write") {
    if (filename = @cast($file, "file")->f_path->dentry->d_name->name)
        printf("PID %d wrote to %s
", pid(), kernel_string(filename))
}
'`}),e.jsx(x,{type:"info",title:"SystemTap vs eBPF",children:"SystemTap requires kernel debug symbols and compilation at probe time (~10s startup). eBPF/bpftrace uses pre-compiled programs verified by the kernel and starts instantly. For production use, prefer eBPF tools. SystemTap shines for complex multi-event correlation scripts."})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"eBPF — Extended Berkeley Packet Filter"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-3",children:["eBPF is a revolutionary Linux kernel technology that lets you run ",e.jsx("strong",{className:"text-slate-200",children:"sandboxed programs"}),"in the kernel without loading kernel modules. The kernel verifier checks the program for safety (no infinite loops, bounded memory access) before loading. Programs are JIT-compiled to native code and can access kernel data structures and maps shared with userspace."]}),e.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 border border-slate-800 mb-4",children:[e.jsx("div",{className:"text-xs font-semibold text-slate-400 uppercase mb-3",children:"eBPF Architecture"}),e.jsx("div",{className:"grid sm:grid-cols-3 gap-2 text-xs",children:[{title:"Probe Types",items:["kprobes (kernel functions)","uprobes (user functions)","tracepoints (kernel events)","USDT (user static probes)","network XDP/TC hooks","perf events"]},{title:"eBPF Maps",items:["Hash maps","Array maps","Ring buffers","Perf event arrays","Shared between kernel/user","Persists across probe calls"]},{title:"Key Tools",items:["bpftrace (scripting)","BCC toolkit (Python)","libbpf (C library)","bpftool (introspect)","perf (uses eBPF internally)"]}].map(({title:t,items:s})=>e.jsxs("div",{children:[e.jsx("div",{className:"text-cyan-400 font-medium mb-2",children:t}),s.map(r=>e.jsxs("div",{className:"text-slate-400 py-0.5",children:["• ",r]},r))]},t))})]}),e.jsx(l,{language:"bash",code:`# Install BCC tools (includes syscount, gethostlatency, etc.)
dnf install bcc-tools bpftrace -y

# All tools are in /usr/share/bcc/tools/
ls /usr/share/bcc/tools/

# SYSCOUNT — count system calls system-wide
/usr/share/bcc/tools/syscount

# Count syscalls for a specific process
/usr/share/bcc/tools/syscount -p $(pgrep myapp)

# GETHOSTLATENCY — DNS lookup latency
/usr/share/bcc/tools/gethostlatency

# OPENSNOOP — trace file opens in real-time
/usr/share/bcc/tools/opensnoop

# EXECSNOOP — trace new process executions
/usr/share/bcc/tools/execsnoop

# BIOLATENCY — I/O request latency distribution (histogram)
/usr/share/bcc/tools/biolatency

# TCPRETRANS — trace TCP retransmits
/usr/share/bcc/tools/tcpretrans

# TCPCONNECT — trace outbound TCP connections
/usr/share/bcc/tools/tcpconnect`}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:"bpftrace — eBPF Scripting Language"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-3",children:[e.jsx("code",{className:"text-cyan-400",children:"bpftrace"})," provides a high-level scripting language for eBPF programs inspired by awk and DTrace. One-liners are extremely powerful."]}),e.jsx(u,{title:"bpftrace One-liners",children:`# Count syscalls by process name (Ctrl+C to print)
bpftrace -e 'tracepoint:raw_syscalls:sys_enter { @[comm] = count(); }'

# Trace write() calls > 4096 bytes
bpftrace -e 'tracepoint:syscalls:sys_enter_write /args->count > 4096/ {
    printf("PID %d (%s) write %d bytes
", pid, comm, args->count);
}'

# Histogram of read() return sizes (actual bytes read)
bpftrace -e 'tracepoint:syscalls:sys_exit_read /retval > 0/ {
    @bytes = hist(retval);
}'

# CPU profile — what's running every 99 Hz (flamegraph input)
bpftrace -e 'profile:hz:99 { @[kstack] = count(); }' > /tmp/cpu_profile.txt

# Trace all opens of a specific file
bpftrace -e 'tracepoint:syscalls:sys_enter_openat {
    if (str(args->filename) == "/etc/passwd") {
        printf("%s (PID %d) opened /etc/passwd
", comm, pid);
    }
}'`}),e.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 border border-slate-800 mt-3",children:[e.jsx("div",{className:"text-xs font-semibold text-slate-400 uppercase mb-2",children:"bpftrace Probe Types"}),e.jsx("div",{className:"grid sm:grid-cols-3 gap-2 text-xs",children:[{probe:"kprobe:func",desc:"Hook function entry",ex:"kprobe:do_sys_openat2"},{probe:"kretprobe:func",desc:"Hook function return + retval",ex:"kretprobe:vfs_read"},{probe:"tracepoint:cat:event",desc:"Stable kernel tracepoints",ex:"tracepoint:block:block_rq_issue"},{probe:"uprobe:path:func",desc:"User-space function probe",ex:"uprobe:/lib/libc.so.6:malloc"},{probe:"profile:hz:N",desc:"Sample at N Hz (CPU profiling)",ex:"profile:hz:99"},{probe:"interval:s:N",desc:"Run every N seconds",ex:"interval:s:1"}].map(({probe:t,desc:s,ex:r})=>e.jsxs("div",{className:"bg-slate-800 rounded p-2",children:[e.jsx("div",{className:"text-cyan-400 font-mono",children:t}),e.jsx("div",{className:"text-slate-400 mt-0.5",children:s}),e.jsxs("div",{className:"text-slate-500 mt-0.5 italic text-xs",children:["e.g. ",r]})]},t))})]})]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Choosing the Best Application Version"}),e.jsx("p",{className:"text-sm text-slate-400 mb-3",children:'The exam objective says: "Given multiple versions of applications, choose which to run based on observed performance characteristics." This means benchmarking systematically.'}),e.jsx(l,{language:"bash",code:`# Method 1: Repeat benchmark with time
for i in 1 2 3 4 5; do
    /usr/bin/time -v ./app-v1 < input.txt 2>&1 | grep "Maximum resident"
done

# Method 2: perf stat comparison
perf stat -r 5 ./app-v1 < input.txt 2>&1
perf stat -r 5 ./app-v2 < input.txt 2>&1

# Method 3: strace to compare syscall patterns
strace -c ./app-v1 < input.txt 2>&1
strace -c ./app-v2 < input.txt 2>&1

# Metrics to compare:
# - Wall clock time (total elapsed)
# - CPU time (user + sys)
# - Maximum RSS (peak memory)
# - I/O bytes read/written
# - Syscall counts (lower = better for CPU bound)`})]}),e.jsxs("div",{className:"rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 mt-6",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(g,{size:16,className:"text-amber-400"}),e.jsx("h3",{className:"font-semibold text-amber-300",children:"Exam Key Takeaways"})]}),e.jsxs("ul",{className:"space-y-1.5 text-sm text-slate-300",children:[e.jsxs("li",{children:["• Processes in ",e.jsx("code",{className:"text-cyan-400",children:"D state"})," (uninterruptible sleep) indicate I/O wait — storage issue, not process issue."]}),e.jsxs("li",{children:["• Valgrind ",e.jsx("code",{className:"text-cyan-400",children:"memcheck"})," catches memory leaks; ",e.jsx("code",{className:"text-cyan-400",children:"callgrind"})," profiles CPU usage per function."]}),e.jsxs("li",{children:["• SystemTap requires ",e.jsx("code",{className:"text-cyan-400",children:"kernel-devel"})," + ",e.jsx("code",{className:"text-cyan-400",children:"kernel-debuginfo"})," packages."]}),e.jsxs("li",{children:["• Install eBPF tools: ",e.jsx("code",{className:"text-cyan-400",children:"dnf install bcc-tools bpftrace"}),". Tools live in ",e.jsx("code",{className:"text-cyan-400",children:"/usr/share/bcc/tools/"}),"."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"syscount"})," counts syscalls, ",e.jsx("code",{className:"text-cyan-400",children:"gethostlatency"})," measures DNS, ",e.jsx("code",{className:"text-cyan-400",children:"biolatency"})," shows I/O latency distribution."]}),e.jsxs("li",{children:["• bpftrace uses probes: ",e.jsx("code",{className:"text-cyan-400",children:"kprobe"}),", ",e.jsx("code",{className:"text-cyan-400",children:"tracepoint"}),", ",e.jsx("code",{className:"text-cyan-400",children:"uprobe"}),", ",e.jsx("code",{className:"text-cyan-400",children:"profile"}),"."]})]})]})]})}function Ue(){const t=Array.from({length:40},(s,r)=>r-20);return e.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 border border-slate-800 my-3",children:[e.jsx("div",{className:"text-xs text-slate-400 mb-2 font-semibold uppercase",children:"Nice Value Scale"}),e.jsx("div",{className:"flex items-center gap-0.5 overflow-x-auto pb-1",children:t.map(s=>e.jsx("div",{className:`flex-shrink-0 w-6 h-8 rounded text-center flex items-center justify-center text-xs font-mono
            ${s===-20?"bg-rose-500/30 text-rose-400":s<0?"bg-orange-500/20 text-orange-400":s===0?"bg-slate-700 text-white font-bold":s>0?"bg-emerald-500/10 text-emerald-500":""}`,children:s===-20||s===0||s===19||s%5===0?s:""},s))}),e.jsxs("div",{className:"flex justify-between text-xs text-slate-500 mt-1",children:[e.jsx("span",{className:"text-rose-400",children:"← Highest priority (gets more CPU)"}),e.jsx("span",{className:"text-emerald-600",children:"Lowest priority (gets less CPU) →"})]})]})}function ze(){return e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center",children:e.jsx(D,{size:20,className:"text-orange-400"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-white",children:"Tuning Running Systems"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"process priorities · tuned profiles · cgroups v2 · systemd constraints"})]})]}),e.jsx("p",{className:"text-slate-400 leading-relaxed max-w-3xl",children:"Rather than modifying kernel parameters blindly, use these high-level abstractions to control how the OS allocates CPU, memory, and I/O between competing workloads."})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Process Priorities & Scheduling"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-4 mb-1",children:"Nice Values — CFS Scheduler"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-2",children:["The ",e.jsx("strong",{className:"text-slate-200",children:"Completely Fair Scheduler (CFS)"})," uses ",e.jsx("em",{children:"virtual runtime"})," to allocate CPU time. Nice values (-20 to +19) are weight multipliers applied to the time slice calculation. A nice value of -20 gets ~10x more CPU than nice +19. Most processes start at nice 0."]}),e.jsx(Ue,{}),e.jsx(l,{language:"bash",code:`# Start a new process with a specific nice value
nice -n 10 ./low-priority-task
nice -n -5 ./important-app   # requires root for negative nice

# Change nice value of running process
renice -n 5 -p $(pgrep myapp)
renice -n -10 -p 1234        # requires root for lowering

# Change all processes of a user
renice -n 5 -u username

# I/O priority (separate from CPU nice)
# Class 0=Real-time, 1=Best-effort, 2=Idle
ionice -c 1 -n 0 ./latency-critical   # RT, highest
ionice -c 2 -n 4 ./batch-job          # BE, middle
ionice -c 3 ./backup-job              # Idle — lowest

# Get current ionice class of a process
ionice -p $(pgrep myapp)`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6 mb-1",children:"Real-Time Scheduling with chrt"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-2",children:["Real-time scheduling policies run before ",e.jsx("em",{children:"any"})," SCHED_OTHER (CFS) process. This is critical for latency-sensitive applications."]}),e.jsx("div",{className:"overflow-x-auto mb-3",children:e.jsxs("table",{className:"metric-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Policy"}),e.jsx("th",{children:"Algorithm"}),e.jsx("th",{children:"Priority"}),e.jsx("th",{children:"Use Case"})]})}),e.jsx("tbody",{children:[{policy:"SCHED_OTHER",alg:"CFS (default)",prio:"nice -20..+19",use:"Normal processes"},{policy:"SCHED_BATCH",alg:"CFS + batch hint",prio:"nice 0..+19",use:"CPU-intensive batch jobs"},{policy:"SCHED_IDLE",alg:"CFS, lowest weight",prio:"N/A",use:"Background maintenance"},{policy:"SCHED_FIFO",alg:"RT, first-in first-out",prio:"1–99",use:"Hard RT: audio, drivers"},{policy:"SCHED_RR",alg:"RT, round-robin",prio:"1–99",use:"Soft RT: multiple RT threads"},{policy:"SCHED_DEADLINE",alg:"EDF (earliest deadline)",prio:"runtime/deadline/period",use:"Periodic tasks with deadlines"}].map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"font-mono text-orange-400 text-xs",children:t.policy}),e.jsx("td",{className:"text-slate-300 text-xs",children:t.alg}),e.jsx("td",{className:"text-slate-400 text-xs font-mono",children:t.prio}),e.jsx("td",{className:"text-slate-400 text-xs",children:t.use})]},t.policy))})]})}),e.jsx(l,{language:"bash",code:`# Set SCHED_FIFO with priority 50 for existing process
chrt -f -p 50 $(pgrep myapp)

# Set SCHED_RR priority 20
chrt -r -p 20 $(pgrep myapp)

# Start a new process with RT scheduling
chrt -f 80 ./rt-application

# View current scheduling policy
chrt -p $(pgrep myapp)

# SCHED_DEADLINE (requires root) — 10ms task every 100ms
chrt -d --sched-runtime 10000000 --sched-deadline 10000000     --sched-period 100000000 -p 0 $(pgrep myapp)`}),e.jsxs(x,{type:"warning",title:"RT Process Can Lock Up System",children:["A SCHED_FIFO process at priority 99 that runs a busy-loop will ",e.jsx("strong",{children:"lock out all other processes"}),". Always set ",e.jsx("code",{children:"RLIMIT_RTTIME"})," or use cgroups to limit RT process runtime."]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"tuned — Profile-Based System Tuning"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-3",children:[e.jsx("code",{className:"text-cyan-400",children:"tuned"})," is a daemon that dynamically adjusts system settings based on profiles. A profile is a directory containing an ",e.jsx("code",{className:"text-cyan-400",children:"tuned.conf"})," file that declares what sysctl, disk, CPU, and other settings to apply. Profiles can extend other profiles."]}),e.jsx("div",{className:"grid sm:grid-cols-3 gap-2 mb-4",children:[{name:"throughput-performance",desc:"Max throughput: disables power saving, tuned for server workloads. Default for RHEL servers."},{name:"latency-performance",desc:"Minimal latency: disables C-states, power saving; sets CPU to performance governor."},{name:"network-throughput",desc:"Optimizes kernel buffers and IRQ coalescing for maximum network throughput."},{name:"network-latency",desc:"Low network latency: disables TCP options that add latency (TSO, GRO)."},{name:"powersave",desc:"Maximum power savings: enables deep C-states, reduces frequency."},{name:"balanced",desc:"Balanced power and performance. Default for desktops."},{name:"virtual-guest",desc:"Optimized for running inside a virtual machine."},{name:"virtual-host",desc:"Optimized for a system hosting VMs (hypervisor)."},{name:"hpc-compute",desc:"High Performance Computing: huge pages, NUMA, CPU performance."},{name:"desktop",desc:"Improved responsiveness for desktop workloads."},{name:"realtime",desc:"Hard real-time: disables dynamic ticking, isolates CPUs, sets RT scheduling."},{name:"oracle",desc:"Optimized for Oracle Database workloads (huge pages, shmem)."}].map(({name:t,desc:s})=>e.jsxs("div",{className:"bg-slate-900 rounded p-2.5 border border-slate-800",children:[e.jsx("div",{className:"font-mono text-orange-400 text-xs font-semibold",children:t}),e.jsx("div",{className:"text-slate-400 text-xs mt-1 leading-relaxed",children:s})]},t))}),e.jsx(l,{language:"bash",code:`# Show available profiles
tuned-adm list

# Show currently active profile
tuned-adm active

# Apply a profile (takes effect immediately)
tuned-adm profile throughput-performance

# Apply multiple profiles (they merge)
tuned-adm profile throughput-performance network-latency

# Get a recommendation for this system
tuned-adm recommend

# Check if tuned is running
systemctl status tuned

# Verify what settings were applied
tuned-adm profile_info throughput-performance`}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mb-2",children:"Creating Custom tuned Profiles"}),e.jsx(l,{language:"bash",filename:"/etc/tuned/myprofile/tuned.conf",code:`[main]
summary=My Custom Performance Profile
# Inherit all settings from throughput-performance
include=throughput-performance

[cpu]
# Set CPU scaling governor
governor=performance
# Disable energy/performance bias
energy_perf_bias=performance

[vm]
# Enable transparent huge pages
transparent_hugepages=always

[sysctl]
# Custom sysctl overrides
vm.swappiness=10
vm.dirty_ratio=10
net.core.rmem_max=134217728
net.core.wmem_max=134217728

[disk]
# Set elevator for all block devices
elevator=mq-deadline`}),e.jsx(l,{language:"bash",code:`# Apply custom profile (auto-persistent via tuned service)
tuned-adm profile myprofile`}),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsxs("span",{className:"persist-badge",children:[e.jsx(m,{size:10})," Persists across reboots"]}),e.jsx("span",{className:"text-xs text-slate-500",children:"tuned service restores active profile at boot"})]})]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Control Groups v2 (cgroups)"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-3",children:["Cgroups are a kernel mechanism to ",e.jsx("strong",{className:"text-slate-200",children:"limit, account, and isolate"})," resources (CPU, memory, I/O) for groups of processes. RHEL 9 uses ",e.jsx("strong",{children:"cgroups v2"})," with a unified hierarchy. Everything under systemd is already in cgroups — use ",e.jsx("code",{className:"text-cyan-400",children:"systemd-cgls"})," to see the tree."]}),e.jsx(u,{title:"systemd-cgls — Cgroup Tree",children:`Control group /:
-.slice
├─user.slice
│ └─user-1000.slice
│   └─session-1.scope
│     ├─1234 sshd: guled [priv]
│     └─1235 -bash
├─system.slice
│ ├─nginx.service
│ │ ├─4567 nginx: master process
│ │ └─4568 nginx: worker process
│ ├─postgresql.service
│ │ └─7890 /usr/bin/postgres
│ └─tuned.service
│   └─1111 /usr/sbin/tuned
└─init.scope
  └─1 /usr/lib/systemd/systemd`}),e.jsx(l,{language:"bash",code:`# View cgroup hierarchy
systemd-cgls

# Show cgroup resource usage (CPU, memory, I/O per service)
systemd-cgtop

# Create a cgroup slice (persistent via systemd .slice unit)
# /etc/systemd/system/batch.slice

# Manually interact with cgroup v2 via filesystem
ls /sys/fs/cgroup/

# Create a cgroup
mkdir /sys/fs/cgroup/mygroup

# Enable controllers in parent first
echo "+cpu +memory +io" > /sys/fs/cgroup/cgroup.subtree_control

# Limit CPU (100000 = 100ms, period 1s — i.e., 10% of 1 CPU)
echo "100000 1000000" > /sys/fs/cgroup/mygroup/cpu.max

# Limit memory to 512MB
echo $((512 * 1024 * 1024)) > /sys/fs/cgroup/mygroup/memory.max

# Add a process to the cgroup
echo $PID > /sys/fs/cgroup/mygroup/cgroup.procs`})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"systemd Service Resource Constraints"}),e.jsx("p",{className:"text-sm text-slate-400 mb-3",children:"The cleanest way to apply cgroup limits is via systemd unit properties. systemd translates these into cgroup v2 settings automatically."}),e.jsx(l,{language:"bash",filename:"/etc/systemd/system/myapp.service",code:`[Unit]
Description=My Performance-Critical Application

[Service]
ExecStart=/usr/bin/myapp
User=myuser

# CPU limits
CPUQuota=200%          # Use up to 2 full CPUs (200% of 1 CPU)
CPUWeight=100          # Relative weight vs other services (default=100)
CPUAffinity=0-3        # Pin to CPUs 0-3

# Memory limits
MemoryMax=2G           # Hard limit - process killed if exceeded
MemoryHigh=1.5G        # Soft limit - throttled, not killed
MemorySwapMax=0        # Disable swap for this service

# I/O limits
IOWeight=100           # I/O scheduling weight (1-10000)
IOReadBandwidthMax=/dev/sda 100M   # Max read bandwidth
IOWriteBandwidthMax=/dev/sda 50M   # Max write bandwidth

# File descriptor limit
LimitNOFILE=65536

# Nice value
Nice=-5

# Task (thread) limit
TasksMax=128

[Install]
WantedBy=multi-user.target`}),e.jsx(l,{language:"bash",code:`# Reload and start
systemctl daemon-reload
systemctl enable --now myapp

# Override settings without editing the unit file (use drop-in)
systemctl edit myapp
# This creates /etc/systemd/system/myapp.service.d/override.conf

# Verify cgroup limits are applied
systemctl show myapp | grep -E 'Memory|CPU|IO'
cat /sys/fs/cgroup/system.slice/myapp.service/cpu.max
cat /sys/fs/cgroup/system.slice/myapp.service/memory.max`}),e.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[e.jsxs("span",{className:"persist-badge",children:[e.jsx(m,{size:10})," Persists across reboots"]}),e.jsx("span",{className:"text-xs text-slate-500",children:"systemd unit files are automatically applied at service start"})]})]}),e.jsxs("div",{className:"rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 mt-6",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(g,{size:16,className:"text-amber-400"}),e.jsx("h3",{className:"font-semibold text-amber-300",children:"Exam Key Takeaways"})]}),e.jsxs("ul",{className:"space-y-1.5 text-sm text-slate-300",children:[e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"renice -n 5 -p PID"})," adjusts CPU priority; ",e.jsx("code",{className:"text-cyan-400",children:"ionice -c 3 -p PID"})," adjusts I/O priority."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"chrt -f -p 50 PID"})," sets SCHED_FIFO real-time scheduling (requires root)."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"tuned-adm profile throughput-performance"})," is ",e.jsx("strong",{className:"text-white",children:"persistent"})," — tuned restores at boot."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"tuned-adm recommend"})," suggests the best profile for your hardware."]}),e.jsxs("li",{children:["• Custom profiles in ",e.jsx("code",{className:"text-cyan-400",children:"/etc/tuned/<name>/tuned.conf"})," can include (extend) existing profiles."]}),e.jsxs("li",{children:["• systemd service ",e.jsx("code",{className:"text-cyan-400",children:"CPUQuota"}),", ",e.jsx("code",{className:"text-cyan-400",children:"MemoryMax"}),", ",e.jsx("code",{className:"text-cyan-400",children:"IOWeight"})," set persistent cgroup limits."]}),e.jsxs("li",{children:["• Use ",e.jsx("code",{className:"text-cyan-400",children:"systemctl edit <service>"})," to create persistent drop-in overrides without modifying originals."]})]})]})]})}function Ee(){const t=[{name:"Zone DMA",range:"0 – 16 MB",color:"#f59e0b",desc:"For legacy 24-bit DMA devices (ISA). Very small on modern systems."},{name:"Zone DMA32",range:"16 MB – 4 GB",color:"#06b6d4",desc:"For 32-bit DMA devices (most PCI). All allocations < 4GB."},{name:"Zone Normal",range:"4 GB+",color:"#8b5cf6",desc:"The main zone for kernel allocations on 64-bit systems."},{name:"Zone Movable",range:"Overlay",color:"#10b981",desc:"Pages that can be migrated (for memory hotplug and huge pages)."}];return e.jsx("div",{className:"space-y-1.5 my-4",children:t.map(s=>e.jsxs("div",{className:"flex items-center gap-3 rounded-lg border p-3",style:{borderColor:s.color+"30",background:s.color+"08"},children:[e.jsxs("div",{className:"w-28 flex-shrink-0",children:[e.jsx("div",{className:"font-mono text-xs font-semibold",style:{color:s.color},children:s.name}),e.jsx("div",{className:"text-slate-600 text-xs",children:s.range})]}),e.jsx("div",{className:"text-slate-400 text-xs",children:s.desc})]},s.name))})}function Oe(){return e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center",children:e.jsx(S,{size:20,className:"text-emerald-400"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-white",children:"Memory Tuning"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"huge pages · overcommit · swap · NUMA · SYSV shared memory"})]})]}),e.jsx("p",{className:"text-slate-400 leading-relaxed max-w-3xl",children:"Memory is the most complex Linux subsystem to tune. Poor memory configuration causes performance degradation that looks like a CPU or I/O problem. Master virtual memory internals and you'll solve issues others can't diagnose."})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Linux Virtual Memory Architecture"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-3",children:["Every process has its own ",e.jsx("strong",{className:"text-slate-200",children:"virtual address space"})," — a map of virtual addresses to physical memory pages. The CPU's Memory Management Unit (MMU) translates virtual to physical addresses using ",e.jsx("strong",{className:"text-slate-200",children:"page tables"}),". The",e.jsx("strong",{className:"text-slate-200",children:" Translation Lookaside Buffer (TLB)"})," caches recent translations for speed. A TLB miss requires a page table walk — expensive!"]}),e.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 border border-slate-800 mb-4",children:[e.jsx("div",{className:"text-xs font-semibold text-slate-400 uppercase mb-3",children:"Virtual → Physical Translation"}),e.jsx("div",{className:"flex items-center gap-2 flex-wrap text-xs",children:["Virtual Address","→","TLB Lookup","→","TLB Hit?"].map((t,s)=>e.jsx("span",{className:t==="→"?"text-slate-600":"bg-slate-800 border border-slate-700 rounded px-2 py-1 "+(t==="TLB Hit?"?"text-emerald-400":"text-slate-300"),children:t},s))}),e.jsxs("div",{className:"ml-8 mt-2 flex gap-6 text-xs",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"text-emerald-400",children:"✓ Yes:"}),e.jsx("span",{className:"text-slate-400",children:"Physical address returned in ~1ns"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"text-rose-400",children:"✗ No:"}),e.jsx("span",{className:"text-slate-400",children:"Page table walk (~50-100ns) → update TLB → return physical address"})]})]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 border border-slate-800 mb-4",children:[e.jsx("div",{className:"text-xs font-semibold text-slate-400 uppercase mb-2",children:"Page Sizes and TLB Impact"}),e.jsx("div",{className:"grid sm:grid-cols-3 gap-3 text-xs",children:[{size:"4 KB (default)",entries:"~1024 entries cover 4 MB",color:"text-slate-400",impact:"TLB exhausted quickly for large allocations → frequent misses"},{size:"2 MB (huge pages)",entries:"~1024 entries cover 2 GB",color:"text-emerald-400",impact:"512x fewer TLB entries needed → dramatically fewer misses"},{size:"1 GB (gigantic pages)",entries:"~1024 entries cover 1 TB",color:"text-cyan-400",impact:"Ideal for databases/VMs with large working sets"}].map(({size:t,entries:s,color:r,impact:a})=>e.jsxs("div",{className:"bg-slate-800 rounded p-2.5",children:[e.jsx("div",{className:`font-mono font-bold ${r}`,children:t}),e.jsx("div",{className:"text-slate-400 mt-1",children:s}),e.jsx("div",{className:"text-slate-500 mt-1 italic",children:a})]},t))})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("div",{className:"text-sm font-semibold text-slate-300 mb-1",children:"Physical Memory Zones"}),e.jsx(Ee,{})]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Huge Pages — Reducing TLB Pressure"}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 border border-slate-800",children:[e.jsx("div",{className:"text-emerald-400 font-semibold text-sm mb-2",children:"Static HugeTLB Pages"}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1",children:[e.jsx("li",{children:"• Pre-allocated at boot, reserved exclusively"}),e.jsx("li",{children:"• Applications must explicitly request them"}),e.jsxs("li",{children:["• Use ",e.jsx("code",{className:"text-cyan-400",children:"mmap(MAP_HUGETLB)"})," or SYSV shmget"]}),e.jsx("li",{children:"• Cannot be used for anything else if not claimed"}),e.jsx("li",{children:"• 2MB or 1GB page size available"}),e.jsxs("li",{children:["• ",e.jsx("strong",{className:"text-white",children:"Best for databases"})," (PostgreSQL, Oracle)"]})]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 border border-slate-800",children:[e.jsx("div",{className:"text-cyan-400 font-semibold text-sm mb-2",children:"Transparent Huge Pages (THP)"}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1",children:[e.jsx("li",{children:"• Kernel automatically promotes 4KB → 2MB pages"}),e.jsx("li",{children:"• Application doesn't need code changes"}),e.jsx("li",{children:"• Can cause latency spikes during promotion/defrag"}),e.jsx("li",{children:"• Three modes: always, madvise, never"}),e.jsxs("li",{children:["• ",e.jsx("strong",{className:"text-white",children:"madvise"})," = only for applications that opt in"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{className:"text-rose-400",children:"Disable for Redis, MongoDB"})," (causes latency jitter)"]})]})]})]}),e.jsx(l,{language:"bash",code:`# ── STATIC HUGE PAGES ──────────────────────────────────
# Check current huge page status
grep -i huge /proc/meminfo

# Allocate 512 x 2MB = 1GB of huge pages at runtime
echo 512 > /sys/kernel/mm/hugepages/hugepages-2048kB/nr_hugepages
sysctl vm.nr_hugepages=512

# Mount hugetlbfs (for mmap access)
mkdir -p /mnt/huge
mount -t hugetlbfs nodev /mnt/huge

# Check allocation success
cat /sys/kernel/mm/hugepages/hugepages-2048kB/free_hugepages`}),e.jsx(l,{language:"bash",filename:"/etc/sysctl.d/99-hugepages.conf",code:`# Allocate huge pages persistently
# Note: Allocate at boot — later allocation may fail if memory is fragmented
vm.nr_hugepages = 512

# For 1GB pages (if CPU supports PDPE1GB):
vm.nr_hugepages_mempolicy = 512`}),e.jsxs("div",{className:"flex items-center gap-2 mt-1 mb-4",children:[e.jsxs("span",{className:"persist-badge",children:[e.jsx(m,{size:10})," Persists across reboots"]}),e.jsx("span",{className:"text-xs text-slate-500",children:"via /etc/sysctl.d/ — allocate early in boot for best results"})]}),e.jsx(l,{language:"bash",code:`# ── TRANSPARENT HUGE PAGES ─────────────────────────────
# Check THP status
cat /sys/kernel/mm/transparent_hugepage/enabled
# Output: [always] madvise never  <- current mode in brackets

# Set to madvise (safest for production)
echo madvise > /sys/kernel/mm/transparent_hugepage/enabled

# Control defrag aggressiveness (madvise = only for madvise regions)
echo madvise > /sys/kernel/mm/transparent_hugepage/defrag

# Disable completely for Redis/MongoDB
echo never > /sys/kernel/mm/transparent_hugepage/enabled`}),e.jsx(l,{language:"bash",filename:"/etc/tuned/myprofile/tuned.conf",code:`[vm]
transparent_hugepages=madvise`}),e.jsx("div",{className:"flex items-center gap-2 mt-1",children:e.jsxs("span",{className:"persist-badge",children:[e.jsx(m,{size:10})," Persists via tuned profile"]})})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Memory Overcommit"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-3",children:["When a process calls ",e.jsx("code",{className:"text-cyan-400",children:"malloc()"}),", the kernel doesn't immediately allocate physical RAM — it just reserves virtual address space. Physical pages are allocated on first access (demand paging). Overcommit controls how much virtual memory the kernel is willing to promise."]}),e.jsx("div",{className:"overflow-x-auto mb-4",children:e.jsxs("table",{className:"metric-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Mode"}),e.jsx("th",{children:"Value"}),e.jsx("th",{children:"Behavior"}),e.jsx("th",{children:"Use Case"})]})}),e.jsx("tbody",{children:[{mode:"Heuristic",val:"0",behavior:"Allow overcommit up to (RAM + Swap) with heuristics. malloc() can succeed even if not enough physical RAM.",use:"Default — good for most workloads"},{mode:"Always",val:"1",behavior:"Always allow overcommit. malloc() never fails. If OOM happens, OOM killer acts.",use:"Scientific computing, Redis (fork-based saves)"},{mode:"Never",val:"2",behavior:"Limit to (RAM × overcommit_ratio/100) + Swap. malloc() returns NULL if exceeded.",use:"Safety-critical — predictable memory usage required"}].map(({mode:t,val:s,behavior:r,use:a})=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-emerald-400 font-semibold text-sm",children:t}),e.jsx("td",{className:"font-mono text-cyan-400 text-center",children:s}),e.jsx("td",{className:"text-slate-300 text-sm",children:r}),e.jsx("td",{className:"text-slate-400 text-xs italic",children:a})]},s))})]})}),e.jsx(l,{language:"bash",code:`# Check current mode
sysctl vm.overcommit_memory

# Set to 'never' mode with 80% ratio
sysctl -w vm.overcommit_memory=2
sysctl -w vm.overcommit_ratio=80

# Check CommitLimit and Committed_AS
grep -E 'CommitLimit|Committed_AS' /proc/meminfo
# CommitLimit = RAM * overcommit_ratio/100 + Swap
# Committed_AS = currently committed virtual memory

# Set to 'always allow' for Redis (prevents fork() memory issues)
sysctl -w vm.overcommit_memory=1`}),e.jsx(l,{language:"bash",filename:"/etc/sysctl.d/99-memory.conf",code:`vm.overcommit_memory = 2
vm.overcommit_ratio = 80`}),e.jsx("div",{className:"flex items-center gap-2 mt-1",children:e.jsxs("span",{className:"persist-badge",children:[e.jsx(m,{size:10})," Persists via /etc/sysctl.d/"]})})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Swap Behavior — Anonymous vs Cached Pages"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-3",children:["When memory is low, the kernel must reclaim pages. It can either:",e.jsx("span",{className:"text-emerald-400 font-medium ml-1",children:"drop page cache"})," (file-backed — can be re-read from disk) or",e.jsx("span",{className:"text-amber-400 font-medium ml-1",children:"swap anonymous pages"})," (heap, stack — must be written to swap).",e.jsx("code",{className:"text-cyan-400 ml-1",children:"vm.swappiness"})," controls this balance."]}),e.jsx("div",{className:"bg-slate-900 rounded-lg p-4 border border-slate-800 mb-4",children:e.jsx("div",{className:"grid sm:grid-cols-3 gap-3 text-xs",children:[{range:"0",label:"Never swap (RHEL 8)",color:"text-emerald-400",desc:"Strongly prefer dropping cache over swapping. OOM kill before swap."},{range:"10–30",label:"Server recommendation",color:"text-cyan-400",desc:"Retain anonymous pages (working set) as long as possible."},{range:"60",label:"Default",color:"text-slate-300",desc:"Balanced swap behavior — both file and anonymous pages eligible."},{range:"100",label:"Aggressive swap",color:"text-amber-400",desc:"Swap aggressively. Keeps file cache but swaps heap/stack."},{range:"200",label:"RHEL 9 max (zswap)",color:"text-violet-400",desc:"Prefer zswap over dropping cache. For systems with fast compressed swap."}].map(({range:t,label:s,color:r,desc:a})=>e.jsxs("div",{className:"bg-slate-800 rounded p-2.5",children:[e.jsx("div",{className:`font-mono font-bold text-lg ${r}`,children:t}),e.jsx("div",{className:"text-white text-xs",children:s}),e.jsx("div",{className:"text-slate-400 mt-1 text-xs",children:a})]},t))})}),e.jsx(l,{language:"bash",code:`# Current swappiness
sysctl vm.swappiness

# Set low swappiness for server (prefer anonymous pages in RAM)
sysctl -w vm.swappiness=10

# vfs_cache_pressure: tendency to reclaim inode/dentry cache
# Default 100 = balance inodes vs pages
# Lower = keep directory/file cache (good for file servers)
sysctl -w vm.vfs_cache_pressure=50

# Check swap usage
swapon --show
free -h
cat /proc/swaps

# Add swap space
fallocate -l 4G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile

# Make swap permanent
echo '/swapfile none swap sw 0 0' >> /etc/fstab`}),e.jsx(l,{language:"bash",filename:"/etc/sysctl.d/99-swap.conf",code:`vm.swappiness = 10
vm.vfs_cache_pressure = 50`}),e.jsx("div",{className:"flex items-center gap-2 mt-1",children:e.jsxs("span",{className:"persist-badge",children:[e.jsx(m,{size:10})," Persists via /etc/sysctl.d/"]})})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"NUMA — Non-Uniform Memory Access"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-3",children:["On multi-socket servers, each CPU has ",e.jsx("strong",{className:"text-slate-200",children:"local RAM"})," (fast, ~100ns) and",e.jsx("strong",{className:"text-slate-200",children:" remote RAM"})," (via QPI/UPI interconnect, ~200-300ns). The OS default is to allocate memory on the node where the requesting CPU runs. Without NUMA awareness, all processes might allocate from node 0 while running on node 1 — 2-3x memory latency penalty!"]}),e.jsx(l,{language:"bash",code:`# Show NUMA topology and memory per node
numactl --hardware

# Show per-node memory statistics
numastat

# Run process on specific NUMA node (CPU and memory local)
numactl --cpunodebind=0 --membind=0 ./myapp

# Run on node 1 CPUs, with memory from either node (default)
numactl --cpunodebind=1 ./myapp

# Interleave memory across all nodes (for bandwidth, not latency)
numactl --interleave=all ./myapp

# Bind to specific CPUs
numactl --physcpubind=0,1,2,3 --membind=0 ./myapp

# Check current NUMA policy
numactl --show

# Node distances (higher = slower)
cat /sys/devices/system/node/node0/distance`}),e.jsx(u,{title:"numactl --hardware — Sample Output",children:`available: 2 nodes (0-1)
node 0 cpus: 0 1 2 3 4 5 12 13 14 15 16 17
node 0 size: 32169 MB
node 0 free: 18234 MB
node 1 cpus: 6 7 8 9 10 11 18 19 20 21 22 23
node 1 size: 32226 MB
node 1 free: 21456 MB
node distances:
node   0   1
  0:  10  21
  1:  21  10`}),e.jsxs(x,{type:"info",title:"NUMA Distances",children:[e.jsx("code",{children:"node distances"})," shows the relative latency multiplier. ",e.jsx("code",{children:"10"})," = local access.",e.jsx("code",{children:"21"})," means remote access is 2.1x slower. On 4-socket systems, distances can reach 40+ for memory across 3 hops."]}),e.jsx(l,{language:"bash",code:`# Auto NUMA balancing — kernel migrates pages to local node
sysctl kernel.numa_balancing   # 1 = enabled (default)

# Disable for latency-sensitive pinned workloads
sysctl -w kernel.numa_balancing=0

# Check NUMA memory allocation stats per process
numastat -p $(pgrep myapp)

# View huge pages per NUMA node
cat /sys/devices/system/node/node0/hugepages/hugepages-2048kB/nr_hugepages
cat /sys/devices/system/node/node1/hugepages/hugepages-2048kB/nr_hugepages`})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"SYSV Shared Memory Limits"}),e.jsx("p",{className:"text-sm text-slate-400 mb-3",children:"System V IPC provides shared memory, semaphores, and message queues. Databases (PostgreSQL, Oracle) use SYSV shared memory for their shared buffer pools. Default limits are too low for large databases."}),e.jsx("div",{className:"overflow-x-auto mb-3",children:e.jsxs("table",{className:"metric-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Meaning"}),e.jsx("th",{children:"Default"})]})}),e.jsx("tbody",{children:[{param:"kernel.shmmax",meaning:"Maximum size of a single shared memory segment (bytes)",default:"4GB (usually)"},{param:"kernel.shmall",meaning:"Total pages of shared memory system-wide",default:"2097152 pages (8GB)"},{param:"kernel.shmmni",meaning:"Maximum number of shared memory segments",default:"4096"},{param:"kernel.sem",meaning:"Semaphore limits: SEMMSL SEMMNS SEMOPM SEMMNI",default:"32000 1024000000 500 32000"}].map(({param:t,meaning:s,default:r})=>e.jsxs("tr",{children:[e.jsx("td",{className:"font-mono text-emerald-400 text-xs",children:t}),e.jsx("td",{className:"text-slate-300 text-sm",children:s}),e.jsx("td",{className:"font-mono text-slate-400 text-xs",children:r})]},t))})]})}),e.jsx(l,{language:"bash",code:`# View current limits
ipcs -l          # human-readable limits
sysctl kernel.shmmax kernel.shmall kernel.shmmni

# View current shared memory segments
ipcs -m          # segments
ipcs -s          # semaphores
ipcs -q          # message queues

# Remove a shared memory segment by shmid
ipcrm -m <shmid>

# Set limits for PostgreSQL (25% of RAM for shared_buffers)
# If RAM = 128GB, shared_buffers = 32GB
sysctl -w kernel.shmmax=34359738368   # 32GB
sysctl -w kernel.shmall=8388608       # 32GB / 4096 bytes per page`}),e.jsx(l,{language:"bash",filename:"/etc/sysctl.d/99-sysv-shm.conf",code:`# For a system with 128GB RAM, PostgreSQL shared_buffers = 32GB
kernel.shmmax = 34359738368
kernel.shmall = 8388608
kernel.shmmni = 4096`}),e.jsx("div",{className:"flex items-center gap-2 mt-1",children:e.jsxs("span",{className:"persist-badge",children:[e.jsx(m,{size:10})," Persists via /etc/sysctl.d/"]})})]}),e.jsxs("div",{className:"rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 mt-6",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(g,{size:16,className:"text-amber-400"}),e.jsx("h3",{className:"font-semibold text-amber-300",children:"Exam Key Takeaways"})]}),e.jsxs("ul",{className:"space-y-1.5 text-sm text-slate-300",children:[e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"vm.nr_hugepages = 512"})," in sysctl.d allocates 512 × 2MB = 1GB of static huge pages persistently."]}),e.jsxs("li",{children:["• THP: ",e.jsx("code",{className:"text-cyan-400",children:"echo madvise > /sys/kernel/mm/transparent_hugepage/enabled"})," — persist via tuned profile."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"vm.overcommit_memory"}),": 0=heuristic, 1=always, 2=never. Redis needs 1 (fork-safe). Oracle needs 2."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"vm.swappiness = 10"})," is the standard server recommendation — keep working set in RAM."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"numactl --cpunodebind=0 --membind=0"})," pins a process to NUMA node 0."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"kernel.shmmax"})," = max single SYSV segment size; set to shared_buffers + some overhead."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"ipcs -l"})," shows current SYSV limits; ",e.jsx("code",{children:"ipcs -m"})," shows active shared memory segments."]})]})]})]})}function qe(){const t=[{label:"Application",tools:["read()/write()","O_DIRECT bypass"],color:"#8b5cf6"},{label:"VFS (Virtual File System)",tools:["open/read/write syscalls","file descriptor abstraction"],color:"#06b6d4"},{label:"Page Cache",tools:["file data cache","dirty page writeback","readahead"],color:"#10b981"},{label:"Filesystem (ext4/xfs)",tools:["block allocation","journaling","extent management"],color:"#f59e0b"},{label:"Block Layer (I/O Scheduler)",tools:["mq-deadline / bfq / kyber / none","request merging, reordering"],color:"#f97316"},{label:"Device Driver",tools:["SCSI/NVMe/SATA","hardware queues"],color:"#6b7280"}];return e.jsx("div",{className:"space-y-1 my-4",children:t.map((s,r)=>e.jsxs("div",{className:"rounded-lg border p-3 flex items-center gap-3",style:{borderColor:s.color+"30",background:s.color+"08"},children:[e.jsx("div",{className:"w-48 flex-shrink-0 font-semibold text-sm",style:{color:s.color},children:s.label}),e.jsx("div",{className:"hidden sm:flex gap-2 flex-wrap",children:s.tools.map(a=>e.jsx("span",{className:"text-xs font-mono px-2 py-0.5 rounded border",style:{color:s.color,borderColor:s.color+"30",background:s.color+"10"},children:a},a))})]},r))})}function Le(){return e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center",children:e.jsx(_,{size:20,className:"text-teal-400"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-white",children:"Disk & File Systems"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"I/O schedulers · filesystem tuning · dirty page writeback · block layer"})]})]}),e.jsxs("p",{className:"text-slate-400 leading-relaxed max-w-3xl",children:["I/O performance bottlenecks are subtle. The block layer, filesystem layer, and page cache each contribute to latency. Knowing ",e.jsx("em",{children:"where"})," your I/O time is spent determines which knob to turn."]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"The Linux I/O Stack"}),e.jsx(qe,{}),e.jsxs(x,{type:"info",title:"O_DIRECT — Bypassing the Page Cache",children:["Applications that manage their own caching (databases like PostgreSQL) use",e.jsx("code",{children:" O_DIRECT"})," to bypass the page cache and write directly to the block device. This avoids double-buffering (data in DB buffer pool AND page cache) but requires aligned writes."]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"I/O Scheduling Algorithms"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-3",children:["The I/O scheduler sits in the block layer and decides in what order to dispatch requests to the device. RHEL 9 uses the ",e.jsx("strong",{className:"text-slate-200",children:"multi-queue block layer (blk-mq)"})," — device queues map to CPU cores, enabling high parallelism for NVMe."]}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-4 mb-4",children:[{name:"mq-deadline",best:"SATA/SAS SSDs, spinning HDDs",color:"text-cyan-400",border:"border-cyan-500/30",bg:"bg-cyan-500/5",desc:"Deadline-based scheduling. Each request has a deadline (default: reads 500ms, writes 5s). Requests approaching deadline are served first. Prevents I/O starvation. Best for mixed read/write workloads on SATA SSDs.",params:["deadline_reads_ms=500","deadline_writes_ms=5000","front_merges=1"]},{name:"bfq (Budget Fair Queueing)",best:"Desktop, interactive workloads",color:"text-violet-400",border:"border-violet-500/30",bg:"bg-violet-500/5",desc:"Assigns a budget (number of sectors) to each process/group. Processes get time slices proportional to their weight. Excellent interactive responsiveness. Too much overhead for high-IOPS servers.",params:["slice_idle=8ms","max_budget=2560","low_latency=1"]},{name:"kyber",best:"NVMe SSDs with high queue depth",color:"text-emerald-400",border:"border-emerald-500/30",bg:"bg-emerald-500/5",desc:"Token bucket algorithm. Two separate queues: reads and writes. Targets specific latency goals for each. Very lightweight — designed for ultra-fast NVMe devices that don't need much software scheduling.",params:["read_lat_nsec=2000","write_lat_nsec=10000"]},{name:"none / noop",best:"NVMe SSDs, virtual machines",color:"text-slate-400",border:"border-slate-500/30",bg:"bg-slate-500/5",desc:"No software scheduling — requests go directly to the device. Best when the device has its own intelligent queuing (NVMe firmware, hypervisor). Lowest CPU overhead. Wrong choice for spinning disks.",params:["(no parameters — passthrough)"]}].map(({name:t,best:s,color:r,border:a,bg:c,desc:i,params:d})=>e.jsxs("div",{className:`rounded-lg border ${a} ${c} p-4`,children:[e.jsx("div",{className:`font-mono font-bold text-sm ${r}`,children:t}),e.jsxs("div",{className:"text-xs text-slate-500 mb-2",children:["Best for: ",s]}),e.jsx("div",{className:"text-xs text-slate-400 leading-relaxed mb-2",children:i}),e.jsx("div",{className:"flex flex-wrap gap-1",children:d.map(h=>e.jsx("span",{className:"text-xs font-mono text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800",children:h},h))})]},t))}),e.jsx(l,{language:"bash",code:`# Check current scheduler for a device
cat /sys/block/sda/queue/scheduler
cat /sys/block/nvme0n1/queue/scheduler
# Output: [mq-deadline] bfq kyber none  <- active in brackets

# Change scheduler (runtime, not persistent)
echo mq-deadline > /sys/block/sda/queue/scheduler
echo none > /sys/block/nvme0n1/queue/scheduler

# View queue depth and other settings
cat /sys/block/nvme0n1/queue/nr_requests    # queue depth
cat /sys/block/sda/queue/read_ahead_kb      # readahead buffer

# Set readahead for sequential workloads (in 512-byte sectors)
echo 2048 > /sys/block/sda/queue/read_ahead_kb  # 1MB readahead
blockdev --setra 2048 /dev/sda                   # equivalent`}),e.jsx(l,{language:"bash",filename:"/etc/udev/rules.d/60-ioscheduler.rules",code:`# mq-deadline for spinning disks and SATA SSDs
ACTION=="add|change", KERNEL=="sd[a-z]*", ATTR{queue/rotational}=="1", ATTR{queue/scheduler}="mq-deadline"
ACTION=="add|change", KERNEL=="sd[a-z]*", ATTR{queue/rotational}=="0", ATTR{queue/scheduler}="mq-deadline"

# none for NVMe (they manage their own queuing)
ACTION=="add|change", KERNEL=="nvme[0-9]*", ATTR{queue/scheduler}="none"

# Load rules
# udevadm control --reload-rules && udevadm trigger`}),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsxs("span",{className:"persist-badge",children:[e.jsx(m,{size:10})," Persists via udev rules"]}),e.jsx("span",{className:"text-xs text-slate-500",children:"applied at device discovery on boot"})]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Filesystem Layout & Mount Option Tuning"}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-slate-200 mb-2",children:"Common Performance Mount Options"}),e.jsx("div",{className:"space-y-1.5",children:[{opt:"noatime",desc:"Don't update access time on reads — saves write I/O"},{opt:"nodiratime",desc:"Don't update directory access times"},{opt:"relatime",desc:"Only update atime when newer than mtime (RHEL default)"},{opt:"data=writeback",desc:"ext4: skip journaling data (only journal metadata) — fastest, unsafe"},{opt:"data=ordered",desc:"ext4: journal metadata, flush data before commit — default"},{opt:"barrier=0",desc:"Disable write barriers (unsafe without battery-backed cache)"},{opt:"stripe=N",desc:"RAID stripe size hint for better block allocation"}].map(({opt:t,desc:s})=>e.jsxs("div",{className:"flex gap-2 text-xs",children:[e.jsx("code",{className:"text-teal-400 font-mono flex-shrink-0 w-28",children:t}),e.jsx("span",{className:"text-slate-400",children:s})]},t))})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-slate-200 mb-2",children:"XFS Specifics"}),e.jsx("div",{className:"space-y-1.5 text-xs",children:[{opt:"logbsize=256k",desc:"Larger log buffer — more journaling throughput"},{opt:"swalloc",desc:"Swap extents for RAID — align to stripe width"},{opt:"largeio",desc:"Prefer large I/Os (good for sequential)"},{opt:"inode64",desc:"Spread inodes across entire filesystem (default on XFS)"},{opt:"allocsize=64m",desc:"Speculative preallocation size for sequential writes"}].map(({opt:t,desc:s})=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("code",{className:"text-orange-400 font-mono flex-shrink-0 w-28",children:t}),e.jsx("span",{className:"text-slate-400",children:s})]},t))})]})]}),e.jsx(l,{language:"bash",filename:"/etc/fstab",code:`# High-performance database partition (ext4)
/dev/sdb1  /data  ext4  defaults,noatime,data=ordered  0 2

# Log partition (sequential writes — disable barriers only with BBU)
/dev/sdc1  /logs  xfs   defaults,noatime,logbsize=256k  0 2

# Remount with new options (without reboot)
mount -o remount,noatime /data`}),e.jsxs(x,{type:"warning",title:"data=writeback Safety",children:[e.jsx("code",{children:"data=writeback"})," on ext4 dramatically increases write throughput but means data written just before a crash may be corrupted (metadata is consistent, data may not be). Only use with UPS-backed systems or application-level crash recovery."]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Dirty Page Writeback"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-3",children:["When applications write data, it goes to the ",e.jsx("strong",{className:"text-slate-200",children:"page cache"}),' first (write-behind buffering). The kernel marks these pages "dirty" and a background thread (',e.jsx("code",{className:"text-cyan-400",children:"pdflush/writeback"}),") eventually flushes them to disk. Too aggressive writeback = frequent I/O spikes; too lazy = risk of data loss on crash."]}),e.jsx("div",{className:"overflow-x-auto mb-4",children:e.jsxs("table",{className:"metric-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Effect"}),e.jsx("th",{children:"Tune To"})]})}),e.jsx("tbody",{children:[{param:"vm.dirty_ratio",default:"20",effect:"Max % RAM as dirty pages before writes BLOCK (synchronous)",tune:"Lower (5-10%) for smooth I/O; higher for bursty writers"},{param:"vm.dirty_background_ratio",default:"10",effect:"% RAM dirty pages that trigger BACKGROUND writeback",tune:"Should be < dirty_ratio; lower triggers earlier writeback"},{param:"vm.dirty_writeback_centisecs",default:"500 (5s)",effect:"How often writeback thread wakes up to flush dirty pages",tune:"Lower = more frequent small writes; higher = batch larger writes"},{param:"vm.dirty_expire_centisecs",default:"3000 (30s)",effect:"How long a dirty page can be dirty before being considered expired",tune:"Lower = fresher on-disk data, more I/O; higher = less I/O"}].map(({param:t,default:s,effect:r,tune:a})=>e.jsxs("tr",{children:[e.jsx("td",{className:"font-mono text-teal-400 text-xs",children:t}),e.jsx("td",{className:"font-mono text-slate-400 text-xs",children:s}),e.jsx("td",{className:"text-slate-300 text-sm",children:r}),e.jsx("td",{className:"text-slate-400 text-xs italic",children:a})]},t))})]})}),e.jsx(l,{language:"bash",code:`# Check dirty page status
cat /proc/meminfo | grep -i dirty
cat /proc/vmstat | grep -E 'nr_dirty|writeback'

# View writeback statistics
/proc/sys/vm/dirty_ratio
/proc/sys/vm/dirty_background_ratio

# For a database server with lots of sequential writes:
# Reduce dirty_ratio to avoid long pause spikes
sysctl -w vm.dirty_ratio=5
sysctl -w vm.dirty_background_ratio=2
sysctl -w vm.dirty_writeback_centisecs=200`}),e.jsx(l,{language:"bash",filename:"/etc/sysctl.d/99-disk.conf",code:`# Database server write tuning — minimize write pause spikes
vm.dirty_ratio = 5
vm.dirty_background_ratio = 2
vm.dirty_writeback_centisecs = 200
vm.dirty_expire_centisecs = 1000`}),e.jsx("div",{className:"flex items-center gap-2 mt-1",children:e.jsxs("span",{className:"persist-badge",children:[e.jsx(m,{size:10})," Persists via /etc/sysctl.d/"]})})]}),e.jsxs("div",{className:"rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 mt-6",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(g,{size:16,className:"text-amber-400"}),e.jsx("h3",{className:"font-semibold text-amber-300",children:"Exam Key Takeaways"})]}),e.jsxs("ul",{className:"space-y-1.5 text-sm text-slate-300",children:[e.jsxs("li",{children:["• Check current scheduler: ",e.jsx("code",{className:"text-cyan-400",children:"cat /sys/block/sda/queue/scheduler"})]}),e.jsxs("li",{children:["• Change scheduler: ",e.jsx("code",{className:"text-cyan-400",children:"echo mq-deadline > /sys/block/sda/queue/scheduler"})," — persist with udev rules."]}),e.jsxs("li",{children:["• ",e.jsx("strong",{className:"text-white",children:"mq-deadline"})," for spinning disks/SATA SSDs; ",e.jsx("strong",{className:"text-white",children:"none"})," for NVMe."]}),e.jsxs("li",{children:["• Mount with ",e.jsx("code",{className:"text-cyan-400",children:"noatime"})," to reduce unnecessary write I/O from access time updates."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"vm.dirty_ratio"})," and ",e.jsx("code",{className:"text-cyan-400",children:"vm.dirty_background_ratio"})," — persist via /etc/sysctl.d/."]}),e.jsxs("li",{children:["• Scheduler changes via udev rules in ",e.jsx("code",{className:"text-cyan-400",children:"/etc/udev/rules.d/"})," are persistent and apply to all matching devices."]})]})]})]})}function He(){const t=[{bw:"1 Gbps",rtt:"10ms",bdp_mb:"1.25",buffers:"~2 MB",use:"LAN, same datacenter"},{bw:"10 Gbps",rtt:"10ms",bdp_mb:"12.5",buffers:"~16 MB",use:"Datacenter, high-speed LAN"},{bw:"10 Gbps",rtt:"50ms",bdp_mb:"62.5",buffers:"~64 MB",use:"WAN link, cross-region"},{bw:"100 Gbps",rtt:"10ms",bdp_mb:"125",buffers:"~128 MB",use:"HPC, InfiniBand-class"}];return e.jsxs("div",{className:"bg-slate-900 rounded-lg border border-slate-800 overflow-hidden my-4",children:[e.jsx("div",{className:"bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-300 uppercase",children:"BDP = Bandwidth × RTT (pipe size in bytes)"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-800",children:[e.jsx("th",{className:"text-left px-4 py-2 text-slate-400",children:"Bandwidth"}),e.jsx("th",{className:"text-left px-4 py-2 text-slate-400",children:"RTT"}),e.jsx("th",{className:"text-left px-4 py-2 text-rose-400",children:"BDP"}),e.jsx("th",{className:"text-left px-4 py-2 text-emerald-400",children:"Buffer Needed"}),e.jsx("th",{className:"text-left px-4 py-2 text-slate-500 hidden sm:table-cell",children:"Use Case"})]})}),e.jsx("tbody",{children:t.map(({bw:s,rtt:r,bdp_mb:a,buffers:c,use:i})=>e.jsxs("tr",{className:"border-b border-slate-800/50",children:[e.jsx("td",{className:"px-4 py-2 font-mono text-cyan-400",children:s}),e.jsx("td",{className:"px-4 py-2 font-mono text-slate-300",children:r}),e.jsxs("td",{className:"px-4 py-2 font-mono text-rose-400 font-semibold",children:[a," MB"]}),e.jsx("td",{className:"px-4 py-2 font-mono text-emerald-400",children:c}),e.jsx("td",{className:"px-4 py-2 text-slate-500 hidden sm:table-cell",children:i})]},s+r))})]})}),e.jsx("div",{className:"px-4 py-2 text-xs text-slate-600",children:"Formula: BDP (bytes) = Bandwidth (bits/s) ÷ 8 × RTT (seconds). Buffer size should be ≥ BDP."})]})}function Fe(){return e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center",children:e.jsx(T,{size:20,className:"text-rose-400"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-white",children:"Network Performance"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"BDP calculation · TCP buffers · UDP buffers · congestion control"})]})]}),e.jsxs("p",{className:"text-slate-400 leading-relaxed max-w-3xl",children:["Network tuning is math-driven: you need to calculate the ",e.jsx("strong",{className:"text-white",children:"Bandwidth-Delay Product"}),"before setting buffer sizes. Setting buffers too small leaves performance on the table; too large wastes RAM and can increase latency."]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"TCP Internals: The Send/Receive Window"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-3",children:["TCP uses a ",e.jsx("strong",{className:"text-slate-200",children:"sliding window protocol"}),". The sender can have up to",e.jsx("em",{children:" window size bytes"})," in-flight (sent but not acknowledged). If the window is too small, the sender must stop and wait for ACKs — this creates ",e.jsx("em",{children:"stop-and-wait bubbles"})," that waste bandwidth. The window must be ≥ BDP to keep the pipe full."]}),e.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 border border-slate-800 mb-4",children:[e.jsx("div",{className:"text-xs font-semibold text-slate-400 uppercase mb-3",children:"TCP Stack Buffer Layers"}),e.jsx("div",{className:"space-y-2",children:[{layer:"Application Buffer",desc:"write() puts data here first",path:"userspace",color:"#8b5cf6"},{layer:"Socket Send Buffer (sk_sndbuf)",desc:"Kernel holds unsent + unacked data. Limited by tcp_wmem[2]",path:"net/ipv4/tcp.c",color:"#06b6d4"},{layer:"TCP Send Window",desc:"min(cwnd, rwnd) — congestion window × receiver window",path:"kernel decides",color:"#f59e0b"},{layer:"Socket Receive Buffer (sk_rcvbuf)",desc:"Received data waiting to be read. Limited by tcp_rmem[2]",path:"net/ipv4/tcp_input.c",color:"#10b981"}].map(({layer:t,desc:s,path:r,color:a})=>e.jsxs("div",{className:"flex items-start gap-3 text-xs",children:[e.jsx("div",{className:"w-2 h-2 rounded-full mt-1 flex-shrink-0",style:{background:a}}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",style:{color:a},children:t}),e.jsx("span",{className:"text-slate-400 ml-2",children:s}),e.jsxs("span",{className:"text-slate-600 ml-2 font-mono",children:["(",r,")"]})]})]},t))})]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Bandwidth-Delay Product (BDP)"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-2",children:["The BDP is the ",e.jsx("strong",{className:"text-slate-200",children:"volume of data in transit"})," on a fully utilized network path. It's the minimum buffer size needed to keep the pipe full and achieve maximum throughput."]}),e.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 border border-slate-800 mb-4",children:[e.jsx("div",{className:"text-xs font-semibold text-slate-400 uppercase mb-2",children:"Formula"}),e.jsxs("div",{className:"font-mono text-center text-lg",children:[e.jsx("span",{className:"text-rose-400",children:"BDP"}),e.jsx("span",{className:"text-slate-400",children:" = "}),e.jsx("span",{className:"text-cyan-400",children:"Bandwidth (bits/s)"}),e.jsx("span",{className:"text-slate-400",children:" × "}),e.jsx("span",{className:"text-violet-400",children:"RTT (seconds)"}),e.jsx("span",{className:"text-slate-400",children:" ÷ 8"})]}),e.jsxs("div",{className:"mt-3 text-xs text-slate-400 text-center",children:["Example: 10 Gbps × 0.050s ÷ 8 = ",e.jsx("span",{className:"text-rose-400 font-bold",children:"62.5 MB"})," BDP"]})]}),e.jsx(He,{}),e.jsxs(x,{type:"exam",title:"BDP Calculation is Exam Material",children:["You will be given bandwidth and RTT values and asked to calculate the required buffer size.",e.jsx("strong",{children:" Always divide by 8"})," to convert bits to bytes. Then round up to the next power of 2 for buffer settings (e.g., 62.5 MB → 67108864 bytes = 64 MB)."]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"TCP Buffer Size Tuning"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-3",children:["TCP buffers are configured at two levels: the ",e.jsx("strong",{className:"text-slate-200",children:"socket level"}),"(per-connection maximums) and the ",e.jsx("strong",{className:"text-slate-200",children:"system level"})," (autotuning bounds)."]}),e.jsx("div",{className:"overflow-x-auto mb-4",children:e.jsxs("table",{className:"metric-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Values"}),e.jsx("th",{children:"Meaning"})]})}),e.jsx("tbody",{children:[{param:"net.core.rmem_max",vals:"single value",meaning:"Hard maximum for socket receive buffer (SO_RCVBUF). Must be ≥ tcp_rmem[2]"},{param:"net.core.wmem_max",vals:"single value",meaning:"Hard maximum for socket send buffer (SO_SNDBUF). Must be ≥ tcp_wmem[2]"},{param:"net.core.rmem_default",vals:"single value",meaning:"Default socket receive buffer before autotuning kicks in"},{param:"net.core.wmem_default",vals:"single value",meaning:"Default socket send buffer before autotuning kicks in"},{param:"net.ipv4.tcp_rmem",vals:"min default max",meaning:"TCP receive buffer: min (floor), default (initial), max (autotune ceiling)"},{param:"net.ipv4.tcp_wmem",vals:"min default max",meaning:"TCP send buffer: min (floor), default (initial), max (autotune ceiling)"},{param:"net.ipv4.tcp_mem",vals:"min pressure max",meaning:"System-wide TCP memory pages: normal, pressure (start reclaiming), max (drop connections)"}].map(({param:t,vals:s,meaning:r})=>e.jsxs("tr",{children:[e.jsx("td",{className:"font-mono text-rose-400 text-xs",children:t}),e.jsx("td",{className:"font-mono text-slate-400 text-xs",children:s}),e.jsx("td",{className:"text-slate-300 text-sm",children:r})]},t))})]})}),e.jsxs(x,{type:"tip",title:"Autotuning",children:["Linux autotuning (",e.jsx("code",{children:"tcp_moderate_rcvbuf"}),") automatically grows socket buffers up to the",e.jsx("code",{children:" tcp_rmem[2]"})," maximum based on actual throughput. You only need to set ",e.jsx("code",{children:"rmem_max"}),"and ",e.jsx("code",{children:"tcp_rmem[2]"})," to ≥ BDP; the kernel handles the rest."]}),e.jsx(l,{language:"bash",code:`# ── STEP-BY-STEP BUFFER TUNING ─────────────────────────────────────
# Given: 10 Gbps link, RTT = 50ms
# BDP = 10e9 bits/s * 0.050s / 8 = 62,500,000 bytes ≈ 64 MB

# Round up to next power of 2: 67108864 (64 MB)

# Measure your RTT first
ping -c 10 <remote_host> | tail -1
# or for more precision:
hping3 -S -p 80 -c 100 <remote_host> | grep RTT

# Set buffers to accommodate BDP
sysctl -w net.core.rmem_max=134217728       # 128 MB (2x BDP)
sysctl -w net.core.wmem_max=134217728       # 128 MB
sysctl -w net.core.rmem_default=67108864    # 64 MB
sysctl -w net.core.wmem_default=67108864    # 64 MB

# TCP-specific autotuning bounds [min default max]
sysctl -w "net.ipv4.tcp_rmem=4096 67108864 134217728"
sysctl -w "net.ipv4.tcp_wmem=4096 67108864 134217728"

# Verify buffer sizes being used by active sockets
ss -tnm | head -20   # shows send-Q, recv-Q, memory

# Check if autotuning is on
sysctl net.ipv4.tcp_moderate_rcvbuf   # should be 1`}),e.jsx(l,{language:"bash",filename:"/etc/sysctl.d/99-network.conf",code:`# TCP buffer tuning for 10 Gbps WAN (50ms RTT, BDP = 62.5 MB)
net.core.rmem_max = 134217728
net.core.wmem_max = 134217728
net.core.rmem_default = 67108864
net.core.wmem_default = 67108864
net.ipv4.tcp_rmem = 4096 67108864 134217728
net.ipv4.tcp_wmem = 4096 67108864 134217728
net.ipv4.tcp_moderate_rcvbuf = 1`}),e.jsx("div",{className:"flex items-center gap-2 mt-1",children:e.jsxs("span",{className:"persist-badge",children:[e.jsx(m,{size:10})," Persists via /etc/sysctl.d/"]})})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"UDP Buffer Sizes"}),e.jsx("p",{className:"text-sm text-slate-400 mb-3",children:"UDP is connectionless — there's no flow control or congestion control. Applications using UDP (DNS, DHCP, RTP/media streaming, QUIC) rely entirely on socket buffers. Dropped UDP packets mean lost data (for DNS: retry; for media: artifacts)."}),e.jsx(l,{language:"bash",code:`# Check current UDP buffer sizes
sysctl net.core.rmem_default      # default receive buffer (~208 KB)
sysctl net.core.wmem_default      # default send buffer
sysctl net.ipv4.udp_rmem_min      # minimum UDP receive buffer
sysctl net.ipv4.udp_wmem_min      # minimum UDP send buffer

# Check UDP socket stats — look for recv-Q overflow
ss -unu   # UDP sockets

# Check UDP receive errors (RcvbufErrors = dropped due to buffer full)
netstat -su | grep -i error
cat /proc/net/udp | awk 'NR>1 {print $5}' | sort | uniq -c  # drop counts

# Set UDP buffers
sysctl -w net.core.rmem_default=26214400   # 25 MB
sysctl -w net.core.wmem_default=26214400   # 25 MB

# For high-throughput UDP (video streaming, QUIC)
sysctl -w net.core.rmem_max=134217728
sysctl -w net.core.wmem_max=134217728`}),e.jsx(l,{language:"bash",filename:"/etc/sysctl.d/99-udp.conf",code:`# UDP buffer tuning for high-throughput streams
net.core.rmem_default = 26214400
net.core.wmem_default = 26214400
net.core.rmem_max = 134217728
net.core.wmem_max = 134217728
net.ipv4.udp_rmem_min = 8192
net.ipv4.udp_wmem_min = 8192`}),e.jsx("div",{className:"flex items-center gap-2 mt-1",children:e.jsxs("span",{className:"persist-badge",children:[e.jsx(m,{size:10})," Persists via /etc/sysctl.d/"]})})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"TCP Congestion Control"}),e.jsxs("p",{className:"text-sm text-slate-400 mb-3",children:["The congestion control algorithm determines how fast TCP ramps up to fill the pipe and how it reacts to packet loss (signal of congestion). RHEL 9 default is ",e.jsx("strong",{className:"text-slate-200",children:"CUBIC"}),"."]}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-4 mb-4",children:[{name:"CUBIC (default)",color:"text-cyan-400",desc:"Window grows as a cubic function. Aggressive in high-BDP, fair to other CUBIC flows. Works well for large buffers.",best:"Default for most workloads"},{name:"BBR (Bottleneck Bandwidth & RTT)",color:"text-violet-400",desc:"Model-based: estimates bottleneck bandwidth and RTT, fills pipe without causing queue buildup. Excellent on lossy/WAN links.",best:"WAN, cloud, lossy networks"}].map(({name:t,color:s,desc:r,best:a})=>e.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 border border-slate-800",children:[e.jsx("div",{className:`font-mono font-bold text-sm ${s}`,children:t}),e.jsxs("div",{className:"text-xs text-slate-500 mb-2",children:["Best for: ",a]}),e.jsx("div",{className:"text-xs text-slate-400 leading-relaxed",children:r})]},t))}),e.jsx(l,{language:"bash",code:`# Check current congestion control
sysctl net.ipv4.tcp_congestion_control

# List available algorithms
sysctl net.ipv4.tcp_available_congestion_control

# Enable BBR (load module first)
modprobe tcp_bbr
sysctl -w net.ipv4.tcp_congestion_control=bbr

# Verify BBR is active
sysctl net.ipv4.tcp_congestion_control`}),e.jsx(l,{language:"bash",filename:"/etc/sysctl.d/99-tcp-bbr.conf",code:"net.ipv4.tcp_congestion_control = bbr"}),e.jsx(l,{language:"bash",filename:"/etc/modules-load.d/tcp_bbr.conf",code:"tcp_bbr"}),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsxs("span",{className:"persist-badge",children:[e.jsx(m,{size:10})," Persists"]}),e.jsx("span",{className:"text-xs text-slate-500",children:"sysctl.d for the parameter + modules-load.d to load the module at boot"})]})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Network Diagnostics Quick Reference"}),e.jsx(l,{language:"bash",code:`# Socket statistics (replaces netstat)
ss -tuln               # TCP/UDP listening ports
ss -tnp                # TCP connections with process
ss -tnm                # TCP with memory (buffer sizes)
ss -i dst 10.0.0.1     # connections to specific host with TCP internals

# Network interface stats
ip -s link show eth0   # bytes/packets/errors per interface
ethtool -S eth0        # driver-level stats (ring buffer drops, etc.)
ethtool eth0           # speed, duplex, link detected

# TCP retransmit analysis
ss -ti | grep retrans  # show retransmit count per socket

# Per-protocol statistics
netstat -s | grep -E 'retransmit|failed'
cat /proc/net/snmp | awk 'NR%2==0'  # protocol statistics

# Trace route with RTT
tracepath 8.8.8.8      # also shows MTU
mtr --report 8.8.8.8   # combined traceroute + ping

# Measure actual throughput
iperf3 -s              # server
iperf3 -c <server> -t 30 -P 4  # client, 30s, 4 parallel streams`})]}),e.jsxs("div",{className:"rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 mt-6",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(g,{size:16,className:"text-amber-400"}),e.jsx("h3",{className:"font-semibold text-amber-300",children:"Exam Key Takeaways"})]}),e.jsxs("ul",{className:"space-y-1.5 text-sm text-slate-300",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{className:"text-white",children:"BDP formula"}),": Bandwidth (bits/s) × RTT (seconds) ÷ 8 = bytes needed in buffers."]}),e.jsxs("li",{children:["• Set ",e.jsx("code",{className:"text-cyan-400",children:"net.core.rmem_max"})," and ",e.jsx("code",{className:"text-cyan-400",children:"net.ipv4.tcp_rmem[2]"})," to ≥ BDP. Persist in ",e.jsx("code",{children:"/etc/sysctl.d/"}),"."]}),e.jsxs("li",{children:["• UDP buffers: ",e.jsx("code",{className:"text-cyan-400",children:"net.core.rmem_default"})," and ",e.jsx("code",{className:"text-cyan-400",children:"net.core.wmem_default"}),"."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"net.core.rmem_max"})," must be ≥ ",e.jsx("code",{className:"text-cyan-400",children:"tcp_rmem[2]"})," — otherwise tcp_rmem max is silently capped."]}),e.jsxs("li",{children:["• BBR congestion control: load ",e.jsx("code",{className:"text-cyan-400",children:"tcp_bbr"})," module persistently via ",e.jsx("code",{children:"/etc/modules-load.d/"}),"."]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"text-cyan-400",children:"ss -tnm"})," shows current socket buffer usage per connection to verify tuning is effective."]})]})]})]})}const Ve=[{param:"vm.swappiness",section:"Memory",default_val:"60",recommended:"10 (server)",persist:"sysctl.d",desc:"Tendency to swap anonymous pages. 10 = keep working set in RAM."},{param:"vm.nr_hugepages",section:"Memory",default_val:"0",recommended:"512+ for DBs",persist:"sysctl.d",desc:"Static 2MB huge pages pre-allocated."},{param:"vm.overcommit_memory",section:"Memory",default_val:"0",recommended:"0 or 2",persist:"sysctl.d",desc:"0=heuristic, 1=always, 2=never overcommit."},{param:"vm.overcommit_ratio",section:"Memory",default_val:"50",recommended:"80 (with mode 2)",persist:"sysctl.d",desc:"% of RAM allowed in overcommit mode 2."},{param:"vm.vfs_cache_pressure",section:"Memory",default_val:"100",recommended:"50 (file servers)",persist:"sysctl.d",desc:"Tendency to reclaim inode/dentry cache."},{param:"vm.dirty_ratio",section:"Memory",default_val:"20",recommended:"5-10 (DB servers)",persist:"sysctl.d",desc:"Max % RAM dirty before writes block."},{param:"vm.dirty_background_ratio",section:"Memory",default_val:"10",recommended:"2-5",persist:"sysctl.d",desc:"% RAM dirty that triggers background writeback."},{param:"vm.dirty_writeback_centisecs",section:"Memory",default_val:"500",recommended:"200 (DB)",persist:"sysctl.d",desc:"Writeback daemon wakeup interval (centiseconds)."},{param:"kernel.numa_balancing",section:"Memory",default_val:"1",recommended:"0 (pinned workloads)",persist:"sysctl.d",desc:"Auto NUMA page migration. Disable for pinned apps."},{param:"kernel.shmmax",section:"Memory",default_val:"~4GB",recommended:"shared_buffers + 5%",persist:"sysctl.d",desc:"Max single SYSV shared memory segment size."},{param:"kernel.shmall",section:"Memory",default_val:"varies",recommended:"shmmax / PAGE_SIZE",persist:"sysctl.d",desc:"Total SYSV shared memory pages system-wide."},{param:"net.core.rmem_max",section:"Network",default_val:"212992",recommended:"≥ BDP",persist:"sysctl.d",desc:"Max socket receive buffer. Must be ≥ tcp_rmem[2]."},{param:"net.core.wmem_max",section:"Network",default_val:"212992",recommended:"≥ BDP",persist:"sysctl.d",desc:"Max socket send buffer. Must be ≥ tcp_wmem[2]."},{param:"net.core.rmem_default",section:"Network",default_val:"212992",recommended:"BDP",persist:"sysctl.d",desc:"Default receive buffer (before autotuning)."},{param:"net.ipv4.tcp_rmem",section:"Network",default_val:"4096 131072 6291456",recommended:"4096 BDP 2×BDP",persist:"sysctl.d",desc:"TCP recv: min default max per socket."},{param:"net.ipv4.tcp_wmem",section:"Network",default_val:"4096 16384 4194304",recommended:"4096 BDP 2×BDP",persist:"sysctl.d",desc:"TCP send: min default max per socket."},{param:"net.ipv4.tcp_congestion_control",section:"Network",default_val:"cubic",recommended:"bbr (WAN)",persist:"sysctl.d + modules-load.d",desc:"TCP congestion algorithm."}];function U({text:t}){const[s,r]=f.useState(!1);return e.jsx("button",{onClick:()=>{navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),2e3)},className:"text-slate-600 hover:text-slate-300 ml-2 flex-shrink-0",children:s?e.jsx(q,{size:12,className:"text-emerald-400"}):e.jsx(H,{size:12})})}const Ge=[{change:"Kernel parameters (sysctl)",method:"/etc/sysctl.d/99-tuning.conf",activate:"sysctl --system",color:"text-cyan-400",example:"vm.swappiness = 10"},{change:"I/O scheduler",method:"/etc/udev/rules.d/60-ioscheduler.rules",activate:"udevadm control --reload-rules && udevadm trigger",color:"text-amber-400",example:'ACTION=="add|change", KERNEL=="sda", ATTR{queue/scheduler}="mq-deadline"'},{change:"Module parameters",method:"/etc/modprobe.d/99-params.conf",activate:"modprobe -r <module> && modprobe <module>",color:"text-violet-400",example:"options nf_conntrack hashsize=131072"},{change:"Load modules at boot",method:"/etc/modules-load.d/modules.conf",activate:"(on next boot)",color:"text-emerald-400",example:"tcp_bbr"},{change:"CPU/system profile",method:"tuned-adm profile <name>",activate:"Immediate + persistent (tuned service)",color:"text-orange-400",example:"tuned-adm profile throughput-performance"},{change:"systemd service limits",method:"/etc/systemd/system/<svc>.service",activate:"systemctl daemon-reload && systemctl restart <svc>",color:"text-sky-400",example:`MemoryMax=2G
CPUQuota=200%`},{change:"Huge pages (static)",method:"/etc/sysctl.d/ + /etc/fstab (hugetlbfs)",activate:"sysctl --system",color:"text-rose-400",example:"vm.nr_hugepages = 512"},{change:"THP setting",method:"tuned profile [vm] transparent_hugepages=",activate:"tuned-adm profile <name>",color:"text-teal-400",example:"transparent_hugepages=madvise"},{change:"Mount options",method:"/etc/fstab",activate:"mount -o remount <mount>",color:"text-indigo-400",example:"/dev/sdb1 /data ext4 defaults,noatime 0 2"}],z=[{cmd:"vmstat 2 5",purpose:"Virtual memory stats: swapping, CPU states, I/O",section:"Monitor"},{cmd:"iostat -xz 2 5",purpose:"Extended I/O stats: %util, await, aqu-sz",section:"Monitor"},{cmd:"mpstat -P ALL 2",purpose:"Per-CPU statistics",section:"Monitor"},{cmd:"sar -u -r -b 2 5",purpose:"CPU, memory, I/O activity report",section:"Monitor"},{cmd:"pmstat -s 5 -t 2s",purpose:"PCP-based system statistics",section:"PCP"},{cmd:"pminfo kernel.all.load",purpose:"Describe a PCP metric",section:"PCP"},{cmd:"dmesg -T -l err,warn",purpose:"Kernel errors with timestamps",section:"Hardware"},{cmd:"dmidecode -t memory",purpose:"DIMM slot info from BIOS",section:"Hardware"},{cmd:"lscpu",purpose:"CPU topology including NUMA nodes",section:"Hardware"},{cmd:"sysctl -w vm.swappiness=10",purpose:"Set kernel parameter (not persistent)",section:"Kernel"},{cmd:"sysctl --system",purpose:"Apply all sysctl.d files",section:"Kernel"},{cmd:"ps -eo pid,stat,comm | awk '$2~/^D/'",purpose:"Find processes in D state (I/O wait)",section:"Performance"},{cmd:"valgrind --leak-check=full ./app",purpose:"Memory leak detection",section:"Performance"},{cmd:"/usr/share/bcc/tools/syscount",purpose:"Count system calls (eBPF)",section:"eBPF"},{cmd:"/usr/share/bcc/tools/biolatency",purpose:"Block I/O latency histogram (eBPF)",section:"eBPF"},{cmd:"renice -n 5 -p PID",purpose:"Change process CPU priority",section:"Tuning"},{cmd:"chrt -f -p 50 PID",purpose:"Set SCHED_FIFO real-time scheduling",section:"Tuning"},{cmd:"ionice -c 2 -n 4 -p PID",purpose:"Set I/O scheduling class and priority",section:"Tuning"},{cmd:"tuned-adm profile throughput-performance",purpose:"Apply a tuned profile (persistent)",section:"Tuning"},{cmd:"tuned-adm recommend",purpose:"Get profile recommendation for this system",section:"Tuning"},{cmd:"numactl --hardware",purpose:"Show NUMA topology and distances",section:"Memory"},{cmd:"numactl --cpunodebind=0 --membind=0 ./app",purpose:"Run app on NUMA node 0",section:"Memory"},{cmd:"echo 512 > /sys/kernel/mm/hugepages/hugepages-2048kB/nr_hugepages",purpose:"Allocate static huge pages",section:"Memory"},{cmd:"echo madvise > /sys/kernel/mm/transparent_hugepage/enabled",purpose:"THP madvise mode",section:"Memory"},{cmd:"ipcs -l",purpose:"SYSV IPC limits",section:"Memory"},{cmd:"cat /sys/block/sda/queue/scheduler",purpose:"Check I/O scheduler",section:"Disk"},{cmd:"echo mq-deadline > /sys/block/sda/queue/scheduler",purpose:"Set I/O scheduler",section:"Disk"},{cmd:"ss -tnm",purpose:"TCP sockets with buffer usage",section:"Network"},{cmd:"ss -unu",purpose:"UDP socket statistics",section:"Network"}],Ke=["Monitor","PCP","Hardware","Kernel","Performance","eBPF","Tuning","Memory","Disk","Network"];function $e(){const[t,s]=f.useState("All"),r=t==="All"?z:z.filter(a=>a.section===t);return e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-slate-500/10 border border-slate-500/20 flex items-center justify-center",children:e.jsx(v,{size:20,className:"text-slate-300"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-white",children:"Quick Reference"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"All commands · Persistence methods · Exam cheat sheet"})]})]}),e.jsx("p",{className:"text-slate-400 max-w-3xl",children:"Your quick-access reference for exam day. Every command you need, every persistence method explained."})]}),e.jsxs("div",{className:"card mb-8",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx(m,{size:16,className:"text-emerald-400"}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"The Persistence Guide"})]}),e.jsx("p",{className:"text-sm text-slate-400 mb-4",children:"Every EX442 change must survive a reboot. Use this table to match the change type to the correct persistence method."}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-800",children:[e.jsx("th",{className:"text-left py-2 pr-4 text-slate-400 text-xs uppercase",children:"Change Type"}),e.jsx("th",{className:"text-left py-2 pr-4 text-slate-400 text-xs uppercase",children:"Persist Using"}),e.jsx("th",{className:"text-left py-2 pr-4 text-slate-400 text-xs uppercase hidden md:table-cell",children:"Activate"}),e.jsx("th",{className:"text-left py-2 text-slate-400 text-xs uppercase hidden lg:table-cell",children:"Example"})]})}),e.jsx("tbody",{children:Ge.map(({change:a,method:c,activate:i,color:d,example:h})=>e.jsxs("tr",{className:"border-b border-slate-800/50",children:[e.jsx("td",{className:`py-2 pr-4 font-medium ${d} text-sm`,children:a}),e.jsx("td",{className:"py-2 pr-4 font-mono text-slate-300 text-xs",children:c}),e.jsx("td",{className:"py-2 pr-4 text-slate-400 text-xs hidden md:table-cell",children:i}),e.jsx("td",{className:"py-2 text-slate-500 text-xs font-mono hidden lg:table-cell max-w-xs truncate",children:h.split(`
`)[0]})]},a))})]})})]}),e.jsxs("div",{className:"card mb-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4 flex-wrap gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(g,{size:16,className:"text-slate-400"}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"Command Reference"})]}),e.jsx("div",{className:"flex flex-wrap gap-1.5",children:["All",...Ke].map(a=>e.jsx("button",{onClick:()=>s(a),className:`text-xs px-3 py-1 rounded-full border transition-all ${t===a?"bg-cyan-500/20 border-cyan-500/40 text-cyan-400":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-600"}`,children:a},a))})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-800",children:[e.jsx("th",{className:"text-left py-2 pr-4 text-slate-400 text-xs uppercase w-8"}),e.jsx("th",{className:"text-left py-2 pr-4 text-slate-400 text-xs uppercase",children:"Command"}),e.jsx("th",{className:"text-left py-2 pr-4 text-slate-400 text-xs uppercase",children:"Purpose"}),e.jsx("th",{className:"text-left py-2 text-slate-400 text-xs uppercase hidden sm:table-cell",children:"Section"})]})}),e.jsx("tbody",{children:r.map(({cmd:a,purpose:c,section:i})=>e.jsxs("tr",{className:"border-b border-slate-800/40 hover:bg-slate-900/50 group",children:[e.jsx("td",{className:"py-2 pr-2",children:e.jsx(U,{text:a})}),e.jsx("td",{className:"py-2 pr-4 font-mono text-cyan-400 text-xs",children:a}),e.jsx("td",{className:"py-2 pr-4 text-slate-300 text-xs",children:c}),e.jsx("td",{className:"py-2 text-xs hidden sm:table-cell",children:e.jsx("span",{className:"bg-slate-800 text-slate-400 rounded-full px-2 py-0.5 text-xs",children:i})})]},a))})]})})]}),e.jsxs("div",{className:"card mb-8",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Key sysctl Parameters"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-800",children:[e.jsx("th",{className:"text-left py-2 pr-4 text-slate-400 text-xs uppercase",children:"Parameter"}),e.jsx("th",{className:"text-left py-2 pr-4 text-slate-400 text-xs uppercase hidden sm:table-cell",children:"Default"}),e.jsx("th",{className:"text-left py-2 pr-4 text-slate-400 text-xs uppercase",children:"Recommended"}),e.jsx("th",{className:"text-left py-2 text-slate-400 text-xs uppercase hidden lg:table-cell",children:"Description"})]})}),e.jsx("tbody",{children:Ve.map(({param:a,default_val:c,recommended:i,desc:d,section:h})=>e.jsxs("tr",{className:"border-b border-slate-800/40 hover:bg-slate-900/50",children:[e.jsxs("td",{className:"py-2 pr-4",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("code",{className:"text-cyan-400 font-mono text-xs",children:a}),e.jsx(U,{text:a})]}),e.jsx("span",{className:"text-xs text-slate-600",children:h})]}),e.jsx("td",{className:"py-2 pr-4 font-mono text-slate-500 text-xs hidden sm:table-cell",children:c}),e.jsx("td",{className:"py-2 pr-4 font-mono text-emerald-400 text-xs",children:i}),e.jsx("td",{className:"py-2 text-slate-400 text-xs hidden lg:table-cell",children:d})]},a))})]})})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Exam Day Strategy"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:[{title:"1. Read First, Type Second",color:"text-cyan-400",tips:["Read the full question before starting","Identify what is being asked: tune, monitor, or profile?","Note any specific values given (bandwidth, RTT, etc.)"]},{title:"2. Always Verify Persistence",color:"text-amber-400",tips:['For every change: ask "will this survive reboot?"',"Use /etc/sysctl.d/ not just sysctl -w","Use tuned-adm for profile changes (self-persisting)","Reboot a test VM to verify your persistence method"]},{title:"3. Check Before and After",color:"text-emerald-400",tips:["Record the before state (sysctl -a > /tmp/before.txt)","Verify the change took effect immediately","Reboot and verify again","Use sysctl vm.swappiness to confirm"]},{title:"4. Common Mistakes to Avoid",color:"text-rose-400",tips:["Using sysctl -w without /etc/sysctl.d/ file","Writing to /sys without udev rules","Changing hugepages but forgetting hugetlbfs mount","Setting tcp_rmem[2] > rmem_max (silently capped)","Forgetting to enable sysstat for sar to work"]}].map(({title:a,color:c,tips:i})=>e.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 border border-slate-800",children:[e.jsx("div",{className:`font-semibold text-sm mb-2 ${c}`,children:a}),e.jsx("ul",{className:"space-y-1.5",children:i.map(d=>e.jsxs("li",{className:"text-xs text-slate-400 flex items-start gap-2",children:[e.jsx("span",{className:`${c} mt-0.5 flex-shrink-0`,children:"•"}),d]},d))})]},a))})]}),e.jsxs("div",{className:"card mb-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white mb-3",children:"BDP Quick Calculator"}),e.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 border border-slate-800 font-mono text-sm",children:[e.jsx("div",{className:"text-slate-400 mb-3",children:"# Copy this formula for exam calculations:"}),e.jsxs("div",{className:"text-white",children:["BDP_bytes = ",e.jsx("span",{className:"text-cyan-400",children:"bandwidth_gbps"})," × 10^9 × ",e.jsx("span",{className:"text-violet-400",children:"rtt_ms"})," / 1000 / 8"]}),e.jsxs("div",{className:"text-slate-500 mt-2 text-xs",children:["# Example: 10 Gbps, 50ms RTT",e.jsx("br",{}),"BDP = 10 × 1000000000 × 0.050 / 8 = ",e.jsx("span",{className:"text-rose-400",children:"62,500,000 bytes"})," ≈ 64 MB"]}),e.jsxs("div",{className:"mt-3 text-slate-400 text-xs",children:["# Set buffers to 2× BDP for headroom:",e.jsx("br",{}),"net.core.rmem_max = ",e.jsx("span",{className:"text-emerald-400",children:"134217728"}),"  # 128 MB",e.jsx("br",{}),"net.ipv4.tcp_rmem = 4096 ",e.jsx("span",{className:"text-emerald-400",children:"67108864"})," ",e.jsx("span",{className:"text-emerald-400",children:"134217728"})]})]})]}),e.jsxs("div",{className:"rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 mt-2",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(m,{size:16,className:"text-amber-400"}),e.jsx("h3",{className:"font-semibold text-amber-300",children:"The One Rule to Rule Them All"})]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Every single configuration change on the EX442 exam must",e.jsx("strong",{className:"text-white",children:" persist after a full system reboot"})," without any manual intervention. This means: sysctl changes → ",e.jsx("code",{className:"text-cyan-400",children:"/etc/sysctl.d/"}),", disk changes → ",e.jsx("code",{className:"text-cyan-400",children:"udev rules"})," or ",e.jsx("code",{className:"text-cyan-400",children:"fstab"}),", service limits → ",e.jsx("code",{className:"text-cyan-400",children:"systemd unit files"}),", profiles → ",e.jsx("code",{className:"text-cyan-400",children:"tuned-adm profile"}),". If you're not sure — test it. Reboot your practice VM and verify."]})]})]})}function We(){return e.jsx(J,{children:e.jsx(ee,{children:e.jsxs(p,{path:"/",element:e.jsx(Ne,{}),children:[e.jsx(p,{index:!0,element:e.jsx(Ce,{})}),e.jsx(p,{path:"system-analysis",element:e.jsx(_e,{})}),e.jsx(p,{path:"pcp",element:e.jsx(Ae,{})}),e.jsx(p,{path:"hardware-profiling",element:e.jsx(De,{})}),e.jsx(p,{path:"kernel-behavior",element:e.jsx(Re,{})}),e.jsx(p,{path:"app-performance",element:e.jsx(Be,{})}),e.jsx(p,{path:"tuning-running",element:e.jsx(ze,{})}),e.jsx(p,{path:"memory-tuning",element:e.jsx(Oe,{})}),e.jsx(p,{path:"disk-filesystems",element:e.jsx(Le,{})}),e.jsx(p,{path:"network-performance",element:e.jsx(Fe,{})}),e.jsx(p,{path:"quick-reference",element:e.jsx($e,{})})]})})})}P.createRoot(document.getElementById("root")).render(e.jsx(se.StrictMode,{children:e.jsx(We,{})}));
