import minus from './minus'

describe('minus 方法测试', () => {
  it('1 - 2 = -1', () => {
    expect(minus(1, 2)).toBe(-1)
  })

  it('0 - 0 = 0', () => {
    expect(minus(0, 0)).toBe(0)
  })

  it('2 - 1 = 1', () => {
    expect(minus(2, 1)).toBe(1)
  })

  it('1 - undefined to throw Error', () => {
    expect(() => { minus(1) }).toThrow('minus方法的参数必须为Number类型')
  })
})
