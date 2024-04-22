// let mat = [[1,   2,   3,  4],
//            [5,   6,   7,  8],
// 	       [9,   10,  11, 12],
// 		   [13,  14,  15, 16]];

let mat=[[1,2,3,4]]

// output=1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
        // left          right 
//top      [[1,   2,   3,  4],
//          [5,   6,   7,  8],
//          [9,   10,  11, 12],
//bottom	[13,  14,  15, 16]];

//RIGHT--print from left to right then increment top
//DOWN---print from top to bottom, decrease right
//LEFT---print right to left--decrease bottom
//UP-----print from bottom to top--increment left

// now the points will be as shown below, after completing printing of outer layer
        //      left right 
//         [[1,   2,   3,  4],
//top       [5,   6,   7,  8],
//bottom    [9,   10,  11, 12],
//	        [13,  14,  15, 16]];


//TC=O(n*m)
//SC=O(n*m)

const printSpiralMatrix=(mat)=>{
    const rows=mat.length
    const columns=mat[0].length
    let left=0
    let top=0
    let right=columns-1
    let bottom=rows-1
    let output=new Array()
while(left<=right &&top<=bottom){
    for(let i=left;i<=right;i++){
        output.push(mat[top][i])
    }
    top++
    for(let i=top;i<=bottom;i++){
        output.push(mat[i][right])
    }
    right--
    if(top<=bottom){
        for(let i=right;i>=left;i--){
            output.push(mat[bottom][i])
        }
        bottom--
    }
    if(left<=right){
        for(let i=bottom;i>=top;i--){
            output.push(mat[i][left])
        }
        left++
    }
}
return output
}

console.log("spiral matrix is",printSpiralMatrix(mat))