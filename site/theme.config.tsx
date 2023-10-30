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
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – PE Community'
      }
    }
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
