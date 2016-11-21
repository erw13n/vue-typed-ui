import typescript from 'rollup-plugin-typescript'
import babel from 'rollup-plugin-babel'
var pkg = require('./package.json')
var path = require('path')

var banner = `/**
  * ${pkg.name} ${pkg.version}
  * ${pkg.description}
  * ${pkg.homepage}
  
  * Copyright 2016, ${pkg.author}
  * Released under the ${pkg.license} license.
  '*/`

export default {
  banner: banner,
  entry: 'src/index.ts',
  format: 'umd',
  dest: 'dist/vue-typed-ui.js',
  moduleName: 'VueTypedUI',
  plugins: [
    {
      name: 'replace moment imports',
      transform: code => ({
        code: code.replace(/import\s*\*\s*as\s*moment/g, 'import moment'),
        map: { mappings: '' }
      })
    },
    typescript({    typescript: require('typescript')  }),
    babel({
      'presets': [
        [
          'es2015',
          {
            'modules': false
          }
        ]
      ],
      'plugins': [
        'external-helpers'
      ]
    })
  ],
  external: [
    'jquery', 'vue', 'vue-typed', 'moment'
  ]
}
