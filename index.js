module.exports = ({ catalogOption = {} }) => {
  return {
    extend: '@vuepress/theme-default',

    plugins: [['vuepress-plugin-component-catalog', catalogOption]],
  };
};
