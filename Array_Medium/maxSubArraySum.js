
// let arr=[-2,-3,4,-1,-2,1,5,-3]  //output=7
let arr=[-2,1,-3,4,-1,2,1,-5,4] //output=6
// let arr=[-2,-1,-3,-5,-4] //output=-1

//TC=O(n**2)
//SC=O(1)
const maxSubArray=(arr,n)=>{
    let temp=0;
    for(let i=0;i<=n-1;i++){
    let sum=0;
        for(let j=i;j<=n-1;j++){
                sum=sum+arr[j]
                if(temp<sum){
                    temp=sum
                }
        }
    }
    return temp
}

// console.log("max sub array sum is--",maxSubArray(arr,arr.length))

//kadane's algorithm
//iterate from 0 to n-1
//keep n2 variables max and sum
//if sum is negative then replace sum=0
//if max=0, just put max=sum
//if sum>max -> max=sum

//TC=O(n)
//SC=O(1)
const betterMaxSumArraySum=(arr,n)=>{
    let sum=0
    let max=0
    for(let i=0;i<=n-1;i++){
        sum=sum+arr[i]
        if(max===0)max=sum
        if(max<sum)max=sum
        if(sum<0)sum=0
    }
    return max
}
// console.log("max sub array is--",betterMaxSumArraySum(arr,arr.length))

//follow up question- to print the max sub array
//TC=O(n)
//SC=O(1)
const betterMaxSumArray=(arr,n)=>{
    let sum=0
    let max=0
    let maxStartIndex=0
    let maxEndIndex=0
    let start=0;
    for(let i=0;i<=n-1;i++){
        sum=sum+arr[i]
        if(max===0)max=sum
        if(max<sum){
            max=sum
            maxStartIndex=start
            maxEndIndex=i
        }
        if(sum<0){
            sum=0
            start=i+1
        }
    }
    console.log("max--",maxStartIndex,maxEndIndex)
    return max
}
console.log("max sub array is--",betterMaxSumArray(arr,arr.length))