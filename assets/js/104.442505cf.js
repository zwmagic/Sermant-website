(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{551:function(t,a,e){"use strict";e.r(a);var s=e(26),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"流量标签透传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流量标签透传"}},[t._v("#")]),t._v(" 流量标签透传")]),t._v(" "),a("p",[t._v("本文介绍"),a("a",{attrs:{href:"https://github.com/sermant-io/Sermant/tree/develop/sermant-plugins/sermant-tag-transmission",target:"_blank",rel:"noopener noreferrer"}},[t._v("流量标签透传插件"),a("OutboundLink")],1),t._v("及其使用方式。")]),t._v(" "),a("h2",{attrs:{id:"功能介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能介绍"}},[t._v("#")]),t._v(" 功能介绍")]),t._v(" "),a("p",[t._v("流量标签在微服务流量治理的各个场景中发挥关键作用，我们可以通过不同的流量标签对流量进行分组，不同组别的流量施以不同的流量管理策略，例如全链路灰度发布、流控等场景。流量标签能够在流量治理领域发挥作用的一个关键前提是流量标签具备在整个调用链不中断地透传的能力。如下是一个HTTP报文中的请求头的示例，每一条header都可以作为一条流量标签，例如通过流量染色等方式自定义添加的"),a("code",[t._v("x-sermant-version: v1")]),t._v("，我们可以用它来表示该请求流量对应的版本信息。通过流量标签透传插件，可以将标签键为"),a("code",[t._v("x-sermant-version")]),t._v("的所有标签在整个调用链中全部透传下去，在全链路灰度发布、流控等场景发挥作用。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("// HTTP报文中的请求头示例\nGet /sermant/docs HTTP/1.1\nHost: sermant.io\nConnection: keep-alive\nContent-Length: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\nAccept: application/json, text/plain, */*\nOrigin: https://sermant.io\nUser-Agent: Mozilla/5.0\nContent-Type: application/json\nReferer: https://sermant.io\nAccept-Language: zh-CN,en-US"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("q")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),t._v("\nx-sermant-version: v1          // 自定义header，此处表示通过流量染色等方式添加了x-sermant-version: v1的标签\n")])])]),a("p",[t._v("本插件着手于解决流量标签在各种不同传媒介中进行透传的问题，包括HTTP协议、RPC协议、消息队列等，借助header、attachment等载体把流量标签往下游透传。除了解决流量标签在跨进程场景中的透传，还实现在同一服务实例的线程内和跨线程透传的能力，打通了全链路的流量标签透传传播路径。该插件在使用时按照标签透传配置会将HTTP的header、Dubbo的attachment、grpc的metadata、kafka消息的header等包含的需要透传的标签键值对在整个调用链中进行透传。")]),t._v(" "),a("p",[t._v("本插件只包含流量标签的透传，不包含流量染色能力。如果需要流量染色能力，请参考"),a("RouterLink",{attrs:{to:"/zh/document/plugin/router.html"}},[t._v("标签路由插件")]),t._v("的相关介绍。")],1),t._v(" "),a("h3",{attrs:{id:"快速开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[t._v("#")]),t._v(" 快速开始")]),t._v(" "),a("p",[t._v("本插件的快速上手使用教程可参考"),a("a",{attrs:{href:"#%E6%93%8D%E4%BD%9C%E5%92%8C%E7%BB%93%E6%9E%9C%E9%AA%8C%E8%AF%81"}},[t._v("操作和结果验证")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"适用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[t._v("#")]),t._v(" 适用场景")]),t._v(" "),a("p",[t._v("以下列出本插件可以适用的部分场景")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("全链路灰度发布")]),t._v(" "),a("p",[t._v("全链路灰度发布是一种软件发布策略，通过逐渐将新版本的应用程序或服务引入生产环境的方式，来确保稳定性和性能。这种方法可以最小化潜在问题的风险，因为我们可以逐步将新版本推送给一小部分用户或服务器，然后根据反馈逐渐扩大发布范围。")]),t._v(" "),a("p",[t._v("本插件可和Sermant的"),a("RouterLink",{attrs:{to:"/zh/document/plugin/router.html"}},[t._v("标签路由插件")]),t._v("配合，实现流量染色、流量标签透传以及按标签进行路由的全链路灰度发布解决方案。主要使用流程为：")],1),t._v(" "),a("p",[t._v("（1）利用标签路由插件的染色功能，给入口流量染色，添加灰度标签(可选步骤，亦可使用API网关来进行染色)；")]),t._v(" "),a("p",[t._v("（2）利用本插件的标签透传功能，将染色的灰度标签在调用链中进行透传；")]),t._v(" "),a("p",[t._v("（3）利用标签路由插件的路由功能，使得灰度流量在正确的灰度泳道中流动。")])]),t._v(" "),a("li",[a("p",[t._v("基于流量标签的精细化流控")]),t._v(" "),a("p",[t._v("流控是一种用于控制数据流量或请求频率的技术，旨在保护服务器、应用程序或服务免受过多请求或数据的压力，以确保它们能够正常运行且不会过载。")]),t._v(" "),a("p",[t._v("本插件可和Sermant的"),a("RouterLink",{attrs:{to:"/zh/document/plugin/flowcontrol.html"}},[t._v("流控插件")]),t._v("以及"),a("RouterLink",{attrs:{to:"/zh/document/plugin/router.html"}},[t._v("标签路由插件")]),t._v("配合，实现流量染色、流量标签透传以及按标签进行流量管理的流控解决方案。主要使用流程为：")],1),t._v(" "),a("p",[t._v("（1）利用标签路由插件的染色功能，给入口流量染色，添加流量分组标签(可选步骤，亦可使用API网关来进行染色)；")]),t._v(" "),a("p",[t._v("（2）利用本插件的标签透传功能，将染色的分组标签在调用链中进行透传；")]),t._v(" "),a("p",[t._v("（3）利用流控插件的限流、熔断等流控能力，对不同流量标签的流量进行精细化的流控策略配置。")])])]),t._v(" "),a("h2",{attrs:{id:"支持版本和限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持版本和限制"}},[t._v("#")]),t._v(" 支持版本和限制")]),t._v(" "),a("h3",{attrs:{id:"支持版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持版本"}},[t._v("#")]),t._v(" 支持版本")]),t._v(" "),a("p",[t._v("流量标签透传插件支持目前支持三类跨进程透传媒介：HTTP、RPC以及消息队列。目前支持的各组件版本如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("框架类型")]),t._v(" "),a("th",[t._v("版本")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Servlet")]),t._v(" "),a("td",[t._v("3.0+")])]),t._v(" "),a("tr",[a("td",[t._v("Jetty")]),t._v(" "),a("td",[t._v("8.x+")])]),t._v(" "),a("tr",[a("td",[t._v("Tomcat")]),t._v(" "),a("td",[t._v("7.x+")])]),t._v(" "),a("tr",[a("td",[t._v("Spring Framework")]),t._v(" "),a("td",[t._v("4.x+")])]),t._v(" "),a("tr",[a("td",[t._v("Apache HttpClient")]),t._v(" "),a("td",[t._v("3.x, 4.x")])]),t._v(" "),a("tr",[a("td",[t._v("OKHttp2")]),t._v(" "),a("td",[t._v("2.x")])]),t._v(" "),a("tr",[a("td",[t._v("HttpURLConnection")]),t._v(" "),a("td",[t._v("1.7.x+")])]),t._v(" "),a("tr",[a("td",[t._v("Dubbo")]),t._v(" "),a("td",[t._v("2.6.x, 2.7.x, 3.x")])]),t._v(" "),a("tr",[a("td",[t._v("GRPC")]),t._v(" "),a("td",[t._v("1.13+")])]),t._v(" "),a("tr",[a("td",[t._v("SOFARPC")]),t._v(" "),a("td",[t._v("5.x")])]),t._v(" "),a("tr",[a("td",[t._v("ServiceComb Java Chassis")]),t._v(" "),a("td",[t._v("2.x")])]),t._v(" "),a("tr",[a("td",[t._v("RocketMQ")]),t._v(" "),a("td",[t._v("4.8.x+, 5.x")])]),t._v(" "),a("tr",[a("td",[t._v("Kafka")]),t._v(" "),a("td",[t._v("1.x, 2.x, 3.x")])])])]),t._v(" "),a("h2",{attrs:{id:"操作和结果验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作和结果验证"}},[t._v("#")]),t._v(" 操作和结果验证")]),t._v(" "),a("p",[t._v("本节内容以SpringBoot示例微服务来介绍如何使用Sermant流量标签透传插件以及验证结果，本示例使用curl命令携带流量标签发起入口请求调用HTTP客户端应用，HTTP客户端应用再调用HTTP的服务端应用。在HTTP的服务端的返回结果中查看标签是否透传成功。")]),t._v(" "),a("h3",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/sermant-io/Sermant/releases/download/v2.0.0/sermant-2.0.0.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),a("OutboundLink")],1),t._v(" Sermant Release包（当前版本推荐2.0.0版本）")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/sermant-io/Sermant-examples/releases/download/v2.0.0/sermant-examples-tag-transmission-demo-2.0.0.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),a("OutboundLink")],1),t._v(" Demo二进制产物压缩包")])]),t._v(" "),a("h3",{attrs:{id:"步骤一-获取demo二进制产物"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤一-获取demo二进制产物"}},[t._v("#")]),t._v(" 步骤一：获取Demo二进制产物")]),t._v(" "),a("p",[t._v("解压Demo二进制产物压缩包，即可得到"),a("code",[t._v("http-client-demo.jar")]),t._v("和"),a("code",[t._v("http-server-demo.jar")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"步骤二-部署应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤二-部署应用"}},[t._v("#")]),t._v(" 步骤二：部署应用")]),t._v(" "),a("p",[t._v("（1）启动HTTP客户端应用")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# windows")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dagent_service_dynamic_config_enable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false -javaagent:"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent-x.x.x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent.jar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" http-client-demo.jar\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mac, linux")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dagent_service_dynamic_config_enable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false -javaagent:"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),t._v("/sermant-agent-x.x.x/agent/sermant-agent.jar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" http-client-demo.jar\n")])])]),a("p",[t._v("（2）启动HTTP服务端应用")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# windows")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dagent_service_dynamic_config_enable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false -javaagent:"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent-x.x.x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent.jar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" http-server-demo.jar\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mac, linux")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dagent_service_dynamic_config_enable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false -javaagent:"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),t._v("/sermant-agent-x.x.x/agent/sermant-agent.jar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" http-server-demo.jar\n")])])]),a("blockquote",[a("p",[t._v("说明：此处${path}为sermant-agent包所在路径。")])]),t._v(" "),a("h3",{attrs:{id:"步骤三-发起入口调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤三-发起入口调用"}},[t._v("#")]),t._v(" 步骤三：发起入口调用")]),t._v(" "),a("p",[t._v("执行下面的命令，携带流量标签"),a("code",[t._v("id: 888")]),t._v("发起入口调用，以HTTP方式调用http-client-demo，http-client-demo将调用http-server-demo，最后返回输出结果。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("// 执行命令发起入口调用，携带流量标签\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--request")]),t._v(" GET "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://127.0.0.1:9002/testHttpClient4'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--header")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id: 888'")]),t._v("\n// 返回结果\nHello World"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" This is HTTP server. Received Traffic Tag is "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("888")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("若结果如上输出，则说明流量标签透传生效，标签"),a("code",[t._v("id: 888")]),t._v("由入口请求经过http-client-demo透传至http-server-demo。")]),t._v(" "),a("h2",{attrs:{id:"参数配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数配置"}},[t._v("#")]),t._v(" 参数配置")]),t._v(" "),a("h3",{attrs:{id:"插件静态配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件静态配置"}},[t._v("#")]),t._v(" 插件静态配置")]),t._v(" "),a("p",[t._v("流量标签透传的静态配置文件位于Sermant构建的产品包下，可在"),a("code",[t._v("${path}/sermant-agent-x.x.x/agent/pluginPackage/tag-transmission/config/config.yaml")]),t._v("找到该插件的配置文件， 配置如下所示：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 流量标签在各种通道间(http/rpc/消息队列等)传递的配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tag.transmission.config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否开启流量标签透传功能, 默认为true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 需要透传的流量标签的key的匹配规则, 支持精确、前缀、后缀匹配")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchRule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 精确匹配规则，为列表形式。若列表中的某个元素与标签键相同，则表示该标签需要透传。示例值为["id", "name"]')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exact")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 前缀匹配规则，为列表形式。若列表中的某个元素是标签键的前缀，则表示该标签需要透传。示例值为["x-sermant-"]')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prefix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x-sermant-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 后缀匹配规则，为列表形式。若列表中的某个元素是标签键的后缀，则表示该标签需要透传。示例值为["-sermant"]')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("suffix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-sermant"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 跨线程传递标签的配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("crossthread.config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否需要在new Thread时透传流量标签，默认开启")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled-thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否需要在普通线程池创建新的线程任务时透传流量标签，默认开启")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled-thread-pool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否需要在定时线程池创建新的线程任务时透传流量标签，默认开启")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled-scheduler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),a("p",[t._v("以上示例配置表示，如果流量标签中携带了"),a("code",[t._v("id: 1")]),t._v("、"),a("code",[t._v("name: huawei")]),t._v("、"),a("code",[t._v("x-sermant-version")]),t._v("、"),a("code",[t._v("group-sermant")]),t._v("等符合精确匹配、前缀匹配、后缀匹配规则的标签键，则该标签键值对会在请求链路中透传。")]),t._v(" "),a("h3",{attrs:{id:"插件动态配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件动态配置"}},[t._v("#")]),t._v(" 插件动态配置")]),t._v(" "),a("p",[t._v("流量标签透传插件支持通过动态配置中心进行配置发布，配置发布可以参考"),a("a",{attrs:{href:"https://sermant.io/zh/document/user-guide/configuration-center.html#%E5%8F%91%E5%B8%83%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("动态配置中心使用手册"),a("OutboundLink")],1),t._v("。动态配置模型中的"),a("code",[t._v("group")]),t._v(", "),a("code",[t._v("key")]),t._v(", "),a("code",[t._v("content")]),t._v(" 分别对应如下：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("group")]),t._v(" "),a("p",[t._v("group为"),a("strong",[t._v("sermant/tag-transmission-plugin")]),t._v("，表示配置分组为流量标签透传插件")])]),t._v(" "),a("li",[a("p",[t._v("key")]),t._v(" "),a("p",[t._v("key为"),a("strong",[t._v("tag-config")]),t._v("，表示流量标签透传相关的配置节点")])]),t._v(" "),a("li",[a("p",[t._v("content")]),t._v(" "),a("p",[t._v("content为具体的流量标签透传配置内容。动态配置与静态配置中的"),a("code",[t._v("tag.transmission.config")]),t._v("一致，遵循yaml的格式，参数说明参考上文。在运行时动态修改透传规则时需将该配置刷新至动态配置中心。若直接删除配置，则关闭标签透传能力。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchRule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exact")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prefix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x-sermant-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("suffix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-sermant"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])]),t._v(" "),a("p",[t._v("每次动态配置成功下发后会覆盖原有静态配置或之前的动态配置，且立即生效。")])])}),[],!1,null,null,null);a.default=n.exports}}]);