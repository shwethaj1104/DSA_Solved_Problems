let arr=[1,2,2,4,5,6,6,6,8,9,9]
// set=[1,2,4,5,6,8]'
// outout arr=[1,2,4,5,6,8,9,6,8,9]
//index=7--> in the above array untill index 7 is the unique elements

//brute force approach
//TC-n+nlogn
//SC-O(n)
let index=0;
let set=new Set();
for(let i=0;i<=arr.length-1;i++){
        set.add(arr[i])
}
for(let i of set){
    arr[index]=i//assigning the set values to original array and giving index to identify till which index in arr is the unique elements
    index++
}
console.log("duplicates removed array-----",set,arr,index)

//better approach
// keep 2 pointers and keep assigning j index val to arr[i+1] if it is not equal
//TC-o(n)
//SC-o(1)
let arr2=[1,2,2,4,5,6,6,6,8,9,9]
let i=0
for(let j=1;j<=arr2.length-1;j++){
    if(arr2[j]!==arr2[i]){
        arr2[i+1]=arr2[j]
        i++
    }
}
console.log("better approach unique array and length is",arr2,i+1)