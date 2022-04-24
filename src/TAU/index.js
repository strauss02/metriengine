import { getAcceptanceRates, getTAUSums } from './fetchingUtils.js'

async function main(gradeSheet) {
  // Get TAU sums
  // TAU has a 'meshuklal' grade based only on bagrut grades.
  const bagrutSum = await getTAUSums(gradeSheet)
  const results = await getAcceptanceRates(
    bagrutSum,
    gradeSheet.pet.final.general
  )
  return results
}

export default main
