class GradeSheet {
  constructor() {}
  bagrut = {}
  pet = {}
  sums = {}

  addBagrutGrades(bagrutGrades) {
    this.bagrut = bagrutGrades
  }

  addPetGrades(petGrades) {
    this.pet = petGrades
  }

  addBIUSum(sum) {
    this.sums.biu = sum
  }
}
export default GradeSheet
