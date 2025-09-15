//import withNextra from 'nextra';
//
//const nextraConfig = withNextra({
//  theme: 'nextra-theme-docs',
//  themeConfig: './theme.config.tsx',
//});

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',      
  themeConfig: './theme.config.jsx' 
})

module.exports = withNextra({
  reactStrictMode: true,
})

export default nextraConfig({
  webpack: (config, { buildId, dev }) => {
    config.resolve.symlinks = false;
    return config;
  },
});
