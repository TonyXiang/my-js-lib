import puppeteer from 'puppeteer'

describe('hello 方法测试', () => {
  it('say hello', async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:3333')
    const title = await page.evaluate(() => Bxs.hello('world'))
    await browser.close()
    expect(title).toBe('hello world')
  })
})
