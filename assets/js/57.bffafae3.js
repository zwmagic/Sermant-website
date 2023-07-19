(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{503:function(e,t,n){"use strict";n.r(t);var a=n(26),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"introduction-to-the-use-of-sermant"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-the-use-of-sermant"}},[e._v("#")]),e._v(" Introduction to the use of Sermant")]),e._v(" "),t("p",[e._v("Sermant is a bytecode enhancement technology based on JavaAgent. It uses JavaAgent to enhance the host application in a non-intrusive way to solve the microservice governance problem of Java applications. The original intention of Sermant is to establish a solution ecosystem for micro-service governance that is non-intrusive to the development state, reduce the difficulty of service governance development and use, and achieve the effect of simplified development and plug-and-play by means of abstract interface, function integration and plugin isolation. This article introduces the components currently included in Sermant and the compilation and packaging of Sermant.")]),e._v(" "),t("h2",{attrs:{id:"architecture-introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#architecture-introduction"}},[e._v("#")]),e._v(" Architecture Introduction")]),e._v(" "),t("p",[e._v("The overall architecture of Sermant includes sermant-agent, Backend, Dynamic Configuration Center, sermant-injector and other components. Among them, sermant-agent is the implementation component of the core bytecode enhancement, and the rest are the supporting components of the Sermant architecture.")]),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/sermant-arch.png"}}),e._v(" "),t("h3",{attrs:{id:"sermant-agent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sermant-agent"}},[e._v("#")]),e._v(" sermant-agent")]),e._v(" "),t("p",[e._v("Sermant-agent is the essential core component of Sermant, which contains bytecode enhancements of "),t("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/tree/develop/sermant-agentcore",target:"_blank",rel:"noopener noreferrer"}},[e._v("sermant-agentcore"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://gIthub.com/huaweicloud/Sermant/tree/develop/sermant-plugins",target:"_blank",rel:"noopener noreferrer"}},[e._v("sermant-plugins"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/tree/develop/sermant-common",target:"_blank",rel:"noopener noreferrer"}},[e._v("sermant-common"),t("OutboundLink")],1),e._v(". Sermant-agent takes effect when the host application is launched by specifying the "),t("code",[e._v("sermant-agent.jar'")]),e._v(" package via the "),t("code",[e._v("-javaagent")]),e._v(" argument.")]),e._v(" "),t("p",[e._v("Sermant-agent is based on JavaAgent technology and supports JDK 1.6 and above.")]),e._v(" "),t("p",[e._v("Please refer to the "),t("RouterLink",{attrs:{to:"/en/document/user-guide/sermant-agent.html"}},[e._v("Sermant-agent User Manual")]),e._v(" for more instructions on how to use sermant-agent.")],1),e._v(" "),t("h3",{attrs:{id:"backend"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backend"}},[e._v("#")]),e._v(" Backend")]),e._v(" "),t("p",[e._v("The Backend is the Sermant data processing back-end module and the front-end information display module, which mainly includes the reception and display of Sermant heartbeat information.")]),e._v(" "),t("p",[e._v("The Backend is not a required component of the Sermant, but it is highly recommended deploying the Backend for the observability of the Sermant.")]),e._v(" "),t("p",[e._v("Please refer to the "),t("RouterLink",{attrs:{to:"/en/document/user-guide/backend.html"}},[e._v("Backend User Manual")]),e._v(" for more instructions on how to use the Backend.")],1),e._v(" "),t("h3",{attrs:{id:"dynamic-configuration-center"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-configuration-center"}},[e._v("#")]),e._v(" Dynamic Configuration Center")]),e._v(" "),t("p",[e._v("Dynamic configuration center is a necessary component for Sermant when dynamic config function is enabled. This function allows Sermant to dynamically pull config from config center to achieve a variety of service governance capabilities, such as label routing, flow control, etc. If the Sermant dynamic configuration capability is not enabled, the dynamic configuration center does not need to be deployed.")]),e._v(" "),t("p",[e._v("Sermant dynamic configuration center currently supports two types: the "),t("a",{attrs:{href:"https://github.com/apache/zookeeper",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zookeeper"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://github.com/apache/servicecomb-kie",target:"_blank",rel:"noopener noreferrer"}},[e._v("ServiceComb Kie"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Please refer to the "),t("RouterLink",{attrs:{to:"/en/document/user-guide/configuration-center.html"}},[e._v("Sermant Dynamic Configuration Center User Manual")]),e._v(" for more instructions on how to use the dynamic configuration center.")],1),e._v(" "),t("h3",{attrs:{id:"sermant-injector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sermant-injector"}},[e._v("#")]),e._v(" "),t("strong",[e._v("sermant-injector")])]),e._v(" "),t("p",[e._v("Sermant provides a quick way to automatically mount Sermant from the host application in a container environment via the sermant-injector component. Simply add "),t("code",[e._v("sermant-injection:enabled")]),e._v(" to the labels in the yaml of the application deployment to enable this functionality.")]),e._v(" "),t("p",[e._v("The sermant-injector component is not required for Sermant, but it is highly recommended deploying it in a container environment for quick deployment. Currently sermant-injector supports k8s "),t("strong",[e._v("1.15")]),e._v(" and above.")]),e._v(" "),t("p",[e._v("Please refer to "),t("RouterLink",{attrs:{to:"/en/document/user-guide/injector.html"}},[e._v("Sermant-injector User Manual")]),e._v(" for more instructions on how to use sermant-injector.")],1),e._v(" "),t("h2",{attrs:{id:"package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package"}},[e._v("#")]),e._v(" Package")]),e._v(" "),t("h3",{attrs:{id:"how-to-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-package"}},[e._v("#")]),e._v(" How to package")]),e._v(" "),t("p",[e._v("The packaging process of "),t("strong",[e._v("Sermant")]),e._v(" is roughly divided into the following steps:")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("agent")]),e._v(": Compile or package core function and stable plugins")]),e._v(" "),t("li",[t("em",[e._v("release")]),e._v(": Publish built artifacts to Maven Central Repository")]),e._v(" "),t("li",[t("em",[e._v("test")]),e._v(": Compile or package all the modules in Sermant")])]),e._v(" "),t("p",[e._v("Execute the following "),t("em",[e._v("maven")]),e._v(" command which packages the "),t("strong",[e._v("Sermant")]),e._v(" project with "),t("em",[e._v("agent")]),e._v("：")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("mvn clean package "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-DskipTests")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Pagent")]),e._v("\n")])])]),t("p",[e._v("After the command is executed, a folder such as "),t("code",[e._v("sermant-agent-x.x.x")]),e._v(" and a compressed file such as "),t("code",[e._v("sermant-agent-x.x.x.tar.gz")]),e._v(" will be generated in the project directory. The latter is the product package of "),t("strong",[e._v("sermant")]),e._v(" and the former is the decompressed content of the product package.")]),e._v(" "),t("h3",{attrs:{id:"product-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#product-directory"}},[e._v("#")]),e._v(" Product Directory")]),e._v(" "),t("p",[t("code",[e._v("sermant-agent-x.x.x")]),e._v(" directory contains the following content:")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("agent")]),e._v(": sermant-agent related product\n"),t("ul",[t("li",[t("em",[e._v("config")]),e._v(": contains "),t("strong",[e._v("Sermant")]),e._v(" configuration files")]),e._v(" "),t("li",[t("em",[e._v("core")]),e._v(": contains "),t("strong",[e._v("Sermant")]),e._v(" core framework jars")]),e._v(" "),t("li",[t("em",[e._v("implement")]),e._v(": contains "),t("strong",[e._v("Sermant")]),e._v(" core implementation jars")]),e._v(" "),t("li",[t("em",[e._v("common")]),e._v(": contains "),t("strong",[e._v("Sermant")]),e._v(" common dependencies")]),e._v(" "),t("li",[t("em",[e._v("pluginPackage")]),e._v(": contains the extension function plugin package and configuration files")]),e._v(" "),t("li",[t("em",[e._v("sermant-agent.jar")]),e._v(":  the entrance of "),t("strong",[e._v("Sermant")]),e._v(" via "),t("code",[e._v("-javaagent")])])])]),e._v(" "),t("li",[t("em",[e._v("server")]),e._v(": contains servers of "),t("strong",[e._v("Sermant")]),e._v(", such as Backend.")])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);