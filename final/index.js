var B=new Set,m=({id:_,cssText:z})=>{if(B.has(_)||document.querySelector(`#${_}`))return;const K=document.createElement("style");K.id=_,K.textContent=z,K.classList.add("evenbetterapi-css-module"),document.head.appendChild(K),B.add(_)},$=m;var a=`
.eb-checkbox__input {
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    width: 1.15em;
    height: 1.15em;
    border: .1em solid grey;
    border-radius: 4px;
    display: inline-grid;
    place-content: center;
    margin: 0;
}
.eb-checkbox__input:checked:before {
    transform: scale(1);
}
.eb-checkbox__input:before {
    content: "";
    transform: scale(0);
    width: .65em;
    height: .65em;
    border-radius: 2px;
    box-shadow: inset 1em 1em var(--c-fg-secondary);
}
.eb-button__label {
    display: inline-flex;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
`,b=()=>{$({id:"checkbox",cssText:a});const _=document.createElement("div");_.classList.add("eb-button__label");const z=document.createElement("div");z.classList.add("eb-checkbox");const K=document.createElement("div");K.classList.add("formkit-outer"),K.dataset.family="box",K.dataset.type="checkbox",K.dataset.complete="true";const F=document.createElement("label");F.classList.add("formkit-wrapper","eb-checkbox__wrapper"),F.dataset.checked="true";const Z=document.createElement("span");Z.classList.add("formkit-inner","eb-checkbox__inner");const q=document.createElement("input");q.classList.add("formkit-input","eb-checkbox__input"),q.type="checkbox";const J=document.createElement("span");return J.classList.add("formkit-decorator"),J.setAttribute("aria-hidden","true"),Z.appendChild(q),Z.appendChild(J),F.appendChild(Z),K.appendChild(F),z.appendChild(K),_.appendChild(z),_};function S(_){const z=document.createElement("div");z.classList.add("c-menu-bar"),z.style.width="100%";const K=document.createElement("div");K.classList.add("p-menubar","p-component"),K.setAttribute("data-pc-name","menubar"),K.setAttribute("data-pc-section","root");const F=document.createElement("div");F.classList.add("p-menubar-start"),F.setAttribute("data-pc-section","start");const Z=document.createElement("div");Z.classList.add("c-settings__title"),Z.style.padding="0 var(--c-space-4)",Z.style.fontWeight="700",Z.textContent=_.title,F.appendChild(Z);const q=document.createElement("ul");q.classList.add("p-menubar-root-list"),_.items.forEach((X)=>{const Y=document.createElement("li");Y.classList.add("p-menuitem"),Y.setAttribute("role","menuitem");const V=document.createElement("div");V.classList.add("p-menuitem-content"),V.setAttribute("data-pc-section","content");const N=document.createElement("div");N.classList.add("c-settings__item"),N.setAttribute("data-is-active","true"),N.addEventListener("click",()=>{K.classList.remove("p-menubar-mobile-active")});const U=document.createElement("a");if(U.setAttribute("href",X.url),U.setAttribute("draggable","false"),U.draggable=!1,U.classList.add("p-menuitem-link"),j.eventManager.on("onPageOpen",(O)=>{if(O.newUrl===X.url){if(X.onOpen)X.onOpen();U.style.backgroundColor="rgba(255,255,255,.04)",U.style.borderRadius="var(--c-border-radius-2)"}else U.style.backgroundColor="",U.style.borderRadius=""}),X.icon){const O=document.createElement("i");O.classList.add("c-icon","fas",X.icon),O.style.marginRight="var(--c-space-2)",U.appendChild(O)}const k=document.createElement("span");k.textContent=X.title,U.appendChild(k),N.appendChild(U),V.appendChild(N),Y.appendChild(V),q.appendChild(Y)});const J=document.createElement("a");J.setAttribute("role","button"),J.setAttribute("tabindex","0"),J.classList.add("p-menubar-button"),J.setAttribute("aria-haspopup","true"),J.setAttribute("aria-expanded","false"),J.setAttribute("aria-label","Navigation"),J.setAttribute("data-pc-section","button"),J.setAttribute("aria-controls","pv_id_3"),J.innerHTML='<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon" aria-hidden="true" data-pc-section="menubuttonicon"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z" fill="currentColor"></path></svg>',J.addEventListener("click",()=>{K.classList.toggle("p-menubar-mobile-active"),q.style.zIndex=K.classList.contains("p-menubar-mobile-active")?"1200":""}),window.addEventListener("resize",()=>{if(window.innerWidth<955)K.classList.add("p-menubar-mobile");else K.classList.remove("p-menubar-mobile"),K.classList.remove("p-menubar-mobile-active")}),window.dispatchEvent(new Event("resize"));const Q=document.createElement("div");if(Q.classList.add("p-menubar-end"),Q.setAttribute("data-pc-section","end"),Q.style.display="flex",Q.style.gap=".5em",Q.style.alignItems="center",_.customButtons)_.customButtons.forEach((X)=>{Q.appendChild(X)});return K.appendChild(F),K.appendChild(J),K.appendChild(q),K.appendChild(Q),z.appendChild(K),z}var H;(function(F){F["INFO"]="info";F["ERROR"]="error";F["WARN"]="warn"})(H||(H={}));window.global=window;class M{log(_,z){const F=`${(new Date()).toString()} [EvenBetterAPI]`;switch(_){case H.INFO:console.log(`${F} [INFO] ${z}`);break;case H.ERROR:console.error(`${F} [ERROR] ${z}`);break;case H.WARN:console.warn(`${F} [WARN] ${z}`);break;default:console.log(`${F} [UNKNOWN] ${z}`)}}info(_){this.log(H.INFO,_)}error(_){this.log(H.ERROR,_)}warn(_){this.log(H.WARN,_)}}var o=new M,W=o;class y{events={};registerEvent(_,z){this.events[_]=z}triggerEvent(_,z){const K=this.events[_];if(K)K.trigger(z);else console.error(`Event "${_}" not registered.`)}on(_,z){const K=this.events[_];if(K)K.addHandler(z);else console.error(`Event "${_}" not registered.`)}initEvents(){W.info(`Initializing ${Object.keys(this.events).length} custom events`);for(let _ in this.events)this.events[_].init()}}class x{handlers=[];addHandler(_){this.handlers.push(_)}init(){const _=setInterval(()=>{if(n())clearInterval(_),this.trigger()},25)}trigger(){this.handlers.forEach((_)=>_())}}var n=()=>{return document.querySelector(".c-authenticated")!==null};class T{handlers=[];addHandler(_){this.handlers.push(_)}init(){new MutationObserver((z)=>{for(let K of z)if(K.type==="childList")K.addedNodes.forEach((F)=>{const Z=F;if(F.nodeType===1&&Z.classList.contains("p-contextmenu"))this.trigger(Z)})}).observe(document.body,{childList:!0,subtree:!0})}trigger(_){this.handlers.forEach((z)=>z(_))}}class L{handlers=[];eventManager;constructor(_){this.eventManager=_}addHandler(_){this.handlers.push(_)}init(){let _=window.location.href;const z=new MutationObserver(()=>{if(window.location.href!==_){let F=new URL(window.location.href).hash,Z=new URL(_).hash;if(_=window.location.href,F.includes("?custom-path="))F=F.split("?custom-path=")[1];if(Z.includes("?custom-path="))Z=Z.split("?custom-path=")[1];document.querySelector(".c-content")?.setAttribute("data-page",F),this.trigger({newUrl:F,oldUrl:Z})}}),K={subtree:!0,childList:!0};z.observe(document,K)}trigger(_){if(W.info(`Page updated: ${_.oldUrl} -> ${_.newUrl}`),_.newUrl.startsWith("#/settings/"))this.eventManager.triggerEvent("onSettingsTabOpen",_.newUrl.replace("#/settings/",""));this.handlers.forEach((z)=>z(_))}}class P{handlers=[];addHandler(_){this.handlers.push(_)}init(){}trigger(_){W.info(`Settings tab opened: ${_}`),this.handlers.forEach((z)=>z(_))}}var t=`
  .evenbetter-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
  }
  
  .evenbetter-modal__content {
    background-color: var(--c-bg-default);
    padding: 1rem;
    border-radius: 5px;
    width: 50%;
    max-width: 500px;
  }
  
  .evenbetter-modal__content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .evenbetter-modal__content-header-title {
    font-size: 1.1rem;
    margin: 0;
  }
  
  .evenbetter-modal__content-body {
    margin-bottom: 1rem;
  }
  
  .evenbetter-modal__content-body-text {
    font-size: 0.9rem;
    color: var(--c-fg-subtle);
    word-break: break-word;
    user-select: text !important;
    -webkit-user-select: text !important;
  
    white-space: break-spaces;
    overflow: auto;
    max-height: 40em;
  }
  
  .evenbetter-modal__content-body a {
    color: var(--c-fg-default);
  }
  
  .evenbetter-modal__content-body-close {
    background-color: var(--c-bg-subtle);
    border: 1px solid var(--c-header-cell-border);
    color: #fff;
    padding: 0.5rem;
    width: 100%;
    margin-top: 0.5rem;
    cursor: pointer;
    transition: 0.2s ease background-color;
  }
  
  .evenbetter-modal__content-body-close:hover {
    background-color: var(--c-bg-default);
  }
`;document.addEventListener("keydown",(_)=>{if(_.key==="Escape")f()});var e=({title:_,content:z})=>{$({id:"evenbetterapi-modal",cssText:t.toString()});const K=document.createElement("div");K.classList.add("evenbetter-modal");const F=document.createElement("div");F.classList.add("evenbetter-modal__content");const Z=document.createElement("div");Z.classList.add("evenbetter-modal__content-header");const q=document.createElement("h2");q.classList.add("evenbetter-modal__content-header-title"),q.textContent=_,Z.appendChild(q);const J=document.createElement("div");J.classList.add("evenbetter-modal__content-body");const Q=document.createElement("p");if(Q.classList.add("evenbetter-modal__content-body-text"),typeof z==="string")Q.innerHTML=z;else if(z instanceof HTMLElement)Q.appendChild(z);const X=document.createElement("button");return X.classList.add("evenbetter-modal__content-body-close"),X.textContent="Close",X.addEventListener("click",f),J.appendChild(Q),J.appendChild(X),F.appendChild(Z),F.appendChild(J),K.appendChild(F),K.setAttribute("data-modal-title",_),K},_1=()=>{return document.querySelector(".evenbetter-modal")!==null},f=()=>{document.querySelector(".evenbetter-modal")?.remove()},C=({title:_,content:z})=>{if(_1())f();const K=e({title:_,content:z});document.body.appendChild(K)};var F1=`
.v-toast--fade-in {
    animation: fadeIn 0.15s ease-in-out forwards;
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.v-toast--fade-out {
    animation: fadeOut 0.15s ease-in-out forwards;
}
@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}`,z1=(_,z,K)=>{const F=document.createElement("div");F.classList.add("v-toast"),F.classList.add(`v-toast--${K}`);const Z=document.createElement("div");Z.setAttribute("role","alert"),Z.classList.add("v-toast__item"),Z.classList.add(`v-toast__item--${z}`),Z.classList.add(`v-toast__item--${K}`),F.appendChild(Z);const q=document.createElement("div");q.classList.add("v-toast__icon"),Z.appendChild(q);const J=document.createElement("p");return J.classList.add("v-toast__text"),J.textContent=_,Z.appendChild(J),F.classList.add("v-toast--fade-in"),F},g=(_)=>{const{message:z,type:K,position:F,duration:Z}=_;$({id:"eb-toast",cssText:F1});let q=document.querySelector(`.v-toast--${F}`);if(!q)q=document.createElement("div"),q.classList.add("v-toast"),q.classList.add(`v-toast--${F}`),document.body.appendChild(q);const J=z1(z,K,F);q.appendChild(J),setTimeout(()=>{J.classList.add("v-toast--fade-out"),setTimeout(()=>{J.remove()},150)},Z-150)};function v(_,z="Search...",K=!1,F){$({id:"eb-text-input",cssText:K1});const Z=document.createElement("div");Z.classList.add("formkit-outer","c-text-input__outer"),Z.setAttribute("style",`width: ${_};`);const q=document.createElement("div");q.classList.add("formkit-wrapper"),q.style.display="flex";const J=document.createElement("div");J.classList.add("formkit-inner","eb-text-input__inner");const Q=document.createElement("div");Q.classList.add("c-text-input__prefix"),Q.setAttribute("style","align-self: center; color: var(--c-fg-subtle);");const X=document.createElement("i");if(X.classList.add("c-icon","fas"),F)X.classList.add(F);const Y=document.createElement("input");if(Y.setAttribute("placeholder",z),Y.setAttribute("spellcheck","false"),Y.classList.add("formkit-input","c-text-input__input"),Y.setAttribute("type","text"),Y.setAttribute("style","width: 100%; background: transparent; border: 0; outline: 0; color: inherit; box-sizing: border-box; line-height: inherit;"),F)Q.appendChild(X);if(J.appendChild(Q),J.appendChild(Y),K){const V=document.createElement("button");V.innerHTML='<i class="fas fa-copy"></i>',V.setAttribute("style","background: transparent; border: 0; outline: 0; cursor: pointer; padding: 0; margin-left: 10px;"),V.addEventListener("click",()=>{navigator.clipboard.writeText(Y.value),j.toast.showToast({message:"Copied to clipboard",position:"bottom",type:"info",duration:1000})}),J.appendChild(V)}return q.appendChild(J),Z.appendChild(q),Z}var K1=`
.eb-text-input__inner {
    gap: var(--c-space-1); 
    flex: 1; 
    display: flex; 
    align-items: center; 
    padding-left: var(--c-space-2); 
    padding-right: var(--c-space-2); 
    box-sizing: border-box; 
    border: var(--c-border-width-1) solid var(--c-border-default); 
    border-radius: var(--c-border-radius-2); 
    color: var(--c-fg-default); 
    background-color: var(--c-bg-default); 
    min-height: var(--c-space-10);
}
.eb-text-input__inner:focus-within {
    border: var(--c-border-width-2) solid var(--c-border-secondary);
}
.eb-text-input__inner textarea {
  padding-top: var(--c-space-2);
}
`;class w{handlers=[];commandObserver=null;selectedCommand=null;addHandler(_){this.handlers.push(_)}init(){const _=(F)=>{this.commandObserver=new MutationObserver((Z)=>{const q=z();if(q!==this.selectedCommand)this.selectedCommand=q}),this.commandObserver.observe(F,{attributes:!0,subtree:!0})},z=()=>{return document.querySelector("[command-item][aria-selected='true']")};new MutationObserver((F)=>{for(let Z of F)if(Z.type==="childList")Z.addedNodes.forEach((q)=>{const J=q;if(q.nodeType===1&&J.hasAttribute("command-theme"))_(J)}),Z.removedNodes.forEach((q)=>{const J=q;if(q.nodeType===1&&J.hasAttribute("command-theme")){if(!this.selectedCommand)return;const Q=this.selectedCommand.getAttribute("data-value");if(Q)this.trigger(Q);if(this.commandObserver)this.commandObserver.disconnect(),this.commandObserver=null}})}).observe(document.body,{childList:!0,subtree:!0})}trigger(_){this.handlers.forEach((z)=>z(_))}}var G=window.Caido;var c=[],u=(_)=>{_.on("onCommandRun",(z)=>{const K=c.find((F)=>F.commandName===z);if(!K)return;Z1(K)})},Z1=(_)=>{const z=document.createElement("div");z.classList.add("custom");const K=document.createElement("div");K.setAttribute("command-root",""),z.appendChild(K);const F=document.createElement("div");F.setAttribute("command-dialog",""),K.appendChild(F);const Z=document.createElement("div");Z.setAttribute("command-dialog-mask",""),Z.style.display="flex",Z.style.justifyContent="center",Z.style.alignItems="center",Z.addEventListener("click",()=>{z.remove()}),F.appendChild(Z);const q=document.createElement("div");q.setAttribute("command-dialog-wrapper",""),q.style.minWidth="600px",q.style.padding="1em",q.style.margin="0",Z.appendChild(q);const J=document.createElement("div");J.setAttribute("command-dialog-body",""),J.style.display="flex",J.style.gap="0.5em",q.addEventListener("click",(Y)=>{Y.stopPropagation()}),q.appendChild(J);const Q=j.components.createTextInput("100%",_.promptPlaceholder);Q.style.zIndex="100",Q.addEventListener("click",(Y)=>{Y.stopPropagation()}),J.appendChild(Q);const X=G.ui.button({label:"Submit",variant:"primary"});X.addEventListener("click",()=>{const Y=Q.querySelector("input");_.onPrompt(Y.value),z.remove()}),J.appendChild(X),document.body.appendChild(z),Q.querySelector("input")?.focus(),Q.addEventListener("keydown",(Y)=>{if(Y.key==="Enter")X.click();if(Y.key==="Escape")z.remove()})},q1=(_,z,K)=>{c.push({commandName:_,promptPlaceholder:z,onPrompt:K})},d={createPromptCommand:q1};var s=async()=>{if(localStorage.getItem("previousPath"))setTimeout(()=>{window.location.hash=localStorage.getItem("previousPath")||"",localStorage.removeItem("previousPath")},200);const _=new WebSocket("ws://localhost:8081");_.addEventListener("open",()=>{j.toast.showToast({message:"Connected to Caido Hot Reloading Server",duration:2000,type:"success",position:"bottom"})}),_.addEventListener("close",()=>{j.toast.showToast({message:"Disconnected from Caido Hot Reloading Server",duration:2000,type:"error",position:"bottom"})}),_.addEventListener("message",(F)=>{try{const Z=JSON.parse(F.data),q=Z.event,J=Z.data;switch(q){case"caido:loadJS":z(J,"").then(()=>{setTimeout(()=>window.location.reload(),25)});break;case"caido:loadCSS":z("",J).then(()=>{setTimeout(()=>window.location.reload(),25)});break;default:console.error("Unknown event type received:",q)}}catch(Z){console.error("Error parsing WebSocket message:",Z)}});const z=async(F,Z)=>{const q=await K();if(!q)return;const J={input:{data:q.data,migrations:q.migrations}};if(F)J.input.data.js=F;if(Z)J.input.data.css=Z;return G.graphql.updateViewerSettings(J)},K=async()=>{return await G.graphql.userSettings().then((F)=>{return F.viewer.settings})}};var J1=`
  :root {
    --c-table-background: #2b2e35;
    --c-table-even-item-row: #353942;
    --c-table-item-row-hover: var(--c-bg-default);
  }
  .c-evenbetter_table_card-body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .c-evenbetter_table-container {
    overscroll-behavior-y: none;
    overflow: auto;
    height: 100%;
    border-radius: 5px !important;
  }
  .c-evenbetter_table_header-row {
    min-width: fit-content;
    width: 100%;
    white-space: nowrap;
    border-bottom: 2px solid var(--c-bg-default);
    background-color: var(--c-table-background);
    position: sticky;
    top: 0;
    z-index: 1;
  }
  .c-evenbetter_table_header-cell {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: var(--c-space-2) var(--c-space-4);
    color: var(--c-fg-subtle);
    user-select: none;
    min-width: var(--1e00f3f4);
    box-sizing: border-box;
    border-right: .1em solid var(--c-bg-default);
  }
  [data-sortable="true"][data-is-resizing="false"]
    .c-evenbetter_table_header-cell {
    cursor: pointer;
  }
  [data-align="start"] .c-evenbetter_header-cell_wrapper {
    flex-direction: row;
  }
  .c-evenbetter_header-cell_wrapper {
    display: inline-flex;
    gap: var(--c-space-2);
    width: 100%;
  }
  .c-evenbetter_header-cell_content {
    overflow: hidden;
    text-overflow: ellipsis;
    user-select: none;
  }
  .c-evenbetter_table-item-cell {
    min-width: var(--cellWidth);
    display: inline-flex;
    align-items: center;
    padding: 0 1rem;
    width: var(--cellWidth);
    height: 100%;
    box-sizing: border-box;
  }
  .c-evenbetter_table-item-cell__inner {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .c-evenbetter_table-item-row {
    display: flex;
    min-width: fit-content;
    height: 42px;
    box-sizing: border-box;
    white-space: nowrap;
    border-bottom: 0.1em solid var(--c-bg-default);
    width: 100%;
  }
  .c-evenbetter_table-item-row:hover {
    background-color: var(--c-table-item-row-hover);
  }
  .c-evenbetter_table_row[data-is-even="true"] {
    background-color: var(--c-table-even-item-row);
  }
  .c-evenbetter_table_row:hover {
    cursor: pointer;
    background-color: var(--c-table-item-row-hover);
  }
  .c-evenbetter_table_header-cell:last-child {
    border-right: none;
  }
  .c-evenbetter_table {
    outline: none;
    width: 100%;
    height: 100%;
    display: flex;
}`,Q1=()=>{return'<div class="c-evenbetter_table_card-body"><div class="c-evenbetter_table-container" data-is-empty="false" data-is-loading="false" style="overflow-y: auto;"><div class="c-evenbetter_table_header-row"></div><div class="c-table__wrapper" style="margin-top: 0px;"></div></div></div>'},p=(_)=>{return new D(_)};class D{_;tableElement;tableWrapper;constructor(_){this.config=_;$({id:"eb-table-css",cssText:J1}),this.tableElement=document.createElement("div"),this.tableElement.className="c-evenbetter_table",this.tableElement.style.overflow="auto",this.tableElement.style.width="100%",this.tableElement.style.height=this.config.tableHeight,this.tableElement.setAttribute("data-row-height",this.config.rowHeight||"42px"),this.tableElement.innerHTML=Q1(),this.tableWrapper=this.tableElement.querySelector(".c-table__wrapper");const z=this.tableElement.querySelector(".c-evenbetter_table_card-body");if(!z)throw new Error("Card body not found");z.style.height=this.config.tableHeight,z.style.width="100%";const K=this.tableElement.querySelector(".c-evenbetter_table_header-row");if(!K)throw new Error("Column row not found");this.config.columns.forEach((F)=>{K.innerHTML+=`<div class="c-evenbetter_table_header-cell" data-sortable="true" data-resizable="true" data-align="start" data-is-resizing="false" style="--1e00f3f4: 4rem; width: max(${F.width}, 56px);"><div class="c-evenbetter_header-cell_wrapper"><div class="c-evenbetter_header-cell_content">${F.name}</div></div></div>`})}filterRows(_){const z=this.tableWrapper.querySelectorAll(".c-evenbetter_table_row");let K=1;z.forEach((F,Z)=>{const q=F,J=F.querySelectorAll(".c-evenbetter_table-item-cell");let Q=!1;if(J.forEach((X)=>{if(X.textContent?.toLowerCase().includes(_.toLowerCase()))Q=!0}),Q)q.style.display="flex",q.setAttribute("data-is-even",(K%2===0).toString()),K++;else q.style.display="none",q.removeAttribute("data-is-even")})}clearRows(){this.tableWrapper.innerHTML=""}addRow(_,z){const K=(this.tableWrapper.children.length+1)%2===0,F=document.createElement("div");F.className="c-evenbetter_table_row",F.setAttribute("data-is-even",K.toString());const Z=document.createElement("div");if(Z.className="c-evenbetter_table-item-row",this.config.rowHeight)Z.style.height=this.config.rowHeight;if(_.forEach((q)=>{const J=this.config.columns.find((Y)=>Y.name===q.columnName)?.width,Q=document.createElement("div");Q.className="c-evenbetter_table-item-cell",Q.setAttribute("data-column-id",q.columnName),Q.setAttribute("data-align","start"),Q.style.setProperty("--cellWidth",`max(${J}, 56px)`);const X=document.createElement("div");if(X.className="c-evenbetter_table-item-cell__inner",typeof q.value==="string")X.textContent=q.value;else X.appendChild(q.value);Q.appendChild(X),Z.appendChild(Q)}),z)Z.addEventListener("click",z);F.appendChild(Z),this.tableWrapper.appendChild(F)}getHTMLElement(){return this.tableElement}static createTable(_){return new D(_)}}var X1=function(){const _=new y,z=new x,K=new P,F=new L(_),Z=new T,q=new w;return _.registerEvent("onCaidoLoad",z),_.registerEvent("onSettingsTabOpen",K),_.registerEvent("onPageOpen",F),_.registerEvent("onContextMenuOpen",Z),_.registerEvent("onCommandRun",q),_.initEvents(),u(_),{modal:{openModal:C,closeModal:f},toast:{showToast:g},components:{createTable:p,createNavigationBar:S,createCheckbox:b,createTextInput:v},eventManager:_,loadCSS:$,promptCommands:d,hotReloading:s,version:"1.2.0"}},R;if(typeof window!=="undefined"&&window.EvenBetterAPI)R=window.EvenBetterAPI;else if(R=X1(),typeof window!=="undefined")window.EvenBetterAPI=R;var j=R;var h=".even-better__settings .header-description{color:var(--c-fg-subtle);margin:0!important}.even-better__settings header{margin-bottom:1rem}.even-better__settings{height:100%;padding:1rem}.even-better__settings button{background-color:var(--c-bg-primary);color:var(--c-fg-default);padding:var(--c-space-0)var(--c-space-3);min-height:var(--c-space-8);font-size:inherit;border-radius:var(--c-border-radius-1);cursor:pointer;border:0;align-items:center;width:fit-content;margin-top:1em;transition:background-color .2s;display:flex}.even-better__settings button:hover{background-color:var(--c-bg-primary--pressed)}.even-better__settings button[disabled]{background-color:var(--c-bg-subtle);color:var(--c-fg-subtle);cursor:not-allowed}.even-better__settings main{gap:1rem;height:100%;display:grid}@media screen and (width>=1468px){.even-better__settings main{grid-template-columns:minmax(40%,1fr) minmax(60%,1fr)}}.even-better__settings .left{flex-direction:column;gap:1rem;display:flex}.even-better__settings .settings-box{background-color:var(--c-bg-default);border-radius:5px;padding:1rem}.even-better__settings .settings-box__header-enabled{background-color:#0f3c31;border:1px solid #13a561;border-radius:5px;padding:.4rem}.even-better__settings .header-title h1{margin:0;font-size:1.5rem}.even-better__settings main h2{margin:0;font-size:1rem}.even-better__settings main h3{margin:.5rem 0 0;font-size:.9rem}.even-better__settings main p{color:gray;margin:0 0 .7rem;font-size:.9rem}.even-better__settings main label{font-size:.9rem}.even-better__settings .settings-box__header{margin-bottom:1rem}.even-better__settings .header-title{justify-content:space-between;align-items:center;display:flex}.even-better__settings .settings-box__header-title{margin:0;font-size:16px;font-weight:700}.even-better__settings .settings-box__header-description{color:var(--c-fg-subtle)}.even-better__settings .c-shortcut-table-header__search{width:100%}.even-better__settings .c-text-input__input{color:inherit;box-sizing:border-box;line-height:inherit;background:0 0;border:0;outline:0;width:100%}.even-better__settings .c-text-input__inner{gap:var(--c-space-1);padding-left:var(--c-space-2);padding-right:var(--c-space-2);box-sizing:border-box;border:var(--c-border-width-1)solid var(--c-border-default);border-radius:var(--c-border-radius-2);color:var(--c-fg-default);background-color:var(--c-bg-default);min-height:var(--c-space-10);display:flex}.even-better__settings .header-outdated{background-color:var(--c-red-800);width:fit-content;padding:.4rem;font-size:1rem;font-weight:700}.even-better__settings select{background-image:url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20viewBox%3D%220%20-4.5%2020%2020%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20fill%3D%22%23ffffff%22%3E%3Cg%20id%3D%22SVGRepo_bgCarrier%22%20stroke-width%3D%220%22%3E%3C%2Fg%3E%3Cg%20id%3D%22SVGRepo_tracerCarrier%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fg%3E%3Cg%20id%3D%22SVGRepo_iconCarrier%22%3E%20%3Ctitle%3Earrow_down%20%5B%23ffffff%5D%3C%2Ftitle%3E%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%20%3Cdefs%3E%20%3C%2Fdefs%3E%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%3Cg%20id%3D%22Dribbble-Light-Preview%22%20transform%3D%22translate%28-220.000000%2C%20-6684.000000%29%22%20fill%3D%22%23ffffff%22%3E%20%3Cg%20id%3D%22icons%22%20transform%3D%22translate%2856.000000%2C%20160.000000%29%22%3E%20%3Cpath%20d%3D%22M164.292308%2C6524.36583%20L164.292308%2C6524.36583%20C163.902564%2C6524.77071%20163.902564%2C6525.42619%20164.292308%2C6525.83004%20L172.555873%2C6534.39267%20C173.33636%2C6535.20244%20174.602528%2C6535.20244%20175.383014%2C6534.39267%20L183.70754%2C6525.76791%20C184.093286%2C6525.36716%20184.098283%2C6524.71997%20183.717533%2C6524.31405%20C183.328789%2C6523.89985%20182.68821%2C6523.89467%20182.29347%2C6524.30266%20L174.676479%2C6532.19636%20C174.285736%2C6532.60124%20173.653152%2C6532.60124%20173.262409%2C6532.19636%20L165.705379%2C6524.36583%20C165.315635%2C6523.96094%20164.683051%2C6523.96094%20164.292308%2C6524.36583%22%20id%3D%22arrow_down-%5B%23ffffff%5D%22%3E%20%3C%2Fpath%3E%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3C%2Fg%3E%3C%2Fsvg%3E);background-position:right .7rem top 50%;background-repeat:no-repeat;background-size:.65rem}.settings-box__content{flex-direction:column;gap:1rem;height:50%;display:flex}.settings-box__content select{height:var(--c-space-10);border:var(--c-border-width-1)solid var(--c-border-default);background-color:var(--c-bg-default);color:var(--c-fg-default);-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;padding:0 .5em;border-radius:var(--c-border-radius-2)0px 0px var(--c-border-radius-2)!important}.settings-box__content-item-title{margin-bottom:.25em;font-weight:700}.settings-box__content-item{flex-direction:column;gap:.1rem;width:100%;display:flex}.settings-box__content hr{border:0;border-top:1px solid var(--c-fg-default);opacity:.05;height:100%;margin:.1rem 0}.toggle-features{background-color:var(--c-bg-default);border-radius:5px;height:100%;padding:1rem}.toggle-features__header-title{font-size:var(--c-font-size-200);margin:0;font-size:1.2rem;font-weight:700}.toggle-features__header-description{color:var(--c-fg-subtle);font-size:1.1rem}.toggle-features hr{border:0;border-top:1px solid var(--c-fg-default);opacity:.05;margin:1rem 0}.toggle-features__content-item-title{font-size:var(--c-font-size-200);margin:0;font-weight:700}.toggle-features__content-item-description{word-wrap:break-word;width:90%}.toggle-features__content-item-toggle{color:var(--c-fg-subtle);justify-content:space-between;align-items:center;display:flex}";var Y1={gif_url:"https://media.tenor.com/fAQ4mdg7iz4AAAAj/pixel-cat.gif",gif_width:"200",gif_height:"200",caido_pets_enabled:"true"},A=(_)=>{const z=localStorage.getItem(`monke_${_}`);if(z===null)return Y1[_];return z},E=(_,z)=>{localStorage.setItem(`monke_${_}`,z)},$1=()=>{return`
  <div class="even-better__settings" id="evenbetter-settings-content">
    <header>
      <div class="header-title"><h1>The Primate Pack - Settings</h1></div>
      <div class="header-description">Primate Pack settings.</div>
    </header>
    <main>
      <div class="left">
        <div class="settings-box" id="caidoPets">
          <div class="settings-box__header">
            <div class="settings-box__header-title">Caido Pets</div>
            <div class="settings-box__header-description">Pet Configuration</div>
          </div>
          <div class="settings-box__content">
            <div class="c-text-input">
              <div class="c-text-input__outer">
                <u>GIF URL</u>
                <div class="c-text-input__inner">
                  <input type="text" placeholder="https://www.example.com" spellcheck="false" class="c-text-input__input" id="gif_url" />
                </div>
              </div>
              <br>
              <div class="c-text-input__outer">
                <u>Width</u>
                <div class="c-text-input__inner">
                  <input type="text" placeholder="200" spellcheck="false" class="c-text-input__input" id="gif_width" />
                </div>
              </div>
              <br>
              <div class="c-text-input__outer">
                <u>Height</u>
                <div class="c-text-input__inner">
                  <input type="text" placeholder="200" spellcheck="false" class="c-text-input__input" id="gif_height" />
                </div>
              </div>
            </div>
            <button id="petSaveButton">Save</button>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="toggle-features" id="featureFlags">
          <div class="toggle-features__header">
            <div class="toggle-features__header-title">Toggle Features</div>
            <div class="toggle-features__header-description">Enable or disable features of the Primate Pack plugins</div>
          </div>
          <hr />
          <div class="toggle-features__content">${[{name:"caido_pets_enabled",title:"Caido Pets",items:[{name:"caido_pets_enabled",title:"Caido Pets",description:"Adds a gif in the bottom-left corner of the Caido UI."}]},{name:"activity_tracker_enabled",title:"Activity Tracker",items:[{name:"activity_tracker_enabled",title:"Activity Tracker",description:"Enable Activity Tracker within Caido."}]}].map((K)=>`
    <div class="toggle-features__content-item">
      <div class="toggle-features__content-item-title">${K.title}</div>
      ${K.items.map((F)=>`
        <div class="toggle-features__content-item-toggle">
          <div class="toggle-features__content-item-description">
            <b>${F.title}:</b> ${F.description}
          </div>
          <div>
            <input type="checkbox" name="${F.name}" id="${F.name}" ${A(F.name)==="true"?"checked":""} />
          </div>
        </div>`).join("")}
    </div>
    <hr />`).join("")}</div>
          <button id="featureSaveButton">Save</button>
        </div>
      </div>
    </main>
  </div>
  `},r=()=>{$({id:"evenbetter-settings",cssText:h.toString()});const _=document.createElement("div");return _.innerHTML=$1(),_.querySelectorAll("input[type=checkbox]").forEach((F)=>{F.addEventListener("change",(Z)=>{const q=Z.target;E(q.name,q.checked?"true":"false")})}),_.querySelector("#petSaveButton").addEventListener("click",()=>{const F=_.querySelector("#gif_url").value,Z=_.querySelector("#gif_width").value,q=_.querySelector("#gif_height").value;E("gif_url",F),E("gif_width",Z),E("gif_height",q),location.reload()}),_},G1=()=>{return`
  <div class="even-better__settings" id="evenbetter-settings-content">
    <header>
      <div class="header-title"><h1>Activity Monitor</h1></div>
      <div class="header-description">Track your hacking activity here!</div>
    </header>
    <main>
      <div class="left">
        <div class="settings-box" id="caidoPets">
          <div class="settings-box__header">
            <div class="settings-box__header-title">Caido Pets</div>
            <div class="settings-box__header-description">Pet Configuration</div>
          </div>
          <div class="settings-box__content">
            <button id="petSaveButton">Save</button>
          </div>
        </div>
      </div>
      <div class="right">
      </div>
    </main>
  </div>
  `},l=()=>{$({id:"evenbetter-settings",cssText:h.toString()});const _=document.createElement("div");return _.innerHTML=G1(),_};var i=()=>{if(G.navigation.addPage("/settings/theprimatepack",{body:r()}),G.navigation.addPage("/theprimatepack/activity",{body:l()}),G.menu.registerItem({type:"Settings",label:"The Primate Pack",path:"/settings/theprimatepack",leadingIcon:"fas fa-cat"}),G.commands.register("evenbetter:settings",{name:"Go to The Primate Pack: Settings",group:"The Primate Pack: Navigation",run:()=>{G.navigation.goTo("/settings/theprimatepack")}}),G.commandPalette.register("theprimatepack:settings"),A("caido_pets_enabled")==="true")G.sidebar.registerItem("","#",{icon:"",group:"<img id='gifImage' width='200' height='200'>"});G.sidebar.registerItem("Activity","/theprimatepack/activity",{icon:"fas fa-clock",group:"The Primate Pack"})},I=()=>{const _=document.getElementById("gifImage");if(_)_.src=A("gif_url"),_.width=parseInt(A("gif_width")),_.height=parseInt(A("gif_height"));else setTimeout(I,500)};var j1=()=>{i(),I(),console.log("[Caido Pets] Setting GIF if enabled."),j.eventManager.on("onPageOpen",()=>{localStorage.setItem("previousPath",window.location.hash);const _=document.querySelector(".c-sidebar-item[data-is-active='true']");if(_){let z=_.querySelector(".c-sidebar-item__count");if(z)z.innerHTML=""}})};j1();
