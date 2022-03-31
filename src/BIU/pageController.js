import pageScraper from './pageScraper.js'
async function scrapeAll(browserInstance, gradeSheet) {
  let browser
  try {
    browser = await browserInstance
    return await pageScraper.scraper(browser, gradeSheet)
  } catch (err) {
    console.log('Could not resolve the browser instance => ', err)
  }
}

export default (browserInstance, gradeSheet) =>
  scrapeAll(browserInstance, gradeSheet)
