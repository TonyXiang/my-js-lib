const path = require('path')
const fs = require('fs')
const glob = require('glob')
const rollup = require('rollup')
const { plugins } = require('./rollup.build.config.js')
const { terser } = require('rollup-plugin-terser')
const { delDir } = require('./utils')

let entries
let importText = ''
let attrText = ''
const newLine = `
`

// 拼装index.js文件
function addText(name) {
  importText += `${importText ? newLine : ''}import ${name} from './${name}/${name}'`
  attrText += `${attrText ? newLine : ''}  ${name},`
}

// rollup打包
async function build(inputOptions, outputOptions) {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions)

  // or write the bundle to disk
  await bundle.write(outputOptions)
}

async function buildSingleModule(et) {
  const name = path.basename(path.dirname(et))
  if (name.indexOf('_') !== 0) {
    addText(name)

    // 构建单个函数模块
    await build({
      input: `src/${name}/${name}.ts`,
      plugins,
    },{
      output: {
        file: `lib/${name}.js`,
        format: 'cjs',
      },
    })
  }
}

// 删除目录
delDir('lib')

entries = glob.sync('src/*/*.ts')
Promise.all(entries.map(buildSingleModule)).then(async () => {
  // 生成 src/index.js
  fs.writeFileSync('src/index.js', `${importText}\n\nexport default {\n${attrText}\n}\n`)

  // 整体构建
  await build({
    input: `src/index.js`,
    plugins,
  },{
    output: {
      file: `lib/index.js`,
      format: 'umd',
      name: 'Bxs',
    }
  })

  // 整体构建（压缩）
  await build({
    input: `src/index.js`,
    plugins: [
      ...plugins,
      terser()
    ]
  },{
    output: {
      file: `lib/index.min.js`,
      format: 'umd',
      name: 'Bxs',
    }
  })
})
