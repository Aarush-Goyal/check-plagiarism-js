import dotenv from 'dotenv'
import { PuppeteerNodeLaunchOptions } from 'puppeteer'

dotenv.config()

const getConfig = (): { puppeteer: PuppeteerNodeLaunchOptions } => {
  if (process.env.NODE_ENV === 'production') {
    return {
      puppeteer: {
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-accelerated-2d-canvas',
          '--disable-gpu',
        ],
        executablePath: 'google-chrome-stable',
      },
    }
  }
  return {
    puppeteer: {
      headless: false,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu',
        `--window-size=${1800},${1000}`,
      ],
      executablePath: 'google-chrome-stable',
      slowMo: 300,
    },
  }
}

export default getConfig
