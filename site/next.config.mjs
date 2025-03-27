import withNextra from 'nextra';

const nextraConfig = withNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = nextraConfig({
  webpack: (config, { buildId, dev }) => {
    config.resolve.symlinks = false
    return config
  },
})
