import { getAcceptanceRates } from './fetchingUtils'

async function main(gradeSheet) {
  // Get TAU sums
  const [bagrut, pet] = await getTAUSums(gradeSheet)

  const results = await getAcceptanceRates(bagrut, pet)
  return results
}

export default main
