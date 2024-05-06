// let arr=[1,-1,3,2,-2,-8,1,7,10,23]
let arr=[15,-2,2,-8,1,7,10,23]

//BRUTE FOREC APPROACH
//TC=O(N**3)
//SC=O(N)

const largestSubArray=(arr)=>{
    let n=arr.length
    let longestLength=0
    for(let i=0;i<=n-1;i++){
        for(let j=i;j<=n-1;j++){
        let sum=0;
        let subArray=new Array();//SC=N
        for(let m=i;m<=j;m++){
            subArray.push(arr[m])
            sum=sum+arr[m]
            if(sum===0){
                if(subArray.length>longestLength){
                    longestLength=subArray.length
                    // longestSubArray=subArray
                }
            }
        }
        }
        }
        return longestLength
}
// console.log("brute largest sub array",largestSubArray(arr))
//TC=nlogn
//SC=n
const optimallargestSubArray=(arr)=>{
    let n=arr.length
    let longestLength=0
    let sum=0
    let map=new Map()
    for(let i=0;i<=n-1;i++){
        sum=sum+arr[i]
        if(sum===0){
            longestLength=Math.max(longestLength,i+1)
        }
        else if(map.has(sum)){
        let temp=i-map.get(sum)
        longestLength=Math.max(longestLength,temp)
        }else{
            map.set(sum,i)
        }
        }
        return longestLength
}
console.log("Optimal largest sub array",optimallargestSubArray(arr))