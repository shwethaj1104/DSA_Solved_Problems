//input matrix
//  1 1 1 1
//  1 0 0 1
//  1 1 0 1
//  1 1 1 1
// we have to mark entire row and column of 0 value 

// output will be as below
//  1 0 0 1
//  0 0 0 0
//  0 0 0 0
//  1 0 0 1

// let arr=[
//     [1,1,1,1],
//     [1,0,0,1],
//     [1,1,0,1],
//     [1,1,1,1],
// ]

let arr=[
    [1,1,1,1],
    [1,0,0,1],
    [1,0,0,1],
    [0,1,1,1],
]
const rows=arr.length
const columns=arr[0].length

// Brute force approach
// TC=(n*m) + (n+m) + (n*m)
// SC=O(1)
const setRows=(arr,i)=>{
    for(let j=0;j<columns;j++){
        if(arr[i][j]!==0){
            arr[i][j]=-1
        }
    }
    return arr
}
const setColumns=(arr,j)=>{
    for(let i=0;i<rows;i++){
        if(arr[i][j]!==0){
            arr[i][j]=-1
        }
    }
    return arr
}
const setMatrixZero=(arr,rows,columns)=>{
    for(let i=0;i<rows;i++){
        for(let j=0;j<columns;j++){
            if(arr[i][j]===0){
                setRows(arr,i)
                setColumns(arr,j)
            }
        }
    }
    for(let i=0;i<rows;i++){
        for(let j=0;j<columns;j++){
            if(arr[i][j]===-1){
                arr[i][j]=0
            }
        }
    }
return arr
}

// console.log("set Matrix xero array is--",setMatrixZero(arr,rows,columns))

//bETTER APPROACH
//TC=(n*m)+(n*m)
//SC=o(n+m)
 const betterSetMatrixZero=(arr,rows,columns)=>{
let rowsArray=new Array()
let columnsArray=new Array()
for(let i=0;i<rows;i++){
    for(let j=0;j<columns;j++){
        if(arr[i][j]===0){
            rowsArray[i]=1
            columnsArray[j]=1
        }
    }
}
for(let i=0;i<rows;i++){
    for(let j=0;j<columns;j++){
        if(rowsArray[i]===1 || columnsArray[j]===1){
            arr[i][j]=0
        }
    }
}
return arr
 }
//  console.log("set matrix zero is",betterSetMatrixZero(arr,rows,columns))

//OPTIMAL APPROACH
// TC=O(n*m)+O(n*m)
//SC=O(1)

const optimalSetMatrixZero=(arr,rows,columns)=>{
    // let rowsArray=arr[....][0] //new Array()
    // let columnsArray=arr[0][....] //new Array()
    let colum0=1;
    for(let i=0;i<rows;i++){
        for(let j=0;j<columns;j++){
            if(arr[i][j]===0){
                arr[i][0]=0
                if(j!==0){
                    arr[0][j]=0
                }else{
                    colum0=0
                }
            }
        }
    }
    for(let i=1;i<rows;i++){//we are doing n-1 and m-1 iterations here rest one iteration for firt column n row we are doing in line 122 and 127
        for(let j=1;j<columns;j++){
            if(arr[i][0]===0 || arr[0][j]===0){
                arr[i][j]=0
            }
        }
    }
    if(arr[0][0]===0){
        for(let j=0;j<=columns-1;j++){
            arr[0][j]=0
        }
    }
    if(colum0===0){
        for(let i=0;i<=rows-1;i++){
            arr[i][0]=0
        }
    }
    return arr
     }
console.log("set matrix zero is",optimalSetMatrixZero(arr,rows,columns))