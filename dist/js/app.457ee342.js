(function(t){function e(e){for(var i,r,o=e[0],l=e[1],c=e[2],u=0,h=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&h.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);p&&p(e);while(h.length)h.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},s=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/Portfolio/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var p=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"06dd":function(t,e,a){t.exports=a.p+"img/sorting.c907d8b4.jpg"},"0a88":function(t,e,a){"use strict";var i=a("8607"),n=a.n(i);n.a},"0e57":function(t,e,a){t.exports=a.p+"img/cookhouse.4ec0c2f2.jpg"},"126b":function(t,e,a){t.exports=a.p+"img/jobscrape.2f2a8181.jpg"},1555:function(t,e,a){var i={"./blog.jpg":"f6f1","./cookhouse.jpg":"0e57","./gallereddit.jpg":"edef","./gatsbyBlog.jpg":"f8ef","./haze.jpg":"c6d3","./jobscrape.jpg":"126b","./nextBlog.jpg":"ccfe","./sorting.jpg":"06dd","./stumblr.jpg":"8dc8","./tuili.png":"ae43"};function n(t){var e=s(t);return a(e)}function s(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=s,t.exports=n,n.id="1555"},"1ad4":function(t,e,a){t.exports=a.p+"img/back-end.a4656fd8.svg"},"2b9f":function(t,e,a){},"339e":function(t,e,a){},"3e3a":function(t,e,a){t.exports=a.p+"img/headerImage.61a4c685.svg"},"4b50":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX/TQBcNTh/AAAAAXRSTlMAQObYZgAAAApJREFUeJxjYgAAAAYAAzY3fKgAAAAASUVORK5CYII="},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("NavigationBar"),a("FadeTranslateTransition",{attrs:{mode:"out-in",duration:"0.4s"}},[a("router-view")],1)],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("div",{staticClass:"logo"},[a("h3",{on:{click:t.hideDisplay}},[a("router-link",{attrs:{to:"/",exact:""}},[t._v("Toh Hong Xiang")])],1)]),a("div",{staticClass:"burger",class:{onScreen:t.onScreen},on:{click:t.toggleDisplay}},[a("div",{staticClass:"line1"}),a("div",{staticClass:"line2"}),a("div",{staticClass:"line3"})]),a("ul",{staticClass:"nav-links",class:{onScreen:t.onScreen}},[a("li",{on:{click:t.hideDisplay}},[a("router-link",{staticClass:"nav-item",attrs:{to:"/about"}},[t._v("About Me")])],1),a("li",{on:{click:t.hideDisplay}},[a("router-link",{staticClass:"nav-item",attrs:{to:"/projects"}},[t._v("Projects")])],1),a("li",{on:{click:t.hideDisplay}},[a("router-link",{staticClass:"nav-item",attrs:{to:"/contact"}},[t._v("Contact Me")])],1)])])},o=[],l={data:function(){return{onScreen:!1}},methods:{toggleDisplay:function(){this.onScreen=!this.onScreen},hideDisplay:function(){this.onScreen=!1}}},c=l,p=(a("0a88"),a("2877")),u=Object(p["a"])(c,r,o,!1,null,"780d948c",null),h=u.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",t._g(t._b({attrs:{name:"fadeTranslate","enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},"transition",t.$attrs,!1),t.hooks),[t._t("default")],2)},g=[],m={props:{duration:{type:String,default:"0.3s"}},computed:{hooks:function(){return{beforeEnter:this.setDuration,afterEnter:this.cleanUpDuration,beforeLeave:this.setDuration,afterLeave:this.cleanUpDuration}}},methods:{setDuration:function(t){t.style.animationDuration="".concat(this.duration)},cleanUpDuration:function(t){t.style.animationDuration=""}}},f=m,b=(a("a9da"),Object(p["a"])(f,d,g,!1,null,"09edad49",null)),v=b.exports,_={components:{NavigationBar:h,FadeTranslateTransition:v}},x=_,k=(a("5c0b"),Object(p["a"])(x,n,s,!1,null,null,null)),C=k.exports,j=a("8c4f"),w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home page"},[i("div",{staticClass:"content"},[i("transition",{attrs:{name:"fadeIn",appear:""}},[i("img",{attrs:{src:a("3e3a"),width:"300px"}})]),t._m(0),t._m(1),t._m(2),i("hr"),i("ul",{staticClass:"link-list"},[i("li",[i("router-link",{staticClass:"btn btn-primary",attrs:{to:"/about"}},[t._v("About Me")])],1),i("li",[i("router-link",{staticClass:"btn",attrs:{to:"/projects"}},[t._v("Projects")])],1),i("li",[i("router-link",{staticClass:"btn",attrs:{to:"/contact"}},[t._v("Contact Me")])],1)])],1)])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"title"},[a("strong",[t._v("Toh Hong Xiang")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-muted description"},[a("i",[t._v("Self-motivated web developer with a specialization in React")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"link-list"},[i("li",[i("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/tohhongxiang123"}},[i("img",{staticClass:"icon",attrs:{src:a("917e"),width:"64px",height:"64px",alt:"Github Link"}}),i("p",[i("small",{staticClass:"text-muted"},[t._v("Github")])])])]),i("li",[i("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"mailto:tohhongxiang@gmail.com"}},[i("img",{staticClass:"icon",attrs:{src:a("7711"),width:"64px",height:"64px",alt:"Email Link"}}),i("p",[i("small",{staticClass:"text-muted"},[t._v("Gmail")])])])]),i("li",[i("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/toh-hong-xiang-31551118b/"}},[i("img",{staticClass:"icon",attrs:{src:a("5938"),width:"64px",height:"64px",alt:"LinkedIn Link"}}),i("p",[i("small",{staticClass:"text-muted"},[t._v("LinkedIn")])])])]),i("li",[i("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"./resume.pdf"}},[i("img",{staticClass:"icon",attrs:{src:a("c8ae"),width:"64px",height:"64px",alt:"Resume Link"}}),i("p",[i("small",{staticClass:"text-muted"},[t._v("Resume")])])])])])}],A=(a("7c5d"),{}),S=Object(p["a"])(A,w,y,!1,null,"227b8d56",null),E=S.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about page"},[i("div",{staticClass:"content"},[i("section",{staticClass:"about-section"},[i("h1",{staticClass:"title"},[t._v("About Me")]),i("p",{staticClass:"text-muted description"},[t._v("Located in Singapore, I am a full-stack web developer who specializes in React. I am committed to high standards of web design, and I am always learning to expand my ever-growing skillset.")]),t._m(0),i("ul",{staticClass:"link-list"},[t._m(1),i("li",[i("router-link",{staticClass:"btn",attrs:{to:"/contact"}},[t._v("Get in touch")])],1)])]),i("section",{staticClass:"skills-section"},[i("transition",{attrs:{appear:"","enter-active-class":"fadeIn","enter-class":"before-fadeIn"}},[i("div",{staticClass:"skills-container"},[i("div",{staticClass:"skills-title"},[i("img",{attrs:{src:a("86d8"),width:"128px",height:"128px"}}),i("h1",[t._v("Front-End")])]),i("div",{staticClass:"skills-list"},[i("p",[t._v("HTML")]),i("p",[t._v("CSS/SCSS")]),i("p",[t._v("JavaScript")]),i("p",[t._v("Bootstrap")]),i("p",[t._v("React")]),i("p",[t._v("Vue")])])])]),i("transition",{attrs:{appear:"","enter-active-class":"fadeIn","enter-class":"before-fadeIn"}},[i("div",{staticClass:"skills-container"},[i("div",{staticClass:"skills-title"},[i("img",{attrs:{src:a("1ad4"),width:"128px",height:"128px"}}),i("h1",[t._v("Back-End")])]),i("div",{staticClass:"skills-list"},[i("p",[t._v("Node")]),i("p",[t._v("Express")]),i("p",[t._v("MongoDB")]),i("p",[t._v("PostgreSQL")]),i("p",[t._v("Flask")])])])]),i("transition",{attrs:{appear:"","enter-active-class":"fadeIn","enter-class":"before-fadeIn"}},[i("div",{staticClass:"skills-container"},[i("div",{staticClass:"skills-title"},[i("img",{attrs:{src:a("ac5c"),width:"128px",height:"128px"}}),i("h1",[t._v("Miscellaneous")])]),i("div",{staticClass:"skills-list"},[i("p",[t._v("Version Control (Git)")]),i("p",[t._v("Photoshop/Figma")]),i("p",[t._v("Python")]),i("p",[t._v("Heroku")]),i("p",[t._v("Agile (Scrum and Kanban)")])])])])],1),i("section",[i("router-link",{staticClass:"btn btn-primary",attrs:{to:"/projects"}},[t._v("Projects →")])],1)])])},O=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"link-list"},[i("li",[i("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/tohhongxiang123"}},[i("img",{staticClass:"icon",attrs:{src:a("917e"),width:"64px",height:"64px",alt:"Github Link"}}),i("p",[i("small",{staticClass:"text-muted"},[t._v("Github")])])])]),i("li",[i("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"mailto:tohhongxiang@gmail.com"}},[i("img",{staticClass:"icon",attrs:{src:a("7711"),width:"64px",height:"64px",alt:"Email Link"}}),i("p",[i("small",{staticClass:"text-muted"},[t._v("Gmail")])])])]),i("li",[i("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/toh-hong-xiang-31551118b/"}},[i("img",{staticClass:"icon",attrs:{src:a("5938"),width:"64px",height:"64px",alt:"LinkedIn Link"}}),i("p",[i("small",{staticClass:"text-muted"},[t._v("LinkedIn")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"btn btn-primary",attrs:{href:"./resume.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download my Resume")])])}],M=(a("eb33"),{}),I=Object(p["a"])(M,D,O,!1,null,"e8a1bd9e",null),L=I.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projects page"},[a("div",{staticClass:"content"},[t._m(0),a("section",{staticClass:"project-list"},t._l(t.projects,(function(t){return a("ProjectTile",{key:t.title,attrs:{project:t}})})),1),a("section",[a("h3",[t._v("Interested to work with me?")]),a("router-link",{staticClass:"btn btn-primary",attrs:{to:"/contact"}},[t._v("Contact me")])],1)])])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"header"},[a("h1",{staticClass:"title"},[t._v("Projects")]),a("p",{staticClass:"text-muted"},[a("i",[t._v("A small collection of personal projects")])])])}],N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"project-tile"},[i("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation",value:.8,expression:"0.8"}]},[i("div",{staticClass:"header"},[i("h1",[t._v(t._s(t.project.title))]),i("p",{staticClass:"text-muted"},[t._v(t._s(t.project.description))]),t.project.thumbnail?i("img",{key:"loadedImage",attrs:{src:a("1555")("./"+t.project.thumbnail),alt:t.project.thumbnail}}):i("img",{attrs:{src:a("4b50"),alt:"Loading"}})]),i("ul",{staticClass:"link-list"},t._l(t.project.data,(function(e,a,n){return i("li",{key:a},[i("a",{key:n,staticClass:"btn",class:{"btn-primary":0===n},attrs:{href:e,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(a))])])})),0)])])},T=[],$={props:{project:Object}},G=$,R=(a("bca1"),Object(p["a"])(G,N,T,!1,null,"6bffb456",null)),J=R.exports,U=[{title:"Gallereddit",description:"Gallery Visualizer for reddit made with ReactJS",thumbnail:"gallereddit.jpg",codeLink:"https://github.com/tohhongxiang123/Gallereddit",demoLink:"https://gallereddit.herokuapp.com/",data:{Demo:"https://gallereddit.herokuapp.com/",Code:"https://github.com/tohhongxiang123/Gallereddit"}},{title:"tuili",description:"A full-stack platform to match tutors and students together",thumbnail:"tuili.png",data:{Demo:"https://tuili.sg/"}},{title:"Gatsby Notes Blog",description:"Markdown-powered Note-taking website made with GatsbyJS, featuring a realtime markdown editor",thumbnail:"gatsbyBlog.jpg",data:{Demo:"https://tohhongxiang123.github.io/Notes/notes",Code:"https://github.com/tohhongxiang123/Notes"}},{title:"NextJS Notes Blog",description:"Markdown-powered blog made with NextJS, featuring a dark/light theme",thumbnail:"nextBlog.jpg",data:{Demo:"https://personalblog-tohhongxiang123.vercel.app/",Code:"https://github.com/tohhongxiang123/Blog"}},{title:"Stumblr Social Media Website",description:"Full-stack social media website using PostgreSQL, Express, React and Node",thumbnail:"stumblr.jpg",data:{Demo:"https://stumblr-social-media-website.herokuapp.com/",Code:"https://github.com/tohhongxiang123/Stumblr"}},{title:"Haze Monitoring Website",description:"Web Application to monitor PSI levels and other air quality readings in Singapore",thumbnail:"haze.jpg",data:{Demo:"https://singapore-air-quality.herokuapp.com/",Code:"https://github.com/tohhongxiang123/Haze-monitor"}},{title:"MERN Stack Cookhouse Menu Manager",description:"Menu manager for cookhouses/restaurants made with MongoDB, Express, React and Node",thumbnail:"cookhouse.jpg",data:{Demo:"https://cookhouse-menu-manager.herokuapp.com/#/",Code:"https://github.com/tohhongxiang123/Cookhouse"}},{title:"Sorting Algorithm Visualisation",thumbnail:"sorting.jpg",description:"Visualisation of popular sorting algorithms such as Merge, Bubble and Insertion sort",data:{Demo:"https://tohhongxiang123.github.io/sorting-algorithms-visualised/",Code:"https://github.com/tohhongxiang123/sorting-algorithms-visualised"}},{title:"Examining Data Science Jobs with Python",thumbnail:"jobscrape.jpg",description:"Performing data scraping and text analysis with python on Data Science job listings",data:{Article:"https://www.uplevel.work/blog/feature-how-we-examined-data-science-job-listings-using-python",Code:"https://github.com/Yuhao89/UpLevel-Data-Science"}}],z={data:function(){return{projects:U}},components:{ProjectTile:J}},F=z,V=(a("f0de"),Object(p["a"])(F,B,P,!1,null,"902d39ee",null)),H=V.exports,Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contact page"},[i("div",{staticClass:"content"},[t._m(0),i("sectioN",[i("h1",{staticClass:"title"},[t._v("See more of me!")]),i("ul",{staticClass:"link-list"},[i("li",[i("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/tohhongxiang123"}},[i("img",{staticClass:"icon",attrs:{src:a("917e"),width:"64px",height:"64px"}})])]),i("li",[i("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/toh-hong-xiang-31551118b/"}},[i("img",{staticClass:"icon",attrs:{src:a("5938"),width:"64px",height:"64px"}})])])])])],1)])},K=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("h1",{staticClass:"title"},[t._v("Contact Me!")]),a("a",{staticClass:"btn btn-primary",attrs:{target:"_blank",rel:"noopener noreferrer",href:"mailto:tohhongxiang@gmail.com"}},[t._v("Email Me")]),a("a",{staticClass:"btn",attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/toh-hong-xiang-31551118b/"}},[t._v("LinkedIn")])])}],Q=(a("97ec"),{}),X=Object(p["a"])(Q,Y,K,!1,null,"13cddfb7",null),W=X.exports;i["a"].use(j["a"]);var q=[{path:"/",name:"home",component:E},{path:"/about",name:"about",component:L},{path:"/projects",name:"projects",component:H},{path:"/contact",name:"contact",component:W}],Z=new j["a"]({routes:q,scrollBehavior:function(){return{x:0,y:0}}}),tt=Z,et=(a("4160"),a("159b"),.5),at={bind:function(t,e){t.classList.add("before-intersect");var a=new IntersectionObserver((function(t,e){t.forEach((function(t){t.isIntersecting&&(t.target.classList.add("intersect"),t.target.classList.remove("before-intersect"),e.unobserve(t.target))}))}),{threshold:e.value||et});a.observe(t)}};i["a"].config.productionTip=!1,i["a"].directive("scrollanimation",at),new i["a"]({router:tt,render:function(t){return t(C)}}).$mount("#app")},5938:function(t,e,a){t.exports=a.p+"img/linkedIn.154629f2.svg"},"5c0b":function(t,e,a){"use strict";var i=a("9c0c"),n=a.n(i);n.a},"5e49":function(t,e,a){},7711:function(t,e,a){t.exports=a.p+"img/email.d3bc903c.svg"},"7c5d":function(t,e,a){"use strict";var i=a("ba5a"),n=a.n(i);n.a},8607:function(t,e,a){},"86d8":function(t,e,a){t.exports=a.p+"img/front-end.4567d199.svg"},"8dc8":function(t,e,a){t.exports=a.p+"img/stumblr.6b600967.jpg"},"8e3f":function(t,e,a){},"917e":function(t,e,a){t.exports=a.p+"img/github.8f8edc5f.svg"},"940f":function(t,e,a){},"97ec":function(t,e,a){"use strict";var i=a("2b9f"),n=a.n(i);n.a},"9c0c":function(t,e,a){},a9da:function(t,e,a){"use strict";var i=a("8e3f"),n=a.n(i);n.a},ac5c:function(t,e,a){t.exports=a.p+"img/misc.0e844a58.svg"},ae43:function(t,e,a){t.exports=a.p+"img/tuili.5696ffe2.png"},ba5a:function(t,e,a){},bca1:function(t,e,a){"use strict";var i=a("5e49"),n=a.n(i);n.a},c6d3:function(t,e,a){t.exports=a.p+"img/haze.bea153b0.jpg"},c8ae:function(t,e,a){t.exports=a.p+"img/resume.91da6053.svg"},ccfe:function(t,e,a){t.exports=a.p+"img/nextBlog.b6e7e6e3.jpg"},eb33:function(t,e,a){"use strict";var i=a("940f"),n=a.n(i);n.a},edef:function(t,e,a){t.exports=a.p+"img/gallereddit.e25c9cd8.jpg"},f0de:function(t,e,a){"use strict";var i=a("339e"),n=a.n(i);n.a},f6f1:function(t,e,a){t.exports=a.p+"img/blog.dcc3433b.jpg"},f8ef:function(t,e,a){t.exports=a.p+"img/gatsbyBlog.a56d800e.jpg"}});
//# sourceMappingURL=app.457ee342.js.map