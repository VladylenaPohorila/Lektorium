function rowArray(width, height, innerWidth, innerHeight) {
    let matrix = [];
    let q = 1;
    for (let i = 0; i < height; i++) {
        matrix[i] = [];
        for (let j = 0; j < width; j++) {
            matrix[i][j] = q++;
        }
    }

    let size = matrix.length - 1;
    
    let result1 = matrix[innerHeight - 1].slice(0, innerWidth).reverse();
    let result2 = matrix[innerHeight - 2].slice((0), (innerWidth + 1));
    let result3 = matrix[innerHeight - 1].slice(innerWidth, innerWidth + 1);
    let result4 = matrix[innerHeight].slice(0, innerWidth + 1).reverse();
    let result5 = matrix[size - innerHeight].slice(0, innerWidth + 2);
    let result6 = matrix.slice(innerHeight - 2, innerHeight + 1).map(a => a.slice((innerWidth + 1), (innerWidth + 2))).flat();
    let result7 = matrix[size].slice(0, innerWidth + 2).reverse();
    let result8 = matrix[0].slice(0);
    let result9 = matrix.slice(1, size + 1).map(a => a.slice(innerWidth + 2)).flat();
    
    return [].concat(result1, result2, result3, result4, result5, result6, result7, result8, result9);

}
console.log(rowArray(5, 6, 2, 4));