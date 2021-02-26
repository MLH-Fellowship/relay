(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1069:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=l(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},y={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=n,b=u["".concat(i,".").concat(d)]||u[d]||y[d]||o;return t?a.a.createElement(b,p(p({ref:r},s),{},{components:t})):a.a.createElement(b,p({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},118:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return p})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),o=(t(0),t(1069)),i={id:"classic-api-reference-relay-proptypes",title:"Relay.PropTypes",original_id:"classic-api-reference-relay-proptypes"},p={unversionedId:"classic-api-reference-relay-proptypes",id:"version-classic/classic-api-reference-relay-proptypes",isDocsHomePage:!1,title:"Relay.PropTypes",description:"Relay introduces two new classes of objects: RelayContainer and Relay.Route. Relay.PropTypes provides prop validators used to assert that props are of these types.",source:"@site/versioned_docs/version-classic/Classic-APIReference-PropTypes.md",slug:"/classic-api-reference-relay-proptypes",permalink:"/docs/classic/classic-api-reference-relay-proptypes",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-classic/Classic-APIReference-PropTypes.md",version:"classic",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1614303211,sidebar:"version-classic/docs",previous:{title:"Relay.GraphQLMutation",permalink:"/docs/classic/classic-api-reference-relay-graphql-mutation"},next:{title:"Relay.Store",permalink:"/docs/classic/classic-api-reference-relay-store"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Example",id:"example",children:[]}],s={toc:c};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Relay introduces two new classes of objects: ",Object(o.b)("inlineCode",{parentName:"p"},"RelayContainer")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Relay.Route"),". ",Object(o.b)("inlineCode",{parentName:"p"},"Relay.PropTypes")," provides prop validators used to assert that props are of these types."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Properties")),Object(o.b)("ul",{className:"apiIndex"},Object(o.b)("li",null,Object(o.b)("a",{href:"#example"},Object(o.b)("pre",null,"static Container: ReactPropTypeValidator"),"A prop type validator asserting that a prop is a valid Relay container.")),Object(o.b)("li",null,Object(o.b)("a",{href:"#example"},Object(o.b)("pre",null,"static QueryConfig: ReactPropTypeValidator"),"A prop type validator asserting that a prop is a valid route."))),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"\nclass MyApplication extends React.Component {\n  static propTypes = {\n    // Warns if `Component` is not a valid RelayContainer.\n    Component: Relay.PropTypes.Container.isRequired,\n    // Warns if `route` is not a valid route.\n    route: Relay.PropTypes.QueryConfig.isRequired,\n  };\n  render() {\n    return (\n      <Relay.RootContainer\n        Component={this.props.Component}\n        route={this.props.route}\n      />\n    );\n  }\n}\n\n")))}l.isMDXComponent=!0}}]);