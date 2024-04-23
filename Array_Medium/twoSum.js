let arr=[2,6,5,8,11]
let target=14
//if sum of any 2 numbers in arr is equal to target, then it is a match--return yes else no

function twoSumBrute(arr,n,target){
    let matchExist=false
for(let i=0;i<=n-1;i++){
    for(let j=i+1;j<=n-1;j++){
        if(i===j)continue
            if(arr[i]+arr[j]===target){
                matchExist=true 
                console.log("matched index",i,j)   
            }
    }
}
return matchExist
}
// console.log("Does the match exists --", twoSumBrute(arr,arr.length,target))
// tc=o(n*n)
// sc=o(1)
// ___________________________________________________________________________

//better solution
//TC=O(N log n)----log n for find operation in map
//SC=O(N)
function better2Sum(arr,n,target){
let map=new Map()
for(let i=0;i<=n-1;i++){
    if(map.has(target-arr[i])){
        return [map.get(target-arr[i]),i]
    }
    map.set(arr[i],i)
}
}
// console.log("does the match exist--",better2Sum(arr,arr.length,target))
//above is the best solution if we ahve to return indexes
//if we just need to find if the match is there or not follow below approach

//sort the array---[2,5,6,8,11]
// now add left and right index--if it is lesser which means we have to increase the count--left++, if it is greater then we have to decrease the count-->right--


function best2Sum(arr,n,target){
let left=0;
let right=n-1;
arr=arr.sort(function (a, b) {  return a - b;  })//o(nlogn)
while(left<right){
    if(arr[left]+arr[right]===target){return "yes"}
    else if(arr[left]+arr[right]<target){left++}
    else{right--}
}
return "no"
}
console.log("is match exist--",best2Sum(arr,arr.length,target))

// TC=O(N)+o(nlogn)
// SC=O(1)