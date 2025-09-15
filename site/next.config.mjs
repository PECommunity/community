import withNextra from 'nextra';

const nextraConfig = withNextra({
  
});


export default nextraConfig({
  webpack: (config, { buildId, dev }) => {
    config.resolve.symlinks = false;
    return config;
  },
});
