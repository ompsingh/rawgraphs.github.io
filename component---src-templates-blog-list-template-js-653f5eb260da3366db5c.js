(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/9aa":function(e,t,a){var n=a("NykK"),r=a("ExA7");e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==n(e)}},"3yTN":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return q}));var n=a("q1tI"),r=a.n(n),l=a("WjpJ"),o=a.n(l),c=a("wx14"),s=a("zLVn"),m=a("17x9"),i=a.n(m),u=a("TSYQ"),d=a.n(u),f=a("33Jr"),b={children:i.a.node,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,size:i.a.string,tag:f.m,listTag:f.m,"aria-label":i.a.string},p=function(e){var t,a=e.className,n=e.listClassName,l=e.cssModule,o=e.size,m=e.tag,i=e.listTag,u=e["aria-label"],b=Object(s.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),p=Object(f.i)(d()(a),l),v=Object(f.i)(d()(n,"pagination",((t={})["pagination-"+o]=!!o,t)),l);return r.a.createElement(m,{className:p,"aria-label":u},r.a.createElement(i,Object(c.a)({},b,{className:v})))};p.propTypes=b,p.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"};var v=p,g={active:i.a.bool,children:i.a.node,className:i.a.string,cssModule:i.a.object,disabled:i.a.bool,tag:f.m},N=function(e){var t=e.active,a=e.className,n=e.cssModule,l=e.disabled,o=e.tag,m=Object(s.a)(e,["active","className","cssModule","disabled","tag"]),i=Object(f.i)(d()(a,"page-item",{active:t,disabled:l}),n);return r.a.createElement(o,Object(c.a)({},m,{className:i}))};N.propTypes=g,N.defaultProps={tag:"li"};var E=N,h=(a("LK8F"),{"aria-label":i.a.string,children:i.a.node,className:i.a.string,cssModule:i.a.object,next:i.a.bool,previous:i.a.bool,first:i.a.bool,last:i.a.bool,tag:f.m}),y=function(e){var t,a=e.className,n=e.cssModule,l=e.next,o=e.previous,m=e.first,i=e.last,u=e.tag,b=Object(s.a)(e,["className","cssModule","next","previous","first","last","tag"]),p=Object(f.i)(d()(a,"page-link"),n);o?t="Previous":l?t="Next":m?t="First":i&&(t="Last");var v,g=e["aria-label"]||t;o?v="‹":l?v="›":m?v="«":i&&(v="»");var N=e.children;return N&&Array.isArray(N)&&0===N.length&&(N=null),b.href||"a"!==u||(u="button"),(o||l||m||i)&&(N=[r.a.createElement("span",{"aria-hidden":"true",key:"caret"},N||v),r.a.createElement("span",{className:"sr-only",key:"sr"},g)]),r.a.createElement(u,Object(c.a)({},b,{className:p,"aria-label":g}),N)};y.propTypes=h,y.defaultProps={tag:"a"};var x=y,j=a("Bl7J"),k=a("vrFN"),L=a("Wbzz"),M=a("MZLc"),w=a.n(M),O=function(e){var t=e.node,a=t.excerpt,n=t.frontmatter.image;return r.a.createElement("div",{className:"col-md-12 mb-4"},r.a.createElement("div",{className:w.a.blogPost},r.a.createElement("div",{className:"row"},n&&r.a.createElement("div",{className:"d-none d-sm-block col-md-8 col-sm-12"},r.a.createElement("div",{className:w.a.thumbnail,style:{backgroundImage:"url("+n.publicURL+")"}})),r.a.createElement("div",{className:"col-md-4 col-sm-12 "+w.a.content},r.a.createElement("div",{className:w.a.inner},r.a.createElement("p",{className:"text-uppercase green-text"},t.frontmatter.categories[0]),r.a.createElement(L.Link,{to:t.frontmatter.path},r.a.createElement("h1",null,t.frontmatter.title)),r.a.createElement("div",{className:"d-none d-md-block",dangerouslySetInnerHTML:{__html:a}})),r.a.createElement("div",{className:"mt-auto"},n&&r.a.createElement("div",{className:w.a.thumbnailNormal+" d-block d-md-none",style:{backgroundImage:"url("+n.publicURL+")"}}),r.a.createElement("hr",null),r.a.createElement("p",{className:"small mb-0"},t.frontmatter.date,", by ",t.frontmatter.author))))))},T=function(e){var t=e.node,a=t.excerpt,n=t.frontmatter.image;return r.a.createElement("div",{className:"col-md-8 mb-4"},r.a.createElement("div",{className:w.a.blogPost},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-sm-12 "+w.a.content},r.a.createElement("div",{className:w.a.inner},r.a.createElement("p",{className:"text-uppercase green-text"},t.frontmatter.categories[0]),r.a.createElement(L.Link,{to:t.frontmatter.path},r.a.createElement("h2",null,t.frontmatter.title)),r.a.createElement("div",{className:"d-none d-md-block",dangerouslySetInnerHTML:{__html:a}})),r.a.createElement("div",{className:"mt-auto"},n&&r.a.createElement("div",{className:w.a.thumbnailNormal+" d-block d-md-none",style:{backgroundImage:"url("+n.publicURL+")"}}),r.a.createElement("hr",null),r.a.createElement("p",{className:"small mb-0"},t.frontmatter.date,", by ",t.frontmatter.author))),n&&r.a.createElement("div",{className:"d-none d-md-block col-md-6"},r.a.createElement("div",{className:w.a.thumbnail,style:{backgroundImage:"url("+n.publicURL+")"}})))))},P=function(e){var t=e.node,a=t.frontmatter.image;return r.a.createElement("div",{className:"col-sm-6 col-md-4 mb-4"},r.a.createElement("div",{className:w.a.blogPost},r.a.createElement("div",{className:"row h-100"},r.a.createElement("div",{className:"col-12 "+w.a.content},r.a.createElement("div",{className:w.a.inner},r.a.createElement("p",{className:"text-uppercase green-text"},t.frontmatter.categories[0]),r.a.createElement(L.Link,{to:t.frontmatter.path},r.a.createElement("h2",null,t.frontmatter.title))),r.a.createElement("div",{className:"mt-auto"},a&&r.a.createElement("div",{className:w.a.thumbnailNormal,style:{backgroundImage:"url("+a.publicURL+")"}}),r.a.createElement("hr",null),r.a.createElement("p",{className:"small mb-0"},t.frontmatter.date,", by ",t.frontmatter.author))))))},A=function(e){var t=e.node,a=e.size;return"big"===a?r.a.createElement(O,{node:t}):"medium"===a?r.a.createElement(T,{node:t}):r.a.createElement(P,{node:t})};A.defaultProps={size:"normal"};var I=A,z=a("ELAM"),q=(t.default=function(e){var t=e.data,a=e.pageContext,n=a.numPages,l=a.currentPage;return r.a.createElement(j.a,null,r.a.createElement(k.a,{title:"Blog"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row main-header"},r.a.createElement("div",{className:"col-12 col-sm-8"},r.a.createElement("div",null,r.a.createElement("h1",{className:"big"},"Blog"),r.a.createElement("h2",{className:"light"},r.a.createElement("p",null,"A place to share news and updates about the RAW Graphs project.")))))),r.a.createElement("div",{className:"container-fluid grey-bg"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},t.allMarkdownRemark.edges.map((function(e,t){return r.a.createElement(I,{node:e.node,key:e.node.frontmatter.path,size:1===l?0===t?"big":1===t?"medium":"normal":"normal"})})))),n>1&&r.a.createElement("div",{className:"d-flex flex-row justify-content-center mt-5"},r.a.createElement(v,{"aria-label":"Page navigation example"},o()(n).map((function(e){return r.a.createElement(E,{key:e,active:l===e+1},r.a.createElement(x,{href:"/blog/"+(0===e?"":e+1)},e+1))}))))),r.a.createElement(z.a,{question:"Do you want to contribute to the project? Any general question or feedback?",button:"contact us",link:"mailto:hello@rawgraphs.io"}))},"75262317")},AP2z:function(e,t,a){a("a1Th"),a("h7Nl"),a("Btvt");var n=a("nmnc"),r=Object.prototype,l=r.hasOwnProperty,o=r.toString,c=n?n.toStringTag:void 0;e.exports=function(e){var t=l.call(e,c),a=e[c];try{e[c]=void 0;var n=!0}catch(s){}var r=o.call(e);return n&&(t?e[c]=a:delete e[c]),r}},ELAM:function(e,t,a){"use strict";a("tUrg");var n=a("q1tI"),r=a.n(n),l=a("q6Nr"),o=a.n(l);t.a=function(e){var t=e.question,a=e.button,n=e.link,l=e.bgLight,c=e.btGreen;return r.a.createElement("div",{className:"container-fluid text-center text-md-left py-3 py-md-0 "+o.a.askInfo+" "+(l?"bg-light":"")},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("h3",{className:"my-3 my-md-0"},t)),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{className:"btn btn-default btn-larger "+(c?"btn-green":"")},a))))))}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},GoyQ:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},HLqC:function(e,t,a){var n=a("R5Y4"),r=a("mv/X"),l=a("ZCgT");e.exports=function(e){return function(t,a,o){return o&&"number"!=typeof o&&r(t,a,o)&&(a=o=void 0),t=l(t),void 0===a?(a=t,t=0):a=l(a),o=void 0===o?t<a?1:-1:l(o),n(t,a,o,e)}}},KfNM:function(e,t,a){a("a1Th"),a("h7Nl"),a("Btvt");var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},Kz5y:function(e,t,a){var n=a("WFqU"),r="object"==typeof self&&self&&self.Object===Object&&self,l=n||r||Function("return this")();e.exports=l},MMmD:function(e,t,a){var n=a("lSCD"),r=a("shjB");e.exports=function(e){return null!=e&&r(e.length)&&!n(e)}},MZLc:function(e,t,a){e.exports={blogPost:"blog-block-module--blog-post--3tl6_",thumbnail:"blog-block-module--thumbnail--ysd_l",thumbnailNormal:"blog-block-module--thumbnailNormal--2LVPu",content:"blog-block-module--content--3AYbX"}},NykK:function(e,t,a){var n=a("nmnc"),r=a("AP2z"),l=a("KfNM"),o=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?r(e):l(e)}},R5Y4:function(e,t){var a=Math.ceil,n=Math.max;e.exports=function(e,t,r,l){for(var o=-1,c=n(a((t-e)/(r||1)),0),s=Array(c);c--;)s[l?c:++o]=e,e+=r;return s}},WFqU:function(e,t,a){(function(t){var a="object"==typeof t&&t&&t.Object===Object&&t;e.exports=a}).call(this,a("yLpj"))},WjpJ:function(e,t,a){var n=a("HLqC")();e.exports=n},ZCgT:function(e,t,a){var n=a("tLB3");e.exports=function(e){return e?(e=n(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},lSCD:function(e,t,a){var n=a("NykK"),r=a("GoyQ");e.exports=function(e){if(!r(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},ljhN:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},"mv/X":function(e,t,a){var n=a("ljhN"),r=a("MMmD"),l=a("wJg7"),o=a("GoyQ");e.exports=function(e,t,a){if(!o(a))return!1;var c=typeof t;return!!("number"==c?r(a)&&l(t,a.length):"string"==c&&t in a)&&n(a[t],e)}},nmnc:function(e,t,a){var n=a("Kz5y").Symbol;e.exports=n},q6Nr:function(e,t,a){e.exports={askInfo:"askInfo-module--ask-info--3UwTp"}},shjB:function(e,t){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},tLB3:function(e,t,a){a("pIFo");var n=a("GoyQ"),r=a("/9aa"),l=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,m=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(r(e))return NaN;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var a=c.test(e);return a||s.test(e)?m(e.slice(2),a?2:8):o.test(e)?NaN:+e}},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},wJg7:function(e,t){var a=/^(?:0|[1-9]\d*)$/;e.exports=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&a.test(e))&&e>-1&&e%1==0&&e<t}}}]);
//# sourceMappingURL=component---src-templates-blog-list-template-js-653f5eb260da3366db5c.js.map