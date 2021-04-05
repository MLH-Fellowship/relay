(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{197:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),o=(n(0),n(323)),i=n(329),c={id:"thinking-in-relay",title:"Thinking in Relay",slug:"/principles-and-architecture/thinking-in-relay/"},s={unversionedId:"principles-and-architecture/thinking-in-relay",id:"version-v11.0.0/principles-and-architecture/thinking-in-relay",isDocsHomePage:!1,title:"Thinking in Relay",description:"Relay's approach to data-fetching is heavily inspired by our experience with React. In particular, React breaks complex interfaces into reusable components, allowing developers to reason about discrete units of an application in isolation, and reducing the coupling between disparate parts of an application. Even more important is that these components are declarative: they allow developers to specify what the UI should look like for a given state, and not have to worry about how to show that UI. Unlike previous approaches that used imperative commands to manipulate native views (e.g. the DOM), React uses a UI description to automatically determine the necessary commands.",source:"@site/versioned_docs/version-v11.0.0/principles-and-architecture/thinking-in-relay.md",slug:"/principles-and-architecture/thinking-in-relay/",permalink:"/docs/principles-and-architecture/thinking-in-relay/",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v11.0.0/principles-and-architecture/thinking-in-relay.md",version:"v11.0.0",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1617644111,sidebar:"version-v11.0.0/docs",previous:{title:"Thinking in GraphQL",permalink:"/docs/principles-and-architecture/thinking-in-graphql/"},next:{title:"Architecture Overview",permalink:"/docs/principles-and-architecture/architecture-overview/"}},l=[{value:"Fetching Data For a View",id:"fetching-data-for-a-view",children:[]},{value:"Specifying the data requirements of a component",id:"specifying-the-data-requirements-of-a-component",children:[]},{value:"Queries",id:"queries",children:[]},{value:"Data Masking",id:"data-masking",children:[]}],u={toc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Relay's approach to data-fetching is heavily inspired by our experience with React. In particular, React breaks complex interfaces into reusable ",Object(o.b)("strong",{parentName:"p"},"components"),", allowing developers to reason about discrete units of an application in isolation, and reducing the coupling between disparate parts of an application. Even more important is that these components are ",Object(o.b)("strong",{parentName:"p"},"declarative"),": they allow developers to specify ",Object(o.b)("em",{parentName:"p"},"what")," the UI should look like for a given state, and not have to worry about ",Object(o.b)("em",{parentName:"p"},"how")," to show that UI. Unlike previous approaches that used imperative commands to manipulate native views (e.g. the DOM), React uses a UI description to automatically determine the necessary commands."),Object(o.b)("p",null,"Let's look at some product use-cases to understand how we incorporated these ideas into Relay. We'll assume a basic familiarity with React."),Object(o.b)("h2",{id:"fetching-data-for-a-view"},"Fetching Data For a View"),Object(o.b)("p",null,"In our experience, the overwhelming majority of products want one specific behavior: fetch all the data for a view hierarchy while displaying a loading indicator, and then render the entire view once the data is available."),Object(o.b)("p",null,"One solution is to have a root component declare and fetch the data required by it and all of its children. However, this would introduce coupling: any change to a child component would require changing any root component that might render it! This coupling could mean a greater chance for bugs and slow the pace of development."),Object(o.b)("p",null,"Another logical approach is to have each component declare and fetch the data it requires. This sounds great. However, the problem is that a component may render different children based on the data it received. So, nested components will be unable to render and begin fetching their data until parent components' queries have completed. In other words, ",Object(o.b)("em",{parentName:"p"},"this forces data fetching to proceed in stages:")," first render the root and fetch the data it needs, then render its children and fetch their data, and so on until you reach leaf components. Rendering would require multiple slow, serial roundtrips."),Object(o.b)("p",null,"Relay combines the advantages of both of these approaches by allowing components to specify what data they require, but to coalesce those requirements into a single query that fetches the data for an entire subtree of components. In other words, it determines ",Object(o.b)("em",{parentName:"p"},"statically")," (i.e. before your application runs; at the time you write your code) the requirements for an entire view!"),Object(o.b)("p",null,"This is achieved with the help of GraphQL. Functional components use one or more GraphQL ",Object(o.b)("a",{href:"../../guided-tour/rendering/fragments/"},"fragments")," to describe their data requirements. These fragments are then nested within other fragments, and ultimately within queries. And when such a query is fetched, Relay will make a single network request for it and all of its nested fragments. In other words, the Relay runtime is then able to make a ",Object(o.b)("em",{parentName:"p"},"single network request")," for all of the data required by a view!"),Object(o.b)("p",null,"Let's dive deeper to understand how Relay achieves this feat."),Object(o.b)("h2",{id:"specifying-the-data-requirements-of-a-component"},"Specifying the data requirements of a component"),Object(o.b)("p",null,"With Relay, the data requirements for a component are specified with ",Object(o.b)("a",{href:"../../guided-tour/rendering/fragments/"},"fragments"),". Fragments are named snippets of GraphQL that specify which fields to select from an object of a particular type. Fragments are written within GraphQL literals. For example, the following declares a GraphQL literal containing a fragment which selects an author's name and photo url:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"\n// AuthorDetails.react.js\nconst authorDetailsFragment = graphql`\n  fragment AuthorDetails_author on Author {\n    name\n    photo {\n      url\n    }\n  }\n`;\n\n")),Object(o.b)("p",null,"This data is then read out from the store by calling the ",Object(o.b)("inlineCode",{parentName:"p"},"useFragment(...)")," hook in a functional React component. The actual author from which to read this data is determined by the second parameter passed to ",Object(o.b)("inlineCode",{parentName:"p"},"useFragment"),". For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"\n// AuthorDetails.react.js\nexport default function AuthorDetails(props) {\n  const data = useFragment(authorDetailsFragment, props.author);\n  // ...\n}\n\n")),Object(o.b)("p",null,"This second parameter (",Object(o.b)("inlineCode",{parentName:"p"},"props.author"),") is a fragment reference. Fragment references are obtained by ",Object(o.b)("strong",{parentName:"p"},"spreading")," a fragment into another fragment or query. Fragments cannot be fetched directly. Instead, all fragments must ultimately be spread (either directly or transitively) into a query for the data to be fetched."),Object(o.b)("p",null,"Let's take a look at one such query."),Object(o.b)("h2",{id:"queries"},"Queries"),Object(o.b)("p",null,"In order to fetch that data, we might declare a query which spreads ",Object(o.b)("inlineCode",{parentName:"p"},"AuthorDetails_author")," as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"\n// Story.react.js\nconst storyQuery = graphql`\n  query StoryQuery($storyID: ID!) {\n    story(id: $storyID) {\n      title\n      author {\n        ...AuthorDetails_author\n      }\n    }\n  }\n`;\n\n")),Object(o.b)("p",null,"Now, we can fetch the query by calling ",Object(o.b)("inlineCode",{parentName:"p"},"const data = useLazyLoadQuery(storyQuery, {storyID})"),". At this point, ",Object(o.b)("inlineCode",{parentName:"p"},"data.author")," (if it is present; all fields are nullable by default) will be a fragment reference that we can pass to ",Object(o.b)("inlineCode",{parentName:"p"},"AuthorDetails"),". For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"\n// Story.react.js\nfunction Story(props) {\n  const data = useLazyLoadQuery(storyQuery, props.storyId);\n\n  return (<>\n    <Heading>{data?.story.title}</Heading>\n    {data?.story?.author && <AuthorDetails author={data.story.author} />}\n  </>);\n}\n\n")),Object(o.b)("p",null,"Note what has happened here. We made a single network request which contained the data required by ",Object(o.b)("em",{parentName:"p"},"both")," the ",Object(o.b)("inlineCode",{parentName:"p"},"Story")," component ",Object(o.b)("em",{parentName:"p"},"and")," the ",Object(o.b)("inlineCode",{parentName:"p"},"AuthorDetails")," component! When that data was available, the entire view could render in a single pass."),Object(o.b)("h2",{id:"data-masking"},"Data Masking"),Object(o.b)("p",null,"With typical approaches to data-fetching we found that it was common for two components to have ",Object(o.b)("em",{parentName:"p"},"implicit dependencies"),". For example ",Object(o.b)("inlineCode",{parentName:"p"},"<Story />")," might use some data without directly ensuring that the data was fetched. This data would often be fetched by some other part of the system, such as ",Object(o.b)("inlineCode",{parentName:"p"},"<AuthorDetails />"),". Then when we changed ",Object(o.b)("inlineCode",{parentName:"p"},"<AuthorDetails />")," and removed that data-fetching logic, ",Object(o.b)("inlineCode",{parentName:"p"},"<Story />")," would suddenly and inexplicably break. These types of bugs are not always immediately apparent, especially in larger applications developed by larger teams. Manual and automated testing can only help so much: this is exactly the type of systematic problem that is better solved by a framework."),Object(o.b)("p",null,"We've seen that Relay ensures that the data for a view is fetched all at once. But Relay also provide another benefit that isn't immediately obvious: ",Object(o.b)("strong",{parentName:"p"},"data masking"),". Relay only allows components to access data they specifically ask for in GraphQL fragments, and nothing more. So if one component queries for a Story's ",Object(o.b)("inlineCode",{parentName:"p"},"title"),", and another for its ",Object(o.b)("inlineCode",{parentName:"p"},"text"),", each can see ",Object(o.b)("em",{parentName:"p"},"only")," the field that they asked for. In fact, components can't even see the data requested by their ",Object(o.b)("em",{parentName:"p"},"children"),": that would also break encapsulation."),Object(o.b)("p",null,"Relay also goes further: it uses opaque identifiers on ",Object(o.b)("inlineCode",{parentName:"p"},"props")," to validate that we've explicitly fetched the data for a component before rendering it. If ",Object(o.b)("inlineCode",{parentName:"p"},"<Story />")," renders ",Object(o.b)("inlineCode",{parentName:"p"},"<AuthorDetails />")," but forgets to spread its fragment, Relay will warn that the data for ",Object(o.b)("inlineCode",{parentName:"p"},"<AuthorDetails />")," is missing. In fact, Relay will warn ",Object(o.b)("em",{parentName:"p"},"even if")," some other component happened to fetch the same data required by ",Object(o.b)("inlineCode",{parentName:"p"},"<AuthorDetails />"),". This warning tells us that although things ",Object(o.b)("em",{parentName:"p"},"might")," work now, they're highly likely to break later."),Object(o.b)("h1",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"GraphQL provides a powerful tool for building efficient, decoupled client applications. Relay builds on this functionality to provide a framework for ",Object(o.b)("strong",{parentName:"p"},"declarative data-fetching"),". By separating ",Object(o.b)("em",{parentName:"p"},"what")," data to fetch from ",Object(o.b)("em",{parentName:"p"},"how")," it is fetched, Relay helps developers build applications that are robust, transparent, and performant by default. It's a great complement to the component-centric way of thinking championed by React. While each of these technologies \u2014 React, Relay, and GraphQL \u2014 are powerful on their own, the combination is a ",Object(o.b)("strong",{parentName:"p"},"UI platform")," that allows us to ",Object(o.b)("em",{parentName:"p"},"move fast")," and ",Object(o.b)("em",{parentName:"p"},"ship high-quality apps at scale"),"."),Object(o.b)(i.a,{mdxType:"DocsRating"}))}d.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,f=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return n?r.a.createElement(f,c(c({ref:t},l),{},{components:n})):r.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},324:function(e,t,n){"use strict";(function(e){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.bloks=void 0,t.bloks=o(n(327));const i=["internal","external"];let c;try{c=n(325).usePluginData}catch(p){c=null}function s(e){return u(e),d()?"internal"in e?l(e.internal):[]:"external"in e?l(e.external):[]}function l(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${i}. Instead got ${e}`);if(!Object.keys(e).find((e=>i.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${i}`);const t=Object.keys(e).filter((e=>!i.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${i}`)}function d(){return e.env.FB_INTERNAL||c&&c("internaldocs-fb").FB_INTERNAL}t.fbContent=s,t.fbInternalOnly=function(e){return s({internal:e})},t.validateFbContentArgs=u,t.isInternal=d,t.FbInternalOnly=function(e){return d()?e.children:null},t.OssOnly=function(e){return d()?null:e.children}}).call(this,n(326))},325:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r})),n.d(t,"useAllPluginInstancesData",(function(){return o})),n.d(t,"usePluginData",(function(){return i}));var a=n(22);function r(){var e=Object(a.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function o(e){var t=r()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function i(e,t){void 0===t&&(t="default");var n=o(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},326:function(e,t){var n,a,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{a="function"==typeof clearTimeout?clearTimeout:i}catch(e){a=i}}();var s,l=[],u=!1,d=-1;function p(){u&&s&&(u=!1,s.length?l=s.concat(l):d=-1,l.length&&h())}function h(){if(!u){var e=c(p);u=!0;for(var t=l.length;t;){for(s=l,l=[];++d<t;)s&&s[d].run();d=-1,t=l.length}s=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===i||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||c(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},327:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{s(a.next(e))}catch(t){o(t)}}function c(e){try{s(a.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const r=n(328);t.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield r.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},328:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{s(a.next(e))}catch(t){o(t)}}function c(e){try{s(a.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let r=!1,o=0;const i={};t.call=function(e){return a(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in i||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?i[t].resolve(e.data.response):i[t].reject(new Error(e.data.error)),delete i[t]})));const t=o++,n=new Promise(((e,n)=>{i[t]={resolve:e,reject:n}})),a={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,c),n}))}},329:function(e,t,n){"use strict";n(61);var a=n(324),r=n(0);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function i(e){var t=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),t)}var c=function(){var e=r.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},l=function(){return r.createElement(i,null,r.createElement(s,null),r.createElement(c,null))},u=function(){return r.createElement(i,null,r.createElement(c,null))};t.a=function(){return Object(a.fbContent)({internal:r.createElement(l,null),external:r.createElement(u,null)})}}}]);