const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  webpack: (config, { buildId, dev }) => {
    config.resolve.symlinks = false
    return config
  },
})
