const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
  plugins: [
    purgecss({
      content: ['docs/**/*.html']
    }),
    cssnano({
        preset: 'default'
    })
  ]
}
