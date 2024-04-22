let arr=[1,0,2,3,0,4,5,0,0,6,0,0]
// output=[1,2,3,4,5,6,0,0,0,0]

//brute force approach
//TC:o(n+d)
//SC=O(n)
let temp=new Array;
function moveZeros(arr,n){
    let zeroArr=new Array;
for(let i=0;i<=n-1;i++){
if(arr[i]!==0){
temp.push(arr[i])
}else{
    zeroArr.push(arr[i])
}
}
let d=zeroArr.length
for(let i=(n-d);i<=n-1;i++){
temp[i]=zeroArr[i-(n-d)]
}
}
console.log("array---",moveZeros(arr,arr.length),temp)

//since we already know that zeros will be concatinated to array at last for the remaining positions no need to store them io zerArray

//better approach
//keep 2 pointers and check if it is zero, then swap or else just move
//step 1=find the first index of zero
//step 2= i=j+1 and iterate till n-1 and check if ith index is nonzero then swap else move i 
// TC=O(N)S
// SC=O(1)
let arr1=[0,1,0,2,3,0,0,4,5,0,6]
function moveZerosBetter(arr,n){
let j=-1
for(let i=0;i<=n-1;i++){
    if(arr[i]===0){
        j=i;
        break
    }
}
console.log("j---",j)
for(let i=j+1;i<=n-1;i++){
    if(arr[i]!==0){
        let temp=arr[j]
        arr[j]=arr[i]
        arr[i]=temp
        j++
    }
}
return arr
}
console.log("array better---",moveZerosBetter(arr1,arr1.length))