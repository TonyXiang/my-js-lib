import VERSION from './VERSION'
import { version } from '../../package.json'

describe('VERSION 测试', () => {
  it('VERSION = version of package.json', async () => {
    expect(VERSION).toBe(version)
  })
})
