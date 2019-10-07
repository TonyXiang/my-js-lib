const fs = require('fs')

/**
 * 删除目录
 * @param { string } path - 需要删除的目录
 * */
function delDir(path){
  let files = []
  if(fs.existsSync(path)){
    files = fs.readdirSync(path)
    files.forEach((file) => {
      let curPath = path + "/" + file
      if(fs.statSync(curPath).isDirectory()){
        delDir(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(path)
  }
}

/**
 * 文件复制
 * @function copyFile
 * @param { string } input - 输入文件路径
 * @param { string } output - 输出的文件路径
 * */
function copyFile(input, output) {
  fs.writeFileSync(output, fs.readFileSync(input))
}

module.exports = {
  delDir,
  copyFile
}
