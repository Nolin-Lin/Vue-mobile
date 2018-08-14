module.exports = {
  'plugins': {
    'postcss-import': {},
    "postcss-url": {},
    'autoprefixer': { 'browsers': [ "iOS >= 7","Android >= 4" c] },
    "cssnano": { preset: "advanced", autoprefixer: false, "postcss-zindex": false }
  }
}
