const commonjs = require('rollup-plugin-commonjs')
const nodeResolve = require('rollup-plugin-node-resolve')
const typescript = require('rollup-plugin-typescript')
const json = require('rollup-plugin-json')
const filesize = require('rollup-plugin-filesize')

module.exports = {
  plugins: [
    json(),

    typescript(),

    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: 'node_modules/**',  // Default: undefined
      exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],  // Default: undefined
      // these values can also be regular expressions
      // include: /node_modules/

      // search for files other than .js files (must already
      // be transpiled by a previous plugin!)
      extensions: [ '.ts' ],  // Default: [ '.js' ]

      // if true then uses of `global` won't be dealt with by this plugin
      ignoreGlobal: false,  // Default: false

      // if false then skip sourceMap generation for CommonJS modules
      sourceMap: false,  // Default: true

      // explicitly specify unresolvable named exports
      // (see below for more details)
      // namedExports: { 'react': ['createElement', 'Component' ] },  // Default: undefined

      // sometimes you have to leave require statements
      // unconverted. Pass an array containing the IDs
      // or a `id => boolean` function. Only use this
      // option if you know what you're doing!
      // ignore: [ 'conditional-runtime-dependency' ]
    }),

    nodeResolve(),

    filesize({
      render : function (options, bundle, { fileName, minSize, gzipSize, brotliSize, bundleSize }){
        return `${fileName}-- bundleSize:${bundleSize}, minSize:${minSize}, gzipSize: ${gzipSize}`;
      }
    }),
  ]
};
