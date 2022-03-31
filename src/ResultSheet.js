class ResultSheet {
  constructor() {}
  results = {}
  // TODO : add 'link' property that holds a link to the orignial page where results were extracted from.

  addResult(curriculum, departemnt, admissionStatus, enrollmentStatus) {
    this.results[curriculum] = {
      departemnt,
      admissionStatus,
      enrollmentStatus,
    }
  }
}

export default ResultSheet
