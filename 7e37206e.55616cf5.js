(window.webpackJsonp=window.webpackJsonp||[]).push([[550],{1197:function(e,t,n){"use strict";var a=n(1195),i=n.n(a),r=n(0),l=function(e){var t,n=i()("container",e.className,{darkBackground:"dark"===e.background,highlightBackground:"highlight"===e.background,lightBackground:"light"===e.background,paddingAll:e.padding.indexOf("all")>=0,paddingBottom:e.padding.indexOf("bottom")>=0,paddingLeft:e.padding.indexOf("left")>=0,paddingRight:e.padding.indexOf("right")>=0,paddingTop:e.padding.indexOf("top")>=0});return t=e.wrapper?r.createElement("div",{className:"wrapper"},e.children):e.children,r.createElement("div",{className:n,id:e.id},t)};l.defaultProps={background:null,padding:[],wrapper:!0},t.a=l},1212:function(e,t,n){"use strict";var a=n(4),i=n(1195),r=n.n(i),l=n(0),o=function(e){function t(){return e.apply(this,arguments)||this}Object(a.a)(t,e);var n=t.prototype;return n.renderBlock=function(e){var t=Object.assign({},{imageAlign:"left"},e),n=r()("blockElement",this.props.className,{alignCenter:"center"===this.props.align,alignRight:"right"===this.props.align,fourByGridBlock:"fourColumn"===this.props.layout,imageAlignSide:t.image&&("left"===t.imageAlign||"right"===t.imageAlign),imageAlignTop:t.image&&"top"===t.imageAlign,imageAlignRight:t.image&&"right"===t.imageAlign,imageAlignBottom:t.image&&"bottom"===t.imageAlign,imageAlignLeft:t.image&&"left"===t.imageAlign,threeByGridBlock:"threeColumn"===this.props.layout,twoByGridBlock:"twoColumn"===this.props.layout}),a=("top"===t.imageAlign||"left"===t.imageAlign)&&this.renderBlockImage(t.image,t.imageLink,t.imageAlt),i=("bottom"===t.imageAlign||"right"===t.imageAlign)&&this.renderBlockImage(t.image,t.imageLink,t.imageAlt);return l.createElement("div",{className:n,key:t.title},a,l.createElement("div",{className:"blockContent"},this.renderBlockTitle(t.title),t.content),i)},n.renderBlockImage=function(e,t,n){return e?l.createElement("div",{className:"blockImage"},t?l.createElement("a",{href:t},l.createElement("img",{src:e,alt:n})):l.createElement("img",{src:e,alt:n})):null},n.renderBlockTitle=function(e){return e?l.createElement("h2",null,e):null},n.render=function(){return l.createElement("div",{className:"gridBlock"},this.props.contents.map(this.renderBlock,this))},t}(l.Component);o.defaultProps={align:"left",contents:[],layout:"twoColumn"},t.a=o},634:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n(1197),r=n(1212),l=n(1189),o=n(0),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=[{content:o.createElement("span",null,"Relay is worked on full-time by Facebook's product infrastructure engineering teams. They're often around and available for questions."),title:"Need help?"},{content:o.createElement("span",null,"Many members of the community use Stack Overflow to ask questions. Read through the"," ",o.createElement("a",{href:"https://stackoverflow.com/questions/tagged/relayjs?sort=active"},"existing questions")," ","tagged with ",o.createElement("b",null,"#relayjs")," or"," ",o.createElement("a",{href:"https://stackoverflow.com/questions/ask?tags=relayjs"},"ask your own"),"!"),title:"Stack Overflow"},{content:o.createElement("span",null,"Many developers and users idle on Slack in the"," ",o.createElement("a",{href:"https://graphql.slack.com/messages/relay"},"#relay")," ","channel of"," ",o.createElement("a",{href:"https://graphql-slack.herokuapp.com/"},"the GraphQL Slack community"),"."),title:"Slack"},{content:o.createElement("span",null,"Hashtag"," ",o.createElement("a",{href:"https://twitter.com/search?q=%23relayjs"},"#relayjs")," is used on Twitter to keep up with the latest Relay news."),title:"Twitter"}];return o.createElement("div",{className:"docMainWrapper wrapper"},o.createElement(i.a,{className:"mainContainer documentContainer postContainer"},o.createElement("div",{className:"post"},o.createElement(r.a,{contents:e}))))},t}(o.Component);t.default=function(e){return o.createElement(l.a,null,o.createElement(c,e))}}}]);