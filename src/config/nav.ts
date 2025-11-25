export interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
}

export interface NavConfig {
  mainNav: NavItem[];
}

export const navConfig: NavConfig = {
  mainNav: [
    {
      title: "首页",
      href: "/",
    },
    {
      title: "月刊",
      href: "/monthly",
    },
    {
      title: "原创",
      href: "/articles",
    },
    {
      title: "翻译",
      href: "/translations",
    },
    {
      title: "活动",
      href: "/events",
    },
    {
      title: "知识地图",
      href: "/glossary",
    },
    {
      title: "PEMM",
      href: "/pemm",
    },
    {
      title: "关于",
      href: "/about",
    },
  ],
};
