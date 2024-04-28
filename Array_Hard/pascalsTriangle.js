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
//output is 6

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
// console.log("element in pascal's triangle for given row and column is",findElement(row-1,column-1))


// PROBLEM 2:given the row number print the entire row

//brute force approach
//we know that every element can be found with nCr formula, and a row will have row number of columns, for 5 rows there will be 5 columns
//TC=O(row*column)
//SC-O(1)
const getEachElement=(row,column)=>{
    let res=1
    for(let i=0;i<column;i++){
        res=res*(row-i)
        res=res/(i+1)
    }
    return res
}
const findEntirerow=(row)=>{
    for(let i=1;i<=row;i++){
        console.log(getEachElement(row-1,i-1))
    }
}
// console.log("pascal's traingle row for given row is",findEntirerow(row))

//OPTIMAL APPROACH, row=5
// output =    1       4      6       4         1
// index       0       1      2       3         4
// nCr result= 1      1*4    1*4*3   1*4*3*2  1*4*3*2*1
//                   -----   ------  -------  --------
//                     1      1*2     1*2*3    1*2*3*4

//that is res *  (row-i)
//               -------
//                  i

//TC=0(row)
//SC=O(1)
const optimalFindRow=(row)=>{
    let res=1
    for(let i=1;i<=row;i++){
        console.log("pascal's traimgle elements",res)
        res=res*(row-i)/i
    }
}
// console.log("pascal's traingle row for given row is",optimalFindRow(row))


//PROBLEM 3: Print entire pascal's triangle for given n or rows