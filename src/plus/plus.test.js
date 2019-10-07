import plus from './plus'

describe('plus 方法测试', () => {
  it('1 + 2 = 3', () => {
    expect(plus(1, 2)).toBe(3)
  })

  it('0 + 0 = 0', () => {
    expect(plus(0, 0)).toBe(0)
  })
})
