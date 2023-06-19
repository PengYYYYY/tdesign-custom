import{U as r,D as n,a as i,b as d,c as p,d as l,e as m,f as c,g as v,h as _,i as g,j as u,k as h,l as b,m as y,n as f,o as C,p as x,q as D}from"./index.3936167d.js";import{P as w}from"./prism.2871a942.js";import{n as T}from"./index.7ed388d9.js";var S=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("td-doc-content",{ref:"tdDocContent",attrs:{"page-status":"hidden"}},[e("td-doc-header",{ref:"tdDocHeader",attrs:{slot:"doc-header",spline:"message",platform:"web"},slot:"doc-header"},[e("td-doc-badge",{attrs:{slot:"badge",label:"coverage",message:"0%"},slot:"badge"})],1),e("td-doc-tabs",{ref:"tdDocTabs",attrs:{tab:t.tab}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.tab==="demo",expression:"tab === 'demo'"}]},[e("div",{attrs:{name:"DEMO"}},[e("nav",{staticClass:"tdesign-toc_container"},[e("ol",{staticClass:"tdesign-toc_list"},[e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#basic-pop-up-layer"}},[t._v("Basic pop-up layer")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#trigger-element"}},[t._v("Trigger Element")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#popup-layer-with-different-trigger-methods"}},[t._v("Popup Layer with Different Trigger Methods")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#location-direction"}},[t._v("Location Direction")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#floating-layer-style"}},[t._v("Floating Layer Style")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#pop-up-layer-that-can-be-displayed"}},[t._v("Pop-up layer that can be displayed")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#mounting-parent-node"}},[t._v("Mounting Parent Node")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#destroy-pop-up-layer-when-it-can-be-hidden"}},[t._v("Destroy pop-up layer when it can be hidden")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#disable-pop-up-layer"}},[t._v("Disable pop-up layer")])])])]),e("Usage"),e("h3",{attrs:{id:"basic-pop-up-layer"}},[t._v("Basic pop-up layer "),e("a",{staticClass:"header-anchor",attrs:{href:"#basic-pop-up-layer"}})]),e("p",[t._v("It consists of a floating layer content and a trigger element, both of which can be customized. Use "),e("code",[t._v("content")]),t._v(" to customize the floating layer content.")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--popup-base tdesign-demo-item--popup"},[e("td-doc-demo",{attrs:{code:t.DemoexamplebaseCode,"demo-name":"base",language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"base","component-name":" popup",code:t.DemoexamplebaseCode}}),e("Codesandbox",{attrs:{"demo-name":"base","component-name":" popup",code:t.DemoexamplebaseCode}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexamplebase")],1)])],1),e("h3",{attrs:{id:"trigger-element"}},[t._v("Trigger Element "),e("a",{staticClass:"header-anchor",attrs:{href:"#trigger-element"}})]),e("p",[t._v("You can use "),e("code",[t._v("triggerElement")]),t._v(" to customize the trigger element.")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--popup-trigger-element tdesign-demo-item--popup"},[e("td-doc-demo",{attrs:{code:t.DemoexampletriggerelementCode,"demo-name":"trigger-element",language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"trigger-element","component-name":" popup",code:t.DemoexampletriggerelementCode}}),e("Codesandbox",{attrs:{"demo-name":"trigger-element","component-name":" popup",code:t.DemoexampletriggerelementCode}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexampletriggerelement")],1)])],1),e("h3",{attrs:{id:"popup-layer-with-different-trigger-methods"}},[t._v("Popup Layer with Different Trigger Methods "),e("a",{staticClass:"header-anchor",attrs:{href:"#popup-layer-with-different-trigger-methods"}})]),e("p",[t._v("Trigger when floating (default), trigger when clicking, trigger when getting focus, trigger when right-clicking, etc.")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--popup-trigger tdesign-demo-item--popup"},[e("td-doc-demo",{attrs:{code:t.DemoexampletriggerCode,"demo-name":"trigger",language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"trigger","component-name":" popup",code:t.DemoexampletriggerCode}}),e("Codesandbox",{attrs:{"demo-name":"trigger","component-name":" popup",code:t.DemoexampletriggerCode}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexampletrigger")],1)])],1),e("h3",{attrs:{id:"location-direction"}},[t._v("Location Direction "),e("a",{staticClass:"header-anchor",attrs:{href:"#location-direction"}})]),e("p",[t._v("Use "),e("code",[t._v("placement")]),t._v(" to control the direction of the floating layer. If you need a floating layer arrow, set "),e("code",[t._v("showArrow=true")]),t._v(".")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--popup-placement tdesign-demo-item--popup"},[e("td-doc-demo",{attrs:{code:t.DemoexampleplacementCode,"demo-name":"placement",language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"placement","component-name":" popup",code:t.DemoexampleplacementCode}}),e("Codesandbox",{attrs:{"demo-name":"placement","component-name":" popup",code:t.DemoexampleplacementCode}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexampleplacement")],1)])],1),e("h3",{attrs:{id:"floating-layer-style"}},[t._v("Floating Layer Style "),e("a",{staticClass:"header-anchor",attrs:{href:"#floating-layer-style"}})]),e("p",[t._v("The floating layer style can be controlled using overlayClassName, overlayStyle, overlayInnerStyle.")]),e("ul",[e("li",[e("code",[t._v("overlayClassName")]),t._v(" is used to define the floating layer style class name.")]),e("li",[e("code",[t._v("overlayStyle")]),t._v(" is used to define the floating layer style, such as the floating layer width. The width of the floating layer is rendered according to the content width by default, and the width and maximum width can be freely set.")]),e("li",[e("code",[t._v("overlayInnerStyle")]),t._v(" is used to define the style of the floating layer content, such as the maximum height of the content and whether to display a scroll bar. When the value is of type function, the width of the floating layer content can be the same as that of the trigger element.")])]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--popup-style tdesign-demo-item--popup"},[e("td-doc-demo",{attrs:{code:t.DemoexamplestyleCode,"demo-name":"style",language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"style","component-name":" popup",code:t.DemoexamplestyleCode}}),e("Codesandbox",{attrs:{"demo-name":"style","component-name":" popup",code:t.DemoexamplestyleCode}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexamplestyle")],1)])],1),e("h3",{attrs:{id:"pop-up-layer-that-can-be-displayed"}},[t._v("Pop-up layer that can be displayed "),e("a",{staticClass:"header-anchor",attrs:{href:"#pop-up-layer-that-can-be-displayed"}})]),e("p",[t._v("You can freely control the display or hiding of the pop-up layer by using "),e("code",[t._v("visible")]),t._v(".")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--popup-visible tdesign-demo-item--popup"},[e("td-doc-demo",{attrs:{code:t.DemoexamplevisibleCode,"demo-name":"visible",language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"visible","component-name":" popup",code:t.DemoexamplevisibleCode}}),e("Codesandbox",{attrs:{"demo-name":"visible","component-name":" popup",code:t.DemoexamplevisibleCode}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexamplevisible")],1)])],1),e("h3",{attrs:{id:"mounting-parent-node"}},[t._v("Mounting Parent Node "),e("a",{staticClass:"header-anchor",attrs:{href:"#mounting-parent-node"}})]),e("p",[t._v("The default parent node of the floating layer is "),e("code",[t._v("body")]),t._v(". You can freely adjust the parent node element mounted by "),e("code",[t._v("attach")]),t._v(".")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--popup-container tdesign-demo-item--popup"},[e("td-doc-demo",{attrs:{code:t.DemoexamplecontainerCode,"demo-name":"container",language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"container","component-name":" popup",code:t.DemoexamplecontainerCode}}),e("Codesandbox",{attrs:{"demo-name":"container","component-name":" popup",code:t.DemoexamplecontainerCode}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexamplecontainer")],1)])],1),e("h3",{attrs:{id:"destroy-pop-up-layer-when-it-can-be-hidden"}},[t._v("Destroy pop-up layer when it can be hidden "),e("a",{staticClass:"header-anchor",attrs:{href:"#destroy-pop-up-layer-when-it-can-be-hidden"}})]),e("p",[e("code",[t._v("destroyOnClose")]),t._v(" is used to control whether to destroy the floating layer content when the floating layer is hidden.")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--popup-destroy tdesign-demo-item--popup"},[e("td-doc-demo",{attrs:{code:t.DemoexampledestroyCode,"demo-name":"destroy",language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"destroy","component-name":" popup",code:t.DemoexampledestroyCode}}),e("Codesandbox",{attrs:{"demo-name":"destroy","component-name":" popup",code:t.DemoexampledestroyCode}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexampledestroy")],1)])],1),e("h3",{attrs:{id:"disable-pop-up-layer"}},[t._v("Disable pop-up layer "),e("a",{staticClass:"header-anchor",attrs:{href:"#disable-pop-up-layer"}})]),e("p",[t._v("When the component is turned off, the pop-up layer is no longer displayed.")]),e("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--popup-disabled tdesign-demo-item--popup"},[e("td-doc-demo",{attrs:{code:t.DemoexampledisabledCode,"demo-name":"disabled",language:"markup"}},[e("div",{attrs:{slot:"action"},slot:"action"},[e("Stackblitz",{attrs:{"demo-name":"disabled","component-name":" popup",code:t.DemoexampledisabledCode}}),e("Codesandbox",{attrs:{"demo-name":"disabled","component-name":" popup",code:t.DemoexampledisabledCode}})],1),e("div",{staticClass:"tdesign-demo-item__body"},[e("Demoexampledisabled")],1)])],1)],1),e("td-contributors",{attrs:{platform:"web",framework:"vue","component-name":"popup"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.tab==="api",expression:"tab === 'api'"}],attrs:{name:"API"}},[e("nav",{staticClass:"tdesign-toc_container"},[e("ol",{staticClass:"tdesign-toc_list"},[e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#popup-props"}},[t._v("Popup Props")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#popup-events"}},[t._v("Popup Events")])]),e("li",{staticClass:"tdesign-toc_list_item"},[e("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#popupplugin"}},[t._v("PopupPlugin")])])])]),e("h3",{attrs:{id:"popup-props"}},[t._v("Popup Props "),e("a",{staticClass:"header-anchor",attrs:{href:"#popup-props"}})]),e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),e("th",[t._v("type")]),e("th",[t._v("default")]),e("th",[t._v("description")]),e("th",[t._v("required")])])]),e("tbody",[e("tr",[e("td",[t._v("attach")]),e("td",[t._v("String / Function")]),e("td",[t._v("'body'")]),e("td",[t._v("Typescript\uFF1A"),e("code",[t._v("AttachNode")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("see more ts definition")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("content")]),e("td",[t._v("String / Slot / Function")]),e("td",[t._v("-")]),e("td",[t._v("Typescript\uFF1A"),e("code",[t._v("string | TNode")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("see more ts definition")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("default")]),e("td",[t._v("String / Slot / Function")]),e("td",[t._v("-")]),e("td",[t._v("Typescript\uFF1A"),e("code",[t._v("string | TNode")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("see more ts definition")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("delay")]),e("td",[t._v("Number / Array")]),e("td",[t._v("-")]),e("td",[t._v("delay to show or hide popover\u3002Typescript\uFF1A"),e("code",[t._v("number | Array<number>")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("destroyOnClose")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")]),e("td",[t._v("-")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("Boolean")]),e("td",[t._v("-")]),e("td",[t._v("-")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("hideEmptyPopup")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")]),e("td",[t._v("-")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("overlayClassName")]),e("td",[t._v("String / Object / Array")]),e("td",[t._v("-")]),e("td",[t._v("Typescript\uFF1A"),e("code",[t._v("ClassName")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("see more ts definition")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("overlayInnerClassName")]),e("td",[t._v("String / Object / Array")]),e("td",[t._v("-")]),e("td",[t._v("Typescript\uFF1A"),e("code",[t._v("ClassName")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("see more ts definition")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("overlayInnerStyle")]),e("td",[t._v("Boolean / Object / Function")]),e("td",[t._v("-")]),e("td",[t._v("Typescript\uFF1A"),e("code",[t._v("Styles | ((triggerElement: HTMLElement, popupElement: HTMLElement) => Styles)")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("see more ts definition")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("overlayStyle")]),e("td",[t._v("Boolean / Object / Function")]),e("td",[t._v("-")]),e("td",[t._v("Typescript\uFF1A"),e("code",[t._v("Styles | ((triggerElement: HTMLElement, popupElement: HTMLElement) => Styles)")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("see more ts definition")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("placement")]),e("td",[t._v("String")]),e("td",[t._v("top")]),e("td",[t._v("Typescript\uFF1A"),e("code",[t._v("PopupPlacement")]),t._v(" "),e("code",[t._v("type PopupPlacement = 'top'|'left'|'right'|'bottom'|'top-left'|'top-right'|'bottom-left'|'bottom-right'|'left-top'|'left-bottom'|'right-top'|'right-bottom'")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/popup/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("see more ts definition")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("popperOptions")]),e("td",[t._v("Object")]),e("td",[t._v("-")]),e("td",[t._v("popper initial options\uFF0Cdetails refer to "),e("a",{attrs:{href:"https://popper.js.org/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://popper.js.org/docs")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("showArrow")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")]),e("td",[t._v("-")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("trigger")]),e("td",[t._v("String")]),e("td",[t._v("hover")]),e("td",[t._v("options\uFF1Ahover/click/focus/mousedown/context-menu")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("triggerElement")]),e("td",[t._v("String / Slot / Function")]),e("td",[t._v("-")]),e("td",[t._v("Typescript\uFF1A"),e("code",[t._v("string | TNode")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("see more ts definition")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("visible")]),e("td",[t._v("Boolean")]),e("td",[t._v("-")]),e("td",[e("code",[t._v("v-model")]),t._v(" is supported\u3002Typescript\uFF1A"),e("code",[t._v("boolean")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("defaultVisible")]),e("td",[t._v("Boolean")]),e("td",[t._v("-")]),e("td",[t._v("uncontrolled property\u3002Typescript\uFF1A"),e("code",[t._v("boolean")])]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("zIndex")]),e("td",[t._v("Number")]),e("td",[t._v("-")]),e("td",[t._v("-")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("onScroll")]),e("td",[t._v("Function")]),e("td"),e("td",[t._v("Typescript\uFF1A"),e("code",[t._v("(context: { e: WheelEvent }) => void")]),e("br")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("onScrollToBottom")]),e("td",[t._v("Function")]),e("td"),e("td",[t._v("Typescript\uFF1A"),e("code",[t._v("(context: { e: WheelEvent }) => void")]),e("br")]),e("td",[t._v("N")])]),e("tr",[e("td",[t._v("onVisibleChange")]),e("td",[t._v("Function")]),e("td"),e("td",[t._v("Typescript\uFF1A"),e("code",[t._v("(visible: boolean, context: PopupVisibleChangeContext) => void")]),e("br"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/popup/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("see more ts definition")]),t._v("\u3002"),e("br"),e("code",[t._v("interface PopupVisibleChangeContext { e?: PopupTriggerEvent; trigger?: PopupTriggerSource }")]),e("br"),e("br"),e("code",[t._v("type PopupTriggerEvent = MouseEvent | FocusEvent | KeyboardEvent")]),e("br"),e("br"),e("code",[t._v("type PopupTriggerSource = 'document' | 'trigger-element-click' | 'trigger-element-hover' | 'trigger-element-blur' | 'trigger-element-focus' | 'trigger-element-mousedown' | 'context-menu' | 'keydown-esc'")]),e("br")]),e("td",[t._v("N")])])])]),e("h3",{attrs:{id:"popup-events"}},[t._v("Popup Events "),e("a",{staticClass:"header-anchor",attrs:{href:"#popup-events"}})]),e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),e("th",[t._v("params")]),e("th",[t._v("description")])])]),e("tbody",[e("tr",[e("td",[t._v("scroll")]),e("td",[e("code",[t._v("(context: { e: WheelEvent })")])]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("scroll-to-bottom")]),e("td",[e("code",[t._v("(context: { e: WheelEvent })")])]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("visible-change")]),e("td",[e("code",[t._v("(visible: boolean, context: PopupVisibleChangeContext)")])]),e("td",[e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/popup/type.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("see more ts definition")]),t._v("\u3002"),e("br"),e("code",[t._v("interface PopupVisibleChangeContext { e?: PopupTriggerEvent; trigger?: PopupTriggerSource }")]),e("br"),e("br"),e("code",[t._v("type PopupTriggerEvent = MouseEvent | FocusEvent | KeyboardEvent")]),e("br"),e("br"),e("code",[t._v("type PopupTriggerSource = 'document' | 'trigger-element-click' | 'trigger-element-hover' | 'trigger-element-blur' | 'trigger-element-focus' | 'trigger-element-mousedown' | 'context-menu' | 'keydown-esc'")]),e("br")])])])]),e("h3",{attrs:{id:"popupplugin"}},[t._v("PopupPlugin "),e("a",{staticClass:"header-anchor",attrs:{href:"#popupplugin"}})]),e("p",[t._v("support "),e("code",[t._v("this.$popup")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),e("th",[t._v("params")]),e("th",[t._v("default")]),e("th",[t._v("description")])])]),e("tbody",[e("tr",[e("td",[t._v("content")]),e("td",[t._v("String / Slot / Function")]),e("td",[t._v("-")]),e("td",[t._v("required\u3002Typescript\uFF1A"),e("code",[t._v("string | TNode")]),t._v("\u3002"),e("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("see more ts definition")])])]),e("tr",[e("td",[t._v("popupProps")]),e("td",[t._v("Object")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("triggerElement")]),e("td",[t._v("String")]),e("td",[t._v("-")]),e("td",[t._v("required")])])])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.tab==="design",expression:"tab === 'design'"}],attrs:{name:"DESIGN"}},[e("td-doc-empty")],1),e("div",{staticStyle:{"margin-top":"48px"}},[e("td-doc-history",{attrs:{time:"1687143996471"}})],1),e("td-doc-footer",{attrs:{slot:"doc-footer"},slot:"doc-footer"})],1)},N=[];const k={components:{Usage:r,Demoexamplebase:n,Demoexampletriggerelement:i,Demoexampletrigger:d,Demoexampleplacement:p,Demoexamplestyle:l,Demoexamplevisible:m,Demoexamplecontainer:c,Demoexampledestroy:v,Demoexampledisabled:_},data(){return{DemoexamplebaseCode:g,DemoexampletriggerelementCode:u,DemoexampletriggerCode:h,DemoexampleplacementCode:b,DemoexamplestyleCode:y,DemoexamplevisibleCode:f,DemoexamplecontainerCode:C,DemoexampledestroyCode:x,DemoexampledisabledCode:D}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(t){this.$route.query.tab!==t&&this.$router.push({query:{tab:t}})}}},mounted(){const{tdDocContent:t,tdDocHeader:o,tdDocTabs:e}=this.$refs;o&&(o.docInfo={title:"Popup",desc:"The pop-up layer component is the basis for the implementation of other pop-up window components such as the bubble confirmation box. When the capabilities provided by these components cannot meet the customization requirements, they can be encapsulated on the basis of the pop-up layer component."}),document.title="Popup | TDesign Custom",e&&(e.tabs=[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],e.onchange=({detail:s})=>this.tab=s),w.highlightAll(),this.$emit("loaded",()=>{t.pageStatus="show"})}},a={};var P=T(k,S,N,!1,E,null,null,null);function E(t){for(let o in a)this[o]=a[o]}const M=function(){return P.exports}();export{M as default};