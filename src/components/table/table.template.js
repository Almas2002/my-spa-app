const Codes = {
    A: 65,
    Z: 90
}
function createCell(el) {
    return `
    <div class="cell" contenteditable>${el}</div>
    `
}
function createCol(el) {
    return `
       <div class="column">${el}</div>
    `
}
function createRow(index,content) {
    return `
     <div class="row">  
        <div class="row-info">${index ? index : ''}</div>
        <div class="row-data">${content}</div>
     </div>
    `
}
function toChar(_,index) {
   return String.fromCharCode(Codes.A + index)
}

export function createTable(rowsCount = 15) {

    const colsCount = Codes.Z - Codes.A + 1
    const rows = []
    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(createCol)
        .join('')
    rows.push(createRow(null,cols))
    for(let  i = 0;i<rowsCount;i++){
        const cells = new Array(colsCount)
            .fill('')
            .map(createCell)
            .join('')
        rows.push(createRow(i+1,cells))
    }
    return rows.join('')

}