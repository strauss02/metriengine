import config from './config.js'
import BIUResultSheet from './BIUResultSheet.js'
const scraperObject = {
  url: 'https://shoham.biu.ac.il/kabala/Psychometric.aspx',
  async scraper(browser, gradeSheet) {
    let page = await browser.newPage()
    console.log(`Navigating to ${this.url}...`)
    await page.goto(this.url)
    // Bagrut Meshuklal
    await page.type('#ContentPlaceHolder1_txtBagrut', gradeSheet.sums.biu)
    // Bagrut Math grade
    await page.type(
      '#ContentPlaceHolder1_txtMathGrade',
      gradeSheet.bagrut.math.grade
    )
    // Bagrut Math Points
    await page.select(
      '#ContentPlaceHolder1_ddlMath',
      gradeSheet.bagrut.math.units
    )
    // Bagrut English Points
    await page.select(
      '#ContentPlaceHolder1_ddlEnglishUnits',
      gradeSheet.bagrut.english.units
    )
    // Bagrut English grade
    await page.type(
      '#ContentPlaceHolder1_txtEnglishGrade',
      gradeSheet.bagrut.english.grade
    )
    // Psychomteri General grade
    await page.type(
      '#ContentPlaceHolder1_txtPsychmetric',
      gradeSheet.pet.final.general
    )

    // Next fields are required for scientific programs applicants...

    // Psychometri Mathemtical Grade
    await page.type(
      '#ContentPlaceHolder1_txtPsychmetricMath',
      gradeSheet.pet.section.english
    )
    // Physics Bagrut Grade (optional) (mandatory for engineering)
    await page.type(
      '#ContentPlaceHolder1_txtPhysics',
      gradeSheet.bagrut.physics.grade
    )
    // Physics Bagrut Points (optional) (mandatory for engineering)
    await page.select(
      '#ContentPlaceHolder1_ddlPhysics',
      gradeSheet.bagrut.physics.units
    )
    // Chemistry Bagrut Grade (optional)(mandatory for chemistry)
    await page.type(
      '#ContentPlaceHolder1_txtChemistry',
      gradeSheet.bagrut.chemistry.grade
    )
    // Chemistry Bagrut Points (optional) (mandatory for chemistry)
    await page.select(
      '#ContentPlaceHolder1_ddlChemistry',
      gradeSheet.bagrut.chemistry.units
    )
    // Biology Bagrut Grade (optional)(mandatory for Biology)
    await page.type(
      '#ContentPlaceHolder1_txtBiology',
      gradeSheet.bagrut.biology.grade
    )
    // Biology Bagrut Points (optional)(mandatory for Biology)
    await page.select(
      '#ContentPlaceHolder1_ddlBiology',
      gradeSheet.bagrut.biology.units
    )

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

    const rowData = await page.$$eval(
      config.ROW_SELECTOR,
      BIUResultSheet.extractRowData
    )

    const BIUResults = new BIUResultSheet()

    await rowData.forEach((results) => {
      BIUResults.addResult(results[0], results[1], results[2], results[3])
    })

    console.log('this is line 77', BIUResults)

    await browser.close()
  },
}

export default scraperObject
