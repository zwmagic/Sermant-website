(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{552:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"动态安装卸载脚本使用手册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态安装卸载脚本使用手册"}},[t._v("#")]),t._v(" 动态安装卸载脚本使用手册")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/sermant-io/Sermant/blob/develop/scripts/attach.c",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sermant动态安装、卸载脚本"),a("OutboundLink")],1),t._v("是基于Java Attach API实现的C语言脚本，可以将sermant挂载至"),a("strong",[t._v("虚拟机上的jvm进程")]),t._v("或"),a("strong",[t._v("容器上的jvm进程")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("注：该脚本仅限"),a("strong",[t._v("linux系统")]),t._v("下使用")])]),t._v(" "),a("h2",{attrs:{id:"参数配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数配置"}},[t._v("#")]),t._v(" 参数配置")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("-path=")]),t._v("：必填参数，后接sermant-agent.jar的"),a("strong",[t._v("绝对路径")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("-pid=")]),t._v("：必填参数，后接宿主应用的pid，可使用"),a("code",[t._v("ps -ef")]),t._v("等命令查看")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("-command=")]),t._v("：必填参数，后接挂载sermant的指令，支持的指令见"),a("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-agent.html"}},[t._v("Sermant Agent使用手册")]),t._v("。")],1)]),t._v(" "),a("li",[a("p",[a("code",[t._v("-nspid=")]),t._v("：当宿主应用容器运行时为必填参数，后接宿主应用的nspid，可使用"),a("code",[t._v("cat /proc/{pid}/status")]),t._v("命令查看。当宿主应用非容器运行时，此参数请勿填写")])])]),t._v(" "),a("h2",{attrs:{id:"脚本使用步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚本使用步骤"}},[t._v("#")]),t._v(" 脚本使用步骤")]),t._v(" "),a("h3",{attrs:{id:"_1-编译jvm-attach-c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-编译jvm-attach-c"}},[t._v("#")]),t._v(" 1. 编译"),a("code",[t._v("jvm_attach.c")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("gcc attach.c "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" attach\n")])])]),a("blockquote",[a("p",[t._v("注：请确保已经安装gcc")])]),t._v(" "),a("h3",{attrs:{id:"_2-执行attach脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-执行attach脚本"}},[t._v("#")]),t._v(" 2. 执行attach脚本")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./attach "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("sermant-path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/sermant-agent.jar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-pid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-command")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("COMMAND"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("脚本执行情况如下所示：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@b6b9af8e5610 root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./attach -path=/home/sermant-agent-1.0.0/agent/sermant-agent.jar -pid=494 -command=INSTALL-PLUGINS:database-write-prohibition")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" /home/sermant-agent-1.0.0/agent/sermant-agent.jar\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": PID: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("494")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": COMMAND: INSTALL-PLUGINS:database-write-prohibition\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": Connected to remote JVM of pid "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("494")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": ret code is "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", Attach success"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);