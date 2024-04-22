
let arr=[1,1,0,0,1,1,1,0,1,1]
// output=3
let output=0;
let temp=0;

//TC:O(n)
//SC=O(1)
function maxConsecutiveOnes(arr,n){
for(let i=0;i<=n-1;i++){
    if(arr[i]===1){
temp++
if(temp>output){
    output=temp
}
    }else{
        temp=0
    }
}
return output
}
console.log("max number of consecutive one's is",maxConsecutiveOnes(arr,arr.length))