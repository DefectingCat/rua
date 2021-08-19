module.exports = {
  apps: [
    {
      name: 'Rua',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: `start -c ${process.cwd()}/nuxt.config.js`,
    },
  ],
};
