import { main2 } from './BIU/index.js'
import { GradeSheet } from './GradeSheet.js'
import {
  createSumRequestBody,
  getTAUSums,
  getAcceptanceRates,
} from './TAU/fetchingUtils.js'
import getTAU from './TAU/index.js'

let testGradeSheet = new GradeSheet()

const testPetGrades = {
  section: {
    quantitative: '150',
    verbal: '150',
    english: '150',
  },
  final: {
    general: '800',
    quantitative: '800',
    verbal: '800',
  },
}

const testBagrutGrades = {
  english: {
    grade: '90',
    units: '5',
  },
  civics: {
    grade: '91',
    units: '3',
  },
  math: {
    grade: '92',
    units: '4',
  },
  history: {
    grade: '94',
    units: '3',
  },
  hebrew: {
    grade: '95',
    units: '2',
  },
  literature: {
    grade: '96',
    units: '2',
  },
  bible: {
    grade: '80',
    units: '2',
  },
  biology: {
    grade: '99',
    units: '5',
  },
  physics: {
    grade: '89',
    units: '5',
  },
  someObscureSubject: {
    hasBonus: 'true',
    grade: '87',
    units: '5',
  },
}

testGradeSheet.addBagrutGrades(testBagrutGrades)
testGradeSheet.addPetGrades(testPetGrades)

// testGradeSheet.addBIUSum('120')

async function testTAU(gradeSheet) {
  const results = await getTAU(gradeSheet)
  console.dir(results)
}

async function testBIU(gradeSheet) {
  // let sum = await getBIUSums(gradeSheet)
  // console.log(sum)
  let testRates = await main2(gradeSheet)
  console.dir('testrates from end', await testRates)
}

function testAll(gradeSheet) {}
// UPDATE 31/5/2022 : TAU and BIU are working from start to end. This doesn't include edge case handling and was not thoroughly tested.
// I Think next step should be start working on another university.

// testBIU(testGradeSheet)
testTAU(testGradeSheet)
