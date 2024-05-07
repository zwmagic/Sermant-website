(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{544:function(a,e,t){"use strict";t.r(e);var s=t(26),r=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"消息队列禁止消费"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#消息队列禁止消费"}},[a._v("#")]),a._v(" 消息队列禁止消费")]),a._v(" "),e("p",[a._v("本文介绍"),e("a",{attrs:{href:"https://github.com/sermant-io/Sermant/tree/develop/sermant-plugins/sermant-mq-consume-prohibition",target:"_blank",rel:"noopener noreferrer"}},[a._v("消息队列禁止消费插件"),e("OutboundLink")],1),a._v("及其使用方式。")]),a._v(" "),e("h2",{attrs:{id:"功能介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能介绍"}},[a._v("#")]),a._v(" 功能介绍")]),a._v(" "),e("p",[a._v("消息队列是分布式系统中重要的的组件，主要用来解决应用解耦、异步消息、流量削峰等问题，实现高性能、高可用，可伸缩和最终一致性架构。目前使用较多的消息队列有Kafka、RocketMQ等。")]),a._v(" "),e("p",[a._v("在某些特定场景中，用户希望能够暂停个别或全部消息队列消费者的消费动作，以保证业务处理流程中的消息在系统处于非常规环境或状态时暂时不处理。待系统恢复后再继续执行消息的正常消费，完成业务逻辑的处理。例如，在多云多活架构系统中，如果发生区域性故障需要对流量做切流处理，可在发生故障的可用区开启消息队列禁止消费功能，让正常可用区的消费者来处理业务，避免故障区域消费流量导致业务异常，保障系统的高可用。待故障处理完成后，可重新开启消费。")]),a._v(" "),e("p",[a._v("本插件着手于以非侵入的方式解决消息队列消费者在运行过程中的禁止消费以及恢复消费的问题。用户可以通过下发动态配置，指定微服务中的消费者停止消费某个Topic，也可以在停止消费后重新恢复原始Topic的消费。在此过程中会保证消息队列的消费顺序、消费进度等是正常无误的，以确保不遗漏消费。")]),a._v(" "),e("h3",{attrs:{id:"快速开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[a._v("#")]),a._v(" 快速开始")]),a._v(" "),e("p",[a._v("本插件的快速上手使用教程可参考"),e("a",{attrs:{href:"#%E6%93%8D%E4%BD%9C%E5%92%8C%E7%BB%93%E6%9E%9C%E9%AA%8C%E8%AF%81"}},[a._v("操作和结果验证")]),a._v("。")]),a._v(" "),e("h2",{attrs:{id:"支持版本和限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持版本和限制"}},[a._v("#")]),a._v(" 支持版本和限制")]),a._v(" "),e("h3",{attrs:{id:"支持版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持版本"}},[a._v("#")]),a._v(" 支持版本")]),a._v(" "),e("p",[a._v("消息队列禁止消费插件目前支持Kakfa和RocketMQ两种消息中间件，具体支持版本如下：")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("消息中间件")]),a._v(" "),e("th",[a._v("版本")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("Kafka")]),a._v(" "),e("td",[a._v("1.x, 2.x")])]),a._v(" "),e("tr",[e("td",[a._v("RocketMQ")]),a._v(" "),e("td",[a._v("4.8.x, 4.9.x, 5.0.x, 5.1.x")])])])]),a._v(" "),e("h3",{attrs:{id:"使用说明及限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用说明及限制"}},[a._v("#")]),a._v(" 使用说明及限制")]),a._v(" "),e("p",[a._v("消息队列禁止消费插件必须使用动态配置中心来下发配置，使用说明请参考"),e("a",{attrs:{href:"#%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE"}},[a._v("参数配置")]),a._v("章节。")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("整个插件的禁止消费的"),e("strong",[a._v("配置下发粒度")]),a._v("都是Topic级别，用户在动态配置中心下发需要禁止消费哪些Topic。")])]),a._v(" "),e("li",[e("p",[a._v("Kafka版本支持Topic粒度的禁止消费以及恢复消费，也即可以精确控制消费者禁止消费某个Topic。")])]),a._v(" "),e("li",[e("p",[a._v("RocketMQ支持整个消费者所订阅的Topic的同时禁止消费以及恢复消费，这是因为RocketMQ中"),e("a",{attrs:{href:"https://rocketmq.apache.org/zh/docs/4.x/bestPractice/07subscribe/",target:"_blank",rel:"noopener noreferrer"}},[a._v("同一个消费者组下所有消费者实例订阅关系必须一致"),e("OutboundLink")],1),a._v("，否则会导致消费消息紊乱，甚至消息丢失。在下发动态配置时，如果配置的Topic包含在当前消费者消费的Topic中，则该消费者将退出消费者组，也即禁止消费所有Topic。恢复消费时则重新消费原来的所有Topic。")])])]),a._v(" "),e("h2",{attrs:{id:"参数配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数配置"}},[a._v("#")]),a._v(" 参数配置")]),a._v(" "),e("p",[a._v("消息队列禁止消费插件必须使用动态配置中心来下发配置，配置发布可以参考"),e("a",{attrs:{href:"https://sermant.io/zh/document/user-guide/configuration-center.html#%E5%8F%91%E5%B8%83%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[a._v("动态配置中心使用手册"),e("OutboundLink")],1),a._v("。动态配置模型中的"),e("code",[a._v("group")]),a._v(", "),e("code",[a._v("key")]),a._v(", "),e("code",[a._v("content")]),a._v(" 分别对应如下：")]),a._v(" "),e("ul",[e("li",[e("p",[e("strong",[a._v("group")])]),a._v(" "),e("p",[a._v("group为"),e("strong",[a._v("app=${service.meta.application}&environment=${service.meta.environment}&zone=${service.meta.zone}")]),a._v("，")]),a._v(" "),e("p",[a._v("其中"),e("code",[a._v("${service.meta.application}")]),a._v("，"),e("code",[a._v("${service.meta.environment}")]),a._v("以及"),e("code",[a._v("${service.meta.zone}")]),a._v("在Sermant的配置文件"),e("code",[a._v("sermant-agent-x.x.x/agent/config.properties")]),a._v("中配置。group的默认值为"),e("code",[a._v("app=default&environment=&zone=")]),a._v("。")])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("key")])]),a._v(" "),e("p",[a._v("key分为两类。")]),a._v(" "),e("p",[a._v("全局配置：key为固定值"),e("strong",[a._v("sermant.mq.consume.globalConfig")]),a._v("，其优先级大于局部配置。")]),a._v(" "),e("p",[a._v("局部配置：微服务的局部配置，key为"),e("strong",[a._v("sermant.mq.consume.${service.meta.service}")]),a._v("，其中"),e("code",[a._v("${service.meta.service}")]),a._v("在Sermant的配置文件"),e("code",[a._v("sermant-agent-x.x.x/agent/config.properties")]),a._v("中配置。")]),a._v(" "),e("p",[a._v("在同时配置的情况下，若全局配置禁止消费开关打开，则全局配置生效，否则局部配置生效。")])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("content")])]),a._v(" "),e("p",[a._v("content为具体的消息队列禁止消费的配置内容，遵循yaml的格式。")]),a._v(" "),e("p",[e("code",[a._v("enableKafkaProhibition")]),a._v("控制Kafka禁止消费开关，"),e("code",[a._v("kafkaTopics")]),a._v("配置需要禁止消费的Topic列表。")]),a._v(" "),e("p",[e("code",[a._v("enableRocketMqProhibition")]),a._v("控制RocketMQ禁止消费开关，"),e("code",[a._v("rocketMqTopics")]),a._v("配置需要禁止消费的Topic列表。")]),a._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("enableKafkaProhibition")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kafkaTopics")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" demo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("kafka"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("topic\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("enableRocketMqProhibition")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("rocketMqTopics")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" demo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("rocketmq"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("topic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" demo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("rocketmq"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("topic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n")])])])])]),a._v(" "),e("blockquote",[e("p",[a._v("注意：如果是新增或者更新配置，新配置将会在Sermant中直接全部覆盖刷新。如果是删除配置，那么Sermant中的禁止消费开关将关闭，Topic列表置空。")])]),a._v(" "),e("h2",{attrs:{id:"操作和结果验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作和结果验证"}},[a._v("#")]),a._v(" 操作和结果验证")]),a._v(" "),e("p",[a._v("本节内容以包含Kafka消费者的示例微服务来演示消息队列禁止消费插件的能力。示例中通过在ZooKeeper中下发动态配置，指定需禁止消费的Topic，通过日志以及Kafka官方提供的消费者组查询脚本验证禁止消费生效。")]),a._v(" "),e("h3",{attrs:{id:"准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[a._v("#")]),a._v(" 准备工作")]),a._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://github.com/sermant-io/Sermant/releases/download/v1.4.0/sermant-1.4.0.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载 "),e("OutboundLink")],1),a._v(" Sermant\nRelease包（当前版本推荐1.4.0版本）")])]),a._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://zookeeper.apache.org/releases.html#download",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载"),e("OutboundLink")],1),a._v(" ZooKeeper Release包（作为动态配置中心）")])]),a._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://kafka.apache.org/downloads",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载"),e("OutboundLink")],1),a._v(" Kafka Release包")])]),a._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://github.com/sermant-io/Sermant-examples/releases/download/v1.4.0/sermant-examples-mq-consume-prohibition-demo-1.4.0.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载"),e("OutboundLink")],1),a._v(" Demo二进制产物压缩包")])])]),a._v(" "),e("h3",{attrs:{id:"步骤一-获取demo二进制产物"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤一-获取demo二进制产物"}},[a._v("#")]),a._v(" 步骤一：获取Demo二进制产物")]),a._v(" "),e("p",[a._v("解压Demo二进制产物压缩包，即可得到"),e("code",[a._v("kafka-demo.jar")]),a._v("。")]),a._v(" "),e("h3",{attrs:{id:"步骤二-部署动态配置中心zookeeper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤二-部署动态配置中心zookeeper"}},[a._v("#")]),a._v(" 步骤二：部署动态配置中心ZooKeeper")]),a._v(" "),e("p",[a._v("解压ZooKeeper Release包，将"),e("code",[a._v("conf/zoo_sample.cfg")]),a._v("拷贝至"),e("code",[a._v("conf/zoo.cfg")]),a._v("后，通过执行以下脚本即可启动ZooKeeper:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" bin/zkServer.sh start\n")])])]),e("p",[a._v("ZooKeeper的使用说明可参阅"),e("a",{attrs:{href:"https://zookeeper.apache.org/doc/current/zookeeperStarted.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网"),e("OutboundLink")],1),a._v("。")]),a._v(" "),e("h3",{attrs:{id:"步骤三-部署消息队列kafka"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤三-部署消息队列kafka"}},[a._v("#")]),a._v(" 步骤三：部署消息队列Kafka")]),a._v(" "),e("p",[a._v("解压Kafka Release包，通过执行以下脚本即可启动Kafka:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" bin/kafka-server-start.sh  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-daemon")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/config/server.properties\n")])])]),e("p",[a._v("Kafka的使用说明可参阅"),e("a",{attrs:{href:"https://kafka.apache.org/quickstart",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网"),e("OutboundLink")],1),a._v("。")]),a._v(" "),e("h3",{attrs:{id:"步骤四-部署应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤四-部署应用"}},[a._v("#")]),a._v(" 步骤四：部署应用")]),a._v(" "),e("p",[a._v("执行以下命令挂载Sermant启动Demo应用:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${path}")]),a._v("/sermant-agent-x.x.x/agent/sermant-agent.jar "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-jar")]),a._v(" kafka-demo.jar\n")])])]),e("blockquote",[e("p",[a._v("说明：此处${path}为sermant-agent包所在路径。")])]),a._v(" "),e("p",[a._v('该Demo将会启动一个Kafka消费者，它订阅了名称为"demo-test-topic"的Topic，并会轮询消费该Topic。')]),a._v(" "),e("h3",{attrs:{id:"步骤五-发布配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤五-发布配置"}},[a._v("#")]),a._v(" 步骤五：发布配置")]),a._v(" "),e("p",[a._v("配置kafka禁止消费规则，参考"),e("RouterLink",{attrs:{to:"/zh/document/user-guide/configuration-center.html#发布配置"}},[a._v("动态配置中心使用手册")]),a._v("中Zookeeper进行配置发布。")],1),a._v(" "),e("p",[a._v("其中key值为"),e("strong",[a._v("sermant.mq.consume.globalConfig")]),a._v("，group为"),e("strong",[a._v("app=default&environment=&zone=")]),a._v("，content为具体的禁止消费规则，如下所示：")]),a._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("enableKafkaProhibition")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kafkaTopics")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" demo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("topic\n")])])]),e("p",[a._v("其中，通过"),e("code",[a._v("enableKafkaProhibition")]),a._v("开启禁止消费能力，通过"),e("code",[a._v("kafkaTopics")]),a._v("指定禁止消费的Topic列表。")]),a._v(" "),e("p",[a._v("发布配置后Demo创建的Kafka消费者将停止对demo-test-topic的订阅和消费。")]),a._v(" "),e("h3",{attrs:{id:"结果验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结果验证"}},[a._v("#")]),a._v(" 结果验证")]),a._v(" "),e("h4",{attrs:{id:"发布配置前查看消费者组状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布配置前查看消费者组状态"}},[a._v("#")]),a._v(" 发布配置前查看消费者组状态")]),a._v(" "),e("p",[a._v("在步骤三中解压后的Kafka文件夹下，执行如下脚本可查看当前消费者组的消费者状态：")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" kafka-consumer-groups.sh --bootstrap-server localhost:9092 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--describe")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--group")]),a._v(" demo-test-group\n")])])]),e("p",[a._v("若输出结果如下，通过查询demo-test-topic的消费者成员，可知此时demo-test-topic正在被Demo应用创建的消费者消费。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("GROUP           TOPIC           PARTITION  CURRENT-OFFSET  LOG-END-OFFSET  LAG             CONSUMER-ID                                                     HOST            CLIENT-ID\ndemo-test-group demo-test-topic 0          0               0               0               consumer-demo-test-group-1-61c0c4f5-0ac7-43f4-8704-5f33c2d3f0ea /127.0.0.1      consumer-demo-test-group-1\n")])])]),e("h4",{attrs:{id:"发布配置后查看日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布配置后查看日志"}},[a._v("#")]),a._v(" 发布配置后查看日志")]),a._v(" "),e("p",[a._v("发布配置后，查看Demo应用在控制台中输出的日志，若出现如下日志内容，可以说明动态配置已下发成功，禁止消费生效。")]),a._v(" "),e("div",{staticClass:"language-txt extra-class"},[e("pre",{pre:!0,attrs:{class:"language-txt"}},[e("code",[a._v("INFO --- [main] o.a.k.clients.consumer.KafkaConsumer: [Consumer clientId=consumer-demo-test-group-1, groupId=demo-test-group] Unsubscribed all topics or patterns and assigned partitions\n")])])]),e("h4",{attrs:{id:"发布配置后查看消费者组状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布配置后查看消费者组状态"}},[a._v("#")]),a._v(" 发布配置后查看消费者组状态")]),a._v(" "),e("p",[a._v("发布配置后，在步骤三中解压后的Kafka文件夹下，执行如下脚本可查看当前消费者组的消费者状态：")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" kafka-consumer-groups.sh --bootstrap-server localhost:9092 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--describe")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--group")]),a._v(" demo-test-group\n")])])]),e("p",[a._v("若输出结果如下，提示“Consumer group 'demo-test-group' has no active members.”，可知消费者组中没有消费者在消费demo-test-topic，说明禁止消费生效。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Consumer group 'demo-test-group' has no active members.\n\nGROUP           TOPIC           PARTITION  CURRENT-OFFSET  LOG-END-OFFSET  LAG             CONSUMER-ID     HOST            CLIENT-ID\ndemo-test-group demo-test-topic 0          0               0               0               -               -               -\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);