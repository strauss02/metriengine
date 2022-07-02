import puppeteer from 'puppeteer'
import config from './config.js'
import BIUResultSheet from './BIUResultSheet.js'
import { NUM_BY_SUBJECT, SUBJECT_BY_NUM, TRANSLATIONS } from './constants.js'

const scrape = async (gradeSheet) => {
  /***********************
 PHASE 0 - SET UP BROWSER
 ************************/
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  /***********************
   PHASE 1 - CALCULATE BAGRUT AVG
   ************************/
  await page.goto('https://bagrut-calculator.huji.ac.il/calculator/#/calc-type')
  console.log(`Navigating to ${'site'}...`)

  // Why 8? the ID enumeration of the first elective subject input starts with 8.
  // All following elective input ID's are serially increasing by one.
  let electivesCount = 8
  for (const subject in gradeSheet.bagrut) {
    let num = SUBJECT_BY_NUM[subject]
    // If num is undefined, that means the current subject is an elective subject.
    // We increase the electivesCount so that the following elective will get input to the correct field.
    if (num === undefined) {
      num = electivesCount
      electivesCount++
      // Elective subjects require selection from a dropdown.
      await page.select(
        `#ContentPlaceHolder1_rptSubjects_cmbSubjects_${num}`,
        // select the elective subject (translate)
        TRANSLATIONS[subject] ||
          (gradeSheet.bagrut[subject].hasBonus && 'אחר (כולל בונוס)') ||
          'אחר_1'
      )
    }
    // If the current subject is a base bagrut subject, fill it's info in the corresponding input. (Only base subjects are enumerated by BIU)
    // units
    await page.type(
      `#ContentPlaceHolder1_rptSubjects_edtUnits_${num}`,
      gradeSheet.bagrut[subject].units
    )
    // grade
    await page.type(
      `#ContentPlaceHolder1_rptSubjects_edtGrade_${num}`,
      gradeSheet.bagrut[subject].grade
    )
    console.log(subject)
  }

  await page.click('#ContentPlaceHolder1_btnCalcMat0')
  await page.waitForResponse(
    (response) =>
      response.url() === 'https://shoham.biu.ac.il/kabala/Bagrut.aspx' &&
      response.status() === 200
  )
  console.log('clicked and responded')
  await page.waitForTimeout(1000)
  await page.click('#ContentPlaceHolder1_btnNext')
  await page.waitForTimeout(1000)

  page.waitForNavigation({ waitUntil: 'networkidle2' })

  /***********************
 PHASE 2 - 
 ************************/

  // Bagrut Meshuklal
  await page.type('#ContentPlaceHolder1_txtBagrut', String(gradeSheet.sums.biu))
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

  // await browser.close()/

  console.log('testrates from within', BIUResults)
  return BIUResults

  /****************
 
 ******************/
}

export default scrape
