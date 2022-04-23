import { getAcceptanceRates, getTAUSums } from './fetchingUtils'

async function main(gradeSheet: any) {
  // Get TAU sums
  const [bagrut, pet] = await getTAUSums(gradeSheet)

  const results = await getAcceptanceRates(bagrut, pet)
  return results
}

export default main
