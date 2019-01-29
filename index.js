module.exports = ({ catalogOption = {}, catalog = true }) => {
  const plugins = [];

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
