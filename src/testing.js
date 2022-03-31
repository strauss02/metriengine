import main from './BIU/index.js'
import GradeSheet from './GradeSheet.js'

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
    grade: '80',
    units: '5',
  },
}

testGradeSheet.addBagrutGrades(testBagrutGrades)
testGradeSheet.addPetGrades(testPetGrades)
testGradeSheet.addBIUSum('120')

console.log(testGradeSheet)

let results = await main(testGradeSheet)

console.log(results)
