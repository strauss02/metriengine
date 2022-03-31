class ResultSheet {
  constructor(acronym) {
    this.universityAcronym = acronym
  }
  results = {}

  addResult(curriculum, departemnt, admissionStatus, enrollmentStatus) {
    this.results[curriculum] = {
      departemnt,
      admissionStatus,
      enrollmentStatus,
    }
  }
}

export default ResultSheet
