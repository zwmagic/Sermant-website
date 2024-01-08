(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{540:function(t,e,a){"use strict";a.r(e);var r=a(26),s=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"注册迁移"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注册迁移"}},[t._v("#")]),t._v(" 注册迁移")]),t._v(" "),e("p",[t._v("本文介绍如何使用"),e("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/tree/develop/sermant-plugins/sermant-service-registry",target:"_blank",rel:"noopener noreferrer"}},[t._v("注册迁移插件"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"功能介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能介绍"}},[t._v("#")]),t._v(" 功能介绍")]),t._v(" "),e("p",[t._v("对于绝大多数企业客户来说，比较关心注册中心迁移过程的平滑性以及业务的连续性。注册迁移插件通过非侵入方式实现注册中心迁移的能力，让原本注册于Eureka、Nacos、Zookeeper、Consul等主流注册中心的微服务，非侵入地注册到\n"),e("a",{attrs:{href:"https://github.com/apache/servicecomb-service-center",target:"_blank",rel:"noopener noreferrer"}},[t._v("ServiceComb"),e("OutboundLink")],1),t._v("或"),e("a",{attrs:{href:"https://nacos.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nacos"),e("OutboundLink")],1),t._v("上。")]),t._v(" "),e("p",[e("strong",[t._v("搬迁示意图：")])]),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/registration-migration.jpg"}}),t._v(" "),e("p",[t._v("从上述搬迁示意图可知，搬迁的应用服务挂载了Sermant通过"),e("strong",[t._v("双注册")]),t._v("的方式将业务从旧注册中心快速迁移到新注册中心上。后续新开发的应用服务也可通过挂Sermant通过"),e("strong",[t._v("单注册")]),t._v("的方式注册到新的注册中心（注册逻辑不在新开发应用服务的SDK中而且通过注册迁移插件实现）。")]),t._v(" "),e("h2",{attrs:{id:"参数配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数配置"}},[t._v("#")]),t._v(" 参数配置")]),t._v(" "),e("h3",{attrs:{id:"sermant-agent配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sermant-agent配置"}},[t._v("#")]),t._v(" Sermant-agent配置")]),t._v(" "),e("p",[t._v("注册迁移插件需要在Sermant-agent中配置服务元数据（应用名、命名空间、版本号、环境、其它元数据），参考"),e("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-agent.html#sermant-agent使用参数配置"}},[t._v("Sermant-agent使用手册")]),t._v("。")],1),t._v(" "),e("ul",[e("li",[e("p",[t._v("service.meta.application: 应用名/组名，属于同一组的微服务才能进行服务发现。")])]),t._v(" "),e("li",[e("p",[t._v("service.meta.project: 命名空间，属于同一命名空间的微服务才能进行服务发现。")])]),t._v(" "),e("li",[e("p",[t._v("service.meta.version: 版本号，用来标识当前微服务的版本。")])]),t._v(" "),e("li",[e("p",[t._v("service.meta.environment: 环境，用来标识当前微服务所属环境，属于同一环境的微服务才能进行服务发现。")])]),t._v(" "),e("li",[e("p",[t._v("service.meta.parameters: 其它元数据，用来给当前微服务打标签，形如k1:v1，k2:v2。")])])]),t._v(" "),e("h3",{attrs:{id:"插件配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件配置"}},[t._v("#")]),t._v(" 插件配置")]),t._v(" "),e("p",[t._v("注册迁移插件需要按需修改插件配置文件，可在路径"),e("code",[t._v("${path}/sermant-agent-x.x.x/agent/pluginPackage/service-registry/config/config.yaml")]),t._v("找到该插件的配置文件，配置文件如下所示：")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("register.service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("registerType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SERVICE_COMB         "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新注册中心的类型，控制服务注册时采用哪种注册方式，不同注册中心有不同的注册实现。")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("address")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30100")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新注册中心地址。控制服务注册时注册到哪里。")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableSpringRegister")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# springcloud插件注册能力开关。开启后将作为Spring Cloud服务注册到新的注册中心。不能和dubbo插件注册能力开关同时开启。")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableDubboRegister")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("         "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# dubbo插件注册能力开关。开启后将作为dubbo服务注册到新的注册中心。不能和Spring插件注册能力开关同时开启。")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("openMigration")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("               "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注册迁移开关。开启后将拦截宿主服务原有的注册功能，只注册到新注册中心。")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("servicecomb.service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("heartbeatInterval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("              "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务实例心跳发送间隔。通过心跳监听服务实例的状态。")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sslEnabled")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("                  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ssl开关。控制是否开启SSL安全访问。")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("preferIpAddress")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("             "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否采用IP。 控制服务实例注册时采用IP注册还是采用域名注册。")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nacos.service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("                       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nacos验证账户。新的注册中心为nacos时，注册到时需要使用nacos验证账户。")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("                       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nacos验证账户。新的注册中心为nacos时，注册时需要使用nacos验证密码。")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("                      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nacos命名空间的ID值。控制nacos注册时注册到那个命名空间下，属于同一命名空间的微服务才能进行服务发现。")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("weight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("                          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务实例权重值。服务注册时使用。服务实例调用时，权重越高访问频率越高。")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clusterName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DEFAULT               "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 集群名称。服务注册、发现时使用。服务实例调用时只会调用调用同一个集群下的实例。")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ephemeral")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("                    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否是临时节点。服务注册时使用。服务下线后节点不需要存在时采用临时节点。")]),t._v("\n")])])]),e("p",[t._v("配置项说明如下:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数键")]),t._v(" "),e("th",[t._v("参数类型（所属注册中心）")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("默认值")]),t._v(" "),e("th",[t._v("是否必须")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("register.service.registerType")]),t._v(" "),e("td",[t._v("通用")]),t._v(" "),e("td",[t._v("新注册中心类型，目前支持NACOS/SERVICE_COMB。")]),t._v(" "),e("td",[t._v("SERVICE_COMB")]),t._v(" "),e("td",[t._v("是")])]),t._v(" "),e("tr",[e("td",[t._v("register.service.address")]),t._v(" "),e("td",[t._v("通用")]),t._v(" "),e("td",[t._v("注册服务地址，SERVICE_COMB：形如http://localhost:30100；NACOS：形如127.0.0.1:8848。")]),t._v(" "),e("td",[t._v("http://127.0.0.1:30100")]),t._v(" "),e("td",[t._v("是")])]),t._v(" "),e("tr",[e("td",[t._v("register.service.enableSpringRegister")]),t._v(" "),e("td",[t._v("通用")]),t._v(" "),e("td",[t._v("是否开启springcloud插件注册能力，springcloud框架需开启，dubbo框架需关闭。不能和enableDubboRegister同时开启。")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("是")])]),t._v(" "),e("tr",[e("td",[t._v("register.service.enableDubboRegister")]),t._v(" "),e("td",[t._v("通用")]),t._v(" "),e("td",[t._v("是否开启dubbo插件注册能力，dubbo框架需开启，springcloud框架需关闭。不能和enableSpringRegister同时开启。")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("是")])]),t._v(" "),e("tr",[e("td",[t._v("register.service.openMigration")]),t._v(" "),e("td",[t._v("通用")]),t._v(" "),e("td",[t._v("是否开启迁移功能，开启后将拦截宿主服务原有的注册功能，只注册到新注册中心。")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("SERVICE_COMB")])]),t._v(" "),e("tr",[e("td",[t._v("servicecomb.service.heartbeatInterval")]),t._v(" "),e("td",[t._v("SERVICE_COMB")]),t._v(" "),e("td",[t._v("服务实例心跳发送间隔（单位：秒）。")]),t._v(" "),e("td",[t._v("15")]),t._v(" "),e("td",[t._v("是")])]),t._v(" "),e("tr",[e("td",[t._v("servicecomb.service.sslEnabled")]),t._v(" "),e("td",[t._v("SERVICE_COMB")]),t._v(" "),e("td",[t._v("是否开启ssl安全访问。")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("是")])]),t._v(" "),e("tr",[e("td",[t._v("servicecomb.service.preferIpAddress")]),t._v(" "),e("td",[t._v("SERVICE_COMB")]),t._v(" "),e("td",[t._v("是否采用IP访问，控制服务实例注册时采用IP注册还是采用域名注册。")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("是")])]),t._v(" "),e("tr",[e("td",[t._v("nacos.service.username")]),t._v(" "),e("td",[t._v("NACOS")]),t._v(" "),e("td",[t._v("nacos验证账户，新的注册中心为nacos时，注册到时需要使用nacos验证账户。")]),t._v(" "),e("td",[t._v("<空>")]),t._v(" "),e("td",[t._v("否")])]),t._v(" "),e("tr",[e("td",[t._v("nacos.service.password")]),t._v(" "),e("td",[t._v("NACOS")]),t._v(" "),e("td",[t._v("nacos的验证密码，新的注册中心为nacos时，注册时需要使用nacos验证密码。")]),t._v(" "),e("td",[t._v("<空>")]),t._v(" "),e("td",[t._v("否")])]),t._v(" "),e("tr",[e("td",[t._v("nacos.service.namespace")]),t._v(" "),e("td",[t._v("NACOS")]),t._v(" "),e("td",[t._v("命名空间，nacos配置创建命名空间的id值。控制nacos注册时注册到那个命名空间下，属于同一命名空间的微服务才能进行服务发现。")]),t._v(" "),e("td",[t._v("<空>")]),t._v(" "),e("td",[t._v("否")])]),t._v(" "),e("tr",[e("td",[t._v("nacos.service.weight")]),t._v(" "),e("td",[t._v("NACOS")]),t._v(" "),e("td",[t._v("服务实例权重值。服务注册时使用。服务实例调用时，权重越高访问频率越高。")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("是")])]),t._v(" "),e("tr",[e("td",[t._v("nacos.service.clusterName")]),t._v(" "),e("td",[t._v("NACOS")]),t._v(" "),e("td",[t._v("集群名称。服务注册、发现时使用，服务实例调用时只会调用调用同一个集群下的实例。")]),t._v(" "),e("td",[t._v("DEFAULT")]),t._v(" "),e("td",[t._v("是")])]),t._v(" "),e("tr",[e("td",[t._v("nacos.service.ephemeral")]),t._v(" "),e("td",[t._v("NACOS")]),t._v(" "),e("td",[t._v("是否是临时节点，true为是，false为否。服务注册时使用，服务下线后节点不需要存在时采用临时节点。")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("是")])])])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("说明：")])]),t._v(" "),e("ul",[e("li",[t._v("nacos的group通过"),e("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-agent.html#sermant-agent使用参数配置"}},[t._v("Sermant-agent配置")]),t._v("的service.meta.application设置。")],1),t._v(" "),e("li",[t._v("nacos参数目前仅展示常用参数，其他参数项见"),e("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/blob/develop/sermant-plugins/sermant-service-registry/registry-common/src/main/java/com/huawei/registry/config/NacosRegisterConfig.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("NACOS配置类"),e("OutboundLink")],1),t._v("。")])])]),t._v(" "),e("h2",{attrs:{id:"关闭原注册中心心跳规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关闭原注册中心心跳规则"}},[t._v("#")]),t._v(" 关闭原注册中心心跳规则")]),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/offline-old-registration.png"}}),t._v(" "),e("p",[t._v("如上图所示，双注册上线稳定后需下线旧注册中心，注册迁移插件提供基于动态配置中心下发关闭原注册中心心跳机制的方法，以避免源源不断的错误日志输出。")]),t._v(" "),e("p",[t._v("请参考"),e("RouterLink",{attrs:{to:"/zh/document/user-guide/configuration-center.html#sermant动态配置中心模型"}},[t._v("动态配置中心使用手册")]),t._v("，配置内容如下：")],1),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content为"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"origin.__registry__.needClose: true"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"group"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app=${service.meta.application}&environment=${service.meta.environment}&service={spring.application.name}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"key"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sermant.agent.registry"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[e("strong",[t._v("说明：")]),t._v(" group为服务配置。配置时请将service.meta.application、service.meta.environment、spring.application.name修改为具体的值，其中service.meta.application、service.meta.environment的配置请参考"),e("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-agent.html#sermant-agent使用参数配置"}},[t._v("Sermant-agent使用手册")]),t._v(", spring.application.name为微服务名（即spring应用中配置的服务名）。服务配置说明参考"),e("a",{attrs:{href:"https://support.huaweicloud.com/devg-cse/cse_devg_0020.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSE配置中心概述"),e("OutboundLink")],1),t._v("。")],1)]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("注意 :")]),t._v(" 该操作为一次性操作，关闭注册中心心跳后，将无法开启，仅当应用实例重启才可恢复。")])]),t._v(" "),e("h2",{attrs:{id:"支持版本和限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持版本和限制"}},[t._v("#")]),t._v(" 支持版本和限制")]),t._v(" "),e("h3",{attrs:{id:"springcloud框架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#springcloud框架"}},[t._v("#")]),t._v(" SpringCloud框架")]),t._v(" "),e("p",[e("strong",[t._v("版本支持")]),t._v("：Edgware.SR2 - 2021.0.0")]),t._v(" "),e("p",[e("strong",[t._v("注册中心迁移支持类型")]),t._v("：")]),t._v(" "),e("table",[e("tr",[e("th",[t._v("原注册中心")]),e("th",[t._v("目标注册中心")]),e("th",[t._v("是否支持")])]),t._v(" "),e("tr",[e("td",{attrs:{rowspan:"2"}},[t._v("Eureka")]),e("td",[t._v("ServiceComb")]),t._v(" "),e("td",[t._v("✅")])]),t._v(" "),e("tr",[e("td",[t._v("Nacos")]),t._v(" "),e("td",[t._v("✅")])]),t._v(" "),e("tr",[e("td",{attrs:{rowspan:"2"}},[t._v("Consul")]),e("td",[t._v("ServiceComb")]),t._v(" "),e("td",[t._v("✅")])]),t._v(" "),e("tr",[e("td",[t._v("Nacos")]),t._v(" "),e("td",[t._v("✅")])]),t._v(" "),e("tr",[e("td",{attrs:{rowspan:"2"}},[t._v("Nacos")]),e("td",[t._v("ServiceComb")]),t._v(" "),e("td",[t._v("✅")])]),t._v(" "),e("tr",[e("td",[t._v("Nacos")]),t._v(" "),e("td",[t._v("✅")])]),t._v(" "),e("tr",[e("td",{attrs:{rowspan:"2"}},[t._v("Zookeeper")]),e("td",[t._v("ServiceComb")]),t._v(" "),e("td",[t._v("✅")])]),t._v(" "),e("tr",[e("td",[t._v("Nacos")]),t._v(" "),e("td",[t._v("✅")])])]),t._v(" "),e("p",[e("strong",[t._v("目标注册中心版本支持")]),t._v("：")]),t._v(" "),e("ul",[e("li",[t._v("ServiceComb：2.x")]),t._v(" "),e("li",[t._v("Nacos：2.x")])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("说明")]),t._v("：原注册中心版本和自身应用服务需使用的版本相关。")])]),t._v(" "),e("p",[t._v("限制：")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("关闭原注册中心心跳规则仅支持SpringCloud应用")])])]),t._v(" "),e("li",[e("p",[t._v("对应SpringCloud单注册场景，注册迁移插件会屏蔽掉所有原注册中心相关的bean，所以，请不要在业务代码中注入原注册中心相关的bean，否则会导致服务启动失败。")])])]),t._v(" "),e("h3",{attrs:{id:"dubbo框架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dubbo框架"}},[t._v("#")]),t._v(" Dubbo框架")]),t._v(" "),e("p",[e("strong",[t._v("框架支持")]),t._v("：2.6.x - 2.7.x")]),t._v(" "),e("p",[e("strong",[t._v("注册中心迁移支持类型")]),t._v("：")]),t._v(" "),e("table",[e("tr",[e("th",[t._v("原注册中心")]),e("th",[t._v("目标注册中心")]),e("th",[t._v("是否支持")])]),t._v(" "),e("tr",[e("td",{attrs:{rowspan:"2"}},[t._v("Nacos")]),e("td",[t._v("ServiceComb")]),t._v(" "),e("td",[t._v("✅")])]),t._v(" "),e("tr",[e("td",[t._v("Nacos")]),t._v(" "),e("td",[t._v("✅")])]),t._v(" "),e("tr",[e("td",{attrs:{rowspan:"2"}},[t._v("Zookeeper")]),e("td",[t._v("ServiceComb")]),t._v(" "),e("td",[t._v("✅")])]),t._v(" "),e("tr",[e("td",[t._v("Nacos")]),t._v(" "),e("td",[t._v("✅")])])]),t._v(" "),e("p",[e("strong",[t._v("目标注册中心版本支持")]),t._v("：")]),t._v(" "),e("ul",[e("li",[t._v("ServiceComb：2.x")]),t._v(" "),e("li",[t._v("Nacos：2.x")])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("说明")]),t._v("：原注册中心版本和自身应用服务需使用的版本相关。")])]),t._v(" "),e("p",[e("strong",[t._v("限制")]),t._v("：")]),t._v(" "),e("ul",[e("li",[t._v("对于"),e("strong",[t._v("新开发")]),t._v("的dubbo应用（"),e("strong",[t._v("单注册场景")]),t._v("），还需要设置dubbo本身注册中心地址的配置。这个配置项一般在dubbo应用的配置文件中，比如“dubbo/provider.xml”文件中：")])]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("dubbo:")]),t._v("registry")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("address")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sc://127.0.0.1:30100"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("p",[t._v("也可能在application.yml（或application.properties）中，以application.yml为例：")]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dubbo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("registry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("address")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//127.0.0.1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30100")]),t._v("\n")])])]),e("p",[t._v("需要强调的是，这个配置项的地址信息"),e("strong",[t._v("不会使用")]),t._v("，只使用了协议名称sc（即ip地址不重要，只需要"),e("strong",[t._v("sc://")]),t._v(" 开头即可）。")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("注意：")]),t._v(" 对于"),e("strong",[t._v("存量")]),t._v("dubbo应用（即原本已经设置过dubbo本身注册中心地址的应用）"),e("strong",[t._v("无需")]),t._v("进行这一步。")])]),t._v(" "),e("h2",{attrs:{id:"操作和结果验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作和结果验证"}},[t._v("#")]),t._v(" 操作和结果验证")]),t._v(" "),e("h3",{attrs:{id:"单注册模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单注册模式"}},[t._v("#")]),t._v(" 单注册模式")]),t._v(" "),e("p",[t._v("下面将演示如何使用注册迁移插件，验证dubbo应用在单注册模式下注册至新注册中心（ServiceComb）场景。")]),t._v(" "),e("h4",{attrs:{id:"准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/releases/download/v1.3.0/sermant-1.3.0.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),e("OutboundLink")],1),t._v(" Sermant\nRelease包（当前版本推荐1.3.0版本）")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/huaweicloud/Sermant-examples/releases/download/v1.3.0/sermant-examples-registry-demo-1.3.0.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),e("OutboundLink")],1),t._v(" Demo二进制产物压缩包")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/apache/servicecomb-service-center",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),e("OutboundLink")],1),t._v("ServiceComb，并启动")])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("注意：")]),t._v(" "),e("RouterLink",{attrs:{to:"/zh/document/user-guide/configuration-center.html"}},[t._v("动态配置中心")]),t._v("会在本场景中默认使用，由于非本场景的核心组件，因此在本文中不额外赘述。")],1)]),t._v(" "),e("h3",{attrs:{id:"步骤一-获取demo二进制产物"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤一-获取demo二进制产物"}},[t._v("#")]),t._v(" 步骤一：获取Demo二进制产物")]),t._v(" "),e("p",[t._v("解压Demo二进制产物压缩包，即可得到"),e("code",[t._v("dubbo-registry-consumer.jar")]),t._v("和"),e("code",[t._v("dubbo-registry-provider.jar")]),t._v("。")]),t._v(" "),e("h4",{attrs:{id:"步骤二-部署应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤二-部署应用"}},[t._v("#")]),t._v(" 步骤二：部署应用")]),t._v(" "),e("p",[t._v("（1）启动消费者")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# windows")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservicecomb.service.enableDubboRegister")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent-x.x.x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("agent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" dubbo-registry-consumer.jar\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mac, linux")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservicecomb.service.enableDubboRegister")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),t._v("/sermant-agent-x.x.x/agent/sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" dubbo-registry-consumer.jar\n")])])]),e("p",[t._v("（2）启动生产者")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# windows")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservicecomb.service.enableDubboRegister")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent-x.x.x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("agent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" dubbo-registry-provider.jar\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mac, linux")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservicecomb.service.enableDubboRegister")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),t._v("/sermant-agent-x.x.x/agent/sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" dubbo-registry-provider.jar\n")])])]),e("blockquote",[e("p",[e("strong",[t._v("说明：")]),t._v(" 其中${path}需要替换为sermant包路径，x.x.x需要替换为sermant实际版本号，appName为agent启动参数中的应用名，与注册参数无关，执行命令的目录需要为Demo应用的jar包目录。")])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("注意：")]),t._v(" 为了便于测试，这里使用了-Dservicecomb.service.enableDubboRegister=true的方式打开了dubbo注册开关，如果使用了其它的"),e("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-agent.html#参数配置方式"}},[t._v("参数配置方式")]),t._v("打开了dubbo注册开关，则无需添加该参数。")],1)]),t._v(" "),e("h4",{attrs:{id:"验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[t._v("#")]),t._v(" 验证")]),t._v(" "),e("p",[t._v("当启动以上2个应用后，登录ServiceComb后台"),e("code",[t._v("http://127.0.0.1:30103/")]),t._v("，查看相关服务实例是否已注册。")]),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/registry-result.png"}}),t._v(" "),e("p",[t._v("访问应用接口"),e("code",[t._v("http://localhost:28820/hello")]),t._v("，确认接口是否正常返回，若接口成功返回，则说明注册成功。")]),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/registry-request-result.png"}}),t._v(" "),e("h3",{attrs:{id:"双注册模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#双注册模式"}},[t._v("#")]),t._v(" 双注册模式")]),t._v(" "),e("p",[t._v("下面将演示如何使用注册迁移插件，验证SpringCloud应用在双注册模式下的从旧注册中心（ZooKeeper）迁移到新注册中心（ServiceComb）场景。")]),t._v(" "),e("h4",{attrs:{id:"准备工作-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备工作-2"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),e("OutboundLink")],1),t._v("/编译sermant包")])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://github.com/huaweicloud/Sermant-examples/releases/download/v1.2.1/sermant-examples-registry-demo-1.2.1.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),e("OutboundLink")],1),t._v(" Demo二进制产物压缩包")])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://github.com/apache/servicecomb-service-center",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),e("OutboundLink")],1),t._v("ServiceComb，并启动")])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://zookeeper.apache.org/releases.html#download",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),e("OutboundLink")],1),t._v("ZooKeeper，并启动")])])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("注意：")]),t._v(" "),e("RouterLink",{attrs:{to:"/zh/document/user-guide/configuration-center.html"}},[t._v("动态配置中心")]),t._v("会在本场景中默认使用，由于非本场景的核心组件，因此在本文中不额外赘述。")],1)]),t._v(" "),e("h3",{attrs:{id:"步骤一-获取demo二进制产物-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤一-获取demo二进制产物-2"}},[t._v("#")]),t._v(" 步骤一：获取Demo二进制产物")]),t._v(" "),e("p",[t._v("解压Demo二进制产物压缩包，即可得到"),e("code",[t._v("spring-cloud-registry-consumer.jar")]),t._v("和"),e("code",[t._v("spring-cloud-registry-provider.jar")]),t._v("。")]),t._v(" "),e("h4",{attrs:{id:"步骤二-部署应用-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤二-部署应用-2"}},[t._v("#")]),t._v(" 步骤二：部署应用")]),t._v(" "),e("p",[t._v("（1）启动原生产者与原消费者（注册到ZooKeeper中）")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# windows, linux, mac")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" spring-cloud-registry-provider.jar\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" spring-cloud-registry-consumer.jar\n")])])]),e("p",[t._v("启动成功后，访问消费者接口"),e("code",[t._v("http://localhost:8161/hello")]),t._v("，确认接口能够正常返回。")]),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/springcloud-migration-1.png"}}),t._v(" "),e("p",[t._v("（2）启动双注册生产者")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# windows")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dserver.port")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8262")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservicecomb.service.openMigration")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservicecomb.service.enableSpringRegister")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent-x.x.x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("agent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" spring-cloud-registry-provider.jar\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mac, linux")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dserver.port")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8262")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservicecomb.service.openMigration")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservicecomb.service.enableSpringRegister")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),t._v("/sermant-agent-x.x.x/agent/sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" spring-cloud-registry-provider.jar\n")])])]),e("blockquote",[e("p",[e("strong",[t._v("说明：")]),t._v(" 其中${path}需要替换为sermant实际包路径，x.x.x需要替换为sermant实际版本号，appName为agent的启动参数，与注册参数无关。")])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("注意：")]),t._v(" 为了便于测试，这里使用了-Dservicecomb.service.openMigration=true -Dservicecomb.service.enableSpringRegister=true的方式打开了spring迁移功能，如果使用了其它"),e("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-agent.html#参数配置方式"}},[t._v("参数配置方式")]),t._v("打开了spring迁移开关，则无需添加该参数。为了便于观察，使用了-Dserver.port=8262的方式，修改了生产者的端口。")],1)]),t._v(" "),e("p",[t._v("启动成功后，多次访问消费者接口"),e("code",[t._v("http://localhost:8161/hello")]),t._v("，确认接口能够访问2个生产者。")]),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/springcloud-migration-2.png"}}),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/springcloud-migration-1.png"}}),t._v(" "),e("p",[t._v("（3）关闭原生产者")]),t._v(" "),e("p",[t._v("（4）启动双注册消费者")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# windows")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dserver.port")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8261")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservicecomb.service.openMigration")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservicecomb.service.enableSpringRegister")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent-x.x.x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("agent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" spring-cloud-registry-consumer.jar\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mac, linux")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dserver.port")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8261")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservicecomb.service.openMigration")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservicecomb.service.enableSpringRegister")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),t._v("/sermant-agent-x.x.x/agent/sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" spring-cloud-registry-consumer.jar\n")])])]),e("blockquote",[e("p",[e("strong",[t._v("说明：")]),t._v(" 其中${path}需要替换为sermant实际包路径，x.x.x需要替换为sermant实际版本号，appName为agent的启动参数，与注册参数无关。")])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("注意：")]),t._v(" 为了便于测试，这里使用了-Dservicecomb.service.openMigration=true -Dservicecomb.service.enableSpringRegister=true的方式打开了spring迁移功能，如果使用了其它的"),e("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-agent.html#参数配置方式"}},[t._v("参数配置方式")]),t._v("打开了spring迁移开关，则无需添加该参数。为了便于观察，使用了-Dserver.port=8261的方式，修改了消费者的端口。")],1)]),t._v(" "),e("p",[t._v("启动成功后，多次访问消费者接口"),e("code",[t._v("http://localhost:8161/hello")]),t._v("和"),e("code",[t._v("http://localhost:8261/hello")]),t._v("，确认2个接口能够访问双注册生产者。")]),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/springcloud-migration-3.png"}}),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/springcloud-migration-4.png"}}),t._v(" "),e("p",[t._v("（5）关闭原消费者")]),t._v(" "),e("p",[t._v("（6）停止旧的注册中心（ZooKeeper）")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("注意：")])]),t._v(" "),e("p",[t._v("关闭原注册中心，由于大部分注册中心存在心跳检查机制，实例可能会不断刷错误日志，但不影响应用的正常调用。")]),t._v(" "),e("p",[t._v("若需要停止此类错误日志，参考节"),e("a",{attrs:{href:"#%E5%85%B3%E9%97%AD%E5%8E%9F%E6%B3%A8%E5%86%8C%E4%B8%AD%E5%BF%83%E5%BF%83%E8%B7%B3%E8%A7%84%E5%88%99"}},[e("strong",[t._v("关闭原注册中心心跳规则")])]),t._v("。")]),t._v(" "),e("p",[t._v("给生产者下发配置时，key值为"),e("strong",[t._v("sermant.agent.registry")]),t._v("，group为"),e("strong",[t._v("app=default&environment=&service=spring-cloud-registry-provider")]),t._v("，content为"),e("strong",[t._v("origin.__registry__.needClose: true")]),t._v("。")]),t._v(" "),e("p",[t._v("给消费者下发配置时，key值为"),e("strong",[t._v("sermant.agent.registry")]),t._v("，group为"),e("strong",[t._v("app=default&environment=&service=spring-cloud-registry-consumer")]),t._v("，content为"),e("strong",[t._v("origin.__registry__.needClose: true")]),t._v("。")])]),t._v(" "),e("h4",{attrs:{id:"验证-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证-2"}},[t._v("#")]),t._v(" 验证")]),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/springcloud-migration-5.png"}}),t._v(" "),e("p",[t._v("生产者服务与消费者服务成功把注册中心迁移到了servicecomb中，且在注册中心的迁移过程中，生产者始终可以调用消费者，不需要中断服务。")])],1)}),[],!1,null,null,null);e.default=s.exports}}]);