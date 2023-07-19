(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{527:function(t,e,r){"use strict";r.r(e);var v=r(26),a=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"性能基准测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能基准测试"}},[t._v("#")]),t._v(" 性能基准测试")]),t._v(" "),e("p",[t._v("本文档包含Sermant性能的基准测试结果(持续更新)。")]),t._v(" "),e("h2",{attrs:{id:"标签路由插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签路由插件"}},[t._v("#")]),t._v(" 标签路由插件")]),t._v(" "),e("p",[t._v("我们使用 "),e("a",{attrs:{href:"https://github.com/huaweicloud/Sermant-examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sermant-examples"),e("OutboundLink")],1),t._v(" 仓库中的作为基准应用进行性能测试，以说明Sermant的"),e("RouterLink",{attrs:{to:"/zh/document/plugin/router.html"}},[t._v("service-router标签路由插件")]),t._v("挂载至应用上的性能表现。")],1),t._v(" "),e("h3",{attrs:{id:"部署场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署场景"}},[t._v("#")]),t._v(" 部署场景")]),t._v(" "),e("p",[t._v("本次测试我们将上述仓库中的 "),e("a",{attrs:{href:"https://github.com/huaweicloud/Sermant-examples/tree/main/grace-demo/spring-grace-nacos-demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Cloud应用"),e("OutboundLink")],1),t._v(" 部署至容器环境中:")]),t._v(" "),e("ul",[e("li",[t._v("nacos-rest-consumer，部署1个Pod，挂载Sermant的service-router插件。该服务作为入口服务，根据动态配置中心下发的标签规则来筛选下游实例进行调用。本次测试将监控该服务的性能表现。")]),t._v(" "),e("li",[t._v("nacos-rest-provider，部署3个Pod，挂载Sermant的service-router插件，并且不同的Pod配置的不同的标签以供服务消费者进行筛选。该服务作为nacos-rest-consumer的服务提供者。")]),t._v(" "),e("li",[t._v("nacos-rest-data，部署1个Pod，不挂载Sermant，该服务作为作为nacos-rest-provider的服务提供者。")])]),t._v(" "),e("p",[t._v("该部署场景中，服务调用关系如下：")]),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/test_router.jpg"}}),t._v(" "),e("p",[t._v("我们向动态配置中心下发合法的路由插件规则，使得nacos-rest-consumer的请求按标签路由规则发送到指定的nacos-rest-provider实例。")]),t._v(" "),e("p",[t._v("另外，本次测试的基线对照组，所有应用均不挂载Sermant。")]),t._v(" "),e("h3",{attrs:{id:"部署环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署环境"}},[t._v("#")]),t._v(" 部署环境")]),t._v(" "),e("p",[t._v("本次测试使用华为云容器引擎CCE进行应用部署，K8s集群的ECS节点数量为2个，规格如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("规格：通用计算型｜16vCPUs｜32GiB｜s6.4xlarge.2\nDocker Version: v18.09.9\nKubernetes Version: v1.23\n")])])]),e("p",[t._v("K8s中所有应用Pod的规格一致，均为"),e("code",[t._v("4vCPUs|8GiB")]),t._v("。")]),t._v(" "),e("p",[t._v("Sermant版本："),e("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/releases/tag/v1.1.0",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("Release v1.1.0")]),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"测试结果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试结果"}},[t._v("#")]),t._v(" 测试结果")]),t._v(" "),e("p",[t._v("使用Jmeter对nacos-rest-consumer进行并发调用，分别模拟50用户、目标1000tps，以及100用户、目标2000tps。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("并发线程数")]),t._v(" "),e("th",[t._v("CPU(基线/挂载Sermant/差异)")]),t._v(" "),e("th",[t._v("Heap内存")]),t._v(" "),e("th",[t._v("Metaspace内存")]),t._v(" "),e("th",[t._v("P90(ms)")]),t._v(" "),e("th",[t._v("P95(ms)")]),t._v(" "),e("th",[t._v("Throughout(/s)")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("50")]),t._v(" "),e("td",[t._v("13.8% / 16.9% / 3.1%")]),t._v(" "),e("td",[t._v("92.7M / 122.5M /  29.8M")]),t._v(" "),e("td",[t._v("56.8M / 66.6M / 9.8M")]),t._v(" "),e("td",[t._v("34ms / 34ms / 0")]),t._v(" "),e("td",[t._v("35ms / 36ms / 2.8%")]),t._v(" "),e("td",[t._v("992.8 / 986.4 / -0.6%")])]),t._v(" "),e("tr",[e("td",[t._v("100")]),t._v(" "),e("td",[t._v("26.9% / 32.5% / 5.6%")]),t._v(" "),e("td",[t._v("150.4M / 183.5M / 33.1M")]),t._v(" "),e("td",[t._v("56.6M / 66.8M / 10.2M")]),t._v(" "),e("td",[t._v("34ms / 35ms / 2.9%")]),t._v(" "),e("td",[t._v("35ms / 38ms / 7.9%")]),t._v(" "),e("td",[t._v("1980.4 / 1965.4 / -0.7%")])])])]),t._v(" "),e("h3",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("Sermant标签路由插件对于宿主应用的CPU占用率、内存占用、吞吐量以及时延影响较低，额外消耗的资源主要用于请求过程中路由规则的匹配和实例的筛选。")]),t._v(" "),e("h2",{attrs:{id:"离群实例摘除插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#离群实例摘除插件"}},[t._v("#")]),t._v(" 离群实例摘除插件")]),t._v(" "),e("p",[t._v("我们使用 "),e("a",{attrs:{href:"https://github.com/huaweicloud/Sermant-examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sermant-examples"),e("OutboundLink")],1),t._v(" 仓库中的作为基准应用进行性能测试，以说明Sermant的"),e("RouterLink",{attrs:{to:"/zh/document/plugin/removal.html"}},[t._v("service-removal离群实例摘除插件")]),t._v("挂载至应用上的性能表现。")],1),t._v(" "),e("h3",{attrs:{id:"部署场景-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署场景-2"}},[t._v("#")]),t._v(" 部署场景")]),t._v(" "),e("p",[t._v("本次测试我们将上述仓库中的 "),e("a",{attrs:{href:"https://github.com/huaweicloud/Sermant-examples/tree/main/grace-demo/spring-grace-nacos-demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Cloud应用"),e("OutboundLink")],1),t._v(" 部署至容器环境中:")]),t._v(" "),e("ul",[e("li",[t._v("nacos-rest-consumer，部署1个Pod，挂载Sermant的service-removal插件。该服务作为入口服务，离群实例摘除插件挂载于该插件上，会对异常的nacos-rest-provider实例做摘除操作，避免请求调用至状态异常的实例。本次测试将监控该服务的性能表现。")]),t._v(" "),e("li",[t._v("nacos-rest-provider，部署3个Pod，不挂载Sermant。该服务作为nacos-rest-consumer的服务提供者。")]),t._v(" "),e("li",[t._v("nacos-rest-data，部署1个Pod，不挂载Sermant，该服务作为作为nacos-rest-provider的服务提供者。")])]),t._v(" "),e("p",[t._v("该部署场景中，服务调用关系如下：")]),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/test_removal.jpg"}}),t._v(" "),e("p",[t._v("我们在离群实例摘除插件中配置合法的实例摘除规则，使得nacos-rest-consumer将状态异常的实例从服务发现列表中删除。")]),t._v(" "),e("p",[t._v("另外，本次测试的基线对照组，所有应用均不挂载Sermant。")]),t._v(" "),e("h3",{attrs:{id:"部署环境-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署环境-2"}},[t._v("#")]),t._v(" 部署环境")]),t._v(" "),e("p",[t._v("本次测试使用华为云容器引擎CCE进行应用部署，K8s集群的ECS节点数量为2个，规格如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("规格：通用计算型｜16vCPUs｜32GiB｜s6.4xlarge.2\nDocker Version: v18.09.9\nKubernetes Version: v1.23\n")])])]),e("p",[t._v("K8s中所有应用Pod的规格一致，均为"),e("code",[t._v("4vCPUs|8GiB")]),t._v("。")]),t._v(" "),e("p",[t._v("Sermant版本："),e("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/releases/tag/v1.1.0",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("Release v1.1.0")]),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"测试结果-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试结果-2"}},[t._v("#")]),t._v(" 测试结果")]),t._v(" "),e("p",[t._v("使用Jmeter对nacos-rest-consumer进行并发调用，分别模拟50用户、目标1000tps，以及100用户、目标2000tps。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("并发线程数")]),t._v(" "),e("th",[t._v("CPU(基线/挂载Sermant/差异)")]),t._v(" "),e("th",[t._v("Heap内存")]),t._v(" "),e("th",[t._v("Metaspace内存")]),t._v(" "),e("th",[t._v("P90(ms)")]),t._v(" "),e("th",[t._v("P95(ms)")]),t._v(" "),e("th",[t._v("Throughout(/s)")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("50")]),t._v(" "),e("td",[t._v("13.8% / 14.3% / 0.5%")]),t._v(" "),e("td",[t._v("92.7M / 105.7M /  13.0M")]),t._v(" "),e("td",[t._v("56.8M / 65.5M / 8.7M")]),t._v(" "),e("td",[t._v("34ms / 34ms / 0")]),t._v(" "),e("td",[t._v("35ms / 34ms / -2.9%")]),t._v(" "),e("td",[t._v("992.8 / 993.5 / 0.1%")])]),t._v(" "),e("tr",[e("td",[t._v("100")]),t._v(" "),e("td",[t._v("26.9% / 28.2% / 0.3%")]),t._v(" "),e("td",[t._v("150.4M /  167M / 16.6M")]),t._v(" "),e("td",[t._v("56.6M / 65.5M / 8.9M")]),t._v(" "),e("td",[t._v("34ms / 34ms / 0")]),t._v(" "),e("td",[t._v("34ms / 34ms / 0")]),t._v(" "),e("td",[t._v("1980.4 / 1984.5 /  0.1%")])])])]),t._v(" "),e("h3",{attrs:{id:"总结-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结-2"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("Sermant离群实例摘除插件对于宿主应用的CPU占用率、内存占用、吞吐量以及时延影响非常轻微，额外的资源消耗主要用于请求成功率的统计以及离群实例的摘除过程，对请求过程基本无影响。")])],1)}),[],!1,null,null,null);e.default=a.exports}}]);