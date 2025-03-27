async function nextConfig() {
  const { default: withNextra } = await import('nextra');

  const nextraConfig = withNextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
  });

  return nextraConfig({
    webpack: (config, { buildId, dev }) => {
      config.resolve.symlinks = false;
      return config;
    },
  });
}

module.exports = nextConfig();
