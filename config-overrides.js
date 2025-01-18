module.exports = function override(config, env) {
  config.resolve.extensions = [...config.resolve.extensions, '.ts', '.tsx'];
  return config;
}
