class GradeSheet {
  constructor() {}
  bagrut = {}
  pet = {}
  sums = {}

  // OPTIONAL-TODO : add 'isBase' field to base bagrut subjects
  addBagrutGrades(bagrutGrades) {
    this.bagrut = bagrutGrades
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
export default GradeSheet
