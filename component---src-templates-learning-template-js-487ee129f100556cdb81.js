(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{210:function(e,t,A){"use strict";A.r(t);A(15),A(214);var a=A(0),n=A.n(a),r=A(98),l=A(391),g=A.n(l),E=A(213),s=A(469),c=A(470),m=A(471),i=A(472),B=function(e){var t=e.url;return n.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},n.a.createElement("iframe",{title:t,className:"embed-responsive-item",src:t,allowFullScreen:!0}))},o=A(393),C=A(467),I=A(399),Q=A.n(I);var u=function(e){var t,A;function a(){for(var t,A=arguments.length,a=new Array(A),n=0;n<A;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))||this).state={copied:null},t}return A=e,(t=a).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A,a.prototype.render=function(){var e=this,t=this.props,A=t.title,a=t.url,r=this.state.copied,l='"'+A+'", by RAWGraphs Team. Licensed under CC BY-NC-SA 4.0.  Accessed: '+Object(C.a)("%B %d, %Y")(Date.now())+", from "+a;return n.a.createElement("div",null,n.a.createElement("p",{className:""+(r?Q.a.copied:"")},l),n.a.createElement(o.CopyToClipboard,{text:A,onCopy:function(){return e.setState({copied:!0})}},n.a.createElement("p",{className:Q.a.copyPaste},n.a.createElement(E.h,null),n.a.createElement("span",{className:"ml-2"},"Copy to clipboard"))))},a}(n.a.PureComponent),p=A(220),d=A(218),v=A(221),f=A(260),h=A(400),y=A.n(h);function b(e){var t=e.data,A=e.location,a=t.markdownRemark,l=a.frontmatter,o=a.html,C=l.files,I=new g.a,Q=a.headings.filter(function(e){return 3===e.depth}).map(function(e){return{title:e.value,href:"#"+I.slug(e.value)}}),h=[{href:"#article-start",title:"Intro"}].concat(Q).concat([{href:"#how-to-cite-this-guide",title:"How to cite this guide"}]),b=l.categories.map(function(e){return{link:"learning"===e.toLowerCase()?"/learning":"/learning#"+e.toLowerCase(),label:e}}),k=l.widgets?l.widgets:[{title:"RAWgraphs is open",subtitle:"do you want to hack RAWGraphs or install it locally?",link:"https://github.com/densitydesign/raw/"},{title:"About RAWGraphs",subtitle:"Everything you need to know about the project.",link:"/about"}];return n.a.createElement(p.a,null,n.a.createElement(d.a,{title:l.title}),n.a.createElement("div",{className:"container py-5"},n.a.createElement("div",{className:"row"},(h||C)&&n.a.createElement("div",{className:"col-md-3 d-none d-md-block"},n.a.createElement("div",{className:y.a.learningNav},h&&n.a.createElement("div",null,n.a.createElement("h4",{className:"text-uppercase mt-0"},"steps"),h.map(function(e,t){return n.a.createElement("div",{className:y.a.navElement,key:t},n.a.createElement("a",{href:""+e.href},e.title))})),C&&n.a.createElement("div",null,n.a.createElement("h4",{className:"text-uppercase"},"resources"),n.a.createElement("div",null,C.map(function(e,t){return n.a.createElement("div",{className:y.a.navElement,key:t},n.a.createElement("a",{href:""+e.href.publicURL,className:"d-flex align-items-center"},n.a.createElement(E.d,null),n.a.createElement("span",{className:"ml-1"},"Download the resources")))}))),n.a.createElement("div",null,n.a.createElement("h4",{className:"text-uppercase"},"share"),n.a.createElement("div",{className:"d-flex"},n.a.createElement(s.a,{url:A.href,className:"mr-2"},n.a.createElement(c.a,{size:32,round:!1})),n.a.createElement(m.a,{url:A.href,title:l.title,hashtags:["rawgraphs"]},n.a.createElement(i.a,{size:32,round:!1})))))),n.a.createElement("div",{className:"col-md-9"},n.a.createElement("div",{className:y.a.learningHeader},n.a.createElement("h4",{className:"text-uppercase"},b.map(function(e,t){return n.a.createElement(n.a.Fragment,{key:t},n.a.createElement(r.Link,{to:e.link},e.label),b.length-1!==t&&n.a.createElement("span",{className:"mx-1"},">"))})),n.a.createElement("h1",{id:"article-start"},l.title),(l.tags||l.time)&&n.a.createElement("p",{className:"d-flex align-items-center"},n.a.createElement(E.j,null),n.a.createElement("span",{className:"ml-2 mr-3"},l.reading_time," min."),n.a.createElement(E.m,null),l.tags&&l.tags.map(function(e,t){return n.a.createElement("span",{className:"mx-2",key:t},e)})),l.discover_more_description&&n.a.createElement("h2",{className:"light"},l.discover_more_description),l.featured_video&&n.a.createElement("div",{className:y.a.videoThumbnail},n.a.createElement(B,{url:l.featured_video})),!l.featured_video&&l.image&&n.a.createElement("img",{className:"img-fluid img-thumbnail",src:l.image.publicURL,alt:l.title})),n.a.createElement("div",{className:y.a.learningContent},n.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}}),n.a.createElement("h3",{id:"how-to-cite-this-guide"},"How to cite this guide"),n.a.createElement(u,{title:l.title,url:A.href}))))),n.a.createElement(v.a,{question:"Have you bumped into any issue while using the app?",button:"ask on google group",link:"https://groups.google.com/forum/?hl=en#!forum/densitydesign-raw"}),n.a.createElement("div",{className:"container-fluid grey-bg"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},k.map(function(e,t){return n.a.createElement(f.a,Object.assign({key:t},e))})))))}A.d(t,"default",function(){return b}),A.d(t,"pageQuery",function(){return k});var k="1940419285"},215:function(e){e.exports={data:{site:{siteMetadata:{title:"RAWGraphs"}}}}},216:function(e,t,A){e.exports=A.p+"static/logo-calibro-white@2x-629e8d11e2b56074585a5dec3a4fe9c8.png"},217:function(e,t){e.exports="data:image/png;base64,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"},218:function(e,t,A){"use strict";var a=A(219),n=A(0),r=A.n(n),l=A(229),g=A.n(l);function E(e){var t=e.description,A=e.lang,n=e.meta,l=e.title,E=a.data.site,s=t||E.siteMetadata.description;return r.a.createElement(g.a,{htmlAttributes:{lang:A},title:l,titleTemplate:"%s | "+E.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:E.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(n)})}E.defaultProps={lang:"en",meta:[],description:""},t.a=E},219:function(e){e.exports={data:{site:{siteMetadata:{title:"RAWGraphs",description:"The missing link between spreadsheets and data visualization.",author:"@rawgraphs"}}}}},220:function(e,t,A){"use strict";var a=A(215),n=A(0),r=A.n(n),l=A(98),g=A(468),E=A(473),s=A(225),c=A.n(s);var m=function(e){var t,A;function a(){for(var t,A=arguments.length,a=new Array(A),n=0;n<A;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))||this).state={isOpen:!1},t.toggle=function(){t.setState({isOpen:!t.state.isOpen})},t}return A=e,(t=a).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A,a.prototype.render=function(){var e=this.props.useIt,t=this.state.isOpen;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-white sticky-top "+c.a.navbar},r.a.createElement("div",{className:"container"},r.a.createElement(l.Link,{className:"navbar-brand "+c.a.brand,to:"/"},"RAW",r.a.createElement("span",{className:c.a.brandGreen},"Graphs")),r.a.createElement(g.a,{onClick:this.toggle}),r.a.createElement(E.a,{isOpen:t,navbar:!0},r.a.createElement("div",{className:"navbar-nav ml-auto align-items-center"},r.a.createElement(l.Link,{className:"nav-item nav-link "+c.a.item,activeClassName:"active",to:"/about",partiallyActive:!0},"About"),r.a.createElement(l.Link,{className:"nav-item nav-link "+c.a.item,activeClassName:"active",to:"/blog",partiallyActive:!0},"Blog"),r.a.createElement(l.Link,{className:"nav-item nav-link "+c.a.item,activeClassName:"active",to:"/learning",partiallyActive:!0},"Learning"),r.a.createElement(l.Link,{className:"nav-item nav-link "+c.a.item,activeClassName:"active",to:"/gallery",partiallyActive:!0},"Gallery"),r.a.createElement("a",{className:"nav-item nav-link "+c.a.item,href:"https://github.com/densitydesign/raw/wiki/",target:"_blank",rel:"noopener noreferrer"},"Documentation"),r.a.createElement("a",{className:"nav-item nav-link "+c.a.item,href:"https://docs.google.com/forms/d/e/1FAIpQLSdfbS0TsyQEXdNfYp9XkiDx5pzwEYfKCmplDJTz1VPAm1R6VA/viewform",target:"_blank",rel:"noopener noreferrer"},"User survey"),e&&r.a.createElement("a",{id:c.a.use,className:"nav-item nav-link "+c.a.item,href:"https://app.rawgraphs.io/",target:"_blank",rel:"noopener noreferrer"},"Use it now!")))))},a}(r.a.Component);m.defaultProps={siteTitle:"",headerBg:"white",useIt:!0};var i=m,B=A(213),o=A(216),C=A.n(o),I=A(217),Q=A.n(I),u=A(226),p=A.n(u),d=function(){return r.a.createElement("div",{className:"container-fluid "+p.a.siteFooter},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("h4",{className:p.a.rawLogo},"RAW",r.a.createElement("span",{className:p.a.brandGreen},"Graphs")),r.a.createElement("div",{className:"d-md-block d-none"},r.a.createElement("div",{className:"menu-footer-menu-container"},r.a.createElement("ul",{id:"menu-footer-menu",className:"nav navbar-nav navbar-right "+p.a.nav},r.a.createElement("li",{className:"menu-item"},r.a.createElement(l.Link,{to:"/"},"Home")),r.a.createElement("li",{className:"menu-item"},r.a.createElement(l.Link,{to:"/about"},"About")),r.a.createElement("li",{className:"menu-item"},r.a.createElement(l.Link,{to:"/learning"},"Learning")),r.a.createElement("li",{className:"menu-item"},r.a.createElement(l.Link,{to:"/blog"},"Blog")),r.a.createElement("li",{className:"menu-item"},r.a.createElement("a",{target:"_blank",href:"https://github.com/densitydesign/raw/wiki",rel:"noopener noreferrer"},"Documentation")),r.a.createElement("li",{className:"menu-item"},r.a.createElement(l.Link,{to:"/gallery"},"Gallery")),r.a.createElement("li",{className:"menu-item"},r.a.createElement("a",{title:"Enjoy the repo",target:"_blank",href:"https://github.com/densitydesign/raw/",rel:"noopener noreferrer"},"Enjoy the repo")),r.a.createElement("li",{className:"menu-item"},r.a.createElement("a",{title:"User survey",target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLSdfbS0TsyQEXdNfYp9XkiDx5pzwEYfKCmplDJTz1VPAm1R6VA/viewform",rel:"noopener noreferrer"},"User survey")),r.a.createElement("li",{className:"menu-item"},r.a.createElement("a",{title:"Subscribe to our newsletter",href:"http://eepurl.com/c9eFWH"},"Subscribe to our newsletter")))))),r.a.createElement("div",{className:"col-sm-2 offset-sm-0 col-6"},r.a.createElement("h4",null,"A project by"),r.a.createElement("a",{href:"http://densitydesign.org",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:p.a.logo+" img-fluid",alt:"logo densitydesign",src:Q.a})),r.a.createElement("a",{href:"http://calib.ro",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:p.a.logo+" img-fluid",alt:"logo calibro",src:C.a}))),r.a.createElement("div",{className:"col-sm-2 offset-sm-1 col-6"},r.a.createElement("h4",null,"Supported by"),r.a.createElement("p",{className:"small"},r.a.createElement("a",{href:"mailto:hello@rawgraphs.io"},"Contact us if you want to become our new supporter!"))),r.a.createElement("div",{className:p.a.contactUs+" col-sm-3 offset-sm-1 col-12 mt-3 mt-md-0"},r.a.createElement("h4",null,"Contact Us:"),r.a.createElement("p",{className:"small"},"Bumped into issues?"),r.a.createElement("a",{href:"https://groups.google.com/forum/?hl=en#!forum/densitydesign-raw",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{className:"btn btn-default",type:"submit"},"Ask on Google Group")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{className:"small"},"Any feedback or general question?"),r.a.createElement("a",{href:"mailto:hello@rawgraphs.io"},r.a.createElement("button",{className:"btn btn-default",type:"submit"},"Drop us a message")),r.a.createElement("div",{className:p.a.socialIcons},r.a.createElement("a",{target:"_blank",href:"https://github.com/densitydesign/raw",rel:"noopener noreferrer"},r.a.createElement(B.f,{color:"white",size:"2rem"})),r.a.createElement("a",{target:"_blank",href:"https://twitter.com/rawgraphs",rel:"noopener noreferrer",className:"ml-2"},r.a.createElement(B.n,{color:"white",size:"2rem"})))))))};A(227),A(228),t.a=function(e){var t=e.children,A=e.headerBg,n=e.useIt,l=a.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,{headerBg:A,useIt:n}),r.a.createElement("div",null,t),r.a.createElement(d,{siteTitle:l.site.siteMetadata.title}))}},221:function(e,t,A){"use strict";A(214);var a=A(0),n=A.n(a),r=A(235),l=A.n(r);t.a=function(e){var t=e.question,A=e.button,a=e.link,r=e.bgLight;return n.a.createElement("div",{className:"container-fluid text-center text-md-left py-3 py-md-0 "+l.a.askInfo+" "+(r?"bg-light":"")},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-sm-9"},n.a.createElement("h3",{className:"my-3 my-md-0"},t)),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("button",{className:"btn btn-default btn-larger"},A))))))}},260:function(e,t,A){"use strict";A(214);var a=A(0),n=A.n(a),r=A(98),l=A(288),g=A.n(l),E=A(213);t.a=function(e){var t=e.title,A=e.subtitle,a=e.link,l=/^\/(?!\/)/.test(a);return n.a.createElement("div",{className:"col-md-6"},l?n.a.createElement(r.Link,{to:a},n.a.createElement("div",{className:""+g.a.item},n.a.createElement("div",null,n.a.createElement("p",{className:"small text-uppercase"},A),n.a.createElement("h2",null,t)),n.a.createElement("div",{className:"ml-auto d-flex align-items-center"},n.a.createElement(E.a,null)))):n.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("div",{className:""+g.a.item},n.a.createElement("div",null,n.a.createElement("p",{className:"small text-uppercase"},A),n.a.createElement("h2",null,t)),n.a.createElement("div",{className:"ml-auto d-flex align-items-center"},n.a.createElement(E.a,null)))))}}}]);
//# sourceMappingURL=component---src-templates-learning-template-js-487ee129f100556cdb81.js.map