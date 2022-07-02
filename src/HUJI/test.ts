import { testGradeSheet } from '../GradeSheet'
import { HUJIScraper } from './HUJI.scraper'

const scraper = new HUJIScraper()

scraper.getBagrutAvg(testGradeSheet).then(console.log)
