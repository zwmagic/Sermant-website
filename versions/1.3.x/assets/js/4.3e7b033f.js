(window.webpackJsonp=window.webpackJsonp||[]).push([[4,8],{390:function(t,e,n){"use strict";n.d(e,"f",(function(){return l})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return h})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return g}));n(400);var i=n(108);const s=/#.*$/,a=/\.(md|html)$/,r=/\/$/,o=/^[a-z]+:/i;let l=[];function c(t){return o.test(t)}function u(t){return/^mailto:/.test(t)}function h(t){return/^tel:/.test(t)}function d(t){if(c(t))return t;const e=t.match(s),n=e?e[0]:"",i=function(t){return decodeURI(t).replace(s,"").replace(a,"")}(t);return r.test(i)?t:i+".html"+n}const g=()=>new Promise((t,e)=>{i.a.get("https://api.github.com/repos/huaweicloud/Sermant-website/git/trees/develop").then(n=>{const s=n.data.tree.find(t=>"versions.json"===t.path);i.a.get(s.url).then(e=>{l=JSON.parse(window.atob(e.data.content)).versions,t(l)}).catch(t=>{console.error(t),e()})}).catch(t=>{console.error(t),e()})})},391:function(t,e,n){},392:function(t,e,n){},393:function(t,e,n){},394:function(t,e,n){"use strict";var i=n(390),s={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(i.a)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t=>this.link):"/"===this.link},isNonHttpURI(){return Object(i.d)(this.link)||Object(i.e)(this.link)},isBlankTarget(){return"_black"===this.target},isInternal(){return!Object(i.c)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.c)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},a=n(26),r=Object(a.a)(s,(function(){var t=this,e=t._self._c;return t.isInternal&&!t.item.isOutLink?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.a=r.exports},395:function(t,e,n){"use strict";var i=n(406),s=n(394),a=n(390),r={name:"NavLinks",data:()=>({versionDropdown:null}),components:{NavLink:s.a,DropdownLink:i.a},computed:{userNav(){return this.$themeLocaleConfig.nav||this.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,n=this.$router.options.routes,i=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(s=>{const a=t[s],r=i[s]&&i[s].label||a.lang;let o;return a.lang===this.$lang?o=e:(o=e.replace(this.$localeConfig.path,s),n.some(t=>t.path===o)||(o=s)),{text:r,link:o}})};return[...this.userNav,s]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(this.resolveNavLinkItem(t),{items:(t.items||[]).map(this.resolveNavLinkItem)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["Github","Gitlab","Bitbucket"];for(let n=0;n<e.length;n++){const i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}},watch:{$route(){this.setVersions()}},mounted(){this.setVersions()},methods:{resolveNavLinkItem:t=>Object.assign(t,{type:t.items&&t.items.length?"links":"link"}),async setVersions(){if(0===a.f.length){if(!await Object(a.b)())return}const t=window.location.pathname;let e="Versions";let n=t.indexOf("/versions"),i=a.f[0]+"(latest)";if(-1===n)e=i;else{const i=n+"/versions".length+1,s=t.indexOf("/",i);let r=t.substring(i,s);a.f.some(t=>t===r)&&(e=r)}const s=[i,...a.f].filter(t=>t!==e&&t!==a.f[0]);this.versionDropdown={text:e,ariaLabel:"Select version",items:s.map(t=>{let e=t;const n=window.location.pathname,s=n.indexOf("/versions/"),a=s>=0?s+10:0,r=n.indexOf("/",a);return{text:e,link:(t===i?"":"/versions/"+t)+n.substring(r),isOutLink:!0}})}}}},o=(n(396),n(26)),l=Object(o.a)(r,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),e("div",{staticClass:"nav-item"},[t.versionDropdown?e("DropdownLink",{attrs:{item:t.versionDropdown}}):t._e()],1),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);e.a=l.exports},396:function(t,e,n){"use strict";n(391)},397:function(t,e,n){"use strict";n(392)},398:function(t,e,n){"use strict";var i=n(402),s=n(404),a=n(407),r=n(395);function o(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var l={name:"Navbar",components:{SidebarButton:a.a,NavLinks:r.a,SearchBox:s.a,AlgoliaSearchBox:i.a},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(o(this.$el,"paddingLeft"))+parseInt(o(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},c=(n(397),n(26)),u=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);e.a=u.exports},399:function(t,e,n){"use strict";n(393)},401:function(t,e,n){"use strict";n.r(e);var i=n(398),s=n(405),a={name:"Base",components:{Navbar:i.a,Sidebar:s.a},data:()=>({sidebarIsOpen:!1}),computed:{},mounted(){const t=document.getElementById("navbar"),e=document.getElementById("sidebar");window.addEventListener("click",n=>{n.clientX>e.clientWidth&&n.clientY>t.clientHeight&&this.toggleSidebar(!1)})},methods:{toggleSidebar(t){this.sidebarIsOpen="boolean"==typeof t?t:!this.sidebarIsOpen},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},r=(n(399),n(26)),o=Object(r.a)(a,(function(){var t=this._self._c;return t("div",{class:{base:!0,"sidebar-open":this.sidebarIsOpen},on:{touchstart:this.onTouchStart,touchend:this.onTouchEnd}},[t("Navbar",{attrs:{id:"navbar"},on:{"toggle-sidebar":this.toggleSidebar}}),this._v(" "),t("Sidebar",{attrs:{items:[],id:"sidebar"}}),this._v(" "),this._t("content")],2)}),[],!1,null,"7ddf006a",null);e.default=o.exports},424:function(t,e,n){},445:function(t,e,n){"use strict";n(424)},454:function(t,e,n){"use strict";n.r(e);var i={name:"UserStory",components:{Base:n(401).default},data:()=>({currentPage:1,total:0,currentBlogArr:[]}),computed:{blog(){return this.$frontmatter.blogArr},module(){return this.$frontmatter.name},goTo(){return this.$frontmatter.goTo}},created(){},mounted(){this.total=Array.isArray(this.blog)?this.blog.length:0,this.loadBlog()},watch:{blog(){this.total=Array.isArray(this.blog)?this.blog.length:0,this.loadBlog()},$route(){this.$router.go(0)}},methods:{goToDetail(t){0===t.indexOf("http")?window.open(t):-1!==this.$router.currentRoute.path.indexOf("/zh/")?this.$router.push(`/zh/blog/${t}/`):this.$router.push(`/en/blog/${t}/`)},handleSizeChange(){this.loadBlog()},handleCurrentChange(){this.loadBlog()},loadBlog(){this.currentBlogArr=this.blog.slice(30*(this.currentPage-1),30*this.currentPage)}}},s=(n(445),n(26)),a=Object(s.a)(i,(function(){var t=this,e=t._self._c;return e("Base",{scopedSlots:t._u([{key:"content",fn:function(){return[e("dir",{staticClass:"module-box"},[e("h1",[t._v(t._s(t.module))])]),t._v(" "),e("div",{staticClass:"content"},[t._l(t.currentBlogArr,(function(n,i){return e("el-card",{key:i,staticClass:"story-card",attrs:{shadow:"hover"},nativeOn:{click:function(e){return t.goToDetail(n.path)}}},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"description"},[e("div",{staticClass:"name"},[t._v(t._s(n.name))]),t._v(" "),e("div",{staticClass:"writer-box"},[e("span",[t._v(t._s(n.writer))]),e("span",[t._v(t._s(n.date))])]),t._v(" "),e("p",[t._v(t._s(n.description))])]),t._v(" "),e("div",{staticClass:"tags"},t._l(n.tags,(function(n,i){return e("el-tag",{key:i},[t._v("\n              "+t._s(n)+"\n            ")])})),1)])])})),t._v(" "),e("div",{staticClass:"block"},[e("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":30,layout:"total, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)],2)]},proxy:!0}])})}),[],!1,null,"1c7740ea",null);e.default=a.exports}}]);