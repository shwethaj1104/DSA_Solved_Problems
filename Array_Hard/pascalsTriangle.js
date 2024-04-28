//pascal's triangle
//                  1
//               1     1
//           1      2     1
//       1       3     3     1
//   1       4      6     4     1
// 1     5      10     10    5     1

// problem 1:given row and column number print the respective element
// problem 2:given the row number print the entire row
// problem 3:given N print the pascal's triangle untill N

//PROBLEM 1::::::::::::::::::::::::given row and column number print the respective element

let row=5
let column=3
//output is 3

// brute force approach, where n=row, r=column
// n-1             n!
//     C      = ---------
//      r-1      r!(n-r)!

//but any how we are going to cancel (n-r)! in denominator and numerator, so we can have like
// 10C3 = 10*9*8*7*6*5*4*3*2*1          10*9*8       10   9   8
        // ------------------------ == --------- === --   --  --
        //3*2*1*(7*6*5*4*3*2*1)         3*2*1         1    2   3

//So we run loop from 0 to column- and multiple the res with row-i, and then divide with i+1
//TC=O(column)
//SC=O(1)
const findElement=(row,column)=>{
    let res=1
    for(let i=0;i<column;i++){
        res=res*(row-i)
        res=res/(i+1)
    }
    return res
}
// console.log("element in pascal's triangle for given row and column is",findElement(5,1))


// PROBLEM 2:given the row number print the entire row


