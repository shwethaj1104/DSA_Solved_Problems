let arr=[102,4,100,1,101,3,2,1,1,5]

// consecutive sequences for example are [1,2,3,4], [100,101,102]
// the longest among all the consecutive sequences in given array is [1,2,3,4,5] with length=5
//TC=o(n**2)
//SC=O(1)
const linearSearch=(arr,num,n)=>{
    for(let i=0;i<=n-1;i++){
        if(arr[i]===num){
            return true
        }
    }
    return false
}
const longestConsecutive=(arr,n)=>{
let longestArrayLength=1;
for(let i=0;i<=n-1;i++){
    let x=arr[i]
    let count=1
    while(linearSearch(arr,x+1,n)===true){
        x=x+1
        count=count+1
    }
    longestArrayLength=Math.max(longestArrayLength,count)
}
return longestArrayLength
}
// console.log("longest consecutive array",longestConsecutive(arr,arr.length))

//better solution
//sort the array and then iterate for consecutive array

let arr1=[100,102,100,101,101,4,3,2,3,2,1,1,1,2,5,99,97,98]

//TC=O(2N)
//SC=O(1)

const betterConsecutive=(arr,n)=>{
//sort
// sortArray(0,n-1,arr);
arr.sort(function(a,b){
    return a-b
})
let longestArrayLength=1
let lastSmaller=1
let count=1
for(let i=0;i<=n-1;i++){
if(arr[i]===lastSmaller+1){
    lastSmaller=arr[i]
    count=count+1
}else if(arr[i]===lastSmaller){

}else{
    lastSmaller=arr[i]
    count=1
}
longestArrayLength=Math.max(longestArrayLength,count)
}
return longestArrayLength
}
// console.log("consecutive array is",betterConsecutive(arr1,arr1.length))


//OPTIMAL APPROACH
//add elements to set--unique
//now iterate over the set
//if set element has setElement-1 then do nothing
//if not, which means that is the starting element, so if set has setElement+1 then continue to iterate and increase count


//TC=o(3n)
//SC=O(n)
const optimalLongestArray=(arr,n)=>{
let set=new Set()
let longestArrayLnegth=0;

for(let i=0;i<=n-1;i++){
    set.add(arr[i])//o(n)
}
for(let val of set){//o(n)
    if(!set.has(val-1)){
        let count=1
        let x=val
        while(set.has(x+1)){//o(n)
            count=count+1
            x=x+1
        }
        longestArrayLnegth=Math.max(longestArrayLnegth,count)
    }
}
}
console.log("longest consecutive array",optimalLongestArray(arr,arr.length))
