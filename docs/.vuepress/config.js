module.exports = {
  head: [
      [
        'link', { rel: 'icon', href: '/img/logo.svg'}
      ]
  ],
  extend: "@vuepress/theme-default",
  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "Sermant",
      description: "一种基于Java Agent的无代理服务网格解决方案",
    },
    "/en/": {
      lang: "en-US",
      title: "Sermant",
      description: "A Proxyless Service Mesh Solution Based on Java Agent",
    },
  },
  themeConfig: {
    logo: "/img/sermant-logo.png",
    displayAllHeaders: false,
    smoothScroll: true,
    sidebarDepth: 1,
    plugins: ["@vuepress/back-to-top"],
    locales: {
      "/zh/": {
        selectText: "选择语言",
        label: "简体中文",
        lastUpdated: "上次更新",
        nav: [
          { text: "文档", link: "/zh/document/" },
          { text: "CN中文博客", link: "/zh/blog/" },
          {
            text: "关于",
            items: [
              { text: "常见问题", link: "/zh/about/question/framework" },
              { text: "版本发布", link: "/zh/about/version/" },
            ],
          },
          { text: "Github", link: "https://github.com/huaweicloud/Sermant" },
        ],
        sidebar: {
          "/zh/document/": [
            {
              title: "开始",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: ["", "QuickStart"],
            },
            {
              title: "用户指南",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                "UserGuide/",
                "UserGuide/agentcore",
                "UserGuide/entrance",
                "UserGuide/backend",
                "UserGuide/plugin",
                "UserGuide/service-dynamic-config",
                "UserGuide/service-heartbeat",
              ],
            },
            {
              title: "开发者指南",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                "DeveloperGuide/dev-plugin",
                "DeveloperGuide/dev-plugin-idea",
                "DeveloperGuide/third-party-copyright",
                "DeveloperGuide/version-manage",
              ],
            },
            {
              title: "运维指南",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                "OperationGuide/injector",
              ],
            },
            {
              title: "插件",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                "plugin/",
                "plugin/dynamic-config",
                "plugin/flowcontrol",
                "plugin/graceful",
                "plugin/loadbalancer",
                "plugin/monitor",
                "plugin/router",
                "plugin/registry/",
                "plugin/registry/spring-cloud-registry-migiration",
                "plugin/registry/dubbo-registry-migiration",
              ],
            },
            {
              title: "贡献者指南",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: ["CONTRIBUTING"],
            },
          ],
          "/zh/blog/": [""],
          "/zh/about/question/": ["framework", "flowcontrol", "registry"],
          "/zh/about/version/": [""],
        },
      },
      "/en/": {
        selectText: "Languages",
        label: "English",
        ariaLabel: "Languages",
        lastUpdated: "Last Updated",
        nav: [
          { text: "Document", link: "/en/document/" },
          { text: "CN中文博客", link: "/zh/blog/" },
          {
            text: "About",
            items: [
              { text: "Common Problem", link: "/en/about/question/framework" },
              { text: "Release Version", link: "/en/about/version/" },
            ],
          },
          { text: "Github", link: "https://github.com/huaweicloud/Sermant" },
        ],
        sidebar: {
          "/en/document/": [
            {
              title: "Start",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: ["", "QuickStart"],
            },
            {
              title: "User Guide",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                "UserGuide/",
                "UserGuide/agentcore",
                "UserGuide/entrance",
                "UserGuide/backend",
                "UserGuide/plugin",
                "UserGuide/service-dynamic-config",
                "UserGuide/service-heartbeat",
              ],
            },
            {
              title: "Developer Guide",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                "DeveloperGuide/dev-plugin",
                "DeveloperGuide/dev-plugin-idea",
                "DeveloperGuide/third-party-copyright",
                "DeveloperGuide/version-manage",
              ],
            },
            {
              title: "Operation Guide",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                "OperationGuide/injector",
              ],
            },
            {
              title: "Plugin",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                "plugin/",
                "plugin/dynamic-config",
                "plugin/flowcontrol",
                "plugin/graceful",
                "plugin/loadbalancer",
                "plugin/monitor",
                "plugin/router",
                "plugin/registry/",
                "plugin/registry/spring-cloud-registry-migiration",
                "plugin/registry/dubbo-registry-migiration",
              ],
            },
            {
              title: "Contributor Guide",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: ["CONTRIBUTING"],
            },
          ],
          "/zh/blog/": [""],
          "/en/about/question/": ["framework", "flowcontrol", "registry"],
          "/en/about/version/": [""],
        },
      },
    },
  },
  configureWebpack:{
    node:{
      global:true,
      process:true
    }
  }
};
