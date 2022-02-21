import fetch from 'node-fetch'
import { parse } from 'node-html-parser'

async function main() {
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
      body: 'txtBagrut=100&txtPsicho=600&allfacs=1&facs=11&facs=06&facs=01&facs=12&facs=07&facs=03&facs=14&facs=08&facs=04&facs=15&facs=10&facs=05&facs=18&facs=09&Enter.x=33&Enter.y=11',
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    }
  )

  const responseToText = await response.text()

  const parsedHtml = parse(responseToText)

  // console.log(responseToText)
  // console.log(parsedHtml)

  const sample = `<tr style="text-align: center">
      <td>
        <table
          class="tablebld"
          cellpadding="3"
          border="1"
          bordercolor="skyblue"
        >
          <tr class="listth">
            <th bgcolor="white" dir="rtl">
              <span style="color: blue">
                ציונך (<img src="/Md/Images/c_point.gif" />) מצוי בטווח של
              </span>
              <br />
              <span style="color: #99ff99">
                &#9632;<span style="color: green">קבלה</span>&nbsp;&nbsp;
              </span>
              <span style="color: #808080">&#9632;חסר החלטה&nbsp;&nbsp;</span>
              <span style="color: red">&#9632;דחיה&nbsp;&nbsp;</span>
            </th>
            <th>פירוט</th>
            <th>הרשמה</th>
            <th>שנה קודמת</th>
            <th style="background-color: skyblue; color: blue">החלטה</th>
            <th>תכנית לימודים</th>
            <th>פקולטה</th>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588670669" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=010411040455')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0104 - מדעי החיים ומדעי הרפואה תכנית משולבת&nbsp;
            </td>
            <td dir="rtl" class="rowalter">
              &nbsp;רפואה&nbsp;
            </td>
          </tr>
          <tr style="text-align: right">
            <td>&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=011167010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=011167010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0111 - ביה"ס לרפואה&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588640639" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=016111010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0161 - לימודי הפרעות בתקשורת חד חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588540539" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=016211010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0162 - סיעוד (תכנית בסיסית) חד חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588540539" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=016211010208')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0162 - "סיעוד בפסגה"-מיועד לנרשמים במסגרת העתודה
              האקדמית&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588545539" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=016211010209')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0162 - סיעוד (תכנית בסיסית) - למעונינים ביום לימודים קצר-
              הלימודים בבי"ח "מאיר"&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588600599" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=016411010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0164 - פיזיותרפיה חד חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588612611" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=016511010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0165 - ריפוי בעיסוק חד חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=019168010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=019168010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0191 - ביה"ס לרפואת שיניים&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588640610" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=032111010100')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0321 - פיזיקה ואסטרונומיה- חד חוגי&nbsp;
            </td>
            <td dir="rtl" class="rowalter">
              &nbsp;מדעים מדויקים&nbsp;
            </td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588640610" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=032111050000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0321 - פיזיקה ואסטרונומיה דו חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588640610" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=032111050351')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0321 - פיזיקה ואסטרונומיה דו חוגי-פיזיקה כימיה דו-חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588671670" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=032311010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0323 - מסלול משולב מתמטיקה - פיזיקה חד חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588610589" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=034111010105')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #a9a9a9">בדיון פרטני</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0341 - מדעי כדור הארץ חד-חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588680679" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=034111010120')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0341 - מדעי כדור הארץ -מצטיינים&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588610589" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=034111050000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #a9a9a9">בדיון פרטני</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0341 - מדעי כדור הארץ דו חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588510489" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=034911050000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0349 - גאוגרפיה וסביבת האדם דו-חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801000620574" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=035111010101')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #a9a9a9">בדיון פרטני</span>&nbsp;
            </td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td dir="rtl" style="color: black">
              &nbsp;0351 - כימיה חד חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588700679" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=035111010120')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0351 - כימיה חד-חוגי-מחקרי בכימיה&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801000620574" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=035111050000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #a9a9a9">בדיון פרטני</span>&nbsp;
            </td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td dir="rtl" style="color: black">
              &nbsp;0351 - כימיה דו חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801000620574" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=035111050105')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #a9a9a9">בדיון פרטני</span>&nbsp;
            </td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td dir="rtl" style="color: black">
              &nbsp;0351 - כימיה דו-חוגי-כימיה דו-חוגי עם פק' אחרת&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588640610" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=035111050321')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0351 - כימיה דו-חוגי-כימיה פיזיקה דו-חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801000620574" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=035111050455')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #a9a9a9">בדיון פרטני</span>&nbsp;
            </td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td dir="rtl" style="color: black">
              &nbsp;0351 - כימיה דו-חוגי-בצירוף מגמה לביולוגיה&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588645644" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=036511010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0365 - סטטיסטיקה וחקר ביצועים חד חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588645644" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=036511050000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0365 - סטטיסטיקה וחקר ביצועים דו חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588000650" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=036511050265')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0365 - סטטיסטיקה וחקר ביצועים דו-חוגי-בצירוף מתמטיקה שימושית
              במסלול להיי-טק&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588640639" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=036611010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0366 - מתמטיקה חד חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588640639" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=036611050000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0366 - מתמטיקה דו חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588651650" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=036611050265')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0366 - מתמטיקה שימושית דו-חוגי-בצירוף סטטיסטיקה וחקר ביצועים
              במסלול להיי-טק&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588640639" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=036611151161')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0366 - מתימטיקה דו חוגי עם חטיבות בכלכלה ובפילוסופיה&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588660659" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=036611151171')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0366 - מתימטיקה דו חוגי עם חטיבות בכלכלה ובפסיכולוגיה&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588660659" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=036611156171')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0366 - מתימטיקה דו חוגי עם חטיבות בפסיכולוגיה
              ובפילוסופיה&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588716715" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=036811010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0368 - מדעי המחשב חד חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588716715" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=036811040455')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0368 - מדעי המחשב תכנית משולבת-התמחות בביואינפורמטיקה&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588716715" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=036811050000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0368 - מדעי המחשב דו חוגי המצטרף לחוג באותה פקולטה&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588716715" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=036811050105')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0368 - מדעי המחשב דו חוגי-המצטרף לחוג מפקולטה אחרת&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588716715" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=036811050365')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0368 - מדעי המחשב דו חוגי-המצטרף לסטטיסטיקה וחקר
              ביצועים&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588716715" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=036811050366')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0368 - מדעי המחשב דו חוגי-בצירוף מתמטיקה&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588716715" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=036811050627')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0368 - מדעי המחשב דו-חוגי-בצירוף בלשנות&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588580579" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=045511010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0455 - מגמה לביולוגיה חד חוגי&nbsp;
            </td>
            <td dir="rtl" class="rowalter">
              &nbsp;מדעי החיים&nbsp;
            </td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=003000103000" title="ממוצע בגרות" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=045511010120')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #a9a9a9">בדיון פרטני</span>&nbsp;
            </td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td dir="rtl" style="color: black">
              &nbsp;0455 - מגמה לביולוגיה חד-חוגי-תכנית מחקרית למצטיינים&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588648647" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=045511010459')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0455 - מגמה לביולוגיה חד-חוגי-הדגש בביוטכנולוגיה&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588610609" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=045511010476')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0455 - מגמה לביולוגיה חד-חוגי-הדגש באקולוגיה ואבולוציה&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588670669" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=045511040104')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0455 - מגמה לביולוגיה תכנית משולבת-בצירוף מדעי החיים
              ומדע&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588716715" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=045511040368')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0455 - מגמה לביולוגיה תכנית משולבת-התמחות
              בביואינפורמטיקה&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588582581" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=045511050000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0455 - מגמה לביולוגיה דו חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>&nbsp;</td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=045511050351')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #a9a9a9">בדיון פרטני</span>&nbsp;
            </td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td dir="rtl" style="color: black">
              &nbsp;0455 - מגמה לביולוגיה דו-חוגי-ביולוגיה כימיה&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=701588690689" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=051211010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0512 - מגמה להנדסת חשמל ואלקטרוניקה חד חוגי&nbsp;
            </td>
            <td dir="rtl" class="rowalter">
              &nbsp;הנדסה&nbsp;
            </td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=701588695694" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=051211040321')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0512 - הנדסת חשמל ואלקטרוניקה תכ' משולבת עם פיזיקה&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=701588716715" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=051211040368')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0512 - הנדסת חשמל ואלקטרוניקה משולב עם מדעי המחשב&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=701588635634" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=054211010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0542 - מגמה להנדסה מכנית חד חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=701588658657" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=054211010341')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0542 - הנדסה מכנית ומדעי כדור הארץ - הדגש בלימודי הסביבה-
              תכנית כפולה&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=701588675674" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=055511010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0555 - המגמה להנדסה ביו-רפואית חד חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588655654" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=056011050000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0560 - מדעים להיי-טק - דו-חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=701588661660" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=057311010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0573 - הנדסת תעשייה וניהול חד חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=701588635634" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=058111010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0581 - מדע והנדסה של חומרים&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=701588650649" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=058111010351')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0581 - מדע והנדסה של חומרים וכימיה- תואר כפול&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600450000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=060011')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0600 - חוגי מדעי הרוח (למעט הרשומים מטה)&nbsp;
            </td>
            <td dir="rtl" class="rowalter">
              &nbsp;רוח&nbsp;
            </td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588525519" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=060811050000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0608 - תכנית ללימודי נשים ומגדר בסיוע NCJW דו חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600450000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=061811')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0618 - פילוסופיה&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588660639" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=061811050171')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0618 - פילוסופיה- חקר התודעה והקוגניציה&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600450000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=062111')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0621 - היסטוריה כללית&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600450000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=06221105')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0622 - היסטוריה של המזרח התיכון ואפריקה דו-חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600450000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=062511')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0625 - צרפתית&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600450000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=062611')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>
              <span style="color: #a9a9a9">-*מבחן כניסה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>
              <span style="color: black">-*מבחן כניסה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0626 - אנגלית ולימודים אמריקניים&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600450000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=062711')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0627 - בלשנות&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600450000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=063111')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0631 - לימודי הערבית והאסלאם&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600450000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=063111050137')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0631 - לימודי הערבית והאסלאם דו-חוגי-המגמה ללימודי
              האסלאם&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588671670" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=065111010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0651 - תכ' משולבת- פילוסופיה, כלכלה ומדע
              המדינה-למצטיינים&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600450000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=066211050000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0662 - התכנית הרב תחומית במדעי הרוח דו חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600450000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=066811050000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0668 - החוג לתרבות צרפת דו-חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600450000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=067111')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0671 - ארכיאולוגיה ותרבויות המזרח הקד&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600450000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=067211')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0672 - לימודים קלאסיים&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600450000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=067711')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0677 - היסטוריה של עם ישראל&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600450000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=068011')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0680 - ספרות&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600450000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=068711')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0687 - לימודי מזרח אסיה&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600450000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=069311')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0693 - לימודי אפריקה-בתכנית בין אוניב&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588550549" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=07231105')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0723 - חינוך&nbsp;
            </td>
            <td dir="rtl" class="rowalter">
              &nbsp;חינוך&nbsp;
            </td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600450000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=081111')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0811 - אמנות התאטרון&nbsp;
            </td>
            <td dir="rtl" class="rowalter">
              &nbsp;אמנויות&nbsp;
            </td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600450000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=081111010130')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0811 - אמנות התאטרון -מסלול מצטיינים במשחק חד-חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600450000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=082111')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0821 - תולדות האמנות&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=003100095000" title="ממוצע בגרות" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=084211')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>
              <span style="color: #a9a9a9">-*מבחן כניסה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>
              <span style="color: black">-*מבחן כניסה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0842 - ביה"ס למוזיקה-המגמה לבצוע מוזי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600400000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=084311')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>
              <span style="color: #a9a9a9">-*מבחן כניסה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>
              <span style="color: black">-*מבחן כניסה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0843 - ביה"ס למוזיקה-מגמה לקומפוזיציה&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600400000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=084511')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>
              <span style="color: #a9a9a9">-*מבחן כניסה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>
              <span style="color: black">-*מבחן כניסה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0845 - ביה"ס למוזיקה-מגמת מוזיקולוגיה&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600450000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=085111010200')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0851 - קולנוע וטלוויזיה חד-חוגי-חד-חוגי עיוני&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600450449" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=085111050000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0851 - קולנוע וטלוויזיה דו חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=002600450000" title="ציון פסיכומטרי" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=086111')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;0861 - התכנית הרב-תחומית באמנויות&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588610609" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=101111030000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1011 - ביה"ס לכלכלה מורחב&nbsp;
            </td>
            <td dir="rtl" class="rowalter">
              &nbsp;מדעי החברה&nbsp;
            </td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588700699" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=101111030120')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1011 - ביה"ס לכלכלה מסלול מצטיינים לתואר ראשון ולתואר
              שני&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588610609" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=101111050000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1011 - ביה"ס לכלכלה דו חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588535534" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=103111030000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1031 - מדע המדינה מורחב&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588535534" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=103111050000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1031 - מדע המדינה דו חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588525524" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=104111030000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1041 - סוציולוגיה ואנתרופולוגיה מורחב&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588525524" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=104111050000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1041 - סוציולוגיה ואנתרופולוגיה דו חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588525524" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=104111054151')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1041 - סוציולוגיה ואנתרופולוגיה דו-חוגי במסלול מנהיגות
              ומשאבי אנוש&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588535534" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=104111054185')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1041 - סוציולוגיה ואנתרופולוגיה דו חוגי בצירוף תקשורת -
              במסלול לחקר חברה דיגיטלית&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588525524" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=105111050000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1051 - לימודי עבודה דו-חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588525524" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=105111054151')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1051 - לימודי עבודה דו-חוגי במסלול מנהיגות ומשאבי אנוש&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588660659" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=107111030000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1071 - פסיכולוגיה מורחב&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588660659" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=107111050000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1071 - פסיכולוגיה דו חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588660659" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=107111050171')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1071 - פסיכולוגיה- חקר התודעה והקוגניציה&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588660659" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=107111057108')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1071 - פסיכולוגיה- יסודות תיאורטיים לטיפול רגיש מגדר -
              בשילוב עם לימודי נשים ומגדר&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588660659" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=107111057127')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1071 - פסיכולוגיה ובלשנות דו חוגי ייחודי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588540539" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=108511050000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1085 - תקשורת דו חוגי&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588535534" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=108511054185')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1085 - תקשורת דו חוגי בצירוף סוציולוגיה ואנתרופולוגיה -
              במסלול לחקר חברה דיגיטלית&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588570569" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=111011010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #8fbc8b">קבלה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">קבלה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1110 - ביה"ס לעבודה סוציאלית&nbsp;
            </td>
            <td dir="rtl" class="rowalter">
              &nbsp;עבודה סוציאלית&nbsp;
            </td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=101591619618" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=121111050000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1211 - חשבונאות&nbsp;
            </td>
            <td dir="rtl" class="rowalter">
              &nbsp;ניהול&nbsp;
            </td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=101591619618" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=121111051221')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1211 - חשבונאות דו-חוגי-בצירוף ניהול&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=101591670669" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=121111051411')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1211 - חשבונאות דו-חוגי-בצירוף משפטים&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=101591624623" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=122111050000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1221 - ניהול&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=101591619618" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=122111051211')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1221 - ניהול דו-חוגי-בצירוף חשבונאות&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=001588655654" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=141111010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1411 - משפטים&nbsp;
            </td>
            <td dir="rtl" class="rowalter">
              &nbsp;משפטים&nbsp;
            </td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588716715" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=151311010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1513 - פסיכולוגיה ומ. המחשב- הדגש מוח&nbsp;
            </td>
            <td dir="rtl" class="rowalter">
              &nbsp;לימודי המוח&nbsp;
            </td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588700699" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=151411010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">סגורה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1514 - ביולוגיה ופסיכולוגיה עם הדגש במדעי המוח&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588680679" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=152111010321')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1521 - תואר ראשון בפיזיקה עם חטיבה במדעי המוח&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=701588700699" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=155411010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1554 - הנדסה ביו-רפואית וביולוגיה עם הדגש במדעי המוח&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>
              <img src="Chart.aspx?data=801588690689" title="ציון התאמה" />
            </td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=156411010000')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #ff9191">דחיה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: red">דחיה</span>&nbsp;
            </td>
            <td dir="rtl" style="color: black">
              &nbsp;1564 - ביולוגיה ובלשנות עם הדגש במדעי המוח&nbsp;
            </td>
            <td dir="rtl">&nbsp;&nbsp;</td>
          </tr>
          <tr style="text-align: right">
            <td>&nbsp;</td>
            <td>
              &nbsp;
              <a href="javascript:openwin('Hatachim_T.aspx?tc=182211')">
                פרטים
              </a>
              &nbsp;
            </td>
            <td>
              &nbsp;<span style="color: green">פתוחה</span>&nbsp;
            </td>
            <td>
              &nbsp;<span style="color: #a9a9a9">בדיון פרטני</span>&nbsp;
            </td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td dir="rtl" style="color: black">
              &nbsp;1822 - תכ. ייחודית למצטיינים-חד תחומי&nbsp;
            </td>
            <td dir="rtl" class="rowalter">
              &nbsp;תכניות לימוד מיוחדות&nbsp;
            </td>
          </tr>
        </table>
      </td>
    </tr>`

  const allTableRows = parse(sample).querySelectorAll('tr')

  const rowsHtml = allTableRows.map((tableRow) => {
    const cell = tableRow.querySelectorAll('td')[5]
    if (cell) {
      console.log(tableRow.querySelectorAll('td')[5].text)
      return tableRow.querySelectorAll('td')[5].text
    } else return
  })
}

main()
