let arr=[1,1,2,3,3,4,4,5,5,34567,34567]
// output=2

//brute force approach
//TC=O(N*N) ====O(N**2)
//SC=O(1)
function numAppearsOnes(arr,n){
    for(let i=0;i<=n-1;i++){
let num=arr[i]
let count=0
for(let j=0;j<=n-1;j++){
    if(arr[j]===num){
        count++
    }
}
if(count===1){
    return num  // arr[i]
}
    }
}

// console.log("number that appears only one's is--",numAppearsOnes(arr,arr.length))


//BETTER APPROACH--using hashed arrays
// tc=o(3n)
//sc=o(max number size)
function betternumAppearsones(arr,n){
    let hashArraySize=-1
    for(let i=0;i<=n;i++){
        if(arr[i]>hashArraySize){
            hashArraySize=arr[i]
        }
    }
let hashArray=new Array(hashArraySize+1).fill(0)
for(let i=0;i<=n-1;i++){
    hashArray[arr[i]]++
}
for(let i=0;i<=hashArray.length-1;i++){
    if(hashArray[i]===1){
        return i
    }
}
}
// console.log("num that appears one's is",betternumAppearsones(arr,arr.length))
//but here if we have bigger  number like [1,1,2,3,3,4,4,333333,333333]//array of size 333333 will be created which is not better approach

//BEST APPROACH --> use map
//TC=O(N + n/2+1)
//SC=O(N/2 +1 )
function bestnumAppearsones(arr,n){
let mapArray=new Map()
for(let i=0;i<=n-1;i++){
    if(mapArray[arr[i]]){
        mapArray[arr[i]]=mapArray[arr[i]]+1
    }else{
    mapArray[arr[i]]=1
    }
}
for(let key in mapArray){
    if(mapArray[key]===1){
        return key
    }
}
}
// console.log("num that appears one's is",bestnumAppearsones(arr,arr.length))

//OPTIMAL APPROACH--using XOR
//TC=O(N)
//SC=O(1)
function optimalNumAppearsones(arr,n){
let XOR=0;
for(let i=0;i<=n-1;i++){
    XOR=XOR^arr[i]
}
return XOR
}
console.log("num that appears one's is",optimalNumAppearsones(arr,arr.length))