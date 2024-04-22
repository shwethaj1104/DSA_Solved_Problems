let arr=[1,2,2,3,4,0,6,8]
//we will just iterate from 0 to n-1 and check if the i+1 index is greater then or equal to ith index
let firstIndex=-arr[0]
let isSorted=true
for(let i=1;i<=arr.length-1;i++){
if(arr[i]<firstIndex && i!=arr.length){
    isSorted=false
}
firstIndex=arr[i]
}
// console.log("Is the given array soretd ? ",isSorted)

let arr2=[1,2,2,3,4,6,8,6]
let isSorted2=true
for(let i=0;i<=arr2.length-1;i++){
if(arr2[i]>arr2[i+1]){
    isSorted2=false
}
}
console.log("Is the given array soretd ? ",isSorted2)