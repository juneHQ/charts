const __vite__fileDeps=["./DocsRenderer-K4EAMTCU-zBwp3q9V.js","./iframe-wT10QMGK.js","./index-CEThVCg_.js","./react-18-DU1Jzcwy.js","./index-xnkZ--kd.js","./index-DYADbu9O.js","./mapValues-DsbhD-jO.js","./_baseUniq-DyUJG2DD.js","./index-BfPwsXjo.js","./index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as a}from"./iframe-wT10QMGK.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-zBwp3q9V.js").then(r=>r.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};