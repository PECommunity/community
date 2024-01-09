interface FooterProps {
    navs: FooterNav[]
}

interface FooterNav {
    title: string
    links: FooterLink[]
}

interface FooterLink {
    title: string
    link: string
}

export default () => {
    const navs = [
        {
            title: "关于我们",
            links: [
                {
                    title: "关于我们",
                    link: "/about"
                },
                {
                    title: "行为准则",
                    link: "/about/coc"
                },
                {
                    title: "编辑指南",
                    link: "/about/editor"
                },
            ],
        },
        {
            title: "友情链接",
            links: [
                {
                    title: "Platform Engineering",
                    link: "https://platformengineering.org/"
                },
                {
                    title: "Platform User Group (PUG)",
                    link: "https://pug.fyi/"
                },
            ],
        },
        {
            title: "媒体合作",
            links: [
                {
                    title: "CSDN",
                    link: "https://blog.csdn.net/bluky999/"
                },
                {
                    title: "InfoQ",
                    link: "https://www.infoq.cn/u/index"
                },
                {
                    title: "OSChina",
                    link: "https://my.oschina.net/main"
                },
                {
                    title: "SegmentFault 思否",
                    link: "https://segmentfault.com/u/platformengineering"
                },
                {
                    title: "掘金",
                    link: "https://juejin.cn/column/7298240057340264489"
                },
                {
                    title: "博客园",
                    link: "https://www.cnblogs.com/pecommunity"
                },
                {
                    title: "知乎",
                    link: "https://zhuanlan.zhihu.com/p/662225709"
                },
                {
                    title: "Bilibili",
                    link: "https://www.bilibili.com/read/readlist/rl738747"
                },
            ],
        },
    ]
    return <Footer navs={navs} />
}

export const Footer = (props: FooterProps) => {
    return <footer className="footer p-10 bg-neutral text-neutral-content">
        {props.navs?.map((nav, i) => {
            const navKey = `footer-nav-${i}`
            return <nav key={navKey}>
                <header className="footer-title">{nav.title}</header>
                {nav.links.map((link, j) => {
                    return <a
                        key={`${navKey}-${j}`}
                        className="link link-hover"
                        href={link.link}
                        target="_blank"
                    >{link.title}</a>
                })}
            </nav>
        })}
    </footer>
}
