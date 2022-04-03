import main from './BIU/index.js'
import GradeSheet from './GradeSheet.js'
import {
  createSumRequestBody,
  getTAUSums,
  getAcceptanceRates,
} from './TAU/fetchingUtils.js'

let testGradeSheet = new GradeSheet()

const testPetGrades = {
  section: {
    quantitive: '150',
    verbal: '150',
    english: '150',
  },
  final: {
    general: '800',
    quantitive: '800',
    verbal: '800',
  },
}

const testBagrutGrades = {
  english: {
    grade: '90',
    units: '5',
  },
  civics: {
    grade: '90',
    units: '3',
  },
  math: {
    grade: '90',
    units: '3',
  },
  history: {
    grade: '90',
    units: '3',
  },
  hebrew: {
    grade: '90',
    units: '3',
  },
  literature: {
    grade: '90',
    units: '3',
  },
  bible: {
    grade: '90',
    units: '3',
  },
  biology: {
    grade: '90',
    units: '5',
  },
  physics: {
    grade: '80',
    units: '5',
  },
  chemistry: {
    grade: '90',
    units: '10',
  },
}

testGradeSheet.addBagrutGrades(testBagrutGrades)
testGradeSheet.addPetGrades(testPetGrades)
testGradeSheet.addBIUSum('120')

// let results = await main(testGradeSheet)
let sum = await getTAUSums(testGradeSheet)
console.log(sum)
let testRates = await getAcceptanceRates(Number(sum), 700)

console.log(await testRates)
