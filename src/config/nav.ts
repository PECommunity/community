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
      title: "原创",
      href: "/articles",
    },
    {
      title: "月刊",
      href: "/monthly",
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
      title: "术语表",
      href: "/glossary",
    },
    {
      title: "知识地图",
      href: "/mindmap",
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
