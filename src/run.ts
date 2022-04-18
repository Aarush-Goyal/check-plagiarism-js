import puppeteer from 'puppeteer'
import { load } from 'cheerio'
import getConfig from './config'

const run = async (url: string) => {
  const browser = await puppeteer.launch(getConfig().puppeteer)
  const page = await browser.newPage() // page
  await page.setViewport({ height: 1000, width: 1800 }) // setting viewport h,w
  await page.goto(url) // redirecting to url

  const html = await page.evaluate(() => document.body.innerHTML) // html

  const $ = load(html) // loading html

  const topstuff = $('div#topstuff').text() // topstuff

  // console.log(topstuff) // print topstuff

  // if top stuff is not empty
  if (topstuff) {
    // if topstuff contains 'no results found for'
    if (topstuff.toLowerCase().includes('no results found for')) {
      // console.log('No results found for this query')
    }
  }
}

export default run
