(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{493:function(t,e,a){"use strict";a.r(e);var n=a(26),s=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"dynamic-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-configuration"}},[t._v("#")]),t._v(" Dynamic Configuration")]),t._v(" "),e("p",[t._v("This article describes how to use the "),e("a",{attrs:{href:"https://github.com/sermant-io/Sermant/tree/develop/sermant-plugins/sermant-dynamic-config",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dynamic Configuration Plugin"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),e("p",[t._v("This plugin implements dynamic configuration based on the Sermant configuration center capability. During running, the configuration can be updated to the host application. The priority of the plugin is higher than that of the environment variable configuration.")]),t._v(" "),e("h2",{attrs:{id:"parameter-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameter-configuration"}},[t._v("#")]),t._v(" Parameter configuration")]),t._v(" "),e("h3",{attrs:{id:"sermant-agent-configurations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sermant-agent-configurations"}},[t._v("#")]),t._v(" Sermant-agent Configurations")]),t._v(" "),e("p",[t._v("The dynamic configuration plug-in depends on the dynamic configuration center. It is necessary to configure the address of the dynamic configuration center ("),e("code",[t._v("dynamic.config.serverAddress")]),t._v(") and the type of the dynamic configuration center ("),e("code",[t._v("dynamic.config.dynamicConfigType")]),t._v(") in Sermant-agent. For details, refer to "),e("RouterLink",{attrs:{to:"/en/document/user-guide/sermant-agent.html#sermant-agent-parameter-configuration"}},[t._v("Sermant-agent User Manual")])],1),t._v(" "),e("h3",{attrs:{id:"plugin-configurations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugin-configurations"}},[t._v("#")]),t._v(" Plugin Configurations")]),t._v(" "),e("p",[t._v("The dynamic configuration plugin needs to open the switches such as whether to enable the adaptive CSE ("),e("code",[t._v("dynamic. config. plugin. enableCseAdapter")]),t._v(") and whether to enable the dynamic configuration plugin ("),e("code",[t._v("dynamic. config. plugin. enableDynamicConfig")]),t._v("). The configuration file of the plug-in can be found in `${path}/Sermant-agent-x.x.x/agent/pluginPackage/dynamic-config/config/config.yaml', as shown below:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dynamic.config.plugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableCseAdapter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Whether to turn on the adaptive CSE")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableDynamicConfig")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Enable dynamic configuration plugin")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableOriginConfigCenter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Whether to open the original configuration center")]),t._v("\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameter Key")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Default Value")]),t._v(" "),e("th",[t._v("Required")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("enableCseAdapter")]),t._v(" "),e("td",[t._v("Whether to turn on the adaptive CSE; "),e("br"),t._v(" "),e("strong",[t._v("true")]),t._v(":Configure subscription according to application configuration, service configuration and custom tag configuration specified by ServiceMeta；"),e("br"),t._v(" "),e("strong",[t._v("false")]),t._v(":Subscribe by service name")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("enableDynamicConfig")]),t._v(" "),e("td",[t._v("Enable dynamic configuration plugin")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("enableOriginConfigCenter")]),t._v(" "),e("td",[t._v("Whether to open the original configuration center; "),e("br"),t._v(" "),e("strong",[t._v("false")]),t._v(":Shield the original configuration center, and the configuration can only be published through Sermant; "),e("br"),t._v(" "),e("strong",[t._v("true")]),t._v(":Do not shield the original configuration center，The configuration can be distributed through the original configuration center")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("false")])])])]),t._v(" "),e("h2",{attrs:{id:"detailed-governance-rules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#detailed-governance-rules"}},[t._v("#")]),t._v(" Detailed Governance Rules")]),t._v(" "),e("p",[t._v("The dynamic configuration plug-in publishes the configuration based on the dynamic configuration capability provided by the framework. The configuration publishing can be referred to"),e("RouterLink",{attrs:{to:"/en/document/user-guide/configuration-center.html"}},[t._v("Dynamic Configuration Center User Manual")])],1),t._v(" "),e("p",[t._v("Dynamic configuration is performed based on a "),e("code",[t._v("group")]),t._v(". The tag group consists of multiple key-value pairs. The value of group varies with the adaptation switch enableCseAdapter, as shown in the following figure.")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("If the adaptation function is disabled("),e("code",[t._v("enableCseAdapter: false")]),t._v(")")]),t._v(" "),e("p",[t._v("In this case, the registration plugin performs subscription according to the service name of the host application, that is, the configured "),e("code",[t._v("spring.appplicaton.name")]),t._v(". If the configured service name is "),e("code",[t._v("DynamicConfigDemo")]),t._v(", the value of the corresponding "),e("code",[t._v("group")]),t._v(" is "),e("code",[t._v("service=DynamicConfigDemo")]),t._v(", where the key service is fixed. The value DynamicConfigDemo is determined by the host service name.")])]),t._v(" "),e("li",[e("p",[t._v("If the adaptation function is enabled("),e("code",[t._v("enableCseAdapter: true")]),t._v(")")]),t._v(" "),e("p",[t._v("In this case, subscription is performed based on the "),e("strong",[t._v("application configuration, service configuration, and customized configuration")]),t._v(". For details about the three types of configurations, see "),e("code",[t._v("${path}/sermant-agent-x.x.x/agent/config/config.properties")]),t._v(",  The related configurations are as follows:")]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# application name")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("service.meta.application")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("default")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# service version")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("service.meta.version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1.0.0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# namespace just keep default")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("service.meta.project")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("default")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# your environment, currently, development/testing/production are supported")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("service.meta.environment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("development")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Customized tags, which are configured as required for subsequent configuration subscription.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("service.meta.customLabel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("public")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("service.meta.customLabelValue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("default")]),t._v("\n")])])]),e("p",[t._v("Refer to "),e("a",{attrs:{href:"https://support.huaweicloud.com/devg-cse/cse_devg_0020.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSE Configuration Center Overview"),e("OutboundLink")],1),t._v(" for application configuration, service configuration and customized configuration description")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Application configuration")]),t._v(": consists of "),e("code",[t._v("service.meta.application")]),t._v(" and "),e("code",[t._v("service.meta.environment")]),t._v(". The corresponding group is "),e("code",[t._v("app=default&environment=development")]),t._v(".")]),t._v(" "),e("li",[e("strong",[t._v("Service configuration")]),t._v(": consists of "),e("code",[t._v("service.meta.application")]),t._v(", "),e("code",[t._v("service.meta.environment")]),t._v(", and "),e("code",[t._v("service name. Here, the service is spring.application.name")]),t._v(", and the corresponding group is "),e("code",[t._v("app=default&environment=development&service=DynamicConfigDemo")]),t._v(".")]),t._v(" "),e("li",[e("strong",[t._v("Customized configuration")]),t._v(": consists of "),e("code",[t._v("service.meta.customLabel")]),t._v(" and "),e("code",[t._v("service.meta.customLabelValue")]),t._v(". The corresponding group is "),e("code",[t._v("public=default")]),t._v(".")])])])]),t._v(" "),e("p",[t._v("The preceding describes the "),e("code",[t._v("group")]),t._v(" configuration. The following describes the content configuration. Currently, the dynamic configuration supports only the YAML format. For example, the following content is configured:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8004")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sermant")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sermant\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("application")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DynamicConfigDemo\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zookeeper")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"supported-versions-and-limitations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-versions-and-limitations"}},[t._v("#")]),t._v(" Supported Versions and Limitations")]),t._v(" "),e("h3",{attrs:{id:"version-required"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#version-required"}},[t._v("#")]),t._v(" Version Required")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Framework")]),t._v(" "),e("th",[t._v("Version")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("SpringBoot")]),t._v(" "),e("td",[t._v("1.5.x - 2.6.2")])]),t._v(" "),e("tr",[e("td",[t._v("spring-cloud-starter-alibaba-nacos-config")]),t._v(" "),e("td",[t._v("1.5.0.RELEASE+")])]),t._v(" "),e("tr",[e("td",[t._v("spring-cloud-starter-zookeeper-config")]),t._v(" "),e("td",[t._v("1.2.0.RELEASE+")])])])]),t._v(" "),e("h3",{attrs:{id:"limitations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[t._v("#")]),t._v(" Limitations")]),t._v(" "),e("p",[t._v("The @Value annotation is used as an example. The @ConfigurationProperties annotation is similar.")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @Value example\n * need use with @RefreshScope\n */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RefreshScope")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ValueConfig")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${sermant}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" sermant"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${server.port}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" port"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ValueConfig{"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sermant="')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" sermant "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('", port="')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" port "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token char"}},[t._v("'\\''")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token char"}},[t._v("'}'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSermant")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sermant"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"operation-and-result-validation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#operation-and-result-validation"}},[t._v("#")]),t._v(" Operation and result validation")]),t._v(" "),e("p",[t._v("The following shows how to use the dynamic configuration plugin.")]),t._v(" "),e("h3",{attrs:{id:"preparation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[t._v("#")]),t._v(" Preparation")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/sermant-io/Sermant-examples/tree/main/flowcontrol-demo/spring-cloud-demo/spring-provider",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),e("OutboundLink")],1),t._v(" Demo source code")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/sermant-io/Sermant/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),e("OutboundLink")],1),t._v(" or build Sermant package")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://zookeeper.apache.org/releases#download",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),e("OutboundLink")],1),t._v(" and start zookeeper")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vran-dev/PrettyZoo/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),e("OutboundLink")],1),t._v(" PrettyZoo  and connect zookeeper")])]),t._v(" "),e("h3",{attrs:{id:"step-1-compile-and-package-the-demo-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1-compile-and-package-the-demo-application"}},[t._v("#")]),t._v(" Step 1: Compile and package the demo application")]),t._v(" "),e("p",[t._v("In the "),e("code",[t._v("${path}/Sermant-examples/flowcontrol-demo/spring-cloud-demo/spring-provider")]),t._v(" directory execute the following command：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# windows,Linux,mac")]),t._v("\nmvn clean package\n")])])]),e("p",[t._v("After successful packaging， generate "),e("code",[t._v("spring-provider.jar")]),t._v(" int the "),e("code",[t._v("${path}/Sermant-examples/flowcontrol-demo/spring-cloud-demo/spring-provider/target")]),t._v(" directory")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Explain")]),t._v("： Path is the path where the demo application is downloaded")])]),t._v(" "),e("h3",{attrs:{id:"step-2-modify-plug-in-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-2-modify-plug-in-configuration"}},[t._v("#")]),t._v(" Step 2: Modify plug-in configuration")]),t._v(" "),e("p",[t._v("Refer to [Plug-in Configuration](#Plugin Configurations) for modification"),e("code",[t._v("${path}/sermant-agent-x.x.x/agent/pluginPackage/dynamic-config/config/config.yaml")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("dynamic.config.plugin:\n  enableCseAdapter: "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  enableDynamicConfig: "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  enableOriginConfigCenter: "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),e("h3",{attrs:{id:"step-3-start-the-demo-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-3-start-the-demo-application"}},[t._v("#")]),t._v(" Step 3: Start the demo application")]),t._v(" "),e("p",[t._v("Start the demo application with the following command")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# windwos")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent-x.x.x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("agent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent.jar "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dspring.application.name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("spring-flow-provider "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dspring.cloud.zookeeper.connectString")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:2181 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" spring-provider.jar\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#linux mac")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),t._v("/sermant-agent-x.x.x/agent/sermant-agent.jar "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dspring.application.name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("spring-flow-provider "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dspring.cloud.zookeeper.connectString")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:2181 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" spring-provider.jar\n")])])]),e("blockquote",[e("p",[e("strong",[t._v("Explain")]),t._v("：\nThe ${path} in the above command needs to be replaced with the actual installation path of Sermant。\nx.x.x represents a certain version number of Sermant。")])]),t._v(" "),e("h3",{attrs:{id:"step-4-view-the-original-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-4-view-the-original-configuration"}},[t._v("#")]),t._v(" Step 4: View the original configuration")]),t._v(" "),e("p",[t._v("The browser or curl tool accesses "),e("code",[t._v("localhost: 8003/flow")]),t._v(" to check whether the console log prints the "),e("code",[t._v("sermant")]),t._v(" log. The effect image is as follows:")]),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/dynamic-config-old-config.jpg"}}),t._v(" "),e("h3",{attrs:{id:"step-5-modify-the-application-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-5-modify-the-application-configuration"}},[t._v("#")]),t._v(" Step 5: Modify the application configuration")]),t._v(" "),e("p",[t._v("Refer to "),e("RouterLink",{attrs:{to:"/en/document/user-guide/configuration-center.html"}},[t._v("Dynamic Configuration Center User Manual")])],1),t._v(" "),e("p",[t._v("Take Zookeeper as an example, use PrettyZoo tool to publish dynamic configuration:")]),t._v(" "),e("ol",[e("li",[t._v("create node "),e("code",[t._v("/service=spring-flow-provider")])])]),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/dynamic-config-create-node-1.jpg"}}),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("create node "),e("code",[t._v("/service=spring-flow-provider/config")]),t._v(" and data "),e("code",[t._v("sermant: sermant1")])])]),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/dynamic-config-create-node-2.jpg"}}),t._v(" "),e("h3",{attrs:{id:"verification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verification"}},[t._v("#")]),t._v(" Verification")]),t._v(" "),e("p",[t._v("Visit "),e("code",[t._v("localhost: 8003/flow through the browser or curl tool again to check whether the console has output")]),t._v("sermant1` logs.")]),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/dynamic-config-verify.jpg"}})],1)}),[],!1,null,null,null);e.default=s.exports}}]);