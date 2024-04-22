let arr=[1,2,3,1,1,1,1,4,2,3]
let k=7//sum

//output: longest array with sum k=3 is [1,1,1]

//brute force approach
//get all the posssible sub array's and summate them
//TC==O(n*n*n)//3 loops considering i to j loop also equivalent to n
//SC=O(n*n)
function bruteLongestSubArray(arr,n,k){
let longestLength=0;
let longestSubArray;//SC=N
for(let i=0;i<=n-1;i++){
for(let j=i;j<=n-1;j++){
let sum=0;
let subArray=new Array();//SC=N
for(let m=i;m<=j;m++){
    subArray.push(arr[m])
    sum=sum+arr[m]
    if(sum===k){
        if(subArray.length>longestLength){
            longestLength=subArray.length
            longestSubArray=subArray
        }
    }
}
}
}
return longestSubArray
}
// console.log("longest subarray with sum k is",bruteLongestSubArray(arr,arr.length,k))



//better solution if we have both positive and negative numbers and zeros---optimal solution
//TC=O(N**2)
//SC=O(n)

function betterLongestSubArray(arr,n,k){
    let sum=0;
    let max=0;
    let map=new Map()
for(let i=0;i<n;i++){
sum=sum+arr[i]
if(sum===k){
    max=Math.max(max,i+1)
}
if(map.has(sum-k)){
    let mapIndex=map.get(sum-k)
    max=Math.max(max,i-mapIndex)
}
else if(!map.has(sum)){
    map.set(sum,i)
}
}
return max
}
// console.log("longest sub array with sum k is",betterLongestSubArray(arr,arr.length,k))

//OPTIMAL SOLUTION--- for array with positives and zeros only---using 2 pointer approach
//TC=O(n)
//SC=O(1)
function optimalLongestSubArray(arr,n,k){
let left=0
let right=0
let sum=0
let maxLength=0
while(right<n){
    sum=sum+arr[right]
    if(sum===k){
        maxLength=Math.max(maxLength,right-left+1)
    }else if(sum>k){
        sum=sum-arr[left]
        left++
    }
    right++
}
return maxLength
}
console.log("longest sub array is--",optimalLongestSubArray(arr,arr.length,k))