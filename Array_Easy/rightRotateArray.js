let input=[1,2,3,4,5,6]
let d=2
// ouput=[5,6,1,2,3,4]

//brute force approach
//TC=n-d
//SC=o(d)+o(n)
function rightRotate(arr,n,d){
let j=0
let temp=new Array
for(let i=n-d;i<=n-1;i++){
temp[j]=arr[i]
j++
}
let tempArr=new Array
for(let i=0;i<n-d;i++){
    tempArr[i+d]=arr[i]
}
for(let i=0;i<d;i++){
    tempArr[i]=temp[i]
}
arr=[...tempArr]
return arr
}
console.log("output--",rightRotate(input,input.length,d))


//better approch
//TC=O(2N)
//SC=O(1)
let arr1=[1,2,3,4,5,6,7]
function reverse(input,start,end){
for(i=start;i<=end;i++){
    let temp=input[start]
    input[start]=input[end]
    input[end]=temp
    start++
    end--
}
}
function betterRightRotate(arr1,n,d){
    reverse(arr1,0,n-d-1)
    reverse(arr1,n-d,n-1)
    reverse(arr1,0,n-1)
    return arr1
}
console.log("better output--",betterRightRotate(arr1,arr1.length,d))
