import ResultSheet from '../ResultSheet.js'

class BIUResultSheet extends ResultSheet {
  constructor() {
    super()
  }

  static extractRowData(rows) {
    let arr = rows.map((row) => {
      return [
        row.children.item(0).textContent.trim(),
        row.children.item(1).textContent.trim(),
        row.children.item(2).textContent.trim(),
        row.children.item(3).textContent.trim(),
      ]
    })
    return arr
  }
}

export default BIUResultSheet
