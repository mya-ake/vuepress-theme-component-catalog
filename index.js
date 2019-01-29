const path = require('path');

module.exports = ({ catalogOption = {}, catalog = true }) => {
  const plugins = [
    '@vuepress/register-components',
    { componentsDir: path.resolve(__dirname, 'components') },
  ];

  const options = {
    ...catalogOption,
    usingTheme: true,
  };
  if (catalog) {
    plugins.push(['vuepress-plugin-component-catalog', options]);
  }

  return {
    extend: '@vuepress/theme-default',

    plugins,
  };
};
