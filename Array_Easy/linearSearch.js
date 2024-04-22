let arr=[2,1,4,6,3]
let num=4
// find 4th first occurance index
//output=2

function linearSearch(arr,n,num){
    for(let i=0;i<=n-1;i++){
        if(arr[i]===num){
            return i
        }
    }
    return -1
}

console.log(`Number ${num} is at index ${linearSearch(arr,arr.length,num)} in array`)