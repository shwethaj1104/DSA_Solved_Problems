let arr=[0,1,2,0,1,2,1,2,0,0,0,1,]
// let output=[0,0,0,0,0,1,1,1,1,2,2,2]

//Brute force
//TC=O(N)
//SC=O(N)

const sortArray=(arr,n)=>{
let zeros=new Array()
let ones=new Array()
let twos=new Array()
for(let i=0;i<=n-1;i++){
    if(arr[i]===0){
        zeros.push(arr[i])
    }
    else if(arr[i]===1){
        ones.push(arr[i])
    }
else{
    twos.push(arr[i])
}
}
 arr=[...zeros,...ones,...twos]
return arr
}
// console.log("sorted array--",sortArray(arr,arr.length))

//Better approach- instead of keeping array's to store 0,1,2... keep count variables to count number of 0,1,2
//after iterating we will have number of 0,1,2
//then run loop manually and add 0,1,2 according to there respective count

//TC=O(N+N)=O(2N)
//SC=O(1)
const betterSort=(arr,n)=>{
    let countZero=0
    let countOne=0
    let countTwo=0
    for(let i=0;i<=n-1;i++){
        if(arr[i]===0)countZero++
        else if(arr[i]===1)countOne++
        else if(arr[i]===2)countTwo++
    }
    for(let i=0;i<=(countZero-1);i++){
        arr[i]=0
    }
    for(let i=countZero;i<=(countZero+countOne-1);i++){
        arr[i]=1
    }
    for(let i=countZero+countOne;i<=(countZero+countOne+countTwo-1);i++){
        arr[i]=2
    }
    return arr
}
// console.log("sorted array--",betterSort(arr,arr.length))

//optimal solution
// WE WILL CONSIDER 3 POINTS LOW, MID, HIGH
// let's say we have an array of 0,1,2 in the fasion of 
// 0 -> (low-1) are 0's
// low -> (mid-1) are 1's
// mid -> high are unsorted array with 0,1,2
// (high+1) -> (n-1) are 2's
// [0,0,0,0,0,    1,1,1,1,1,       0,2 1,2,1,0,1,0,      2,2,2,2,2]
//  |       |     |       |        |             |       |       |
//  0     low-1  low    mid+1     mid           high   high+1   n-1

// so now we have to sort mid to high
// if arr[mid]==0 --> swap(arr[mid],arr[low]) --> low++ mid++
// [0,0,0,0,0,  0,  1,1,1,1,   1,    2 1,2,1,0,1,0,      2,2,2,2,2]
//  |           |   |          |     |           |       |       |
//  0        low-1  low        mid+1 mid         high   high+1   n-1

//if arr[mid]===1 --> mid++

//if(arr[m]===2)--> swap(arr[mid],arr[high]) --> high --

// const swap=(a,b)=>{
//     let temp=a;
//     a=b;
//     b=temp
//     return [a,b]
// }

const optimalSort=(arr,n)=>{
    let low=0;
    let mid=0;
    let high=n-1
    while(mid>high){
        return arr
    }
    while(mid<=high){
        if(arr[mid]===0){
            // swap(arr[mid],arr[low])
            let temp=arr[mid]
            arr[mid]=arr[low]
            arr[low]=temp
            low++
            mid++
        }
        else if(arr[mid]===1){
            mid++
        }
        else if(arr[mid]===2){
            // swap(arr[mid],arr[high])
            let temp=arr[mid]
            arr[mid]=arr[high]
            arr[high]=temp
            high--
        }
    }
    return arr
}
console.log("sorted array---",optimalSort(arr,arr.length))

//TC=O(N)
//SC=o(1)