import fetch from 'node-fetch'
import * as cheerio from 'cheerio'

export async function fetchHTML() {
  const response = await fetch(
    'https://www.ims.tau.ac.il/Md/Ut/Sikuim_T.aspx',
    {
      headers: {
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-language': 'he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded',
        pragma: 'no-cache',
        'sec-ch-ua':
          '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
      },
      referrer: 'https://www.ims.tau.ac.il/Md/Ut/Sikuim.aspx',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: 'txtBagrut=80&txtPsicho=7100&allfacs=1&facs=11&facs=06&facs=01&facs=12&facs=07&facs=03&facs=14&facs=08&facs=04&facs=15&facs=10&facs=05&facs=18&facs=09&Enter.x=33&Enter.y=11',
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    }
  )
    .then(function (res) {
      // The API call was successful!
      return res.text()
    })
    .then(function (html) {
      // This is the HTML from our response as a text string
      return html
    })
    .catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err)
    })

  const $ = await cheerio.load(response)

  return $

  // const rowsHtml = allTableRows.map((tableRow) => {
  //   const cell = tableRow.querySelectorAll('td')[5]
  //   if (cell) {
  //     console.log(tableRow.querySelectorAll('td')[5].text)
  //     return tableRow.querySelectorAll('td')[5].text
  //   } else return
  // })
}

export async function getRawHtml() {
  const $ = await fetchHTML()

  return $.html()
}

function parseAcceptanceByDegree(HTML) {
  let $ = HTML
  const elements = $('tr')

  let arr = []

  elements.each(function (index) {
    if (
      !$(this).attr('class') &&
      $(this).css('text-align') === 'right' &&
      !$(this).hasClass('rowalter') &&
      $(this).text().includes('פרטים')
    ) {
      arr.push(index + ':' + $(this).text() + $(this).text().includes('קבלה'))
    }
  })

  return arr
}

export async function getAcceptanceRates() {
  const $ = await fetchHTML()

  const results = parseAcceptanceByDegree($)

  return results
}
