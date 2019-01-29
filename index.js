module.exports = ({ catalogOption = {}, catalog = true }) => {
  const plugins = [];
  if (catalog) {
    plugins.push(['vuepress-plugin-component-catalog', catalogOption]);
  }

  return {
    extend: '@vuepress/theme-default',

    plugins,
  };
};
