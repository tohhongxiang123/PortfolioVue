(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/Portfolio/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"06dd":function(t,e,n){t.exports=n.p+"img/sorting.c907d8b4.jpg"},"0e57":function(t,e,n){t.exports=n.p+"img/cookhouse.4ec0c2f2.jpg"},1555:function(t,e,n){var a={"./blog.jpg":"f6f1","./cookhouse.jpg":"0e57","./gallereddit.jpg":"edef","./haze.jpg":"c6d3","./sorting.jpg":"06dd","./stumblr.jpg":"8dc8"};function i(t){var e=s(t);return n(e)}function s(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=s,t.exports=i,i.id="1555"},"1ad4":function(t,e,n){t.exports=n.p+"img/back-end.7dda484a.svg"},"339e":function(t,e,n){},"3e3a":function(t,e,n){t.exports=n.p+"img/headerImage.61a4c685.svg"},"4b50":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX/TQBcNTh/AAAAAXRSTlMAQObYZgAAAApJREFUeJxjYgAAAAYAAzY3fKgAAAAASUVORK5CYII="},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NavigationBar"),n("FadeTranslateTransition",{attrs:{mode:"out-in",duration:"0.4s"}},[n("router-view")],1)],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{staticClass:"logo"},[n("h3",{on:{click:t.hideDisplay}},[n("router-link",{attrs:{to:"/",exact:""}},[t._v("Toh Hong Xiang")])],1)]),n("div",{staticClass:"burger",class:{onScreen:t.onScreen},on:{click:t.toggleDisplay}},[n("div",{staticClass:"line1"}),n("div",{staticClass:"line2"}),n("div",{staticClass:"line3"})]),n("ul",{staticClass:"nav-links",class:{onScreen:t.onScreen}},[n("li",{on:{click:t.hideDisplay}},[n("router-link",{staticClass:"nav-item",attrs:{to:"/about"}},[t._v("About Me")])],1),n("li",{on:{click:t.hideDisplay}},[n("router-link",{staticClass:"nav-item",attrs:{to:"/projects"}},[t._v("Projects")])],1),n("li",{on:{click:t.hideDisplay}},[n("router-link",{staticClass:"nav-item",attrs:{to:"/contact"}},[t._v("Contact Me")])],1)])])},o=[],c={data:function(){return{onScreen:!1}},methods:{toggleDisplay:function(){this.onScreen=!this.onScreen},hideDisplay:function(){this.onScreen=!1}}},l=c,u=(n("87d9"),n("2877")),p=Object(u["a"])(l,r,o,!1,null,"664fdc8c",null),d=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",t._g(t._b({attrs:{name:"fadeTranslate","enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},"transition",t.$attrs,!1),t.hooks),[t._t("default")],2)},g=[],f={props:{duration:{type:String,default:"0.3s"}},computed:{hooks:function(){return{beforeEnter:this.setDuration,afterEnter:this.cleanUpDuration,beforeLeave:this.setDuration,afterLeave:this.cleanUpDuration}}},methods:{setDuration:function(t){t.style.animationDuration="".concat(this.duration)},cleanUpDuration:function(t){t.style.animationDuration=""}}},m=f,v=(n("a9da"),Object(u["a"])(m,h,g,!1,null,"09edad49",null)),b=v.exports,_={components:{NavigationBar:d,FadeTranslateTransition:b}},k=_,x=(n("5c0b"),Object(u["a"])(k,i,s,!1,null,null,null)),C=x.exports,j=n("8c4f"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home page"},[a("div",{staticClass:"content"},[a("transition",{attrs:{name:"fadeIn",appear:""}},[a("img",{attrs:{src:n("3e3a"),width:"300px"}})]),t._m(0),t._m(1),t._m(2),a("hr"),a("ul",{staticClass:"link-list"},[a("li",[a("router-link",{staticClass:"btn btn-primary",attrs:{to:"/about"}},[t._v("About Me")])],1),a("li",[a("router-link",{staticClass:"btn",attrs:{to:"/projects"}},[t._v("Projects")])],1),a("li",[a("router-link",{staticClass:"btn",attrs:{to:"/contact"}},[t._v("Contact Me")])],1)])],1)])},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"title"},[n("strong",[t._v("Toh Hong Xiang")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-muted description"},[n("i",[t._v("Self-motivated web developer with a specialization in React")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"link-list"},[a("li",[a("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/tohhongxiang123"}},[a("img",{staticClass:"icon",attrs:{src:n("917e"),width:"64px",height:"64px",alt:"Github Link"}}),a("p",[a("small",{staticClass:"text-muted"},[t._v("Github")])])])]),a("li",[a("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"mailto:tohhongxiang@gmail.com"}},[a("img",{staticClass:"icon",attrs:{src:n("7711"),width:"64px",height:"64px",alt:"Email Link"}}),a("p",[a("small",{staticClass:"text-muted"},[t._v("Gmail")])])])]),a("li",[a("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/toh-hong-xiang-31551118b/"}},[a("img",{staticClass:"icon",attrs:{src:n("5938"),width:"64px",height:"64px",alt:"LinkedIn Link"}}),a("p",[a("small",{staticClass:"text-muted"},[t._v("LinkedIn")])])])]),a("li",[a("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"./resume.pdf"}},[a("img",{staticClass:"icon",attrs:{src:n("c8ae"),width:"64px",height:"64px",alt:"Resume Link"}}),a("p",[a("small",{staticClass:"text-muted"},[t._v("Resume")])])])])])}],y=(n("c669"),{}),S=Object(u["a"])(y,w,A,!1,null,"f4fbfedc",null),L=S.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about page"},[a("div",{staticClass:"content"},[a("section",{staticClass:"about-section"},[a("h1",{staticClass:"title"},[t._v("About Me")]),a("p",{staticClass:"text-muted description"},[t._v("Located in Singapore, I am a full-stack web developer who specializes in React. I am committed to high standards of web design, and I am always learning to expand my ever-growing skillset.")]),a("ul",{staticClass:"link-list"},[t._m(0),a("li",[a("router-link",{staticClass:"btn",attrs:{to:"/contact"}},[t._v("Get in touch")])],1)])]),a("section",{staticClass:"skills-section"},[a("transition",{attrs:{appear:"","enter-active-class":"fadeIn","enter-class":"before-fadeIn"}},[a("div",{staticClass:"skills-container"},[a("div",{staticClass:"skills-title"},[a("img",{attrs:{src:n("86d8"),width:"128px",height:"128px"}}),a("h1",[t._v("Front-End")])]),a("div",{staticClass:"skills-list"},[a("p",[t._v("HTML")]),a("p",[t._v("CSS/SCSS")]),a("p",[t._v("JavaScript")]),a("p",[t._v("Bootstrap")]),a("p",[t._v("React")]),a("p",[t._v("Vue")])])])]),a("transition",{attrs:{appear:"","enter-active-class":"fadeIn","enter-class":"before-fadeIn"}},[a("div",{staticClass:"skills-container"},[a("div",{staticClass:"skills-title"},[a("img",{attrs:{src:n("1ad4"),width:"128px",height:"128px"}}),a("h1",[t._v("Back-End")])]),a("div",{staticClass:"skills-list"},[a("p",[t._v("Node")]),a("p",[t._v("Express")]),a("p",[t._v("MongoDB")]),a("p",[t._v("PostgreSQL")]),a("p",[t._v("Flask")])])])]),a("transition",{attrs:{appear:"","enter-active-class":"fadeIn","enter-class":"before-fadeIn"}},[a("div",{staticClass:"skills-container"},[a("div",{staticClass:"skills-title"},[a("img",{attrs:{src:n("ac5c"),width:"128px",height:"128px"}}),a("h1",[t._v("Miscellaneous")])]),a("div",{staticClass:"skills-list"},[a("p",[t._v("Version Control (Git)")]),a("p",[t._v("Photoshop/Figma")]),a("p",[t._v("Python")]),a("p",[t._v("Heroku")]),a("p",[t._v("Agile (Scrum and Kanban)")])])])])],1),a("section",[a("router-link",{staticClass:"btn btn-primary",attrs:{to:"/projects"}},[t._v("Projects →")])],1)])])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"btn btn-primary",attrs:{href:"./resume.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download my Resume")])])}],M=(n("a7d9"),{}),I=Object(u["a"])(M,E,O,!1,null,"1b4ab657",null),D=I.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"projects page"},[n("div",{staticClass:"content"},[t._m(0),n("section",{staticClass:"project-list"},t._l(t.projects,(function(t){return n("ProjectTile",{key:t.title,attrs:{project:t}})})),1),n("section",[n("h3",[t._v("Interested to work with me?")]),n("router-link",{staticClass:"btn btn-primary",attrs:{to:"/contact"}},[t._v("Contact me")])],1)])])},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"header"},[n("h1",{staticClass:"title"},[t._v("Projects")]),n("p",{staticClass:"text-muted"},[n("i",[t._v("A small collection of personal projects")])])])}],B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project-tile"},[a("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation",value:.8,expression:"0.8"}]},[a("div",{staticClass:"header"},[a("h1",[t._v(t._s(t.project.title))]),a("p",{staticClass:"text-muted"},[t._v(t._s(t.project.description))]),t.project.thumbnail?a("img",{key:"loadedImage",attrs:{src:n("1555")("./"+t.project.thumbnail),alt:t.project.thumbnail}}):a("img",{attrs:{src:n("4b50"),alt:"Loading"}})]),a("ul",{staticClass:"link-list"},[a("li",[a("a",{staticClass:"btn btn-primary",attrs:{href:t.project.demoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("Demo")])]),a("li",[a("a",{staticClass:"btn",attrs:{href:t.project.codeLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("Code")])])])])])},$=[],R={props:{project:Object}},N=R,G=(n("7c04"),Object(u["a"])(N,B,$,!1,null,"26f6f481",null)),z=G.exports,U=[{title:"Gallereddit",description:"Gallery Visualizer for reddit made with ReactJS",thumbnail:"gallereddit.jpg",codeLink:"https://github.com/tohhongxiang123/Gallereddit",demoLink:"https://gallereddit.herokuapp.com/"},{title:"Stumblr Social Media Website",description:"Full-stack social media website using PostgreSQL, Express, React and Node",thumbnail:"stumblr.jpg",codeLink:"https://github.com/tohhongxiang123/Stumblr",demoLink:"https://stumblr-social-media-website.herokuapp.com/"},{title:"Haze Monitoring Website",description:"Web Application to monitor PSI levels and other air quality readings in Singapore",thumbnail:"haze.jpg",codeLink:"https://github.com/tohhongxiang123/Haze-monitor",demoLink:"https://singapore-air-quality.herokuapp.com/"},{title:"MERN Stack Cookhouse Menu Manager",description:"Menu manager for cookhouses/restaurants made with MongoDB, Express, React and Node",thumbnail:"cookhouse.jpg",codeLink:"https://github.com/tohhongxiang123/Cookhouse",demoLink:"https://cookhouse-menu-manager.herokuapp.com/#/"},{title:"Sorting Algorithm Visualisation",thumbnail:"sorting.jpg",description:"Visualisation of popular sorting algorithms such as Merge, Bubble and Insertion sort",codeLink:"https://github.com/tohhongxiang123/sorting-algorithms-visualised",demoLink:"https://tohhongxiang123.github.io/sorting-algorithms-visualised/"},{title:"GatsbyJS Blog",thumbnail:"blog.jpg",description:"Small Blog created with GatsbyJS, also includes light/dark theme",codeLink:"https://github.com/tohhongxiang123/Blog",demoLink:"https://tohhongxiang123.github.io/Blog/"}],F={data:function(){return{projects:U}},components:{ProjectTile:z}},J=F,V=(n("f0de"),Object(u["a"])(J,P,T,!1,null,"902d39ee",null)),H=V.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact page"},[a("div",{staticClass:"content"},[t._m(0),a("sectioN",[a("h1",{staticClass:"title"},[t._v("See more of me!")]),a("ul",{staticClass:"link-list"},[a("li",[a("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/tohhongxiang123"}},[a("img",{staticClass:"icon",attrs:{src:n("917e"),width:"64px",height:"64px"}})])]),a("li",[a("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/toh-hong-xiang-31551118b/"}},[a("img",{staticClass:"icon",attrs:{src:n("5938"),width:"64px",height:"64px"}})])])])])],1)])},Q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",{staticClass:"title"},[t._v("Contact Me!")]),n("a",{staticClass:"btn btn-primary",attrs:{target:"_blank",rel:"noopener noreferrer",href:"mailto:tohhongxiang@gmail.com"}},[t._v("Email Me")]),n("a",{staticClass:"btn",attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/toh-hong-xiang-31551118b/"}},[t._v("LinkedIn")])])}],Y=(n("d770"),{}),X=Object(u["a"])(Y,K,Q,!1,null,"dd7f0a62",null),W=X.exports;a["a"].use(j["a"]);var q=[{path:"/",name:"home",component:L},{path:"/about",name:"about",component:D},{path:"/projects",name:"projects",component:H},{path:"/contact",name:"contact",component:W}],Z=new j["a"]({routes:q,scrollBehavior:function(){return{x:0,y:0}}}),tt=Z,et=(n("4160"),n("159b"),.5),nt={bind:function(t,e){t.classList.add("before-intersect");var n=new IntersectionObserver((function(t,e){t.forEach((function(t){t.isIntersecting&&(t.target.classList.add("intersect"),t.target.classList.remove("before-intersect"),e.unobserve(t.target))}))}),{threshold:e.value||et});n.observe(t)}};a["a"].config.productionTip=!1,a["a"].directive("scrollanimation",nt),new a["a"]({router:tt,render:function(t){return t(C)}}).$mount("#app")},5938:function(t,e,n){t.exports=n.p+"img/linkedIn.154629f2.svg"},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},"67a4":function(t,e,n){},7711:function(t,e,n){t.exports=n.p+"img/email.d3bc903c.svg"},"7c04":function(t,e,n){"use strict";var a=n("bed5"),i=n.n(a);i.a},"817b":function(t,e,n){},"86d8":function(t,e,n){t.exports=n.p+"img/front-end.e2443354.svg"},"87d9":function(t,e,n){"use strict";var a=n("b5f4"),i=n.n(a);i.a},"8dc8":function(t,e,n){t.exports=n.p+"img/stumblr.6b600967.jpg"},"8e3f":function(t,e,n){},"917e":function(t,e,n){t.exports=n.p+"img/github.8f8edc5f.svg"},"9c0c":function(t,e,n){},a7d9:function(t,e,n){"use strict";var a=n("67a4"),i=n.n(a);i.a},a801:function(t,e,n){},a9da:function(t,e,n){"use strict";var a=n("8e3f"),i=n.n(a);i.a},ac5c:function(t,e,n){t.exports=n.p+"img/misc.6aae7917.svg"},b5f4:function(t,e,n){},bed5:function(t,e,n){},c669:function(t,e,n){"use strict";var a=n("817b"),i=n.n(a);i.a},c6d3:function(t,e,n){t.exports=n.p+"img/haze.bea153b0.jpg"},c8ae:function(t,e,n){t.exports=n.p+"img/resume.91da6053.svg"},d770:function(t,e,n){"use strict";var a=n("a801"),i=n.n(a);i.a},edef:function(t,e,n){t.exports=n.p+"img/gallereddit.e25c9cd8.jpg"},f0de:function(t,e,n){"use strict";var a=n("339e"),i=n.n(a);i.a},f6f1:function(t,e,n){t.exports=n.p+"img/blog.dcc3433b.jpg"}});
//# sourceMappingURL=app.c5418c56.js.map