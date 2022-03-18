import config from './config.js'
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

    class resultSheet {
      constructor() {}

      addResult(curriculum, departemnt, admissionStatus, enrollmentStatus) {
        this[curriculum] = {
          departemnt,
          admissionStatus,
          enrollmentStatus,
        }
      }
    }

    await page.waitForSelector('td a')
    let answerCells = await page.$$(
      '#ContentPlaceHolder1_GridView1 tr:not([style])'
    )
    let answersArray = []
    for (let i = 0; i < answerCells.length; i++) {
      const content = await (
        await answerCells[i].getProperty('innerText')
      ).jsonValue()
      console.log(content)
      answersArray.push(content)
      console.log(content)
    }

    console.log(answersArray)
  },
}

export default scraperObject
