
// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'input',
    name: 'name',
    message: '请输入模块名称，请使用驼峰式命名法（Camel-Case）',
    validate(name) {
      if (/^[0-9a-zA-Z_]{1,}$/.test(name)) {
        return true
      }
      return '模块名称有误，只允许输入字母、数字、下划线'
    }
  }
]
