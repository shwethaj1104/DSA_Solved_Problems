let arr=[1,2,3,4,5,6]
// output=[2,3,4,5,6,1]

// TC=O(N)
// SC=O(1)
//by 1 place
// function leftRotateBy1Place(inputArr,n){
// let temp=inputArr[0]
//     for(let i=1;i<=n;i++){
//     inputArr[i-1]=inputArr[i]
//     }
//     inputArr[n-1]=temp
//     return inputArr
// }


// TC=o(d)+o(n-d)+o(d)==>o(n+d)
//sc=O(d)
function leftRotateBy1Place(inputArr,n,d){
    d=d%n//if d=8 then we need to run loop only once
let temp=new Array
    for(let i=0;i<=d-1;i++){
temp[i]=inputArr[i]//temp=[1,2]
    }
    for(let i=d;i<=n;i++){
    inputArr[i-d]=inputArr[i]//[3,4,5,6]
    }
console.log('output-',inputArr)
for(let i=n-d;i<n;i++){
    inputArr[i]=temp[i-(n-d)]//[3,4,5,6,1,2]
}
    return inputArr
}

console.log(leftRotateBy1Place(arr,arr.length-1,2))

//if we have to remove space compelxity-> most optimal solution
let arr1=[1,2,3,4,5,6,7] 
let d=2
// output=[3,4,5,6,7,1,2]
// reverse first d elements==[2,1,3,4,5,6,7] -->TC=o(d)
// reverse d to n elements==[2,1,7,6,5,4,3]  -->TC=o(n-d)
// reverse entire array ==[3,4,5,6,7,1,2]    -->TC=o(n)
//TC=o(2n)
//SC=o(1)
function reverse(inputArr,start,end){
    while(start<end){
        let temp=inputArr[start]
        inputArr[start]=inputArr[end]
        inputArr[end]=temp
        start++
        end--
    }
}
function leftRotateOptimal(input,n,d){
    reverse(input,0,d-1)
    reverse(input,d,n)
    reverse(input,0,n)
    return input
}

console.log("optimal solution---",leftRotateOptimal(arr1,arr1.length-1,d%arr1.length))