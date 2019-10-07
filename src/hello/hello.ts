/**
 * hello 方法
 * @function hello
 * @param {object} options - 参数options
 * @param {string} options.name - 参数参数options.name
 * @param {number} options.age - 参数参数options.age
 * @param {number} options.age - 参数参数options.age
 * @param {function} options.onclick(name) -
 * 参数参数options.onclick;options.onclick 拥有一个参数 name,为string类型
 * @param {...number} num - 参数 num，可以有无限多个
 * @example // returns 'hello world'
 * hello()
 * @returns {string}
 * @author tony <123456@qq.com>
 */
export default function hello(info: string):string {
  return `hello ${info}`
}
