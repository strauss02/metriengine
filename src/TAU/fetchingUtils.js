import fetch from 'node-fetch'
import * as cheerio from 'cheerio'
import IdBySubject from './IdBySubject.js'

export async function fetchHTML(bagrut, psicho) {
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
      body: `txtBagrut=${bagrut}&txtPsicho=${psicho}&allfacs=1&facs=11&facs=06&facs=01&facs=12&facs=07&facs=03&facs=14&facs=08&facs=04&facs=15&facs=10&facs=05&facs=18&facs=09&Enter.x=33&Enter.y=11`,
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

  let rates = {}

  elements.each(function (index) {
    if (
      !$(this).attr('class') &&
      $(this).css('text-align') === 'right' &&
      !$(this).hasClass('rowalter') &&
      $(this).text().includes('פרטים')
    ) {
      const line = $(this).text()

      const infoArr = []
      $(this)
        .children()
        .each(function (index) {
          infoArr.push($(this).text())
        })

      const indexOfID = getIndexOfDegreeID(line)

      const degreeName = line.slice(indexOfID, line.length) //OKAY
      const degreeAcceptance = line.slice(0, indexOfID)
      const splittedLine = degreeAcceptance.split(/\s/)

      // const degreeInfo = {
      //   isOpen: degreeAcceptance.match(/פתוחה/) ? true : false,
      //   acceptanceLastYear: splittedLine,
      // }

      const degreeInfo = {
        isOpen: infoArr[2],
        acceptanceLastYear: infoArr[3],
        acceptanceCurrentYear: infoArr[4],
      }

      rates[`${degreeName} Degree Name`] = degreeInfo
    }
  })

  return rates
}

function getIndexOfDegreeID(string) {
  const regex = /\d{4}/

  return string.search(regex)
}

export async function getAcceptanceRates(bagrut, psicho) {
  const $ = await fetchHTML(bagrut, psicho)

  const results = parseAcceptanceByDegree($)

  return results
}

export function createSumRequestBody(bagrutGrades) {
  let body = ``
  for (let subject in bagrutGrades) {
    const id = IdBySubject[subject]
    const subjectData = bagrutGrades[subject]
    body += `tziun${id}=${subjectData.grade}&yl${id}=${subjectData.units}&`
  }
  return body
}

export async function getTAUSums(gradeSheet) {
  const body = createSumRequestBody(gradeSheet.bagrut)
  const response = await fetch(
    'https://www.ims.tau.ac.il/Md/Ut/Bagrut_T.aspx',
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
      body,
    }
  )
    .then(function (res) {
      // The API call was successful!
      return res.text()
    })
    .catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err)
    })

  const $ = await cheerio.load(response)

  let sum = await parseSum($)
  return sum
}

function parseSum(HTML) {
  let $ = HTML
  const elements = $(`td[style = "font-size:16px"] b`)
  const sumCell = elements.get(1)
  console.log()
  const sum = sumCell.children[0].data

  return sum
}
