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
                    title: "平台工程社区",
                    link: "https://pecommunity.cn"
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
                    return <a key={`${navKey}-${j}`} className="link link-hover">{link.title}</a>
                })}
            </nav>
        })}
    </footer>
}
