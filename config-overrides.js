const path = require('path');
const { updateConfig } = require('react-app-rewire-antd-theme');
 
const options = {
  varFile: path.join(__dirname, './src/variables.less')
}

module.exports = function override(config, env) {
  config = updateConfig(config, env, options)
  return config;
};