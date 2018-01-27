/* eslint-disable */
const { createConfig, addPlugins, babel, match, css, sass } = require('webpack-blocks')
const { ProvidePlugin } = require('webpack')
const path = require('path')

module.exports = {
  sections: [{
    name: 'Base Component', components: '../app/components/base/**/index.js',
  }, {
    name: 'Utility Components', components: '../app/components/utils/**/index.js',
  }],
  context: {
    mock: path.join(__dirname, '../__mock__/mock.js')
  },
  styleguideDir: '../styleguide',
  require: [
    path.join(__dirname, '../app/styles/app.scss')
  ],
  webpackConfig: createConfig([
    addPlugins([
      new ProvidePlugin({
        React: 'react',
        PropTypes: 'prop-types'
      })
    ]),
    babel(),
    match('*.scss', { exclude: path.resolve(__dirname, '../app/styles') }, [
      sass(),
      css.modules()
    ]),
    match('*.scss', { include: path.resolve(__dirname, '../app/styles') }, [
      sass()
    ])
  ])
}
