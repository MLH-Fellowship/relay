(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{1142:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,h=b["".concat(i,".").concat(u)]||b[u]||s[u]||o;return n?r.a.createElement(h,c(c({ref:t},p),{},{components:n})):r.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},373:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),o=(n(0),n(1142)),i={id:"api-cheatsheet",title:"API Cheatsheet",original_id:"api-cheatsheet"},c={unversionedId:"api-cheatsheet",id:"version-v1.5.0/api-cheatsheet",isDocsHomePage:!1,title:"API Cheatsheet",description:"A reference for translating between the Relay Classic and Relay Modern APIs.",source:"@site/versioned_docs/version-v1.5.0/Modern-APICheatsheet.md",slug:"/api-cheatsheet",permalink:"/docs/v1.5.0/api-cheatsheet",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v1.5.0/Modern-APICheatsheet.md",version:"v1.5.0",lastUpdatedBy:"Juan Tejada",lastUpdatedAt:1618453513,sidebar:"version-v1.5.0/docs",previous:{title:"Compatibility Cheatsheet",permalink:"/docs/v1.5.0/compatibility-cheatsheet"},next:{title:"Thinking in GraphQL",permalink:"/docs/v1.5.0/thinking-in-graphql"}},l=[{value:"To add a new root for relay components",id:"to-add-a-new-root-for-relay-components",children:[]},{value:"To add a new relay container",id:"to-add-a-new-relay-container",children:[]},{value:"To add a new relay container that has changing data requirements",id:"to-add-a-new-relay-container-that-has-changing-data-requirements",children:[]},{value:"To add a new paginating relay container",id:"to-add-a-new-paginating-relay-container",children:[]},{value:"To update a variable for my component",id:"to-update-a-variable-for-my-component",children:[]},{value:"To paginate through a connection",id:"to-paginate-through-a-connection",children:[]},{value:"To force fetch a component",id:"to-force-fetch-a-component",children:[]},{value:"To commit a mutation",id:"to-commit-a-mutation",children:[]}],p={toc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A reference for translating between the Relay Classic and Relay Modern APIs."),Object(o.b)("h3",{id:"to-add-a-new-root-for-relay-components"},"To add a new root for relay components"),Object(o.b)("p",null,"Classic: ",Object(o.b)("inlineCode",{parentName:"p"},"<RelayRootContainer>")),Object(o.b)("p",null,"Modern: ",Object(o.b)("inlineCode",{parentName:"p"},"<QueryRenderer>")),Object(o.b)("h3",{id:"to-add-a-new-relay-container"},"To add a new relay container"),Object(o.b)("p",null,"Classic: ",Object(o.b)("inlineCode",{parentName:"p"},"Relay.createContainer")),Object(o.b)("p",null,"Modern: ",Object(o.b)("inlineCode",{parentName:"p"},"createFragmentContainer")),Object(o.b)("h3",{id:"to-add-a-new-relay-container-that-has-changing-data-requirements"},"To add a new relay container that has changing data requirements"),Object(o.b)("p",null,"Classic: ",Object(o.b)("inlineCode",{parentName:"p"},"Relay.createContainer")),Object(o.b)("p",null,"Modern ",Object(o.b)("inlineCode",{parentName:"p"},"createRefetchContainer")),Object(o.b)("h3",{id:"to-add-a-new-paginating-relay-container"},"To add a new paginating relay container"),Object(o.b)("p",null,"Classic: ",Object(o.b)("inlineCode",{parentName:"p"},"Relay.createContainer")),Object(o.b)("p",null,"Modern: ",Object(o.b)("inlineCode",{parentName:"p"},"createPaginationContainer")),Object(o.b)("h3",{id:"to-update-a-variable-for-my-component"},"To update a variable for my component"),Object(o.b)("p",null,"Classic: ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.relay.setVariable({foo: bar}...)")),Object(o.b)("p",null,"Modern: ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.relay.refetch({foo: bar}...")," in a Refetch Container"),Object(o.b)("h3",{id:"to-paginate-through-a-connection"},"To paginate through a connection"),Object(o.b)("p",null,"Classic: ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.relay.setVariable({count: prevCount + pageSize}...)")),Object(o.b)("p",null,"Modern ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.relay.loadMore(pageSize...)")," in a Pagination Container"),Object(o.b)("h3",{id:"to-force-fetch-a-component"},"To force fetch a component"),Object(o.b)("p",null,"Classic: ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.relay.forceFetch()")),Object(o.b)("p",null,"Modern: ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.relay.refetchConnection(...)")," in a Pagination Container"),Object(o.b)("p",null,"or: ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.relay.refetch({}, {}, callback, {force: true})")," in a Refetch Container"),Object(o.b)("h3",{id:"to-commit-a-mutation"},"To commit a mutation"),Object(o.b)("p",null,"Classic: ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.relay.commitUpdate(mutation...)")),Object(o.b)("p",null,"Modern: ",Object(o.b)("inlineCode",{parentName:"p"},"commitMutation(this.props.relay.environment, {mutation...})")))}d.isMDXComponent=!0}}]);