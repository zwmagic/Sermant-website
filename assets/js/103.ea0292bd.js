(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{550:function(e,a,t){"use strict";t.r(a);var s=t(26),r=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"动态配置中心使用手册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态配置中心使用手册"}},[e._v("#")]),e._v(" 动态配置中心使用手册")]),e._v(" "),a("p",[e._v("本文介绍动态配置中心在Sermant使用中的场景、模型介绍以及如何使用。")]),e._v(" "),a("h2",{attrs:{id:"动态配置中心在sermant的场景和定位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态配置中心在sermant的场景和定位"}},[e._v("#")]),e._v(" 动态配置中心在Sermant的场景和定位")]),e._v(" "),a("p",[e._v("动态配置中心为Sermant动态配置功能配套组件，该功能允许Sermant从动态配置中心拉取配置以实现丰富多样的服务治理能力。用户可按需开启动态配置能力并部署动态配置中心。")]),e._v(" "),a("p",[e._v("配置中心使得Sermant在静态配置的基础上，具备了动态配置的关键能力，解决了前者提供的配置不可改变的问题，这是Sermant的服务治理多样化的实现基础。例如，")]),e._v(" "),a("ul",[a("li",[e._v("在流控插件中，流量标记和流控规则的配置和下发都是通过Sermant动态配置中心作为媒介来实现的动态流量控制；")]),e._v(" "),a("li",[e._v("在路由插件中，标签路由规则的配置下发也是通过这套动态配置能力得以生效。")])]),e._v(" "),a("p",[e._v("由于实时配置中心这块业界已有很多成熟的开源产品，因此Sermant本身并不提供配置中心的单独实现，而是通过对开源的配置中心进行集成，以达到服务治理规则可实时动态配置的业务目标。")]),e._v(" "),a("p",[e._v("在具体实现上，Sermant Agent内部定义了一套动态配置的通用接口。基于这种架构，")]),e._v(" "),a("ul",[a("li",[e._v("用户通过Sermant Agent的配置，来决定Sermant实际对接的配置中心类型。也可以在运维场景中，根据各服务治理插件的使用手册，直接操作动态配置中心，以达到动态配置的业务目标。")]),e._v(" "),a("li",[e._v("开发者在Plugin开发中，只需要对接Sermant动态配置的通用接口，即可实现动态配置的功能，而不需要关注动态配置中心本身的各种选型和实现。")])]),e._v(" "),a("p",[e._v("以下架构图说明了该架构的原理。")]),e._v(" "),a("MyImage",{attrs:{src:"/docs-img/dynamic-configuration-center.png"}}),e._v(" "),a("h2",{attrs:{id:"参数配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数配置"}},[e._v("#")]),e._v(" 参数配置")]),e._v(" "),a("p",[e._v("动态配置中心的配置，请参见对应的开源动态配置中心 (如"),a("a",{attrs:{href:"https://zookeeper.apache.org/releases.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZooKeeper"),a("OutboundLink")],1),e._v(" 、"),a("a",{attrs:{href:"https://servicecomb.apache.org/cn/release/kie-downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ServiceComb Kie"),a("OutboundLink")],1),e._v("、"),a("a",{attrs:{href:"https://github.com/alibaba/nacos/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nacos"),a("OutboundLink")],1),e._v(") 。本文中不作详细赘述。")]),e._v(" "),a("p",[e._v("首先，Sermant Agent的产品包"),a("code",[e._v("agent/config/config.properties")]),e._v("中配置"),a("code",[e._v("agent.service.dynamic.config.enable=true")]),e._v("，将"),a("strong",[e._v("启用动态配置服务")]),e._v("。其他Sermant Agent中对应的动态配置中心参数，也都可以在该文件中进行配置。")]),e._v(" "),a("h2",{attrs:{id:"sermant动态配置中心模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sermant动态配置中心模型"}},[e._v("#")]),e._v(" Sermant动态配置中心模型")]),e._v(" "),a("p",[e._v("以Sermant Agent中的"),a("a",{attrs:{href:"https://github.com/sermant-io/Sermant/blob/develop/sermant-agentcore/sermant-agentcore-core/src/main/java/io/sermant/core/service/dynamicconfig/api/KeyGroupService.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("KeyGroupService.publishConfig"),a("OutboundLink")],1),e._v("接口函数说明Sermant中的配置模型。")]),e._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n * 设置组下某个键的配置值\n *\n * @param key     键\n * @param group   组\n * @param content 配置值\n * @return 是否操作成功\n */")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("boolean")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("publishConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("在上述例子中可见，在Sermant Agent中确定配置项的两个参数分别是：")]),e._v(" "),a("ul",[a("li",[e._v("key: 最小配置单元的键值。")]),e._v(" "),a("li",[e._v("group: 组，类似key的前缀。Sermant主要是通过Group来对接一些配置中心的租户隔离功能。")])]),e._v(" "),a("p",[e._v("对于不同的配置中心，以group和key有不同的匹配模型。下文中详细说明。")]),e._v(" "),a("p",[e._v("对于使用者来说，使用动态配置中心需要在插件中开发过程中获取DynamicConfigService的实例，并根据自身场景调用"),a("code",[e._v("DynamicConfigService")]),e._v("提供的各种抽象接口来进行相应的服务治理。详细的API接口的解析以及开发指南可参考开发者指南中的"),a("RouterLink",{attrs:{to:"/zh/document/developer-guide/dynamic-config-func.html"}},[e._v("动态配置功能开发指导")]),e._v("。")],1),e._v(" "),a("h2",{attrs:{id:"sermant-基于不同动态配置中心的配置模型实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sermant-基于不同动态配置中心的配置模型实现"}},[e._v("#")]),e._v(" Sermant 基于不同动态配置中心的配置模型实现")]),e._v(" "),a("p",[e._v("以下章节讨论几个配置中心的典型实现。通过理解该模型实现，用户可以理解如何在不通配置中心找到对应的配置项，以及进行动态配置以达到服务治理管理的目标。")]),e._v(" "),a("h3",{attrs:{id:"基于-zookeeper-的配置模型实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-zookeeper-的配置模型实现"}},[e._v("#")]),e._v(" 基于 ZooKeeper 的配置模型实现")]),e._v(" "),a("p",[e._v("对于"),a("code",[e._v("ZooKeeper")]),e._v("服务器来说，所谓的动态配置就是"),a("code",[e._v("ZooKeeper")]),e._v("节点的值，至于"),a("code",[e._v("Key")]),e._v("和"),a("code",[e._v("Group")]),e._v("应当作为构建节点路径的元素。考虑到"),a("code",[e._v("Group")]),e._v("包含区别使用者的信息，应当作为节点路径的前缀，这样"),a("code",[e._v("Key")]),e._v("值则作为后半部分存在：")]),e._v(" "),a("div",{staticClass:"language-txt extra-class"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[e._v("/${group}/${key} -> ${value}\n")])])]),a("h3",{attrs:{id:"基于-servicecomb-kie-的配置模型实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-servicecomb-kie-的配置模型实现"}},[e._v("#")]),e._v(" 基于 ServiceComb Kie 的配置模型实现")]),e._v(" "),a("p",[e._v("对于"),a("code",[e._v("Kie")]),e._v("服务来说，所谓动态配置就是"),a("code",[e._v("Kie")]),e._v("配置的键值，"),a("code",[e._v("Kie")]),e._v("是基于标签去查询关联配置， 至于"),a("code",[e._v("Key")]),e._v("与"),a("code",[e._v("Group")]),e._v("则是关联配置的元素。"),a("code",[e._v("Key")]),e._v("即配置的键的名称，而"),a("code",[e._v("Group")]),e._v("则是关联"),a("code",[e._v("Key")]),e._v("的标签， 每一个"),a("code",[e._v("Key")]),e._v("都可配置一个或者多个标签，其格式往往如下:")]),e._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[e._v("{\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('  "key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v('"keyName",                # 配置键')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('  "value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v('"value",                # 配置值')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('  "labels"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("{")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('    "service"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v('"serviceName"     #标签，kv形式，支持一个或者多个')]),e._v("\n  },\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('  "status"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v('"enabled"')]),e._v("\n}\n")])])]),a("p",[e._v("相对于"),a("code",[e._v("Zookeeper")]),e._v(", "),a("code",[e._v("Kie")]),e._v("更专注于"),a("code",[e._v("Group")]),e._v(", 其传值格式也有所不同，"),a("code",[e._v("Kie")]),e._v("的传值格式如下:")]),e._v(" "),a("div",{staticClass:"language-txt extra-class"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[e._v("groupKey1=groupValue1[&groupKey2=groupVaue2...]\n")])])]),a("blockquote",[a("p",[e._v("其中"),a("code",[e._v("groupKey")]),e._v("为标签键， "),a("code",[e._v("groupValue")]),e._v("则为标签值，多个标签使用&拼接；"),a("code",[e._v("Group")]),e._v("可通过"),a("code",[e._v("LabelGroupUtils#createLabelGroup")]),e._v("生成")]),e._v(" "),a("p",[a("strong",[e._v("特别说明：")])]),e._v(" "),a("p",[e._v("若传入的"),a("code",[e._v("Group")]),e._v("非以上格式，则会默认添加标签"),a("code",[e._v("GROUP=传入Group")])])]),e._v(" "),a("h3",{attrs:{id:"基于-nacos-的配置模型实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-nacos-的配置模型实现"}},[e._v("#")]),e._v(" 基于 Nacos 的配置模型实现")]),e._v(" "),a("p",[e._v("对于"),a("code",[e._v("Nacos")]),e._v("服务来说，所谓动态配置就是"),a("code",[e._v("Nacos")]),e._v("的配置值，"),a("code",[e._v("Nacos")]),e._v("本身包含"),a("code",[e._v("namespaceId")]),e._v("、"),a("code",[e._v("group")]),e._v("和"),a("code",[e._v("dataId")]),e._v("。其中"),a("code",[e._v("namespaceId")]),e._v("默认取值为"),a("code",[e._v("agent/config/config.properties")]),e._v("中的"),a("code",[e._v("service.meta.project")]),e._v("即指定服务命名空间；"),a("code",[e._v("group")]),e._v("与动态配置核心的"),a("code",[e._v("group")]),e._v("保持一致；"),a("code",[e._v("dataId")]),e._v("设置为动态配置核心的"),a("code",[e._v("Key")]),e._v("即配置的键名称，其格式如下:")]),e._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[e._v("{\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('    "group"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v('"Group", \t\t\t# 配置组')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('    "dataId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v('"Key",  \t\t\t# 配置键')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('    "content"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v('"config", \t\t# 配置值')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('    "namespaceId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v('"default"\t# 指定服务命名空间')]),e._v("\n}\n")])])]),a("p",[a("code",[e._v("Nacos")]),e._v("对于"),a("code",[e._v("group")]),e._v("和"),a("code",[e._v("dataId")]),e._v("的命名格式要求如下，具体参考"),a("a",{attrs:{href:"https://nacos.io/zh-cn/docs/sdk.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nacos文档"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("dataId")]),e._v('只允许英文字符和4种特殊字符（"."、":"、"-"、"_"），不超过256字节。')]),e._v(" "),a("li",[a("code",[e._v("group")]),e._v('只允许英文字符和4种特殊字符（"."、":"、"-"、"_"），不超过128字节。')])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("特别说明：")])]),e._v(" "),a("p",[e._v("若传入的"),a("code",[e._v("group")]),e._v("包含"),a("code",[e._v("=")]),e._v("、"),a("code",[e._v("&")]),e._v("、"),a("code",[e._v("/")]),e._v("三种非法字符时，动态配置核心将自动将其转换为合法字符：\n"),a("code",[e._v("=")]),e._v("转换为"),a("code",[e._v(":")]),e._v("、"),a("code",[e._v("&")]),e._v("转换为"),a("code",[e._v("_")]),e._v("、"),a("code",[e._v("/")]),e._v("转换为"),a("code",[e._v(".")]),e._v("。")])]),e._v(" "),a("h2",{attrs:{id:"动态配置中心支持的组件及版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态配置中心支持的组件及版本"}},[e._v("#")]),e._v(" 动态配置中心支持的组件及版本")]),e._v(" "),a("p",[e._v("目前Sermant支持的配置中心组件为:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://zookeeper.apache.org/releases.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZooKeeper"),a("OutboundLink")],1),e._v("，使用版本为3.6.3。")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://servicecomb.apache.org/cn/release/kie-downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ServiceComb Kie"),a("OutboundLink")],1),e._v("，使用的版本为0.2.0。")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/alibaba/nacos/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nacos"),a("OutboundLink")],1),e._v("，使用版本为2.1.0。")])]),e._v(" "),a("h2",{attrs:{id:"启动和结果验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动和结果验证"}},[e._v("#")]),e._v(" 启动和结果验证")]),e._v(" "),a("p",[e._v("本教程使用"),a("a",{attrs:{href:"https://github.com/sermant-io/Sermant-examples/tree/main/first-plugin-demo",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sermant-examples"),a("OutboundLink")],1),e._v("仓库中的Demo插件和微服务来进行动态配置能力的演示，该插件中配置了监听器以监听动态配置变化。")]),e._v(" "),a("h3",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[e._v("#")]),e._v(" 准备工作")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/sermant-io/Sermant-examples/releases/download/v1.4.0/sermant-examples-first-plugin-demo-1.4.0.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载"),a("OutboundLink")],1),e._v(" Demo二进制产物压缩包")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://zookeeper.apache.org/releases.html#download",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载"),a("OutboundLink")],1),e._v(" ZooKeeper服务端")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://servicecomb.apache.org/cn/release/kie-downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载"),a("OutboundLink")],1),e._v(" Kie服务端")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/alibaba/nacos/releases/download/2.1.0/nacos-server-2.1.0.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载"),a("OutboundLink")],1),e._v(" Nacos服务端")])]),e._v(" "),a("h3",{attrs:{id:"获取demo二进制产物"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取demo二进制产物"}},[e._v("#")]),e._v(" 获取Demo二进制产物")]),e._v(" "),a("p",[e._v("解压Demo二进制产物压缩包，即可得到"),a("code",[e._v("agent\\")]),e._v("目录文件。")]),e._v(" "),a("h3",{attrs:{id:"zookeeper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper"}},[e._v("#")]),e._v(" ZooKeeper")]),e._v(" "),a("p",[e._v("启动ZooKeeper服务端")]),e._v(" "),a("h4",{attrs:{id:"demo微服务启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo微服务启动"}},[e._v("#")]),e._v(" Demo微服务启动")]),e._v(" "),a("p",[e._v("修改"),a("code",[e._v("agent\\config\\config.properties")]),e._v("文件中的配置项，指定配置中心的类型和服务端地址：")]),e._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 指定配置中心的服务端地址")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("dynamic.config.serverAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("127.0.0.1:2181")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 指定动态配置中心类型, 取值范围为NOP(无实现)、ZOOKEEPER、KIE、NACOS")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("dynamic.config.dynamicConfigType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("ZOOKEEPER")]),e._v("\n")])])]),a("p",[e._v("在"),a("code",[e._v("agent")]),e._v("目录执行以下命令挂载sermant-agent启动Demo微服务:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("java")]),e._v(" -javaagent:sermant-agent.jar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-jar")]),e._v(" Application.jar\n")])])]),a("h4",{attrs:{id:"发布配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布配置"}},[e._v("#")]),e._v(" 发布配置")]),e._v(" "),a("p",[e._v("使用ZooKeeper命令行工具或可视化工具发布配置。此处以命令行工具为例，执行以下命令：")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("create /app"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default\ncreate /app"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default/demo "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"test"')]),e._v("\n")])])]),a("p",[e._v("其中"),a("code",[e._v("app=default")]),e._v("即为group的值，"),a("code",[e._v("demo")]),e._v("即为key值，"),a("code",[e._v("test")]),e._v("为value值。")]),e._v(" "),a("p",[e._v("创建节点数据成功后，即成功在配置中心发布了动态配置。")]),e._v(" "),a("h4",{attrs:{id:"验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[e._v("#")]),e._v(" 验证")]),e._v(" "),a("p",[e._v("观察Demo微服务控制台是否包含以下日志输出：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("插件配置项发生变化，配置项值为: test\n")])])]),a("p",[e._v("如果日志输出无误，则说明动态配置发布成功，Sermant Agent已监听到动态配置。")]),e._v(" "),a("h3",{attrs:{id:"kie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kie"}},[e._v("#")]),e._v(" Kie")]),e._v(" "),a("p",[e._v("启动Kie服务端。")]),e._v(" "),a("h4",{attrs:{id:"demo微服务启动-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo微服务启动-2"}},[e._v("#")]),e._v(" Demo微服务启动")]),e._v(" "),a("p",[e._v("修改"),a("code",[e._v("agent\\config\\config.properties")]),e._v("文件中的配置项，指定配置中心的类型和服务端地址：")]),e._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 指定配置中心的服务端地址")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("dynamic.config.serverAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("127.0.0.1:30110")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 指定动态配置中心类型, 取值范围为NOP(无实现)、ZOOKEEPER、KIE、NACOS")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("dynamic.config.dynamicConfigType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("KIE")]),e._v("\n")])])]),a("p",[e._v("在"),a("code",[e._v("agent")]),e._v("目录执行以下命令挂载sermant-agent启动Demo微服务:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("java")]),e._v(" -javaagent:sermant-agent.jar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-jar")]),e._v(" Application.jar\n")])])]),a("h4",{attrs:{id:"发布配置-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布配置-2"}},[e._v("#")]),e._v(" 发布配置")]),e._v(" "),a("p",[e._v("通过Kie发布以下动态配置：")]),e._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[e._v("{\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('  "key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v('"demo",          ')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('  "value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v('"test",              ')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('  "labels"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("{")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('    "app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v('"default"     ')]),e._v("\n  },\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v('  "status"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v('"enabled"')]),e._v("\n}\n")])])]),a("p",[e._v("其中"),a("code",[e._v("app=default")]),e._v("即为group的值，"),a("code",[e._v("demo")]),e._v("即为key值，"),a("code",[e._v("test")]),e._v("为value值。")]),e._v(" "),a("p",[e._v("创建节点数据成功后，即成功在配置中心发布了动态配置。")]),e._v(" "),a("h4",{attrs:{id:"验证-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证-2"}},[e._v("#")]),e._v(" 验证")]),e._v(" "),a("p",[e._v("观察Demo微服务控制台是否包含以下日志输出：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("插件配置项发生变化，配置项值为: test\n")])])]),a("p",[e._v("如果日志输出无误，则说明动态配置发布成功，Sermant Agent已监听到动态配置。")]),e._v(" "),a("h3",{attrs:{id:"nacos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nacos"}},[e._v("#")]),e._v(" Nacos")]),e._v(" "),a("p",[e._v("启动Nacos服务端")]),e._v(" "),a("h4",{attrs:{id:"demo微服务启动-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo微服务启动-3"}},[e._v("#")]),e._v(" Demo微服务启动")]),e._v(" "),a("p",[e._v("修改"),a("code",[e._v("agent\\config\\config.properties")]),e._v("文件中的配置项，指定配置中心的类型和服务端地址：")]),e._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 指定配置中心的服务端地址")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("dynamic.config.serverAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("127.0.0.1:8848")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 指定动态配置中心类型, 取值范围为NOP(无实现)、ZOOKEEPER、KIE、NACOS")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("dynamic.config.dynamicConfigType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("NACOS")]),e._v("\n")])])]),a("p",[e._v("在"),a("code",[e._v("agent")]),e._v("目录执行以下命令挂载sermant-agent启动Demo微服务:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("java")]),e._v(" -javaagent:sermant-agent.jar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-jar")]),e._v(" Application.jar\n")])])]),a("h4",{attrs:{id:"发布配置-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布配置-3"}},[e._v("#")]),e._v(" 发布配置")]),e._v(" "),a("p",[e._v("通过控制台命令行发布以下动态配置：")]),e._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("curl")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("-d 'dataId=demo' \\\n  -d 'group=app:default' \\\n  -d 'namespaceId=default' \\\n  -d 'content=test' \\\n  -X POST 'http://ip:port/nacos/v2/cs/config'")]),e._v("\n")])])]),a("p",[e._v("其中"),a("code",[e._v("app:default")]),e._v("即为经过合法化处理后的group值，"),a("code",[e._v("demo")]),e._v("即为key值，"),a("code",[e._v("test")]),e._v("为content值，"),a("code",[e._v("default")]),e._v("为指定服务命名空间即"),a("code",[e._v("agent/config/config.properties")]),e._v("中的"),a("code",[e._v("service.meta.project")]),e._v("。")]),e._v(" "),a("p",[e._v("创建节点数据成功后，即成功在配置中心发布了动态配置。")]),e._v(" "),a("h4",{attrs:{id:"验证-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证-3"}},[e._v("#")]),e._v(" 验证")]),e._v(" "),a("p",[e._v("观察Demo微服务控制台是否包含以下日志输出：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("插件配置项发生变化，配置项值为: test\n")])])]),a("p",[e._v("如果日志输出无误，则说明动态配置发布成功，Sermant Agent已监听到动态配置。")])],1)}),[],!1,null,null,null);a.default=r.exports}}]);