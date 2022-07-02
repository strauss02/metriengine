class GradeSheet {
  constructor() {}
  bagrut = {}
  bagrutHeb = {} // Same as bagrut, but with hebrew subject names
  pet = {}
  sums = {}

  // OPTIONAL-TODO : add 'isBase' field to base bagrut subjects
  addBagrutGrades(bagrutGrades) {
    this.bagrut = bagrutGrades
  }

  addHebrewBagrutGrades(bagrutHebGrades) {
    this.bagrutHeb = bagrutHebGrades
  }

  addPetGrades(petGrades) {
    this.pet = petGrades
  }

  addBIUSum(sum) {
    this.sums.biu = sum
  }
  addTAUSum(sum) {
    this.sums.TAU = sum
  }
}

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

const bagrutHebGrades = {
  אנגלית: {
    grade: '90',
    units: '5',
  },
  אזרחות: {
    grade: '91',
    units: '3',
  },
  מתמטיקה: {
    grade: '92',
    units: '4',
  },
  היסטוריה: {
    grade: '94',
    units: '3',
  },
  עברית: {
    grade: '95',
    units: '2',
  },
  ספרות: {
    grade: '96',
    units: '2',
  },

  'תנ"ך': {
    grade: '80',
    units: '2',
  },
  ביולוגיה: {
    grade: '99',
    units: '5',
  },
  פיסיקה: {
    grade: '89',
    units: '5',
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
testGradeSheet.addHebrewBagrutGrades(bagrutHebGrades)
testGradeSheet.addBagrutGrades(testBagrutGrades)
testGradeSheet.addPetGrades(testPetGrades)

export { testGradeSheet, GradeSheet }
