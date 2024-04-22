let arr=[
    [1,  2,  3,  4],
    [5,  6,  7,  8],
    [9,  10, 11, 12],
    [13, 14, 15, 16]
]

// output=[
//     [13,9,5,1],
//     [14,10,6,2],
//     [15,11,7,3],
//     [16,12,8,4]
// ]

//brute force approach

// we have to move the matrix in 90 degress, we see a pattern Here
//elements are moving like below
// [i,j]  -->  [j,n-1-i]
// 0,0     ->0,3
// 0,1     ->1,3
// 0,2     ->2,3
// 0,3     ->3,3

//1,0    ->0,2
//1,1    ->1,2
//1,2    ->2,2
//1,3    ->3,2

//TC=O(n*m)
//SC=O(n*m)
const rotatematrix=(arr)=>{
    const rows=arr.length
const columns=arr[0].length
let outputArr=new Array(rows).fill(0).map(() => new Array(columns).fill(0));
for(let i=0;i<rows;i++){
    for(let j=0;j<columns;j++){
        outputArr[j][rows-1-i]=arr[i][j]
    }
}
return outputArr
}
// console.log("rotated matrix is",rotatematrix(arr))

//OPTIMAL APPROACH
//column are the rows in reversed order, so transpose first and then reverse it

//transpose--> so the diagonal elements are in same place, and others are swapping exactly with their opposite position
// TransaposedArr=[
//     [1,  5,  9,  13],
//     [2,  6,  10,  14],
//     [3,  7, 11, 15],
//     [4, 8, 12, 16]
// ]

//reverse each row--> output
// output=[
//     [13,9,5,1],
//     [14,10,6,2],
//     [15,11,7,3],
//     [16,12,8,4]
// ]

//TC=O(n/2 * n/2)+O(N*N)
//SC=O(1)
const reverse=(start,end,arr)=>{
    let startPoint=0
    let endpoint=end
    for(let j=0;j<end;j++){
while(startPoint<endpoint){
    let temp=arr[start][startPoint];
    arr[start][startPoint]=arr[start][endpoint]
    arr[start][endpoint]=temp
    startPoint++
    endpoint--
}
    }
    return arr
}
const optimalRotate=(arr)=>{
    const rows=arr.length
    const columns=arr[0].length
    //transapose
    for(let i=0;i<=rows-2;i++){ //n/2 * n/2
        for(let j=i+1;j<=columns-1;j++){
            // swap(arr[i][j],arr[j][i])
            let temp=arr[i][j]
             arr[i][j]=arr[j][i]
            arr[j][i]=temp
        }
    }
    //reverse the rows
    for(let i=0;i<rows;i++){
        reverse(i,rows-1,arr)
    }
    return arr
}
console.log("optimal rotate arr",optimalRotate(arr))