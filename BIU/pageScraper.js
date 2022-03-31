import config from './config.js'
import ResultSheet from './resultSheet.js'

const scraperObject = {
  url: 'https://shoham.biu.ac.il/kabala/Psychometric.aspx',
  async scraper(browser) {
    let page = await browser.newPage()
    console.log(`Navigating to ${this.url}...`)
    await page.goto(this.url)
    // Bagrut Meshuklal
    await page.type('#ContentPlaceHolder1_txtBagrut', '100')
    // Bagrut Math grade
    await page.type('#ContentPlaceHolder1_txtMathGrade', '100')
    // Bagrut Math Points
    await page.select('#ContentPlaceHolder1_ddlMath', '5')
    // Bagrut English Points
    await page.select('#ContentPlaceHolder1_ddlEnglishUnits', '5')
    // Bagrut English grade
    await page.type('#ContentPlaceHolder1_txtEnglishGrade', '100')
    // Psychomteri General grade
    await page.type('#ContentPlaceHolder1_txtPsychmetric', '800')

    // Next fields are required for scientific programs applicants...

    // Psychometri Mathemtical Grade
    await page.type('#ContentPlaceHolder1_txtPsychmetricMath', '150')
    // Physics Bagrut Grade (optional) (mandatory for engineering)
    await page.type('#ContentPlaceHolder1_txtPhysics', '100')
    // Physics Bagrut Points (optional) (mandatory for engineering)
    await page.select('#ContentPlaceHolder1_ddlPhysics', '5')
    // Chemistry Bagrut Grade (optional)(mandatory for chemistry)
    await page.type('#ContentPlaceHolder1_txtChemistry', '100')
    // Chemistry Bagrut Points (optional) (mandatory for chemistry)
    await page.select('#ContentPlaceHolder1_ddlChemistry', '5')
    // Biology Bagrut Grade (optional)(mandatory for Biology)
    await page.type('#ContentPlaceHolder1_txtBiology', '100')
    // Biology Bagrut Points (optional)(mandatory for Biology)
    await page.select('#ContentPlaceHolder1_ddlBiology', '5')

    // End of form filling

    // Click on submit
    await page.click('#ContentPlaceHolder1_btnCalc')
    page.waitForNavigation({ waitUntil: 'networkidle2' })

    /*=================================
            END INPUT PHASES
            BEGIN SCRAPE PHASE
    =================================*/
    // New Sheet

    await page.waitForSelector('td a')
    // let answerCells = await page.$$(config.ROW_SELECTOR)
    //

    function extractRowData(rows) {
      let arr = rows.map((row) => {
        return [
          row.children.item(0).textContent.trim(),
          row.children.item(1).textContent.trim(),
          row.children.item(2).textContent.trim(),
          row.children.item(3).textContent.trim(),
        ]
      })
      return arr
    }

    const rowData = await page.$$eval(config.ROW_SELECTOR, extractRowData)

    const resultSheet = new ResultSheet('BIU')

    await rowData.forEach((results) => {
      resultSheet.addResult(results[0], results[1], results[2], results[3])
    })

    console.log('this is line 77', resultSheet)

    await browser.close()
  },
}

export default scraperObject
