import startBrowser from './browser.js'
import scraperController from './pageController.js'

async function main(gradeSheet) {
  //Start the browser and create a browser instance
  let browserInstance = await startBrowser()

  // Pass the browser instance to the scraper controller
  const results = await scraperController(browserInstance, gradeSheet)

  return results
}

export default main
