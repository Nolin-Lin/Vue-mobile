module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-underscore-dangle': [0], // 禁止标识符中有悬空下划线，解决vue-cli3 axios的报错命名报错
    'comma-dangle': [2, 'never'], // 对象字面量项尾不能有逗号
    'global-require': 0, // 要求 require() 出现在顶层模块作用域中
    'import/no-dynamic-require': 0// 调用require（）应该使用字符串文字
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
