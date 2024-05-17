import{j as C}from"./MagnifyingGlassIcon-BhzNh7FJ.js";import{r as n,R as h}from"./index-CsdIBAqE.js";/* empty css               */import{z as re,E as O,F as U,G as Z,H as Fe,O as oe,I as Y,J as Q,K as Me,M as pe,N as Pe,P as Re,Q as ke,U as je,V as Be,W as Ne,Z as A,_ as W,$ as X,a0 as Le,a1 as De,a2 as _e,a3 as Ve,a4 as He,a5 as ie,a6 as Oe,a7 as Ge,a8 as Ke,a9 as Ae,aa as qe,ab as Je,ac as Qe,ad as We,ae as K,af as H,ag as ze,ah as Ue,ai as Ze,aj as Ye,ak as G,al as xe,am as Xe,an as ce,ao as de,ap as $e,aq as Ie,ar as ne}from"./index-0RutGgvM.js";import"./index-BZVzl59L.js";import{B as et}from"./index-CkpZqG1v.js";import"./index-5f0m1pej.js";import"./mapValues-CtGqFUz0.js";import"./throttle-usbKibP-.js";import"./isPlainObject-Csr8S_Fy.js";import"./tiny-invariant-CopsF_GD.js";import"./_baseUniq-eSUq8-wg.js";let tt=n.createContext(()=>{});function nt({value:e,children:t}){return h.createElement(tt.Provider,{value:e},t)}function ot({defaultContainers:e=[],portals:t,mainTreeNodeRef:s}={}){var f;let v=n.useRef((f=s==null?void 0:s.current)!=null?f:null),y=re(v),x=O(()=>{var u,m,r;let o=[];for(let c of e)c!==null&&(c instanceof HTMLElement?o.push(c):"current"in c&&c.current instanceof HTMLElement&&o.push(c.current));if(t!=null&&t.current)for(let c of t.current)o.push(c);for(let c of(u=y==null?void 0:y.querySelectorAll("html > *, body > *"))!=null?u:[])c!==document.body&&c!==document.head&&c instanceof HTMLElement&&c.id!=="headlessui-portal-root"&&(c.contains(v.current)||c.contains((r=(m=v.current)==null?void 0:m.getRootNode())==null?void 0:r.host)||o.some(b=>c.contains(b))||o.push(c));return o});return{resolveContainers:x,contains:O(u=>x().some(m=>m.contains(u))),mainTreeNodeRef:v,MainTreeNode:n.useMemo(()=>function(){return s!=null?null:h.createElement(U,{features:Z.Hidden,ref:v})},[v,s])}}function rt(){let e=n.useRef(null);return{mainTreeNodeRef:e,MainTreeNode:n.useMemo(()=>function(){return h.createElement(U,{features:Z.Hidden,ref:e})},[e])}}var D=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(D||{});function Te(){let e=n.useRef(0);return Fe("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}var at=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(at||{}),lt=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(lt||{});let ut={0:e=>({...e,popoverState:A(e.popoverState,{0:1,1:0}),__demoMode:!1}),1(e){return e.popoverState===1?e:{...e,popoverState:1,__demoMode:!1}},2(e,t){return e.button===t.button?e:{...e,button:t.button}},3(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},4(e,t){return e.panel===t.panel?e:{...e,panel:t.panel}},5(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},ve=n.createContext(null);ve.displayName="PopoverContext";function ae(e){let t=n.useContext(ve);if(t===null){let s=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,ae),s}return t}let le=n.createContext(null);le.displayName="PopoverAPIContext";function me(e){let t=n.useContext(le);if(t===null){let s=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,me),s}return t}let fe=n.createContext(null);fe.displayName="PopoverGroupContext";function we(){return n.useContext(fe)}let ue=n.createContext(null);ue.displayName="PopoverPanelContext";function st(){return n.useContext(ue)}function it(e,t){return A(t.type,ut,e,t)}let ct="div";function pt(e,t){var s;let{__demoMode:f=!1,...v}=e,y=n.useRef(null),x=Q(t,Me(l=>{y.current=l})),u=n.useRef([]),m=n.useReducer(it,{__demoMode:f,popoverState:f?0:1,buttons:u,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:n.createRef(),afterPanelSentinel:n.createRef()}),[{popoverState:r,button:o,buttonId:c,panel:b,panelId:w,beforePanelSentinel:$,afterPanelSentinel:p},d]=m,E=re((s=y.current)!=null?s:o),I=n.useMemo(()=>{if(!o||!b)return!1;for(let k of document.querySelectorAll("body > *"))if(Number(k==null?void 0:k.contains(o))^Number(k==null?void 0:k.contains(b)))return!0;let l=pe(),i=l.indexOf(o),T=(i+l.length-1)%l.length,a=(i+1)%l.length,g=l[T],S=l[a];return!b.contains(g)&&!b.contains(S)},[o,b]),j=Pe(c),N=Pe(w),F=n.useMemo(()=>({buttonId:j,panelId:N,close:()=>d({type:1})}),[j,N,d]),B=we(),L=B==null?void 0:B.registerPopover,M=O(()=>{var l;return(l=B==null?void 0:B.isFocusWithinPopoverGroup())!=null?l:(E==null?void 0:E.activeElement)&&((o==null?void 0:o.contains(E.activeElement))||(b==null?void 0:b.contains(E.activeElement)))});n.useEffect(()=>L==null?void 0:L(F),[L,F]);let[q,J]=Re(),_=ot({mainTreeNodeRef:B==null?void 0:B.mainTreeNodeRef,portals:q,defaultContainers:[o,b]});ke(E==null?void 0:E.defaultView,"focus",l=>{var i,T,a,g;l.target!==window&&l.target instanceof HTMLElement&&r===0&&(M()||o&&b&&(_.contains(l.target)||(T=(i=$.current)==null?void 0:i.contains)!=null&&T.call(i,l.target)||(g=(a=p.current)==null?void 0:a.contains)!=null&&g.call(a,l.target)||d({type:1})))},!0),je(_.resolveContainers,(l,i)=>{d({type:1}),Ze(i,Ye.Loose)||(l.preventDefault(),o==null||o.focus())},r===0);let R=O(l=>{d({type:1});let i=l?l instanceof HTMLElement?l:"current"in l&&l.current instanceof HTMLElement?l.current:o:o;i==null||i.focus()}),V=n.useMemo(()=>({close:R,isPortalled:I}),[R,I]),z=n.useMemo(()=>({open:r===0,close:R}),[r,R]),P={ref:x};return h.createElement(Be,null,h.createElement(ue.Provider,{value:null},h.createElement(ve.Provider,{value:m},h.createElement(le.Provider,{value:V},h.createElement(nt,{value:R},h.createElement(Ne,{value:A(r,{0:W.Open,1:W.Closed})},h.createElement(J,null,X({ourProps:P,theirProps:v,slot:z,defaultTag:ct,name:"Popover"}),h.createElement(_.MainTreeNode,null))))))))}let dt="button";function vt(e,t){let s=n.useId(),{id:f=`headlessui-popover-button-${s}`,disabled:v=!1,autoFocus:y=!1,...x}=e,[u,m]=ae("Popover.Button"),{isPortalled:r}=me("Popover.Button"),o=n.useRef(null),c=`headlessui-focus-sentinel-${n.useId()}`,b=we(),w=b==null?void 0:b.closeOthers,$=st()!==null;n.useEffect(()=>{if(!$)return m({type:3,buttonId:f}),()=>{m({type:3,buttonId:null})}},[$,f,m]);let[p]=n.useState(()=>Symbol()),d=Q(o,t,Le(),$?null:a=>{if(a)u.buttons.current.push(p);else{let g=u.buttons.current.indexOf(p);g!==-1&&u.buttons.current.splice(g,1)}u.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),a&&m({type:2,button:a})}),E=Q(o,t),I=re(o),j=O(a=>{var g,S,k;if($){if(u.popoverState===1)return;switch(a.key){case G.Space:case G.Enter:a.preventDefault(),(S=(g=a.target).click)==null||S.call(g),m({type:1}),(k=u.button)==null||k.focus();break}}else switch(a.key){case G.Space:case G.Enter:a.preventDefault(),a.stopPropagation(),u.popoverState===1&&(w==null||w(u.buttonId)),m({type:0});break;case G.Escape:if(u.popoverState!==0)return w==null?void 0:w(u.buttonId);if(!o.current||I!=null&&I.activeElement&&!o.current.contains(I.activeElement))return;a.preventDefault(),a.stopPropagation(),m({type:1});break}}),N=O(a=>{$||a.key===G.Space&&a.preventDefault()}),F=O(a=>{var g,S;xe(a.currentTarget)||v||($?(m({type:1}),(g=u.button)==null||g.focus()):(a.preventDefault(),a.stopPropagation(),u.popoverState===1&&(w==null||w(u.buttonId)),m({type:0}),(S=u.button)==null||S.focus()))}),B=O(a=>{a.preventDefault(),a.stopPropagation()}),{isFocusVisible:L,focusProps:M}=De({autoFocus:y}),{isHovered:q,hoverProps:J}=_e({isDisabled:v}),{pressed:_,pressProps:R}=Ve({disabled:v}),V=u.popoverState===0,z=n.useMemo(()=>({open:V,active:_||V,disabled:v,hover:q,focus:L,autofocus:y}),[V,q,L,_,v,y]),P=He(e,o),l=$?ie({ref:E,type:P,onKeyDown:j,onClick:F,disabled:v||void 0,autoFocus:y},M,J,R):ie({ref:d,id:u.buttonId,type:P,"aria-expanded":u.popoverState===0,"aria-controls":u.panel?u.panelId:void 0,disabled:v||void 0,autoFocus:y,onKeyDown:j,onKeyUp:N,onClick:F,onMouseDown:B},M,J,R),i=Te(),T=O(()=>{let a=u.panel;if(!a)return;function g(){A(i.current,{[D.Forwards]:()=>K(a,H.First),[D.Backwards]:()=>K(a,H.Last)})===ce.Error&&K(pe().filter(S=>S.dataset.headlessuiFocusGuard!=="true"),A(i.current,{[D.Forwards]:H.Next,[D.Backwards]:H.Previous}),{relativeTo:u.button})}g()});return h.createElement(h.Fragment,null,X({ourProps:l,theirProps:x,slot:z,defaultTag:dt,name:"Popover.Button"}),V&&!$&&r&&h.createElement(U,{id:c,features:Z.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:T}))}let mt="div",ft=oe.RenderStrategy|oe.Static;function bt(e,t){let s=n.useId(),{id:f=`headlessui-popover-overlay-${s}`,...v}=e,[{popoverState:y},x]=ae("Popover.Overlay"),u=Q(t),m=Oe(),r=m!==null?(m&W.Open)===W.Open:y===0,o=O(b=>{if(xe(b.currentTarget))return b.preventDefault();x({type:1})}),c=n.useMemo(()=>({open:y===0}),[y]);return X({ourProps:{ref:u,id:f,"aria-hidden":!0,onClick:o},theirProps:v,slot:c,defaultTag:mt,features:ft,visible:r,name:"Popover.Overlay"})}let Pt="div",ht=oe.RenderStrategy|oe.Static;function yt(e,t){let s=n.useId(),{id:f=`headlessui-popover-panel-${s}`,focus:v=!1,anchor:y,portal:x=!1,modal:u=!1,...m}=e,[r,o]=ae("Popover.Panel"),{close:c,isPortalled:b}=me("Popover.Panel"),w=`headlessui-focus-sentinel-before-${s}`,$=`headlessui-focus-sentinel-after-${s}`,p=n.useRef(null),d=Ge(y),[E,I]=Ke(d),j=Ae();d&&(x=!0);let N=Q(p,t,d?E:null,P=>{o({type:4,panel:P})}),F=re(p),B=qe();Je(()=>(o({type:5,panelId:f}),()=>{o({type:5,panelId:null})}),[f,o]);let L=Oe(),M=L!==null?(L&W.Open)===W.Open:r.popoverState===0;Qe(r.button,()=>o({type:1}),M),We(F,r.__demoMode?!1:u&&M);let q=O(P=>{var l;switch(P.key){case G.Escape:if(r.popoverState!==0||!p.current||F!=null&&F.activeElement&&!p.current.contains(F.activeElement))return;P.preventDefault(),P.stopPropagation(),o({type:1}),(l=r.button)==null||l.focus();break}});n.useEffect(()=>{var P;e.static||r.popoverState===1&&((P=e.unmount)==null||P)&&o({type:4,panel:null})},[r.popoverState,e.unmount,e.static,o]),n.useEffect(()=>{if(r.__demoMode||!v||r.popoverState!==0||!p.current)return;let P=F==null?void 0:F.activeElement;p.current.contains(P)||K(p.current,H.First)},[r.__demoMode,v,p,r.popoverState]);let J=n.useMemo(()=>({open:r.popoverState===0,close:c}),[r,c]),_=ie(d?j():{},{ref:N,id:f,onKeyDown:q,onBlur:v&&r.popoverState===0?P=>{var l,i,T,a,g;let S=P.relatedTarget;S&&p.current&&((l=p.current)!=null&&l.contains(S)||(o({type:1}),((T=(i=r.beforePanelSentinel.current)==null?void 0:i.contains)!=null&&T.call(i,S)||(g=(a=r.afterPanelSentinel.current)==null?void 0:a.contains)!=null&&g.call(a,S))&&S.focus({preventScroll:!0})))}:void 0,tabIndex:-1,style:{...I,"--button-width":ze(r.button,!0).width}}),R=Te(),V=O(()=>{let P=p.current;if(!P)return;function l(){A(R.current,{[D.Forwards]:()=>{var i;K(P,H.First)===ce.Error&&((i=r.afterPanelSentinel.current)==null||i.focus())},[D.Backwards]:()=>{var i;(i=r.button)==null||i.focus({preventScroll:!0})}})}l()}),z=O(()=>{let P=p.current;if(!P)return;function l(){A(R.current,{[D.Forwards]:()=>{var i;if(!r.button)return;let T=pe(),a=T.indexOf(r.button),g=T.slice(0,a+1),S=[...T.slice(a+1),...g];for(let k of S.slice())if(k.dataset.headlessuiFocusGuard==="true"||(i=r.panel)!=null&&i.contains(k)){let be=S.indexOf(k);be!==-1&&S.splice(be,1)}K(S,H.First,{sorted:!1})},[D.Backwards]:()=>{var i;K(P,H.Previous)===ce.Error&&((i=r.button)==null||i.focus())}})}l()});return h.createElement(ue.Provider,{value:f},h.createElement(le.Provider,{value:{close:c,isPortalled:b}},h.createElement(Ue,{enabled:x?e.static||M:!1},M&&b&&h.createElement(U,{id:w,ref:r.beforePanelSentinel,features:Z.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:V}),X({mergeRefs:B,ourProps:_,theirProps:m,slot:J,defaultTag:Pt,features:ht,visible:M,name:"Popover.Panel"}),M&&b&&h.createElement(U,{id:$,ref:r.afterPanelSentinel,features:Z.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:z}))))}let gt="div";function St(e,t){let s=n.useRef(null),f=Q(s,t),[v,y]=n.useState([]),x=rt(),u=O(p=>{y(d=>{let E=d.indexOf(p);if(E!==-1){let I=d.slice();return I.splice(E,1),I}return d})}),m=O(p=>(y(d=>[...d,p]),()=>u(p))),r=O(()=>{var p;let d=Xe(s);if(!d)return!1;let E=d.activeElement;return(p=s.current)!=null&&p.contains(E)?!0:v.some(I=>{var j,N;return((j=d.getElementById(I.buttonId.current))==null?void 0:j.contains(E))||((N=d.getElementById(I.panelId.current))==null?void 0:N.contains(E))})}),o=O(p=>{for(let d of v)d.buttonId.current!==p&&d.close()}),c=n.useMemo(()=>({registerPopover:m,unregisterPopover:u,isFocusWithinPopoverGroup:r,closeOthers:o,mainTreeNodeRef:x.mainTreeNodeRef}),[m,u,r,o,x.mainTreeNodeRef]),b=n.useMemo(()=>({}),[]),w=e,$={ref:f};return h.createElement(fe.Provider,{value:c},X({ourProps:$,theirProps:w,slot:b,defaultTag:gt,name:"Popover.Group"}),h.createElement(x.MainTreeNode,null))}let Et=Y(pt),Ct=Y(vt),Ot=Y(bt),xt=Y(yt),$t=Y(St),se=Object.assign(Et,{Button:Ct,Overlay:Ot,Panel:xt,Group:$t});const It=({onUnmount:e})=>{const t=n.useRef(e);return n.useEffect(()=>{t.current=e},[e]),n.useEffect(()=>()=>{var s;(s=t.current)==null||s.call(t)},[]),null},Vt={title:"Components/Combobox",component:de,args:{},parameters:{sourceLink:"https://github.com/juneHQ/june-charts/tree/main/lib/components/BarChart/index.tsx"}},ee={args:{},render:()=>{const[e,t]=n.useState("");return C.jsxs(se,{className:"relative",children:[C.jsx(se.Button,{children:C.jsx(et,{children:"Select an option"})}),C.jsx(se.Panel,{children:C.jsxs(C.Fragment,{children:[C.jsx(It,{onUnmount:()=>t("")}),C.jsxs(de,{children:[C.jsx($e,{value:e,onChange:s=>{t(s.target.value)}}),C.jsxs(Ie,{children:[C.jsx(ne,{value:"option1",children:"Option 1"}),C.jsx(ne,{value:"option2",children:"Option 2"}),C.jsx(ne,{value:"option3",children:"Option 3"})]})]})]})})]})}},te={args:{customOptions:[{value:"option1",label:"Option 1 with very very long name"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]},argTypes:{customOptions:{control:"object",description:"Array of options for the combobox"}},render:e=>{const[t,s]=n.useState("");return C.jsxs(de,{children:[C.jsx($e,{value:t,onChange:f=>{s(f.target.value)}}),C.jsx(Ie,{children:e.customOptions.map(f=>C.jsx(ne,{value:f.value,children:f.label},f.value))})]})}};var he,ye,ge;ee.parameters={...ee.parameters,docs:{...(he=ee.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [searchValue, setSearchValue] = useState("");
    return <Popover className="relative">
    <Popover.Button>
      <Button>Select an option</Button>
    </Popover.Button>
    <Popover.Panel>
      <>
        <Lifecycle onUnmount={() => setSearchValue("")} />
        <Command>
          <CommandInput value={searchValue} onChange={e => {
              setSearchValue(e.target.value);
            }} />
          <CommandList>
            <CommandOption value="option1">Option 1</CommandOption>
            <CommandOption value="option2">Option 2</CommandOption>
            <CommandOption value="option3">Option 3</CommandOption>
          </CommandList>
        </Command>
      </>
    </Popover.Panel>
  </Popover>;
  }
}`,...(ge=(ye=ee.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var Se,Ee,Ce;te.parameters={...te.parameters,docs:{...(Se=te.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    customOptions: [{
      value: "option1",
      label: "Option 1 with very very long name"
    }, {
      value: "option2",
      label: "Option 2"
    }, {
      value: "option3",
      label: "Option 3"
    }]
  },
  argTypes: {
    customOptions: {
      control: "object",
      description: "Array of options for the combobox"
    }
  },
  render: args => {
    const [searchValue, setSearchValue] = useState("");
    return <Command>
          <CommandInput value={searchValue} onChange={e => {
        setSearchValue(e.target.value);
      }} />
          <CommandList>
            {args.customOptions.map(option => <CommandOption key={option.value} value={option.value}>
                {option.label}
              </CommandOption>)}
          </CommandList>
        </Command>;
  }
}`,...(Ce=(Ee=te.parameters)==null?void 0:Ee.docs)==null?void 0:Ce.source}}};const Ht=["Default","VeryLongOption"];export{ee as Default,te as VeryLongOption,Ht as __namedExportsOrder,Vt as default};
