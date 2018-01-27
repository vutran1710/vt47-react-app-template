exports.npm = {
  globals: {
    React: 'react',
    PropTypes: 'prop-types'
  }
}

exports.files = {
  javascripts: {
    // entryPoints: { 'app/initialize.js': 'app.js' },
    joinTo: 'app.js'
  },
  stylesheets: {
    joinTo: 'app.css'
  }
}

exports.modules = {
  autoRequire: {
    'app.js': ['initialize']
  }
}

exports.plugins = {
  babel: {
    plugins: ['transform-class-properties']
  },
  sass: {
    mode: 'native',
    sourceMapEmbed: true,
    precision: 8,
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      ignore: ['app/styles/*.scss']
    },
    options: {
      includePaths: [
        'node_modules/normalize.css'
      ]
    }
  },
  uglify: {
    mangle: true,
    compress: {
      global_defs: {
        ENV: 'production'
      }
    }
  },
  cleancss: {
    keepSpecialComments: 0,
    removeEmpty: true
  },
  eslint: {
    pattern: /^app\/.*\.jsx?$/
  }
}
