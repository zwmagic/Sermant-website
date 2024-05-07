(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{462:function(t,e,a){"use strict";a.r(e);var s=a(26),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"development-guide"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#development-guide"}},[t._v("#")]),t._v(" Development Guide")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/README_zh.html"}},[t._v("简体中文")]),t._v(" | "),e("RouterLink",{attrs:{to:"/"}},[t._v("English")])],1),t._v(" "),e("h2",{attrs:{id:"how-o-deploy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-o-deploy"}},[t._v("#")]),t._v(" How o deploy")]),t._v(" "),e("p",[t._v("First, ensure that the Node.js environment exists. You can download it from the official website. After "),e("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),e("OutboundLink")],1),t._v(" is installed, you can use")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\n")])])]),e("p",[t._v("to check whether the installation is successful. Then go to the root directory, the SERMANT-WEBSITE directory, run")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),e("p",[t._v("to install project required dependencies. Local deploy instruction is")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])])]),e("p",[t._v("Project packaging instruction is")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])]),e("h2",{attrs:{id:"structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[t._v("#")]),t._v(" Structure")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sermant-website\n    └─docs\n        ├─.vuepress\n        │  ├─components (vue component)\n        │  ├─public (static resources)\n        │  │  ├─img （pictures）\n        │  │  └─user-story-logo （user logos of user story）\n        │  ├─styles （global style）\n        │  └─theme  （theme configuration）\n        │      ├─components\n        │      └─styles\n        ├─en （english document directory）\n        │  ├─document\n        │  │  ├─community (community documents)\n        │  │  ├─developer-guide (development documents)\n        │  │  ├─faq (frequently asked questions)\n        │  │  ├─plugin (plugin documents)\n        │  │  └─user-guide (user documents)\n        │  ├─blog\n        │  │  └─README.md (blogs)\n        │  ├─QuickStart.md\n        │  └─README.md (homepage)\n        └─zh (same as en)\n")])])]),e("h2",{attrs:{id:"markdown-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-usage"}},[t._v("#")]),t._v(" Markdown usage")]),t._v(" "),e("p",[t._v('The url links in the article need to be changed to the relative path of the desired jump location, and the title can be added after the path to set the jump to the corresponding title of the corresponding document. The special symbol in the title is changed to "-", and the special symbol at the end of the title is omitted (such as "?"). All uppercase letters in the English title need to be changed to lowercase letters.')]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("../../about/question/flowcontrol.md#possible-causes-for-the-retry-rule-does-not-take-effect\n")])])]),e("p",[t._v("Images in the article need to be tagged 'MyImage'. As shown below.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<MyImage src="/docs-img/sermant-rt-arch.png" />\n')])])]),e("p",[t._v("The path in src is the image path, and the images are stored in the .vuepress/public directory. You can create an image directory under the directory.")]),t._v(" "),e("h2",{attrs:{id:"homepage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#homepage"}},[t._v("#")]),t._v(" Homepage")]),t._v(" "),e("p",[t._v("The home page content can be edited in the first README.md file in the zh and en document directories. The content is placed between slot-footer and the header using Markdown syntax. The content is populated above footer on the home page.")]),t._v(" "),e("h2",{attrs:{id:"blog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blog"}},[t._v("#")]),t._v(" Blog")]),t._v(" "),e("p",[t._v("Enter the blog directory, when you need to publish a blog, you can add blog content in the README.md.")]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("blogArr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blog1\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This is description'")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blogtest1'")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tags")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" html\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" javascript\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blog2\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This is description'")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blogtest2'")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tags")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" html\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" javascript\n")])])]),e("p",[t._v("The name field indicates the name of the blog, the description field indicates the description information, and the path indicates the address of the newly created blog. You can add user-defined tag to tags. Note that the format of the tags is consistent with that above.")]),t._v(" "),e("h2",{attrs:{id:"文档-document"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文档-document"}},[t._v("#")]),t._v(" 文档 （document）")]),t._v(" "),e("p",[t._v("There is a README.md file in the document root where you can write information such as an introduction or overview of the entire module.\nYou can then create multiple document information, all of which are md files, in which you can edit the document content. After editing, in order to make the documentation information jump through the left sidebar, you need to go to the .vuepress directory config.js to add configuration information. Add the appropriate content under the sidebar field, as shown below.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sidebar")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"/en/document/"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"one"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"two"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"/en/plugin/"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"/en/blog/"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("p",[t._v('If you create a new document called one, add the file name (without suffix) to the "/zh/document/" property in the form of an array. At the same time, note that this step should be carried out in the sidebar in both English and Chinese, otherwise it may cause inconsistency between the Chinese and English sidebars.')]),t._v(" "),e("p",[t._v("Advanced usage: Groups can be used when there are more levels.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    title: "begin",\n    path: "",\n    collapsable: false,\n    sidebarDepth: 1,\n    children: ["", "QuickStart"],\n},\n')])])]),e("p",[t._v("Use the object to group, title attribute is the group name and path is the path to be jumped when you click. If empty, you cannot click the group name to jump. Collapsable refers to whether the group can be shrunk; if set to false, all group names in the group name will be collapsable, and if true, all group names in the group name can be shrunk. The sidebarDepth property is the depth of the sidebar title. The default value is 1.")]),t._v(" "),e("p",[t._v("The children attribute is all the md files to be displayed under this group, and the empty string represents the README.md file, where nesting can continue. The string can be changed to the above object form, and the grading can continue (but too many layers can cause confusion in the sidebar and is not recommended).")]),t._v(" "),e("p",[t._v("The sidebar will eventually display the Level 1 title in the md file. If you want to change the title displayed in the sidebar, you can directly modify the level 1 title in the md file. Due to the strict extraction of the sidebar, the title level in the md file should strictly start with the first-level title, and do not skip each level. The current setting expands to show secondary headings when you click on the md file title in a sidebar. To extract deeper titles, modify the sidebarDepth in the configuration file .vuepress/config.js. As shown below, 1 will extract the second-level title, and 2 will extract the second-level title and third-level title, with a maximum of 2.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('themeConfig: {\n    logo: "/img/sermant-logo.png",\n    displayAllHeaders: false,\n    smoothScroll: true,\n    sidebarDepth: 1,\n    }\n')])])])])}),[],!1,null,null,null);e.default=n.exports}}]);