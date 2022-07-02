import fetch from 'node-fetch'
import professionMap from './professionMap'

export class HUJIScraper {
  constructor() {}

  async getBagrutAvg(gradeSheet) {
    let subjects = []
    for (let subject in gradeSheet.bagrutHeb) {
      subjects.push({
        SubjectID: professionMap[subject]['SubjectID'],
        IsProject: false,
        Points: gradeSheet.bagrutHeb[subject]['units'],
        Grade: gradeSheet.bagrutHeb[subject]['grade'],
      })
    }
    console.log(subjects)
    const results = await fetch(
      'https://bagrut-calculator.huji.ac.il/api/api/bargrutCalculator/GetBagrutCalc/',
      {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Year: 2023, // שנת לימודים
          SectorID: 1, // מגזר - יהודי, ערבי וכו'
          Subjects: subjects,
        }),
        method: 'POST',
      }
    )
    return await results.json()
  }
}
