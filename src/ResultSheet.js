class ResultSheet {
  constructor() {}
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
