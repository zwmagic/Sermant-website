(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{527:function(a,e,t){"use strict";t.r(e);var r=t(26),s=Object(r.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"sermant-agent-debug指南"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sermant-agent-debug指南"}},[a._v("#")]),a._v(" Sermant Agent Debug指南")]),a._v(" "),e("p",[a._v("本文档主要用于说明Sermant Agent进行Debug的相关问题。")]),a._v(" "),e("h2",{attrs:{id:"常见问题-在idea中挂载sermant-agent启动宿主微服务出现java-lang-classnotfoundexception问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题-在idea中挂载sermant-agent启动宿主微服务出现java-lang-classnotfoundexception问题"}},[a._v("#")]),a._v(" 常见问题：在IDEA中挂载Sermant Agent启动宿主微服务出现"),e("code",[a._v("java.lang.ClassNotFoundException")]),a._v("问题")]),a._v(" "),e("h3",{attrs:{id:"问题原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题原因"}},[a._v("#")]),a._v(" 问题原因")]),a._v(" "),e("p",[a._v("当宿主微服务挂载Sermant Agent启动时，流控、负载均衡插件会在SpringFactoriesLoader中注入插件自定义的配置源。Spring项目在IDEA中启动时使用"),e("code",[a._v("AppClassLoader")]),a._v("加载类。在通过JAR包启动时，类加载器会变为"),e("code",[a._v("LaunchedURLClassLoader")]),a._v("。我们对"),e("code",[a._v("LaunchedURLClassLoader")]),a._v("进行了增强从而能够加载到Sermant的自定义类，"),e("code",[a._v("AppClassLoader")]),a._v("则无法加载并抛出"),e("code",[a._v("java.lang.ClassNotFoundException")]),a._v("。")]),a._v(" "),e("h3",{attrs:{id:"解决方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方式"}},[a._v("#")]),a._v(" 解决方式")]),a._v(" "),e("p",[e("strong",[a._v("不使用流控和负载均衡插件（适用于JAR包或IDEA启动）：")])]),a._v(" "),e("ol",[e("li",[a._v("宿主微服务通过JAR包方式挂载Sermant Agent启动")]),a._v(" "),e("li",[a._v("从"),e("code",[a._v("${Sermant-path}/config/plugin.yaml")]),a._v("文件中移除流控和负载均衡插件，然后在IDEA中挂载Sermant Agent启动宿主微服务。")])]),a._v(" "),e("p",[e("strong",[a._v("使用流控或负载均衡插件：")])]),a._v(" "),e("ol",[e("li",[a._v("宿主微服务通过JAR包方式挂载Sermant Agent启动。")])]),a._v(" "),e("blockquote",[e("p",[a._v("说明：${Sermant-path}为Sermant包路径")])]),a._v(" "),e("h2",{attrs:{id:"对sermant-agent进行debug的通用方法-适用于idea启动或jar包启动宿主微服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对sermant-agent进行debug的通用方法-适用于idea启动或jar包启动宿主微服务"}},[a._v("#")]),a._v(" 对Sermant Agent进行Debug的通用方法（适用于IDEA启动或JAR包启动宿主微服务）")]),a._v(" "),e("h3",{attrs:{id:"本地debug"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地debug"}},[a._v("#")]),a._v(" 本地Debug")]),a._v(" "),e("p",[a._v('Sermant Agent模块和宿主微服务模块在一个Project中，通过IDEA菜单栏选择"Run -> Edit Configurations"，然后在宿主微服务启动项的配置中添加VM Option命令：'),e("code",[a._v("-javaagent:${Sermant-path}/sermant-agent.jar")]),a._v("，并通过Debug模式启动宿主微服务即可对Sermant进行开发调试。")]),a._v(" "),e("blockquote",[e("p",[a._v("说明：${Sermant-path}为Sermant包路径")])]),a._v(" "),e("h3",{attrs:{id:"远程debug"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程debug"}},[a._v("#")]),a._v(" 远程Debug")]),a._v(" "),e("p",[a._v("Sermant Agent源码和宿主微服务不在一个Project时，对Sermant进行开发调试需要使用IDEA提供的远程Debug功能。远程调试使开发人员能够直接诊断服务器或其它运行进程上的问题。下面将详细介绍远程Debug的使用步骤。")]),a._v(" "),e("h4",{attrs:{id:"步骤一-创建远程debug配置项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤一-创建远程debug配置项"}},[a._v("#")]),a._v(" 步骤一 创建远程Debug配置项")]),a._v(" "),e("p",[a._v("在Sermant的源码项目中通过在菜单栏选择"),e("code",[a._v("Run -> Edit Configurations")]),a._v("来添加新的远程调试配置。如下图所示，点击"),e("code",[a._v("+")]),a._v("号，然后选择"),e("code",[a._v("Remote JVM Debug")]),a._v("：\n"),e("MyImage",{attrs:{src:"/docs-img/remote_jvm_debug_1.png"}})],1),a._v(" "),e("p",[a._v("在远程Debug配置项中，可自定义远程Debug配置项的名称、微服务运行时所在服务器的IP地址以及进行调试的端口号，如下图红色框选中的区域所示：\n"),e("MyImage",{attrs:{src:"/docs-img/remote_jvm_debug_2.png"}}),a._v("\n配置信息完成后，复制远程微服务启动需添加的命令行参数（上图的最下方红框内容）。")],1),a._v(" "),e("h4",{attrs:{id:"步骤二-宿主微服务启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤二-宿主微服务启动"}},[a._v("#")]),a._v(" 步骤二 宿主微服务启动")]),a._v(" "),e("p",[a._v("参考如下命令启动宿主微服务：")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-agentlib:jdwp")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("transport"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("dt_socket,server"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("y,suspend"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("n,address"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5005")]),a._v(" -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${sermant-path}")]),a._v("/sermant-agent.jar "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-jar")]),a._v(" spring-provider.jar\n")])])]),e("blockquote",[e("p",[a._v("说明1：${Sermant-path}为Sermant包路径")])]),a._v(" "),e("blockquote",[e("p",[a._v("说明2："),e("code",[a._v("-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005")]),a._v("为步骤二复制的微服务启动需添加的命令行参数")])]),a._v(" "),e("h4",{attrs:{id:"步骤三-代码调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤三-代码调试"}},[a._v("#")]),a._v(" 步骤三 代码调试")]),a._v(" "),e("p",[a._v("宿主微服务启动后，在Sermant的源码项目中通过在菜单栏选择"),e("code",[a._v("Run -> Debug -> ${Debug-name}")]),a._v("启动Debug，即可通过添加断点对Sermant代码进行调试。")]),a._v(" "),e("blockquote",[e("p",[a._v("注意：务必保证源代码和运行代码一致")])]),a._v(" "),e("blockquote",[e("p",[a._v("说明：${Debug-name}为"),e("code",[a._v("Remote JVM Debug")]),a._v("配置项的名称")])])])}),[],!1,null,null,null);e.default=s.exports}}]);