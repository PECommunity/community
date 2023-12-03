import React from 'react'
import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'
import Footer from './components/Footer'

const config: DocsThemeConfig = {
  logo: <span>平台工程社区 · 中国</span>,
  project: {
    link: 'https://github.com/PECommunity/community'
  },
  editLink: {
    text: '在 GitHub 上编辑 →'
  },
  feedback: {
    content: '遇到问题？提交反馈 →',
    labels: 'feedback'
  },
  chat: {
    link: 'https://platformengineering.org/slack-rd',
    icon: (
      <svg fill="currentColor" width="24px" height="24px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>slack</title>
        <path d="M19.955 23.108c-1.74 0-3.151-1.411-3.151-3.151s1.411-3.151 3.151-3.151h7.889c1.74 0 3.151 1.411 3.151 3.151s-1.411 3.151-3.151 3.151v0zM19.955 24.693c1.739 0 3.149 1.41 3.149 3.149s-1.41 3.149-3.149 3.149c-1.738 0-3.148-1.408-3.149-3.146v-3.152zM23.108 12.044c0 1.74-1.411 3.151-3.151 3.151s-3.151-1.411-3.151-3.151v0-7.888c0-1.74 1.411-3.151 3.151-3.151s3.151 1.411 3.151 3.151v0zM24.693 12.044c0.001-1.738 1.41-3.147 3.148-3.147s3.148 1.41 3.148 3.149c0 1.738-1.408 3.147-3.145 3.149h-3.152zM12.044 8.893c1.736 0.005 3.142 1.413 3.142 3.15s-1.406 3.146-3.142 3.15h-7.888c-1.736-0.005-3.142-1.413-3.142-3.15s1.406-3.146 3.142-3.15h0zM12.044 7.305c-1.736-0.002-3.143-1.41-3.143-3.147 0-1.738 1.409-3.147 3.147-3.147s3.145 1.408 3.147 3.144v3.149zM8.893 19.955c0.005-1.736 1.413-3.142 3.15-3.142s3.146 1.406 3.15 3.142v7.889c-0.005 1.736-1.413 3.142-3.15 3.142s-3.146-1.406-3.15-3.142v-0zM7.305 19.955c-0.001 1.737-1.41 3.145-3.147 3.145s-3.147-1.409-3.147-3.147c0-1.738 1.408-3.146 3.145-3.147h3.149z"></path>
      </svg>
    )
  },
  docsRepositoryBase: 'https://github.com/PECommunity/community',
  sidebar: {
    toggleButton: true,
  },
  footer: {
    component: <Footer />,
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – PE Community'
      }
    }
  },
  head: function useHead() {
    const { title } = useConfig()
    // TODO: add social card in PressKit

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="中立的，非商业目的，以开放协作为中心的中文技术社区."
        />
        <meta
          name="og:description"
          content="中立的，非商业目的，以开放协作为中心的中文技术社区."
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:image" content={socialCard} /> */}
        <meta name="twitter:site:domain" content="pecommunity.cn" />
        <meta name="twitter:url" content="https://pecommunity.cn" />
        <meta
          name="og:title"
          content={title ? title + ' – PE Community' : 'PE Community'}
        />
        {/* <meta name="og:image" content={socialCard} /> */}
        <meta name="apple-mobile-web-app-title" content="PE Community" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
  banner: {
    key: 'events',
    text: (
      <a href="https://kccncosschn2023.sched.com/event/1RTDe/xiao-zha-zhou-ke-mo-dyags-how-will-the-trend-towards-platform-engineering-adoption-reshape-the-developer-experience-chris-yang-vivo" target="_blank">
        🎉 Platform Engineering on KubeCon China. Read more →
      </a>
    )
  },
}

export default config
