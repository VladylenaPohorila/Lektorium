function rowArray(width, height, innerWidht, innerHeight) {
    let matrix = [];
    let q = 1;
    for (let i = 0; i < height; i++) {
        matrix[i] = [];
        for (let j = 0; j < width; j++) {
            matrix[i][j] = q++;
        }
    }
    let newA = [];
    let startCol = 0;
    let startRow = 0;
    let endCol = width - 1;
    let endRow = height - 1;
    let innerRow = innerHeight - 1;
    let innerCol = innerWidht - 1;
    
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = innerCol; i >= startCol; i--) {
            newA.push(matrix[innerRow][i]);
        }
        innerRow--;
        for (let i = startCol; i <= innerCol; i++) {
            newA.push(matrix[innerRow][i]);
        }
        innerCol++;
        for (let j = innerRow; j <= innerHeight; j++) {
            newA.push(matrix[j][innerCol]);
        }
        innerCol--;
        for (let i = innerCol; i >= startCol; i--) {
            newA.push(matrix[innerHeight][i]);
        }
        innerRow--;
        innerCol++;
        for (let i = startCol; i <= innerCol; i++) {
            newA.push(matrix[innerRow][i]); 
        }
        innerCol++;
        for (let j = innerRow; j <= endRow; j++) {
            newA.push(matrix[j][innerCol]);
        }
        innerCol--;
        for (let i = innerCol; i >= startCol; i--) {
            newA.push(matrix[endRow][i]);
        }
        for (i = startCol; i <= endCol; i++) {
            newA.push(matrix[startRow][i]);
        }
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
        newA.push(matrix[j][endCol]);
        }
        return newA;
    }
}
console.log(rowArray(5, 6, 2, 4));
