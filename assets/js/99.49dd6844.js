(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{546:function(e,t,a){"use strict";a.r(t);var r=a(26),n=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"sermant使用介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sermant使用介绍"}},[e._v("#")]),e._v(" Sermant使用介绍")]),e._v(" "),t("p",[e._v("Sermant 是基于Java字节码增强技术的云原生无代理服务网格，通过 JavaAgent\n对宿主应用进行非侵入式增强，以解决Java应用的微服务治理问题。Sermant的初衷是建立一个面向微服务治理的对开发态非侵入的解决方案生态，降低服务治理开发和使用的难度，通过抽象接口、功能整合、插件隔离等手段，达到简化开发、功能即插即用的效果。本文介绍Sermant目前包含的组件以及Sermant的编译打包。")]),e._v(" "),t("h2",{attrs:{id:"架构简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#架构简介"}},[e._v("#")]),e._v(" 架构简介")]),e._v(" "),t("p",[e._v("Sermant整体架构包括"),t("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-agent.html"}},[e._v("Sermant Agent")]),e._v("、"),t("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-backend.html"}},[e._v("Sermant Backend")]),e._v("、"),t("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-injector.html"}},[e._v("Sermant Injector")]),e._v("、"),t("RouterLink",{attrs:{to:"/zh/document/user-guide/configuration-center.html"}},[e._v("动态配置中心")]),e._v("等组件。其中Sermant Agent是提供字节码增强基础能力及各类服务治理能力的核心组件，Sermant Backend、Sermant Injector、动态配置中心为Sermant提供其他能力的配套组件。")],1),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/sermant-arch.png"}}),e._v(" "),t("h3",{attrs:{id:"sermant-agent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sermant-agent"}},[e._v("#")]),e._v(" Sermant Agent")]),e._v(" "),t("p",[e._v("Sermant Agent为Sermant的核心组件，其中包含字节码增强基础能力框架及各类服务治理能力插件，Sermant Agent基于JavaAgent技术，支持Java 8及以上版本，当前已支持"),t("code",[e._v("premain")]),e._v("和"),t("code",[e._v("agentmain")]),e._v("两种方式启动。")]),e._v(" "),t("p",[e._v("更多Sermant Agent使用指南请参考"),t("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-agent.html"}},[e._v("Sermant Agent使用手册")]),e._v("。")],1),e._v(" "),t("h3",{attrs:{id:"sermant-backend"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sermant-backend"}},[e._v("#")]),e._v(" Sermant Backend")]),e._v(" "),t("p",[e._v("Sermant Backend为Sermant数据处理后端模块和前端信息展示模块，当前主要包括Sermant心跳信息的接收和展示等功能。Sermant Backend为Sermant的非必要组件，但是非常推荐用户部署Sermant Backend以获得Sermant的可观测性。")]),e._v(" "),t("p",[e._v("更多Sermant Backend使用指南请参考"),t("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-backend.html"}},[e._v("Sermant Backend使用手册")]),e._v("。")],1),e._v(" "),t("h3",{attrs:{id:"sermant-injector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sermant-injector"}},[e._v("#")]),e._v(" Sermant Injector")]),e._v(" "),t("p",[e._v("Sermant支持在容器环境下通过Sermant Injector实现宿主应用自动挂载Sermant的快速部署方式，只需在应用部署的"),t("code",[e._v("yaml")]),e._v("中的"),t("code",[e._v("labels")]),e._v("添加"),t("code",[e._v("sermant-injection: enabled")]),e._v("即可实现该功能。Sermant Injector为Sermant非必要组件，推荐用户在容器环境中部署该组件以获得快速部署能力。当前Sermant Injector支持在k8s "),t("strong",[e._v("1.15+")]),e._v(" 版本部署。")]),e._v(" "),t("p",[e._v("更多Sermant Injector使用指南请参考"),t("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-injector.html"}},[e._v("Sermant Injector使用手册")]),e._v("。")],1),e._v(" "),t("h3",{attrs:{id:"动态配置中心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态配置中心"}},[e._v("#")]),e._v(" 动态配置中心")]),e._v(" "),t("p",[e._v("动态配置作为Sermant提供的基础功能，该功能允许Sermant动态地从配置中心拉取配置以实现丰富多样的服务治理能力，例如标签路由、流控等。在开启该功能时，需要依赖动态配置中心，Sermant目前支持三种动态配置中心："),t("a",{attrs:{href:"https://github.com/apache/zookeeper",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zookeeper"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"https://github.com/apache/servicecomb-kie",target:"_blank",rel:"noopener noreferrer"}},[e._v("ServiceComb Kie"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"https://nacos.io/zh-cn/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nacos"),t("OutboundLink")],1),e._v("。如不开启Sermant动态配置能力，动态配置中心可无需部署。")]),e._v(" "),t("p",[e._v("更多动态配置中心使用指南请参考"),t("RouterLink",{attrs:{to:"/zh/document/user-guide/configuration-center.html"}},[e._v("动态配置中心使用手册")]),e._v("。")],1),e._v(" "),t("h2",{attrs:{id:"编译构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译构建"}},[e._v("#")]),e._v(" 编译构建")]),e._v(" "),t("h3",{attrs:{id:"方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方式"}},[e._v("#")]),e._v(" 方式")]),e._v(" "),t("p",[t("strong",[e._v("Sermant")]),e._v("项目基于Maven进行编译构建，其中包含以下几种profile，对应不同使用场景：")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("agent")]),e._v(": 编译打包核心功能和稳定插件")]),e._v(" "),t("li",[t("em",[e._v("release")]),e._v(": 发布构建产物到中央仓库")]),e._v(" "),t("li",[t("em",[e._v("test")]),e._v(": 编译打包所有项目模块")])]),e._v(" "),t("p",[e._v("在Sermant项目根目录下执行以下"),t("em",[e._v("maven")]),e._v("命令，对"),t("strong",[e._v("Sermant")]),e._v("工程使用"),t("em",[e._v("agent")]),e._v("进行打包：")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("mvn clean package "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-DskipTests")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Pagent")]),e._v("\n")])])]),t("p",[e._v("命令执行完毕后，工程目录下将生成一个形如"),t("code",[e._v("sermant-agent-x.x.x")]),e._v("的文件夹和形如"),t("code",[e._v("sermant-agent-x.x.x.tar.gz")]),e._v("的压缩文件，后者为"),t("strong",[e._v("Sermant")]),e._v("的产品包，前者则为产品包解压后的内容。")]),e._v(" "),t("h3",{attrs:{id:"产品目录说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#产品目录说明"}},[e._v("#")]),e._v(" 产品目录说明")]),e._v(" "),t("p",[t("code",[e._v("sermant-agent-x.x.x")]),e._v("目录下包含以下内容")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("agent")]),e._v(": 包含sermant-agent相关内容\n"),t("ul",[t("li",[t("em",[e._v("config")]),e._v(": 包含"),t("strong",[e._v("Sermant")]),e._v("配置文件")]),e._v(" "),t("li",[t("em",[e._v("god")]),e._v("：包含"),t("strong",[e._v("Sermant")]),e._v("的核心接口包")]),e._v(" "),t("li",[t("em",[e._v("core")]),e._v(": 包含"),t("strong",[e._v("Sermant")]),e._v("的核心框架包")]),e._v(" "),t("li",[t("em",[e._v("implement")]),e._v(": 包含"),t("strong",[e._v("Sermant")]),e._v("核心功能实现包")]),e._v(" "),t("li",[t("em",[e._v("common")]),e._v(": 包含"),t("strong",[e._v("Sermant")]),e._v("公共依赖包")]),e._v(" "),t("li",[t("em",[e._v("pluginPackage")]),e._v(": 包含各服务治理功能插件包以及配置文件等")]),e._v(" "),t("li",[t("em",[e._v("sermant-agent.jar")]),e._v(": "),t("strong",[e._v("Sermant")]),e._v("入口包，"),t("code",[e._v("premain")]),e._v("和"),t("code",[e._v("agentmain")]),e._v("方式启动的入口")])])]),e._v(" "),t("li",[t("em",[e._v("server")]),e._v(": 包含"),t("strong",[e._v("Sermant")]),e._v("的服务端Sermant Backend。")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);