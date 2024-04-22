let arr=[1,2,3,-3,1,1,1,4,2,-3]
let k=3
//output=8 , there are 8 sub arrays in arr with sum=3

//BRUTE FORCE APPROACH
//TC=O(n**3)
//SC=O(1)
const bruteSubArray=(arr,n,)=>{
    let count=0
for(let i=0;i<=n-1;i++){
    for(let j=i;j<=n-1;j++){
        sum=0
        for(let m=i;m<=j;m++){
            sum=sum+arr[m]
        }
        if(sum===k){
            count++
        }
    }
}
return count
}
// console.log("number sub arrays with sum k is",bruteSubArray(arr,arr.length,k))

//BETTER APPROACH
//TC=O(N**2)
//SC=O(1)
const betterSubArray=(arr,n,)=>{
    let count=0
for(let i=0;i<=n-1;i++){
    let sum=0
    for(let j=i;j<=n-1;j++){
        sum=sum+arr[j]
        if(sum===k){
            count++
        }
    }
}
return count
}
// console.log("number sub arrays with sum k is",betterSubArray(arr,arr.length,k))

//optimal approch
//TC=O(n)
//SC=O(n)
const optimalSubArray=(arr,k)=>{
    let count=0
    let presum=0
    let n=arr.length
    let map=new Map()
    map[0]=1
for(let i=0;i<=n-1;i++){
    presum=presum+arr[i]
    let remove=presum-k
    if(map[remove]){
        count=count+map[remove]
    }
    if(map[presum]){
        map[presum]=map[presum]+1
    }else{
    map[presum]=1
    }
}
return count
}
console.log("number sub arrays with sum k is",optimalSubArray(arr,k))
