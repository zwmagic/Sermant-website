(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{470:function(t,e,a){"use strict";a.r(e);var n=a(26),s=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"create-your-first-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-your-first-plugin"}},[t._v("#")]),t._v(" Create Your First Plugin")]),t._v(" "),e("p",[t._v("This article is for guidance on how to develop your first plugin locally.")]),t._v(" "),e("h2",{attrs:{id:"development-environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#development-environment"}},[t._v("#")]),t._v(" Development Environment")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://gitee.com/openeuler/bishengjdk-8",target:"_blank",rel:"noopener noreferrer"}},[t._v("HuaweiJDK 1.8"),e("OutboundLink")],1),t._v(" / "),e("a",{attrs:{href:"https://github.com/openjdk/jdk",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenJDK 1.8"),e("OutboundLink")],1),t._v(" / "),e("a",{attrs:{href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OracleJDK 1.8"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache Maven 3"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"create-the-project-based-on-the-archetype-template"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-project-based-on-the-archetype-template"}},[t._v("#")]),t._v(" Create the Project Based on the Archetype Template")]),t._v(" "),e("h3",{attrs:{id:"build-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-project"}},[t._v("#")]),t._v(" Build Project")]),t._v(" "),e("p",[t._v("Execute the following Maven commands locally：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ mvn archetype:generate "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DarchetypeGroupId")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("com.huaweicloud.sermant "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DarchetypeArtifactId")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sermant-template-archetype "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DarchetypeVersion")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),t._v(".0 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DgroupId")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("com.huaweicloud.sermant "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dversion")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),t._v(".0 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dpackage")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("com.huaweicloud "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DartifactId")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("first-plugin\n")])])]),e("p",[t._v("After executing the above command, press Enter for confirmation when the following log is displayed：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using property: groupId "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" com.huaweicloud.sermant\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using property: artifactId "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" first-plugin\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using property: version "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),t._v(".0\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using property: package "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" com.huaweicloud\nConfirm properties configuration:\ngroupId: com.huaweicloud.sermant\nartifactId: first-plugin\nversion: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),t._v(".0\npackage: com.huaweicloud\n Y: "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v("\n")])])]),e("p",[t._v("If the following success log appears, the project is successfully created using Archetype template：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ------------------------------------------------------------------------\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" BUILD SUCCESS\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ------------------------------------------------------------------------\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Total time:  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.409")]),t._v(" s\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Finished at: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2023")]),t._v("-10-19T15:10:05+08:00\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ------------------------------------------------------------------------\n")])])]),e("h3",{attrs:{id:"project-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#project-structure"}},[t._v("#")]),t._v(" Project Structure")]),t._v(" "),e("p",[t._v("The template project directory generated based on Archetype is as follows：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n├── application\n├── config\n└── template\n    ├── config\n    ├── template-plugin\n    └── template-service\n")])])]),e("p",[e("code",[t._v("application")]),t._v("：Test application module. This module is used to test whether the plug-ins defined in the template can take effect and can be cleared when the project is formally developed.")]),t._v(" "),e("p",[e("code",[t._v("config")]),t._v("：Configuration directory for Sermant.")]),t._v(" "),e("p",[e("code",[t._v("template")]),t._v("：template plugin module, plugin are developed here.")]),t._v(" "),e("p",[e("code",[t._v("template\\template-plugin")]),t._v("：The main module of the template plugin, refering  to "),e("RouterLink",{attrs:{to:"/en/document/developer-guide/package-structure.html#Plugin-Main-Module"}},[t._v("The main module of the plugin")]),t._v(".")],1),t._v(" "),e("p",[e("code",[t._v("template\\template-service")]),t._v("：The service module of template plugin, refering to "),e("RouterLink",{attrs:{to:"/en/document/developer-guide/package-structure.html#Plugin-Service-Module"}},[t._v("The service module of plugin")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"develop-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#develop-plugin"}},[t._v("#")]),t._v(" Develop Plugin")]),t._v(" "),e("p",[t._v("First find the "),e("code",[t._v("com.huaweicloud.sermant.template.TemplateDeclarer")]),t._v(" class of template project "),e("code",[t._v("template\\template-plugin")]),t._v(", there we can declare the class we expect to enhance, specify the methods in that class we expect to enhance, and define enhancement logic for it.")]),t._v(" "),e("h3",{attrs:{id:"declares-the-class-to-be-enhanced"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#declares-the-class-to-be-enhanced"}},[t._v("#")]),t._v(" Declares the Class to Be Enhanced")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("getClassMatcher()")]),t._v(" method of "),e("code",[t._v("com.huaweicloud.sermant.template.TemplateDeclarer")]),t._v(" class need to be  implement the following logic to enhance the class：")]),t._v(" "),e("ol",[e("li",[t._v("Define "),e("RouterLink",{attrs:{to:"/en/document/developer-guide/bytecode-enhancement.html#Class-Matcher"}},[t._v("Class matcher")]),e("code",[t._v('ClassMatcher.nameEquals("com.huaweicloud.template.Application")')]),t._v(", the matcher matches "),e("code",[t._v("com.huaweicloud.template.Application")]),t._v(" class by class name.")],1)]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClassMatcher")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getClassMatcher")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClassMatcher")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("nameEquals")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.huaweicloud.template.Application"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("Note：The above logic is implemented in the template code")]),t._v(" "),e("p",[e("code",[t._v("com.huaweicloud.template.Application")]),t._v("logic is as follows：")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Application")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Good afternoon!"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v('We will add System.out.println("Good morning!") and System.out.println("Good night!")` logic before and after this plugin.')])]),t._v(" "),e("h3",{attrs:{id:"declare-the-methods-that-need-to-be-enhanced"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#declare-the-methods-that-need-to-be-enhanced"}},[t._v("#")]),t._v(" Declare the Methods That Need to Be Enhanced")]),t._v(" "),e("p",[t._v("After you specify the class that you want to enhance, you need to specify the method in that class that you want to enhance and define the enhancement logic for that method, the above steps require the following logic to be added to the getInterceptDeclarers(ClassLoader classLoader) method in the com.huaweicloud.sermant.template.TemplateDeclarer class：")]),t._v(" "),e("ol",[e("li",[t._v("Define "),e("RouterLink",{attrs:{to:"/en/document/developer-guide/bytecode-enhancement.html#Method-Matcher"}},[t._v("Method matcher")]),t._v(" "),e("code",[t._v('MethodMatcher.nameEquals("main")')]),t._v("，the matcher matches the "),e("code",[t._v("main")]),t._v(" method of "),e("code",[t._v("com.huaweicloud.template.Application")]),t._v(" class by method name.")],1),t._v(" "),e("li",[t._v("Define an "),e("RouterLink",{attrs:{to:"/en/document/developer-guide/bytecode-enhancement.html#Interceptor"}},[t._v("interceptor")]),t._v(" for the 'main' method, add "),e("code",[t._v('System.out.println("Good morning!")')]),t._v(" to the "),e("code",[t._v("before")]),t._v(" method , and add "),e("code",[t._v('System.out.println("Good morning!")')]),t._v(" logic to the "),e("code",[t._v("after")]),t._v(" method, "),e("code",[t._v("before")]),t._v(" and "),e("code",[t._v("after")]),t._v(" method will take effect before and after the "),e("code",[t._v("main")]),t._v(" method is executed.")],1)]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterceptDeclarer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInterceptDeclarers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClassLoader")]),t._v(" classLoader"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterceptDeclarer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterceptDeclarer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MethodMatcher")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("nameEquals")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Interceptor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecuteContext")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("before")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecuteContext")]),t._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Good morning!"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n                "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecuteContext")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("after")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecuteContext")]),t._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Good night!"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n                "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecuteContext")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onThrow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecuteContext")]),t._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("Note：The above logic is implemented in the template code")])]),t._v(" "),e("h3",{attrs:{id:"add-spi-configuration-that-enhances-the-declaration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-spi-configuration-that-enhances-the-declaration"}},[t._v("#")]),t._v(" Add SPI Configuration That Enhances the Declaration")]),t._v(" "),e("p",[t._v("At the end of developing the plugin, don't forget to add the "),e("strong",[t._v("SPI")]),t._v(" configuration that enhances the declaration, add the "),e("code",[t._v("META-INF/services")]),t._v(" directory to "),e("code",[t._v("resources")]),t._v(" directory under "),e("code",[t._v("template\\template-plugin")]),t._v(" in your project, and create "),e("strong",[t._v("SPI")]),t._v(" file named "),e("code",[t._v("com.huaweicloud.sermant.core.plugin.agent.declarer.PluginDeclarer")]),t._v(", then add the class name of the bytecode enhanced declaration class to it：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("com.huaweicloud.sermant.template.TemplateDeclarer\n")])])]),e("h2",{attrs:{id:"packaged-build"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#packaged-build"}},[t._v("#")]),t._v(" Packaged Build")]),t._v(" "),e("p",[t._v("Execute "),e("strong",[t._v("mvn package")]),t._v(" under the generated project root directory , the build product directory is generated under the root directory of the build project：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n├── agent\n│   ├── Application.jar\n│   ├── common\n│   ├── config\n│   ├── core\n│   ├── god\n│   ├── implement\n│   ├── pluginPackage\n│   │   └── template\n│   └── sermant-agent.jar\n")])])]),e("p",[e("code",[t._v("Application.jar")]),t._v(" is an executable package for testing applications，other directory structures refer to "),e("RouterLink",{attrs:{to:"/en/document/user-guide/#Product-Directory"}},[t._v("Product directory description")])],1),t._v(" "),e("blockquote",[e("p",[t._v("Note：The template uses Maven's "),e("code",[t._v("maven-dependency-plugin:copy")]),t._v(" plug-in to pull the "),e("RouterLink",{attrs:{to:"/en/document/user-guide/#sermant-agent"}},[t._v("necessary core components of Sermant")]),t._v(" from the maven central repository into the local build directory, eliminating the need for developers to care about the dependencies and configurations required to start Sermant.")],1),t._v(" "),e("p",[t._v("The use of "),e("code",[t._v("maven-dependency-plugin:copy")]),t._v(" plugin please referes to Maven official documentd "),e("a",{attrs:{href:"https://maven.apache.org/plugins/maven-dependency-plugin/examples/copying-artifacts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("maven-dependency-plugin:copy"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("Execute "),e("code",[t._v("cd agent/")]),t._v(" in the project root directory , perform the following steps in it：")]),t._v(" "),e("ol",[e("li",[t._v("Run the following command to run the test application independently  "),e("strong",[t._v("java -jar Application.jar")])])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" Application.jar \nGood afternoon"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Run the test application with "),e("strong",[t._v("Sermant")]),t._v(" and execute the following command "),e("strong",[t._v("java -javaagent:sermant-agent.jar -jar Application.jar")])])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("xxxx-xx-xxTxx:xx:xx.xxx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Loading god library into BootstrapClassLoader.\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("xxxx-xx-xxTxx:xx:xx.xxx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Building argument map by agent arguments.\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("xxxx-xx-xxTxx:xx:xx.xxx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Loading core library into SermantClassLoader.\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("xxxx-xx-xxTxx:xx:xx.xxx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Loading sermant agent, artifact is: default\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("xxxx-xx-xxTxx:xx:xx.xxx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Load sermant done, artifact is: default\nGood morning"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nGood afternoon"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nGood night"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])])]),e("p",[t._v("As you can see, the execution logic defined in the plugin has been enhanced into the test application, and now that your first plugin has been developed successfully, let's move on to further development of the Sermant plugin.")])])}),[],!1,null,null,null);e.default=s.exports}}]);