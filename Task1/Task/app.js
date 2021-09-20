const table = document.getElementById('table');
const newMatrix = document.getElementById('result');
const colom = document.getElementById('width');
const row = document.getElementById('height');
const startWidth = document.getElementById('startwidth');
const startHeight = document.getElementById('startheight');
const chuzSide = document.getElementById('side');
const btnEnd = document.getElementById('sendNew');
const spiral = document.getElementById('return');
let madeTable = document.createElement('TBODY');
table.append(madeTable);


function rowArray(width, height, innerWidth, innerHeight, side) {
    let matrix = [];
    let q = 1;
    for (let i = 0; i < height; i++) {
        matrix[i] = [];
        let tr = document.createElement('TR');
        madeTable.appendChild(tr);
        for (let j = 0; j < width; j++) {
            let td = document.createElement("TD");
            matrix[i][j] = q++;
            td.innerHTML = matrix[i][j];
            tr.appendChild(td);
        }
    }
    let returnMatrix = matrix;
    let result = [];
    let startRow = innerHeight - 1;
    let startCol = innerWidth - 1;
    let endRow = innerHeight - 1;
    let endCol = innerWidth - 1;
    let counter = 0;
    let lengthMatrix = [].concat(...returnMatrix);
    while (lengthMatrix.length != result.length) {
        if (side == 'left') {
            for (let i = 0; i <= counter; i++) {
                if (endRow < 0 || startCol - i < 0 || endRow > returnMatrix.length - 1 || startCol - i > returnMatrix[0].length - 1) {
                    continue;
                }
                else {
                    result.push(returnMatrix[endRow][startCol - i]);
                }
            }
            endCol--;
            for (let i = 0; i <= counter; i++) {
                if (endRow - i < 0 || endCol < 0 || endRow - i > returnMatrix.length - 1 || endCol > returnMatrix[0].length - 1) {
                    continue;
                }
                else {
                    result.push(returnMatrix[endRow - i][endCol]);
                }
            }
            startRow--;
            counter++;
            for (let i = 0; i <= counter; i++) {
                if (startRow < 0 || endCol + i < 0 || startRow > returnMatrix.length - 1 || endCol + i > returnMatrix[0].length - 1) {
                    continue;
                }
                else {
                    result.push(returnMatrix[startRow][endCol + i]);
                }
            }
            startCol++;
            for (let i = 0; i <= counter; i++) {
                if (startRow + i < 0 || startCol < 0 || startRow + i > returnMatrix.length - 1 || startCol > returnMatrix[0].length - 1) {
                    continue;
                }
                else {
                    result.push(returnMatrix[startRow + i][startCol]);
                }
            }
            endRow++;
            counter++;
        } else if (side == "right") {
            for (let i = 0; i <= counter; i++) {
                if (endRow < 0 || startCol - i < 0 || endRow > returnMatrix.length - 1 || startCol - i > returnMatrix[0].length - 1) {
                    continue;
                }
                else {
                    result.push(returnMatrix[endRow][startCol - i]);
                }
            }
            endCol--;
            for (let i = 0; i <= counter; i++) {
                if (endRow + i < 0 || endCol < 0 || endRow + i > returnMatrix.length - 1 || endCol > returnMatrix[0].length - 1) {
                    continue;
                }
                else {
                    result.push(returnMatrix[endRow + i][endCol]);
                }
            }
            startRow++;
            counter++;
            for (let i = 0; i <= counter; i++) {
                if (startRow < 0 || endCol + i < 0 || startRow > returnMatrix.length - 1 || endCol + i > returnMatrix[0].length - 1) {
                    continue;
                }
                else {
                    result.push(returnMatrix[startRow][endCol + i]);
                }
            }
            startCol++;
            for (let i = 0; i <= counter; i++) {
                if (startRow - i < 0 || startCol < 0 || startRow - i > returnMatrix.length - 1 || startCol > returnMatrix[0].length - 1) {
                    continue;
                }
                else {
                    result.push(returnMatrix[startRow - i][startCol]);
                }
            }
            endRow--;
            counter++;
        }
    }
    let newArray = result;
    newMatrix.innerHTML = `<p class="text"> It's your transform Matrix</p> <div>${newArray.join(', ')}</div>`; 
}

btnEnd.onclick = function () {
    width = colom.value;
    height = row.value;
    innerHeight = startHeight.value;
    innerWidth = startWidth.value;
    side = chuzSide.value;
    rowArray(width, height, innerWidth, innerHeight, side);
    colom.value = '';
    row.value = '';
    startHeight.value = '';
    startWidth.value = '';
    scrollTo(btnEnd);
}
function scrollTo(element) {
    window.scroll({
      top: element.offsetTop
    })
}

