/**
 * 减法运算，用于两个数相减
 * @author tony <123456@qq.com>, black <123456@qq.com>
 * @param {number|string} a - 减法的参数a.
 * @param {number} b - 减法的参数b.
 * @returns {number|string}
 * @throws {TypeError} minus方法的参数必须为Number类型
 * @throws {DOMError} 抛出异常的描述
 * @example // returns 0
 * minus(1, 1)
 */
export default function minus(a: number, b?: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw TypeError('minus方法的参数必须为Number类型')
  }
  return a - b
}
