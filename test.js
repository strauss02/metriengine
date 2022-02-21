import { parse } from 'url'
import https from 'https'
import bl from 'bl'

export async function fetchHTML(URL) {
  const endpoint = URL
  console.log('Attempting to POST %j', endpoint)
  // Prepare options for the http/s module by parsing the endpoint URL:
  let options = parse(endpoint)
  options.body =
    'txtBagrut=100&txtPsicho=600&allfacs=1&facs=11&facs=06&facs=01&facs=12&facs=07&facs=03&facs=14&facs=08&facs=04&facs=15&facs=10&facs=05&facs=18&facs=09&Enter.x=33&Enter.y=11'

  options.method = 'POST'
  // Make an HTTP GET request:
  try {
    return new Promise((resolve, reject) => {
      https.request(options, (response) => {
        response.pipe(
          bl((err, data) => {
            if (err) {
              reject(err)
            }
            resolve(data.toString())
          })
        )
      })
    })
  } catch (error) {
    console.log('There was an error while trying to fetch. error:', error)
    return error
  }
}

await fetchHTML('https://www.ims.tau.ac.il/Md/Ut/Sikuim_T.aspx').then((res) =>
  console.log(res)
)
