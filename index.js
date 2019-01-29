module.exports = options => {
  console.log(options);
  return {
    extend: '@vuepress/theme-default',

    plugins: ['vuepress-plugin-component-catalog'],
  };
};
