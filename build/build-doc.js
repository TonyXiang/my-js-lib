const fs = require('fs')
const path = require('path')
const glob = require('glob')
const { version } = require('../package.json')
const jsdoc2md = require('jsdoc-to-markdown')

function getMD(file) {
  return jsdoc2md
    .render({
      'example-lang': 'javascript',
      files: file,
    })
}

// entries = glob.sync(path.join(__dirname, '../lib/*.js'))
entries = glob.sync('lib/!(index|index.min)*.js')

Promise.all(entries.map(getMD)).then(markdownList => {
  const allMD = markdownList.join(`\n`)
  // fs.mkdirSync(`docs/v${version}`, { recursive: true })

  fs.writeFile(
    `docs/README.md`,
    allMD,
    function (err) {
      if (err) {
        console.log('文档构建失败!')
        console.log(err)
      } else {
        console.log('文档构建成功~')
      }
    })
})
